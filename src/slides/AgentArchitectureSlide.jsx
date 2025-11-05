import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function AgentArchitectureSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Our "Brain": A Swarm of 20+ Specialized Agents</h2>
        <p className="slide-subtitle" style={{ marginBottom: '2rem' }}>The Full Agentic Architecture Powering Your Wealth Management</p>
        
        <h3 style={{ color: '#14b8a6', textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>Multi-Agent Investment Intelligence System</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
          <div>
            <h4 style={{ color: '#fbbf24', marginBottom: '1rem' }}>Not a Brokerage</h4>
            <div style={{ background: 'rgba(251, 191, 36, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
              <p style={{ marginBottom: '0.5rem' }}>• Pure AI intelligence</p>
              <p>• Broker-agnostic</p>
            </div>
            
            <h4 style={{ color: '#14b8a6', marginTop: '2rem', marginBottom: '1rem' }}>AI Platform</h4>
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.95rem' }}>↓</p>
            </div>
            
            <h4 style={{ color: '#14b8a6', marginBottom: '1rem' }}>API Layer</h4>
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.95rem' }}>↓</p>
            </div>
            
            <div style={{ background: 'rgba(71, 85, 105, 0.2)', padding: '1rem', borderRadius: '8px', marginBottom: '0.5rem' }}>
              <p style={{ fontSize: '0.9rem', textAlign: 'center' }}>IB</p>
            </div>
            <div style={{ background: 'rgba(71, 85, 105, 0.2)', padding: '1rem', borderRadius: '8px', marginBottom: '0.5rem' }}>
              <p style={{ fontSize: '0.9rem', textAlign: 'center' }}>Alpaca</p>
            </div>
            <div style={{ background: 'rgba(71, 85, 105, 0.2)', padding: '1rem', borderRadius: '8px', marginBottom: '0.5rem' }}>
              <p style={{ fontSize: '0.9rem', textAlign: 'center' }}>TD</p>
            </div>
            <div style={{ background: 'rgba(71, 85, 105, 0.2)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.9rem', textAlign: 'center' }}>Schwab</p>
            </div>
            
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1rem', borderRadius: '8px' }}>
              <p style={{ fontSize: '0.95rem' }}>↓</p>
            </div>
            
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>Market Data</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>Tax APIs</p>
              <p style={{ fontSize: '0.9rem' }}>Alt Platforms</p>
            </div>
          </div>
          
          <div>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ color: '#14b8a6', marginBottom: '0.5rem' }}>Strategist Agents</h4>
                <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>Buffett, Graham, Lynch philosophies</p>
              </div>
              
              <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ color: '#14b8a6', marginBottom: '0.5rem' }}>Analyst Agents</h4>
                <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>News, sentiment, technical analysis</p>
              </div>
              
              <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ color: '#14b8a6', marginBottom: '0.5rem' }}>Portfolio Agents</h4>
                <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>Risk, rebalancing, execution</p>
              </div>
              
              <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ color: '#14b8a6', marginBottom: '0.5rem' }}>Specialized Agents</h4>
                <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>Tax, alternatives, India gateway</p>
              </div>
            </div>
          </div>
        </div>
        
        <p style={{ textAlign: 'center', fontSize: '1rem', color: '#64748b', marginTop: '2rem', fontStyle: 'italic' }}>
          Tech Stack: LangGraph orchestration - Multi-LLM (GPT-4, Claude, Gemini) - Real-time consensus building
        </p>
      </motion.div>
    </div>
  )
}
