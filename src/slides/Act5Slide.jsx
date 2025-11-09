import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import './SlideStyles.css'

export default function Act5Slide() {
  return (
    <div className="slide-content act-slide" style={{ position: 'relative' }}>
      <ParticleBackground count={50} color="#fbbf24" />
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
            background: 'linear-gradient(135deg, #fbbf24, #f97316)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          ACT 5
        </motion.div>
        <h1 className="act-title">The Business & The Ask</h1>
        <p className="act-subtitle">The Investment Opportunity</p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ 
            marginTop: '3rem',
            padding: '1.5rem',
            background: 'rgba(251, 191, 36, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}
        >
          <p style={{ fontSize: '1.1rem', color: '#fbbf24', marginBottom: '1rem', fontWeight: 'bold' }}>
            The Opportunity:
          </p>
          <div style={{ fontSize: '1rem', lineHeight: '1.8', color: '#94a3b8' }}>
            <div style={{ marginBottom: '0.5rem' }}>• $112T TAM with $5.4T serviceable market</div>
            <div style={{ marginBottom: '0.5rem' }}>• Path to $1B AUM in 36 months</div>
            <div style={{ marginBottom: '0.5rem' }}>• LTV/CAC of 17.8:1 with 3.5-month payback</div>
            <div style={{ marginBottom: '0.5rem' }}>• Expert team with proven execution</div>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#c084fc', marginTop: '1rem', fontStyle: 'italic' }}>
            Takeaway: $5M seed round to capture a generational opportunity
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
