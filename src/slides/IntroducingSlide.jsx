import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function IntroducingSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Introducing Your AI Digital Family Office</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3 style={{ color: '#14b8a6', marginBottom: '1.5rem', fontSize: '1.3rem' }}>Not Another Robo-Advisor</h3>
            <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '1.5rem' }}>A complete family office with an AI Investment Committee available 24/7</p>
            
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: '1rem' }}>AI Investment Committee</p>
              <div style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#94a3b8' }}>
                <div>• Chief Investment Officer</div>
                <div>• Tax Attorney</div>
                <div>• Research Analyst</div>
                <div>• Risk Manager</div>
                <div>• Alternative Investment Specialist</div>
              </div>
            </div>
            
            <div style={{ background: 'rgba(147, 51, 234, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
              <p style={{ fontWeight: 'bold', color: '#a78bfa', marginBottom: '1rem' }}>Always Working For You</p>
              <div style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#94a3b8' }}>
                <div>• Real-time analysis</div>
                <div>• Proactive recommendations</div>
                <div>• Instant execution</div>
                <div>• Continuous learning</div>
              </div>
            </div>
          </div>
          
          <div>
            <div style={{ border: '2px solid #14b8a6', borderRadius: '12px', padding: '1.5rem', background: 'rgba(0, 0, 0, 0.4)' }}>
              <p style={{ fontSize: '1rem', color: '#14b8a6', fontWeight: 'bold', marginBottom: '1rem' }}>Premium Platform Preview</p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e', textAlign: 'center', marginTop: '3rem', marginBottom: '1rem' }}>100% OPERATIONAL TODAY</p>
              <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center' }}>Real portfolio dashboard • AI consensus • Live execution</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
