import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout,
  MetricsBar
} from '../../components/design-system'
import { 
  TrendingUp, DollarSign, Calculator, Target,
  Users, ArrowUpRight, Calendar, CheckCircle
} from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * BusinessModelComplete - Comprehensive financial view
 * Merges: FinancialProjections1 + 2 + 3 + UnitEconomicsSlide
 * Shows: Revenue projections, unit economics, break-even, path to $100M ARR
 */
const BusinessModelComplete = () => {
  const [selectedYear, setSelectedYear] = useState(0)
  const [animateChart, setAnimateChart] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateChart(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const metrics = [
    { icon: 'Calculator', value: '50x', label: 'LTV/CAC', color: 'emerald' },
    { icon: 'Calendar', value: 'Month 18', label: 'Break-even', color: 'green' },
    { icon: 'TrendingUp', value: '70%', label: 'Gross Margin', color: 'teal' },
    { icon: 'Target', value: '$100M', label: 'Year 4 ARR', color: 'cyan' }
  ]

  const yearData = [
    { 
      year: 'Year 1', 
      revenue: 2.5, 
      costs: 4.2, 
      profit: -1.7,
      users: 500,
      arpu: 5000,
      cac: 1500,
      milestones: ['Product launch', 'First 100 users', 'SEBI approval']
    },
    { 
      year: 'Year 2', 
      revenue: 12, 
      costs: 10.5, 
      profit: 1.5,
      users: 2000,
      arpu: 6000,
      cac: 1400,
      milestones: ['Break-even', 'B2B2C launch', '1000 CPAs']
    },
    { 
      year: 'Year 3', 
      revenue: 35, 
      costs: 24.5, 
      profit: 10.5,
      users: 5000,
      arpu: 7000,
      cac: 1300,
      milestones: ['Series A', 'US expansion', 'Alternative assets']
    },
    { 
      year: 'Year 4', 
      revenue: 100, 
      costs: 60, 
      profit: 40,
      users: 12500,
      arpu: 8000,
      cac: 1200,
      milestones: ['$100M ARR', 'Series B', 'Global launch']
    },
    { 
      year: 'Year 5', 
      revenue: 250, 
      costs: 137.5, 
      profit: 112.5,
      users: 30000,
      arpu: 8333,
      cac: 1100,
      milestones: ['IPO ready', 'Market leader', 'Unicorn status']
    }
  ]

  const unitEconomics = {
    cac: { value: '$1,500', label: 'Customer Acquisition Cost', trend: 'decreasing' },
    ltv: { value: '$75,000', label: 'Lifetime Value', trend: 'increasing' },
    payback: { value: '3 months', label: 'Payback Period', trend: 'improving' },
    retention: { value: '95%', label: 'Annual Retention', trend: 'stable' },
    expansion: { value: '120%', label: 'Net Revenue Retention', trend: 'increasing' }
  }

  return (
    <StandardSlideLayout
      title="Path to $100M ARR"
      subtitle="Unit economics and financial projections showing clear path to profitability"
      badges={[]}
      metrics={metrics}
      showFooter={true}
    >
      <div className="h-full flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 grid grid-cols-3 gap-6">
          
          {/* Left: Hockey Stick Chart */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-500/30 p-6"
            >
              <h4 className="text-lg font-semibold text-emerald-400 mb-4">Revenue Growth Trajectory</h4>
              
              {/* Chart */}
              <div className="relative h-64">
                <svg className="w-full h-full" viewBox="0 0 500 240">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map(i => (
                    <React.Fragment key={i}>
                      <line
                        x1="50"
                        y1={40 + i * 40}
                        x2="480"
                        y2={40 + i * 40}
                        stroke="#374151"
                        strokeWidth="0.5"
                        strokeDasharray="2,2"
                      />
                      <text x="35" y={45 + i * 40} fill="#9ca3af" fontSize="10" textAnchor="end">
                        ${250 - i * 62.5}M
                      </text>
                    </React.Fragment>
                  ))}
                  
                  {/* X-axis labels */}
                  {yearData.map((year, i) => (
                    <text key={year.year} x={90 + i * 90} y="230" fill="#9ca3af" fontSize="10" textAnchor="middle">
                      {year.year}
                    </text>
                  ))}

                  {/* Revenue line */}
                  <motion.path
                    d={`M 90 ${195 - yearData[0].revenue * 0.78} 
                        L ${90 + 90} ${195 - yearData[1].revenue * 0.78}
                        L ${90 + 180} ${195 - yearData[2].revenue * 0.78}
                        Q ${90 + 225} ${195 - yearData[3].revenue * 0.78 + 10}
                          ${90 + 270} ${195 - yearData[3].revenue * 0.78}
                        Q ${90 + 315} ${195 - yearData[4].revenue * 0.78 + 20}
                          ${90 + 360} ${195 - yearData[4].revenue * 0.78}`}
                    stroke="#10b981"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: animateChart ? 1 : 0 }}
                    transition={{ duration: 2 }}
                  />

                  {/* Cost line */}
                  <motion.path
                    d={`M 90 ${195 - yearData[0].costs * 0.78} 
                        L ${90 + 90} ${195 - yearData[1].costs * 0.78}
                        L ${90 + 180} ${195 - yearData[2].costs * 0.78}
                        L ${90 + 270} ${195 - yearData[3].costs * 0.78}
                        L ${90 + 360} ${195 - yearData[4].costs * 0.78}`}
                    stroke="#f59e0b"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: animateChart ? 1 : 0 }}
                    transition={{ duration: 2, delay: 0.3 }}
                  />

                  {/* Profit area fill */}
                  <motion.path
                    d={`M ${90 + 90} ${195 - yearData[1].revenue * 0.78}
                        L ${90 + 180} ${195 - yearData[2].revenue * 0.78}
                        Q ${90 + 225} ${195 - yearData[3].revenue * 0.78 + 10}
                          ${90 + 270} ${195 - yearData[3].revenue * 0.78}
                        Q ${90 + 315} ${195 - yearData[4].revenue * 0.78 + 20}
                          ${90 + 360} ${195 - yearData[4].revenue * 0.78}
                        L ${90 + 360} ${195 - yearData[4].costs * 0.78}
                        L ${90 + 270} ${195 - yearData[3].costs * 0.78}
                        L ${90 + 180} ${195 - yearData[2].costs * 0.78}
                        L ${90 + 90} ${195 - yearData[1].costs * 0.78}
                        Z`}
                    fill="#10b981"
                    fillOpacity="0.2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: animateChart ? 1 : 0 }}
                    transition={{ duration: 1, delay: 1 }}
                  />

                  {/* Break-even marker */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <circle cx={90 + 90} cy="130" r="5" fill="#10b981" />
                    <text x={90 + 90} y="115" fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="bold">
                      Break-even
                    </text>
                    <text x={90 + 90} y="125" fill="#10b981" fontSize="8" textAnchor="middle">
                      Month 18
                    </text>
                  </motion.g>

                  {/* Data points */}
                  {yearData.map((year, i) => (
                    <motion.circle
                      key={year.year}
                      cx={90 + i * 90}
                      cy={195 - year.revenue * 0.78}
                      r="4"
                      fill="#10b981"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                      onMouseEnter={() => setSelectedYear(i)}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}

                  {/* Legend */}
                  <g transform="translate(350, 20)">
                    <circle cx="0" cy="0" r="3" fill="#10b981" />
                    <text x="10" y="3" fill="#10b981" fontSize="10">Revenue</text>
                    <line x1="0" y1="15" x2="20" y2="15" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" />
                    <text x="25" y="18" fill="#f59e0b" fontSize="10">Costs</text>
                  </g>
                </svg>
              </div>

              {/* Year Details */}
              <motion.div
                key={selectedYear}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 grid grid-cols-3 gap-4"
              >
                <div className="bg-black/30 rounded-lg p-3">
                  <div className="text-xs text-gray-400">Revenue</div>
                  <div className="text-xl font-bold text-emerald-400">
                    ${yearData[selectedYear].revenue}M
                  </div>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <div className="text-xs text-gray-400">Users</div>
                  <div className="text-xl font-bold text-white">
                    {yearData[selectedYear].users.toLocaleString()}
                  </div>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <div className="text-xs text-gray-400">ARPU</div>
                  <div className="text-xl font-bold text-white">
                    ${yearData[selectedYear].arpu}
                  </div>
                </div>
              </motion.div>

              {/* Milestones */}
              <div className="mt-3">
                <div className="text-xs text-gray-400 mb-2">{yearData[selectedYear].year} Milestones:</div>
                <div className="flex flex-wrap gap-2">
                  {yearData[selectedYear].milestones.map((milestone, i) => (
                    <motion.div
                      key={milestone}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400"
                    >
                      {milestone}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Unit Economics */}
          <div className="space-y-4">
            {/* CAC/LTV Ratio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30 p-4"
            >
              <h5 className="text-sm font-semibold text-purple-400 mb-3">Unit Economics</h5>
              
              {/* Visual CAC/LTV comparison */}
              <div className="relative h-32 mb-3">
                <div className="absolute bottom-0 left-0 w-full">
                  {/* CAC Bar */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-400">CAC</span>
                      <span className="font-bold text-red-400">$1,500</span>
                    </div>
                    <div className="h-4 bg-red-500/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                        initial={{ width: 0 }}
                        animate={{ width: '10%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* LTV Bar */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-400">LTV</span>
                      <span className="font-bold text-emerald-400">$75,000</span>
                    </div>
                    <div className="h-4 bg-emerald-500/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-green-500"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Ratio display */}
                <motion.div
                  className="absolute top-0 right-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, type: 'spring' }}
                >
                  <div className="text-3xl font-bold text-purple-400">50x</div>
                  <div className="text-xs text-gray-400">LTV/CAC Ratio</div>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="text-center p-2 bg-black/30 rounded-lg">
                  <div className="text-sm font-bold text-white">3 mo</div>
                  <div className="text-xs text-gray-500">Payback</div>
                </div>
                <div className="text-center p-2 bg-black/30 rounded-lg">
                  <div className="text-sm font-bold text-white">95%</div>
                  <div className="text-xs text-gray-500">Retention</div>
                </div>
              </div>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-900/50 rounded-xl border border-gray-800 p-4"
            >
              <h5 className="text-sm font-semibold text-gray-300 mb-3">Financial Highlights</h5>
              
              <div className="space-y-3">
                {[
                  { label: 'Gross Margin', value: '70%', icon: TrendingUp, color: 'text-emerald-400' },
                  { label: 'Burn Multiple', value: '0.8x', icon: Calculator, color: 'text-blue-400' },
                  { label: 'Growth Rate', value: '180%', icon: ArrowUpRight, color: 'text-purple-400' },
                  { label: 'Magic Number', value: '1.5', icon: Target, color: 'text-yellow-400' }
                ].map((metric, i) => {
                  const Icon = metric.icon
                  return (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="flex items-center justify-between p-2 bg-black/30 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className={metric.color} size={14} />
                        <span className="text-xs text-gray-400">{metric.label}</span>
                      </div>
                      <span className={`text-sm font-bold ${metric.color}`}>{metric.value}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Path to IPO */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/30 p-4"
            >
              <h5 className="text-sm font-semibold text-emerald-400 mb-3">Exit Timeline</h5>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-400" size={14} />
                  <span className="text-xs text-white">Year 2: Series A ($20M)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-400" size={14} />
                  <span className="text-xs text-white">Year 4: Series B ($50M)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-400" size={14} />
                  <span className="text-xs text-white">Year 5: IPO Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-4 p-3 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DollarSign className="text-emerald-400" size={24} />
              <div>
                <div className="text-sm font-semibold text-white">
                  Clear path to profitability with best-in-class unit economics
                </div>
                <div className="text-xs text-gray-400">
                  50x LTV/CAC • 70% gross margin • Month 18 break-even
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-emerald-400">$1B+</div>
              <div className="text-xs text-gray-400">Valuation by Year 5</div>
            </div>
          </div>
        </motion.div>
      </div>
    </StandardSlideLayout>
  )
}

export default BusinessModelComplete
