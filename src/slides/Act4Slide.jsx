import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import './SlideStyles.css'

export default function Act4Slide() {
  return (
    <div className="slide-content act-slide" style={{ position: 'relative' }}>
      <ParticleBackground count={40} color="#a78bfa" />
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
            background: 'linear-gradient(135deg, #a78bfa, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          ACT 4
        </motion.div>
        <h1 className="act-title">The Proof</h1>
        <p className="act-subtitle">Validation & Traction</p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ 
            marginTop: '3rem',
            padding: '1.5rem',
            background: 'rgba(167, 139, 250, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(167, 139, 250, 0.3)'
          }}
        >
          <p style={{ fontSize: '1.1rem', color: '#c084fc', marginBottom: '1rem', fontWeight: 'bold' }}>
            Evidence of Success:
          </p>
          <div style={{ fontSize: '1rem', lineHeight: '1.8', color: '#94a3b8' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Real clients generating measurable alpha</div>
            <div style={{ marginBottom: '0.5rem' }}>• Live platform with Zerodha integration</div>
            <div style={{ marginBottom: '0.5rem' }}>• Competitive positioning validated by market</div>
            <div style={{ marginBottom: '0.5rem' }}>• Triple lock advantages create 18-month moat</div>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#22c55e', marginTop: '1rem', fontStyle: 'italic' }}>
            Takeaway: This isn't theoretical - we're operational and winning
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
