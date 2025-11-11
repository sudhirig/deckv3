import { motion } from 'framer-motion'
import { ActSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Globe, Calculator, Database } from 'lucide-react'
import { SPACING, TYPOGRAPHY, pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function Act3Slide() {
  // Act number element
  const actNumber = (
    <div style={{ fontSize: TYPOGRAPHY.hero, fontWeight: 900 }}>
      <GradientText gradient="from-blue-400 to-cyan-400">
        ACT 3
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
        Our three defensible moats: exclusive access to India's $5T market via GIFT City,
        proprietary tax optimization that beats traditional methods by +1.8% annually, 
        and AI-powered alternative asset analysis covering 16,000+ funds. 
        Built on a swarm architecture with 20+ specialized agents.
      </p>
    </>
  )

  // Side metrics
  const sideMetrics = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md }}>
      <div className="metric-item">
        <Globe size={24} color="#3b82f6" />
        <div className="metric-value">$5T</div>
        <div className="metric-label">India Market</div>
      </div>
      
      <div className="metric-item">
        <Calculator size={24} color="#3b82f6" />
        <div className="metric-value">+1.8%</div>
        <div className="metric-label">Tax Alpha</div>
      </div>
      
      <div className="metric-item">
        <Database size={24} color="#3b82f6" />
        <div className="metric-value">16K+</div>
        <div className="metric-label">Funds Analyzed</div>
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
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: pxToRem(8),
        width: '100%'
      }}
    >
      <motion.div 
        className="discovery-card glass-card compact-card"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Globe size={16} color="#60a5fa" style={{ marginBottom: pxToRem(4) }} />
        <h4 style={{ color: '#60a5fa', marginBottom: pxToRem(4), fontSize: 'clamp(0.8rem, 1.2vw, 1rem)' }}>India Gateway</h4>
        <p style={{ fontSize: 'clamp(0.65rem, 0.95vw, 0.8rem)', margin: 0 }}>$5T market via GIFT City</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card compact-card"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Calculator size={16} color="#60a5fa" style={{ marginBottom: pxToRem(4) }} />
        <h4 style={{ color: '#60a5fa', marginBottom: pxToRem(4), fontSize: 'clamp(0.8rem, 1.2vw, 1rem)' }}>Tax Alpha</h4>
        <p style={{ fontSize: 'clamp(0.65rem, 0.95vw, 0.8rem)', margin: 0 }}>Daily harvesting +1.8%</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card compact-card"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Database size={16} color="#60a5fa" style={{ marginBottom: pxToRem(4) }} />
        <h4 style={{ color: '#60a5fa', marginBottom: pxToRem(4), fontSize: 'clamp(0.8rem, 1.2vw, 1rem)' }}>Alternative Assets</h4>
        <p style={{ fontSize: 'clamp(0.65rem, 0.95vw, 0.8rem)', margin: 0 }}>AI analyzes 16K+ funds</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card compact-card"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Database size={16} color="#60a5fa" style={{ marginBottom: pxToRem(4) }} />
        <h4 style={{ color: '#60a5fa', marginBottom: pxToRem(4), fontSize: 'clamp(0.8rem, 1.2vw, 1rem)' }}>Architecture</h4>
        <p style={{ fontSize: 'clamp(0.65rem, 0.95vw, 0.8rem)', margin: 0 }}>20+ specialized agents</p>
      </motion.div>
    </motion.div>
  )

  return (
    <ActSlideLayout
      actNumber={actNumber}
      title="The Deep Dive"
      subtitle="The Moat & The Technology"
      mainContent={mainContent}
      sideMetrics={sideMetrics}
      bottomPoints={bottomPoints}
    />
  )
}