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
        <h2 className="slide-title">The Alpha Gap</h2>
        <div className="comparison-grid">
          <div className="comparison-column old-model">
            <h3 className="comparison-title">❌ Traditional Model</h3>
            <ul className="comparison-list">
              <li>High tax drag (2-4% annually)</li>
              <li>Limited alternative access</li>
              <li>Manual, error-prone processes</li>
              <li>Reactive tax planning</li>
              <li>No cross-border optimization</li>
            </ul>
          </div>
          <div className="comparison-column new-model">
            <h3 className="comparison-title">✓ Our Solution</h3>
            <ul className="comparison-list">
              <li>Tax alpha recovery (2-4%)</li>
              <li>Direct alternative access</li>
              <li>AI-automated workflows</li>
              <li>Proactive tax strategies</li>
              <li>India GIFT City gateway</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
