import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import PulsingBadge from '../components/PulsingBadge'
import CircularProgress from '../components/CircularProgress'
import InteractiveCard from '../components/InteractiveCard'
import './SlideStyles.css'

export default function MarketSwitchingSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
      >
        <h2 className="slide-title">
          <GradientText gradient="from-orange-400 to-amber-400">
            The Wealth Management Market is Switching Now
          </GradientText>
        </h2>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', margin: '2rem 0' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            <CircularProgress 
              value={46} 
              size={180} 
              strokeWidth={12} 
              color="#fb923c"
              label="Planning to Switch Advisors"
              delay={0.3}
            />
          </motion.div>
          
          <AnimatedText delay={1.5}>
            <div style={{ maxWidth: '400px' }}>
              <p style={{ fontSize: '1.3rem', color: '#e2e8f0', fontWeight: '500', lineHeight: '1.6' }}>
                Planning to switch advisors in next <strong style={{ color: '#fb923c' }}>1-2 years</strong>
              </p>
              <p style={{ fontSize: '0.95rem', color: '#94a3b8', marginTop: '1rem' }}>
                The largest wealth transfer in history is creating unprecedented opportunity
              </p>
            </div>
          </AnimatedText>
        </div>
        
        <div style={{ marginTop: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
              style={{ borderLeft: '4px solid #f97316' }}
            >
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fb923c', marginBottom: '0.5rem' }}>
                <AnimatedCounter end={39} suffix="%" duration={1.5} decimals={0} />
              </div>
              <div className="stat-label">Already switched or added provider (last 3 years)</div>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 }}
              style={{ borderLeft: '4px solid #fbbf24' }}
            >
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '0.5rem' }}>
                2x
              </div>
              <div className="stat-label">Under 55 switch at twice the rate</div>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6 }}
              style={{ borderLeft: '4px solid #14b8a6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
              <PulsingBadge color="teal">
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>NOW</div>
              </PulsingBadge>
              <div className="stat-label" style={{ marginTop: '1rem' }}>Once-in-generation window to capture share</div>
            </motion.div>
          </div>
          
          <AnimatedText delay={2.8}>
            <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginTop: '2rem' }}>
              <strong style={{ color: '#60a5fa' }}>Source:</strong> PwC HNW Investor Survey, 2022 | 
              <span style={{ color: '#14b8a6', fontWeight: 'bold' }}> $107T</span> in US HNW wealth + 
              <span style={{ color: '#22c55e', fontWeight: 'bold' }}> $124T</span> wealth transfer in motion
            </p>
          </AnimatedText>
        </div>
      </motion.div>
    </div>
  )
}
