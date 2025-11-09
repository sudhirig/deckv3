import { motion } from 'framer-motion'
import { ActSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import ParticleBackground from '../components/ParticleBackground'
import { Globe, Calculator, Database } from 'lucide-react'
import './SlideStyles.css'

export default function Act3Slide() {
  // Act number element
  const actNumber = (
    <div style={{ fontSize: '4rem', fontWeight: 900 }}>
      <GradientText gradient="from-blue-400 to-cyan-400">
        ACT 3
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
        Our three defensible moats: exclusive access to India's $5T market via GIFT City,
        proprietary tax optimization that beats traditional methods by +1.8% annually, 
        and AI-powered alternative asset analysis covering 16,000+ funds. 
        Built on a swarm architecture with 20+ specialized agents.
      </p>
    </>
  )

  // Side metrics
  const sideMetrics = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
        gap: '1.5rem',
        width: '100%'
      }}
    >
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Globe size={20} color="#60a5fa" style={{ marginBottom: '0.5rem' }} />
        <h4 style={{ color: '#60a5fa', marginBottom: '0.5rem', fontSize: '1.1rem' }}>India Gateway</h4>
        <p style={{ fontSize: '0.9rem' }}>$5T market via GIFT City (0% tax)</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Calculator size={20} color="#60a5fa" style={{ marginBottom: '0.5rem' }} />
        <h4 style={{ color: '#60a5fa', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Tax Alpha</h4>
        <p style={{ fontSize: '0.9rem' }}>Daily harvesting beats annual by +1.8%</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Database size={20} color="#60a5fa" style={{ marginBottom: '0.5rem' }} />
        <h4 style={{ color: '#60a5fa', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Alternative Assets</h4>
        <p style={{ fontSize: '0.9rem' }}>AI analyzes 16,000+ funds</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Database size={20} color="#60a5fa" style={{ marginBottom: '0.5rem' }} />
        <h4 style={{ color: '#60a5fa', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Architecture</h4>
        <p style={{ fontSize: '0.9rem' }}>20+ specialized agents in swarm config</p>
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
      particles={<ParticleBackground count={50} color="#3b82f6" />}
    />
  )
}