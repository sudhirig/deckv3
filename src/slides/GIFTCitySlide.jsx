import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function GIFTCitySlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
      >
        <h2 className="slide-title">India GIFT City Gateway</h2>
        <p className="slide-subtitle">Tax-efficient access to the world's fastest-growing major economy</p>
        <div className="content-grid">
          <div className="stat-card">
            <div className="stat-value">7-8%</div>
            <div className="stat-label">India GDP growth rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0%</div>
            <div className="stat-label">Tax on GIFT City gains for NRIs</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">$5T</div>
            <div className="stat-label">India economy target by 2027</div>
          </div>
        </div>
        <div style={{ marginTop: '2rem', maxWidth: '700px', margin: '3rem auto 0' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.8' }}>
            GIFT City (Gujarat International Finance Tec-City) is India's first International Financial Services Centre, offering tax-neutral environment for global investors.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
