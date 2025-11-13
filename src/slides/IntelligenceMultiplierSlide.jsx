import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Clock, Users, DollarSign, Zap } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function IntelligenceMultiplierSlide() {
  const title = (
    <GradientText gradient="from-orange-400 to-yellow-400">
      10,000x Faster Than Human Advisors
    </GradientText>
  )

  const tasks = [
    { 
      task: 'Portfolio Analysis',
      human: '2 hours',
      aria: '0.7 sec',
      multiplier: '10,285x',
      color: '#10b981'
    },
    { 
      task: 'Tax Optimization',
      human: '3 days',
      aria: '12 sec',
      multiplier: '21,600x',
      color: '#3b82f6'
    },
    { 
      task: 'Risk Assessment',
      human: '1 hour',
      aria: '0.3 sec',
      multiplier: '12,000x',
      color: '#ef4444'
    },
    { 
      task: 'Market Research',
      human: '5 hours',
      aria: '1.2 sec',
      multiplier: '15,000x',
      color: '#f59e0b'
    },
    { 
      task: 'Compliance Review',
      human: '2 days',
      aria: '8 sec',
      multiplier: '21,600x',
      color: '#8b5cf6'
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Comparison Table */}
      <div style={{ flex: 1 }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.5rem' }}>
          <thead>
            <tr>
              <th style={{ 
                textAlign: 'left', 
                padding: '0.75rem',
                color: '#5eead4',
                fontSize: '0.9rem',
                borderBottom: '2px solid rgba(20, 184, 166, 0.3)'
              }}>
                TASK
              </th>
              <th style={{ 
                textAlign: 'center', 
                padding: '0.75rem',
                color: '#94a3b8',
                fontSize: '0.9rem',
                borderBottom: '2px solid rgba(20, 184, 166, 0.3)'
              }}>
                HUMAN
              </th>
              <th style={{ 
                textAlign: 'center', 
                padding: '0.75rem',
                color: '#14b8a6',
                fontSize: '0.9rem',
                borderBottom: '2px solid rgba(20, 184, 166, 0.3)'
              }}>
                ARIA
              </th>
              <th style={{ 
                textAlign: 'center', 
                padding: '0.75rem',
                color: '#fbbf24',
                fontSize: '0.9rem',
                borderBottom: '2px solid rgba(20, 184, 166, 0.3)'
              }}>
                MULTIPLIER
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <motion.tr
                key={task.task}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <td style={{
                  padding: '0.75rem',
                  color: '#e2e8f0',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  borderLeft: `3px solid ${task.color}`
                }}>
                  {task.task}
                </td>
                <td style={{
                  textAlign: 'center',
                  padding: '0.75rem',
                  color: '#64748b',
                  fontSize: '0.85rem'
                }}>
                  {task.human}
                </td>
                <td style={{
                  textAlign: 'center',
                  padding: '0.75rem',
                  color: '#5eead4',
                  fontSize: '0.85rem',
                  fontWeight: 'bold'
                }}>
                  {task.aria}
                </td>
                <td style={{
                  textAlign: 'center',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.75rem',
                      background: `linear-gradient(135deg, ${task.color}30, ${task.color}10)`,
                      border: `1px solid ${task.color}`,
                      borderRadius: pxToRem(20),
                      color: task.color
                    }}
                  >
                    {task.multiplier}
                  </motion.span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Capacity Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem'
      }}>
        {/* Monthly Capacity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            padding: '1rem',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))',
            borderRadius: pxToRem(12),
            border: '1px solid rgba(59, 130, 246, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Users size={20} color="#3b82f6" />
            <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>MONTHLY CAPACITY</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Human Advisor</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#e2e8f0' }}>20</div>
            </div>
            <div style={{ fontSize: '1.5rem', color: '#3b82f6' }}>→</div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: '#5eead4' }}>ARIA</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#14b8a6' }}>
                <AnimatedCounter end={20000} duration={2} />
              </div>
            </div>
          </div>
          <div style={{ 
            textAlign: 'center', 
            marginTop: '0.5rem',
            fontSize: '0.8rem',
            color: '#fbbf24',
            fontWeight: 'bold'
          }}>
            1000x MORE CLIENTS
          </div>
        </motion.div>

        {/* Cost Per Client */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            padding: '1rem',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))',
            borderRadius: pxToRem(12),
            border: '1px solid rgba(34, 197, 94, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <DollarSign size={20} color="#22c55e" />
            <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>COST PER CLIENT</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Human</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#e2e8f0' }}>₹4L/mo</div>
            </div>
            <div style={{ fontSize: '1.5rem', color: '#22c55e' }}>→</div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: '#5eead4' }}>ARIA</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#14b8a6' }}>₹8K/mo</div>
            </div>
          </div>
          <div style={{ 
            textAlign: 'center', 
            marginTop: '0.5rem',
            fontSize: '0.8rem',
            color: '#22c55e',
            fontWeight: 'bold'
          }}>
            50x CHEAPER
          </div>
        </motion.div>
      </div>

      {/* Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          padding: '1rem',
          background: 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.1), transparent)',
          borderRadius: pxToRem(8),
          textAlign: 'center',
          borderTop: '2px solid rgba(251, 191, 36, 0.3)',
          borderBottom: '2px solid rgba(251, 191, 36, 0.3)'
        }}
      >
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '1rem',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          color: '#fbbf24'
        }}>
          <Zap size={24} />
          <span>Same Quality</span>
          <span style={{ color: '#5eead4' }}>•</span>
          <span>10,000x Speed</span>
          <span style={{ color: '#5eead4' }}>•</span>
          <span>50x Cheaper</span>
        </div>
      </motion.div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
