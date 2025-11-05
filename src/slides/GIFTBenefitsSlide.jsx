import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function GIFTBenefitsSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">GIFT City Benefits</h2>
        <div className="content-grid">
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3 className="feature-title">Zero Tax on Capital Gains</h3>
            <p className="feature-description">
              No capital gains tax for NRIs on investments through GIFT City
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3 className="feature-title">International Standards</h3>
            <p className="feature-description">
              Operates under English common law with international regulatory framework
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Diverse Investment Options</h3>
            <p className="feature-description">
              Access to Indian equities, bonds, derivatives, and alternative investments
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3 className="feature-title">Regulatory Compliance</h3>
            <p className="feature-description">
              IFSCA-regulated environment with robust investor protection
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
