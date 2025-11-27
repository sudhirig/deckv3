import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { Brain, TrendingUp, Globe } from 'lucide-react'

/**
 * SlideThreeAlphaAgentsV2 - World-Class UI/UX
 * "Three Core Products"
 * Layout: 3 Vertical Glass Cards with Metrics
 */
const SlideThreeAlphaAgentsV2 = () => {
  const agents = [
    {
      title: 'RESEARCH',
      icon: Brain,
      metric: '16,000+',
      metricLabel: 'FUNDS ANALYZED',
      desc: 'Deep-dive diligence on every fund globally.',
      color: '#14B8A6'
    },
    {
      title: 'TAX',
      icon: TrendingUp,
      metric: '+1.8%',
      metricLabel: 'DAILY ALPHA',
      desc: 'Real-time harvesting across all asset classes.',
      color: '#FBBF24'
    },
    {
      title: 'INDIA',
      icon: Globe,
      metric: '0%',
      metricLabel: 'TAX VIA GIFT',
      desc: 'Exclusive gateway to the $5T Indian market.',
      color: '#8B5CF6'
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem 4rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(20, 184, 166, 0.1) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1 }}
        >
          <h1 style={{
            fontSize: 'clamp(2.5rem, 4vw, 3rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            THREE ALPHA AGENTS
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8' }}>
            Each product powers a phase of our Wedge & Expand strategy
          </p>
        </motion.div>

        {/* 3-Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2rem',
          flex: 1,
          position: 'relative',
          zIndex: 1
        }}>
          {agents.map((agent, index) => {
            const Icon = agent.icon
            return (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                style={{
                  background: 'rgba(30, 41, 59, 0.6)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: '24px',
                  border: '1px solid rgba(100, 116, 139, 0.3)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top Glow */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '100px',
                  background: `radial-gradient(circle, ${agent.color}40 0%, transparent 70%)`,
                  filter: 'blur(20px)'
                }} />

                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: `${agent.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  border: `1px solid ${agent.color}30`
                }}>
                  <Icon size={32} color={agent.color} />
                </div>

                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#E2E8F0', letterSpacing: '0.1em', marginBottom: '2rem' }}>
                  {agent.title}
                </h3>

                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '2.5rem', fontWeight: '800', color: agent.color, margin: 0 }}>
                    {agent.metric}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '4px 0 0 0' }}>
                    {agent.metricLabel}
                  </p>
                </div>

                <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: '1.6' }}>
                  {agent.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AspectFrame>
  )
}

export default SlideThreeAlphaAgentsV2
