import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import './SlideStyles.css'

export default function IndiaProblemSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">India: A $5T Market, Locked by Red Tape</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '2rem' }}>
          <div>
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem', fontSize: '1.5rem' }}>The Old FPI Route</h3>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontWeight: 'bold', color: '#ef4444' }}>Complex Red Tape</p>
                <p style={{ color: '#94a3b8' }}>Heavy FPI compliance burdens, multi-month setup</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontWeight: 'bold', color: '#ef4444' }}>Crippling Tax</p>
                <p style={{ color: '#94a3b8' }}>Capital Gains Tax + STT drag performance</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontWeight: 'bold', color: '#ef4444' }}>Currency Risk</p>
                <p style={{ color: '#94a3b8' }}>INR depreciation erodes returns</p>
              </div>
              <div>
                <p style={{ fontWeight: 'bold', color: '#ef4444' }}>Repatriation Nightmare</p>
                <p style={{ color: '#94a3b8' }}>Slow, restrictive capital movement</p>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <Icon type="lock" size={56} gradient="from-red-400 to-pink-400" delay={0.3} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>15%</p>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '2rem' }}>of HNW portfolios want India exposure</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ef4444', marginBottom: '0.5rem' }}>Only 3%</p>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>have it</p>
            </div>
          </div>
        </div>
        
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#94a3b8', marginTop: '2rem', fontStyle: 'italic' }}>
          The barriers are too high. Traditional advisors say "too complex."
        </p>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <span style={{ fontSize: '0.7rem', color: '#64748b', fontStyle: 'italic' }}>
            Source: Morgan Stanley India Market Outlook, 2024
          </span>
        </div>
      </motion.div>
    </div>
  )
}
