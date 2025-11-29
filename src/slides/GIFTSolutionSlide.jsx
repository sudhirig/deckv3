import { motion } from 'framer-motion'
import DualPaneComparison from '../components/DualPaneComparison'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { Wallet } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function GIFTSolutionSlide() {
  // Module Badge
  const moduleBadge = (
    <div style={{ 
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'rgba(139, 92, 246, 0.15)',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      borderRadius: '20px',
      padding: '0.4rem 1rem',
      marginBottom: '0.75rem'
    }}>
      <Wallet size={14} color="#8B5CF6" />
      <span style={{ color: '#8B5CF6', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
        ARIA WEALTH
      </span>
    </div>
  )

  // Title
  const title = (
    <div>
      {moduleBadge}
      <GradientText gradient="from-purple-400 to-pink-400">
        GIFT City Solution
      </GradientText>
    </div>
  )

  // Left option - Old Route
  const leftOption = (
    <span className="icon-label icon-heading" style={{ color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
      <Icon type="xCircle" size={24} variant="inline" gradient="from-red-400 to-pink-400" />
      Traditional FPI Route
    </span>
  )

  const leftDetails = (
    <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
      <div style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: pxToRem(8) }}>
        <p style={{ fontWeight: 'bold', color: '#fca5a5', margin: 0 }}>Complex Setup</p>
        <p style={{ color: '#e2e8f0', margin: '0.25rem 0 0 0', fontSize: '0.85rem' }}>Multi-month FPI registration</p>
      </div>
      <div style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: pxToRem(8) }}>
        <p style={{ fontWeight: 'bold', color: '#fca5a5', margin: 0 }}>Heavy Tax Burden</p>
        <p style={{ color: '#e2e8f0', margin: '0.25rem 0 0 0', fontSize: '0.85rem' }}>Capital Gains Tax + STT</p>
      </div>
      <div style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: pxToRem(8) }}>
        <p style={{ fontWeight: 'bold', color: '#fca5a5', margin: 0 }}>Currency Risk</p>
        <p style={{ color: '#e2e8f0', margin: '0.25rem 0 0 0', fontSize: '0.85rem' }}>INR depreciation erodes gains</p>
      </div>
      <div style={{ padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: pxToRem(8) }}>
        <p style={{ fontWeight: 'bold', color: '#fca5a5', margin: 0 }}>Restricted Movement</p>
        <p style={{ color: '#e2e8f0', margin: '0.25rem 0 0 0', fontSize: '0.85rem' }}>Slow repatriation process</p>
      </div>
    </div>
  )

  // Right option - GIFT City Solution
  const rightOption = (
    <span className="icon-label icon-heading" style={{ color: '#14b8a6', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
      <Icon type="shield" size={24} variant="inline" gradient="from-teal-400 to-green-400" />
      GIFT City Solution
    </span>
  )

  const rightDetails = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
        <div style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: pxToRem(8) }}>
          <p style={{ fontWeight: 'bold', color: '#5eead4', margin: 0 }}>Direct Access via IFSC</p>
          <p style={{ color: '#e2e8f0', margin: '0.25rem 0 0 0', fontSize: '0.85rem' }}>Streamlined setup for foreign investors</p>
        </div>
        <div style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: pxToRem(8) }}>
          <p style={{ fontWeight: 'bold', color: '#5eead4', margin: 0 }}>0% Capital Gains Tax</p>
          <p style={{ color: '#e2e8f0', margin: '0.25rem 0 0 0', fontSize: '0.85rem' }}>No CGT, no STT - keep all gains</p>
        </div>
        <div style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: pxToRem(8) }}>
          <p style={{ fontWeight: 'bold', color: '#5eead4', margin: 0 }}>USD-Based Trading</p>
          <p style={{ color: '#e2e8f0', margin: '0.25rem 0 0 0', fontSize: '0.85rem' }}>Eliminate currency risk</p>
        </div>
        <div style={{ padding: '0.75rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: pxToRem(8) }}>
          <p style={{ fontWeight: 'bold', color: '#5eead4', margin: 0 }}>Free Capital Movement</p>
          <p style={{ color: '#e2e8f0', margin: '0.25rem 0 0 0', fontSize: '0.85rem' }}>Instant repatriation</p>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: pxToRem(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{ 
          textAlign: 'center', 
          marginTop: '1rem', 
          padding: '1rem', 
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(20, 184, 166, 0.15))', 
          borderRadius: pxToRem(12), 
          border: `${pxToRem(2)} solid rgba(34, 197, 94, 0.3)` 
        }}
      >
        <Icon type="unlock" size={32} gradient="from-green-400 to-emerald-400" delay={0.3} variant="inline" />
        <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.25rem', marginTop: '0.5rem' }}>+300bps</p>
        <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>in returns (JPMorgan)</p>
      </motion.div>
    </div>
  )

  // Summary
  const summary = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      style={{
        padding: '1rem',
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(249, 115, 22, 0.1))',
        borderRadius: pxToRem(12),
        textAlign: 'center',
        border: `${pxToRem(2)} solid rgba(251, 191, 36, 0.3)`
      }}
    >
      <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#fbbf24', margin: 0 }}>
        EXCLUSIVE: One of only 3 platforms with this capability
      </p>
      <p style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.35rem' }}>
        NSE IFSC Volume Up 400% YoY
      </p>
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