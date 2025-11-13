import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function AgentROICalculatorSlide() {
  const title = (
    <GradientText gradient="from-green-400 to-emerald-400">
      The ₹1 Crore Question: Why AI Agents Win
    </GradientText>
  )

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Comparison Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Traditional Wealth Management */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            padding: '1rem',
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: pxToRem(12)
          }}
        >
          <div style={{ 
            fontSize: '0.9rem', 
            fontWeight: 'bold',
            color: '#ef4444',
            marginBottom: '0.75rem'
          }}>
            Traditional Wealth Management
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: '1.8' }}>
            <div>• Human Advisor Fee: <span style={{ color: '#ef4444', fontWeight: 'bold' }}>1.5% AUM</span></div>
            <div>• On ₹1Cr portfolio: <span style={{ color: '#ef4444', fontWeight: 'bold' }}>₹1.5L/year</span></div>
            <div>• Hours of meetings: <span style={{ color: '#fbbf24' }}>20/year</span></div>
            <div>• Response time: <span style={{ color: '#fbbf24' }}>2-3 days</span></div>
            <div>• Availability: <span style={{ color: '#64748b' }}>Business hours</span></div>
          </div>
        </motion.div>

        {/* ARIA Agent Platform */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            padding: '1rem',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: pxToRem(12)
          }}
        >
          <div style={{ 
            fontSize: '0.9rem', 
            fontWeight: 'bold',
            color: '#22c55e',
            marginBottom: '0.75rem'
          }}>
            ARIA Agent Platform
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: '1.8' }}>
            <div>• Platform Fee: <span style={{ color: '#22c55e', fontWeight: 'bold' }}>₹12K/year</span></div>
            <div>• Savings: <span style={{ color: '#22c55e', fontWeight: 'bold' }}>₹1.38L/year</span></div>
            <div>• Available: <span style={{ color: '#5eead4' }}>24/7/365</span></div>
            <div>• Response time: <span style={{ color: '#5eead4' }}>Instant</span></div>
            <div>• Meetings needed: <span style={{ color: '#5eead4' }}>Zero</span></div>
          </div>
        </motion.div>
      </div>

      {/* 10-Year Value Creation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          flex: 1,
          padding: '1.25rem',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.05), rgba(251, 191, 36, 0.02))',
          border: '2px solid rgba(251, 191, 36, 0.3)',
          borderRadius: pxToRem(12)
        }}
      >
        <div style={{ 
          fontSize: '1.1rem', 
          fontWeight: 'bold',
          color: '#fbbf24',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          10-YEAR VALUE CREATION
        </div>

        {/* Value Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              padding: '0.5rem',
              borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
            }}
          >
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
              <DollarSign size={16} style={{ display: 'inline', verticalAlign: 'middle' }} /> Fees Saved
            </span>
            <span style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '0.9rem' }}>
              ₹<AnimatedCounter end={13.8} decimals={1} duration={2} />L
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              padding: '0.5rem',
              borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
            }}
          >
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
              <TrendingUp size={16} style={{ display: 'inline', verticalAlign: 'middle' }} /> Tax Alpha (1.8% × 10)
            </span>
            <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '0.9rem' }}>
              ₹<AnimatedCounter end={18} decimals={0} duration={2} />L
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              padding: '0.5rem',
              borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
            }}
          >
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
              <Calculator size={16} style={{ display: 'inline', verticalAlign: 'middle' }} /> Better Returns (2.5% extra)
            </span>
            <span style={{ color: '#8b5cf6', fontWeight: 'bold', fontSize: '0.9rem' }}>
              ₹<AnimatedCounter end={25} decimals={0} duration={2} />L
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              padding: '0.5rem',
              borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
            }}
          >
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
              <Clock size={16} style={{ display: 'inline', verticalAlign: 'middle' }} /> Time Saved
            </span>
            <span style={{ color: '#14b8a6', fontWeight: 'bold', fontSize: '0.9rem' }}>
              <AnimatedCounter end={200} decimals={0} duration={2} /> hours
            </span>
          </motion.div>

          {/* Total */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, type: 'spring' }}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              padding: '0.75rem',
              marginTop: '0.5rem',
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1))',
              borderRadius: pxToRem(8),
              border: '2px solid #fbbf24'
            }}
          >
            <span style={{ color: '#fbbf24', fontSize: '1rem', fontWeight: 'bold' }}>
              TOTAL VALUE
            </span>
            <span style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: '1.2rem' }}>
              ₹<AnimatedCounter end={56.8} decimals={1} duration={2.5} />L
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* ROI Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, type: 'spring' }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          padding: '1rem',
          background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.1), transparent)',
          borderRadius: pxToRem(8)
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            <GradientText gradient="from-teal-400 to-cyan-400">
              <AnimatedCounter end={473} decimals={0} duration={3} />x
            </GradientText>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>
            ROI on ARIA
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        style={{
          textAlign: 'center',
          padding: '0.75rem',
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))',
          borderRadius: pxToRem(8),
          border: '1px solid rgba(239, 68, 68, 0.3)'
        }}
      >
        <p style={{ 
          fontSize: '1rem', 
          color: '#ef4444',
          fontWeight: 'bold'
        }}>
          Every day without agents costs you ₹1,555
        </p>
      </motion.div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
