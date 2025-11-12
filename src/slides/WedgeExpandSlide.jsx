import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Target, Database, Globe, ArrowRight } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function WedgeExpandSlide() {
  const phases = [
    {
      phase: 1,
      name: 'LAND',
      subtitle: 'The Wedge',
      product: 'India Gateway Fund',
      detail: 'Via Vora Ventures GIFT City AIF',
      target: 'First 100 clients via CPAs',
      icon: Target,
      color: '#14b8a6'
    },
    {
      phase: 2,
      name: 'EXPAND',
      subtitle: 'The Hero',
      product: 'ARIA Data Engine',
      detail: 'AI reads all K-1s/LPAs',
      target: 'Become System of Record',
      icon: Database,
      color: '#60a5fa'
    },
    {
      phase: 3,
      name: 'DOMINATE',
      subtitle: 'The Vision',
      product: 'Global AI Advisor',
      detail: 'Via Alpaca/IBKR integrations',
      target: 'Cross-sell to captured base',
      icon: Globe,
      color: '#a78bfa'
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
        background: 'radial-gradient(ellipse at center, rgba(20, 184, 166, 0.05), transparent)'
      }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1rem' }}
        >
          <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>
            <GradientText gradient="from-teal-400 via-cyan-400 to-purple-400">
              Our "Wedge & Expand" Strategy
            </GradientText>
          </h1>
          <p style={{ fontSize: '1rem', color: '#94a3b8' }}>
            The 3-Phase Path to Dominating AI Wealth Management
          </p>
        </motion.div>

        {/* Phases */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: `linear-gradient(135deg, ${phase.color}15, ${phase.color}05)`,
                  border: `${pxToRem(2)} solid ${phase.color}40`,
                  borderRadius: pxToRem(16),
                  padding: '1.25rem',
                  height: '100%'
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <Icon size={40} color={phase.color} />
                </div>
                <h3 style={{ color: phase.color, fontSize: '1.4rem', fontWeight: 'bold' }}>
                  PHASE {phase.phase}: {phase.name}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                  {phase.subtitle}
                </p>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: pxToRem(8),
                  padding: '0.75rem',
                  marginBottom: '0.75rem'
                }}>
                  <p style={{ color: '#e2e8f0', fontSize: '1rem', fontWeight: 'bold' }}>
                    {phase.product}
                  </p>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.4rem' }}>
                    {phase.detail}
                  </p>
                </div>
                <p style={{ color: phase.color, fontSize: '0.9rem', fontWeight: 'bold' }}>
                  Target: {phase.target}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            padding: '1rem',
            background: 'linear-gradient(90deg, rgba(20, 184, 166, 0.1), rgba(147, 51, 234, 0.1))',
            borderRadius: pxToRem(12)
          }}
        >
          <p style={{ fontSize: '1.2rem', color: '#14b8a6' }}>
            <strong>Year 1:</strong> 100 clients → <strong>Year 2:</strong> 500 clients → <strong>Year 3:</strong> 5,000 clients
          </p>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
