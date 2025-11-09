import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function TaxAlphaDailySlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
      >
        <h2 className="slide-title">Our "Tax Alpha" Agent: Daily vs Annual</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>What Others Can't Do</h3>
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>The Problem</p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>- Wealthfront/Betterment: <strong>Monthly</strong> TLH</p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>- Most RIAs: <strong>Yearly</strong> TLH</p>
              <p style={{ fontSize: '0.95rem' }}>- Miss 80% of opportunities</p>
            </div>
          </div>
          
          <div>
            <h3 style={{ color: '#14b8a6', marginBottom: '1rem' }}>Our Daily TLH</h3>
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>- Scans <strong>every market day</strong></p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>- Wash-sale-aware trades</p>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>- <strong>2-4x more savings</strong></p>
              <p style={{ fontWeight: 'bold', color: '#14b8a6', marginTop: '1rem' }}>Smart Offsetting Strategy</p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>- Short-term gains (37% tax) first</p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>- Then long-term gains (20%)</p>
              <p style={{ fontSize: '0.95rem' }}>- Maximizes tax alpha per trade</p>
            </div>
          </div>
          
          <div>
            <h3 style={{ color: '#14b8a6', marginBottom: '1rem' }}>The Impact</h3>
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>+1.8%</div>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Additional Annual Return</p>
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Yearly TLH (Traditional)</p>
                <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>+7.0%</p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#14b8a6' }}>Daily TLH (Our AI)</p>
                <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#14b8a6' }}>+8.8%</p>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '1rem' }}>On $10M Portfolio</p>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>$180K/year</p>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>Additional tax savings vs traditional yearly harvesting</p>
          <span style={{ fontSize: '0.7rem', color: '#64748b', fontStyle: 'italic', display: 'block', marginTop: '0.5rem' }}>
            Source: JPMorgan Tax-Loss Harvesting Research, 2023
          </span>
        </div>
      </motion.div>
    </div>
  )
}
