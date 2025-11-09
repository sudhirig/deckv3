import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import ParticleBackground from '../components/ParticleBackground'
import { Shield, Target, Sparkles } from 'lucide-react'
import './SlideStyles.css'

export default function Act2Slide() {
  return (
    <div className="slide-content" style={{ position: 'relative', padding: '3rem 4rem' }}>
      <ParticleBackground count={50} color="#22c55e" />
      
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
            <GradientText gradient="from-green-400 to-emerald-400">
              ACT 2
            </GradientText>
          </div>
          <div style={{
            width: '100%',
            height: '200px',
            marginTop: '2rem',
            background: 'linear-gradient(180deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.1))',
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
            background: 'linear-gradient(135deg, #ffffff 0%, #22c55e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            The Solution
          </h1>
          
          <p style={{ 
            fontSize: '2rem', 
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            The AI-Powered Digital Family Office
          </p>
          
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
        </motion.div>
        
        {/* Right Column - Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
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
    </div>
  )
}
