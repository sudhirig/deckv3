import { motion } from 'framer-motion'
import { ActSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import ParticleBackground from '../components/ParticleBackground'
import { TrendingUp, Brain, Users } from 'lucide-react'
import './SlideStyles.css'

export default function Act1Slide() {
  // Act number element
  const actNumber = (
    <div style={{ fontSize: '4rem', fontWeight: 900 }}>
      <GradientText gradient="from-teal-400 to-green-400">
        ACT 1
      </GradientText>
    </div>
  )

  // Main content
  const mainContent = (
    <>
      <p style={{
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: 'rgba(255, 255, 255, 0.9)',
        maxWidth: '800px',
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
        gap: '2rem',
        width: '100%'
      }}
    >
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 style={{ color: '#14b8a6', marginBottom: '1rem' }}>AI Revolution</h3>
        <p>Stanford study: 93% of AI portfolios outperform human managers</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 style={{ color: '#14b8a6', marginBottom: '1rem' }}>Tax Alpha</h3>
        <p>Daily harvesting beats annual by +1.8% consistently</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 style={{ color: '#14b8a6', marginBottom: '1rem' }}>India Gateway</h3>
        <p>GIFT City unlocks $5T market at 0% tax rate</p>
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
      particles={<ParticleBackground count={50} color="#14b8a6" />}
    />
  )
}