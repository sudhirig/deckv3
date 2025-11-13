import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Bell, Brain, Cpu, Zap } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function AgentAutonomySlide() {
  const title = (
    <GradientText gradient="from-purple-400 to-blue-400">
      From Assistant to Autonomous Wealth Manager
    </GradientText>
  )

  const levels = [
    {
      level: 1,
      name: 'ALERT',
      timeline: 'TODAY (Live)',
      icon: Bell,
      color: '#10b981',
      features: [
        'Notifications on opportunities',
        'Tax loss alerts',
        'Risk warnings'
      ],
      automation: 20
    },
    {
      level: 2,
      name: 'RECOMMEND',
      timeline: 'Q2 2025',
      icon: Brain,
      color: '#3b82f6',
      features: [
        'Suggests trades with reasoning',
        'Proposes rebalancing',
        'One-click execution'
      ],
      automation: 45
    },
    {
      level: 3,
      name: 'GUIDED AUTONOMY',
      timeline: 'Q4 2025',
      icon: Cpu,
      color: '#f59e0b',
      features: [
        'Executes within preset limits',
        'Auto-rebalances portfolio',
        'Harvests losses automatically'
      ],
      automation: 75
    },
    {
      level: 4,
      name: 'FULL AUTONOMY',
      timeline: '2026',
      icon: Zap,
      color: '#8b5cf6',
      features: [
        'Complete portfolio management',
        'Proactive wealth optimization',
        'Human oversight only'
      ],
      automation: 95
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Ladder Visualization */}
      <div style={{ flex: 1, position: 'relative' }}>
        {/* Background Stairs */}
        <svg style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.1
        }}>
          {levels.map((_, i) => (
            <rect
              key={i}
              x={`${i * 25}%`}
              y={`${75 - i * 25}%`}
              width="25%"
              height={`${25 + i * 25}%`}
              fill="#14b8a6"
            />
          ))}
        </svg>

        {/* Level Cards */}
        <div style={{
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '1rem',
          padding: '0 1rem'
        }}>
          {levels.map((level, index) => {
            const Icon = level.icon
            return (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                style={{
                  flex: 1,
                  height: `${25 + index * 25}%`,
                  background: `linear-gradient(135deg, ${level.color}20, ${level.color}10)`,
                  border: `2px solid ${level.color}`,
                  borderRadius: pxToRem(12),
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Level Badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: level.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}>
                    {level.level}
                  </div>
                  <Icon size={24} color={level.color} />
                </div>

                {/* Level Name */}
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: level.color,
                  marginBottom: '0.25rem'
                }}>
                  {level.name}
                </div>

                {/* Timeline */}
                <div style={{
                  fontSize: '0.75rem',
                  color: '#5eead4',
                  marginBottom: '0.75rem',
                  fontWeight: '600'
                }}>
                  {level.timeline}
                </div>

                {/* Features */}
                <div style={{
                  fontSize: '0.7rem',
                  color: '#94a3b8',
                  flex: 1
                }}>
                  {level.features.map((feature, i) => (
                    <div key={i} style={{ marginBottom: '0.25rem' }}>
                      • {feature}
                    </div>
                  ))}
                </div>

                {/* Automation Progress */}
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '0.5rem'
                }}>
                  <div style={{
                    fontSize: '0.65rem',
                    color: '#64748b',
                    marginBottom: '0.25rem'
                  }}>
                    Automation: {level.automation}%
                  </div>
                  <div style={{
                    width: '100%',
                    height: '4px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '2px',
                    overflow: 'hidden'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${level.automation}%` }}
                      transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                      style={{
                        height: '100%',
                        background: level.color
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          padding: '1rem',
          background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.1), transparent)',
          borderRadius: pxToRem(8)
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#14b8a6' }}>
            60%
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
            Current Automation
          </div>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          fontSize: '1.5rem',
          color: '#5eead4'
        }}>
          →
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>
            95%
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
            Target by 2026
          </div>
        </div>
      </motion.div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
