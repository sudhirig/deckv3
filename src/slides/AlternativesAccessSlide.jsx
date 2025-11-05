import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function AlternativesAccessSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Our Alternative Investment Platform</h2>
        <div className="content-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">Venture Capital</h3>
            <p className="feature-description">
              Access to top-tier VC funds and direct startup investments through our network
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏢</div>
            <h3 className="feature-title">Private Equity</h3>
            <p className="feature-description">
              Vetted PE opportunities in growth and buyout strategies
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3 className="feature-title">Structured Products</h3>
            <p className="feature-description">
              Custom structured notes and derivatives for specific risk/return profiles
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3 className="feature-title">AI-Driven Due Diligence</h3>
            <p className="feature-description">
              Our agents analyze opportunities, track performance, and monitor risk continuously
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
