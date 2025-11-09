import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import ParticleBackground from '../components/ParticleBackground'
import { TrendingUp, Brain, Users } from 'lucide-react'
import './SlideStyles.css'

export default function Act1Slide() {
  return (
    <div className="slide-content" style={{ position: 'relative', padding: '3rem 4rem' }}>
      <ParticleBackground count={50} color="#14b8a6" />
      
      {/* Full-width landscape layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr 250px',
        gap: '3rem',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Left Column - Act Number & Progress */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{ fontSize: '4rem', fontWeight: 900 }}>
            <GradientText gradient="from-teal-400 to-green-400">
              ACT 1
            </GradientText>
          </div>
          <div style={{
            width: '100%',
            height: '200px',
            marginTop: '2rem',
            background: 'linear-gradient(180deg, rgba(0, 212, 255, 0.2), rgba(0, 255, 136, 0.1))',
            borderRadius: '10px'
          }}></div>
        </motion.div>
        
        {/* Center Column - Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textAlign: 'center' }}
        >
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 800, 
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #14b8a6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            The Hook & The Problem
          </h1>
          
          <p style={{ 
            fontSize: '2rem', 
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            Why Now? Why AI? Why Us?
          </p>
          
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Traditional wealth management is facing an existential crisis. 
            AI has proven it can consistently outperform human fund managers, 
            while nearly half of wealthy investors are actively seeking 
            alternatives to their current advisors.
          </p>
        </motion.div>
        
        {/* Right Column - Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div className="metric-item">
            <TrendingUp size={24} color="#14b8a6" />
            <div className="metric-value">93%</div>
            <div className="metric-label">AI Outperforms</div>
          </div>
          
          <div className="metric-item">
            <Users size={24} color="#14b8a6" />
            <div className="metric-value">46%</div>
            <div className="metric-label">Switching Advisors</div>
          </div>
          
          <div className="metric-item">
            <Brain size={24} color="#14b8a6" />
            <div className="metric-value">3X</div>
            <div className="metric-label">Critical Failures</div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Discovery Points */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginTop: '3rem',
          width: '100%'
        }}
      >
        <motion.div 
          className="discovery-card glass-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 style={{ color: '#14b8a6', marginBottom: '1rem' }}>AI Dominance</h3>
          <p>AI outperforms 93% of human fund managers with consistent alpha generation</p>
        </motion.div>
        
        <motion.div 
          className="discovery-card glass-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 style={{ color: '#14b8a6', marginBottom: '1rem' }}>Market Shift</h3>
          <p>46% of HNWIs are switching advisors in the next 24 months - unprecedented churn</p>
        </motion.div>
        
        <motion.div 
          className="discovery-card glass-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 style={{ color: '#14b8a6', marginBottom: '1rem' }}>System Failures</h3>
          <p>Three critical failures plague traditional wealth management systems</p>
        </motion.div>
      </motion.div>
    </div>
  )
}