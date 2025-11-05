import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function StanfordSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
      >
        <h2 className="slide-title">AI is the New Alpha</h2>
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div className="stat-card" style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            <div className="stat-value">93%</div>
            <div className="stat-label">AI can outperform 93% of managers by analyzing public data</div>
          </div>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginTop: '2rem' }}>
            Source: Stanford University Study, 2024
          </p>
        </div>
      </motion.div>
    </div>
  )
}
