import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Building2, Globe, Users, TrendingUp, Award, Network } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function StrategicPartnershipsSlide() {
  const title = (
    <GradientText gradient="from-teal-400 to-cyan-400">
      Strategic Partnerships Propelling Our Growth
    </GradientText>
  )

  const partnerships = [
    {
      category: 'GOVERNMENT MANDATE',
      partner: 'MahaREIT',
      icon: Building2,
      color: '#ef4444',
      description: 'Government of Maharashtra',
      detail: 'Exclusive fund management mandate at GIFT City',
      impact: 'ARIA powers sovereign wealth operations'
    },
    {
      category: 'WEALTH MANAGEMENT',
      partners: [
        { name: 'Shakedeal', detail: '$50M topline leader' },
        { name: 'Ascendum', detail: 'B2B2C distribution network' }
      ],
      icon: Globe,
      color: '#3b82f6',
      description: 'Premium wealth managers',
      impact: '1,000+ CPAs ready to onboard'
    },
    {
      category: 'DISTRIBUTION GIANTS',
      partners: [
        { name: 'Spark Capital', detail: 'India\'s largest distributor' },
        { name: 'Ambit Capital', detail: 'Institutional powerhouse' }
      ],
      icon: TrendingUp,
      color: '#10b981',
      description: 'Top-tier distribution partners',
      impact: 'Access to 50,000+ HNW clients'
    },
    {
      category: 'ECOSYSTEM NETWORK',
      partner: 'MFDs & Brokers',
      icon: Network,
      color: '#8b5cf6',
      description: 'All major MFDs and brokers',
      detail: 'Working relationships established',
      impact: 'Pan-India distribution ready'
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textAlign: 'center', marginBottom: '-0.5rem' }}
      >
        <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
          World-class partners validating our vision and accelerating market penetration
        </p>
      </motion.div>

      {/* Partnership Grid */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        padding: '0.5rem'
      }}>
        {partnerships.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              style={{
                padding: '1.25rem',
                background: `linear-gradient(135deg, ${item.color}10, ${item.color}05)`,
                border: `2px solid ${item.color}30`,
                borderRadius: pxToRem(12),
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background Pattern */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '100px',
                height: '100px',
                background: `radial-gradient(circle, ${item.color}10 0%, transparent 70%)`,
                borderRadius: '50%',
                transform: 'translate(30%, -30%)'
              }} />

              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: `${item.color}20`,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={20} color={item.color} />
                </div>
                <div style={{
                  fontSize: '0.7rem',
                  color: item.color,
                  fontWeight: 'bold',
                  letterSpacing: '0.05em'
                }}>
                  {item.category}
                </div>
              </div>

              {/* Partner Names */}
              <div style={{ marginBottom: '0.5rem' }}>
                {item.partner ? (
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#e2e8f0'
                  }}>
                    {item.partner}
                  </div>
                ) : item.partners ? (
                  <div>
                    {item.partners.map((p, i) => (
                      <div key={i} style={{
                        fontSize: '0.95rem',
                        fontWeight: 'bold',
                        color: '#e2e8f0',
                        marginBottom: '0.25rem'
                      }}>
                        {p.name}
                        <span style={{
                          fontSize: '0.7rem',
                          color: '#64748b',
                          marginLeft: '0.5rem',
                          fontWeight: 'normal'
                        }}>
                          ({p.detail})
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Description */}
              <div style={{
                fontSize: '0.75rem',
                color: '#94a3b8',
                marginBottom: '0.25rem'
              }}>
                {item.description}
                {item.detail && (
                  <div style={{ marginTop: '0.25rem', fontStyle: 'italic' }}>
                    {item.detail}
                  </div>
                )}
              </div>

              {/* Impact Badge */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.15 }}
                style={{
                  marginTop: 'auto',
                  padding: '0.5rem',
                  background: `${item.color}15`,
                  borderRadius: pxToRem(6),
                  borderLeft: `3px solid ${item.color}`,
                  fontSize: '0.7rem',
                  color: '#5eead4',
                  fontWeight: '600'
                }}
              >
                ✓ {item.impact}
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom Metrics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.5rem',
          padding: '1rem',
          background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.1), transparent)',
          borderRadius: pxToRem(8),
          borderTop: '2px solid rgba(20, 184, 166, 0.3)',
          borderBottom: '2px solid rgba(20, 184, 166, 0.3)'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#14b8a6' }}>1</div>
          <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Govt Mandate</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#3b82f6' }}>$50M+</div>
          <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Partner Topline</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#10b981' }}>50K+</div>
          <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>HNW Access</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#8b5cf6' }}>1,000+</div>
          <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>CPAs Ready</div>
        </div>
      </motion.div>

      {/* Trust Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        style={{
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#5eead4',
          fontWeight: '600',
          fontStyle: 'italic'
        }}
      >
        "When industry leaders and government choose ARIA, the market follows"
      </motion.div>
    </div>
  )

  const metrics = [
    {
      icon: Building2,
      value: 1,
      suffix: '',
      label: 'Govt Mandate',
      color: '#ef4444',
      description: 'Maharashtra REIT exclusive'
    },
    {
      icon: Users,
      value: 1000,
      suffix: '+',
      label: 'CPAs Ready',
      color: '#10b981',
      description: 'Through partner network'
    },
    {
      icon: Globe,
      value: 50,
      suffix: 'K+',
      label: 'HNW Access',
      color: '#3b82f6',
      description: 'Premium client reach'
    }
  ]

  return <DataSlideLayout title={title} mainVisual={mainVisual} metrics={metrics} />
}
