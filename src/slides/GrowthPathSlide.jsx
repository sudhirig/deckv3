import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './SlideStyles.css'

export default function GrowthPathSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Path to $1B AUM in 36 Months</h2>
        
        <div style={{ marginTop: '2rem' }}>
          <div style={{ background: 'rgba(20, 184, 166, 0.05)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Year 1</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6' }}>$50M</p>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>AUM</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ArrowRight size={32} stroke="#475569" strokeWidth={2.5} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Year 2</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>$250M</p>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>AUM</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ArrowRight size={32} stroke="#475569" strokeWidth={2.5} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Year 3</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>$1B</p>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>AUM Target</p>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(20, 184, 166, 0.1)', border: '1px solid rgba(20, 184, 166, 0.3)', borderRadius: '12px' }}>
              <p style={{ color: '#14b8a6', fontWeight: 'bold', marginBottom: '1rem' }}>Unit Economics</p>
              <div style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.8' }}>
                <div>CAC: $3,500 (blended)</div>
                <div>LTV: $62,500 (10-year)</div>
                <div>LTV/CAC: <strong style={{ color: '#14b8a6' }}>17.8:1</strong></div>
                <div>Payback: <strong style={{ color: '#14b8a6' }}>3.5 months</strong></div>
              </div>
            </div>
            
            <div style={{ padding: '1.5rem', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '12px' }}>
              <p style={{ color: '#22c55e', fontWeight: 'bold', marginBottom: '1rem' }}>Margins</p>
              <div style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.8' }}>
                <div>Gross Margin: <strong style={{ color: '#22c55e' }}>93%</strong></div>
                <div>vs Traditional: 40-50%</div>
                <div>Break-even: Month 28</div>
                <div>Cash+: Month 30</div>
              </div>
            </div>
            
            <div style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '12px' }}>
              <p style={{ color: '#3b82f6', fontWeight: 'bold', marginBottom: '1rem' }}>Benchmark</p>
              <div style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.8' }}>
                <div>Wealthfront: $1B in 2.5 years</div>
                <div>Our HNW model: Faster trajectory</div>
                <div>Higher ARPU, better retention</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
