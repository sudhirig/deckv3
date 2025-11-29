import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { 
  Gem, 
  Globe, 
  Rocket, 
  Building2, 
  BarChart3, 
  Code2 
} from 'lucide-react'

/**
 * SlideWhoItsFor - Target Personas for ARIA
 * High-impact, full-screen, world-class design
 */
const SlideWhoItsFor = () => {
  const personas = [
    {
      icon: Gem,
      title: 'High Net Worth Individuals',
      subtitle: '$1M – $50M+',
      bullets: ['68+ AI agents working 24/7', 'Voice-first trading', 'Automated tax harvesting'],
      highlight: '$18K+ saved/yr',
      color: '#14B8A6'
    },
    {
      icon: Globe,
      title: 'Non-Resident Indians',
      subtitle: 'US • UK • UAE',
      bullets: ['Access India\'s $5T market', 'GIFT City tax efficiency', 'USD-denominated investing'],
      highlight: '0% LTCG',
      color: '#8B5CF6'
    },
    {
      icon: Rocket,
      title: 'Founders & Entrepreneurs',
      subtitle: 'Post-exit wealth',
      bullets: ['PE/VC fund access', 'Real estate & credit funds', 'Pre-IPO deal flow'],
      highlight: '15–40% IRR',
      color: '#F59E0B'
    },
    {
      icon: BarChart3,
      title: 'CPAs & Advisors',
      subtitle: 'B2B partners',
      bullets: ['White-label AI platform', 'Client retention tools', 'New revenue streams'],
      highlight: '3x AUM',
      color: '#3B82F6'
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1a 0%, #0f172a 50%, #1a1f2e 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2.5rem 3rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1.75rem' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '20px',
            padding: '0.35rem 1rem',
            marginBottom: '0.75rem'
          }}>
            <span style={{ color: '#F59E0B', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.05em' }}>
              THE EMILLI OPPORTUNITY
            </span>
          </div>
          <h1 style={{
            fontSize: '2.75rem',
            fontWeight: '800',
            color: '#FFFFFF',
            margin: '0 0 0.5rem 0',
            letterSpacing: '-0.03em'
          }}>
            Who It's For
          </h1>
          <p style={{ 
            fontSize: '1.15rem', 
            color: '#94A3B8', 
            maxWidth: '850px',
            margin: '0 auto'
          }}>
            The largest concentration of stranded wealth — <span style={{ color: '#14B8A6', fontWeight: '600' }}>$107T</span> lacking professional-grade advisory
          </p>
        </motion.div>

        {/* 4 Cards - Full Width */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          flex: 1,
          width: '100%'
        }}>
          {personas.map((persona, index) => {
            const IconComponent = persona.icon
            return (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + index * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                background: `linear-gradient(180deg, ${persona.color}12 0%, rgba(15,23,42,0.9) 100%)`,
                borderRadius: '20px',
                padding: '2rem 1.25rem',
                border: `1px solid ${persona.color}35`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Glow effect */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '150%',
                height: '100%',
                background: `radial-gradient(ellipse at center, ${persona.color}15 0%, transparent 70%)`,
                pointerEvents: 'none'
              }} />

              {/* Icon */}
              <div style={{ 
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: `${persona.color}20`,
                border: `1px solid ${persona.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                position: 'relative',
                zIndex: 1
              }}>
                <IconComponent size={32} color={persona.color} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 style={{ 
                fontSize: '1.35rem', 
                fontWeight: '700', 
                color: '#FFFFFF',
                margin: 0,
                position: 'relative',
                zIndex: 1,
                lineHeight: 1.2
              }}>
                {persona.title}
              </h3>

              {/* Subtitle */}
              <p style={{ 
                fontSize: '1rem', 
                color: persona.color,
                margin: '0.25rem 0 1rem 0',
                position: 'relative',
                zIndex: 1,
                fontWeight: '600'
              }}>
                {persona.subtitle}
              </p>

              {/* Bullet Points */}
              <div style={{ 
                position: 'relative',
                zIndex: 1,
                flex: 1,
                width: '100%',
                textAlign: 'left',
                paddingLeft: '0.5rem'
              }}>
                {persona.bullets.map((bullet, i) => (
                  <div key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.6rem',
                    marginBottom: '0.6rem'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: persona.color,
                      flexShrink: 0
                    }} />
                    <span style={{ 
                      fontSize: '0.95rem', 
                      color: '#E2E8F0',
                      lineHeight: 1.3
                    }}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Highlight Stat */}
              <div style={{
                background: `${persona.color}25`,
                padding: '0.6rem 1.25rem',
                borderRadius: '24px',
                border: `1px solid ${persona.color}50`,
                position: 'relative',
                zIndex: 1,
                marginTop: '0.5rem'
              }}>
                <span style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '700', 
                  color: persona.color 
                }}>
                  {persona.highlight}
                </span>
              </div>
            </motion.div>
          )})}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6rem'
          }}
        >
          {[
            { value: '7.9M', label: 'Target Individuals', color: '#14B8A6' },
            { value: '$107T', label: 'Total Wealth', color: '#8B5CF6' },
            { value: '87%', label: 'Underserved', color: '#F59E0B' }
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p style={{ 
                fontSize: '2.25rem', 
                fontWeight: '800', 
                color: stat.color, 
                margin: 0,
                lineHeight: 1
              }}>
                {stat.value}
              </p>
              <p style={{ 
                fontSize: '0.75rem', 
                color: '#64748B', 
                margin: '0.35rem 0 0 0',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: '500'
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideWhoItsFor
