import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { User, ArrowRight, TrendingUp, Shield, Globe, Clock, CheckCircle, AlertTriangle } from 'lucide-react'

export default function ARIAClientJourneySlideNew() {
  const beforeItems = [
    { icon: AlertTriangle, text: '6 different advisors', color: '#ef4444' },
    { icon: AlertTriangle, text: '$47K/year in fees', color: '#ef4444' },
    { icon: AlertTriangle, text: 'No India access', color: '#ef4444' },
    { icon: AlertTriangle, text: 'Manual tax filing', color: '#ef4444' },
    { icon: AlertTriangle, text: 'Quarterly updates only', color: '#ef4444' }
  ]

  const afterItems = [
    { icon: CheckCircle, text: 'One AI-powered platform', color: '#22c55e' },
    { icon: CheckCircle, text: '$12K/year total cost', color: '#22c55e' },
    { icon: CheckCircle, text: 'GIFT City access live', color: '#22c55e' },
    { icon: CheckCircle, text: 'Automated tax optimization', color: '#22c55e' },
    { icon: CheckCircle, text: 'Real-time 24/7 monitoring', color: '#22c55e' }
  ]

  const metrics = [
    { label: 'Fee Savings', value: '74%', subtext: '$35K/year saved' },
    { label: 'Time Saved', value: '40hrs', subtext: 'per quarter' },
    { label: 'New Access', value: '$5T', subtext: 'India markets' }
  ]

  return (
    <AspectFrame>
      <div style={{
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(1rem, 2vw, 1.5rem)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center' }}
        >
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 'bold',
            marginBottom: '0.5rem'
          }}>
            <GradientText gradient="from-teal-400 to-cyan-400">
              From Chaos to Clarity
            </GradientText>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
            Real client transformation: The Sharma Family ($8M portfolio)
          </p>
        </motion.div>

        {/* Client Profile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(20, 184, 166, 0.1)',
            borderRadius: '0.75rem',
            border: '1px solid rgba(20, 184, 166, 0.2)'
          }}
        >
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <User size={24} style={{ color: 'white' }} />
          </div>
          <div>
            <div style={{ fontWeight: 'bold', color: '#e2e8f0', fontSize: '1rem' }}>
              The Sharma Family
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
              US-based NRI • $8M portfolio • India investment goals
            </div>
          </div>
        </motion.div>

        {/* Before/After Comparison */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: 'clamp(1rem, 2vw, 2rem)',
          alignItems: 'stretch'
        }}>
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '1rem',
              padding: 'clamp(1rem, 2vw, 1.5rem)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3 style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              fontWeight: 'bold',
              color: '#ef4444',
              marginBottom: '1rem',
              textAlign: 'center',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(239, 68, 68, 0.2)'
            }}>
              😰 BEFORE ARIA
            </h3>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {beforeItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.6rem 0.75rem',
                    background: 'rgba(239, 68, 68, 0.05)',
                    borderRadius: '0.5rem'
                  }}
                >
                  <item.icon size={16} style={{ color: item.color, flexShrink: 0 }} />
                  <span style={{ color: '#e2e8f0', fontSize: 'clamp(0.75rem, 1vw, 0.9rem)' }}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div style={{
              marginTop: '1rem',
              padding: '0.75rem',
              background: 'rgba(239, 68, 68, 0.1)',
              borderRadius: '0.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Annual Stress Level</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ef4444' }}>😫 High</div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            <div style={{
              padding: '0.75rem',
              background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
              borderRadius: '50%',
              boxShadow: '0 0 30px rgba(20, 184, 166, 0.4)'
            }}>
              <ArrowRight size={24} style={{ color: 'white' }} />
            </div>
            <span style={{ fontSize: '0.7rem', color: '#14b8a6', fontWeight: '600' }}>
              30 DAYS
            </span>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'rgba(34, 197, 94, 0.05)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '1rem',
              padding: 'clamp(1rem, 2vw, 1.5rem)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3 style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              fontWeight: 'bold',
              color: '#22c55e',
              marginBottom: '1rem',
              textAlign: 'center',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
              😊 AFTER ARIA
            </h3>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {afterItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.6rem 0.75rem',
                    background: 'rgba(34, 197, 94, 0.05)',
                    borderRadius: '0.5rem'
                  }}
                >
                  <item.icon size={16} style={{ color: item.color, flexShrink: 0 }} />
                  <span style={{ color: '#e2e8f0', fontSize: 'clamp(0.75rem, 1vw, 0.9rem)' }}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div style={{
              marginTop: '1rem',
              padding: '0.75rem',
              background: 'rgba(34, 197, 94, 0.1)',
              borderRadius: '0.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Annual Stress Level</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22c55e' }}>😌 Minimal</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem'
          }}
        >
          {metrics.map((metric, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                padding: '0.75rem',
                background: 'rgba(20, 184, 166, 0.1)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(20, 184, 166, 0.2)'
              }}
            >
              <div style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 'bold', color: '#14b8a6' }}>
                {metric.value}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#e2e8f0' }}>{metric.label}</div>
              <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{metric.subtext}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </AspectFrame>
  )
}
