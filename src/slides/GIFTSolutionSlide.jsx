import { motion } from 'framer-motion'
import { ComparisonLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function GIFTSolutionSlide() {
  // Title
  const title = (
    <GradientText gradient="from-green-400 to-emerald-400">
      Our Solution: The GIFT City "AI Gateway"
    </GradientText>
  )

  // Left option - Old Route
  const leftOption = (
    <span style={{ color: '#ef4444' }}>❌ Traditional FPI Route</span>
  )

  const leftDetails = (
    <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
      <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: pxToRem(8) }}>
        <p style={{ fontWeight: 'bold', color: '#fca5a5' }}>Complex Setup</p>
        <p style={{ color: '#e2e8f0' }}>Multi-month FPI registration process</p>
      </div>
      <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: pxToRem(8) }}>
        <p style={{ fontWeight: 'bold', color: '#fca5a5' }}>Heavy Tax Burden</p>
        <p style={{ color: '#e2e8f0' }}>Capital Gains Tax + STT drags returns</p>
      </div>
      <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: pxToRem(8) }}>
        <p style={{ fontWeight: 'bold', color: '#fca5a5' }}>Currency Risk</p>
        <p style={{ color: '#e2e8f0' }}>INR depreciation erodes gains</p>
      </div>
      <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: pxToRem(8) }}>
        <p style={{ fontWeight: 'bold', color: '#fca5a5' }}>Restricted Movement</p>
        <p style={{ color: '#e2e8f0' }}>Slow, complex repatriation process</p>
      </div>
    </div>
  )

  // Right option - GIFT City Solution
  const rightOption = (
    <span style={{ color: '#14b8a6' }}>✓ GIFT City Solution</span>
  )

  const rightDetails = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
        <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: pxToRem(8) }}>
          <p style={{ fontWeight: 'bold', color: '#5eead4' }}>Direct Access via IFSC</p>
          <p style={{ color: '#e2e8f0' }}>Streamlined setup for foreign investors</p>
        </div>
        <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: pxToRem(8) }}>
          <p style={{ fontWeight: 'bold', color: '#5eead4' }}>0% Capital Gains Tax</p>
          <p style={{ color: '#e2e8f0' }}>No CGT, no STT - keep all your gains</p>
        </div>
        <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: pxToRem(8) }}>
          <p style={{ fontWeight: 'bold', color: '#5eead4' }}>USD-Based Trading</p>
          <p style={{ color: '#e2e8f0' }}>Eliminate currency risk entirely</p>
        </div>
        <div style={{ padding: '1rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: pxToRem(8) }}>
          <p style={{ fontWeight: 'bold', color: '#5eead4' }}>Free Capital Movement</p>
          <p style={{ color: '#e2e8f0' }}>Instant repatriation, no restrictions</p>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: pxToRem(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{ 
          textAlign: 'center', 
          marginTop: '1.5rem', 
          padding: '1.5rem', 
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(20, 184, 166, 0.15))', 
          borderRadius: pxToRem(12), 
          border: `${pxToRem(2)} solid rgba(34, 197, 94, 0.3)` 
        }}
      >
        <Icon type="unlock" size={40} gradient="from-green-400 to-emerald-400" delay={0.3} />
        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem', marginTop: '1rem' }}>+300bps</p>
        <p style={{ fontSize: '1rem', color: '#e2e8f0' }}>in returns (JPMorgan Research)</p>
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
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(249, 115, 22, 0.1))',
        borderRadius: pxToRem(12),
        textAlign: 'center',
        border: `${pxToRem(2)} solid rgba(251, 191, 36, 0.3)`
      }}
    >
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fbbf24' }}>
        EXCLUSIVE: One of only 3 platforms with this capability
      </p>
      <p style={{ fontSize: '1rem', color: '#e2e8f0', marginTop: '0.5rem' }}>
        NSE IFSC Volume Up 400% YoY - Market validation of GIFT City route
      </p>
    </motion.div>
  )

  return (
    <ComparisonLayout
      title={title}
      leftOption={leftOption}
      leftDetails={leftDetails}
      rightOption={rightOption}
      rightDetails={rightDetails}
      summary={summary}
    />
  )
}