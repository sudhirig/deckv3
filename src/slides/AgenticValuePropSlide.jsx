import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Clock, DollarSign, TrendingUp } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function AgenticValuePropSlide() {
  const title = (
    <GradientText gradient="from-orange-400 to-red-400">
      The Agentic Value Prop: Beyond "Alpha"
    </GradientText>
  )

  const metrics = [
    {
      icon: Clock,
      value: 200,
      suffix: '+',
      label: 'Hours/Year Saved',
      color: '#3b82f6',
      description: 'ARIA\'s Data Engine saves an average of 200+ hours of manual CPA/Family Office admin time by automating K-1 and LPA processing.'
    },
    {
      icon: DollarSign,
      value: 50000,
      prefix: '$',
      suffix: '+',
      label: 'Annual Savings in Fees',
      color: '#10b981',
      description: 'By productizing the "Family Office OS," ARIA eliminates tens of thousands in redundant accounting and administrative fees.'
    },
    {
      icon: TrendingUp,
      value: 1.8,
      suffix: '%',
      label: 'Tax Alpha (Projection)',
      color: '#f59e0b',
      description: 'ARIA\'s Tax Alpha Agent delivers daily tax-loss harvesting, direct indexing, and strategic timing optimization.'
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Subtitle */}
      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <p style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: '600' }}>
          We deliver value across three vectors: Time, Cost, and Performance.
        </p>
      </div>

      {/* Metrics Grid */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        alignItems: 'center'
      }}>
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              style={{
                height: '100%',
                padding: '1.5rem',
                background: `linear-gradient(135deg, ${metric.color}10, ${metric.color}05)`,
                border: `2px solid ${metric.color}`,
                borderRadius: pxToRem(16),
                boxShadow: `0 10px 40px ${metric.color}20`,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background Pattern */}
              <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-20%',
                width: '150%',
                height: '150%',
                background: `radial-gradient(circle at center, ${metric.color}05 0%, transparent 70%)`,
                pointerEvents: 'none'
              }} />

              {/* Header with Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
                zIndex: 1
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: `linear-gradient(135deg, ${metric.color}, ${metric.color}cc)`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 4px 12px ${metric.color}40`
                }}>
                  <Icon size={24} color="white" />
                </div>
                <div style={{ 
                  fontSize: '0.75rem', 
                  color: '#64748b',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {metric.label.split(' ')[0]}
                </div>
              </div>

              {/* Value */}
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: metric.color,
                marginBottom: '0.5rem',
                zIndex: 1
              }}>
                {metric.prefix}
                <AnimatedCounter 
                  end={metric.value} 
                  decimals={metric.value < 10 ? 1 : 0}
                  duration={2}
                />
                {metric.suffix}
              </div>

              {/* Label */}
              <div style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#e2e8f0',
                marginBottom: '0.75rem',
                zIndex: 1
              }}>
                {metric.label}
              </div>

              {/* Description */}
              <div style={{
                fontSize: '0.7rem',
                color: '#94a3b8',
                lineHeight: '1.4',
                flex: 1,
                zIndex: 1
              }}>
                {metric.description}
              </div>

              {/* Decorative Element */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2, type: 'spring' }}
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  width: '30px',
                  height: '30px',
                  background: `${metric.color}10`,
                  borderRadius: '50%',
                  border: `1px solid ${metric.color}30`
                }}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        style={{
          padding: '1rem',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05))',
          borderRadius: pxToRem(12),
          border: '1px solid rgba(251, 191, 36, 0.3)',
          textAlign: 'center'
        }}
      >
        <p style={{
          fontSize: '1rem',
          fontWeight: 'bold',
          color: '#fbbf24'
        }}>
          Total Value Created: <span style={{ fontSize: '1.2rem' }}>$67,600/year</span> + 200 hours of your life back
        </p>
      </motion.div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
