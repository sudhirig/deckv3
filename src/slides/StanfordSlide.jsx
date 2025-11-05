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
        <h2 className="slide-title">Stanford Research: AI vs Human Performance</h2>
        <div style={{ marginTop: '3rem' }}>
          <div className="stat-card" style={{ marginBottom: '2rem' }}>
            <div className="stat-value">14%</div>
            <div className="stat-label">AI agents productivity boost over humans</div>
          </div>
          <div className="comparison-list" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <li style={{ background: 'rgba(20, 184, 166, 0.1)', marginBottom: '1rem', padding: '1.5rem' }}>
              <strong style={{ color: '#14b8a6' }}>AI-Assisted Consultants:</strong> 14% higher task completion and quality
            </li>
            <li style={{ background: 'rgba(20, 184, 166, 0.05)', padding: '1.5rem' }}>
              <strong style={{ color: '#14b8a6' }}>Financial Planning Perfect Match:</strong> Data-heavy, repeatable tasks with massive upside
            </li>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
