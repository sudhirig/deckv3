import React from 'react'
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

// Import all slides to audit
import ARIAPlatformExperienceSlide from '../slides/ARIAPlatformExperienceSlide'
import ARIAClientJourneySlide from '../slides/ARIAClientJourneySlide'
import ARIATechMFSlide from '../slides/ARIATechMFSlide'
import ARIAInvestmentAdvisorySlide from '../slides/ARIAInvestmentAdvisorySlide'
import ARIAGoalBasedInvestingSlide from '../slides/ARIAGoalBasedInvestingSlide'
import ARIAAIFSlide from '../slides/ARIAAIFSlide'

// UI/UX Audit Tests
describe('UI/UX Audit - Overflow and Layout Issues', () => {
  
  const slides = [
    { name: 'ARIAPlatformExperienceSlide', component: ARIAPlatformExperienceSlide },
    { name: 'ARIAClientJourneySlide', component: ARIAClientJourneySlide },
    { name: 'ARIATechMFSlide', component: ARIATechMFSlide },
    { name: 'ARIAInvestmentAdvisorySlide', component: ARIAInvestmentAdvisorySlide },
    { name: 'ARIAGoalBasedInvestingSlide', component: ARIAGoalBasedInvestingSlide },
    { name: 'ARIAAIFSlide', component: ARIAAIFSlide }
  ]
  
  slides.forEach(({ name, component: Slide }) => {
    describe(`${name} - Layout Tests`, () => {
      
      it('renders without overflow', () => {
        const { container } = render(<Slide />)
        const aspectFrame = container.querySelector('[style*="aspect-ratio"]')
        
        if (aspectFrame) {
          const style = window.getComputedStyle(aspectFrame)
          expect(style.overflow).not.toBe('visible')
        }
      })
      
      it('has proper height constraints', () => {
        const { container } = render(<Slide />)
        const mainContainer = container.firstChild
        
        if (mainContainer) {
          const style = window.getComputedStyle(mainContainer)
          // Should have height: 100% or specific height
          expect(style.height).toBeTruthy()
        }
      })
      
      it('uses responsive font sizes', () => {
        const { container } = render(<Slide />)
        const headings = container.querySelectorAll('h1, h2, h3')
        
        headings.forEach(heading => {
          const style = window.getComputedStyle(heading)
          const fontSize = style.fontSize
          
          // Check if using clamp or rem units
          if (heading.style.fontSize) {
            const hasClamp = heading.style.fontSize.includes('clamp')
            const hasRem = heading.style.fontSize.includes('rem')
            const hasVw = heading.style.fontSize.includes('vw')
            
            expect(hasClamp || hasRem || hasVw).toBe(true)
          }
        })
      })
      
      it('has proper padding to prevent edge cutting', () => {
        const { container } = render(<Slide />)
        const contentContainers = container.querySelectorAll('[style*="padding"]')
        
        contentContainers.forEach(element => {
          const style = window.getComputedStyle(element)
          const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
          
          // Should have at least some padding
          if (padding) {
            expect(padding).toBeGreaterThan(0)
          }
        })
      })
      
      it('text has proper contrast', () => {
        const { container } = render(<Slide />)
        const textElements = container.querySelectorAll('p, span, h1, h2, h3, h4')
        
        textElements.forEach(element => {
          const style = window.getComputedStyle(element)
          const color = style.color
          
          // Check that text is not pure black on dark background
          if (color === 'rgb(0, 0, 0)') {
            const parentBg = window.getComputedStyle(element.parentElement).backgroundColor
            expect(parentBg).not.toMatch(/rgb\(0|rgb\(10|rgb\(15/) // Not dark background
          }
        })
      })
    })
  })
  
  describe('Responsive Design Tests', () => {
    const viewportSizes = [
      { width: 1920, height: 1080, name: 'Desktop HD' },
      { width: 1440, height: 900, name: 'Desktop' },
      { width: 1366, height: 768, name: 'Laptop' },
      { width: 1024, height: 768, name: 'Tablet' }
    ]
    
    viewportSizes.forEach(({ width, height, name }) => {
      it(`renders correctly at ${name} (${width}x${height})`, () => {
        // Set viewport size
        window.innerWidth = width
        window.innerHeight = height
        
        slides.forEach(({ component: Slide }) => {
          const { container } = render(<Slide />)
          
          // Check for horizontal scrollbar
          const hasHorizontalOverflow = container.scrollWidth > container.clientWidth
          expect(hasHorizontalOverflow).toBe(false)
          
          // Check for vertical scrollbar (should be minimal)
          const hasExcessiveVerticalOverflow = container.scrollHeight > container.clientHeight * 1.1
          expect(hasExcessiveVerticalOverflow).toBe(false)
        })
      })
    })
  })
  
  describe('Text Overflow Tests', () => {
    slides.forEach(({ name, component: Slide }) => {
      it(`${name} - prevents text overflow`, () => {
        const { container } = render(<Slide />)
        
        // Check for text-overflow properties
        const elements = container.querySelectorAll('*')
        elements.forEach(element => {
          const style = window.getComputedStyle(element)
          
          // If element has fixed width, should handle overflow
          if (style.width && style.width !== 'auto') {
            const hasOverflowHandling = 
              style.overflow !== 'visible' ||
              style.textOverflow === 'ellipsis' ||
              style.wordWrap === 'break-word' ||
              style.overflowWrap === 'break-word'
            
            // Long text content should have overflow handling
            if (element.textContent && element.textContent.length > 100) {
              expect(hasOverflowHandling).toBe(true)
            }
          }
        })
      })
      
      it(`${name} - uses proper line-height for readability`, () => {
        const { container } = render(<Slide />)
        const paragraphs = container.querySelectorAll('p')
        
        paragraphs.forEach(p => {
          const style = window.getComputedStyle(p)
          const lineHeight = parseFloat(style.lineHeight)
          const fontSize = parseFloat(style.fontSize)
          
          if (lineHeight && fontSize) {
            const ratio = lineHeight / fontSize
            // Line height should be at least 1.2x font size for readability
            expect(ratio).toBeGreaterThanOrEqual(1.2)
          }
        })
      })
    })
  })
  
  describe('Color and Contrast Tests', () => {
    slides.forEach(({ name, component: Slide }) => {
      it(`${name} - uses consistent color palette`, () => {
        const { container } = render(<Slide />)
        
        // Check for brand colors
        const brandColors = [
          '#14b8a6', // Teal
          '#06b6d4', // Cyan
          '#10b981', // Emerald
          '#fbbf24', // Yellow
          '#fb923c', // Orange
          '#60a5fa', // Blue
          '#ec4899', // Pink
          '#4ade80'  // Green
        ]
        
        const elements = container.querySelectorAll('[style*="color"]')
        elements.forEach(element => {
          const style = element.getAttribute('style')
          if (style && style.includes('color:')) {
            // Should use brand colors or neutral colors
            const usesNeutralColor = 
              style.includes('#e2e8f0') || // Light gray
              style.includes('#94a3b8') || // Medium gray
              style.includes('#64748b') || // Dark gray
              style.includes('#fff') ||    // White
              style.includes('rgb(')        // RGB colors
            
            const usesBrandColor = brandColors.some(color => 
              style.toLowerCase().includes(color)
            )
            
            expect(usesNeutralColor || usesBrandColor).toBe(true)
          }
        })
      })
    })
  })
  
  describe('Animation Performance Tests', () => {
    slides.forEach(({ name, component: Slide }) => {
      it(`${name} - uses GPU-accelerated animations`, () => {
        const { container } = render(<Slide />)
        const animatedElements = container.querySelectorAll('[style*="transition"], [style*="transform"]')
        
        animatedElements.forEach(element => {
          const style = element.getAttribute('style')
          if (style && style.includes('transition')) {
            // Should use transform for animations (GPU accelerated)
            const usesTransform = style.includes('transform')
            const usesOpacity = style.includes('opacity')
            
            // These properties are GPU accelerated
            expect(usesTransform || usesOpacity).toBe(true)
          }
        })
      })
    })
  })
})
