import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { 
  ZerodhaLogo, 
  SparkCapitalLogo, 
  AmbitCapitalLogo, 
  AscendumLogo, 
  ShareDealLogo, 
  MahaREITLogo,
  VoraVenturesLogo,
  PartnerLogoCard 
} from '../components/PartnerLogos'
import { Building2, TrendingUp, Users, Briefcase, Shield, CheckCircle2 } from 'lucide-react'
import './SlideStyles.css'

export default function StrategicPartnershipsSlideV2() {
  const partnerCategories = [
    {
      title: 'GOVERNMENT MANDATE',
      color: '#EF4444',
      bgColor: 'rgba(239, 68, 68, 0.08)',
      borderColor: 'rgba(239, 68, 68, 0.25)',
      icon: Building2,
      partners: [
        { logo: <MahaREITLogo size={130} />, name: 'MahaREIT', desc: 'Exclusive GIFT City mandate' }
      ],
      metric: { value: '₹500Cr+', label: 'Sovereign AUM' }
    },
    {
      title: 'STRATEGIC INVESTOR',
      color: '#FBBF24',
      bgColor: 'rgba(251, 191, 36, 0.08)',
      borderColor: 'rgba(251, 191, 36, 0.25)',
      icon: Shield,
      partners: [
        { logo: <VoraVenturesLogo size={120} />, name: 'Vora Ventures', desc: 'Lead investor & strategic partner' }
      ],
      metric: { value: '100K+', label: 'Client Access' }
    },
    {
      title: 'DISTRIBUTION PARTNERS',
      color: '#10B981',
      bgColor: 'rgba(16, 185, 129, 0.08)',
      borderColor: 'rgba(16, 185, 129, 0.25)',
      icon: TrendingUp,
      partners: [
        { logo: <SparkCapitalLogo size={130} />, name: 'Spark Capital', desc: 'Premier wealth advisor' },
        { logo: <AmbitCapitalLogo size={130} />, name: 'Ambit Capital', desc: 'Institutional powerhouse' }
      ],
      metric: { value: '50K+', label: 'HNW Clients' }
    },
    {
      title: 'WEALTH MANAGEMENT',
      color: '#8B5CF6',
      bgColor: 'rgba(139, 92, 246, 0.08)',
      borderColor: 'rgba(139, 92, 246, 0.25)',
      icon: Briefcase,
      partners: [
        { logo: <AscendumLogo size={120} />, name: 'Ascendum KPS', desc: 'B2B2C distribution' },
        { logo: <ShareDealLogo size={110} />, name: 'Shakedeal', desc: '$50M+ topline' }
      ],
      metric: { value: '1,000+', label: 'CPAs Ready' }
    },
    {
      title: 'BROKER INTEGRATION',
      color: '#3B82F6',
      bgColor: 'rgba(59, 130, 246, 0.08)',
      borderColor: 'rgba(59, 130, 246, 0.25)',
      icon: Users,
      partners: [
        { logo: <ZerodhaLogo size={100} />, name: 'Zerodha', desc: 'India\'s #1 broker' }
      ],
      metric: { value: '11ms', label: 'Execution' }
    }
  ]

  const impactMetrics = [
    { value: '₹850Cr', label: 'Partner AUM', color: '#14B8A6' },
    { value: '150K+', label: 'Client Reach', color: '#8B5CF6' },
    { value: '5', label: 'Strategic Deals', color: '#F59E0B' },
    { value: '1', label: 'Govt Mandate', color: '#EF4444' }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 2rem'
      }}>
        {/* Background effects */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          background: 'radial-gradient(circle at 20% 30%, rgba(20, 184, 166, 0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1), transparent 40%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1rem', zIndex: 10 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(20, 184, 166, 0.15)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '20px',
            padding: '0.35rem 1rem',
            marginBottom: '0.75rem'
          }}>
            <CheckCircle2 size={14} color="#14B8A6" />
            <span style={{ color: '#14B8A6', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.05em' }}>
              VALIDATED BY INDUSTRY LEADERS
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #14B8A6, #06B6D4, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.25rem'
          }}>
            Strategic Partnerships
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
            World-class partners validating our vision and accelerating market penetration
          </p>
        </motion.div>

        {/* Main Partner Grid - Bento Box Style */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '0.75rem',
          zIndex: 10
        }}>
          {partnerCategories.map((category, catIndex) => {
            const Icon = category.icon
            const isLarge = category.partners.length === 2
            // Custom grid spans for bento layout
            const gridSpans = [
              { col: 'span 3', row: 'span 1' },  // MahaREIT
              { col: 'span 3', row: 'span 1' },  // Vora Ventures
              { col: 'span 3', row: 'span 2' },  // Spark + Ambit (large)
              { col: 'span 3', row: 'span 2' },  // Ascendum + Shakedeal (large)
              { col: 'span 6', row: 'span 1' }   // Zerodha (wide)
            ]
            const span = gridSpans[catIndex] || { col: 'span 3', row: 'span 1' }
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + catIndex * 0.1 }}
                style={{
                  gridColumn: span.col,
                  gridRow: span.row,
                  background: category.bgColor,
                  border: `1px solid ${category.borderColor}`,
                  borderRadius: '12px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Category Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    background: `${category.color}20`,
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={14} color={category.color} />
                  </div>
                  <span style={{
                    fontSize: '0.6rem',
                    fontWeight: '700',
                    color: category.color,
                    letterSpacing: '0.05em'
                  }}>
                    {category.title}
                  </span>
                </div>

                {/* Partner Logos */}
                <div style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem'
                }}>
                  {category.partners.map((partner, pIndex) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + catIndex * 0.1 + pIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '0.5rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '8px',
                        width: '100%'
                      }}
                    >
                      {partner.logo}
                      <span style={{
                        fontSize: '0.55rem',
                        color: '#64748b',
                        marginTop: '0.25rem',
                        textAlign: 'center'
                      }}>
                        {partner.desc}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Metric Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + catIndex * 0.1 }}
                  style={{
                    marginTop: 'auto',
                    padding: '0.4rem 0.6rem',
                    background: `${category.color}15`,
                    borderRadius: '6px',
                    borderLeft: `3px solid ${category.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '0.9rem', fontWeight: '700', color: category.color }}>
                    {category.metric.value}
                  </span>
                  <span style={{ fontSize: '0.55rem', color: '#94a3b8' }}>
                    {category.metric.label}
                  </span>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Impact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1.5rem',
            background: 'linear-gradient(90deg, rgba(20, 184, 166, 0.1), rgba(139, 92, 246, 0.1), rgba(20, 184, 166, 0.1))',
            borderRadius: '12px',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            zIndex: 10
          }}
        >
          <div style={{ display: 'flex', gap: '2rem' }}>
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontSize: '1.25rem', fontWeight: '800', color: metric.color }}>
                  {metric.value}
                </div>
                <div style={{ fontSize: '0.6rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            style={{
              padding: '0.5rem 1rem',
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(139, 92, 246, 0.2))',
              borderRadius: '8px',
              border: '1px solid rgba(20, 184, 166, 0.3)'
            }}
          >
            <span style={{ fontSize: '0.75rem', color: '#5eead4', fontWeight: '600' }}>
              ✓ When industry leaders choose ARIA, the market follows
            </span>
          </motion.div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
