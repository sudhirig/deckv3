import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout, 
  ComparisonTable,
  MetricsBar 
} from '../../components/design-system'
import * as Lucide from 'lucide-react'

/**
 * ThreeFailuresProblem - Consolidated problem definition slide
 * Merges: TraditionalAdviceFailsSlide, AdvisorShortageSlide, ThreeCoreFailuresSlide, 
 * ThreeFailuresComparisonSlide, AlphaGapSlide
 */
const ThreeFailuresProblem = () => {
  const [selectedFailure, setSelectedFailure] = useState(0)

  const failures = [
    {
      id: 'digital',
      title: 'Digital Experience Gap',
      icon: 'Monitor',
      color: 'red',
      problem: 'Quarterly PDFs in 2024',
      solution: '24/7 AI Dashboard',
      stats: {
        current: '4x/year',
        needed: '24/7',
        gap: '99.9%'
      },
      pain: [
        'No real-time portfolio view',
        'Manual quarterly reports',
        'No mobile access',
        'Zero personalization'
      ],
      alphaLost: '-2.1%'
    },
    {
      id: 'access',
      title: 'Product Access Gap',
      icon: 'Lock',
      color: 'orange',
      problem: 'Stocks & Bonds Only',
      solution: 'Institutional Alternatives',
      stats: {
        current: '2 products',
        needed: '15+ products',
        gap: '87%'
      },
      pain: [
        'No alternative investments',
        'Missing 300-500bps alpha',
        'No structured products',
        'No international access'
      ],
      alphaLost: '-4.5%'
    },
    {
      id: 'tax',
      title: 'Tax Optimization Gap',
      icon: 'Calculator',
      color: 'yellow',
      problem: 'Annual Review at Best',
      solution: 'Daily AI Harvesting',
      stats: {
        current: '1x/year',
        needed: '365x/year',
        gap: '99.7%'
      },
      pain: [
        'Missed harvesting opportunities',
        'No proactive planning',
        'Leaving 1.8% on table',
        'Manual processing'
      ],
      alphaLost: '-1.8%'
    }
  ]

  const currentFailure = failures[selectedFailure]

  // Comparison data for the table
  const comparisonData = [
    {
      category: 'Availability',
      left: failures[0].stats.current,
      right: failures[0].stats.needed,
      winner: 'right'
    },
    {
      category: 'Products',
      left: failures[1].stats.current,
      right: failures[1].stats.needed,
      winner: 'right'
    },
    {
      category: 'Tax Review',
      left: failures[2].stats.current,
      right: failures[2].stats.needed,
      winner: 'right'
    }
  ]

  // Metrics for footer
  const metrics = [
    { icon: 'AlertTriangle', value: '-8.4%', label: 'Total Alpha Lost', color: 'red' },
    { icon: 'Users', value: '46%', label: 'Switching Now', color: 'orange' },
    { icon: 'TrendingDown', value: '93%', label: 'Underperforming', color: 'yellow' },
    { icon: 'Clock', value: '2024', label: 'Still Waiting', color: 'gray' }
  ]

  return (
    <StandardSlideLayout
      title="The Three Core Failures of Traditional Wealth Management"
      subtitle="Why 46% are actively switching advisors right now"
      badges={['stanford']}
      metrics={metrics}
      showHeader={true}
      showFooter={true}
    >
      <div className="grid grid-cols-5 gap-6 h-full">
        {/* Left: Three Failures Selector */}
        <motion.div 
          className="col-span-2 space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {failures.map((failure, index) => {
            const Icon = Lucide[failure.icon]
            const isSelected = selectedFailure === index
            const colorClasses = {
              red: 'from-red-500 to-red-600',
              orange: 'from-orange-500 to-orange-600',
              yellow: 'from-yellow-500 to-yellow-600'
            }

            return (
              <motion.div
                key={failure.id}
                onClick={() => setSelectedFailure(index)}
                className={`
                  relative p-6 rounded-xl cursor-pointer
                  transition-all duration-300
                  ${isSelected 
                    ? 'bg-gray-800/60 border-2 border-gray-600' 
                    : 'bg-gray-900/50 border border-gray-800 hover:bg-gray-800/40'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Selection Indicator */}
                {isSelected && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-l-xl"
                    layoutId="selector"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`
                    w-12 h-12 rounded-lg
                    bg-gradient-to-r ${colorClasses[failure.color]}
                    flex items-center justify-center flex-shrink-0
                  `}>
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {failure.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">
                      {failure.problem}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-red-400">
                        {failure.alphaLost}
                      </span>
                      <span className="text-sm text-gray-500">Alpha Lost</span>
                    </div>
                  </div>
                </div>

                {/* Gap Indicator */}
                <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                    initial={{ width: 0 }}
                    animate={{ width: failure.stats.gap }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {failure.stats.gap} Gap
                </div>
              </motion.div>
            )
          })}

          {/* Total Impact */}
          <motion.div
            className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-red-400 font-medium">Combined Alpha Loss</span>
              <span className="text-3xl font-bold text-red-400">-8.4%</span>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              Per year, compounded over decades
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Deep Dive into Selected Failure */}
        <motion.div 
          className="col-span-3 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8"
          key={selectedFailure}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {currentFailure.title}
              </h2>
              <p className="text-lg text-gray-400">
                The Reality vs. The Need
              </p>
            </div>
            <motion.div
              className="text-5xl font-bold text-red-400"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
            >
              {currentFailure.alphaLost}
            </motion.div>
          </div>

          {/* Comparison Visual */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* What You Get */}
            <motion.div
              className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Lucide.X className="text-red-400" size={20} />
                <h4 className="text-lg font-semibold text-red-400">What You Get</h4>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {currentFailure.problem}
              </div>
              <div className="text-gray-400 text-sm">
                Current Reality: {currentFailure.stats.current}
              </div>
            </motion.div>

            {/* What You Need */}
            <motion.div
              className="p-6 bg-teal-500/10 border border-teal-500/30 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Lucide.Check className="text-teal-400" size={20} />
                <h4 className="text-lg font-semibold text-teal-400">What You Need</h4>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {currentFailure.solution}
              </div>
              <div className="text-gray-400 text-sm">
                Required: {currentFailure.stats.needed}
              </div>
            </motion.div>
          </div>

          {/* Pain Points */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">The Pain Points</h4>
            <div className="grid grid-cols-2 gap-3">
              {currentFailure.pain.map((pain, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Lucide.AlertCircle className="text-orange-400 flex-shrink-0" size={16} />
                  <span className="text-gray-300 text-sm">{pain}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Impact Visualization */}
          <motion.div
            className="p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl border border-red-500/20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-400 mb-1">Over 20 Years</div>
                <div className="text-2xl font-bold text-white">
                  {currentFailure.alphaLost === '-2.1%' && '$420,000 Lost'}
                  {currentFailure.alphaLost === '-4.5%' && '$900,000 Lost'}
                  {currentFailure.alphaLost === '-1.8%' && '$360,000 Lost'}
                </div>
                <div className="text-sm text-gray-500 mt-1">On $1M portfolio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">
                  {currentFailure.stats.gap}
                </div>
                <div className="text-sm text-gray-400">Service Gap</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </StandardSlideLayout>
  )
}

export default ThreeFailuresProblem
