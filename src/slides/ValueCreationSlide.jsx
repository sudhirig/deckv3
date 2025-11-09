import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { TrendingUp, DollarSign, PiggyBank, BarChart3 } from 'lucide-react'
import './SlideStyles.css'

export default function ValueCreationSlide() {
  // Title
  const title = (
    <GradientText gradient="from-green-400 to-emerald-400">
      We Create 10x More Value Than We Charge
    </GradientText>
  )

  // Main visual - Value comparison
  const mainVisual = (
    <div style={{ 
      background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(34, 197, 94, 0.1))', 
      padding: '2.5rem', 
      borderRadius: '16px', 
      border: '2px solid rgba(20, 184, 166, 0.3)'
    }}>
      <h3 style={{ fontSize: '1.8rem', color: '#14b8a6', textAlign: 'center', marginBottom: '2rem' }}>
        Example: $10M Portfolio
      </h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem' }}>
        {/* Value Created */}
        <div>
          <h4 style={{ fontSize: '1.4rem', color: '#86efac', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <TrendingUp size={24} />
            Value Created Annually
          </h4>
          <div style={{ fontSize: '1.2rem', lineHeight: '2.2' }}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.75rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}
            >
              <span>Tax Alpha (1.8%)</span>
              <span style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '1.3rem' }}>$180,000</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.75rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}
            >
              <span>Alternative Access (3%)</span>
              <span style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '1.3rem' }}>$300,000</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.75rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}
            >
              <span>GIFT City Savings</span>
              <span style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '1.3rem' }}>$120,000</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ 
                borderTop: '3px solid rgba(34, 197, 94, 0.4)', 
                marginTop: '1.5rem', 
                paddingTop: '1.5rem',
                background: 'rgba(34, 197, 94, 0.15)',
                padding: '1.5rem',
                borderRadius: '8px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem' }}>
                <span style={{ fontWeight: 'bold', color: '#86efac' }}>Total Value</span>
                <span style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '1.8rem' }}>$600,000</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Our Fee */}
        <div>
          <h4 style={{ fontSize: '1.4rem', color: '#fbbf24', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <DollarSign size={24} />
            Our Fee
          </h4>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: '2rem',
              padding: '0.75rem',
              background: 'rgba(251, 191, 36, 0.1)',
              borderRadius: '8px'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>Annual Fee (0.75%)</span>
            <span style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: '1.3rem' }}>$75,000</span>
          </motion.div>
        </div>
      </div>
    </div>
  )

  // Key insights - ROI calculation
  const keyInsights = (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      style={{ 
        padding: '2.5rem', 
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.25), rgba(16, 185, 129, 0.15))', 
        borderRadius: '16px', 
        textAlign: 'center',
        border: '2px solid rgba(34, 197, 94, 0.3)'
      }}
    >
      <BarChart3 size={48} color="#22c55e" style={{ marginBottom: '1rem' }} />
      <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '1rem' }}>Return on Investment</p>
      <p style={{ fontSize: '4.5rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '0.5rem' }}>8x</p>
      <p style={{ fontSize: '1.3rem', color: '#e2e8f0', marginBottom: '1rem' }}>
        Client gets $8 for every $1 paid
      </p>
      <p style={{ fontSize: '1.1rem', color: '#86efac', fontWeight: 'bold' }}>
        600% better than traditional advisors
      </p>
    </motion.div>
  )

  // Supporting data
  const supportingData = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      style={{
        display: 'grid',
        gap: '1.5rem'
      }}
    >
      <div style={{ 
        padding: '1.5rem', 
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(124, 58, 237, 0.1))', 
        borderRadius: '12px',
        borderLeft: '3px solid #9333ea'
      }}>
        <PiggyBank size={24} color="#a78bfa" style={{ marginBottom: '0.5rem' }} />
        <h4 style={{ color: '#a78bfa', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Client Retention Driver</h4>
        <p style={{ fontSize: '1.1rem', color: '#e2e8f0' }}>
          Clients see value in their first tax season. Retention compounds from there.
        </p>
      </div>
      
      <div style={{ 
        padding: '1.5rem', 
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))', 
        borderRadius: '12px',
        borderLeft: '3px solid #fbbf24'
      }}>
        <TrendingUp size={24} color="#fbbf24" style={{ marginBottom: '0.5rem' }} />
        <h4 style={{ color: '#fbbf24', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Scalable Economics</h4>
        <p style={{ fontSize: '1.1rem', color: '#e2e8f0' }}>
          AI-driven model means margins improve with scale. 70% EBITDA at maturity.
        </p>
      </div>
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