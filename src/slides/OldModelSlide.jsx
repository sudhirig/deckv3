import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function OldModelSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-card"
      >
        <h2 className="slide-title">Old Model: Fragmented & Manual</h2>
        <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '16px', padding: '3rem' }}>
            <ul className="comparison-list">
              <li>Multiple advisors with conflicting advice</li>
              <li>Manual spreadsheets and disconnected systems</li>
              <li>Reactive tax planning (after-the-fact)</li>
              <li>No systematic alternative asset access</li>
              <li>High fees with misaligned incentives</li>
              <li>Limited transparency and control</li>
            </ul>
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', textAlign: 'center' }}>
              <strong style={{ color: '#ef4444', fontSize: '1.3rem' }}>
                Result: 2-4% annual drag from inefficiencies and missed opportunities
              </strong>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
