import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import './SlideStyles.css'

export default function Act2Slide() {
  return (
    <div className="slide-content act-slide" style={{ position: 'relative' }}>
      <ParticleBackground count={50} color="#22c55e" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="act-content"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div 
          className="act-number"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ 
            background: 'linear-gradient(135deg, #22c55e, #14b8a6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          ACT 2
        </motion.div>
        <h1 className="act-title">The Solution</h1>
        <p className="act-subtitle">The AI-Powered Digital Family Office</p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ 
            marginTop: '3rem',
            padding: '1.5rem',
            background: 'rgba(34, 197, 94, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(34, 197, 94, 0.3)'
          }}
        >
          <p style={{ fontSize: '1.1rem', color: '#4ade80', marginBottom: '1rem', fontWeight: 'bold' }}>
            Our Innovation:
          </p>
          <div style={{ fontSize: '1rem', lineHeight: '1.8', color: '#94a3b8' }}>
            <div style={{ marginBottom: '0.5rem' }}>• An AI Investment Committee working 24/7</div>
            <div style={{ marginBottom: '0.5rem' }}>• Three "Alpha Agents" creating measurable returns</div>
            <div style={{ marginBottom: '0.5rem' }}>• 100% operational platform managing real portfolios today</div>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#14b8a6', marginTop: '1rem', fontStyle: 'italic' }}>
            Takeaway: Not another robo-advisor - a complete AI family office
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
