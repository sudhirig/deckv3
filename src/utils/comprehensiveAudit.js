/**
 * Comprehensive Visual Audit for ARIA Deck
 * Run this in browser console to audit all slides
 * Non-breaking - Only observes and reports
 */

export const runComprehensiveAudit = () => {
  const report = {
    timestamp: new Date().toISOString(),
    totalSlides: 0,
    issues: {
      critical: [],
      high: [],
      medium: [],
      low: []
    },
    slideReports: [],
    summary: {
      overflowIssues: 0,
      textIssues: 0,
      animationIssues: 0,
      responsiveIssues: 0,
      accessibilityIssues: 0
    }
  }

  console.log('🔍 Starting Comprehensive ARIA Deck Audit...\n')
  console.log('📊 Analyzing 106 slides for UI/UX issues...\n')

  // Get current slide info
  const getCurrentSlideInfo = () => {
    const url = window.location.pathname
    const slideMatch = url.match(/\/(\d+)/)
    const slideNumber = slideMatch ? parseInt(slideMatch[1]) : 1
    const slideTitle = document.querySelector('h1')?.textContent || 'Unknown Slide'
    return { slideNumber, slideTitle }
  }

  // Comprehensive checks for current slide
  const auditCurrentSlide = () => {
    const { slideNumber, slideTitle } = getCurrentSlideInfo()
    const slideReport = {
      number: slideNumber,
      title: slideTitle,
      issues: [],
      warnings: [],
      score: 100
    }

    console.log(`\n📍 Slide ${slideNumber}: ${slideTitle}`)
    console.log('================================')

    // 1. Overflow Checks
    const checkOverflow = () => {
      const elements = document.querySelectorAll('*')
      let overflowCount = 0
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        const style = window.getComputedStyle(el)
        
        // Check horizontal overflow
        if (el.scrollWidth > el.clientWidth) {
          const isScrollable = style.overflowX === 'auto' || style.overflowX === 'scroll'
          if (!isScrollable && rect.width > 0) {
            overflowCount++
            slideReport.issues.push({
              type: 'OVERFLOW_X',
              severity: 'HIGH',
              element: el.className || el.tagName,
              details: `Width overflow: ${el.scrollWidth}px > ${el.clientWidth}px`
            })
          }
        }
        
        // Check vertical overflow
        if (el.scrollHeight > el.clientHeight + 10) {
          const isScrollable = style.overflowY === 'auto' || style.overflowY === 'scroll'
          if (!isScrollable && rect.height > 0 && el.tagName !== 'BODY' && el.tagName !== 'HTML') {
            overflowCount++
            slideReport.warnings.push({
              type: 'OVERFLOW_Y',
              severity: 'MEDIUM',
              element: el.className || el.tagName,
              details: `Height overflow: ${el.scrollHeight}px > ${el.clientHeight}px`
            })
          }
        }
      })
      
      if (overflowCount > 0) {
        report.summary.overflowIssues++
        console.warn(`  ⚠️ Overflow issues: ${overflowCount}`)
      } else {
        console.log('  ✅ No overflow issues')
      }
      
      return overflowCount
    }

    // 2. Text Readability Checks
    const checkTextReadability = () => {
      const textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, li')
      let textIssues = 0
      
      textElements.forEach(el => {
        if (!el.textContent.trim()) return
        
        const style = window.getComputedStyle(el)
        const fontSize = parseFloat(style.fontSize)
        const lineHeight = parseFloat(style.lineHeight)
        const color = style.color
        
        // Check font size
        if (fontSize < 12) {
          textIssues++
          slideReport.warnings.push({
            type: 'SMALL_TEXT',
            severity: 'LOW',
            element: el.className || el.tagName,
            details: `Font size ${fontSize}px is below minimum (12px)`
          })
        }
        
        // Check line height
        if (lineHeight && fontSize && (lineHeight / fontSize) < 1.2) {
          textIssues++
          slideReport.warnings.push({
            type: 'CRAMPED_TEXT',
            severity: 'LOW',
            element: el.className || el.tagName,
            details: `Line height ratio ${(lineHeight/fontSize).toFixed(2)} is too tight`
          })
        }
        
        // Check for text overflow
        if (style.textOverflow !== 'ellipsis' && el.scrollWidth > el.clientWidth) {
          textIssues++
          slideReport.issues.push({
            type: 'TEXT_OVERFLOW',
            severity: 'MEDIUM',
            element: el.className || el.tagName,
            details: `Text overflows container without ellipsis`
          })
        }
      })
      
      if (textIssues > 0) {
        report.summary.textIssues++
        console.warn(`  ⚠️ Text issues: ${textIssues}`)
      } else {
        console.log('  ✅ Text readability good')
      }
      
      return textIssues
    }

    // 3. Responsive Design Checks
    const checkResponsive = () => {
      let responsiveIssues = 0
      
      // Check for fixed widths
      const elements = document.querySelectorAll('[style*="width"]')
      elements.forEach(el => {
        const style = el.getAttribute('style')
        if (style && style.includes('px') && !style.includes('max-width')) {
          const width = parseFloat(style.match(/width:\s*(\d+)px/)?.[1] || 0)
          if (width > 500) {
            responsiveIssues++
            slideReport.warnings.push({
              type: 'FIXED_WIDTH',
              severity: 'MEDIUM',
              element: el.className || el.tagName,
              details: `Fixed width ${width}px may break on mobile`
            })
          }
        }
      })
      
      // Check viewport usage
      const viewportWidth = window.innerWidth
      if (viewportWidth < 1366) {
        const wideElements = document.querySelectorAll('*')
        wideElements.forEach(el => {
          const rect = el.getBoundingClientRect()
          if (rect.width > viewportWidth) {
            responsiveIssues++
            slideReport.issues.push({
              type: 'VIEWPORT_OVERFLOW',
              severity: 'HIGH',
              element: el.className || el.tagName,
              details: `Element ${rect.width}px wider than viewport ${viewportWidth}px`
            })
          }
        })
      }
      
      if (responsiveIssues > 0) {
        report.summary.responsiveIssues++
        console.warn(`  ⚠️ Responsive issues: ${responsiveIssues}`)
      } else {
        console.log('  ✅ Responsive design ok')
      }
      
      return responsiveIssues
    }

    // 4. Animation Performance Checks
    const checkAnimations = () => {
      let animationIssues = 0
      
      const animatedElements = document.querySelectorAll('[style*="animation"], [style*="transition"]')
      animatedElements.forEach(el => {
        const style = window.getComputedStyle(el)
        const transition = style.transition
        const animation = style.animation
        
        // Check for non-performant properties
        if (transition && !transition.includes('transform') && !transition.includes('opacity')) {
          if (transition.includes('left') || transition.includes('top') || 
              transition.includes('width') || transition.includes('height')) {
            animationIssues++
            slideReport.warnings.push({
              type: 'NON_GPU_ANIMATION',
              severity: 'MEDIUM',
              element: el.className || el.tagName,
              details: `Animating non-GPU properties: ${transition}`
            })
          }
        }
        
        // Check for too many animations
        const allAnimated = document.querySelectorAll('[style*="animation"]')
        if (allAnimated.length > 10) {
          animationIssues++
          slideReport.warnings.push({
            type: 'TOO_MANY_ANIMATIONS',
            severity: 'MEDIUM',
            details: `${allAnimated.length} concurrent animations may impact performance`
          })
        }
      })
      
      if (animationIssues > 0) {
        report.summary.animationIssues++
        console.warn(`  ⚠️ Animation issues: ${animationIssues}`)
      } else {
        console.log('  ✅ Animations optimized')
      }
      
      return animationIssues
    }

    // 5. Accessibility Checks
    const checkAccessibility = () => {
      let accessibilityIssues = 0
      
      // Check images for alt text
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        if (!img.alt) {
          accessibilityIssues++
          slideReport.warnings.push({
            type: 'MISSING_ALT',
            severity: 'LOW',
            element: 'img',
            details: `Image missing alt text: ${img.src.slice(-30)}`
          })
        }
      })
      
      // Check interactive elements for keyboard access
      const interactiveElements = document.querySelectorAll('button, a, [onClick]')
      interactiveElements.forEach(el => {
        const tabindex = el.getAttribute('tabindex')
        if (tabindex === '-1') {
          accessibilityIssues++
          slideReport.warnings.push({
            type: 'KEYBOARD_ACCESS',
            severity: 'MEDIUM',
            element: el.className || el.tagName,
            details: 'Interactive element not keyboard accessible'
          })
        }
      })
      
      // Check color contrast (simplified)
      const textElements = document.querySelectorAll('p, span, h1, h2, h3')
      textElements.forEach(el => {
        const style = window.getComputedStyle(el)
        const color = style.color
        const bgColor = style.backgroundColor
        
        // Basic visibility check
        if (color === bgColor && color !== 'rgba(0, 0, 0, 0)') {
          accessibilityIssues++
          slideReport.issues.push({
            type: 'NO_CONTRAST',
            severity: 'HIGH',
            element: el.className || el.tagName,
            details: 'Text and background have same color'
          })
        }
      })
      
      if (accessibilityIssues > 0) {
        report.summary.accessibilityIssues++
        console.warn(`  ⚠️ Accessibility issues: ${accessibilityIssues}`)
      } else {
        console.log('  ✅ Accessibility ok')
      }
      
      return accessibilityIssues
    }

    // 6. Layout and Spacing Checks
    const checkLayout = () => {
      let layoutIssues = 0
      
      // Check for overlapping elements
      const elements = Array.from(document.querySelectorAll('div, section, article'))
      for (let i = 0; i < elements.length - 1; i++) {
        const rect1 = elements[i].getBoundingClientRect()
        const rect2 = elements[i + 1].getBoundingClientRect()
        
        if (rect1.bottom > rect2.top && rect1.top < rect2.bottom &&
            rect1.right > rect2.left && rect1.left < rect2.right) {
          const style1 = window.getComputedStyle(elements[i])
          const style2 = window.getComputedStyle(elements[i + 1])
          
          if (style1.position !== 'absolute' && style2.position !== 'absolute' &&
              style1.position !== 'fixed' && style2.position !== 'fixed') {
            layoutIssues++
            slideReport.warnings.push({
              type: 'OVERLAPPING_ELEMENTS',
              severity: 'MEDIUM',
              details: 'Elements may be overlapping'
            })
            break // Only report once per slide
          }
        }
      }
      
      // Check z-index usage
      const zIndexElements = document.querySelectorAll('[style*="z-index"]')
      zIndexElements.forEach(el => {
        const style = window.getComputedStyle(el)
        const zIndex = parseInt(style.zIndex)
        if (zIndex > 9999) {
          layoutIssues++
          slideReport.warnings.push({
            type: 'HIGH_Z_INDEX',
            severity: 'LOW',
            element: el.className || el.tagName,
            details: `Very high z-index: ${zIndex}`
          })
        }
      })
      
      return layoutIssues
    }

    // Run all checks
    const overflowIssues = checkOverflow()
    const textIssues = checkTextReadability()
    const responsiveIssues = checkResponsive()
    const animationIssues = checkAnimations()
    const accessibilityIssues = checkAccessibility()
    const layoutIssues = checkLayout()

    // Calculate slide score
    const totalIssues = overflowIssues + textIssues + responsiveIssues + 
                        animationIssues + accessibilityIssues + layoutIssues
    slideReport.score = Math.max(0, 100 - (totalIssues * 5))
    
    // Categorize issues by severity
    slideReport.issues.forEach(issue => {
      if (issue.severity === 'HIGH') {
        report.issues.critical.push({ slide: slideNumber, ...issue })
      } else if (issue.severity === 'MEDIUM') {
        report.issues.high.push({ slide: slideNumber, ...issue })
      }
    })
    
    slideReport.warnings.forEach(warning => {
      if (warning.severity === 'MEDIUM') {
        report.issues.medium.push({ slide: slideNumber, ...warning })
      } else {
        report.issues.low.push({ slide: slideNumber, ...warning })
      }
    })
    
    // Add to report
    report.slideReports.push(slideReport)
    report.totalSlides++
    
    // Display summary for this slide
    console.log(`  📊 Score: ${slideReport.score}%`)
    if (slideReport.score >= 90) {
      console.log('  🎉 Excellent!')
    } else if (slideReport.score >= 70) {
      console.log('  👍 Good, minor improvements needed')
    } else {
      console.log('  🔧 Needs attention')
    }
    
    return slideReport
  }

  // Run audit on current slide
  const currentSlideReport = auditCurrentSlide()

  // Generate final report
  console.log('\n📊 AUDIT SUMMARY')
  console.log('================')
  console.log(`Total Slides Audited: ${report.totalSlides}`)
  console.log(`Critical Issues: ${report.issues.critical.length}`)
  console.log(`High Priority: ${report.issues.high.length}`)
  console.log(`Medium Priority: ${report.issues.medium.length}`)
  console.log(`Low Priority: ${report.issues.low.length}`)
  console.log('')
  console.log('Issue Categories:')
  console.log(`  Overflow: ${report.summary.overflowIssues} slides affected`)
  console.log(`  Text: ${report.summary.textIssues} slides affected`)
  console.log(`  Responsive: ${report.summary.responsiveIssues} slides affected`)
  console.log(`  Animation: ${report.summary.animationIssues} slides affected`)
  console.log(`  Accessibility: ${report.summary.accessibilityIssues} slides affected`)
  
  // Provide recommendations
  console.log('\n💡 TOP RECOMMENDATIONS')
  console.log('======================')
  
  if (report.issues.critical.length > 0) {
    console.log('🚨 Critical Fixes Needed:')
    report.issues.critical.slice(0, 3).forEach(issue => {
      console.log(`  - ${issue.type}: ${issue.details}`)
    })
  }
  
  if (report.summary.overflowIssues > 0) {
    console.log('\n📏 Overflow Fixes:')
    console.log('  - Add overflow: auto to containers')
    console.log('  - Use max-width: 100% on all elements')
    console.log('  - Implement horizontal scroll for tables')
  }
  
  if (report.summary.responsiveIssues > 0) {
    console.log('\n📱 Responsive Fixes:')
    console.log('  - Replace fixed widths with percentages')
    console.log('  - Use CSS Grid with auto-fit')
    console.log('  - Add media queries for < 1366px')
  }
  
  if (report.summary.animationIssues > 0) {
    console.log('\n⚡ Performance Fixes:')
    console.log('  - Use transform instead of position')
    console.log('  - Add will-change: transform')
    console.log('  - Reduce concurrent animations')
  }
  
  // Instructions for comprehensive audit
  console.log('\n📝 TO AUDIT ALL SLIDES:')
  console.log('========================')
  console.log('Navigate through each slide and run:')
  console.log('  runComprehensiveAudit()')
  console.log('Or use automated navigation (if available)')
  console.log('')
  console.log('Results will be collected for final report')
  
  // Return report for programmatic use
  return report
}

// Make available in browser console
if (typeof window !== 'undefined') {
  window.runComprehensiveAudit = runComprehensiveAudit
  console.log('✅ Comprehensive Audit loaded. Run: runComprehensiveAudit()')
}
