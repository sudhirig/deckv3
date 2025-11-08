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
        <motion.div 
          className="act-number"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ 
            background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          ACT 3
        </motion.div>
        <h1 className="act-title">The Deep Dive</h1>
        <p className="act-subtitle">The Moat & The Technology</p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ 
            marginTop: '3rem',
            padding: '1.5rem',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(59, 130, 246, 0.3)'
          }}
        >
          <p style={{ fontSize: '1.1rem', color: '#60a5fa', marginBottom: '1rem', fontWeight: 'bold' }}>
            Technical Deep Dives:
          </p>
          <div style={{ fontSize: '1rem', lineHeight: '1.8', color: '#94a3b8' }}>
            <div style={{ marginBottom: '0.5rem' }}>• India Gateway: $5T market via GIFT City (0% tax)</div>
            <div style={{ marginBottom: '0.5rem' }}>• Tax Alpha: Daily harvesting beats annual by +1.8%</div>
            <div style={{ marginBottom: '0.5rem' }}>• Alternative Assets: AI analyzes 16,000+ funds</div>
            <div style={{ marginBottom: '0.5rem' }}>• Architecture: 20+ specialized agents in swarm configuration</div>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#fbbf24', marginTop: '1rem', fontStyle: 'italic' }}>
            Takeaway: Three defensible moats competitors can't replicate
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
