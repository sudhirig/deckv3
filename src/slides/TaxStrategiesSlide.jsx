import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function TaxStrategiesSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Tax Optimization Strategies</h2>
        <div className="content-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Tax-Loss Harvesting</h3>
            <p className="feature-description">
              Daily monitoring for opportunities to harvest losses while maintaining exposure
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Asset Location</h3>
            <p className="feature-description">
              Optimal placement of assets across taxable, tax-deferred, and tax-free accounts
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💎</div>
            <h3 className="feature-title">Charitable Strategies</h3>
            <p className="feature-description">
              Donor-advised funds, appreciated securities donations, and QCDs
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3 className="feature-title">Cross-Border Planning</h3>
            <p className="feature-description">
              GIFT City gateway for tax-efficient India exposure
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
