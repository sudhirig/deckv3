import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import CircularProgress from '../components/CircularProgress'
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
        
        <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem' }}>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          >
            <CircularProgress 
              value={93} 
              size={200} 
              strokeWidth={12} 
              color="#14b8a6"
              label="Fund Managers Outperformed"
              delay={0.5}
            />
          </motion.div>
          
          <motion.div 
            style={{ flex: 1, maxWidth: '500px' }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <AnimatedText delay={2}>
              <div style={{ fontSize: '1.5rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                AI can outperform <strong style={{ color: '#14b8a6' }}>93% of fund managers</strong> by analyzing public data
              </div>
            </AnimatedText>
            
            <motion.div
              style={{ 
                background: 'rgba(20, 184, 166, 0.2)',
                border: '2px solid rgba(20, 184, 166, 0.5)',
                borderRadius: '12px',
                padding: '1rem 1.5rem',
                fontSize: '1.1rem',
                color: '#14b8a6',
                fontWeight: 'bold',
                marginTop: '1.5rem'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, type: 'spring' }}
            >
              600% Outperformance Potential
            </motion.div>
            
            <AnimatedText delay={2.2}>
              <p style={{ fontSize: '1rem', color: '#94a3b8', marginTop: '1.5rem' }}>
                <strong style={{ color: '#60a5fa' }}>Source:</strong> Stanford University Study, 2024
              </p>
            </AnimatedText>
            
            <AnimatedText delay={2.5}>
              <p style={{ fontSize: '0.95rem', color: '#64748b', marginTop: '1rem', fontStyle: 'italic' }}>
                This is not theoretical. This is happening now.
              </p>
            </AnimatedText>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
