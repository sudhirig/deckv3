import { motion } from 'framer-motion'
import CinematicSlideFrame from '../components/CinematicSlideFrame'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import './SlideStyles.css'

export default function FundingSlide() {
  return (
    <CinematicSlideFrame 
      particleCount={50}
      particleColor="#8b5cf6"
      gradientColors={{
        primary: 'rgba(139, 92, 246, 0.12)',
        secondary: 'rgba(236, 72, 153, 0.08)'
      }}
      gradientPositions={{
        primary: '20% 30%',
        secondary: '70% 60%'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="glass-card"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <h2 className="slide-title">
          <GradientText gradient="from-purple-400 via-pink-400 to-indigo-400">
            $5M to Scale Our Proven Platform
          </GradientText>
        </h2>
        
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#14b8a6', marginBottom: '2rem' }}>Use of Funds</h3>
              <div style={{ fontSize: '1.1rem', lineHeight: '2.5' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span>Product & Engineering</span>
                  <motion.span 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ color: '#14b8a6', fontWeight: 'bold' }}
                  >40% (<AnimatedCounter end={2} prefix="$" suffix="M" duration={1500} />)</motion.span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span>Sales & Marketing</span>
                  <span style={{ color: '#22c55e', fontWeight: 'bold' }}>35% ($1.75M)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span>Compliance & Legal</span>
                  <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>15% ($750K)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span>Operations & Team</span>
                  <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>10% ($500K)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#22c55e', marginBottom: '2rem' }}>18-Month Milestones</h3>
              <div style={{ fontSize: '1rem', lineHeight: '2' }}>
                <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '8px' }}>
                  <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>Month 6</p>
                  <p style={{ color: '#94a3b8' }}>$100M AUM, 100 clients</p>
                  <p style={{ color: '#94a3b8' }}>IBKR integration live</p>
                </div>
                <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>
                  <p style={{ fontWeight: 'bold', color: '#22c55e', marginBottom: '0.5rem' }}>Month 12</p>
                  <p style={{ color: '#94a3b8' }}>$350M AUM, 300 clients</p>
                  <p style={{ color: '#94a3b8' }}>GIFT City gateway operational</p>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(251, 191, 36, 0.1)', borderRadius: '8px' }}>
                  <p style={{ fontWeight: 'bold', color: '#fbbf24', marginBottom: '0.5rem' }}>Month 18</p>
                  <p style={{ color: '#94a3b8' }}>$750M AUM, 600 clients</p>
                  <p style={{ color: '#94a3b8' }}>Break-even operations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', padding: '2rem', background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))', borderRadius: '16px', border: '2px solid rgba(147, 51, 234, 0.3)', textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#c084fc', marginBottom: '1rem' }}>Seeking Lead Investor</p>
            <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginBottom: '0.5rem' }}>$5M Seed Round at $25M Pre-Money Valuation</p>
            <p style={{ fontSize: '1rem', color: '#94a3b8' }}>Prior commitments: $1.5M from angels and family offices</p>
          </div>
        </div>
      </motion.div>
    </CinematicSlideFrame>
  )
}
