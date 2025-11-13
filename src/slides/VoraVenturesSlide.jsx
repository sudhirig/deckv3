import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Building2, Globe, Users, TrendingUp, Briefcase, Award, DollarSign, Network } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function VoraVenturesSlide() {
  const title = (
    <GradientText gradient="from-purple-400 to-blue-400">
      The Vora Advantage: Strategic Capital + Deep Expertise
    </GradientText>
  )

  const voraStrengths = [
    {
      icon: Building2,
      title: 'GIFT City Pioneer',
      value: '15+ Years',
      detail: 'First mover in GIFT City with unmatched regulatory relationships',
      color: '#8b5cf6'
    },
    {
      icon: DollarSign,
      title: 'AUM Under Management',
      value: '$2B+',
      detail: 'Proven track record managing institutional capital',
      color: '#3b82f6'
    },
    {
      icon: Globe,
      title: 'Global Network',
      value: '3 Continents',
      detail: 'Operations in India, USA, and Singapore',
      color: '#10b981'
    },
    {
      icon: Users,
      title: 'US Investor Network',
      value: '100+ LPs',
      detail: 'Direct access to US family offices and institutions',
      color: '#f59e0b'
    }
  ]

  const strategicValue = [
    { label: 'Regulatory Expertise', detail: 'Navigate India\'s complex financial regulations' },
    { label: 'Distribution Power', detail: 'Access to 1000+ HNW families in India' },
    { label: 'Tech DNA', detail: 'Portfolio includes 25+ fintech companies' },
    { label: 'Exit Pathways', detail: 'Strategic buyers in our network' }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '0.5rem' }}>
      {/* Hero Section with Photo Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          marginBottom: '0.5rem'
        }}
      >
        {/* Vora Group Visual/Logo Placeholder */}
        <div style={{
          width: '180px',
          height: '100px',
          background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
          borderRadius: pxToRem(12),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)'
        }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>VORA</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>VENTURES</div>
          </div>
        </div>

        {/* Tagline */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.3rem', color: '#e2e8f0', marginBottom: '0.5rem' }}>
            More Than Capital: Your Gateway to India & US Markets
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8', fontStyle: 'italic' }}>
            "When Vora backs a company, they bring the full weight of their ecosystem - 
            from regulatory expertise to customer introductions"
          </p>
        </div>
      </motion.div>

      {/* Strength Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem'
      }}>
        {voraStrengths.map((strength, index) => {
          const Icon = strength.icon
          return (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              style={{
                padding: '1rem',
                background: `linear-gradient(135deg, ${strength.color}15, ${strength.color}05)`,
                border: `2px solid ${strength.color}30`,
                borderRadius: pxToRem(10),
                textAlign: 'center'
              }}
            >
              <Icon size={28} color={strength.color} style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: strength.color }}>
                {strength.value}
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '0.25rem' }}>
                {strength.title}
              </div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', lineHeight: '1.3' }}>
                {strength.detail}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Strategic Value Props */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(139, 92, 246, 0.05))',
          borderRadius: pxToRem(12),
          padding: '1.25rem',
          border: '1px solid rgba(20, 184, 166, 0.3)'
        }}
      >
        <h3 style={{ 
          fontSize: '1.1rem', 
          color: '#14b8a6', 
          marginBottom: '0.75rem',
          fontWeight: 'bold'
        }}>
          Strategic Value Beyond Capital
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.75rem'
        }}>
          {strategicValue.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem'
              }}
            >
              <Award size={16} color="#14b8a6" style={{ marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 'bold' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  {item.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Network Effect Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3 }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent)',
          borderRadius: pxToRem(8)
        }}
      >
        <div style={{ textAlign: 'center', flex: 1 }}>
          <Network size={24} color="#8b5cf6" />
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>India Network</div>
          <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#8b5cf6' }}>1000+ HNWs</div>
        </div>
        <div style={{ fontSize: '1.5rem', color: '#14b8a6' }}>↔</div>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <Briefcase size={24} color="#3b82f6" />
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>ARIA Platform</div>
          <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#14b8a6' }}>AI + Trust</div>
        </div>
        <div style={{ fontSize: '1.5rem', color: '#14b8a6' }}>↔</div>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <Network size={24} color="#f59e0b" />
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>US Network</div>
          <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#f59e0b' }}>100+ LPs</div>
        </div>
      </motion.div>

      {/* Right to Win Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          textAlign: 'center',
          padding: '0.75rem',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05))',
          borderRadius: pxToRem(8),
          border: '1px solid rgba(251, 191, 36, 0.3)'
        }}
      >
        <p style={{ fontSize: '1.1rem', color: '#fbbf24', fontWeight: 'bold' }}>
          "Vora's backing gives us unfair advantages: Regulatory fast-track, Day-1 distribution, and US market access"
        </p>
      </motion.div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
