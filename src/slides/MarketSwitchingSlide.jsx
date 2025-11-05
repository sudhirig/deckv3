import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function MarketSwitchingSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
      >
        <h2 className="slide-title">The Wealth Management Market is Switching Now</h2>
        <div style={{ marginTop: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
            <div className="stat-card">
              <div className="stat-value">39%</div>
              <div className="stat-label">Already switched or added provider (last 3 years)</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">2x</div>
              <div className="stat-label">Under 55 switch at twice the rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">NOW</div>
              <div className="stat-label">Once-in-generation window to capture share</div>
            </div>
          </div>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', textAlign: 'center', marginTop: '2rem' }}>
            Source: PwC HNW Investor Survey, 2022 | $107T in US HNW wealth + $124T wealth transfer in motion
          </p>
        </div>
      </motion.div>
    </div>
  )
}
