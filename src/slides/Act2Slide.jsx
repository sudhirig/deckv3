import { motion } from 'framer-motion'
import { ActSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import ParticleBackground from '../components/ParticleBackground'
import { Shield, Target, Sparkles } from 'lucide-react'
import './SlideStyles.css'

export default function Act2Slide() {
  // Act number element
  const actNumber = (
    <div style={{ fontSize: '4rem', fontWeight: 900 }}>
      <GradientText gradient="from-green-400 to-emerald-400">
        ACT 2
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
        Our breakthrough: 68+ specialized AI agents working 24/7, 
        including legendary investor personalities and dual-team analysis. 
        They process millions of data points, execute trades in milliseconds, 
        and deliver institutional-grade wealth management at scale.
      </p>
    </>
  )

  // Side metrics
  const sideMetrics = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="metric-item">
        <Shield size={24} color="#22c55e" />
        <div className="metric-value">68+</div>
        <div className="metric-label">AI Agents</div>
      </div>
      
      <div className="metric-item">
        <Target size={24} color="#22c55e" />
        <div className="metric-value">24/7</div>
        <div className="metric-label">Always Active</div>
      </div>
      
      <div className="metric-item">
        <Sparkles size={24} color="#22c55e" />
        <div className="metric-value">11ms</div>
        <div className="metric-label">Trade Speed</div>
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
        <h3 style={{ color: '#22c55e', marginBottom: '1rem' }}>Investment Committee</h3>
        <p>12-agent team including Warren Buffett AI, analyzing every decision</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 style={{ color: '#22c55e', marginBottom: '1rem' }}>Hedge Fund Team</h3>
        <p>18-agent specialized squad executing complex strategies in real-time</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 style={{ color: '#22c55e', marginBottom: '1rem' }}>Sentiment Engine</h3>
        <p>Processing 182+ news sources with FinBERT NLP analysis continuously</p>
      </motion.div>
    </motion.div>
  )

  return (
    <ActSlideLayout
      actNumber={actNumber}
      title="The Solution"
      subtitle="The AI-Powered Digital Family Office"
      mainContent={mainContent}
      sideMetrics={sideMetrics}
      bottomPoints={bottomPoints}
      particles={<ParticleBackground count={50} color="#22c55e" />}
    />
  )
}