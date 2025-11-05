import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function UnfairAdvantagesSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Our Unfair Advantages: The Triple Lock</h2>
        <p className="slide-subtitle" style={{ marginBottom: '2rem' }}>Three defensive moats protecting our competitive position</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div style={{ padding: '2rem', border: '2px solid #3b82f6', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))', borderRadius: '16px' }}>
            <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>🔒</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#60a5fa', textAlign: 'center', marginBottom: '1.5rem' }}>Technical Moat</h3>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#93c5fd', marginBottom: '0.5rem' }}>2-Year Head Start</p>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Proprietary agentic AI architecture with 20+ specialized agents</p>
              </div>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#93c5fd', marginBottom: '0.5rem' }}>Time to Replicate</p>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>24-30 months for competitors to build equivalent multi-agent system</p>
              </div>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ fontWeight: 'bold', color: '#93c5fd', marginBottom: '0.5rem' }}>Patents Pending</p>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Core orchestration and consensus algorithms</p>
              </div>
            </div>
          </div>
          
          <div style={{ padding: '2rem', border: '2px solid #22c55e', background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.05))', borderRadius: '16px' }}>
            <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>⚖️</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#4ade80', textAlign: 'center', marginBottom: '1.5rem' }}>Regulatory Moat</h3>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
              <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#86efac', marginBottom: '0.5rem' }}>18-Month Barrier</p>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>GIFT City IFSCA license + integration with NSE IX infrastructure</p>
              </div>
              <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#86efac', marginBottom: '0.5rem' }}>Exclusive Relationships</p>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Early partnerships with GIFT City entities and broker relationships</p>
              </div>
              <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ fontWeight: 'bold', color: '#86efac', marginBottom: '0.5rem' }}>Capital Intensive</p>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>$2-3M+ required for compliance, licensing, and integration</p>
              </div>
            </div>
          </div>
          
          <div style={{ padding: '2rem', border: '2px solid #14b8a6', background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.05))', borderRadius: '16px' }}>
            <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>🛡️</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#5eead4', textAlign: 'center', marginBottom: '1.5rem' }}>Trust Moat</h3>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
              <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#5eead4', marginBottom: '0.5rem' }}>Zero Custody Risk</p>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Broker-agnostic model - we never hold client assets</p>
              </div>
              <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#5eead4', marginBottom: '0.5rem' }}>Faster Adoption</p>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>No asset transfer required, works with existing brokerage accounts</p>
              </div>
              <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ fontWeight: 'bold', color: '#5eead4', marginBottom: '0.5rem' }}>Incumbent Can't Pivot</p>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Traditional brokers locked into custody revenue model</p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', textAlign: 'center', padding: '1.5rem', background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))', borderRadius: '12px', border: '1px solid rgba(147, 51, 234, 0.3)' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#c084fc' }}>
            Combined moat width: 36+ months for any competitor to match our full capabilities
          </p>
        </div>
      </motion.div>
    </div>
  )
}
