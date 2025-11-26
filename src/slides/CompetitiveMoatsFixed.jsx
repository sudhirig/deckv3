import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { 
  Key, Brain, Handshake, Shield, 
  Lock, Users, Zap, Trophy
} from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

/**
 * CompetitiveMoatsFixed - Castle with three defensive moats visualization
 * Fixed version with inline styles (no Tailwind)
 */
export default function CompetitiveMoatsFixed() {
  const [activeMoat, setActiveMoat] = useState(0)

  useEffect(() => {
    // Cycle through moats
    const interval = setInterval(() => {
      setActiveMoat(prev => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const topMetrics = [
    { icon: Lock, value: '18mo', label: 'Head Start', color: '#f59e0b' },
    { icon: Brain, value: '68+', label: 'AI Agents', color: '#8b5cf6' },
    { icon: Users, value: '1000+', label: 'CPAs', color: '#3b82f6' },
    { icon: Trophy, value: '#1', label: 'India AI WM', color: '#10b981' }
  ]

  const moats = [
    {
      id: 'india',
      title: 'India Gateway',
      subtitle: 'GIFT City Exclusive',
      icon: Key,
      color: '#f59e0b',
      advantages: [
        '18-month exclusive window',
        'Zero tax jurisdiction',
        'Regulatory fast-track',
        'First-mover advantage'
      ],
      value: '$5T market access'
    },
    {
      id: 'ai',
      title: 'AI Orchestra',
      subtitle: 'Proprietary Technology',
      icon: Brain,
      color: '#8b5cf6',
      advantages: [
        '68+ specialized agents',
        'Consensus algorithms',
        'Self-improving system',
        'Patent pending'
      ],
      value: '10,000x faster'
    },
    {
      id: 'distribution',
      title: 'B2B2C Network',
      subtitle: 'Distribution Locked',
      icon: Handshake,
      color: '#3b82f6',
      advantages: [
        '1,000+ CPA partners',
        'Embedded distribution',
        'Zero CAC growth',
        'Network effects'
      ],
      value: '10x growth efficiency'
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Background gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1rem', position: 'relative', zIndex: 1 }}
        >
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '0.5rem' }}>
            <GradientText gradient="from-yellow-400 via-purple-400 to-blue-400">
              Our Defensive Moats
            </GradientText>
          </h1>
          <p style={{ fontSize: '1rem', color: '#94a3b8' }}>
            Three layers of competitive advantage that protect our castle
          </p>
        </motion.div>

        {/* Top Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            marginBottom: '1rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          {topMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                style={{
                  padding: '0.6rem 0.8rem',
                  background: `linear-gradient(135deg, ${metric.color}15, ${metric.color}08)`,
                  border: `1px solid ${metric.color}40`,
                  borderRadius: pxToRem(10),
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <Icon size={18} color={metric.color} />
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: metric.color }}>{metric.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{metric.label}</div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Content - Castle and Moats */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Castle Visualization */}
          <div style={{
            flex: 1,
            position: 'relative',
            background: 'linear-gradient(to bottom, #1e293b, #0f172a)',
            borderRadius: pxToRem(16),
            overflow: 'hidden',
            minHeight: '200px'
          }}>
            <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
              {/* Castle Structure */}
              <g transform="translate(400, 120)">
                {/* Main castle body */}
                <rect x="-80" y="-40" width="160" height="120" fill="#334155" stroke="#475569" strokeWidth="2" />
                
                {/* Castle towers */}
                <rect x="-100" y="-60" width="35" height="140" fill="#334155" stroke="#475569" strokeWidth="2" />
                <rect x="65" y="-60" width="35" height="140" fill="#334155" stroke="#475569" strokeWidth="2" />
                
                {/* Castle battlements */}
                <polygon points="-80,-40 -80,-55 -60,-55 -60,-40 -40,-40 -40,-55 -20,-55 -20,-40 0,-40 0,-55 20,-55 20,-40 40,-40 40,-55 60,-55 60,-40 80,-40 80,-55 80,-40" 
                  fill="#334155" stroke="#475569" strokeWidth="2" />
                
                {/* Castle gate */}
                <rect x="-25" y="30" width="50" height="50" fill="#1e293b" stroke="#475569" strokeWidth="2" rx="25" ry="25" />
                
                {/* ARIA text on castle */}
                <text x="0" y="5" fill="#14b8a6" fontSize="20" textAnchor="middle" fontWeight="bold">
                  ARIA
                </text>
                <text x="0" y="22" fill="#06b6d4" fontSize="10" textAnchor="middle">
                  FORTRESS
                </text>
              </g>

              {/* Three Moats (concentric rings) */}
              {moats.map((moat, index) => {
                const radius = 100 + index * 45
                const isActive = activeMoat === index

                return (
                  <g key={moat.id}>
                    {/* Moat water ring */}
                    <motion.circle
                      cx="400"
                      cy="150"
                      r={radius}
                      fill="none"
                      stroke={moat.color}
                      strokeWidth={isActive ? "25" : "20"}
                      strokeOpacity={isActive ? 0.4 : 0.2}
                      strokeDasharray={isActive ? "8,4" : "0"}
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: isActive ? -12 : 0 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Glow effect for active moat */}
                    {isActive && (
                      <motion.circle
                        cx="400"
                        cy="150"
                        r={radius}
                        fill="none"
                        stroke={moat.color}
                        strokeWidth="2"
                        strokeOpacity="0.8"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </g>
                )
              })}

              {/* Moat Icons on the rings */}
              {moats.map((moat, index) => {
                const angle = -90 + index * 120
                const radius = 100 + index * 45
                const x = 400 + Math.cos(angle * Math.PI / 180) * (radius + 20)
                const y = 150 + Math.sin(angle * Math.PI / 180) * (radius + 20)
                const isActive = activeMoat === index

                return (
                  <motion.g
                    key={`icon-${moat.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <circle cx={x} cy={y} r="18" fill="#0f172a" stroke={moat.color} strokeWidth="2" />
                  </motion.g>
                )
              })}
            </svg>
          </div>

          {/* Moat Details Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {moats.map((moat, index) => {
              const Icon = moat.icon
              const isActive = activeMoat === index

              return (
                <motion.div
                  key={moat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: isActive ? 1.02 : 1
                  }}
                  transition={{ delay: index * 0.15 }}
                  onClick={() => setActiveMoat(index)}
                  style={{
                    background: isActive 
                      ? `linear-gradient(135deg, ${moat.color}20, ${moat.color}10)` 
                      : 'rgba(17, 24, 39, 0.8)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: pxToRem(12),
                    padding: '1rem',
                    border: `2px solid ${isActive ? moat.color : 'rgba(255,255,255,0.1)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: pxToRem(8),
                      background: `${moat.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={18} color={moat.color} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#e2e8f0', margin: 0 }}>{moat.title}</h4>
                      <p style={{ fontSize: '0.7rem', color: '#9ca3af', margin: 0 }}>{moat.subtitle}</p>
                    </div>
                  </div>

                  {/* Advantages */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.75rem' }}>
                    {moat.advantages.map((advantage, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isActive ? 1 : 0.7, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                      >
                        <Shield size={10} color={moat.color} />
                        <span style={{ fontSize: '0.75rem', color: '#d1d5db' }}>{advantage}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Value Proposition */}
                  <div style={{
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: moat.color }}>
                      {moat.value}
                    </div>
                    <div style={{ fontSize: '0.65rem', color: '#6b7280' }}>Competitive edge</div>
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      style={{ position: 'absolute', top: '8px', right: '8px' }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      <Zap size={12} color={moat.color} />
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Central Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1rem',
              background: 'linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
              borderRadius: pxToRem(12),
              border: '1px solid rgba(255,255,255,0.2)',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            <Trophy size={24} color="#fbbf24" />
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0' }}>
                The only wealth platform with all three defensive layers
              </div>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>
                Regulatory moat + Technology moat + Distribution moat = Unassailable position
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AspectFrame>
  )
}
