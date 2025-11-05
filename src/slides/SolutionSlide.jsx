import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function SolutionSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Act II: The Solution</h2>
        <p className="slide-subtitle">
          An AI-powered platform delivering institutional-grade wealth management
        </p>
        <div className="content-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3 className="feature-title">Agentic AI</h3>
            <p className="feature-description">
              Autonomous agents handle research, monitoring, and execution with human oversight
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3 className="feature-title">Tax Alpha</h3>
            <p className="feature-description">
              Systematic tax optimization strategies that recover 2-4% annually
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">Alternative Access</h3>
            <p className="feature-description">
              Direct access to venture capital, private equity, and structured products
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3 className="feature-title">GIFT City Gateway</h3>
            <p className="feature-description">
              Tax-efficient India exposure through special economic zone
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
