import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function AgentArchitectureSlide() {
  const cards = [
    <div key="broker-flow" style={{ gridColumn: 'span 1' }}>
      <h4 style={{ color: '#fbbf24', marginBottom: pxToRem(16) }}>Not a Brokerage</h4>
      <div style={{ background: 'rgba(251, 191, 36, 0.1)', padding: pxToRem(24), borderRadius: pxToRem(12) }}>
        <p style={{ marginBottom: pxToRem(8) }}>• Pure AI intelligence</p>
        <p>• Broker-agnostic</p>
      </div>
      
      <h4 style={{ color: '#14b8a6', marginTop: pxToRem(32), marginBottom: pxToRem(16) }}>AI Platform</h4>
      <div style={{ display: 'flex', justifyContent: 'center', background: 'rgba(20, 184, 166, 0.1)', padding: pxToRem(8), borderRadius: pxToRem(8), marginBottom: pxToRem(16) }}>
        <motion.div
          initial={{ y: pxToRem(-10) }}
          animate={{ y: pxToRem(10) }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ArrowDown size={24} stroke="url(#gradient-teal)" strokeWidth={2.5} />
        </motion.div>
      </div>
      
      <h4 style={{ color: '#14b8a6', marginBottom: pxToRem(16) }}>API Layer</h4>
      <div style={{ display: 'flex', justifyContent: 'center', background: 'rgba(20, 184, 166, 0.1)', padding: pxToRem(8), borderRadius: pxToRem(8), marginBottom: pxToRem(16) }}>
        <motion.div
          initial={{ y: pxToRem(-10) }}
          animate={{ y: pxToRem(10) }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', delay: 0.3 }}
        >
          <ArrowDown size={24} stroke="url(#gradient-teal)" strokeWidth={2.5} />
        </motion.div>
      </div>
      
      <motion.div 
        style={{ background: 'rgba(71, 85, 105, 0.2)', padding: pxToRem(16), borderRadius: pxToRem(8), marginBottom: pxToRem(8) }}
        initial={{ opacity: 0, x: pxToRem(-30) }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p style={{ fontSize: pxToRem(14.4), textAlign: 'center' }}>IB</p>
      </motion.div>
      <motion.div 
        style={{ background: 'rgba(71, 85, 105, 0.2)', padding: pxToRem(16), borderRadius: pxToRem(8), marginBottom: pxToRem(8) }}
        initial={{ opacity: 0, x: pxToRem(-30) }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p style={{ fontSize: pxToRem(14.4), textAlign: 'center' }}>Alpaca</p>
      </motion.div>
      <motion.div 
        style={{ background: 'rgba(71, 85, 105, 0.2)', padding: pxToRem(16), borderRadius: pxToRem(8), marginBottom: pxToRem(8) }}
        initial={{ opacity: 0, x: pxToRem(-30) }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p style={{ fontSize: pxToRem(14.4), textAlign: 'center' }}>TD</p>
      </motion.div>
      <motion.div 
        style={{ background: 'rgba(71, 85, 105, 0.2)', padding: pxToRem(16), borderRadius: pxToRem(8), marginBottom: pxToRem(16) }}
        initial={{ opacity: 0, x: pxToRem(-30) }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p style={{ fontSize: pxToRem(14.4), textAlign: 'center' }}>Schwab</p>
      </motion.div>
      
      <div style={{ display: 'flex', justifyContent: 'center', background: 'rgba(20, 184, 166, 0.1)', padding: pxToRem(8), borderRadius: pxToRem(8) }}>
        <motion.div
          initial={{ y: pxToRem(-10) }}
          animate={{ y: pxToRem(10) }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', delay: 0.6 }}
        >
          <ArrowDown size={24} stroke="url(#gradient-teal)" strokeWidth={2.5} />
        </motion.div>
      </div>
      
      <div style={{ marginTop: pxToRem(16) }}>
        <p style={{ fontSize: pxToRem(14.4), marginBottom: pxToRem(4.8) }}>Market Data</p>
        <p style={{ fontSize: pxToRem(14.4), marginBottom: pxToRem(4.8) }}>Tax APIs</p>
        <p style={{ fontSize: pxToRem(14.4) }}>Alt Platforms</p>
      </div>
    </div>,
    
    <div key="agent-types" style={{ gridColumn: 'span 2' }}>
      <div style={{ display: 'grid', gap: pxToRem(24) }}>
        <motion.div 
          style={{ background: 'rgba(20, 184, 166, 0.1)', padding: pxToRem(24), borderRadius: pxToRem(12) }}
          initial={{ opacity: 0, x: pxToRem(30) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 style={{ color: '#14b8a6', marginBottom: pxToRem(8) }}>Strategist Agents</h4>
          <p style={{ fontSize: pxToRem(15.2), color: '#94a3b8' }}>Buffett, Graham, Lynch philosophies</p>
        </motion.div>
        
        <motion.div 
          style={{ background: 'rgba(20, 184, 166, 0.1)', padding: pxToRem(24), borderRadius: pxToRem(12) }}
          initial={{ opacity: 0, x: pxToRem(30) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 style={{ color: '#14b8a6', marginBottom: pxToRem(8) }}>Analyst Agents</h4>
          <p style={{ fontSize: pxToRem(15.2), color: '#94a3b8' }}>News, sentiment, technical analysis</p>
        </motion.div>
        
        <motion.div 
          style={{ background: 'rgba(20, 184, 166, 0.1)', padding: pxToRem(24), borderRadius: pxToRem(12) }}
          initial={{ opacity: 0, x: pxToRem(30) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 style={{ color: '#14b8a6', marginBottom: pxToRem(8) }}>Portfolio Agents</h4>
          <p style={{ fontSize: pxToRem(15.2), color: '#94a3b8' }}>Risk, rebalancing, execution</p>
        </motion.div>
        
        <motion.div 
          style={{ background: 'rgba(20, 184, 166, 0.1)', padding: pxToRem(24), borderRadius: pxToRem(12) }}
          initial={{ opacity: 0, x: pxToRem(30) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h4 style={{ color: '#14b8a6', marginBottom: pxToRem(8) }}>Specialized Agents</h4>
          <p style={{ fontSize: pxToRem(15.2), color: '#94a3b8' }}>Tax, alternatives, India gateway</p>
        </motion.div>
      </div>
    </div>
  ]

  const summary = (
    <p style={{ textAlign: 'center', fontSize: pxToRem(16), color: '#64748b', fontStyle: 'italic' }}>
      Tech Stack: LangGraph orchestration - Multi-LLM (GPT-4, Claude, Gemini) - Real-time consensus building
    </p>
  )

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient-teal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      
      <GridLayout
        title='Our "Brain": A Swarm of 20+ Specialized Agents'
        subtitle="Multi-Agent Investment Intelligence System"
        cards={cards}
        columns={3}
        summary={summary}
      />
    </>
  )
}
