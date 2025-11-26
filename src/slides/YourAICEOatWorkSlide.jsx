import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Clock, Moon, Sun, Briefcase, TrendingUp, DollarSign, Globe } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function YourAICEOatWorkSlide() {
  const title = (
    <GradientText gradient="from-teal-400 to-cyan-400">
      Your AI CEO at Work
    </GradientText>
  )

  const metrics = [
    {
      icon: DollarSign,
      value: 72000,
      prefix: '$',
      suffix: '',
      label: 'Saved Last Quarter',
      color: '#10b981',
      description: 'One client saved $72K in taxes through continuous AI optimization'
    },
    {
      icon: TrendingUp,
      value: 1000,
      suffix: 's',
      label: 'Micro-Decisions Daily',
      color: '#14b8a6',
      description: 'Thousands of micro-decisions that compound into massive value'
    },
    {
      icon: Clock,
      value: 24,
      suffix: '/7',
      label: 'Always Working',
      color: '#06b6d4',
      description: 'Never sleeps, never takes vacation, always optimizing your wealth'
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Subtitle */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', fontWeight: '600' }}>
          Autonomous wealth management at unprecedented scale
        </p>
      </div>

      {/* 24/7 Timeline Visual */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(20, 184, 166, 0.2)',
        padding: '2rem',
        flex: 1
      }}>
        <h3 style={{
          fontSize: '1.2rem',
          fontWeight: '700',
          color: '#e2e8f0',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          ARIA's 24-Hour Wealth Optimization Cycle
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          height: 'calc(100% - 3rem)'
        }}>
          {/* Morning: Pre-Market */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
              borderRadius: '8px',
              padding: '1.5rem',
              border: '1px solid rgba(251, 146, 60, 0.3)',
              position: 'relative'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <Moon size={20} color="#fb923c" />
              <h4 style={{ fontSize: '1rem', color: '#fb923c', fontWeight: '600' }}>
                While You Sleep
              </h4>
              <span style={{
                fontSize: '0.75rem',
                color: '#64748b',
                marginLeft: 'auto'
              }}>
                12AM - 8AM
              </span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                <span style={{ color: '#fb923c' }}>•</span>
                <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                  Harvesting tax losses pre-market
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                <span style={{ color: '#fb923c' }}>•</span>
                <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                  Analyzing overnight global movements
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                <span style={{ color: '#fb923c' }}>•</span>
                <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                  Preparing trading queue for market open
                </span>
              </div>
            </div>

            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#fb923c'
              }}
            />
          </motion.div>

          {/* Day: Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, #0f766e 0%, #0891b2 100%)',
              borderRadius: '8px',
              padding: '1.5rem',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              position: 'relative'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <Sun size={20} color="#5eead4" />
              <h4 style={{ fontSize: '1rem', color: '#5eead4', fontWeight: '600' }}>
                While You Work
              </h4>
              <span style={{
                fontSize: '0.75rem',
                color: '#a7f3d0',
                marginLeft: 'auto'
              }}>
                8AM - 6PM
              </span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                <span style={{ color: '#5eead4' }}>✓</span>
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>
                  Rebalancing portfolios globally
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                <span style={{ color: '#5eead4' }}>✓</span>
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>
                  Executing India market opportunities
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                <span style={{ color: '#5eead4' }}>✓</span>
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>
                  Real-time risk monitoring & hedging
                </span>
              </div>
            </div>

            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
              style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#5eead4'
              }}
            />
          </motion.div>

          {/* Evening: Vacation/After Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, #312e81 0%, #4c1d95 100%)',
              borderRadius: '8px',
              padding: '1.5rem',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              position: 'relative'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <Briefcase size={20} color="#a78bfa" />
              <h4 style={{ fontSize: '1rem', color: '#a78bfa', fontWeight: '600' }}>
                On Your Vacation
              </h4>
              <span style={{
                fontSize: '0.75rem',
                color: '#c4b5fd',
                marginLeft: 'auto'
              }}>
                6PM - 12AM
              </span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                <span style={{ color: '#a78bfa' }}>◆</span>
                <span style={{ fontSize: '0.9rem', color: '#e9d5ff' }}>
                  Managing corporate actions
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                <span style={{ color: '#a78bfa' }}>◆</span>
                <span style={{ fontSize: '0.9rem', color: '#e9d5ff' }}>
                  Processing dividends & distributions
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                <span style={{ color: '#a78bfa' }}>◆</span>
                <span style={{ fontSize: '0.9rem', color: '#e9d5ff' }}>
                  Planning next day's strategies
                </span>
              </div>
            </div>

            <motion.div
              animate={{
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity
              }}
              style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#a78bfa'
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Value Creation Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          textAlign: 'center',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
          borderRadius: '8px',
          border: '1px solid rgba(20, 184, 166, 0.3)'
        }}
      >
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.5rem'
        }}>
          Thousands of micro-decisions compound into massive value
        </h3>
        <p style={{
          fontSize: '0.95rem',
          color: '#94a3b8'
        }}>
          Continuous optimization that's impossible for humans to replicate
        </p>
      </motion.div>
    </div>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
      metrics={metrics}
    />
  )
}
