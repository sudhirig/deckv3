import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { Target, Database, Globe } from 'lucide-react'

/**
 * SlideWedgeExpandV2 - World-Class UI/UX
 * "The Master Plan"
 * Layout: 3-Step Chevron/Staircase Process
 */
const SlideWedgeExpandV2 = () => {
  const steps = [
    {
      phase: 'PHASE 1',
      title: 'LAND',
      subtitle: 'Product: India Gateway Fund',
      icon: Target,
      desc: 'Capture HNWIs via exclusive India GIFT City access.',
      metric: '100 Clients',
      color: '#EC4899'
    },
    {
      phase: 'PHASE 2',
      title: 'EXPAND',
      subtitle: 'Product: ARIA Data Engine',
      icon: Database,
      desc: 'Ingest all portfolio data via AI Data Engine.',
      metric: '500 Clients',
      color: '#8B5CF6'
    },
    {
      phase: 'PHASE 3',
      title: 'DOMINATE',
      subtitle: 'Product: Global AI Advisor',
      icon: Globe,
      desc: 'Cross-sell global assets via Alpaca/IBKR.',
      metric: 'Global Scale',
      color: '#14B8A6'
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
        {/* Background Graphic */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 0% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
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
            WEDGE & EXPAND STRATEGY
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8' }}>
            From niche access to global dominance
          </p>
        </motion.div>

        {/* Steps Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2rem',
          flex: 1,
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Connection Line Background */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'rgba(255,255,255,0.1)',
            zIndex: 0
          }} />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2 }}
                style={{
                  background: 'rgba(30, 41, 59, 0.6)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: `1px solid ${step.color}40`,
                  borderTop: `1px solid ${step.color}80`,
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  height: '100%',
                  justifyContent: 'space-between'
                }}
              >
                {/* Phase Label */}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '2rem',
                  background: step.color,
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.7rem',
                  fontWeight: '800',
                  color: '#FFFFFF',
                  letterSpacing: '0.1em'
                }}>
                  {step.phase}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${step.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <Icon size={24} color={step.color} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: step.color, fontWeight: '600', margin: '4px 0 0 0' }}>
                    {step.subtitle}
                  </p>
                </div>

                <p style={{ fontSize: '0.95rem', color: '#94A3B8', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {step.desc}
                </p>

                <div style={{
                  padding: '0.75rem',
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>
                    {step.metric}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AspectFrame>
  )
}

export default SlideWedgeExpandV2
