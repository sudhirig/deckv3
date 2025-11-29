import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { 
  Building2, 
  Users, 
  Briefcase, 
  Target, 
  ArrowRight,
  Rocket,
  Database,
  Globe,
  UserCheck,
  Wallet
} from 'lucide-react'

/**
 * SlideGoToMarketV3 - World-Class GTM Strategy
 * Clear Target + Phase Timeline + Simple Flywheel
 */
const SlideGoToMarketV3 = () => {

  // Land → Expand → Dominate phases
  const phases = [
    {
      phase: 'LAND',
      title: 'India Gateway',
      timeline: 'Year 1',
      product: 'GIFT City AIF',
      clients: '100 clients',
      channels: ['CPAs'],
      markets: ['US', 'India'],
      aum: '$100M',
      color: '#EC4899',
      icon: Rocket
    },
    {
      phase: 'EXPAND',
      title: 'Multi-Channel',
      timeline: 'Year 2',
      product: 'AI Portfolio',
      clients: '1,000 clients',
      channels: ['CPAs', 'Direct', 'Family Offices'],
      markets: ['US', 'India', 'Dubai'],
      aum: '$500M',
      color: '#8B5CF6',
      icon: Database
    },
    {
      phase: 'DOMINATE',
      title: 'Global Scale',
      timeline: 'Year 3+',
      product: 'Full Platform',
      clients: '10,000 clients',
      channels: ['CPAs', 'Direct', 'Family Offices', 'Institutional'],
      markets: ['Global'],
      aum: '$1B+',
      color: '#14B8A6',
      icon: Globe
    }
  ]

  // Target segments
  const targets = [
    { 
      label: 'HNW Individuals', 
      detail: '$1M - $25M net worth',
      icon: Wallet,
      color: '#F59E0B'
    },
    { 
      label: 'Financial Advisors', 
      detail: 'CPAs, RIAs, Wealth Managers',
      icon: UserCheck,
      color: '#10B981'
    }
  ]

  // Flywheel steps
  const flywheel = [
    { name: 'Vora Ventures', color: '#8B5CF6' },
    { name: 'Ascendum KPS', color: '#3B82F6' },
    { name: '1,000+ CPAs', color: '#10B981' },
    { name: '100K HNW Families', color: '#F59E0B' }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #0a0f1b 0%, #0f172a 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 3rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Background Effect */}
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}
        >
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            GO-TO-MARKET STRATEGY
          </h1>
        </motion.div>

        {/* Target Customers - Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          {targets.map((target, i) => {
            const Icon = target.icon
            return (
              <motion.div
                key={target.label}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                style={{
                  background: `linear-gradient(135deg, ${target.color}15, ${target.color}05)`,
                  border: `2px solid ${target.color}40`,
                  borderRadius: '16px',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: `${target.color}20`,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={28} color={target.color} />
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: '700', 
                    color: '#FFFFFF', 
                    margin: '0 0 0.25rem 0' 
                  }}>
                    {target.label}
                  </h3>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: target.color, 
                    margin: 0,
                    fontWeight: '600'
                  }}>
                    {target.detail}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Phase Timeline - Main Focus */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ flex: 1, position: 'relative', zIndex: 5 }}
        >
          <h3 style={{ 
            fontSize: '0.8rem', 
            fontWeight: '700', 
            color: '#64748B', 
            textTransform: 'uppercase', 
            letterSpacing: '0.12em',
            marginBottom: '0.75rem'
          }}>
            Wedge & Expand Strategy
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {phases.map((phase, i) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: `1px solid ${phase.color}30`,
                    borderLeft: `4px solid ${phase.color}`,
                    borderRadius: '12px',
                    padding: '1rem 1.25rem',
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr auto',
                    gap: '1.5rem',
                    alignItems: 'center'
                  }}
                >
                  {/* Phase + Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      background: phase.color,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: '800',
                      color: '#FFF',
                      letterSpacing: '0.08em'
                    }}>
                      {phase.phase}
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: '600' }}>
                      {phase.timeline}
                    </span>
                    <Icon size={20} color={phase.color} />
                    <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF' }}>
                      {phase.title}
                    </span>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      color: phase.color, 
                      background: `${phase.color}15`,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '5px',
                      fontWeight: '600'
                    }}>
                      {phase.product}
                    </span>
                  </div>

                  {/* Markets */}
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.65rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.2rem 0' }}>Markets</p>
                    <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      {phase.markets.map(m => (
                        <span key={m} style={{ 
                          fontSize: '0.75rem', 
                          background: 'rgba(255,255,255,0.08)', 
                          color: '#E2E8F0', 
                          padding: '0.15rem 0.5rem', 
                          borderRadius: '4px',
                          fontWeight: '600'
                        }}>{m}</span>
                      ))}
                    </div>
                  </div>

                  {/* Channels */}
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.65rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.2rem 0' }}>Channels</p>
                    <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      {phase.channels.map(c => (
                        <span key={c} style={{ 
                          fontSize: '0.7rem', 
                          background: `${phase.color}15`, 
                          color: phase.color, 
                          padding: '0.15rem 0.4rem', 
                          borderRadius: '4px',
                          fontWeight: '600'
                        }}>{c}</span>
                      ))}
                    </div>
                  </div>

                  {/* AUM Badge */}
                  <div style={{
                    background: `${phase.color}15`,
                    border: `1px solid ${phase.color}35`,
                    borderRadius: '10px',
                    padding: '0.6rem 1.25rem',
                    textAlign: 'center',
                    minWidth: '100px'
                  }}>
                    <p style={{ fontSize: '1.2rem', fontWeight: '800', color: phase.color, margin: 0 }}>
                      {phase.aum}
                    </p>
                    <p style={{ fontSize: '0.6rem', color: '#64748B', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>AUM</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom: Simple Flywheel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{
            marginTop: '1.25rem',
            padding: '0.85rem 1.5rem',
            background: 'rgba(15, 23, 42, 0.5)',
            border: '1px solid rgba(100, 116, 139, 0.15)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
        >
          <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: '600', marginRight: '0.5rem' }}>
            B2B2C DISTRIBUTION:
          </span>
          {flywheel.map((item, i) => (
            <React.Fragment key={item.name}>
              <span style={{ 
                fontSize: '0.85rem', 
                color: item.color, 
                fontWeight: '700'
              }}>
                {item.name}
              </span>
              {i < flywheel.length - 1 && (
                <ArrowRight size={14} color="#64748B" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideGoToMarketV3
