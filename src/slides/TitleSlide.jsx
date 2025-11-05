import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function TitleSlide() {
  return (
    <div className="slide-content title-slide">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="title-content"
      >
        <h1 className="main-title">
          The AI-Powered Digital Family Office
        </h1>
        <p className="subtitle">
          Institutional-Grade Wealth Management<br />
          For the Next Generation
        </p>
        <div className="features-line">
          <span className="feature">Agentic AI</span>
          <span className="dot">●</span>
          <span className="feature">Tax Alpha</span>
          <span className="dot">●</span>
          <span className="feature">Alternative Access</span>
          <span className="dot">●</span>
          <span className="feature">GIFT City Gateway</span>
        </div>
        <p className="tagline">The entire pitch in one line: Our three "alpha" moats</p>
        <p className="date">November 2025</p>
      </motion.div>
      <div className="tech-background"></div>
    </div>
  )
}
