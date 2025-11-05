import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function AlphaGapSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Why They're Switching: The Three Failures</h2>
        <p className="slide-subtitle" style={{ marginBottom: '2rem' }}>The "Alpha Gap" - What HNWIs Want vs What They Get</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>❌ Traditional</h3>
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                <strong>Tax:</strong> Reactive, annual-only TLH
              </div>
              <div style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                <strong>Alternatives:</strong> Gatekept by minimums
              </div>
              <div style={{ fontSize: '1.1rem' }}>
                <strong>India:</strong> Too complex, too slow
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#14b8a6', marginBottom: '1rem' }}>✓ What HNWIs Want</h3>
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                <strong>Tax:</strong> Proactive, daily optimization
              </div>
              <div style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                <strong>Alternatives:</strong> Curated, accessible
              </div>
              <div style={{ fontSize: '1.1rem' }}>
                <strong>India:</strong> Simple, tax-efficient access
              </div>
            </div>
          </div>
        </div>
        
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#14b8a6', marginTop: '2rem', fontWeight: 'bold' }}>
          Traditional advisors can't scale these solutions. AI can.
        </p>
      </motion.div>
    </div>
  )
}
