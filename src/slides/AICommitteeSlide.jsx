import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function AICommitteeSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Not a Chatbot. An AI Investment Committee.</h2>
        <p className="slide-subtitle" style={{ marginBottom: '2rem' }}>How Agentic AI Changes Everything</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '2rem' }}>
          <div>
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem', fontSize: '1.5rem' }}>The Old Model</h3>
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '12px', height: '100%' }}>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Single Advisor Bottleneck</p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>• Quarterly meetings</li>
                <li>• Limited time</li>
                <li>• Generalist approach</li>
                <li>• Human biases</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 style={{ color: '#14b8a6', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Our Model</h3>
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '2rem', borderRadius: '12px', height: '100%' }}>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem' }}>AI Agent Swarm</p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>• 24/7 availability</li>
                <li>• Specialized expertise</li>
                <li>• Continuous monitoring</li>
                <li>• Data-driven decisions</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p style={{ textAlign: 'center', fontSize: '1.3rem', color: '#14b8a6', marginTop: '2rem', fontWeight: 'bold' }}>
          5 Specialized Agents Working Together vs 1 Generalist Working Alone
        </p>
      </motion.div>
    </div>
  )
}
