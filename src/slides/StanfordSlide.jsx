import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import './SlideStyles.css'

export default function StanfordSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
      >
        <h2 className="slide-title">
          <GradientText gradient="from-blue-400 to-cyan-400">
            AI is the New Alpha
          </GradientText>
        </h2>
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <motion.div 
            className="stat-card" 
            style={{ marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem', position: 'relative' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div style={{ fontSize: '6rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              <GradientText gradient="from-teal-400 to-green-400" animate={false}>
                <AnimatedCounter end={93} suffix="%" duration={2.5} />
              </GradientText>
            </div>
            <AnimatedText delay={2}>
              <div className="stat-label" style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
                AI can outperform <strong style={{ color: '#14b8a6' }}>93% of fund managers</strong> by analyzing public data
              </div>
            </AnimatedText>
            
            <motion.div
              style={{ 
                position: 'absolute', 
                top: '-10px', 
                right: '-10px',
                background: 'rgba(20, 184, 166, 0.2)',
                border: '2px solid rgba(20, 184, 166, 0.5)',
                borderRadius: '8px',
                padding: '0.5rem 1rem',
                fontSize: '0.85rem',
                color: '#14b8a6',
                fontWeight: 'bold'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, type: 'spring' }}
            >
              600% Outperformance
            </motion.div>
          </motion.div>
          
          <AnimatedText delay={2.2}>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginTop: '2rem' }}>
              <strong style={{ color: '#60a5fa' }}>Source:</strong> Stanford University Study, 2024
            </p>
          </AnimatedText>
          
          <AnimatedText delay={2.5}>
            <p style={{ fontSize: '1rem', color: '#64748b', marginTop: '1rem', fontStyle: 'italic' }}>
              This is not theoretical. This is happening now.
            </p>
          </AnimatedText>
        </div>
      </motion.div>
    </div>
  )
}
