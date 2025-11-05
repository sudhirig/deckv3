import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import './SlideStyles.css'

export default function OpportunitySlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">
          <GradientText gradient="from-purple-400 to-pink-400">
            A Massive, Combined Opportunity
          </GradientText>
        </h2>
        <AnimatedText delay={0.2}>
          <p className="slide-subtitle" style={{ marginBottom: '2rem' }}>TAM, SAM, SOM Analysis</p>
        </AnimatedText>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', marginTop: '3rem' }}>
          <motion.div 
            style={{ textAlign: 'center' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
          >
            <div style={{ width: '300px', height: '300px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1))', border: '3px solid #3b82f6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', color: '#60a5fa' }}>$112T</p>
              <p style={{ fontSize: '1.2rem', color: '#93c5fd' }}>TAM</p>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>US HNW ($107T) +<br/>India Access ($5T)</p>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ textAlign: 'center' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6, type: 'spring' }}
          >
            <div style={{ width: '220px', height: '220px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(34, 197, 94, 0.1))', border: '3px solid #22c55e', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4ade80' }}>$5.4T</p>
              <p style={{ fontSize: '1.1rem', color: '#86efac' }}>SAM</p>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.5rem' }}>Tech-savvy HNW<br/>$5M+ investable</p>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ textAlign: 'center' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6, type: 'spring' }}
          >
            <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(20, 184, 166, 0.1))', border: '3px solid #14b8a6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5eead4' }}>$2.5B</p>
              <p style={{ fontSize: '1rem', color: '#99f6e4' }}>SOM (Y3)</p>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem' }}>Conservative<br/>target AUM</p>
            </div>
          </motion.div>
        </div>
        
        <AnimatedText delay={1.2}>
          <div style={{ marginTop: '3rem', textAlign: 'center', padding: '1.5rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '12px' }}>
            <p style={{ fontSize: '1.2rem', color: '#14b8a6', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Year 3 SOM: <GradientText gradient="from-teal-400 to-green-400" animate={false}>$2.5B AUM = $12.5M Revenue</GradientText>
            </p>
            <p style={{ fontSize: '1rem', color: '#94a3b8' }}>Conservative and attainable with current growth trajectory</p>
          </div>
        </AnimatedText>
      </motion.div>
    </div>
  )
}
