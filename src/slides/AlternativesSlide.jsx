import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function AlternativesSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Alternative Assets: The Missing Piece</h2>
        <p className="slide-subtitle">Most HNW investors lack access to institutional alternatives</p>
        <div className="content-grid">
          <div className="stat-card">
            <div className="stat-value">60%</div>
            <div className="stat-label">of HNW investors have <br />NO alternatives exposure</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">15-25%</div>
            <div className="stat-label">Recommended allocation <br />to alternatives</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">3-5%</div>
            <div className="stat-label">Historical outperformance<br />vs public markets</div>
          </div>
        </div>
        <div style={{ marginTop: '2rem', maxWidth: '700px', margin: '3rem auto 0' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.8' }}>
            We provide vetted access to venture capital, private equity, and structured products previously available only to institutions.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
