import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { BarChart3, Users } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function MarketInMotionSlide() {
  const title = (
    <GradientText gradient="from-cyan-400 to-purple-400">
      A Market in Motion
    </GradientText>
  )

  const transferData = {
    totalAmount: '$124T',
    label: 'Total Intergenerational Transfer',
    points: [
      'Over the next 25 years (to 2048)',
      '50% from top 2% (HNW/UHNW)',
      'Accelerating dramatically after 2030'
    ],
    annualFlow: 'Gen X: $1.4T/year (inheriting now)'
  }

  const newGenerationData = {
    managementStyle: 'Active, Hands-On Management',
    points: [
      'Next-gen UHNWIs reject passive models',
      'Demand transparency and control',
      'Tech-native expectations',
      'Values-driven investing (ESG, impact)'
    ],
    behavioralShifts: [
      '72% say stocks/bonds insufficient',
      '15% in alternatives (vs 9% in 2018)',
      'Self-direction + institutional access'
    ]
  }

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          textAlign: 'center',
          marginBottom: '0.5rem'
        }}
      >
        <h2 style={{ fontSize: '1.5rem', color: '#e2e8f0', fontWeight: '600' }}>
          The Great Wealth Transfer Has Begun
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1 }}>
        
        {/* Left Side - The Transfer */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(20, 184, 166, 0.05))',
            border: '2px solid rgba(20, 184, 166, 0.4)',
            borderRadius: pxToRem(16),
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            <BarChart3 size={28} color="#14b8a6" />
            <h3 style={{ fontSize: '1.2rem', color: '#e2e8f0', fontWeight: 'bold' }}>
              The Transfer
            </h3>
          </div>

          {/* $124T Display */}
          <div style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#14b8a6',
            marginBottom: '0.5rem'
          }}>
            {transferData.totalAmount}
          </div>
          <div style={{
            fontSize: '1rem',
            color: '#e2e8f0',
            marginBottom: '1rem'
          }}>
            {transferData.label}
          </div>

          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            {transferData.points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  color: '#e2e8f0'
                }}
              >
                <span style={{ color: '#14b8a6' }}>▪</span>
                {point}
              </motion.li>
            ))}
          </ul>

          <div style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(20, 184, 166, 0.2)'
          }}>
            <h4 style={{ fontSize: '0.95rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
              Annual Flow
            </h4>
            <div style={{ fontSize: '1rem', color: '#e2e8f0' }}>
              <span style={{ color: '#14b8a6' }}>▪</span> {transferData.annualFlow}
            </div>
          </div>
        </motion.div>

        {/* Right Side - The New Generation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))',
            border: '2px solid rgba(139, 92, 246, 0.4)',
            borderRadius: pxToRem(16),
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            <Users size={28} color="#8b5cf6" />
            <h3 style={{ fontSize: '1.2rem', color: '#e2e8f0', fontWeight: 'bold' }}>
              The New Generation
            </h3>
          </div>

          <div style={{
            fontSize: '1.1rem',
            color: '#e2e8f0',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            {newGenerationData.managementStyle}
          </div>

          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            {newGenerationData.points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  color: '#e2e8f0'
                }}
              >
                <span style={{ color: '#8b5cf6' }}>▪</span>
                {point}
              </motion.li>
            ))}
          </ul>

          <div style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(139, 92, 246, 0.2)'
          }}>
            <h4 style={{ fontSize: '1rem', color: '#e2e8f0', marginBottom: '0.5rem', fontWeight: '600' }}>
              Behavioral Shifts
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {newGenerationData.behavioralShifts.map((shift, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    marginBottom: '0.3rem',
                    fontSize: '0.85rem',
                    color: '#e2e8f0'
                  }}
                >
                  <span style={{ color: '#8b5cf6' }}>▪</span>
                  {shift}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
