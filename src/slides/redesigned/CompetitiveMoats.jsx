import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout,
  MetricsBar
} from '../../components/design-system'
import { 
  Castle, Key, Brain, Handshake, Shield, 
  Lock, Globe, Users, Zap, Trophy
} from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * CompetitiveMoats - Castle with three defensive moats visualization
 * Shows: India Gateway exclusive, AI orchestration IP, B2B2C distribution
 */
const CompetitiveMoats = () => {
  const [activeMoat, setActiveMoat] = useState(0)
  const [waterLevel, setWaterLevel] = useState(0)

  useEffect(() => {
    // Animate water level
    const interval = setInterval(() => {
      setWaterLevel(prev => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Cycle through moats
    const interval = setInterval(() => {
      setActiveMoat(prev => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const metrics = [
    { icon: 'Lock', value: '18mo', label: 'Head Start', color: 'yellow' },
    { icon: 'Brain', value: '68+', label: 'AI Agents', color: 'purple' },
    { icon: 'Users', value: '1000+', label: 'CPAs', color: 'blue' },
    { icon: 'Trophy', value: '#1', label: 'India AI WM', color: 'emerald' }
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
    <StandardSlideLayout
      title="Our Defensive Moats"
      subtitle="Three layers of competitive advantage that protect our castle"
      badges={[]}
      metrics={metrics}
      showFooter={true}
    >
      <div className="h-full flex flex-col">
        {/* Castle Visualization */}
        <div className="flex-1 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl" />
          
          {/* Castle SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500">
            {/* Sky gradient */}
            <defs>
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              
              {/* Water gradient */}
              <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.5" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Background */}
            <rect width="800" height="500" fill="url(#skyGradient)" />

            {/* Castle Structure */}
            <g transform="translate(400, 200)">
              {/* Main castle body */}
              <rect x="-100" y="-50" width="200" height="150" fill="#334155" stroke="#475569" strokeWidth="2" />
              
              {/* Castle towers */}
              <rect x="-120" y="-70" width="40" height="170" fill="#334155" stroke="#475569" strokeWidth="2" />
              <rect x="80" y="-70" width="40" height="170" fill="#334155" stroke="#475569" strokeWidth="2" />
              
              {/* Castle top */}
              <polygon points="-100,-50 -100,-80 -70,-80 -70,-50 -40,-50 -40,-80 -10,-80 -10,-50 20,-50 20,-80 50,-80 50,-50 80,-50 80,-80 100,-80 100,-50" 
                fill="#334155" stroke="#475569" strokeWidth="2" />
              
              {/* Castle gate */}
              <rect x="-30" y="30" width="60" height="70" fill="#1e293b" stroke="#475569" strokeWidth="2" />
              
              {/* ARIA text on castle */}
              <text x="0" y="0" fill="#14b8a6" fontSize="24" textAnchor="middle" fontWeight="bold">
                ARIA
              </text>
              <text x="0" y="20" fill="#06b6d4" fontSize="12" textAnchor="middle">
                FORTRESS
              </text>
            </g>

            {/* Three Moats (concentric water rings) */}
            {moats.map((moat, index) => {
              const radius = 150 + index * 60
              const isActive = activeMoat === index

              return (
                <g key={moat.id}>
                  {/* Moat water */}
                  <motion.circle
                    cx="400"
                    cy="200"
                    r={radius}
                    fill="none"
                    stroke={moat.color}
                    strokeWidth={isActive ? "35" : "30"}
                    strokeOpacity={isActive ? 0.4 : 0.2}
                    strokeDasharray={isActive ? "10,5" : "0"}
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: isActive ? -15 : 0 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Animated water effect */}
                  {isActive && (
                    <motion.circle
                      cx="400"
                      cy="200"
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

            {/* Moat labels */}
            {moats.map((moat, index) => {
              const angle = -90 + index * 120
              const radius = 150 + index * 60
              const x = 400 + Math.cos(angle * Math.PI / 180) * (radius + 25)
              const y = 200 + Math.sin(angle * Math.PI / 180) * (radius + 25)
              const Icon = moat.icon

              return (
                <motion.g
                  key={`label-${moat.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeMoat === index ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon background */}
                  <circle cx={x} cy={y} r="25" fill="#0f172a" stroke={moat.color} strokeWidth="2" />
                  
                  {/* Icon */}
                  <foreignObject x={x - 15} y={y - 15} width="30" height="30">
                    <Icon className="text-white" size={30} style={{ color: moat.color }} />
                  </foreignObject>
                </motion.g>
              )
            })}

            {/* Animated particles */}
            {[...Array(10)].map((_, i) => (
              <motion.circle
                key={i}
                r="2"
                fill={moats[activeMoat].color}
                opacity="0.6"
                animate={{
                  cx: [400 + (i - 5) * 50, 400 + (i - 5) * 60],
                  cy: [350, 50],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity
                }}
              />
            ))}
          </svg>

          {/* Moat Details Cards */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="grid grid-cols-3 gap-4">
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
                      scale: isActive ? 1.05 : 1
                    }}
                    transition={{ delay: index * 0.2 }}
                    className={`bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border transition-all ${
                      isActive ? 'border-white/30' : 'border-white/10'
                    }`}
                    onClick={() => setActiveMoat(index)}
                    style={{ 
                      cursor: 'pointer',
                      borderColor: isActive ? moat.color : undefined
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${moat.color}20` }}
                      >
                        <Icon size={20} style={{ color: moat.color }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{moat.title}</h4>
                        <p className="text-xs text-gray-400">{moat.subtitle}</p>
                      </div>
                    </div>

                    {/* Advantages */}
                    <div className="space-y-1 mb-3">
                      {moat.advantages.map((advantage, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: isActive ? 1 : 0.7, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <Shield size={10} style={{ color: moat.color }} />
                          <span className="text-xs text-gray-300">{advantage}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Value Proposition */}
                    <motion.div
                      className="pt-3 border-t border-white/10"
                      animate={{ opacity: isActive ? 1 : 0.7 }}
                    >
                      <div className="text-lg font-bold" style={{ color: moat.color }}>
                        {moat.value}
                      </div>
                      <div className="text-xs text-gray-500">Competitive edge</div>
                    </motion.div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute top-2 right-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      >
                        <Zap size={12} style={{ color: moat.color }} />
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
              transition={{ delay: 1 }}
              className="mt-4 p-3 bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-blue-500/10 rounded-xl border border-white/20 text-center"
            >
              <Trophy className="mx-auto mb-2 text-yellow-400" size={24} />
              <div className="text-sm font-semibold text-white">
                The only wealth platform with all three defensive layers
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Regulatory moat + Technology moat + Distribution moat = Unassailable position
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </StandardSlideLayout>
  )
}

export default CompetitiveMoats
