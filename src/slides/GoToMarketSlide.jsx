import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Users, Briefcase, Target } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function GoToMarketSlide() {
  const title = (
    <GradientText gradient="from-orange-400 to-amber-400">
      Go-to-Market: A Hybrid B2B2C Strategy
    </GradientText>
  )

  const subtitle = "Low-CAC launch via CPAs, high-LTV scale via B2C"

  const cards = [
    // B2C Channel
    <motion.div
      key="b2c"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      style={{
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.1))',
        borderRadius: pxToRem(12),
        padding: '1.25rem',
        border: '2px solid #3b82f6'
      }}
    >
      <Users size={28} color="#60a5fa" />
      <h3 style={{ color: '#60a5fa', fontSize: '1.25rem', marginTop: '0.4rem' }}>Channel 1: B2C</h3>
      <p style={{ color: '#93c5fd', fontWeight: 'bold', fontSize: '0.9rem' }}>The Scale (Long-term)</p>
      <div style={{ margin: '0.75rem 0' }}>
        <p style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>Target: Tech-savvy HNWs</p>
        <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>"Arjun, $25M net worth"</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#ef4444', fontSize: '1.1rem', fontWeight: 'bold' }}>$5,000</p>
          <p style={{ color: '#94a3b8', fontSize: '0.65rem' }}>CAC</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#10b981', fontSize: '1.1rem', fontWeight: 'bold' }}>$50K</p>
          <p style={{ color: '#94a3b8', fontSize: '0.65rem' }}>LTV</p>
        </div>
      </div>
      <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
        <p style={{ color: '#60a5fa', fontSize: '1.5rem', fontWeight: 'bold' }}>30%</p>
        <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Year 1</p>
      </div>
    </motion.div>,

    // B2B2C Channel
    <motion.div
      key="b2b2c"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.1))',
        borderRadius: pxToRem(12),
        padding: '1.25rem',
        border: '2px solid #10b981'
      }}
    >
      <Briefcase size={28} color="#10b981" />
      <h3 style={{ color: '#10b981', fontSize: '1.25rem', marginTop: '0.4rem' }}>Channel 2: B2B2C</h3>
      <p style={{ color: '#86efac', fontWeight: 'bold', fontSize: '0.9rem' }}>The Wedge (Launch)</p>
      <div style={{ margin: '0.75rem 0' }}>
        <p style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>Target: CPAs via Ascendum</p>
        <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>1,000+ trusted advisors</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#10b981', fontSize: '1.1rem', fontWeight: 'bold' }}>$1,500</p>
          <p style={{ color: '#94a3b8', fontSize: '0.65rem' }}>CAC</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#10b981', fontSize: '1.1rem', fontWeight: 'bold' }}>$75K</p>
          <p style={{ color: '#94a3b8', fontSize: '0.65rem' }}>LTV</p>
        </div>
      </div>
      <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
        <p style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>70%</p>
        <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Year 1</p>
      </div>
    </motion.div>,

    // Target Customer
    <motion.div
      key="target"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      style={{
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(251, 146, 60, 0.1))',
        borderRadius: pxToRem(12),
        padding: '1.25rem',
        border: '2px solid #f97316'
      }}
    >
      <Target size={28} color="#f97316" />
      <h3 style={{ color: '#f97316', fontSize: '1.25rem', marginTop: '0.4rem' }}>Target Customer</h3>
      <p style={{ color: '#fdba74', fontWeight: 'bold', fontSize: '0.9rem' }}>The Underserved HNW/NRI</p>
      <div style={{ margin: '0.75rem 0' }}>
        <p style={{ color: '#e2e8f0', fontWeight: 'bold', fontSize: '0.9rem' }}>Profile:</p>
        <ul style={{ color: '#94a3b8', fontSize: '0.8rem', paddingLeft: '1.25rem' }}>
          <li>$1-25M net worth</li>
          <li>Global investment needs</li>
          <li>Complex tax situation</li>
        </ul>
      </div>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <p style={{ color: '#f97316', fontSize: '1.5rem', fontWeight: 'bold' }}>10,000+</p>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Addressable Market</p>
      </div>
    </motion.div>
  ]

  return <GridLayout title={title} subtitle={subtitle} cards={cards} />
}
