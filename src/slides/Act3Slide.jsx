import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import './SlideStyles.css'

export default function Act3Slide() {
  return (
    <div className="slide-content act-slide" style={{ position: 'relative' }}>
      <ParticleBackground count={40} color="#3b82f6" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="act-content"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="act-number">ACT 3</div>
        <h1 className="act-title">The Deep Dive</h1>
        <p className="act-subtitle">The Moat & The Technology</p>
      </motion.div>
    </div>
  )
}
