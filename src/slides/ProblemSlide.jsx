import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function ProblemSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Act I: The Problem</h2>
        <p className="slide-subtitle">
          High-net-worth families face a critical gap in wealth management
        </p>
        <div className="content-grid">
          <div className="stat-card">
            <div className="stat-value">2-4%</div>
            <div className="stat-label">Tax drag reducing returns annually</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">60%</div>
            <div className="stat-label">Of HNW investors lack access to alternatives</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">$30M+</div>
            <div className="stat-label">Traditional family office minimum</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
