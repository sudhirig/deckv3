import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function AIGatewaySlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Our AI Agent Makes It Simple</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3 style={{ color: '#14b8a6', marginBottom: '1.5rem' }}>The AI Experience</h3>
            <div style={{ background: 'rgba(20, 184, 166, 0.05)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>User:</p>
              <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>"I want 5% India exposure but worried about tax and currency. What's best?"</p>
            </div>
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>AI Gateway Agent:</p>
              <p style={{ color: '#94a3b8' }}>"Use GIFT City gateway - USD-denominated Indian equity funds with 0% Indian capital gains tax."</p>
            </div>
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
              <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: '1rem' }}>Recommendation</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Action:</strong> 5% to Indian Equities</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Vehicle:</strong> ABC India Flexi Cap (USD)</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Route:</strong> GIFT City (NSE IX)</p>
              <p><strong>Tax:</strong> 0% | <strong>Repatriation:</strong> Unrestricted</p>
            </div>
          </div>
          
          <div>
            <h3 style={{ color: '#14b8a6', marginBottom: '1.5rem' }}>What This Agent Does</h3>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <div style={{ marginBottom: '1.5rem', background: 'rgba(20, 184, 166, 0.05)', padding: '1.5rem', borderRadius: '12px' }}>
                <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>Automated Compliance</p>
                <p style={{ color: '#94a3b8' }}>Manages cross-border AML/KYC checks, regulatory filings</p>
              </div>
              <div style={{ marginBottom: '1.5rem', background: 'rgba(20, 184, 166, 0.05)', padding: '1.5rem', borderRadius: '12px' }}>
                <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>Tax & Route Optimization</p>
                <p style={{ color: '#94a3b8' }}>Analyzes FPI vs GIFT City for best after-tax path</p>
              </div>
              <div style={{ background: 'rgba(20, 184, 166, 0.05)', padding: '1.5rem', borderRadius: '12px' }}>
                <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>Seamless Execution</p>
                <p style={{ color: '#94a3b8' }}>End-to-end investment, monitoring, rebalancing</p>
              </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#fbbf24', marginTop: '2rem', fontWeight: 'bold' }}>
              Only AI platform with automated GIFT City access
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
