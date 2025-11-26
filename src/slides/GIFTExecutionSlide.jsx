import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Clock, Zap, FileText, CheckCircle, ArrowRight, Building2, Globe } from 'lucide-react'

export default function GIFTExecutionSlide() {
  const traditionalSteps = [
    { step: 'Find Advisor', time: '2-4 weeks', icon: '🔍' },
    { step: 'Due Diligence', time: '4-6 weeks', icon: '📋' },
    { step: 'Legal Setup', time: '6-8 weeks', icon: '⚖️' },
    { step: 'Bank Account', time: '4-6 weeks', icon: '🏦' },
    { step: 'Fund Transfer', time: '2-4 weeks', icon: '💸' },
    { step: 'First Investment', time: '2-4 weeks', icon: '📈' }
  ]

  const ariaSteps = [
    { step: 'Connect Account', time: '30 sec', icon: '🔗' },
    { step: 'KYC Verification', time: '2 min', icon: '✅' },
    { step: 'GIFT Structure', time: '1 min', icon: '🏛️' },
    { step: 'Fund Allocation', time: '1 min', icon: '💰' },
    { step: 'Live Investment', time: '30 sec', icon: '🚀' }
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
              From Locked to Liquid
            </GradientText>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
            GIFT City execution: 6 months → 5 minutes
          </p>
        </motion.div>

        {/* Main Comparison */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: 'clamp(1rem, 2vw, 2rem)',
          alignItems: 'stretch'
        }}>
          {/* Traditional Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '1rem',
              padding: 'clamp(1rem, 2vw, 1.5rem)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(239, 68, 68, 0.2)'
            }}>
              <Clock size={24} style={{ color: '#ef4444' }} />
              <div>
                <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: 'bold', color: '#ef4444' }}>
                  Traditional Way
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Manual, fragmented process</p>
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {traditionalSteps.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0.75rem',
                    background: 'rgba(239, 68, 68, 0.05)',
                    borderRadius: '0.5rem',
                    borderLeft: '3px solid #ef4444'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                    <span style={{ color: '#e2e8f0', fontSize: 'clamp(0.75rem, 1vw, 0.9rem)' }}>{item.step}</span>
                  </div>
                  <span style={{ color: '#ef4444', fontSize: 'clamp(0.7rem, 0.9vw, 0.8rem)', fontWeight: '600' }}>
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{
                marginTop: '1rem',
                padding: '0.75rem',
                background: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '0.5rem',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 'bold', color: '#ef4444' }}>
                6+ Months
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Total Time to First Investment</div>
            </motion.div>
          </motion.div>

          {/* VS Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              color: 'white',
              boxShadow: '0 0 30px rgba(20, 184, 166, 0.4)'
            }}>
              VS
            </div>
            <ArrowRight size={24} style={{ color: '#14b8a6' }} />
          </motion.div>

          {/* ARIA Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'rgba(20, 184, 166, 0.05)',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              borderRadius: '1rem',
              padding: 'clamp(1rem, 2vw, 1.5rem)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(20, 184, 166, 0.2)'
            }}>
              <Zap size={24} style={{ color: '#14b8a6' }} />
              <div>
                <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: 'bold', color: '#14b8a6' }}>
                  ARIA + GIFT City
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Automated, seamless flow</p>
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {ariaSteps.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0.75rem',
                    background: 'rgba(20, 184, 166, 0.05)',
                    borderRadius: '0.5rem',
                    borderLeft: '3px solid #14b8a6'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                    <span style={{ color: '#e2e8f0', fontSize: 'clamp(0.75rem, 1vw, 0.9rem)' }}>{item.step}</span>
                  </div>
                  <span style={{ color: '#14b8a6', fontSize: 'clamp(0.7rem, 0.9vw, 0.8rem)', fontWeight: '600' }}>
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{
                marginTop: '1rem',
                padding: '0.75rem',
                background: 'rgba(20, 184, 166, 0.1)',
                borderRadius: '0.5rem',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 'bold', color: '#14b8a6' }}>
                5 Minutes
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Total Time to First Investment</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem'
          }}
        >
          {[
            { icon: Building2, label: 'GIFT City AIF', value: '0% Tax', color: '#14b8a6' },
            { icon: Globe, label: 'Cross-Border', value: 'Seamless', color: '#3b82f6' },
            { icon: CheckCircle, label: 'Compliance', value: '100% RBI', color: '#22c55e' }
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <stat.icon size={20} style={{ color: stat.color }} />
              <div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{stat.label}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: '600', color: stat.color }}>{stat.value}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </AspectFrame>
  )
}
