import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Icon from '../components/Icon'
import './SlideStyles.css'

export default function LivePlatformSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">This is Not a Concept. Our Core Platform is Live.</h2>
        <p className="slide-subtitle" style={{ marginBottom: '2rem' }}>Proven Technology - Real Portfolio - Production Ready</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#14b8a6', marginBottom: '1rem', fontSize: '1.2rem' }}>Live Integration</h3>
            <div style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Check size={18} stroke="#14b8a6" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <p>Zerodha Kite API (India's largest broker)</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Check size={18} stroke="#14b8a6" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <p>Real-money test portfolio actively managed</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Check size={18} stroke="#14b8a6" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <p>Holdings: Adani Ports, ONGC, HDFC Index Fund</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                <Check size={18} stroke="#14b8a6" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <p>Multi-broker architecture validated</p>
              </div>
            </div>
          </div>
          
          <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#14b8a6', marginBottom: '1rem', fontSize: '1.2rem' }}>Production Stack</h3>
            <div style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '0.5rem' }}>React 18 + TypeScript</p>
              <p style={{ marginBottom: '0.5rem' }}>Node.js + Express</p>
              <p style={{ marginBottom: '0.5rem' }}>PostgreSQL (dual DBs)</p>
              <p style={{ marginBottom: '0.5rem' }}>FastAPI ML services</p>
              <p style={{ marginBottom: '0.5rem' }}>LangGraph orchestration</p>
              <p>Multi-LLM ensemble</p>
            </div>
          </div>
          
          <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#14b8a6', marginBottom: '1rem', fontSize: '1.2rem' }}>US Market Ready</h3>
            <div style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <ArrowRight size={18} stroke="#14b8a6" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <p>Q1 2025: IBKR integration (sandbox testing)</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <ArrowRight size={18} stroke="#14b8a6" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <p>Q2 2025: Alpaca launch (commission-free)</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                <ArrowRight size={18} stroke="#14b8a6" strokeWidth={2.5} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <p>Broker-agnostic architecture proven</p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Icon type="barChart" size={48} gradient="from-teal-400 to-green-400" delay={0.3} />
          </div>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>Platform Screenshots - Live System</p>
          <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '1rem' }}>Portfolio Dashboard • AI Committee • Execution</p>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>Real-time portfolio tracking • Multi-agent consensus & execution</p>
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'center', background: 'rgba(34, 197, 94, 0.2)', padding: '2rem', borderRadius: '12px' }}>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>100% OPERATIONAL TODAY</p>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginTop: '0.5rem' }}>Managing real money. Validated with live broker integration.</p>
        </div>
      </motion.div>
    </div>
  )
}
