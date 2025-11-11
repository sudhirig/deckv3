import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import html2canvas from 'html2canvas'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import Icon from './Icon'
import './ExportDashboard.css'

export default function ExportDashboard({ 
  isOpen, 
  onClose, 
  slides, 
  currentSlide,
  navigateToSlide
}) {
  const [exportProgress, setExportProgress] = useState(0)
  const [isExporting, setIsExporting] = useState(false)
  const [exportStatus, setExportStatus] = useState('')
  const [selectedSlides, setSelectedSlides] = useState(new Set())
  const [exportType, setExportType] = useState(null)
  const slideContainerRef = useRef(null)

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setExportProgress(0)
      setIsExporting(false)
      setExportStatus('')
      setSelectedSlides(new Set())
      setExportType(null)
    }
  }, [isOpen])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && !isExporting) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, isExporting, onClose])

  // Export as PDF (using browser print)
  const exportAsPDF = () => {
    setExportType('pdf')
    setExportStatus('Preparing PDF export...')
    
    // Add print-specific class to body for better control
    document.body.classList.add('printing-mode')
    
    // Add slide footers to the print-only slides
    const printSlides = document.querySelectorAll('.print-slide')
    printSlides.forEach((slide, index) => {
      // Check if footer already exists
      if (!slide.querySelector('.slide-footer')) {
        const footer = document.createElement('div')
        footer.className = 'slide-footer'
        footer.innerHTML = `
          <span class="slide-footer-title">AI-Powered Family Office Platform</span>
          <span class="slide-footer-number">Slide ${index + 1} of ${slides.length}</span>
        `
        slide.appendChild(footer)
      }
    })
    
    // Small delay to ensure DOM updates
    setTimeout(() => {
      window.print()
      
      // Clean up after print dialog closes
      setTimeout(() => {
        document.body.classList.remove('printing-mode')
        // Remove footers after printing
        document.querySelectorAll('.print-slide .slide-footer').forEach(el => el.remove())
        setExportStatus('PDF export complete!')
        setTimeout(() => {
          setExportStatus('')
          setExportType(null)
        }, 2000)
      }, 100)
    }, 500)
  }

  // Export single slide as PNG
  const exportSlideAsImage = async (slideIndex, slideComponent) => {
    // Create a temporary container for rendering
    const tempContainer = document.createElement('div')
    tempContainer.style.position = 'fixed'
    tempContainer.style.top = '-9999px'
    tempContainer.style.left = '-9999px'
    tempContainer.style.width = '1920px'
    tempContainer.style.height = '1080px'
    tempContainer.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
    document.body.appendChild(tempContainer)

    // Navigate to the slide and wait for render
    navigateToSlide(slideIndex)
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Find the rendered slide
    const slideElement = document.querySelector('.slide-viewport-container > div')
    
    if (slideElement) {
      // Clone the slide into our temp container
      const clonedSlide = slideElement.cloneNode(true)
      tempContainer.appendChild(clonedSlide)
      
      // Wait for images to load
      await new Promise(resolve => setTimeout(resolve, 500))
      
      try {
        const canvas = await html2canvas(tempContainer, {
          backgroundColor: '#0a0a0a',
          scale: 1,
          width: 1920,
          height: 1080,
          logging: false,
          useCORS: true,
          allowTaint: true
        })
        
        // Clean up temp container
        document.body.removeChild(tempContainer)
        
        return canvas
      } catch (error) {
        console.error('Error capturing slide:', error)
        document.body.removeChild(tempContainer)
        return null
      }
    }
    
    document.body.removeChild(tempContainer)
    return null
  }

  // Export selected slides as PNG images in ZIP
  const exportAsImages = async (slidesToExport = null) => {
    setExportType('images')
    setIsExporting(true)
    setExportProgress(0)
    
    const zip = new JSZip()
    const imageFolder = zip.folder('presentation-slides')
    
    const exportList = slidesToExport || 
      (selectedSlides.size > 0 ? Array.from(selectedSlides) : Array.from({ length: slides.length }, (_, i) => i))
    
    setExportStatus(`Exporting ${exportList.length} slides...`)
    
    for (let i = 0; i < exportList.length; i++) {
      const slideIndex = exportList[i]
      const slide = slides[slideIndex]
      
      setExportStatus(`Capturing slide ${i + 1} of ${exportList.length}: ${slide.title}`)
      
      try {
        const canvas = await exportSlideAsImage(slideIndex, slide.component)
        
        if (canvas) {
          const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'))
          const fileName = `slide-${String(slideIndex + 1).padStart(3, '0')}-${slide.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.png`
          imageFolder.file(fileName, blob)
        }
      } catch (error) {
        console.error(`Error exporting slide ${slideIndex}:`, error)
      }
      
      setExportProgress(((i + 1) / exportList.length) * 100)
    }
    
    setExportStatus('Creating ZIP file...')
    
    try {
      const content = await zip.generateAsync({ type: 'blob' })
      saveAs(content, `presentation-slides-${new Date().toISOString().split('T')[0]}.zip`)
      setExportStatus('Export complete!')
      
      setTimeout(() => {
        setIsExporting(false)
        setExportStatus('')
        setExportType(null)
        onClose()
      }, 2000)
    } catch (error) {
      console.error('Error creating ZIP:', error)
      setExportStatus('Error creating ZIP file')
      setIsExporting(false)
    }
  }

  // Export as JSON data structure
  const exportAsJSON = () => {
    setExportType('json')
    setExportStatus('Generating JSON structure...')
    
    const presentationData = {
      title: 'AI-Powered Family Office Platform',
      version: '1.0.0',
      exportDate: new Date().toISOString(),
      slideCount: slides.length,
      colorScheme: {
        primary: '#14b8a6',
        secondary: '#22d3ee',
        accent: '#a78bfa',
        background: {
          main: '#0a0a0a',
          gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
        },
        text: {
          primary: '#ffffff',
          secondary: '#94a3b8',
          muted: '#64748b'
        }
      },
      gradients: {
        primary: 'linear-gradient(135deg, #14b8a6, #22d3ee)',
        purple: 'linear-gradient(135deg, #9333ea, #3b82f6)',
        orange: 'linear-gradient(135deg, #f97316, #fbbf24)'
      },
      slides: slides.map((slide, index) => ({
        index: index + 1,
        title: slide.title,
        component: slide.component.name,
        type: getSlideType(slide.component.name),
        content: extractSlideContent(slide),
        layout: getSlideLayout(slide.component.name),
        animations: {
          entrance: 'fadeIn',
          elements: 'stagger'
        }
      }))
    }
    
    const blob = new Blob([JSON.stringify(presentationData, null, 2)], { type: 'application/json' })
    saveAs(blob, `presentation-structure-${new Date().toISOString().split('T')[0]}.json`)
    
    setExportStatus('JSON export complete!')
    setTimeout(() => {
      setExportStatus('')
      setExportType(null)
    }, 2000)
  }

  // Helper function to determine slide type
  const getSlideType = (componentName) => {
    if (componentName.includes('Act')) return 'act-divider'
    if (componentName.includes('Title')) return 'title'
    if (componentName.includes('Summary')) return 'summary'
    if (componentName.includes('Dashboard')) return 'dashboard'
    if (componentName.includes('Journey')) return 'journey'
    if (componentName.includes('Architecture')) return 'architecture'
    if (componentName.includes('Case')) return 'case-study'
    return 'content'
  }

  // Helper function to determine slide layout
  const getSlideLayout = (componentName) => {
    if (componentName.includes('Overview')) return 'radial'
    if (componentName.includes('Comparison') || componentName.includes('Matrix')) return 'grid'
    if (componentName.includes('Journey')) return 'timeline'
    if (componentName.includes('Dashboard')) return 'metrics'
    if (componentName.includes('Architecture')) return 'diagram'
    return 'standard'
  }

  // Helper function to extract slide content (simplified)
  const extractSlideContent = (slide) => {
    return {
      hasCharts: slide.component.name.includes('Chart') || slide.component.name.includes('Dashboard'),
      hasAnimation: true,
      hasInteractiveElements: slide.component.name.includes('Interactive'),
      complexity: slide.component.name.includes('Overview') || slide.component.name.includes('Architecture') ? 'high' : 'medium'
    }
  }

  // Toggle slide selection
  const toggleSlideSelection = (index) => {
    const newSelection = new Set(selectedSlides)
    if (newSelection.has(index)) {
      newSelection.delete(index)
    } else {
      newSelection.add(index)
    }
    setSelectedSlides(newSelection)
  }

  // Select all slides
  const selectAllSlides = () => {
    setSelectedSlides(new Set(Array.from({ length: slides.length }, (_, i) => i)))
  }

  // Clear selection
  const clearSelection = () => {
    setSelectedSlides(new Set())
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="export-backdrop"
            onClick={() => !isExporting && onClose()}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="export-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="export-header">
              <h2>Export Presentation</h2>
              {!isExporting && (
                <button className="export-close" onClick={onClose}>
                  <Icon type="x" size={24} />
                </button>
              )}
            </div>

            {/* Content */}
            <div className="export-content">
              {!isExporting && !exportType && (
                <>
                  {/* Export Options */}
                  <div className="export-options">
                    <div className="export-option" onClick={exportAsPDF}>
                      <Icon type="fileText" size={32} gradient="from-blue-400 to-cyan-400" />
                      <h3>PDF Export</h3>
                      <p>Export entire deck as PDF</p>
                      <span className="export-format">Landscape • 16:9 • Print-ready</span>
                    </div>

                    <div className="export-option" onClick={() => setExportType('image-select')}>
                      <Icon type="image" size={32} gradient="from-purple-400 to-pink-400" />
                      <h3>PNG Images</h3>
                      <p>High-res images in ZIP</p>
                      <span className="export-format">1920×1080 • Canva-ready</span>
                    </div>

                    <div className="export-option" onClick={exportAsJSON}>
                      <Icon type="code" size={32} gradient="from-green-400 to-emerald-400" />
                      <h3>JSON Data</h3>
                      <p>Structured presentation data</p>
                      <span className="export-format">PowerPoint reference</span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="export-quick-actions">
                    <button 
                      className="export-quick-btn"
                      onClick={() => exportAsImages([currentSlide])}
                    >
                      <Icon type="download" size={16} />
                      Export Current Slide as PNG
                    </button>
                  </div>
                </>
              )}

              {/* Image Selection Mode */}
              {exportType === 'image-select' && !isExporting && (
                <div className="export-selection">
                  <div className="selection-header">
                    <h3>Select Slides to Export</h3>
                    <div className="selection-actions">
                      <button onClick={selectAllSlides}>Select All</button>
                      <button onClick={clearSelection}>Clear</button>
                      <span className="selection-count">
                        {selectedSlides.size} selected
                      </span>
                    </div>
                  </div>

                  <div className="slide-grid">
                    {slides.map((slide, index) => (
                      <div 
                        key={index}
                        className={`slide-thumb ${selectedSlides.has(index) ? 'selected' : ''}`}
                        onClick={() => toggleSlideSelection(index)}
                      >
                        <div className="slide-thumb-number">{index + 1}</div>
                        <div className="slide-thumb-title">{slide.title}</div>
                        {selectedSlides.has(index) && (
                          <div className="slide-thumb-check">
                            <Icon type="check" size={16} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="export-actions">
                    <button 
                      className="export-btn-secondary"
                      onClick={() => setExportType(null)}
                    >
                      Back
                    </button>
                    <button 
                      className="export-btn-primary"
                      onClick={() => exportAsImages()}
                      disabled={selectedSlides.size === 0 && slides.length === 0}
                    >
                      Export {selectedSlides.size || slides.length} Slides
                    </button>
                  </div>
                </div>
              )}

              {/* Progress Indicator */}
              {isExporting && (
                <div className="export-progress">
                  <div className="progress-icon">
                    <Icon type="loader" size={48} />
                  </div>
                  <h3>{exportStatus}</h3>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${exportProgress}%` }}
                    />
                  </div>
                  <span className="progress-percent">{Math.round(exportProgress)}%</span>
                </div>
              )}

              {/* Success Message */}
              {exportStatus && !isExporting && exportType !== 'image-select' && (
                <div className="export-success">
                  <Icon type="checkCircle" size={48} gradient="from-green-400 to-emerald-400" />
                  <h3>{exportStatus}</h3>
                </div>
              )}
            </div>

            {/* Hidden container for slide rendering */}
            <div ref={slideContainerRef} style={{ display: 'none' }} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}