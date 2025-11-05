import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function AppendixSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
        style={{ textAlign: 'center' }}
      >
        <h2 className="slide-title" style={{ marginBottom: '3rem' }}>Appendix</h2>
        
        <div style={{ fontSize: '1.3rem', lineHeight: '2.5', color: '#94a3b8' }}>
          <p>Additional Personas & Detailed Case Studies</p>
          <p>Technical Architecture Deep Dive</p>
          <p>Competitive Analysis Matrix</p>
          <p>Financial Model & Projections</p>
          <p>Regulatory Compliance Documentation</p>
          <p>GIFT City Integration Roadmap</p>
          <p>AI Agent Training Methodology</p>
        </div>
        
        <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '16px', border: '2px solid rgba(20, 184, 166, 0.3)' }}>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6', marginBottom: '1rem' }}>Thank You</p>
          <p style={{ fontSize: '1.3rem', color: '#e2e8f0' }}>Questions & Discussion</p>
        </div>
      </motion.div>
    </div>
  )
}
