import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import ARIAAvatar from '../../components/ARIAAvatar'
import { Brain, Shield, TrendingUp, Globe, FileCheck } from 'lucide-react'

/**
 * SlideMeetARIAV2 - World-Class UI/UX
 * "Your AI Family Office CEO"
 * Layout: Central Hero Avatar with 5 Orbiting Team Cards
 */
const SlideMeetARIAV2 = () => {
  const teams = [
    { icon: Brain, label: 'Investment', detail: 'Global Macro Strategy', color: '#14B8A6', x: -220, y: -100 },
    { icon: Shield, label: 'Risk', detail: 'Real-time Protection', color: '#EF4444', x: 220, y: -100 },
    { icon: TrendingUp, label: 'Tax', detail: 'Daily Harvesting', color: '#FBBF24', x: -220, y: 100 },
    { icon: Globe, label: 'India', detail: 'GIFT City Access', color: '#8B5CF6', x: 220, y: 100 },
    { icon: FileCheck, label: 'Compliance', detail: 'Auto-Regulatory', color: '#3B82F6', x: 0, y: 180 }
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Background Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 2 }}
        >
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            MEET ARIA
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            YOUR AI FAMILY OFFICE CEO
          </p>
        </motion.div>

        {/* Central Composition */}
        <div style={{ position: 'relative', width: '800px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Connector Lines */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
            {teams.map((team, i) => (
              <motion.line
                key={i}
                x1="400"
                y1="250"
                x2={400 + team.x}
                y2={250 + team.y}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
              />
            ))}
          </svg>

          {/* Hero Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            style={{ zIndex: 10 }}
          >
            <div style={{
              padding: '4px',
              background: 'linear-gradient(135deg, #14B8A6, #06B6D4)',
              borderRadius: '50%',
              boxShadow: '0 0 40px rgba(20, 184, 166, 0.4)'
            }}>
              <div style={{
                background: '#0f172a',
                borderRadius: '50%',
                padding: '8px',
                width: '140px',
                height: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ARIAAvatar size="large" variant="gradient" animated={true} showPulse={true} showTitle={false} />
              </div>
            </div>
          </motion.div>

          {/* Orbiting Teams */}
          {teams.map((team, i) => {
            const Icon = team.icon
            return (
              <motion.div
                key={team.label}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: team.x, y: team.y }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.1, type: 'spring', stiffness: 50 }}
                style={{
                  position: 'absolute',
                  zIndex: 5,
                  background: 'rgba(30, 41, 59, 0.6)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(100, 116, 139, 0.3)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '1rem 1.5rem',
                  minWidth: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{
                  padding: '8px',
                  borderRadius: '10px',
                  background: `${team.color}20`,
                  color: team.color
                }}>
                  <Icon size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.9rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>{team.label}</p>
                  <p style={{ fontSize: '0.75rem', color: '#94A3B8', margin: 0 }}>{team.detail}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          style={{
            marginTop: '2rem',
            padding: '1rem 3rem',
            background: 'rgba(15, 23, 42, 0.5)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            gap: '4rem'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#14B8A6', margin: 0 }}>68+</p>
            <p style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '4px 0 0 0' }}>AI Specialists</p>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FBBF24', margin: 0 }}>24/7</p>
            <p style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '4px 0 0 0' }}>Active Management</p>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#8B5CF6', margin: 0 }}>5</p>
            <p style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '4px 0 0 0' }}>Orchestrated Teams</p>
          </div>
        </motion.div>

      </div>
    </AspectFrame>
  )
}

export default SlideMeetARIAV2
