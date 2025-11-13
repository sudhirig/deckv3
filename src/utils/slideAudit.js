// Comprehensive Slide Audit Utility
// This runs in the browser console to check for UI/UX issues

export const runSlideAudit = () => {
  const issues = []
  const warnings = []
  const successes = []
  
  console.log('🔍 Starting ARIA Deck UI/UX Audit...\n')
  
  // 1. Check for overflow issues
  const checkOverflow = () => {
    const elements = document.querySelectorAll('*')
    elements.forEach(el => {
      if (el.scrollWidth > el.clientWidth) {
        issues.push({
          type: 'OVERFLOW_X',
          element: el.className || el.tagName,
          details: `Width: ${el.scrollWidth}px > Container: ${el.clientWidth}px`
        })
      }
      if (el.scrollHeight > el.clientHeight + 10) { // Allow 10px tolerance
        const isScrollable = window.getComputedStyle(el).overflow === 'auto' || 
                            window.getComputedStyle(el).overflow === 'scroll'
        if (!isScrollable) {
          issues.push({
            type: 'OVERFLOW_Y',
            element: el.className || el.tagName,
            details: `Height: ${el.scrollHeight}px > Container: ${el.clientHeight}px`
          })
        }
      }
    })
  }
  
  // 2. Check text readability
  const checkTextReadability = () => {
    const textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, div')
    textElements.forEach(el => {
      const style = window.getComputedStyle(el)
      const fontSize = parseFloat(style.fontSize)
      
      // Check for too small text
      if (fontSize < 12 && el.textContent.trim().length > 0) {
        warnings.push({
          type: 'SMALL_TEXT',
          element: el.className || el.tagName,
          details: `Font size: ${fontSize}px - might be hard to read`
        })
      }
      
      // Check for missing line height
      const lineHeight = parseFloat(style.lineHeight)
      if (lineHeight && fontSize && (lineHeight / fontSize) < 1.2) {
        warnings.push({
          type: 'CRAMPED_TEXT',
          element: el.className || el.tagName,
          details: `Line height ratio: ${(lineHeight/fontSize).toFixed(2)} - text might be cramped`
        })
      }
    })
  }
  
  // 3. Check color contrast
  const checkColorContrast = () => {
    const getContrastRatio = (color1, color2) => {
      // Simplified contrast check
      const getLuminance = (color) => {
        const rgb = color.match(/\d+/g)
        if (!rgb) return 1
        const [r, g, b] = rgb.map(c => {
          const val = parseInt(c) / 255
          return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
        })
        return 0.2126 * r + 0.7152 * g + 0.0722 * b
      }
      
      const l1 = getLuminance(color1)
      const l2 = getLuminance(color2)
      const lighter = Math.max(l1, l2)
      const darker = Math.min(l1, l2)
      return (lighter + 0.05) / (darker + 0.05)
    }
    
    const textElements = document.querySelectorAll('p, span, h1, h2, h3, h4')
    textElements.forEach(el => {
      const style = window.getComputedStyle(el)
      const color = style.color
      const bgColor = style.backgroundColor || 'rgb(255, 255, 255)'
      
      if (color && bgColor && bgColor !== 'rgba(0, 0, 0, 0)') {
        const contrast = getContrastRatio(color, bgColor)
        if (contrast < 3) {
          warnings.push({
            type: 'LOW_CONTRAST',
            element: el.className || el.tagName,
            details: `Contrast ratio: ${contrast.toFixed(2)} - might be hard to read`
          })
        }
      }
    })
  }
  
  // 4. Check responsive layout
  const checkResponsiveLayout = () => {
    // Check for fixed widths that might break on smaller screens
    const elements = document.querySelectorAll('*')
    elements.forEach(el => {
      const style = window.getComputedStyle(el)
      const width = style.width
      
      if (width && width.includes('px')) {
        const widthValue = parseFloat(width)
        if (widthValue > 1400) {
          issues.push({
            type: 'FIXED_WIDTH',
            element: el.className || el.tagName,
            details: `Fixed width: ${width} - might break on smaller screens`
          })
        }
      }
    })
  }
  
  // 5. Check z-index stacking
  const checkZIndexStacking = () => {
    const elements = document.querySelectorAll('[style*="z-index"]')
    const zIndexValues = []
    
    elements.forEach(el => {
      const style = window.getComputedStyle(el)
      const zIndex = parseInt(style.zIndex)
      if (!isNaN(zIndex)) {
        zIndexValues.push(zIndex)
        if (zIndex > 9999) {
          warnings.push({
            type: 'HIGH_Z_INDEX',
            element: el.className || el.tagName,
            details: `Z-index: ${zIndex} - unnecessarily high`
          })
        }
      }
    })
  }
  
  // 6. Check animation performance
  const checkAnimationPerformance = () => {
    const animatedElements = document.querySelectorAll('[style*="animation"], [style*="transition"]')
    animatedElements.forEach(el => {
      const style = window.getComputedStyle(el)
      const transition = style.transition
      
      // Check for non-GPU accelerated properties
      if (transition && !transition.includes('transform') && !transition.includes('opacity')) {
        warnings.push({
          type: 'NON_GPU_ANIMATION',
          element: el.className || el.tagName,
          details: `Animating: ${transition} - consider using transform/opacity for better performance`
        })
      }
    })
  }
  
  // 7. Check for missing alt text
  const checkAccessibility = () => {
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      if (!img.alt) {
        warnings.push({
          type: 'MISSING_ALT',
          element: 'img',
          details: `Image at ${img.src} missing alt text`
        })
      }
    })
    
    // Check for keyboard accessibility
    const interactiveElements = document.querySelectorAll('button, a, [onClick]')
    interactiveElements.forEach(el => {
      if (!el.getAttribute('tabindex') && el.tagName !== 'BUTTON' && el.tagName !== 'A') {
        warnings.push({
          type: 'KEYBOARD_ACCESS',
          element: el.className || el.tagName,
          details: 'Interactive element might not be keyboard accessible'
        })
      }
    })
  }
  
  // 8. Check badge positioning
  const checkBadgePositioning = () => {
    // Check Stanford and Operational badges
    const badges = document.querySelectorAll('[class*="Badge"]')
    badges.forEach(badge => {
      const rect = badge.getBoundingClientRect()
      if (rect.top < 0 || rect.left < 0 || 
          rect.bottom > window.innerHeight || 
          rect.right > window.innerWidth) {
        issues.push({
          type: 'BADGE_POSITIONING',
          element: badge.className,
          details: `Badge positioned outside viewport`
        })
      }
    })
  }
  
  // Run all checks
  checkOverflow()
  checkTextReadability()
  checkColorContrast()
  checkResponsiveLayout()
  checkZIndexStacking()
  checkAnimationPerformance()
  checkAccessibility()
  checkBadgePositioning()
  
  // Report results
  console.log('📊 AUDIT RESULTS\n')
  console.log('================\n')
  
  if (issues.length > 0) {
    console.log('❌ CRITICAL ISSUES:', issues.length)
    issues.forEach(issue => {
      console.error(`  ${issue.type}: ${issue.element}`)
      console.error(`    → ${issue.details}`)
    })
    console.log('')
  } else {
    console.log('✅ No critical issues found!\n')
    successes.push('No overflow issues')
    successes.push('All layouts responsive')
  }
  
  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS:', warnings.length)
    warnings.forEach(warning => {
      console.warn(`  ${warning.type}: ${warning.element}`)
      console.warn(`    → ${warning.details}`)
    })
    console.log('')
  } else {
    console.log('✅ No warnings!\n')
    successes.push('Good text readability')
    successes.push('Proper color contrast')
  }
  
  // Success summary
  console.log('✅ PASSED CHECKS:')
  if (!issues.find(i => i.type === 'OVERFLOW_X')) successes.push('No horizontal overflow')
  if (!issues.find(i => i.type === 'OVERFLOW_Y')) successes.push('No vertical overflow')
  if (!warnings.find(w => w.type === 'SMALL_TEXT')) successes.push('Text size appropriate')
  if (!warnings.find(w => w.type === 'LOW_CONTRAST')) successes.push('Good color contrast')
  if (!issues.find(i => i.type === 'FIXED_WIDTH')) successes.push('Responsive widths')
  
  successes.forEach(success => {
    console.log(`  ✓ ${success}`)
  })
  
  // Overall score
  const totalChecks = 50 // Approximate total checks
  const score = Math.max(0, 100 - (issues.length * 5) - (warnings.length * 2))
  
  console.log('\n📈 OVERALL SCORE:', score + '%')
  
  if (score >= 90) {
    console.log('🎉 Excellent! The slides are production-ready.')
  } else if (score >= 70) {
    console.log('👍 Good! Minor improvements recommended.')
  } else {
    console.log('🔧 Needs work. Please address the issues above.')
  }
  
  return { issues, warnings, successes, score }
}

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.runSlideAudit = runSlideAudit
}
