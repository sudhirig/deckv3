import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Brain, Music, Sparkles, Network } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import ARIAAvatar, { ARIAStatus } from '../components/ARIAAvatar'
import ARIAIconBadge from '../components/ARIAIconBadge'
import './SlideStyles.css'

export default function IntroducingARIASlide() {
  const title = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <GradientText gradient="from-teal-400 via-cyan-400 to-green-400">
        Meet ARIA - Your AI Family Office CEO
      </GradientText>
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.3,
          type: "spring"
        }}
        whileHover={{ rotate: 360 }}
      >
        <ARIAIconBadge size={50} animated={true} />
      </motion.div>
    </div>
  )

  const mainVisual = (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', height: '100%', alignItems: 'center' }}>
      {/* Left: The Virtuoso */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.1), transparent)',
          borderRadius: pxToRem(12),
          padding: '1.5rem'
        }}
      >
        <ARIAAvatar size="medium" variant="default" animated={true} showPulse={true} />
        <h2 style={{ color: '#14b8a6', fontSize: '1.5rem', marginTop: '1rem', marginBottom: '0.75rem', textAlign: 'center' }}>
          Your Wealth's AI CEO
        </h2>
        <p style={{ fontSize: '1rem', color: '#e2e8f0', textAlign: 'center', lineHeight: '1.6' }}>
          ARIA <strong style={{ color: '#5eead4' }}>orchestrates</strong> your wealth like a Fortune 500 CFO.
        </p>
        <p style={{ fontSize: '0.95rem', color: '#94a3b8', textAlign: 'center', marginTop: '0.75rem' }}>
          She's not a chatbot. She commands 5 specialized teams that bring order to complexity.
        </p>
      </motion.div>

      {/* Right: The Acronym */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(124, 58, 237, 0.05))',
          borderRadius: pxToRem(12),
          padding: '1.5rem'
        }}
      >
        <h2 style={{ color: '#a78bfa', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
          AI Risk & Investment Advisor
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6', width: '2.5rem' }}>A</span>
            <span style={{ fontSize: '1.1rem', color: '#e2e8f0' }}>Artificial Intelligence</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6', width: '2.5rem' }}>R</span>
            <span style={{ fontSize: '1.1rem', color: '#e2e8f0' }}>Risk Management</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6', width: '2.5rem' }}>I</span>
            <span style={{ fontSize: '1.1rem', color: '#e2e8f0' }}>Investment</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6', width: '2.5rem' }}>A</span>
            <span style={{ fontSize: '1.1rem', color: '#e2e8f0' }}>Advisor</span>
          </div>
        </div>
      </motion.div>
    </div>
  )

  const keyInsights = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      style={{
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(6, 182, 212, 0.1))',
        borderRadius: pxToRem(12),
        padding: '1.5rem',
        border: `${pxToRem(2)} solid rgba(20, 184, 166, 0.3)`,
        textAlign: 'center'
      }}
    >
      <ARIAStatus status="active" size="small" />
      <p style={{ fontSize: '1.2rem', color: '#14b8a6', fontWeight: 'bold', marginTop: '1rem' }}>
        ARIA Commands 5 Specialized Teams
      </p>
      <p style={{ fontSize: '1rem', color: '#e2e8f0', marginTop: '0.75rem' }}>
        68+ specialists working in perfect orchestration across tax intelligence, market analysis, risk protection, alternative assets, and compliance.
      </p>
    </motion.div>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
      keyInsights={keyInsights}
    />
  )
}
