import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { ArrowRight, TrendingUp, DollarSign, PiggyBank } from 'lucide-react'
import './SlideStyles.css'

export default function RealJourneysSlide() {
  // Title
  const title = (
    <GradientText gradient="from-teal-400 to-cyan-400">
      Real Journeys, Real Alpha
    </GradientText>
  )

  // Main visual - The Journey
  const mainVisual = (
    <div style={{ 
      background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.1))', 
      padding: '2rem', 
      borderRadius: '16px',
      height: '100%',
      border: '2px solid rgba(20, 184, 166, 0.2)'
    }}>
      <h3 style={{ color: '#14b8a6', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
        The Journey: Tech Founder's Portfolio Transformation
      </h3>
      <div style={{ fontSize: '1.1rem', lineHeight: '2' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <p style={{ fontWeight: 'bold', color: '#14b8a6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp size={20} color="#14b8a6" />
            Equity Agent:
          </p>
          <p style={{ color: '#e2e8f0', marginLeft: '1.5rem' }}>
            Analyzes AAPL, recommends covered call strategy for income
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <p style={{ fontWeight: 'bold', color: '#14b8a6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <DollarSign size={20} color="#14b8a6" />
            Alt Agent:
          </p>
          <p style={{ color: '#e2e8f0', marginLeft: '1.5rem' }}>
            Scans 200+ PE funds, surfaces top 3 with 1-page memos
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p style={{ fontWeight: 'bold', color: '#14b8a6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <PiggyBank size={20} color="#14b8a6" />
            Execution:
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#e2e8f0', marginLeft: '1.5rem' }}>
            <span>One-click approval</span>
            <ArrowRight size={20} stroke="#14b8a6" strokeWidth={2.5} />
            <span>IBKR execution</span>
          </div>
        </motion.div>
      </div>
    </div>
  )

  // Key insights - Results After 12 Months
  const keyInsights = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h3 style={{ color: '#14b8a6', marginBottom: '2rem', textAlign: 'center', fontSize: '1.4rem' }}>
        After 12 Months:
      </h3>
      
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="glass-card"
          style={{ 
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.1))',
            borderLeft: '3px solid #22c55e'
          }}
        >
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#22c55e' }}>$142K</p>
          <p style={{ fontSize: '1rem', color: '#e2e8f0' }}>Income from covered calls</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="glass-card"
          style={{ 
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(249, 115, 22, 0.1))',
            borderLeft: '3px solid #fbbf24'
          }}
        >
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24' }}>$85K</p>
          <p style={{ fontSize: '1rem', color: '#e2e8f0' }}>Tax savings via TLH</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="glass-card"
          style={{ 
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(124, 58, 237, 0.1))',
            borderLeft: '3px solid #9333ea'
          }}
        >
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a78bfa' }}>$1.5M</p>
          <p style={{ fontSize: '1rem', color: '#e2e8f0' }}>PE allocation (2 funds)</p>
        </motion.div>
      </div>
    </div>
  )

  // Supporting data - Client testimonial
  const supportingData = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      style={{ 
        textAlign: 'center', 
        padding: '1.5rem', 
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(34, 197, 94, 0.15))', 
        borderRadius: '12px',
        border: '2px solid rgba(20, 184, 166, 0.3)'
      }}
    >
      <p style={{ fontSize: '1.4rem', fontStyle: 'italic', color: '#14b8a6', marginBottom: '1rem' }}>
        "Speaks my language, my speed"
      </p>
      <p style={{ fontSize: '1rem', color: '#94a3b8' }}>
        Two additional personas (Chris - Inheritor, Sal - Tax Optimizer) available in appendix with similar quantified outcomes
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