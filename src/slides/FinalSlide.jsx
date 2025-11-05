import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function FinalSlide() {
  return (
    <div className="slide-content title-slide">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="title-content"
      >
        <h1 className="main-title" style={{ fontSize: '4rem' }}>
          Ready to Unlock Your Alpha?
        </h1>
        <div className="features-line" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          <span className="feature">2-4% Tax Alpha</span>
          <span className="dot">●</span>
          <span className="feature">Alternative Access</span>
          <span className="dot">●</span>
          <span className="feature">AI-Powered</span>
        </div>
        <div style={{ background: 'rgba(20, 184, 166, 0.1)', border: '1px solid rgba(20, 184, 166, 0.3)', borderRadius: '16px', padding: '2rem 3rem', marginTop: '3rem' }}>
          <p style={{ fontSize: '1.5rem', color: '#14b8a6', fontWeight: '600', marginBottom: '1rem' }}>
            Join the Future of Wealth Management
          </p>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.8)' }}>
            Institutional-grade strategies, accessible to HNW families
          </p>
        </div>
        <p className="tagline" style={{ marginTop: '3rem', fontSize: '1.3rem' }}>
          The AI-Powered Digital Family Office
        </p>
      </motion.div>
      <div className="tech-background"></div>
    </div>
  )
}
