import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { AlertTriangle, Lock, BarChart3 } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function ThreeCoreFailuresSlide() {
  const failures = [
    {
      icon: AlertTriangle,
      emoji: '🚨',
      title: 'Complex Needs Ignored',
      color: '#ef4444',
      borderColor: 'rgba(239, 68, 68, 0.4)',
      bgColor: 'rgba(239, 68, 68, 0.05)',
      problemTitle: 'The Problem',
      points: [
        'Advisors focus on simple asset allocation',
        'Fail to manage significant tax exposure',
        'Capital gains treatment inadequate',
        'Estate planning is an afterthought',
        'Multi-generational strategy missing'
      ],
      footer: 'The Result'
    },
    {
      icon: Lock,
      emoji: '🔒',
      title: '"Walled Garden" Access',
      color: '#f97316',
      borderColor: 'rgba(249, 115, 22, 0.4)',
      bgColor: 'rgba(249, 115, 22, 0.05)',
      problemTitle: 'The Problem',
      points: [
        'HNWIs demand alternatives (15% of portfolios)',
        'Most advisors cannot provide access',
        'No due diligence capabilities',
        'Private equity: advisor says "no"'
      ],
      footer: 'The Limitation'
    },
    {
      icon: BarChart3,
      emoji: '📊',
      title: 'Information Overload',
      color: '#fbbf24',
      borderColor: 'rgba(251, 191, 36, 0.4)',
      bgColor: 'rgba(251, 191, 36, 0.05)',
      problemTitle: 'The Problem',
      points: [
        'HNWIs receive 100-page quarterly reports',
        'No actionable insights',
        'Data, not intelligence',
        'Advisor is a human bottleneck',
        'Can\'t scale analysis',
        'Reactive, not proactive'
      ],
      footer: 'The Frustration'
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
            <GradientText gradient="from-red-400 to-orange-400">
              The Three Core Failures
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
          {failures.map((failure, index) => {
            const Icon = failure.icon
            return (
              <motion.div
                key={failure.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                style={{
                  background: failure.bgColor,
                  border: `2px solid ${failure.borderColor}`,
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
                    marginBottom: '0.75rem'
                  }}>
                    <span style={{ fontSize: '2rem' }}>{failure.emoji}</span>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: '#e2e8f0'
                    }}>
                      {failure.title}
                    </h3>
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    color: failure.color,
                    fontWeight: '600',
                    marginBottom: '0.75rem'
                  }}>
                    {failure.problemTitle}
                  </div>
                </div>

                {/* Points */}
                <ul style={{
                  flex: 1,
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1rem 0'
                }}>
                  {failure.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                        fontSize: '0.85rem',
                        color: '#e2e8f0',
                        lineHeight: '1.4'
                      }}
                    >
                      <span style={{ color: failure.color, marginTop: '2px' }}>▪</span>
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
                    borderTop: `1px solid ${failure.borderColor}`,
                    textAlign: 'center'
                  }}
                >
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: failure.color
                  }}>
                    {failure.footer}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AspectFrame>
  )
}
