import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import './SlideStyles.css'

export default function UnfairAdvantagesSlide() {
  // Title
  const title = (
    <GradientText gradient="from-purple-400 to-pink-400">
      Our Unfair Advantages: The Triple Lock
    </GradientText>
  )
  
  // Subtitle
  const subtitle = "Three defensive moats protecting our competitive position"

  // Grid cards - 3 moats
  const cards = [
    // Technical Moat
    <motion.div
      key="technical"
      whileHover={{ scale: 1.02 }}
      style={{ 
        padding: '1.5rem', 
        border: '3px solid #3b82f6', 
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))', 
        borderRadius: '16px',
        height: '100%'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Icon type="lock" size={36} gradient="from-blue-400 to-cyan-400" delay={0.2} />
      </div>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#60a5fa', textAlign: 'center', marginBottom: '1.5rem' }}>
        Technical Moat
      </h3>
      <div style={{ fontSize: '1rem', lineHeight: '1.7' }}>
        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', color: '#93c5fd', marginBottom: '0.5rem' }}>2-Year Head Start</p>
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Proprietary agentic AI with 68+ specialized agents</p>
        </div>
        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', color: '#93c5fd', marginBottom: '0.5rem' }}>Time to Replicate</p>
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>24-30 months to build equivalent multi-agent system</p>
        </div>
        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '8px' }}>
          <p style={{ fontWeight: 'bold', color: '#93c5fd', marginBottom: '0.5rem' }}>Patents Pending</p>
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Core orchestration and consensus algorithms</p>
        </div>
      </div>
    </motion.div>,
    
    // Regulatory Moat
    <motion.div
      key="regulatory"
      whileHover={{ scale: 1.02 }}
      style={{ 
        padding: '1.5rem', 
        border: '3px solid #22c55e', 
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.05))', 
        borderRadius: '16px',
        height: '100%'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Icon type="scale" size={36} gradient="from-green-400 to-emerald-400" delay={0.4} />
      </div>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#4ade80', textAlign: 'center', marginBottom: '1.5rem' }}>
        Regulatory Moat
      </h3>
      <div style={{ fontSize: '1rem', lineHeight: '1.7' }}>
        <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', color: '#86efac', marginBottom: '0.5rem' }}>18-Month Barrier</p>
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>GIFT City license + NSE IX infrastructure</p>
        </div>
        <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', color: '#86efac', marginBottom: '0.5rem' }}>Exclusive Access</p>
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Early partnerships with GIFT City entities</p>
        </div>
        <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1rem', borderRadius: '8px' }}>
          <p style={{ fontWeight: 'bold', color: '#86efac', marginBottom: '0.5rem' }}>Capital Intensive</p>
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>$2-3M+ required for compliance & licensing</p>
        </div>
      </div>
    </motion.div>,
    
    // Trust Moat
    <motion.div
      key="trust"
      whileHover={{ scale: 1.02 }}
      style={{ 
        padding: '1.5rem', 
        border: '3px solid #14b8a6', 
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.05))', 
        borderRadius: '16px',
        height: '100%'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Icon type="shield" size={36} gradient="from-teal-400 to-green-400" delay={0.6} />
      </div>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#5eead4', textAlign: 'center', marginBottom: '1.5rem' }}>
        Trust Moat
      </h3>
      <div style={{ fontSize: '1rem', lineHeight: '1.7' }}>
        <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', color: '#5eead4', marginBottom: '0.5rem' }}>Zero Custody Risk</p>
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Broker-agnostic - never hold client assets</p>
        </div>
        <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', color: '#5eead4', marginBottom: '0.5rem' }}>Faster Adoption</p>
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Works with existing brokerage accounts</p>
        </div>
        <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1rem', borderRadius: '8px' }}>
          <p style={{ fontWeight: 'bold', color: '#5eead4', marginBottom: '0.5rem' }}>Incumbent Can't Pivot</p>
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Brokers locked into custody revenue model</p>
        </div>
      </div>
    </motion.div>
  ]

  // Summary
  const summary = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{ 
        textAlign: 'center', 
        padding: '1.5rem', 
        background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))', 
        borderRadius: '12px', 
        border: '2px solid rgba(147, 51, 234, 0.3)'
      }}
    >
      <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#c084fc' }}>
        Combined moat width: 36+ months for any competitor to match our full capabilities
      </p>
    </motion.div>
  )

  return (
    <GridLayout
      title={title}
      subtitle={subtitle}
      columns={3}
      cards={cards}
      summary={summary}
    />
  )
}