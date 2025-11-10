import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Check, ArrowRight } from 'lucide-react'
import Icon from '../components/Icon'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function LivePlatformSlide() {
  // Title
  const title = (
    <GradientText gradient="from-green-400 to-emerald-400">
      This is Not a Concept. Our Core Platform is Live.
    </GradientText>
  )
  
  // Subtitle
  const subtitle = "Proven Technology - Real Portfolio - Production Ready"

  // Grid cards - 3 key features
  const cards = [
    // Live Integration
    <motion.div
      key="integration"
      className="glass-card"
      whileHover={{ scale: 1.02 }}
      style={{ 
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.1))', 
        padding: '1.5rem',
        borderRadius: pxToRem(12),
        height: '100%'
      }}
    >
      <h3 style={{ color: '#14b8a6', marginBottom: '1rem', fontSize: '1.3rem' }}>Live Integration</h3>
      <div style={{ fontSize: '1rem', lineHeight: '1.8' }}>
        <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Check size={20} stroke="#14b8a6" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
          <p style={{ color: '#e2e8f0' }}>Zerodha Kite API (India's largest broker)</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Check size={20} stroke="#14b8a6" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
          <p style={{ color: '#e2e8f0' }}>Real-money test portfolio actively managed</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Check size={20} stroke="#14b8a6" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
          <p style={{ color: '#e2e8f0' }}>Holdings: Adani Ports, ONGC, HDFC Index</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
          <Check size={20} stroke="#14b8a6" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
          <p style={{ color: '#e2e8f0' }}>Multi-broker architecture validated</p>
        </div>
      </div>
    </motion.div>,
    
    // Production Stack
    <motion.div
      key="stack"
      className="glass-card"
      whileHover={{ scale: 1.02 }}
      style={{ 
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(124, 58, 237, 0.1))', 
        padding: '1.5rem',
        borderRadius: pxToRem(12),
        height: '100%'
      }}
    >
      <h3 style={{ color: '#a78bfa', marginBottom: '1rem', fontSize: '1.3rem' }}>Production Stack</h3>
      <div style={{ fontSize: '1rem', lineHeight: '1.8', color: '#e2e8f0' }}>
        <p style={{ marginBottom: '0.5rem' }}>• React 18 + TypeScript</p>
        <p style={{ marginBottom: '0.5rem' }}>• Node.js + Express</p>
        <p style={{ marginBottom: '0.5rem' }}>• PostgreSQL (dual DBs)</p>
        <p style={{ marginBottom: '0.5rem' }}>• FastAPI ML services</p>
        <p style={{ marginBottom: '0.5rem' }}>• LangGraph orchestration</p>
        <p>• Multi-LLM ensemble</p>
      </div>
    </motion.div>,
    
    // US Market Ready
    <motion.div
      key="market"
      className="glass-card"
      whileHover={{ scale: 1.02 }}
      style={{ 
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(249, 115, 22, 0.1))', 
        padding: '1.5rem',
        borderRadius: pxToRem(12),
        height: '100%'
      }}
    >
      <h3 style={{ color: '#fbbf24', marginBottom: '1rem', fontSize: '1.3rem' }}>US Market Ready</h3>
      <div style={{ fontSize: '1rem', lineHeight: '1.8' }}>
        <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <ArrowRight size={20} stroke="#fbbf24" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
          <p style={{ color: '#e2e8f0' }}>Q1 2025: IBKR integration (sandbox)</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <ArrowRight size={20} stroke="#fbbf24" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
          <p style={{ color: '#e2e8f0' }}>Q2 2025: Alpaca launch (commission-free)</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
          <ArrowRight size={20} stroke="#fbbf24" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
          <p style={{ color: '#e2e8f0' }}>Broker-agnostic architecture proven</p>
        </div>
      </div>
    </motion.div>
  ]

  // Summary
  const summary = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      style={{ 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.25), rgba(20, 184, 166, 0.15))', 
        padding: '2rem', 
        borderRadius: pxToRem(16),
        border: `${pxToRem(2)} solid rgba(34, 197, 94, 0.3)`
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Icon type="barChart" size={48} gradient="from-teal-400 to-green-400" delay={0.3} />
      </div>
      <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '0.5rem' }}>
        100% OPERATIONAL TODAY
      </p>
      <p style={{ fontSize: '1.3rem', color: '#e2e8f0', marginTop: '0.5rem' }}>
        Managing real money. Validated with live broker integration.
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