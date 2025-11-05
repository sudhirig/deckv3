import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function ValueCreationSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">We Create 10x More Value Than We Charge</h2>
        
        <div style={{ marginTop: '3rem' }}>
          <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '3rem', borderRadius: '16px', border: '2px solid rgba(20, 184, 166, 0.3)' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#14b8a6', textAlign: 'center', marginBottom: '3rem' }}>Example: $10M Portfolio</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: '#86efac', marginBottom: '1.5rem' }}>Value Created Annually</h4>
                <div style={{ fontSize: '1.1rem', lineHeight: '2' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span>Tax Alpha (1.8%)</span>
                    <span style={{ color: '#22c55e', fontWeight: 'bold' }}>$180,000</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span>Alternative Access (3%)</span>
                    <span style={{ color: '#22c55e', fontWeight: 'bold' }}>$300,000</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span>GIFT City Savings</span>
                    <span style={{ color: '#22c55e', fontWeight: 'bold' }}>$120,000</span>
                  </div>
                  <div style={{ borderTop: '2px solid rgba(34, 197, 94, 0.3)', marginTop: '1rem', paddingTop: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem' }}>
                      <span style={{ fontWeight: 'bold' }}>Total Value</span>
                      <span style={{ color: '#22c55e', fontWeight: 'bold' }}>$600,000</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.2rem', color: '#fbbf24', marginBottom: '1.5rem' }}>Our Fee</h4>
                <div style={{ fontSize: '1.1rem', lineHeight: '2' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span>Annual Fee (0.75%)</span>
                    <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>$75,000</span>
                  </div>
                  <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(34, 197, 94, 0.2)', borderRadius: '12px', textAlign: 'center' }}>
                    <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Return on Investment</p>
                    <p style={{ fontSize: '3rem', fontWeight: 'bold', color: '#22c55e' }}>8x</p>
                    <p style={{ fontSize: '1rem', color: '#94a3b8', marginTop: '0.5rem' }}>Client gets $8 for every $1 paid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem', textAlign: 'center', padding: '1.5rem', background: 'rgba(147, 51, 234, 0.1)', borderRadius: '12px' }}>
            <p style={{ fontSize: '1.1rem', color: '#a78bfa' }}>Clients see value in their first tax season. Retention compounds from there.</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
