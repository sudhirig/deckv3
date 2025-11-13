import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { MotionConfig } from 'framer-motion'
import '@testing-library/jest-dom'

// Import slides that were fixed
import AgentOrchestraSlide from '../slides/AgentOrchestraSlide'
import ARIASwarmSlide from '../slides/ARIASwarmSlide'
import AdvisorShortageSlide from '../slides/AdvisorShortageSlide'
import StanfordSlide from '../slides/StanfordSlide'
import ProductOverviewSlide from '../slides/ProductOverviewSlide'

// Mock framer-motion for testing
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion')
  return {
    ...actual,
    motion: {
      div: ({ children, style, ...props }) => (
        <div style={style} {...props}>{children}</div>
      ),
      p: ({ children, style, ...props }) => (
        <p style={style} {...props}>{children}</p>
      ),
      h1: ({ children, style, ...props }) => (
        <h1 style={style} {...props}>{children}</h1>
      ),
      svg: ({ children, ...props }) => (
        <svg {...props}>{children}</svg>
      ),
      line: ({ ...props }) => (
        <line {...props} />
      ),
      circle: ({ children, ...props }) => (
        <circle {...props}>{children}</circle>
      ),
    }
  }
})

// Helper function to check responsive units
const hasResponsiveUnit = (element, property) => {
  const style = window.getComputedStyle(element)
  const value = style[property]
  return value && (
    value.includes('clamp') || 
    value.includes('vw') || 
    value.includes('vh') || 
    value.includes('%') ||
    value.includes('rem') ||
    value.includes('em')
  )
}

// Helper to check for overflow issues
const checkNoOverflow = (container) => {
  const elements = container.querySelectorAll('*')
  let hasOverflow = false
  
  elements.forEach(el => {
    const rect = el.getBoundingClientRect()
    const parentRect = el.parentElement?.getBoundingClientRect()
    
    if (parentRect) {
      // Check if element extends beyond parent
      if (rect.right > parentRect.right || rect.left < parentRect.left) {
        hasOverflow = true
      }
    }
  })
  
  return !hasOverflow
}

describe('Slide UI/UX Tests', () => {
  beforeEach(() => {
    // Reset any mocks
    vi.clearAllMocks()
  })

  describe('AgentOrchestraSlide', () => {
    it('should use responsive width for agent nodes', () => {
      const { container } = render(
        <MotionConfig transition={{ duration: 0 }}>
          <AgentOrchestraSlide />
        </MotionConfig>
      )
      
      // Check for clamp usage in styles
      const agentNodes = container.querySelectorAll('[style*="width"]')
      let hasClamp = false
      
      agentNodes.forEach(node => {
        const style = node.getAttribute('style')
        if (style && style.includes('clamp')) {
          hasClamp = true
        }
      })
      
      expect(hasClamp).toBe(true)
    })

    it('should not have fixed pixel widths above 250px', () => {
      const { container } = render(<AgentOrchestraSlide />)
      
      const elements = container.querySelectorAll('[style*="width"]')
      elements.forEach(el => {
        const style = el.getAttribute('style')
        const match = style?.match(/width:\s*(\d+)px/)
        if (match) {
          const pixels = parseInt(match[1])
          expect(pixels).toBeLessThanOrEqual(250)
        }
      })
    })

    it('should have proper padding with responsive units', () => {
      const { container } = render(<AgentOrchestraSlide />)
      
      const paddedElements = container.querySelectorAll('[style*="padding"]')
      let hasResponsivePadding = false
      
      paddedElements.forEach(el => {
        const style = el.getAttribute('style')
        if (style && (style.includes('clamp') || style.includes('rem') || style.includes('vw'))) {
          hasResponsivePadding = true
        }
      })
      
      expect(hasResponsivePadding).toBe(true)
    })
  })

  describe('ARIASwarmSlide', () => {
    it('should use responsive dimensions for central orchestrator', () => {
      const { container } = render(
        <MotionConfig transition={{ duration: 0 }}>
          <ARIASwarmSlide />
        </MotionConfig>
      )
      
      // Look for the central ARIA element
      const centralElement = container.querySelector('[style*="background"][style*="gradient"]')
      const style = centralElement?.getAttribute('style')
      
      expect(style).toContain('clamp')
      expect(style).toContain('width')
      expect(style).toContain('height')
    })

    it('should scale properly with viewport', () => {
      const { container } = render(<ARIASwarmSlide />)
      
      // Check that no element has fixed dimensions above 300px
      const elements = container.querySelectorAll('[style*="width"], [style*="height"]')
      
      elements.forEach(el => {
        const style = el.getAttribute('style')
        const widthMatch = style?.match(/width:\s*(\d+)px/)
        const heightMatch = style?.match(/height:\s*(\d+)px/)
        
        if (widthMatch) {
          expect(parseInt(widthMatch[1])).toBeLessThanOrEqual(300)
        }
        if (heightMatch) {
          expect(parseInt(heightMatch[1])).toBeLessThanOrEqual(300)
        }
      })
    })
  })

  describe('AdvisorShortageSlide', () => {
    it('should not have negative positioning that causes overflow', () => {
      const { container } = render(
        <MotionConfig transition={{ duration: 0 }}>
          <AdvisorShortageSlide />
        </MotionConfig>
      )
      
      // Check for elements with right positioning
      const elements = container.querySelectorAll('[style*="right"]')
      
      elements.forEach(el => {
        const style = el.getAttribute('style')
        const match = style?.match(/right:\s*(-?\d+)/)
        
        if (match) {
          const value = parseInt(match[1])
          // Should not have large negative values
          expect(value).toBeGreaterThanOrEqual(-10)
        }
      })
    })

    it('should keep all elements within viewport bounds', () => {
      const { container } = render(<AdvisorShortageSlide />)
      
      // Set container dimensions for testing
      Object.defineProperty(container, 'clientWidth', { value: 1920 })
      Object.defineProperty(container, 'clientHeight', { value: 1080 })
      
      const positioned = container.querySelectorAll('[style*="position: absolute"]')
      
      positioned.forEach(el => {
        const style = el.getAttribute('style')
        
        // Check right positioning
        if (style?.includes('right:')) {
          expect(style).not.toContain('right: -')
        }
      })
    })
  })

  describe('StanfordSlide', () => {
    it('should have safe negative top positioning', () => {
      const { container } = render(
        <MotionConfig transition={{ duration: 0 }}>
          <StanfordSlide />
        </MotionConfig>
      )
      
      const elements = container.querySelectorAll('[style*="top"]')
      
      elements.forEach(el => {
        const style = el.getAttribute('style')
        const match = style?.match(/top:\s*(-?\d+(?:\.\d+)?(?:px|rem))/)
        
        if (match && match[1].startsWith('-')) {
          // Convert to pixels for comparison
          const value = match[1]
          if (value.includes('px')) {
            const pixels = parseFloat(value)
            expect(pixels).toBeGreaterThanOrEqual(-30)
          }
        }
      })
    })

    it('should display chart labels without cutoff', () => {
      const { container } = render(<StanfordSlide />)
      
      // Check for elements positioned above their containers
      const labels = container.querySelectorAll('[style*="position: absolute"][style*="top"]')
      
      labels.forEach(label => {
        const style = label.getAttribute('style')
        if (style?.includes('top') && style.includes('-')) {
          // Ensure text is not cut off
          expect(style).toContain('fontSize')
        }
      })
    })
  })

  describe('ProductOverviewSlide', () => {
    it('should have responsive SVG viewBox', () => {
      const { container } = render(
        <MotionConfig transition={{ duration: 0 }}>
          <ProductOverviewSlide />
        </MotionConfig>
      )
      
      const svg = container.querySelector('svg')
      expect(svg).toHaveAttribute('viewBox')
      
      const viewBox = svg?.getAttribute('viewBox')
      expect(viewBox).toBeTruthy()
    })

    it('should use percentage-based dimensions for main content', () => {
      const { container } = render(<ProductOverviewSlide />)
      
      const mainContent = container.querySelector('[style*="width: \'75%\'"], [style*="width: \"75%\""]')
      expect(mainContent).toBeTruthy()
    })
  })

  describe('General UI/UX Tests', () => {
    const slides = [
      { name: 'AgentOrchestraSlide', component: AgentOrchestraSlide },
      { name: 'ARIASwarmSlide', component: ARIASwarmSlide },
      { name: 'AdvisorShortageSlide', component: AdvisorShortageSlide },
      { name: 'StanfordSlide', component: StanfordSlide },
      { name: 'ProductOverviewSlide', component: ProductOverviewSlide }
    ]

    slides.forEach(({ name, component: SlideComponent }) => {
      describe(`${name} - Common Tests`, () => {
        it('should render without errors', () => {
          expect(() => {
            render(
              <MotionConfig transition={{ duration: 0 }}>
                <SlideComponent />
              </MotionConfig>
            )
          }).not.toThrow()
        })

        it('should not have console errors', () => {
          const consoleSpy = vi.spyOn(console, 'error')
          render(<SlideComponent />)
          expect(consoleSpy).not.toHaveBeenCalled()
        })

        it('should be responsive friendly', () => {
          const { container } = render(<SlideComponent />)
          
          // Check for viewport units usage
          const elements = container.querySelectorAll('[style]')
          let hasViewportUnits = false
          let hasClamp = false
          
          elements.forEach(el => {
            const style = el.getAttribute('style')
            if (style) {
              if (style.includes('vw') || style.includes('vh')) {
                hasViewportUnits = true
              }
              if (style.includes('clamp')) {
                hasClamp = true
              }
            }
          })
          
          // At least one responsive technique should be used
          expect(hasViewportUnits || hasClamp).toBe(true)
        })
      })
    })
  })

  describe('Responsive Design Tests', () => {
    const viewports = [
      { name: 'Mobile', width: 375, height: 667 },
      { name: 'Tablet', width: 768, height: 1024 },
      { name: 'Desktop', width: 1920, height: 1080 },
      { name: '4K', width: 3840, height: 2160 }
    ]

    viewports.forEach(({ name, width, height }) => {
      it(`should render properly at ${name} viewport (${width}x${height})`, () => {
        // Mock viewport dimensions
        window.innerWidth = width
        window.innerHeight = height

        const { container } = render(
          <MotionConfig transition={{ duration: 0 }}>
            <AgentOrchestraSlide />
          </MotionConfig>
        )

        // Check that content is visible
        expect(container.firstChild).toBeVisible()
        
        // Ensure no horizontal overflow
        const hasHorizontalOverflow = Array.from(container.querySelectorAll('*')).some(el => {
          return el.scrollWidth > el.clientWidth
        })
        
        expect(hasHorizontalOverflow).toBe(false)
      })
    })
  })
})
