import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Target, CheckCircle, Lock } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function AgenticMoatSlide() {
  const moats = [
    {
      icon: Target,
      emoji: '🎯',
      title: 'Deep HNW Specialization',
      subtitle: 'Not Generic Robo-Advice',
      color: '#14b8a6',
      bgColor: 'rgba(20, 184, 166, 0.1)',
      borderColor: 'rgba(20, 184, 166, 0.3)',
      points: [
        'Tax Alpha Agent (2-3% annual savings)',
        'Alternative Asset Agent (access to 15% of portfolio)',
        'Concentrated stock solutions',
        'Multi-generational planning'
      ],
      footer: 'The Value Proof'
    },
    {
      icon: CheckCircle,
      emoji: '✅',
      title: 'Validated Model',
      subtitle: 'Arta Finance Proves It Works',
      color: '#8b5cf6',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      points: [
        'Founded by ex-Googlers',
        'Raised $90M+ from top VCs',
        'Uses similar agentic architecture',
        'Targets same HNW segment',
        '$250K minimum (we\'re $500K+)'
      ],
      footer: 'Lessons Learned'
    },
    {
      icon: Lock,
      emoji: '🔒',
      title: 'Broker-Agnostic Platform',
      subtitle: 'Why This Matters',
      color: '#3b82f6',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      points: [
        'We are not a brokerage',
        'Pure AI intelligence layer',
        'Clients keep existing accounts',
        'Plug into IBKR, Alpaca, Schwab',
        'No custody risk, no transfer friction'
      ],
      footer: 'The Trust Advantage'
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        gap: '1.5rem'
      }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center' }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0' }}>
            <GradientText gradient="from-cyan-400 to-blue-400">
              Why We Win: Our "Agentic" Moat
            </GradientText>
          </h1>
        </motion.div>

        {/* Three Columns */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem'
        }}>
          {moats.map((moat, index) => (
            <motion.div
              key={moat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              style={{
                background: moat.bgColor,
                border: `2px solid ${moat.borderColor}`,
                borderRadius: pxToRem(16),
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Header */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>{moat.emoji}</span>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    color: '#e2e8f0'
                  }}>
                    {moat.title}
                  </h3>
                </div>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#94a3b8',
                  fontStyle: 'italic'
                }}>
                  {moat.subtitle}
                </p>
              </div>

              {/* Points */}
              <ul style={{
                flex: 1,
                listStyle: 'none',
                padding: 0,
                margin: '0 0 1rem 0'
              }}>
                {moat.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      marginBottom: '0.75rem',
                      fontSize: '0.95rem',
                      color: '#e2e8f0',
                      lineHeight: '1.4'
                    }}
                  >
                    <span style={{ color: moat.color, marginTop: '2px' }}>▪</span>
                    {point}
                  </motion.li>
                ))}
              </ul>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                style={{
                  paddingTop: '1rem',
                  borderTop: `1px solid ${moat.borderColor}`,
                  textAlign: 'center'
                }}
              >
                <p style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: moat.color
                }}>
                  {moat.footer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </AspectFrame>
  )
}
