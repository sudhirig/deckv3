import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import './SlideStyles.css'

export default function TeamSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Built by Experts in AI, Finance, and Global Markets</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ padding: '2rem', border: '2px solid #14b8a6', borderRadius: '16px', background: 'rgba(20, 184, 166, 0.1)' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#14b8a6', marginBottom: '1.5rem' }}>Leadership</h3>
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontWeight: 'bold', color: '#e2e8f0' }}>[Founder, CEO]</p>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>10+ yrs wealth management</p>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Ex-Goldman Sachs PWM</p>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>MBA, CFA</p>
              </div>
              <div>
                <p style={{ fontWeight: 'bold', color: '#e2e8f0' }}>[CTO]</p>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>AI/ML architect</p>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Ex-Google Brain</p>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>PhD, Stanford CS</p>
              </div>
            </div>
          </div>
          
          <div style={{ padding: '2rem', border: '2px solid #22c55e', borderRadius: '16px', background: 'rgba(34, 197, 94, 0.1)' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#22c55e', marginBottom: '1.5rem' }}>Advisors</h3>
            <div style={{ fontSize: '0.95rem', lineHeight: '2', color: '#94a3b8' }}>
              <div>• Former SEC Commissioner</div>
              <div>• Head of Tax, Big 4 firm</div>
              <div>• India market specialist</div>
              <div>• GIFT City regulatory expert</div>
              <div>• AI ethics researcher</div>
            </div>
          </div>
          
          <div style={{ padding: '2rem', border: '2px solid #3b82f6', borderRadius: '16px', background: 'rgba(59, 130, 246, 0.1)' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#3b82f6', marginBottom: '1.5rem' }}>Track Record</h3>
            <div style={{ fontSize: '0.95rem', lineHeight: '2', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={18} stroke="#3b82f6" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                <span>$2B+ AUM managed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={18} stroke="#3b82f6" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                <span>3 successful exits</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={18} stroke="#3b82f6" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                <span>15+ AI patents</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={18} stroke="#3b82f6" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                <span>Published research in top journals</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={18} stroke="#3b82f6" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                <span>Regulatory compliance 100%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', textAlign: 'center', padding: '1.5rem', background: 'rgba(147, 51, 234, 0.1)', borderRadius: '12px', border: '1px solid rgba(147, 51, 234, 0.3)' }}>
          <p style={{ fontSize: '1.1rem', color: '#a78bfa', fontWeight: 'bold' }}>
            Domain expertise + technical capability + regulatory knowledge = Rare combination
          </p>
        </div>
      </motion.div>
    </div>
  )
}
