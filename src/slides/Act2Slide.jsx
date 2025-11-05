import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import './SlideStyles.css'

export default function Act2Slide() {
  return (
    <div className="slide-content act-slide" style={{ position: 'relative' }}>
      <ParticleBackground count={40} color="#22c55e" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="act-content"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="act-number">ACT 2</div>
        <h1 className="act-title">The Solution</h1>
        <p className="act-subtitle">The AI-Powered Digital Family Office</p>
      </motion.div>
    </div>
  )
}
