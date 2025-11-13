import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout,
  MetricsBar
} from '../../components/design-system'
import { 
  DollarSign, Users, Rocket, Shield, Code,
  TrendingUp, Target, Calendar, CheckCircle, ArrowRight
} from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * FundingAsk - Consolidated funding requirements
 * Merges: FundingSlide + Use of funds from all financial slides
 * Shows: $5M ask, use of funds pie chart, milestones to next round
 */
const FundingAsk = () => {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [animatePie, setAnimatePie] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatePie(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const metrics = [
    { icon: 'DollarSign', value: '$5M', label: 'Seed Round', color: 'emerald' },
    { icon: 'Calendar', value: '12mo', label: 'Runway', color: 'green' },
    { icon: 'Users', value: '10K', label: 'User Target', color: 'teal' },
    { icon: 'Target', value: '$10M', label: 'ARR Target', color: 'cyan' }
  ]

  const useOfFunds = [
    {
      category: 'Technology',
      percentage: 40,
      amount: '$2M',
      color: '#8b5cf6',
      icon: Code,
      details: [
        '20 engineers',
        'AI/ML infrastructure',
        'Platform scaling',
        'Security enhancements'
      ]
    },
    {
      category: 'Sales & Marketing',
      percentage: 30,
      amount: '$1.5M',
      color: '#3b82f6',
      icon: TrendingUp,
      details: [
        'B2B2C partnerships',
        'Digital marketing',
        'Brand building',
        'Conference presence'
      ]
    },
    {
      category: 'Operations',
      percentage: 20,
      amount: '$1M',
      color: '#10b981',
      icon: Users,
      details: [
        'Customer success team',
        'Compliance officers',
        'Data analysts',
        'Office expansion'
      ]
    },
    {
      category: 'Regulatory & Legal',
      percentage: 10,
      amount: '$0.5M',
      color: '#f59e0b',
      icon: Shield,
      details: [
        'SEBI compliance',
        'International licenses',
        'Patent filings',
        'Legal counsel'
      ]
    }
  ]

  const milestones = [
    { month: 'Month 3', target: '2,500 users', metric: 'Product-Market Fit', icon: CheckCircle },
    { month: 'Month 6', target: '5,000 users', metric: '$5M ARR run rate', icon: TrendingUp },
    { month: 'Month 9', target: '7,500 users', metric: 'US expansion launch', icon: Rocket },
    { month: 'Month 12', target: '10,000 users', metric: 'Series A ready', icon: Target }
  ]

  // Calculate pie chart segments
  let cumulativePercentage = 0
  const pieSegments = useOfFunds.map((fund, i) => {
    const startAngle = (cumulativePercentage * 360) / 100
    cumulativePercentage += fund.percentage
    const endAngle = (cumulativePercentage * 360) / 100
    
    // Convert to SVG path
    const startX = 50 + 35 * Math.cos((startAngle - 90) * Math.PI / 180)
    const startY = 50 + 35 * Math.sin((startAngle - 90) * Math.PI / 180)
    const endX = 50 + 35 * Math.cos((endAngle - 90) * Math.PI / 180)
    const endY = 50 + 35 * Math.sin((endAngle - 90) * Math.PI / 180)
    
    const largeArcFlag = fund.percentage > 50 ? 1 : 0
    
    return {
      ...fund,
      path: `M 50 50 L ${startX} ${startY} A 35 35 0 ${largeArcFlag} 1 ${endX} ${endY} Z`,
      midAngle: (startAngle + endAngle) / 2
    }
  })

  return (
    <StandardSlideLayout
      title="$5M Seed Round"
      subtitle="Strategic capital to accelerate growth and achieve market dominance"
      badges={[]}
      metrics={metrics}
      showFooter={true}
    >
      <div className="h-full flex flex-col">
        <div className="flex-1 grid grid-cols-5 gap-6">
          
          {/* Left: Pie Chart */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/30 p-6 flex flex-col"
            >
              <h4 className="text-lg font-semibold text-purple-400 mb-4">Use of Funds</h4>
              
              {/* Pie Chart */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="35" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
                    
                    {/* Pie segments */}
                    {pieSegments.map((segment, i) => (
                      <motion.path
                        key={segment.category}
                        d={segment.path}
                        fill={segment.color}
                        fillOpacity="0.8"
                        stroke="#0f172a"
                        strokeWidth="1"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: animatePie ? (selectedCategory === i ? 1.05 : 1) : 0,
                          opacity: animatePie ? 1 : 0
                        }}
                        transition={{ 
                          duration: 0.8, 
                          delay: i * 0.2,
                          type: 'spring'
                        }}
                        style={{ transformOrigin: '50px 50px', cursor: 'pointer' }}
                        onClick={() => setSelectedCategory(i)}
                        onMouseEnter={() => setSelectedCategory(i)}
                      />
                    ))}

                    {/* Center circle */}
                    <circle cx="50" cy="50" r="20" fill="#0f172a" />
                    
                    {/* Center text */}
                    <text x="50" y="48" fill="white" fontSize="8" textAnchor="middle" fontWeight="bold">
                      $5M
                    </text>
                    <text x="50" y="55" fill="#94a3b8" fontSize="4" textAnchor="middle">
                      SEED ROUND
                    </text>
                  </svg>

                  {/* Percentage labels */}
                  {pieSegments.map((segment, i) => {
                    const labelX = 50 + 28 * Math.cos((segment.midAngle - 90) * Math.PI / 180)
                    const labelY = 50 + 28 * Math.sin((segment.midAngle - 90) * Math.PI / 180)
                    
                    return (
                      <motion.div
                        key={`label-${i}`}
                        className="absolute text-white font-bold text-sm"
                        style={{
                          left: `${labelX}%`,
                          top: `${labelY}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: animatePie ? 1 : 0 }}
                        transition={{ delay: 0.5 + i * 0.2 }}
                      >
                        {segment.percentage}%
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {useOfFunds.map((fund, i) => (
                  <motion.div
                    key={fund.category}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all ${
                      selectedCategory === i ? 'bg-black/30' : 'bg-black/10'
                    }`}
                    onClick={() => setSelectedCategory(i)}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: fund.color }} />
                    <span className="text-xs text-white">{fund.category}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Middle: Category Details */}
          <div className="col-span-1">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full bg-gray-900/50 rounded-xl border border-gray-800 p-4 flex flex-col"
            >
              {(() => {
                const selected = useOfFunds[selectedCategory]
                const Icon = selected.icon
                
                return (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${selected.color}20` }}
                      >
                        <Icon size={24} style={{ color: selected.color }} />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white">{selected.category}</h5>
                        <p className="text-xs text-gray-400">{selected.percentage}% of raise</p>
                      </div>
                    </div>

                    <div className="text-2xl font-bold mb-4" style={{ color: selected.color }}>
                      {selected.amount}
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="text-xs font-semibold text-gray-400 mb-2">Allocation:</div>
                      {selected.details.map((detail, i) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle size={12} style={{ color: selected.color }} />
                          <span className="text-xs text-gray-300">{detail}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="mt-4 p-3 rounded-lg border"
                      style={{ 
                        backgroundColor: `${selected.color}10`,
                        borderColor: `${selected.color}30`
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="text-xs text-gray-400">Expected ROI</div>
                      <div className="text-lg font-bold text-white">
                        {selectedCategory === 0 ? '10x' : 
                         selectedCategory === 1 ? '5x' :
                         selectedCategory === 2 ? '3x' : '2x'}
                      </div>
                    </motion.div>
                  </>
                )
              })()}
            </motion.div>
          </div>

          {/* Right: Milestones */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="h-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-500/30 p-6 flex flex-col"
            >
              <h4 className="text-lg font-semibold text-emerald-400 mb-4">12-Month Milestones</h4>
              
              <div className="flex-1 space-y-3">
                {milestones.map((milestone, i) => {
                  const Icon = milestone.icon
                  
                  return (
                    <motion.div
                      key={milestone.month}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-black/20 rounded-xl relative"
                    >
                      {/* Timeline connector */}
                      {i < milestones.length - 1 && (
                        <div className="absolute left-7 top-12 w-0.5 h-8 bg-emerald-500/30" />
                      )}
                      
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-emerald-400" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-white">{milestone.month}</span>
                          <span className="text-xs text-emerald-400 font-semibold">{milestone.target}</span>
                        </div>
                        <div className="text-xs text-gray-400">{milestone.metric}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Series A Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-4 p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Next: Series A</div>
                    <div className="text-xs text-gray-400">$20M at $100M valuation</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Rocket className="text-emerald-400" size={20} />
                    <ArrowRight className="text-emerald-400" size={16} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-4 p-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-emerald-500/10 rounded-xl border border-white/20"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <DollarSign className="text-yellow-400" size={28} />
              <div>
                <div className="text-lg font-bold text-white">
                  Strategic capital for exponential growth
                </div>
                <div className="text-sm text-gray-400">
                  40% tech • 30% sales • 20% ops • 10% legal = 100% focused on scale
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">20x</div>
              <div className="text-sm text-gray-400">Expected Return</div>
            </div>
          </div>
        </motion.div>
      </div>
    </StandardSlideLayout>
  )
}

export default FundingAsk
