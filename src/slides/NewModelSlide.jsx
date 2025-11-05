import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function NewModelSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-card"
      >
        <h2 className="slide-title">New Model: Unified & Intelligent</h2>
        <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
          <div style={{ background: 'rgba(20, 184, 166, 0.05)', border: '1px solid rgba(20, 184, 166, 0.2)', borderRadius: '16px', padding: '3rem' }}>
            <ul className="comparison-list">
              <li>Single AI-powered platform with unified view</li>
              <li>Automated workflows and real-time monitoring</li>
              <li>Proactive tax optimization strategies</li>
              <li>Direct access to vetted alternatives</li>
              <li>Transparent, performance-based pricing</li>
              <li>Complete visibility and control</li>
            </ul>
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '12px', textAlign: 'center' }}>
              <strong style={{ color: '#14b8a6', fontSize: '1.3rem' }}>
                Result: 2-4% annual alpha from systematic optimization and access
              </strong>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
