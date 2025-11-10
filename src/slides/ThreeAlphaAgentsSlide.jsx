import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function ThreeAlphaAgentsSlide() {
  // Title
  const title = (
    <GradientText gradient="from-purple-400 to-pink-400">
      Our Moat: Three "Alpha Agents" Solving The Three Failures
    </GradientText>
  )
  
  // Subtitle
  const subtitle = "Each agent directly answers one pain point from Slide 4"

  // Grid cards - 3 Alpha Agents
  const cards = [
    // Tax Alpha Agent
    <motion.div
      key="tax"
      whileHover={{ scale: 1.02 }}
      className="feature-card glass-card"
      style={{ 
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.1))', 
        padding: '1.5rem', 
        borderRadius: pxToRem(12),
        borderLeft: `${pxToRem(4)} solid #14b8a6`,
        height: '100%'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Icon type="barChart" size={40} gradient="from-teal-400 to-green-400" delay={0.2} />
      </div>
      <h3 style={{ color: '#14b8a6', fontSize: '1.3rem', marginBottom: '1rem', textAlign: 'center' }}>
        Tax Alpha Agent
      </h3>
      <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#e2e8f0', fontWeight: 'bold' }}>
        Daily Tax-Loss Harvesting
      </p>
      <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '1rem' }}>
        +1.8% annual return recovery
      </p>
      <p style={{ fontSize: '1rem', color: '#fbbf24', fontWeight: 'bold', padding: '0.75rem', background: 'rgba(251, 191, 36, 0.1)', borderRadius: pxToRem(8) }}>
        Competitive Edge: Wealthfront does monthly. We do daily.
      </p>
    </motion.div>,
    
    // Alternative Asset Agent
    <motion.div
      key="alt"
      whileHover={{ scale: 1.02 }}
      className="feature-card glass-card"
      style={{ 
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.1))', 
        padding: '1.5rem', 
        borderRadius: pxToRem(12),
        borderLeft: `${pxToRem(4)} solid #3b82f6`,
        height: '100%'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Icon type="building" size={40} gradient="from-blue-400 to-cyan-400" delay={0.4} />
      </div>
      <h3 style={{ color: '#60a5fa', fontSize: '1.3rem', marginBottom: '1rem', textAlign: 'center' }}>
        Alternative Asset Agent
      </h3>
      <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#e2e8f0', fontWeight: 'bold' }}>
        AI Due Diligence
      </p>
      <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '1rem' }}>
        16,000+ funds analyzed
      </p>
      <p style={{ fontSize: '1rem', color: '#fbbf24', fontWeight: 'bold', padding: '0.75rem', background: 'rgba(251, 191, 36, 0.1)', borderRadius: pxToRem(8) }}>
        Unlock: +300-500bps potential alpha
      </p>
    </motion.div>,
    
    // India Gateway Agent
    <motion.div
      key="india"
      whileHover={{ scale: 1.02 }}
      className="feature-card glass-card"
      style={{ 
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(236, 72, 153, 0.1))', 
        padding: '1.5rem', 
        borderRadius: pxToRem(12),
        borderLeft: `${pxToRem(4)} solid #9333ea`,
        height: '100%'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Icon type="globe" size={40} gradient="from-purple-400 to-pink-400" delay={0.6} />
      </div>
      <h3 style={{ color: '#a78bfa', fontSize: '1.3rem', marginBottom: '1rem', textAlign: 'center' }}>
        India Gateway Agent
      </h3>
      <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#e2e8f0', fontWeight: 'bold' }}>
        GIFT City Access
      </p>
      <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '1rem' }}>
        0% tax, USD-based
      </p>
      <p style={{ fontSize: '1rem', color: '#fbbf24', fontWeight: 'bold', padding: '0.75rem', background: 'rgba(251, 191, 36, 0.1)', borderRadius: pxToRem(8) }}>
        Unique: Only AI platform with automated GIFT City access
      </p>
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
        fontSize: '1.4rem', 
        color: '#14b8a6', 
        fontWeight: 'bold',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(34, 197, 94, 0.15))',
        borderRadius: pxToRem(12),
        border: `${pxToRem(2)} solid rgba(20, 184, 166, 0.3)`
      }}
    >
      Each agent creates measurable alpha. Together, they're unstoppable.
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