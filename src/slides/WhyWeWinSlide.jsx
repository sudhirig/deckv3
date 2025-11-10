import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { X, Check, TrendingUp, Shield } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function WhyWeWinSlide() {
  // Title
  const title = (
    <GradientText gradient="from-cyan-400 to-blue-400">
      Why We Win: AI Capability + Global Access
    </GradientText>
  )
  
  // Subtitle
  const subtitle = "The Competitive Landscape (US Wealth Tech)"

  // Grid cards - 4 quadrants showing competitive positioning
  const cards = [
    // Bottom-Left: Robo-Advisors
    <motion.div
      key="robo"
      whileHover={{ scale: 1.02 }}
      style={{ 
        height: '100%',
        padding: '2rem', 
        border: `${pxToRem(3)} solid #ef4444`, 
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(248, 113, 113, 0.1))', 
        borderRadius: pxToRem(12)
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <X size={28} color="#ef4444" strokeWidth={3} />
        <h3 style={{ color: '#fca5a5', fontSize: '1.3rem' }}>Bottom-Left: Robo-Advisors</h3>
      </div>
      <p style={{ fontSize: '1.2rem', color: '#fecaca', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        Wealthfront, Betterment
      </p>
      <p style={{ fontSize: '1.1rem', color: '#e2e8f0', lineHeight: '1.6' }}>
        • Commoditized mass market<br />
        • Low tech capabilities<br />
        • No global access<br />
        • Race to the bottom on fees
      </p>
    </motion.div>,

    // Bottom-Right: Legacy Platforms
    <motion.div
      key="legacy"
      whileHover={{ scale: 1.02 }}
      style={{ 
        height: '100%',
        padding: '2rem', 
        border: `${pxToRem(3)} solid #f97316`, 
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(251, 146, 60, 0.1))', 
        borderRadius: pxToRem(12)
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <X size={28} color="#f97316" strokeWidth={3} />
        <h3 style={{ color: '#fdba74', fontSize: '1.3rem' }}>Bottom-Right: Legacy Platforms</h3>
      </div>
      <p style={{ fontSize: '1.2rem', color: '#fed7aa', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        Addepar, Black Diamond
      </p>
      <p style={{ fontSize: '1.1rem', color: '#e2e8f0', lineHeight: '1.6' }}>
        • High AUM but no AI<br />
        • Outdated technology stack<br />
        • Domestic only<br />
        • Slow to innovate
      </p>
    </motion.div>,

    // Top-Right: Arta Finance (Validator)
    <motion.div
      key="arta"
      whileHover={{ scale: 1.02 }}
      style={{ 
        height: '100%',
        padding: '2rem', 
        border: `${pxToRem(3)} solid #3b82f6`, 
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(96, 165, 250, 0.1))', 
        borderRadius: pxToRem(12)
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <TrendingUp size={28} color="#3b82f6" />
        <h3 style={{ color: '#93c5fd', fontSize: '1.3rem' }}>Top-Right: Arta Finance</h3>
      </div>
      <p style={{ fontSize: '1.2rem', color: '#bfdbfe', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        Market Validator - $90M Raised
      </p>
      <p style={{ fontSize: '1.1rem', color: '#e2e8f0', lineHeight: '1.6' }}>
        • Validates agentic AI wealth model<br />
        • Domestic focus only<br />
        • No GIFT City access<br />
        • We add global moat
      </p>
    </motion.div>,

    // Top-Right: Our Platform (Winner)
    <motion.div
      key="us"
      whileHover={{ scale: 1.05 }}
      style={{ 
        height: '100%',
        padding: '2rem', 
        border: `${pxToRem(3)} solid #22c55e`, 
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.2))', 
        borderRadius: pxToRem(12),
        boxShadow: '0 0 30px rgba(34, 197, 94, 0.3)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <Check size={28} color="#22c55e" strokeWidth={3} />
        <Shield size={28} color="#22c55e" />
        <h3 style={{ color: '#86efac', fontSize: '1.3rem' }}>Top-Right: Our Platform</h3>
      </div>
      <p style={{ fontSize: '1.2rem', color: '#bbf7d0', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        The Clear Winner
      </p>
      <p style={{ fontSize: '1.1rem', color: '#e2e8f0', lineHeight: '1.6' }}>
        • <strong style={{ color: '#86efac' }}>Explainable AI</strong> (68+ agents)<br />
        • <strong style={{ color: '#86efac' }}>Broker-Agnostic</strong> platform<br />
        • <strong style={{ color: '#86efac' }}>Exclusive GIFT City</strong> gateway<br />
        • <strong style={{ color: '#86efac' }}>100% Live</strong> with real clients
      </p>
    </motion.div>
  ]

  // Summary
  const summary = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(34, 197, 94, 0.15))', 
        borderRadius: pxToRem(12), 
        border: `${pxToRem(2)} solid rgba(20, 184, 166, 0.3)`,
        marginTop: '2rem'
      }}
    >
      <span style={{ color: '#14b8a6', fontWeight: 'bold', fontSize: '1.4rem' }}>
        Arta proved AI wealth works at $90M valuation.
      </span>
      <span style={{ color: '#e2e8f0', fontSize: '1.2rem', display: 'block', marginTop: '0.5rem' }}>
        We add explainable AI + global access moat = 10x opportunity
      </span>
    </motion.div>
  )

  return (
    <GridLayout
      title={title}
      subtitle={subtitle}
      columns={2}
      cards={cards}
      summary={summary}
    />
  )
}