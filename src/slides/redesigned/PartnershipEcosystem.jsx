import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout,
  MetricsBar
} from '../../components/design-system'
import { 
  Building2, Briefcase, Globe, Cloud, Brain, 
  Database, Users, Handshake, Network, Sparkles
} from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * PartnershipEcosystem - Network hub visualization
 * Merges: PartnershipStrategy1 + 2 + StrategicPartnershipsSlide
 * Shows: Vora, Ascendum, Zerodha, AWS, OpenAI, Bloomberg etc.
 */
const PartnershipEcosystem = () => {
  const [activeConnection, setActiveConnection] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection(Math.floor(Math.random() * 6))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const metrics = [
    { icon: 'Building2', value: '15+', label: 'Strategic Partners', color: 'purple' },
    { icon: 'Users', value: '1,000+', label: 'CPA Network', color: 'blue' },
    { icon: 'Globe', value: '7', label: 'Countries', color: 'teal' },
    { icon: 'Handshake', value: '₹100Cr+', label: 'Partner Value', color: 'emerald' }
  ]

  const partners = [
    {
      name: 'Vora Ventures',
      category: 'Strategic Investor',
      value: 'GIFT City Access',
      description: 'Exclusive gateway to $5T India market',
      icon: Building2,
      color: '#f59e0b',
      position: { x: 50, y: 30 },
      size: 'large'
    },
    {
      name: 'Ascendum',
      category: 'Distribution',
      value: '1,000 CPAs',
      description: 'B2B2C distribution network',
      icon: Briefcase,
      color: '#3b82f6',
      position: { x: 85, y: 45 },
      size: 'large'
    },
    {
      name: 'Zerodha',
      category: 'Trading Partner',
      value: 'Direct API',
      description: 'Seamless trading integration',
      icon: TrendingUp,
      color: '#10b981',
      position: { x: 80, y: 75 },
      size: 'medium'
    },
    {
      name: 'AWS',
      category: 'Infrastructure',
      value: 'Global Scale',
      description: 'Cloud infrastructure partner',
      icon: Cloud,
      color: '#ff9900',
      position: { x: 15, y: 45 },
      size: 'medium'
    },
    {
      name: 'OpenAI',
      category: 'AI Partner',
      value: 'GPT-4 Access',
      description: 'Advanced AI models',
      icon: Brain,
      color: '#8b5cf6',
      position: { x: 20, y: 75 },
      size: 'medium'
    },
    {
      name: 'Bloomberg',
      category: 'Data Provider',
      value: 'Market Data',
      description: 'Real-time financial data',
      icon: Database,
      color: '#ef4444',
      position: { x: 50, y: 85 },
      size: 'small'
    }
  ]

  const connections = [
    { from: 'center', to: 0, type: 'strategic' },
    { from: 'center', to: 1, type: 'distribution' },
    { from: 'center', to: 2, type: 'integration' },
    { from: 'center', to: 3, type: 'infrastructure' },
    { from: 'center', to: 4, type: 'technology' },
    { from: 'center', to: 5, type: 'data' },
    { from: 0, to: 1, type: 'synergy' },
    { from: 2, to: 5, type: 'data-flow' }
  ]

  return (
    <StandardSlideLayout
      title="Partnership Ecosystem"
      subtitle="Strategic alliances creating an unbreakable network effect"
      badges={[]}
      metrics={metrics}
      showFooter={true}
    >
      <div className="h-full flex flex-col">
        {/* Network Visualization */}
        <div className="flex-1 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 rounded-2xl" />
          
          {/* Network SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <defs>
              {/* Gradient definitions */}
              <radialGradient id="centerGradient">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
              </radialGradient>
              
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              {/* Connection gradients */}
              {partners.map((partner, i) => (
                <linearGradient key={`gradient-${i}`} id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor={partner.color} stopOpacity="0.8" />
                </linearGradient>
              ))}
            </defs>

            {/* Connection lines */}
            {connections.map((conn, i) => {
              const isActive = activeConnection === i
              let x1, y1, x2, y2
              
              if (conn.from === 'center') {
                x1 = 50
                y1 = 50
                x2 = partners[conn.to].position.x
                y2 = partners[conn.to].position.y
              } else {
                x1 = partners[conn.from].position.x
                y1 = partners[conn.from].position.y
                x2 = partners[conn.to].position.x
                y2 = partners[conn.to].position.y
              }

              return (
                <g key={`conn-${i}`}>
                  <motion.line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={conn.from === 'center' ? `url(#gradient-${conn.to})` : '#475569'}
                    strokeWidth={isActive ? "2" : "1"}
                    strokeOpacity={isActive ? 1 : 0.3}
                    strokeDasharray={conn.type === 'synergy' || conn.type === 'data-flow' ? "3,3" : "0"}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  >
                    {conn.type === 'synergy' || conn.type === 'data-flow' && (
                      <animate
                        attributeName="stroke-dashoffset"
                        values="6;0"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    )}
                  </motion.line>

                  {/* Animated particles along connections */}
                  {isActive && (
                    <motion.circle
                      r="2"
                      fill={partners[conn.to]?.color || '#14b8a6'}
                      initial={{ 
                        cx: x1,
                        cy: y1
                      }}
                      animate={{ 
                        cx: [x1, x2, x1],
                        cy: [y1, y2, y1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />
                  )}
                </g>
              )
            })}

            {/* Central ARIA Hub */}
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              {/* Outer ring */}
              <motion.circle
                cx="50"
                cy="50"
                r="12"
                fill="none"
                stroke="#14b8a6"
                strokeWidth="1"
                strokeOpacity="0.5"
                animate={{ r: [12, 14, 12] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Main circle */}
              <circle cx="50" cy="50" r="10" fill="url(#centerGradient)" filter="url(#glow)" />
              
              {/* ARIA text */}
              <text x="50" y="48" fill="white" fontSize="4" textAnchor="middle" fontWeight="bold">
                ARIA
              </text>
              <text x="50" y="52" fill="white" fontSize="2" textAnchor="middle">
                ECOSYSTEM
              </text>
              <text x="50" y="55" fill="#94a3b8" fontSize="1.5" textAnchor="middle">
                HUB
              </text>
            </motion.g>

            {/* Partner Nodes */}
            {partners.map((partner, i) => {
              const isActive = activeConnection === connections.findIndex(c => c.to === i)
              const radius = partner.size === 'large' ? 8 : partner.size === 'medium' ? 6 : 4

              return (
                <motion.g
                  key={partner.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  onMouseEnter={() => setActiveConnection(connections.findIndex(c => c.to === i))}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Node background */}
                  <circle
                    cx={partner.position.x}
                    cy={partner.position.y}
                    r={radius}
                    fill="#0f172a"
                    stroke={partner.color}
                    strokeWidth={isActive ? "2" : "1"}
                  />
                  
                  {/* Inner colored circle */}
                  <circle
                    cx={partner.position.x}
                    cy={partner.position.y}
                    r={radius - 1}
                    fill={partner.color}
                    fillOpacity="0.3"
                  />

                  {/* Pulse effect when active */}
                  {isActive && (
                    <motion.circle
                      cx={partner.position.x}
                      cy={partner.position.y}
                      r={radius}
                      fill="none"
                      stroke={partner.color}
                      strokeWidth="1"
                      animate={{
                        r: [radius, radius + 3, radius],
                        opacity: [1, 0, 1]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}

                  {/* Partner label */}
                  <text
                    x={partner.position.x}
                    y={partner.position.y - radius - 2}
                    fill="white"
                    fontSize="2"
                    textAnchor="middle"
                    fontWeight={isActive ? "bold" : "normal"}
                  >
                    {partner.name}
                  </text>
                </motion.g>
              )
            })}
          </svg>

          {/* Partner Details Cards */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="grid grid-cols-3 gap-4">
              {partners.slice(0, 3).map((partner, i) => {
                const Icon = partner.icon
                const isHighlighted = activeConnection === connections.findIndex(c => c.to === i)

                return (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: isHighlighted ? 1.02 : 1
                    }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className={`bg-gray-900/80 backdrop-blur-sm rounded-xl p-3 border transition-all ${
                      isHighlighted ? 'border-white/30' : 'border-white/10'
                    }`}
                    style={{ borderColor: isHighlighted ? partner.color : undefined }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${partner.color}20` }}
                      >
                        <Icon size={16} style={{ color: partner.color }} />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xs font-bold text-white">{partner.name}</h5>
                        <p className="text-xs text-gray-500">{partner.category}</p>
                      </div>
                    </div>
                    
                    <div className="text-sm font-semibold mb-1" style={{ color: partner.color }}>
                      {partner.value}
                    </div>
                    <div className="text-xs text-gray-400">
                      {partner.description}
                    </div>

                    {/* Active indicator */}
                    {isHighlighted && (
                      <motion.div
                        className="mt-2 h-0.5 bg-gradient-to-r"
                        style={{ 
                          backgroundImage: `linear-gradient(to right, transparent, ${partner.color}, transparent)` 
                        }}
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Network Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-4 p-3 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 rounded-xl border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Network className="text-purple-400" size={20} />
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Network Effect Multiplier
                    </div>
                    <div className="text-xs text-gray-400">
                      Each partnership amplifies our reach exponentially
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-purple-400">10x</div>
                    <div className="text-xs text-gray-500">Distribution</div>
                  </div>
                  <div className="text-gray-600">×</div>
                  <div>
                    <div className="text-lg font-bold text-blue-400">5x</div>
                    <div className="text-xs text-gray-500">Technology</div>
                  </div>
                  <div className="text-gray-600">=</div>
                  <div>
                    <div className="text-lg font-bold text-teal-400">50x</div>
                    <div className="text-xs text-gray-500">Impact</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </StandardSlideLayout>
  )
}

export default PartnershipEcosystem
