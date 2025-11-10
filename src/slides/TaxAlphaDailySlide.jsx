import { motion } from 'framer-motion'
import DualPaneComparison from '../components/DualPaneComparison'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function TaxAlphaDailySlide() {
  // Title
  const title = (
    <GradientText gradient="from-emerald-400 to-teal-400">
      Our "Tax Alpha" Agent: Daily vs Annual
    </GradientText>
  )

  // Left option - What Others Can't Do
  const leftOption = (
    <span className="icon-label icon-heading" style={{ color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
      <Icon type="xCircle" size={24} variant="inline" gradient="from-red-400 to-pink-400" />
      The Traditional Problem
    </span>
  )

  const leftDetails = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: pxToRem(12) }}>
        <h3 style={{ color: '#ef4444', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
          Outdated Tax Loss Harvesting
        </h3>
        <div style={{ fontSize: '1.2rem', lineHeight: '2', color: '#e2e8f0' }}>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#fca5a5' }}>Wealthfront/Betterment:</strong> Monthly TLH only
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#fca5a5' }}>Most RIAs:</strong> Yearly TLH at best
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#fca5a5' }}>Result:</strong> Miss 80% of tax-saving opportunities
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'rgba(239, 68, 68, 0.2)',
            borderRadius: pxToRem(8)
          }}
        >
          <p style={{ fontSize: '1.1rem', color: '#fca5a5', textAlign: 'center' }}>
            Traditional advisors check for losses once a year.
            Markets move 252 days a year.
          </p>
        </motion.div>
      </div>
    </div>
  )

  // Right option - Our Daily TLH
  const rightOption = (
    <span className="icon-label icon-heading" style={{ color: '#14b8a6', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
      <Icon type="shield" size={24} variant="inline" gradient="from-teal-400 to-green-400" />
      Our AI-Powered Solution
    </span>
  )

  const rightDetails = (
    <div style={{ height: '100%' }}>
      <div style={{ background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(13, 148, 136, 0.1))', padding: '2rem', borderRadius: pxToRem(12), height: '100%' }}>
        <h3 style={{ color: '#14b8a6', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
          Daily Tax Optimization AI
        </h3>
        
        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(20, 184, 166, 0.2)', borderRadius: pxToRem(8) }}>
            <strong className="icon-label icon-heading" style={{ color: '#5eead4', fontSize: '1.1rem' }}>
              <Icon type="barChart" size={22} variant="inline" gradient="from-teal-400 to-green-400" />
              Daily Scanning
            </strong>
            <p style={{ fontSize: '1rem', color: '#e2e8f0', marginTop: '0.5rem' }}>
              Every market day • Wash-sale aware • 2-4x more savings
            </p>
          </div>
          
          <div style={{ padding: '1rem', background: 'rgba(20, 184, 166, 0.2)', borderRadius: pxToRem(8) }}>
            <strong className="icon-label icon-heading" style={{ color: '#5eead4', fontSize: '1.1rem' }}>
              <Icon type="target" size={22} variant="inline" gradient="from-teal-400 to-green-400" />
              Smart Offsetting
            </strong>
            <p style={{ fontSize: '1rem', color: '#e2e8f0', marginTop: '0.5rem' }}>
              Short-term gains (37% tax) first → Then long-term (20%)
            </p>
          </div>
        </div>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
          style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))',
            padding: '1.5rem',
            borderRadius: pxToRem(12),
            textAlign: 'center',
            border: '2px solid rgba(20, 184, 166, 0.3)'
          }}
        >
          <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>
            +1.8%
          </div>
          <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#5eead4', marginBottom: '0.5rem' }}>
            Additional Annual Return
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Traditional</p>
              <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#e2e8f0' }}>+7.0%</p>
            </div>
            <div>
              <p style={{ fontSize: '0.9rem', color: '#14b8a6' }}>Our AI</p>
              <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#14b8a6' }}>+8.8%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  // Summary
  const summary = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      style={{
        textAlign: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(34, 197, 94, 0.15))',
        borderRadius: pxToRem(12),
        border: '2px solid rgba(20, 184, 166, 0.3)'
      }}
    >
      <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>
        $180K/year
      </p>
      <p style={{ fontSize: '1.3rem', color: '#e2e8f0', marginBottom: '1rem' }}>
        Additional tax savings on $10M portfolio vs traditional yearly harvesting
      </p>
      <span style={{ fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
        Source: JPMorgan Tax-Loss Harvesting Research, 2023
      </span>
    </motion.div>
  )

  return (
    <DualPaneComparison
      title={title}
      leftHeader={leftOption}
      leftContent={leftDetails}
      rightHeader={rightOption}
      rightContent={rightDetails}
      summary={summary}
    />
  )
}