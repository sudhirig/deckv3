import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Building2, Globe, Users, DollarSign, Award, Network, Briefcase } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

/**
 * VoraVenturesFixed - Full-screen layout
 */
export default function VoraVenturesFixed() {
  const voraStrengths = [
    { icon: Building2, title: 'GIFT City Pioneer', value: '15+ Years', detail: 'First mover with unmatched regulatory relationships', color: '#8b5cf6' },
    { icon: DollarSign, title: 'AUM Managed', value: '$2B+', detail: 'Proven track record with institutional capital', color: '#3b82f6' },
    { icon: Globe, title: 'Global Network', value: '3 Continents', detail: 'India, USA, and Singapore operations', color: '#10b981' },
    { icon: Users, title: 'US Investors', value: '100+ LPs', detail: 'Direct access to US family offices', color: '#f59e0b' }
  ]

  const strategicValue = [
    { label: 'Regulatory Expertise', detail: 'Navigate India\'s complex financial regulations' },
    { label: 'Distribution Power', detail: 'Access to 1000+ HNW families in India' },
    { label: 'Tech DNA', detail: 'Portfolio includes 25+ fintech companies' },
    { label: 'Exit Pathways', detail: 'Strategic buyers in our network' }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        padding: '2rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1rem', position: 'relative', zIndex: 1 }}
        >
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '0.5rem' }}>
            <GradientText gradient="from-purple-400 to-blue-400">
              The Vora Advantage
            </GradientText>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            Strategic Capital + Deep Expertise + Unmatched Access
          </p>
        </motion.div>

        {/* Hero Row: Logo + Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '1.25rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div style={{
            width: '140px',
            height: '80px',
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            borderRadius: pxToRem(12),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)',
            flexShrink: 0
          }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>VORA</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.9 }}>VENTURES</div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.2rem', color: '#e2e8f0', marginBottom: '0.3rem' }}>
              More Than Capital: Your Gateway to India & US Markets
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8', fontStyle: 'italic', margin: 0 }}>
              "When Vora backs a company, they bring the full weight of their ecosystem"
            </p>
          </div>
        </motion.div>

        {/* Strength Metrics - 4 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            marginBottom: '1.25rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          {voraStrengths.map((strength, index) => {
            const Icon = strength.icon
            return (
              <motion.div
                key={strength.title}
                whileHover={{ scale: 1.03 }}
                style={{
                  padding: '1.25rem 1rem',
                  background: `linear-gradient(135deg, ${strength.color}15, ${strength.color}05)`,
                  border: `2px solid ${strength.color}40`,
                  borderRadius: pxToRem(12),
                  textAlign: 'center'
                }}
              >
                <Icon size={28} color={strength.color} style={{ marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: strength.color }}>{strength.value}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0', marginBottom: '0.25rem' }}>{strength.title}</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.3 }}>{strength.detail}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Strategic Value + Network - 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '1.25rem',
            flex: 1,
            position: 'relative',
            zIndex: 1
          }}
        >
          {/* Strategic Value */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(139, 92, 246, 0.05))',
            borderRadius: pxToRem(14),
            padding: '1.25rem',
            border: '1px solid rgba(20, 184, 166, 0.3)'
          }}>
            <h3 style={{ fontSize: '1.1rem', color: '#14b8a6', marginBottom: '1rem', fontWeight: 'bold' }}>
              Strategic Value Beyond Capital
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {strategicValue.map((item, index) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <Award size={18} color="#14b8a6" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.95rem', color: '#e2e8f0', fontWeight: '600' }}>{item.label}</div>
                    <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Network Effect */}
          <div style={{
            background: 'rgba(17, 24, 39, 0.6)',
            borderRadius: pxToRem(14),
            padding: '1.25rem',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h3 style={{ fontSize: '1.1rem', color: '#a78bfa', marginBottom: '1rem', fontWeight: 'bold', textAlign: 'center' }}>
              Network Effect
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <Network size={28} color="#8b5cf6" />
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.3rem' }}>India</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#8b5cf6' }}>1000+ HNWs</div>
              </div>
              <div style={{ fontSize: '1.5rem', color: '#14b8a6' }}>↔</div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <Briefcase size={28} color="#14b8a6" />
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.3rem' }}>ARIA</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#14b8a6' }}>AI + Trust</div>
              </div>
              <div style={{ fontSize: '1.5rem', color: '#14b8a6' }}>↔</div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <Network size={28} color="#f59e0b" />
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.3rem' }}>US</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#f59e0b' }}>100+ LPs</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '1rem',
            padding: '0.85rem 1.5rem',
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.12), rgba(251, 191, 36, 0.05))',
            borderRadius: pxToRem(12),
            border: '1px solid rgba(251, 191, 36, 0.3)',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}
        >
          <p style={{ fontSize: '1.1rem', color: '#fbbf24', fontWeight: '600', margin: 0 }}>
            "Vora's backing gives us unfair advantages: Regulatory fast-track, Day-1 distribution, and US market access"
          </p>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
