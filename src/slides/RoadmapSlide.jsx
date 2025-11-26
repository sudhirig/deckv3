import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Rocket, Users, Globe, Target, CheckCircle, Clock, ArrowRight } from 'lucide-react'

export default function RoadmapSlide() {
  const phases = [
    {
      quarter: 'Q1 2025',
      title: 'LAUNCH',
      subtitle: 'Foundation',
      icon: Rocket,
      color: '#14b8a6',
      status: 'current',
      milestones: [
        'Close $5M Seed',
        'First 50 CPA partners',
        '$50M AUM target',
        'GIFT City live'
      ]
    },
    {
      quarter: 'Q2-Q3 2025',
      title: 'SCALE',
      subtitle: 'Growth',
      icon: Users,
      color: '#3b82f6',
      status: 'upcoming',
      milestones: [
        '500 CPA partners',
        '$250M AUM',
        'US brokerage integration',
        'Series A prep'
      ]
    },
    {
      quarter: 'Q4 2025',
      title: 'EXPAND',
      subtitle: 'Markets',
      icon: Globe,
      color: '#a78bfa',
      status: 'future',
      milestones: [
        '1,000+ CPAs',
        '$500M AUM',
        'Multi-country access',
        'Enterprise features'
      ]
    },
    {
      quarter: '2026',
      title: 'DOMINATE',
      subtitle: 'Category Leader',
      icon: Target,
      color: '#f59e0b',
      status: 'future',
      milestones: [
        '$1B+ AUM',
        '10,000+ families',
        'Full AI autonomy',
        'IPO path'
      ]
    }
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
              The Path to $1B AUM
            </GradientText>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
            18-month roadmap to category leadership
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {/* Progress Line */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '0 2rem'
          }}>
            {/* Background Line */}
            <div style={{
              position: 'absolute',
              top: '30px',
              left: '4rem',
              right: '4rem',
              height: '4px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '2px'
            }} />
            
            {/* Progress Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '25%' }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{
                position: 'absolute',
                top: '30px',
                left: '4rem',
                height: '4px',
                background: 'linear-gradient(90deg, #14b8a6, #3b82f6)',
                borderRadius: '2px'
              }}
            />

            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '22%',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {/* Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: phase.status === 'current' 
                      ? `linear-gradient(135deg, ${phase.color}, ${phase.color}cc)`
                      : 'rgba(255, 255, 255, 0.05)',
                    border: `3px solid ${phase.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: phase.status === 'current' 
                      ? `0 0 30px ${phase.color}44`
                      : 'none',
                    marginBottom: '1rem'
                  }}
                >
                  <phase.icon size={24} style={{ 
                    color: phase.status === 'current' ? 'white' : phase.color 
                  }} />
                </motion.div>

                {/* Quarter Label */}
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: phase.color,
                  marginBottom: '0.25rem'
                }}>
                  {phase.quarter}
                </div>

                {/* Title */}
                <div style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  fontWeight: 'bold',
                  color: '#e2e8f0',
                  marginBottom: '0.25rem'
                }}>
                  {phase.title}
                </div>

                {/* Subtitle */}
                <div style={{
                  fontSize: '0.8rem',
                  color: '#64748b',
                  marginBottom: '0.75rem'
                }}>
                  {phase.subtitle}
                </div>

                {/* Milestones Card */}
                <div style={{
                  background: phase.status === 'current'
                    ? `rgba(${phase.color === '#14b8a6' ? '20, 184, 166' : '59, 130, 246'}, 0.1)`
                    : 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${phase.status === 'current' ? phase.color + '44' : 'rgba(255, 255, 255, 0.05)'}`,
                  borderRadius: '0.75rem',
                  padding: '0.75rem',
                  width: '100%'
                }}>
                  {phase.milestones.map((milestone, j) => (
                    <div
                      key={j}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: j < phase.milestones.length - 1 ? '0.4rem' : 0,
                        fontSize: 'clamp(0.65rem, 0.9vw, 0.75rem)',
                        color: phase.status === 'current' ? '#e2e8f0' : '#94a3b8'
                      }}
                    >
                      {phase.status === 'current' ? (
                        <CheckCircle size={12} style={{ color: phase.color, flexShrink: 0 }} />
                      ) : (
                        <Clock size={12} style={{ color: '#64748b', flexShrink: 0 }} />
                      )}
                      {milestone}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            padding: '1rem',
            background: 'rgba(20, 184, 166, 0.1)',
            borderRadius: '0.75rem',
            border: '1px solid rgba(20, 184, 166, 0.2)'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Current Stage</div>
            <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#14b8a6' }}>Pre-Seed → Seed</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>18-Month Target</div>
            <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>$500M AUM</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Exit Potential</div>
            <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#a78bfa' }}>$1B+ Valuation</div>
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
