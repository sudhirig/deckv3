import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function AgentsSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Act IV: The AI Agents</h2>
        <p className="slide-subtitle">Autonomous workflows with human oversight</p>
        <div className="content-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3 className="feature-title">Research Agent</h3>
            <p className="feature-description">
              Monitors markets, analyzes opportunities, and surfaces insights 24/7
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚖️</div>
            <h3 className="feature-title">Compliance Agent</h3>
            <p className="feature-description">
              Ensures all strategies meet regulatory requirements and documents everything
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💎</div>
            <h3 className="feature-title">Tax Optimization Agent</h3>
            <p className="feature-description">
              Continuously scans for tax-saving opportunities and executes strategies
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Portfolio Agent</h3>
            <p className="feature-description">
              Monitors positions, rebalances, and maintains target allocations
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
