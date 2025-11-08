import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import ParticleBackground from '../components/ParticleBackground'
import './SlideStyles.css'

export default function Act1Slide() {
  return (
    <div className="slide-content act-slide" style={{ position: 'relative' }}>
      <ParticleBackground count={40} color="#14b8a6" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="act-content"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div 
          className="act-number"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <GradientText gradient="from-teal-400 to-green-400">
            ACT 1
          </GradientText>
        </motion.div>
        
        <motion.h1 
          className="act-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          The Hook & The Problem
        </motion.h1>
        
        <motion.p 
          className="act-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Why Now? Why AI? Why Us?
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ 
            marginTop: '3rem',
            padding: '1.5rem',
            background: 'rgba(20, 184, 166, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(20, 184, 166, 0.3)'
          }}
        >
          <p style={{ fontSize: '1.1rem', color: '#5eead4', marginBottom: '1rem', fontWeight: 'bold' }}>
            What You'll Discover:
          </p>
          <div style={{ fontSize: '1rem', lineHeight: '1.8', color: '#94a3b8' }}>
            <div style={{ marginBottom: '0.5rem' }}>• AI outperforms 93% of human fund managers</div>
            <div style={{ marginBottom: '0.5rem' }}>• 46% of HNWIs are switching advisors in the next 24 months</div>
            <div style={{ marginBottom: '0.5rem' }}>• The three critical failures of traditional wealth management</div>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#fbbf24', marginTop: '1rem', fontStyle: 'italic' }}>
            Takeaway: A once-in-a-generation disruption is happening NOW
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
