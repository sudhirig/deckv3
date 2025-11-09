import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import './SlideStyles.css'

export default function AgentArchitectureSlide() {
  const cards = [
    <div key="broker-flow" style={{ gridColumn: 'span 1' }}>
      <h4 style={{ color: '#fbbf24', marginBottom: '1rem' }}>Not a Brokerage</h4>
      <div style={{ background: 'rgba(251, 191, 36, 0.1)', padding: '1.5rem', borderRadius: '0.75rem' }}>
        <p style={{ marginBottom: '0.5rem' }}>• Pure AI intelligence</p>
        <p>• Broker-agnostic</p>
      </div>
      
      <h4 style={{ color: '#14b8a6', marginTop: '2rem', marginBottom: '1rem' }}>AI Platform</h4>
      <div style={{ display: 'flex', justifyContent: 'center', background: 'rgba(20, 184, 166, 0.1)', padding: '0.5rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
        <motion.div
          initial={{ y: -0.625 }}
          animate={{ y: 0.625 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ArrowDown size={24} stroke="url(#gradient-teal)" strokeWidth={2.5} />
        </motion.div>
      </div>
      
      <h4 style={{ color: '#14b8a6', marginBottom: '1rem' }}>API Layer</h4>
      <div style={{ display: 'flex', justifyContent: 'center', background: 'rgba(20, 184, 166, 0.1)', padding: '0.5rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
        <motion.div
          initial={{ y: -0.625 }}
          animate={{ y: 0.625 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', delay: 0.3 }}
        >
          <ArrowDown size={24} stroke="url(#gradient-teal)" strokeWidth={2.5} />
        </motion.div>
      </div>
      
      <motion.div 
        style={{ background: 'rgba(71, 85, 105, 0.2)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '0.5rem' }}
        initial={{ opacity: 0, x: -1.875 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p style={{ fontSize: '0.9rem', textAlign: 'center' }}>IB</p>
      </motion.div>
      <motion.div 
        style={{ background: 'rgba(71, 85, 105, 0.2)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '0.5rem' }}
        initial={{ opacity: 0, x: -1.875 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p style={{ fontSize: '0.9rem', textAlign: 'center' }}>Alpaca</p>
      </motion.div>
      <motion.div 
        style={{ background: 'rgba(71, 85, 105, 0.2)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '0.5rem' }}
        initial={{ opacity: 0, x: -1.875 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p style={{ fontSize: '0.9rem', textAlign: 'center' }}>TD</p>
      </motion.div>
      <motion.div 
        style={{ background: 'rgba(71, 85, 105, 0.2)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}
        initial={{ opacity: 0, x: -1.875 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p style={{ fontSize: '0.9rem', textAlign: 'center' }}>Schwab</p>
      </motion.div>
      
      <div style={{ display: 'flex', justifyContent: 'center', background: 'rgba(20, 184, 166, 0.1)', padding: '0.5rem', borderRadius: '0.5rem' }}>
        <motion.div
          initial={{ y: -0.625 }}
          animate={{ y: 0.625 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', delay: 0.6 }}
        >
          <ArrowDown size={24} stroke="url(#gradient-teal)" strokeWidth={2.5} />
        </motion.div>
      </div>
      
      <div style={{ marginTop: '1rem' }}>
        <p style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>Market Data</p>
        <p style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>Tax APIs</p>
        <p style={{ fontSize: '0.9rem' }}>Alt Platforms</p>
      </div>
    </div>,
    
    <div key="agent-types" style={{ gridColumn: 'span 2' }}>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <motion.div 
          style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '0.75rem' }}
          initial={{ opacity: 0, x: 1.875 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 style={{ color: '#14b8a6', marginBottom: '0.5rem' }}>Strategist Agents</h4>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>Buffett, Graham, Lynch philosophies</p>
        </motion.div>
        
        <motion.div 
          style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '0.75rem' }}
          initial={{ opacity: 0, x: 1.875 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 style={{ color: '#14b8a6', marginBottom: '0.5rem' }}>Analyst Agents</h4>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>News, sentiment, technical analysis</p>
        </motion.div>
        
        <motion.div 
          style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '0.75rem' }}
          initial={{ opacity: 0, x: 1.875 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 style={{ color: '#14b8a6', marginBottom: '0.5rem' }}>Portfolio Agents</h4>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>Risk, rebalancing, execution</p>
        </motion.div>
        
        <motion.div 
          style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '0.75rem' }}
          initial={{ opacity: 0, x: 1.875 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h4 style={{ color: '#14b8a6', marginBottom: '0.5rem' }}>Specialized Agents</h4>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>Tax, alternatives, India gateway</p>
        </motion.div>
      </div>
    </div>
  ]

  const summary = (
    <p style={{ textAlign: 'center', fontSize: '1rem', color: '#64748b', fontStyle: 'italic' }}>
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
