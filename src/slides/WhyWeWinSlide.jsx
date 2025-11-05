import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function WhyWeWinSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Why We Win: AI Capability + Global Access</h2>
        <p className="slide-subtitle" style={{ marginBottom: '2rem' }}>The Competitive Landscape (US Wealth Tech)</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <div style={{ padding: '1.5rem', border: '2px solid #ef4444', background: 'rgba(239, 68, 68, 0.2)', borderRadius: '12px', marginBottom: '1rem' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#fca5a5', marginBottom: '0.5rem' }}>Bottom-Left: Robo-Advisors</p>
              <p style={{ fontSize: '0.95rem', color: '#fecaca' }}>Wealthfront, Betterment - Commoditized mass market, low tech, no global access</p>
            </div>
            
            <div style={{ padding: '1.5rem', border: '2px solid #f97316', background: 'rgba(249, 115, 22, 0.2)', borderRadius: '12px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#fdba74', marginBottom: '0.5rem' }}>Bottom-Right: Legacy Platforms</p>
              <p style={{ fontSize: '0.95rem', color: '#fed7aa' }}>Addepar, Black Diamond - High AUM but no AI, outdated tech, domestic only</p>
            </div>
          </div>
          
          <div>
            <div style={{ padding: '1.5rem', border: '2px solid #3b82f6', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '12px', marginBottom: '1rem' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#93c5fd', marginBottom: '0.5rem' }}>Top-Right: Arta Finance (Validator)</p>
              <p style={{ fontSize: '0.95rem', color: '#bfdbfe' }}>$90M raised - Validates the agentic AI wealth model, but domestic only</p>
            </div>
            
            <div style={{ padding: '1.5rem', border: '2px solid #22c55e', background: 'rgba(34, 197, 94, 0.2)', borderRadius: '12px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#86efac', marginBottom: '0.5rem' }}>Top-Right: Our Platform (Winner)</p>
              <p style={{ fontSize: '0.95rem', color: '#bbf7d0' }}>Explainable AI + Broker-Agnostic + Exclusive GIFT City Gateway</p>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', textAlign: 'center', padding: '1.5rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '12px', border: '1px solid rgba(20, 184, 166, 0.3)' }}>
          <span style={{ color: '#14b8a6', fontWeight: 'bold', fontSize: '1.1rem' }}>Arta proved AI wealth works at $90M valuation.</span>
          <span style={{ color: '#94a3b8', marginLeft: '1rem' }}>We add explainable AI + global access moat.</span>
        </div>
      </motion.div>
    </div>
  )
}
