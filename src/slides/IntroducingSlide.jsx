import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Users, Brain, Clock, TrendingUp } from 'lucide-react'
import './SlideStyles.css'

export default function IntroducingSlide() {
  // Title
  const title = (
    <GradientText gradient="from-teal-400 to-cyan-400">
      Introducing Your AI Digital Family Office
    </GradientText>
  )

  // Main visual - AI Committee and Features
  const mainVisual = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      <div>
        <h3 style={{ color: '#14b8a6', marginBottom: '1rem', fontSize: '1.4rem' }}>
          Not Another Robo-Advisor
        </h3>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
          A complete family office with an AI Investment Committee available 24/7
        </p>
      </div>
      
      <div style={{ flex: 1, display: 'grid', gap: '1.5rem' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card"
          style={{ 
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.1))', 
            padding: '1.5rem', 
            borderRadius: '12px',
            borderLeft: '3px solid #14b8a6'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Users size={24} color="#14b8a6" />
            <p style={{ fontWeight: 'bold', color: '#14b8a6', fontSize: '1.2rem' }}>AI Investment Committee</p>
          </div>
          <div style={{ fontSize: '1rem', lineHeight: '1.8', color: '#e2e8f0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <div>• Chief Investment Officer</div>
            <div>• Tax Attorney</div>
            <div>• Research Analyst</div>
            <div>• Risk Manager</div>
            <div>• Alternative Investment Specialist</div>
            <div>• Estate Planner</div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card"
          style={{ 
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(124, 58, 237, 0.1))', 
            padding: '1.5rem', 
            borderRadius: '12px',
            borderLeft: '3px solid #9333ea'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Clock size={24} color="#a78bfa" />
            <p style={{ fontWeight: 'bold', color: '#a78bfa', fontSize: '1.2rem' }}>Always Working For You</p>
          </div>
          <div style={{ fontSize: '1rem', lineHeight: '1.8', color: '#e2e8f0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <div>• Real-time analysis</div>
            <div>• Proactive recommendations</div>
            <div>• Instant execution</div>
            <div>• Continuous learning</div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  // Key insights - Platform Preview
  const keyInsights = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <div className="glass-card" style={{ 
        border: '3px solid #14b8a6', 
        borderRadius: '16px', 
        padding: '2rem', 
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(20, 184, 166, 0.1))',
        textAlign: 'center'
      }}>
        <Brain size={48} color="#14b8a6" style={{ marginBottom: '1rem' }} />
        <p style={{ fontSize: '1.2rem', color: '#14b8a6', fontWeight: 'bold', marginBottom: '2rem' }}>
          Premium Platform Preview
        </p>
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '1rem' }}>
            100% OPERATIONAL
          </p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '1rem' }}>
            TODAY
          </p>
        </motion.div>
        <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginTop: '1.5rem' }}>
          Real portfolio dashboard • AI consensus • Live execution
        </p>
      </div>
    </motion.div>
  )

  // Supporting data
  const supportingData = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))',
        borderRadius: '12px'
      }}
    >
      <TrendingUp size={32} color="#fbbf24" />
      <p style={{ fontSize: '1.1rem', color: '#e2e8f0' }}>
        <strong style={{ color: '#fbbf24' }}>Proven Technology:</strong> Stanford study shows 93% of AI funds outperform human managers
      </p>
    </motion.div>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
      keyInsights={keyInsights}
      supportingData={supportingData}
    />
  )
}