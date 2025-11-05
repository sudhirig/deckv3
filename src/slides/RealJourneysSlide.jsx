import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function RealJourneysSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Real Journeys, Real Alpha</h2>
        <p className="slide-subtitle" style={{ marginBottom: '2rem' }}>Three HNW personas showing measurable outcomes</p>
        
        <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            <div>
              <h3 style={{ color: '#14b8a6', marginBottom: '1rem' }}>The Journey</h3>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontWeight: 'bold', color: '#14b8a6' }}>Equity Agent:</p>
                  <p style={{ color: '#94a3b8' }}>Analyzes AAPL, recommends covered call strategy for income</p>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontWeight: 'bold', color: '#14b8a6' }}>Alt Agent:</p>
                  <p style={{ color: '#94a3b8' }}>Scans 200+ PE funds, surfaces top 3 with 1-page memos</p>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold', color: '#14b8a6' }}>Execution:</p>
                  <p style={{ color: '#94a3b8' }}>One-click approval → IBKR execution</p>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h4 style={{ color: '#14b8a6', marginBottom: '1rem', textAlign: 'center' }}>After 12 Months:</h4>
              <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6' }}>$142K</p>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Income from covered calls</p>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6' }}>$85K</p>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Tax savings via TLH</p>
                </div>
                <div>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6' }}>$1.5M</p>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>PE allocation (2 funds)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem', textAlign: 'center', padding: '1rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '8px' }}>
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#14b8a6' }}>
              "Speaks my language, my speed"
            </p>
          </div>
        </div>
        
        <p style={{ textAlign: 'center', fontSize: '1rem', color: '#94a3b8', marginTop: '2rem' }}>
          Two additional personas (Chris - Inheritor, Sal - Tax Optimizer) available in appendix with similar quantified outcomes
        </p>
      </motion.div>
    </div>
  )
}
