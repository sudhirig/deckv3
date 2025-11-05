import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import './SlideStyles.css'

export default function ThreeAlphaAgentsSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Our Moat: Three "Alpha Agents" Solving The Three Failures</h2>
        <p className="slide-subtitle" style={{ marginBottom: '3rem' }}>Each agent directly answers one pain point from Slide 4</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div className="feature-card" style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '2rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <Icon type="barChart" size={40} gradient="from-teal-400 to-green-400" delay={0.2} />
            </div>
            <h3 style={{ color: '#14b8a6', fontSize: '1.3rem', marginBottom: '1rem' }}>Tax Alpha Agent</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Daily Tax-Loss Harvesting</p>
            <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '1rem' }}>+1.8% annual return recovery</p>
            <p style={{ fontSize: '1rem', color: '#fbbf24', fontWeight: 'bold' }}>Competitive Edge: Wealthfront does monthly. We do daily.</p>
          </div>
          
          <div className="feature-card" style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '2rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <Icon type="building" size={40} gradient="from-blue-400 to-cyan-400" delay={0.4} />
            </div>
            <h3 style={{ color: '#14b8a6', fontSize: '1.3rem', marginBottom: '1rem' }}>Alternative Asset Agent</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>AI Due Diligence</p>
            <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '1rem' }}>16,000+ funds analyzed</p>
            <p style={{ fontSize: '1rem', color: '#fbbf24', fontWeight: 'bold' }}>Unlock: +300-500bps potential alpha.</p>
          </div>
          
          <div className="feature-card" style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '2rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <Icon type="globe" size={40} gradient="from-purple-400 to-pink-400" delay={0.6} />
            </div>
            <h3 style={{ color: '#14b8a6', fontSize: '1.3rem', marginBottom: '1rem' }}>India Gateway Agent</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>GIFT City Access</p>
            <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '1rem' }}>0% tax, USD-based</p>
            <p style={{ fontSize: '1rem', color: '#fbbf24', fontWeight: 'bold' }}>Unique: Only AI platform with automated GIFT City access.</p>
          </div>
        </div>
        
        <p style={{ textAlign: 'center', fontSize: '1.3rem', color: '#14b8a6', marginTop: '2rem', fontWeight: 'bold' }}>
          Each agent creates measurable alpha. Together, they're unstoppable.
        </p>
      </motion.div>
    </div>
  )
}
