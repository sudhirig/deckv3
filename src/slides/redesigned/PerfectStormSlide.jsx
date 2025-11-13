import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  StandardSlideLayout,
  MetricsBar,
  StanfordBadge
} from '../../components/design-system'
import { TrendingUp, Users, DollarSign, AlertTriangle, ArrowRight, Brain, UserMinus } from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * PerfectStormSlide - The crisis dashboard showing convergence
 * Merges Stanford Study + Market Switching + Wealth Transfer Opportunity
 * Split-screen crisis visualization with animated data
 */
const PerfectStormSlide = () => {
  const [wealthCounter, setWealthCounter] = useState(0)
  const [switchingPercent, setSwitchingPercent] = useState(0)
  const [aiPerformance, setAiPerformance] = useState(0)
  const [selectedFlow, setSelectedFlow] = useState(null)

  // Animate wealth counter to 124
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setWealthCounter(prev => {
          if (prev >= 124) {
            clearInterval(interval)
            return 124
          }
          return prev + 4
        })
      }, 50)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Animate switching percent to 46
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setSwitchingPercent(prev => {
          if (prev >= 46) {
            clearInterval(interval)
            return 46
          }
          return prev + 2
        })
      }, 50)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Animate AI performance to 600
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAiPerformance(prev => {
          if (prev >= 600) {
            clearInterval(interval)
            return 600
          }
          return prev + 15
        })
      }, 30)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const metrics = [
    { icon: 'Brain', value: '600%', label: 'AI Advantage', color: 'teal' },
    { icon: 'Users', value: '46%', label: 'Switching Now', color: 'orange' },
    { icon: 'DollarSign', value: '$124T', label: 'Opportunity', color: 'emerald' },
    { icon: 'AlertTriangle', value: 'NOW', label: 'Time to Act', color: 'red' }
  ]

  const flowDestinations = [
    { label: 'Robo-Advisors', percent: 15, color: '#3b82f6' },
    { label: 'DIY Platforms', percent: 20, color: '#f59e0b' },
    { label: 'AI Solutions', percent: 11, color: '#10b981' }
  ]

  return (
    <StandardSlideLayout
      title="The Perfect Storm"
      subtitle="Three forces converging to reshape wealth management forever"
      badges={['stanford']}
      metrics={metrics}
      showFooter={true}
    >
      <div className="h-full flex flex-col gap-6">
        
        {/* Crisis Dashboard Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
            <AlertTriangle className="text-red-400" size={20} />
            <span className="text-red-400 font-semibold">DISRUPTION IN PROGRESS</span>
            <motion.div
              className="w-2 h-2 bg-red-400 rounded-full"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Split Screen Dashboard */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          
          {/* Left: AI Supremacy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl border border-teal-500/30 p-6 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-teal-400">AI SUPREMACY</h3>
              <StanfordBadge variant="mini" />
            </div>

            {/* Performance Chart */}
            <div className="relative h-48 mb-6">
              <svg className="w-full h-full" viewBox="0 0 300 180">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map(i => (
                  <line
                    key={i}
                    x1="40"
                    y1={40 + i * 30}
                    x2="280"
                    y2={40 + i * 30}
                    stroke="#374151"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                  />
                ))}

                {/* Y-axis labels */}
                <text x="20" y="45" fill="#9ca3af" fontSize="10">600%</text>
                <text x="20" y="75" fill="#9ca3af" fontSize="10">400%</text>
                <text x="20" y="105" fill="#9ca3af" fontSize="10">200%</text>
                <text x="20" y="135" fill="#9ca3af" fontSize="10">0%</text>

                {/* Human performance (flat line) */}
                <motion.line
                  x1="40"
                  y1="130"
                  x2="280"
                  y2="130"
                  stroke="#ef4444"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                
                {/* AI performance (ascending) */}
                <motion.path
                  d="M 40 130 Q 100 120 150 100 T 280 40"
                  stroke="#14b8a6"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.8 }}
                />

                {/* Labels */}
                <text x="250" y="125" fill="#ef4444" fontSize="12">Humans</text>
                <text x="250" y="35" fill="#14b8a6" fontSize="12">AI</text>

                {/* Year markers */}
                <text x="40" y="170" fill="#9ca3af" fontSize="10">2019</text>
                <text x="100" y="170" fill="#9ca3af" fontSize="10">2021</text>
                <text x="160" y="170" fill="#9ca3af" fontSize="10">2023</text>
                <text x="220" y="170" fill="#9ca3af" fontSize="10">2024</text>
                <text x="270" y="170" fill="#9ca3af" fontSize="10">2025</text>
              </svg>
            </div>

            {/* Key Stats */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                <div className="flex items-center gap-2">
                  <Brain className="text-teal-400" size={20} />
                  <span className="text-gray-300">AI Performance</span>
                </div>
                <motion.span
                  className="text-2xl font-bold text-teal-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  +{aiPerformance}%
                </motion.span>
              </div>

              <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                <span className="text-gray-300">Beating humans since</span>
                <span className="text-xl font-semibold text-white">2023</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                <span className="text-gray-300">Fund managers obsolete</span>
                <span className="text-xl font-semibold text-red-400">93%</span>
              </div>
            </div>

            {/* Animated particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-teal-400 rounded-full"
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 30}%`
                }}
              />
            ))}
          </motion.div>

          {/* Right: Mass Exodus */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/30 p-6 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-orange-400">MASS EXODUS</h3>
              <div className="flex items-center gap-2">
                <UserMinus className="text-orange-400" size={20} />
                <motion.span
                  className="text-2xl font-bold text-orange-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  {switchingPercent}%
                </motion.span>
              </div>
            </div>

            {/* Sankey Diagram */}
            <div className="relative h-48 mb-6">
              <svg className="w-full h-full" viewBox="0 0 300 180">
                {/* Source block */}
                <rect x="10" y="40" width="60" height="100" fill="#475569" opacity="0.5" />
                <text x="40" y="90" fill="#e5e7eb" fontSize="11" textAnchor="middle">
                  Traditional
                </text>
                <text x="40" y="105" fill="#e5e7eb" fontSize="11" textAnchor="middle">
                  Advisors
                </text>

                {/* Flows */}
                {flowDestinations.map((dest, index) => {
                  const yStart = 60 + index * 25
                  const yEnd = 30 + index * 50
                  const isHovered = selectedFlow === index

                  return (
                    <g key={index}>
                      {/* Flow path */}
                      <motion.path
                        d={`M 70 ${yStart} Q 150 ${yStart} 230 ${yEnd}`}
                        stroke={dest.color}
                        strokeWidth={isHovered ? "25" : "20"}
                        fill="none"
                        opacity={isHovered ? 0.8 : 0.4}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.2 }}
                        onMouseEnter={() => setSelectedFlow(index)}
                        onMouseLeave={() => setSelectedFlow(null)}
                        style={{ cursor: 'pointer' }}
                      />

                      {/* Destination blocks */}
                      <rect
                        x="230"
                        y={yEnd - 10}
                        width="60"
                        height="20"
                        fill={dest.color}
                        opacity={isHovered ? 0.8 : 0.5}
                      />

                      {/* Labels */}
                      <text x="260" y={yEnd + 3} fill="#e5e7eb" fontSize="9" textAnchor="middle">
                        {dest.label}
                      </text>
                      <text x="260" y={yEnd + 15} fill="#e5e7eb" fontSize="10" textAnchor="middle" fontWeight="bold">
                        {dest.percent}%
                      </text>

                      {/* Animated dots along path */}
                      <motion.circle
                        r="3"
                        fill={dest.color}
                        opacity="0.8"
                        animate={{
                          offsetDistance: ["0%", "100%"]
                        }}
                        transition={{
                          duration: 2,
                          delay: 1 + index * 0.3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <animateMotion
                          dur="2s"
                          repeatCount="indefinite"
                          path={`M 70 ${yStart} Q 150 ${yStart} 230 ${yEnd}`}
                        />
                      </motion.circle>
                    </g>
                  )
                })}

                {/* Remaining (staying) */}
                <rect x="10" y="150" width="60" height="20" fill="#374151" opacity="0.3" />
                <text x="40" y="163" fill="#9ca3af" fontSize="10" textAnchor="middle">
                  Staying: 54%
                </text>
              </svg>
            </div>

            {/* Key Insights */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                <span className="text-gray-300">Actively leaving</span>
                <span className="text-xl font-semibold text-orange-400">46%</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                <span className="text-gray-300">To AI platforms</span>
                <span className="text-xl font-semibold text-emerald-400">11%</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                <span className="text-gray-300">Decision timeframe</span>
                <span className="text-xl font-semibold text-red-400">NOW</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Wealth Transfer Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-2xl border border-emerald-500/30 p-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center"
              >
                <DollarSign size={40} className="text-white" />
              </motion.div>
              
              <div>
                <div className="text-3xl font-bold text-white mb-1">
                  ${wealthCounter} Trillion Opportunity Window
                </div>
                <div className="text-gray-400">
                  The largest wealth transfer in human history is happening RIGHT NOW
                </div>
              </div>
            </div>

            <div className="text-right">
              <motion.div
                className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ${wealthCounter}T
              </motion.div>
              <div className="text-sm text-gray-400 mt-1">By 2045</div>
            </div>
          </div>

          {/* Animated wealth flow */}
          <div className="mt-4 flex items-center gap-4">
            {['Baby Boomers', 'Gen X', 'Millennials'].map((gen, i) => (
              <motion.div
                key={gen}
                className="flex-1 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.2 }}
              >
                <div className="text-sm text-gray-400 mb-1">{gen}</div>
                <div className="h-2 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${i === 0 ? 60 : i === 1 ? 30 : 10}%` }}
                    transition={{ duration: 1.5, delay: 1.5 + i * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </StandardSlideLayout>
  )
}

export default PerfectStormSlide
