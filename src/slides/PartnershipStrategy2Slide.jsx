import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import { MapPin, Globe, TrendingUp, Shield, Building, Users } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function PartnershipStrategy2Slide() {
  const giftCityAdvantages = [
    {
      category: 'Tax Benefits',
      icon: TrendingUp,
      color: '#4ade80',
      benefits: [
        '0% capital gains tax',
        'No STT on transactions',
        '10-year tax holiday',
        'No GST on services'
      ]
    },
    {
      category: 'Regulatory',
      icon: Shield,
      color: '#60a5fa',
      benefits: [
        'IFSCA unified regulation',
        'Fast-track licensing',
        'Sandbox environment',
        'English common law'
      ]
    },
    {
      category: 'Market Access',
      icon: Globe,
      color: '#fbbf24',
      benefits: [
        'Direct US market access',
        '24-hour trading',
        'Multi-currency operations',
        'International arbitration'
      ]
    },
    {
      category: 'Infrastructure',
      icon: Building,
      color: '#c084fc',
      benefits: [
        'World-class facilities',
        'Direct connectivity',
        'Talent availability',
        'Government support'
      ]
    }
  ]

  const globalExpansion = [
    { region: 'India', status: 'Live', clients: '2,500+', aum: '$5B' },
    { region: 'Singapore', status: 'Q2 2025', clients: '500 (projected)', aum: '$2B' },
    { region: 'Dubai', status: 'Q3 2025', clients: '300 (projected)', aum: '$1.5B' },
    { region: 'London', status: 'Q4 2025', clients: '200 (projected)', aum: '$1B' },
    { region: 'New York', status: '2026', clients: '1000 (projected)', aum: '$10B' }
  ]

  const cards = giftCityAdvantages.map((advantage, index) => (
    <motion.div
      key={advantage.category}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 + index * 0.1 }}
      style={{
        background: `linear-gradient(135deg, ${advantage.color}15, transparent)`,
        borderRadius: pxToRem(8),
        padding: pxToRem(16),
        border: `${pxToRem(1)} solid ${advantage.color}33`,
        height: '100%'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: pxToRem(8),
        marginBottom: pxToRem(12)
      }}>
        <advantage.icon size={18} style={{ color: advantage.color }} />
        <h4 style={{ color: advantage.color, fontSize: pxToRem(14.4), margin: 0 }}>
          {advantage.category}
        </h4>
      </div>
      {advantage.benefits.map((benefit, i) => (
        <div
          key={i}
          style={{
            fontSize: pxToRem(12),
            color: '#e2e8f0',
            marginBottom: pxToRem(4),
            paddingLeft: pxToRem(16),
            position: 'relative'
          }}
        >
          <span style={{
            position: 'absolute',
            left: 0,
            color: advantage.color
          }}>•</span>
          {benefit}
        </div>
      ))}
    </motion.div>
  ))

  const summary = (
    <>
      <motion.div
        initial={{ opacity: 0, y: pxToRem(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          background: 'rgba(59, 130, 246, 0.05)',
          borderRadius: pxToRem(12),
          padding: pxToRem(24),
          marginBottom: pxToRem(32)
        }}
      >
        <h3 style={{ color: '#60a5fa', marginBottom: pxToRem(24), fontSize: pxToRem(17.6), marginTop: 0 }}>
          Global Expansion Roadmap
        </h3>
        
        <div style={{ position: 'relative' }}>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            style={{
              position: 'absolute',
              top: pxToRem(35),
              left: '5%',
              right: '5%',
              height: pxToRem(3),
              background: 'linear-gradient(90deg, #4ade80, #60a5fa, #fbbf24, #c084fc)',
              transformOrigin: 'left'
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: pxToRem(8) }}>
            {globalExpansion.map((location, index) => (
              <motion.div
                key={location.region}
                initial={{ opacity: 0, y: pxToRem(20) }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  width: pxToRem(60),
                  height: pxToRem(60),
                  borderRadius: '50%',
                  background: location.status === 'Live' ? '#4ade80' :
                             location.status.includes('2025') ? '#60a5fa' : '#c084fc',
                  margin: `0 auto ${pxToRem(12)}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Globe size={24} style={{ color: '#0f172a' }} />
                </div>
                <div style={{ fontSize: pxToRem(14.4), color: '#e2e8f0', fontWeight: '600' }}>
                  {location.region}
                </div>
                <div style={{
                  fontSize: pxToRem(12),
                  color: location.status === 'Live' ? '#4ade80' : '#60a5fa',
                  marginBottom: pxToRem(4)
                }}>
                  {location.status}
                </div>
                <div style={{ fontSize: pxToRem(11.2), color: '#94a3b8' }}>
                  {location.clients}
                </div>
                <div style={{ fontSize: pxToRem(12.8), color: '#fbbf24', fontWeight: '600' }}>
                  {location.aum}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(236, 72, 153, 0.1))',
          borderRadius: pxToRem(12),
          padding: pxToRem(24),
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: pxToRem(16),
          marginBottom: pxToRem(24)
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Users size={24} style={{ color: '#fbbf24', margin: `0 auto ${pxToRem(8)}` }} />
          <div style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#fbbf24' }}>810K</div>
          <div style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>HNW Individuals in India</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <TrendingUp size={24} style={{ color: '#ec4899', margin: `0 auto ${pxToRem(8)}` }} />
          <div style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#ec4899' }}>16%</div>
          <div style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>Annual Growth Rate</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Building size={24} style={{ color: '#c084fc', margin: `0 auto ${pxToRem(8)}` }} />
          <div style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#c084fc' }}>$5.6T</div>
          <div style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>Total Wealth by 2027</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Shield size={24} style={{ color: '#4ade80', margin: `0 auto ${pxToRem(8)}` }} />
          <div style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#4ade80' }}>1st</div>
          <div style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>Mover Advantage</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        style={{
          textAlign: 'center',
          padding: pxToRem(16),
          background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
          borderRadius: pxToRem(8)
        }}
      >
        <p style={{ fontSize: pxToRem(17.6), color: '#4ade80', margin: 0 }}>
          <strong>GIFT City headquarters</strong> enables us to serve <strong>global clients</strong> with 
          <strong> zero tax leakage</strong> and <strong>seamless cross-border operations</strong>
        </p>
      </motion.div>
    </>
  )

  return (
    <GridLayout
      title="GIFT City: Our Global Gateway"
      subtitle="India's international financial hub as our strategic advantage"
      cards={cards}
      columns={4}
      summary={summary}
    />
  )
}
