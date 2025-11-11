import { motion } from 'framer-motion'
import { ActSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { TrendingUp, Brain, Users } from 'lucide-react'
import { SPACING, TYPOGRAPHY, pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function Act1Slide() {
  // Act number element
  const actNumber = (
    <div style={{ fontSize: TYPOGRAPHY.hero, fontWeight: 900 }}>
      <GradientText gradient="from-teal-400 to-green-400">
        ACT 1
      </GradientText>
    </div>
  )

  // Main content
  const mainContent = (
    <>
      <p style={{
        fontSize: TYPOGRAPHY.body,
        lineHeight: '1.8',
        color: 'rgba(255, 255, 255, 0.9)',
        maxWidth: pxToRem(800),
        margin: '0 auto'
      }}>
        AI is revolutionizing wealth management. Stanford shows 93% of AI-managed 
        portfolios beat human managers. Daily tax harvesting beats annual by +1.8%. 
        GIFT City unlocks India's $5T market at 0% tax. The convergence creates 
        a once-in-a-generation opportunity for a complete reinvention.
      </p>
    </>
  )

  // Side metrics
  const sideMetrics = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md }}>
      <div className="metric-item">
        <TrendingUp size={24} color="#14b8a6" />
        <div className="metric-value">93%</div>
        <div className="metric-label">AI Beats Humans</div>
      </div>
      
      <div className="metric-item">
        <Brain size={24} color="#14b8a6" />
        <div className="metric-value">24/7</div>
        <div className="metric-label">Always Working</div>
      </div>
      
      <div className="metric-item">
        <Users size={24} color="#14b8a6" />
        <div className="metric-value">$112T</div>
        <div className="metric-label">Market Size</div>
      </div>
    </div>
  )

  // Bottom points
  const bottomPoints = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: pxToRem(12),
        width: '100%'
      }}
    >
      <motion.div 
        className="discovery-card glass-card compact-card"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 style={{ color: '#14b8a6', marginBottom: pxToRem(4), fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}>AI Revolution</h3>
        <p style={{ fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', margin: 0 }}>Stanford: 93% of AI portfolios outperform human managers</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card compact-card"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 style={{ color: '#14b8a6', marginBottom: pxToRem(4), fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}>Tax Alpha</h3>
        <p style={{ fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', margin: 0 }}>Daily harvesting beats annual by +1.8%</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card compact-card"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 style={{ color: '#14b8a6', marginBottom: pxToRem(4), fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}>India Gateway</h3>
        <p style={{ fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', margin: 0 }}>GIFT City unlocks $5T market at 0% tax</p>
      </motion.div>
    </motion.div>
  )

  return (
    <ActSlideLayout
      actNumber={actNumber}
      title="The Hook & The Problem"
      subtitle="Why Now? Why AI? Why Us?"
      mainContent={mainContent}
      sideMetrics={sideMetrics}
      bottomPoints={bottomPoints}
    />
  )
}