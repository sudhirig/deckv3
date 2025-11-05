import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import PulsingBadge from '../components/PulsingBadge'
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
        
        <AnimatedText delay={0.3}>
          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <div style={{ fontSize: '5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              <GradientText gradient="from-orange-400 to-red-400" animate={false}>
                <AnimatedCounter end={46} suffix="%" duration={2} />
              </GradientText>
            </div>
            <p style={{ fontSize: '1.5rem', color: '#e2e8f0', fontWeight: '500' }}>
              Planning to switch advisors in next 1-2 years
            </p>
          </div>
        </AnimatedText>
        
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
