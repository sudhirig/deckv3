import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Icon from './Icon'

export default function PDFExportHelper({ onClose }) {
  const [isPreparing, setIsPreparing] = useState(false)
  const [exportStep, setExportStep] = useState(1)

  const startPDFExport = () => {
    setIsPreparing(true)
    setExportStep(2)

    // Add print-specific class to body
    document.body.classList.add('pdf-export-mode')
    
    // Trigger print after a delay
    setTimeout(() => {
      window.print()
      
      // Clean up after print
      setTimeout(() => {
        document.body.classList.remove('pdf-export-mode')
        setIsPreparing(false)
        setExportStep(3)
        
        // Auto close after success
        setTimeout(() => {
          onClose()
        }, 2000)
      }, 500)
    }, 1000)
  }

  return (
    <div className="pdf-export-helper">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pdf-export-content"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(147, 51, 234, 0.05))',
          borderRadius: '16px',
          padding: '2rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        {exportStep === 1 && (
          <>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <Icon type="fileText" size={48} gradient="from-teal-400 to-cyan-400" />
              <h2 style={{ marginTop: '1rem', color: '#14b8a6' }}>Export ARIA Deck as PDF</h2>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Quick Export Instructions:</h3>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8' }}>
                <li>Click "Start PDF Export" below</li>
                <li>In the print dialog:
                  <ul style={{ marginTop: '0.25rem' }}>
                    <li>• Set <strong>Destination</strong> to "Save as PDF"</li>
                    <li>• Set <strong>Layout</strong> to "Landscape"</li>
                    <li>• Set <strong>Margins</strong> to "None"</li>
                    <li>• Enable <strong>"Background graphics"</strong></li>
                  </ul>
                </li>
                <li>Click "Save" and choose location</li>
              </ol>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                onClick={startPDFExport}
                style={{
                  background: 'linear-gradient(135deg, #14b8a6, #22d3ee)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.75rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Start PDF Export
              </button>
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(148, 163, 184, 0.1)',
                  color: '#94a3b8',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '8px',
                  padding: '0.75rem 2rem',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </>
        )}

        {exportStep === 2 && (
          <div style={{ textAlign: 'center' }}>
            <div className="spinning-loader" style={{ marginBottom: '1rem' }}>
              <Icon type="loader" size={48} />
            </div>
            <h3 style={{ color: '#14b8a6' }}>Preparing PDF Export...</h3>
            <p style={{ color: '#94a3b8' }}>Print dialog will open shortly</p>
          </div>
        )}

        {exportStep === 3 && (
          <div style={{ textAlign: 'center' }}>
            <Icon type="checkCircle" size={48} gradient="from-green-400 to-emerald-400" />
            <h3 style={{ marginTop: '1rem', color: '#10b981' }}>PDF Export Ready!</h3>
            <p style={{ color: '#94a3b8' }}>Your deck is ready to save</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}
