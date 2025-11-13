import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout,
  MetricsBar,
  FeatureGrid
} from '../../components/design-system'
import { Users, UserX, Globe, TrendingDown, AlertCircle, Briefcase, Stethoscope, LineChart } from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * AdvisorCrisisSlide - The advisor shortage and HNW pain points
 * Merges AdvisorShortage + TraditionalAdviceFails + AlphaGapSlide
 * Shows heat map, personas, and alpha loss visualization
 */
const AdvisorCrisisSlide = () => {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [alphaLoss, setAlphaLoss] = useState(0)
  const [ratioAnimation, setRatioAnimation] = useState(0)

  // Animate alpha loss counter
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAlphaLoss(prev => {
          if (prev <= -8.4) {
            clearInterval(interval)
            return -8.4
          }
          return prev - 0.3
        })
      }, 100)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Animate ratio
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setRatioAnimation(prev => {
          if (prev >= 500) {
            clearInterval(interval)
            return 500
          }
          return prev + 20
        })
      }, 50)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const metrics = [
    { icon: 'UserX', value: '1:500', label: 'Advisor Ratio', color: 'red' },
    { icon: 'TrendingDown', value: '-8.4%', label: 'Alpha Lost', color: 'orange' },
    { icon: 'Users', value: '2.4M', label: 'Underserved HNW', color: 'yellow' },
    { icon: 'Globe', value: '87%', label: 'Coverage Gap', color: 'red' }
  ]

  const regions = [
    { name: 'North America', shortage: 75, x: 25, y: 35 },
    { name: 'Europe', shortage: 68, x: 50, y: 30 },
    { name: 'Asia Pacific', shortage: 92, x: 75, y: 45 },
    { name: 'Middle East', shortage: 85, x: 55, y: 50 },
    { name: 'Latin America', shortage: 88, x: 30, y: 60 },
    { name: 'India', shortage: 95, x: 70, y: 55 }
  ]

  const personas = [
    {
      icon: Briefcase,
      name: 'Tech Founder',
      age: '34',
      wealth: '$25M',
      painPoint: "Can't find an advisor who understands crypto, equity comp, and rapid liquidity events",
      need: 'Tech-savvy wealth management',
      alphaLost: '-3.2%',
      color: 'purple'
    },
    {
      icon: Stethoscope,
      name: 'Surgeon',
      age: '42',
      wealth: '$8M',
      painPoint: "Current advisor meets quarterly, doesn't optimize for my complex tax situation",
      need: 'Proactive tax optimization',
      alphaLost: '-2.8%',
      color: 'blue'
    },
    {
      icon: LineChart,
      name: 'Day Trader',
      age: '38',
      wealth: '$15M',
      painPoint: "Traditional advisors don't understand my trading strategies or risk tolerance",
      need: 'Real-time portfolio sync',
      alphaLost: '-2.4%',
      color: 'green'
    }
  ]

  return (
    <StandardSlideLayout
      title="The Advisor Extinction Event"
      subtitle="Why 2.4 million HNW individuals can't find qualified help"
      badges={[]}
      metrics={metrics}
      showFooter={true}
    >
      <div className="h-full grid grid-cols-2 gap-6">
        
        {/* Left: Global Heat Map & Ratio */}
        <div className="flex flex-col gap-4">
          
          {/* Advisor Shortage Heat Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/30 p-6 relative overflow-hidden"
          >
            <h3 className="text-xl font-bold text-red-400 mb-4">Global Advisor Desert</h3>
            
            {/* World Map Visualization */}
            <div className="relative h-48">
              <svg className="w-full h-full" viewBox="0 0 100 70">
                {/* Simplified world map background */}
                <rect x="0" y="0" width="100" height="70" fill="#1e293b" opacity="0.3" />
                
                {/* Grid overlay */}
                {[...Array(5)].map((_, i) => (
                  <React.Fragment key={i}>
                    <line
                      x1="0"
                      y1={i * 14}
                      x2="100"
                      y2={i * 14}
                      stroke="#374151"
                      strokeWidth="0.2"
                      opacity="0.3"
                    />
                    <line
                      x1={i * 20}
                      y1="0"
                      x2={i * 20}
                      y2="70"
                      stroke="#374151"
                      strokeWidth="0.2"
                      opacity="0.3"
                    />
                  </React.Fragment>
                ))}

                {/* Heat zones for regions */}
                {regions.map((region, index) => {
                  const isSelected = selectedRegion === index
                  const heatColor = region.shortage > 90 ? '#dc2626' : 
                                   region.shortage > 80 ? '#ea580c' :
                                   region.shortage > 70 ? '#f59e0b' : '#f97316'
                  
                  return (
                    <g key={region.name}>
                      {/* Heat circle */}
                      <motion.circle
                        cx={region.x}
                        cy={region.y}
                        r={isSelected ? 12 : 8}
                        fill={heatColor}
                        opacity={isSelected ? 0.8 : 0.5}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        onMouseEnter={() => setSelectedRegion(index)}
                        onMouseLeave={() => setSelectedRegion(null)}
                        style={{ cursor: 'pointer' }}
                      />
                      
                      {/* Pulsing effect */}
                      <motion.circle
                        cx={region.x}
                        cy={region.y}
                        r="8"
                        fill="none"
                        stroke={heatColor}
                        strokeWidth="2"
                        opacity="0"
                        animate={{
                          r: [8, 15, 8],
                          opacity: [0.8, 0, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          delay: index * 0.2,
                          repeat: Infinity
                        }}
                      />
                      
                      {/* Label on hover */}
                      {isSelected && (
                        <g>
                          <rect
                            x={region.x - 25}
                            y={region.y - 25}
                            width="50"
                            height="20"
                            fill="#0f172a"
                            stroke={heatColor}
                            strokeWidth="0.5"
                            rx="2"
                          />
                          <text
                            x={region.x}
                            y={region.y - 15}
                            fill="#e5e7eb"
                            fontSize="6"
                            textAnchor="middle"
                          >
                            {region.name}
                          </text>
                          <text
                            x={region.x}
                            y={region.y - 8}
                            fill={heatColor}
                            fontSize="7"
                            textAnchor="middle"
                            fontWeight="bold"
                          >
                            {region.shortage}% shortage
                          </text>
                        </g>
                      )}
                    </g>
                  )
                })}
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-600 rounded-full" />
                  <span className="text-xs text-gray-400">Critical (&gt;90%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <span className="text-xs text-gray-400">Severe (70-90%)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advisor Ratio Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/30 p-6"
          >
            <h3 className="text-lg font-bold text-orange-400 mb-4">The Impossible Ratio</h3>
            
            <div className="flex items-center justify-center gap-8">
              {/* Single Advisor Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Users size={32} className="text-white" />
                </div>
                <div className="text-center mt-2 text-sm text-gray-400">1 Advisor</div>
              </motion.div>

              {/* VS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-2xl font-bold text-gray-500"
              >
                :
              </motion.div>

              {/* 500 Families */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: 'spring' }}
                className="relative"
              >
                <div className="grid grid-cols-10 gap-0.5">
                  {[...Array(50)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 bg-red-400 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 + i * 0.01 }}
                    />
                  ))}
                </div>
                <div className="text-center mt-2">
                  <motion.span
                    className="text-2xl font-bold text-red-400"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {ratioAnimation}
                  </motion.span>
                  <span className="text-sm text-gray-400 ml-1">Families</span>
                </div>
              </motion.div>
            </div>

            <div className="mt-4 text-center text-sm text-gray-400">
              Physical impossibility to serve everyone properly
            </div>
          </motion.div>
        </div>

        {/* Right: HNW Personas & Alpha Loss */}
        <div className="flex flex-col gap-4">
          
          {/* HNW Client Personas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex-1 space-y-3"
          >
            <h3 className="text-xl font-bold text-white mb-4">Who's Being Left Behind</h3>
            
            {personas.map((persona, index) => {
              const Icon = persona.icon
              const colorClasses = {
                purple: 'from-purple-500 to-pink-500',
                blue: 'from-blue-500 to-cyan-500',
                green: 'from-green-500 to-emerald-500'
              }

              return (
                <motion.div
                  key={persona.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-4 relative overflow-hidden"
                >
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${colorClasses[persona.color]}`} />
                  
                  <div className="flex items-start gap-4 ml-2">
                    {/* Avatar */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[persona.color]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon size={24} className="text-white" />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-lg font-semibold text-white">{persona.name}</h4>
                        <span className="text-red-400 font-bold">{persona.alphaLost}/year</span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                        <span>Age {persona.age}</span>
                        <span>•</span>
                        <span className="text-emerald-400">{persona.wealth}</span>
                      </div>
                      
                      <div className="text-sm text-gray-300 italic mb-2">
                        "{persona.painPoint}"
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <AlertCircle size={14} className="text-yellow-400" />
                        <span className="text-xs text-yellow-400">Need: {persona.need}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Alpha Loss Meter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/30 p-6"
          >
            <h3 className="text-lg font-bold text-red-400 mb-4">The Cost of Inadequate Advice</h3>
            
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-4xl font-bold text-red-400">
                  {alphaLoss.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">Annual Alpha Lost</div>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-semibold text-white">$1.68M</div>
                <div className="text-sm text-gray-400">Lost on $20M portfolio</div>
              </div>
            </div>

            {/* Breakdown bars */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 w-24">Tax Inefficiency</span>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                    initial={{ width: 0 }}
                    animate={{ width: '35%' }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
                <span className="text-xs text-red-400">-2.8%</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 w-24">Poor Timing</span>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-yellow-500"
                    initial={{ width: 0 }}
                    animate={{ width: '30%' }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </div>
                <span className="text-xs text-orange-400">-2.4%</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 w-24">Limited Access</span>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-500 to-amber-500"
                    initial={{ width: 0 }}
                    animate={{ width: '40%' }}
                    transition={{ duration: 1, delay: 1.4 }}
                  />
                </div>
                <span className="text-xs text-yellow-400">-3.2%</span>
              </div>
            </div>

            <motion.div
              className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <span className="text-sm text-red-400 font-medium">
                Over 20 years: -$33.6M opportunity cost
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </StandardSlideLayout>
  )
}

export default AdvisorCrisisSlide
