import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function UseCasesSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
      >
        <h2 className="slide-title">Real-World Use Cases</h2>
        <div className="content-grid">
          <div className="feature-card">
            <div className="feature-icon">💼</div>
            <h3 className="feature-title">Tech Executive</h3>
            <p className="feature-description">
              Post-IPO wealth management with RSU tax optimization and alternative diversification
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏢</div>
            <h3 className="feature-title">Business Owner</h3>
            <p className="feature-description">
              Exit planning, trust structures, and tax-efficient wealth transfer strategies
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌏</div>
            <h3 className="feature-title">Global Family</h3>
            <p className="feature-description">
              Multi-jurisdiction tax planning with GIFT City for India exposure
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Next-Gen Investor</h3>
            <p className="feature-description">
              Modern portfolio with VC/crypto access and automated tax harvesting
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
