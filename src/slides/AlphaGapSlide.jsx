import { motion } from 'framer-motion'
import { ComparisonLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { X, Check } from 'lucide-react'
import './SlideStyles.css'

export default function AlphaGapSlide() {
  // Title
  const title = (
    <GradientText gradient="from-red-400 to-pink-400">
      Why They're Switching: The Three Failures
    </GradientText>
  )
  
  // Subtitle
  const subtitle = 'The "Alpha Gap" - What HNWIs Want vs What They Get'

  // Left option - Traditional failures
  const leftOption = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
      <X size={24} stroke="#ef4444" strokeWidth={3} />
      <span style={{ color: '#ef4444', fontSize: '1.3rem' }}>Traditional</span>
    </div>
  )

  const leftDetails = (
    <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '12px', height: '100%' }}>
      <div style={{ marginBottom: '2rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
        <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.15)', borderRadius: '8px', marginBottom: '1rem' }}>
          <strong style={{ color: '#fca5a5', fontSize: '1.3rem' }}>Tax:</strong>
          <p style={{ color: '#e2e8f0', marginTop: '0.5rem' }}>Reactive, annual-only TLH</p>
        </div>
        <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.15)', borderRadius: '8px', marginBottom: '1rem' }}>
          <strong style={{ color: '#fca5a5', fontSize: '1.3rem' }}>Alternatives:</strong>
          <p style={{ color: '#e2e8f0', marginTop: '0.5rem' }}>Gatekept by minimums</p>
        </div>
        <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.15)', borderRadius: '8px' }}>
          <strong style={{ color: '#fca5a5', fontSize: '1.3rem' }}>India:</strong>
          <p style={{ color: '#e2e8f0', marginTop: '0.5rem' }}>Too complex, too slow</p>
        </div>
      </div>
    </div>
  )

  // Right option - What HNWIs Want
  const rightOption = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
      <Check size={24} stroke="#14b8a6" strokeWidth={3} />
      <span style={{ color: '#14b8a6', fontSize: '1.3rem' }}>What HNWIs Want</span>
    </div>
  )

  const rightDetails = (
    <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '2rem', borderRadius: '12px', height: '100%' }}>
      <div style={{ marginBottom: '2rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
        <div style={{ padding: '1rem', background: 'rgba(20, 184, 166, 0.15)', borderRadius: '8px', marginBottom: '1rem' }}>
          <strong style={{ color: '#5eead4', fontSize: '1.3rem' }}>Tax:</strong>
          <p style={{ color: '#e2e8f0', marginTop: '0.5rem' }}>Proactive, daily optimization</p>
        </div>
        <div style={{ padding: '1rem', background: 'rgba(20, 184, 166, 0.15)', borderRadius: '8px', marginBottom: '1rem' }}>
          <strong style={{ color: '#5eead4', fontSize: '1.3rem' }}>Alternatives:</strong>
          <p style={{ color: '#e2e8f0', marginTop: '0.5rem' }}>Curated, accessible</p>
        </div>
        <div style={{ padding: '1rem', background: 'rgba(20, 184, 166, 0.15)', borderRadius: '8px' }}>
          <strong style={{ color: '#5eead4', fontSize: '1.3rem' }}>India:</strong>
          <p style={{ color: '#e2e8f0', marginTop: '0.5rem' }}>Simple, tax-efficient access</p>
        </div>
      </div>
    </div>
  )

  // Summary
  const summary = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      style={{
        textAlign: 'center',
        fontSize: '1.4rem',
        color: '#14b8a6',
        fontWeight: 'bold',
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(34, 197, 94, 0.1))',
        borderRadius: '12px'
      }}
    >
      Traditional advisors can't scale these solutions. AI can.
      <div style={{ marginTop: '1rem' }}>
        <span style={{ fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
          Source: Capgemini Wealth Management Report, 2023
        </span>
      </div>
    </motion.div>
  )

  return (
    <ComparisonLayout
      title={title}
      subtitle={subtitle}
      leftOption={leftOption}
      leftDetails={leftDetails}
      rightOption={rightOption}
      rightDetails={rightDetails}
      summary={summary}
    />
  )
}