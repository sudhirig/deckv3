import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function TaxAlphaSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
      >
        <h2 className="slide-title">Act III: Tax Alpha</h2>
        <p className="slide-subtitle">Systematic tax optimization that pays for itself</p>
        <div className="content-grid">
          <div className="stat-card">
            <div className="stat-value">2-4%</div>
            <div className="stat-label">Additional annual returns</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">24/7</div>
            <div className="stat-label">AI monitoring for opportunities</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">100%</div>
            <div className="stat-label">Compliant & documented</div>
          </div>
        </div>
        <div style={{ marginTop: '2rem', maxWidth: '700px', margin: '3rem auto 0' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Our AI agents continuously monitor for tax-loss harvesting opportunities, optimal withdrawal strategies, and cross-border planning—systematically recovering 2-4% that traditional advisors miss.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
