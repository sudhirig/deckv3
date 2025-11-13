import React from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout,
  TabInterface,
  MetricsBar
} from '../../components/design-system'
import { 
  PieChart, Search, Shield, Calculator, RefreshCw, 
  TrendingUp, Award, Database, Filter, ChevronRight
} from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * CGMFAdvisory - Mutual Fund optimization product showcase
 * Tab 1: Concept - 5,000+ funds analyzed
 * Tab 2: Features - AI-driven selection, tax optimization
 * Tab 3: Live Demo - Portfolio rebalancing demonstration
 */
const CGMFAdvisory = () => {
  const metrics = [
    { icon: 'Database', value: '5,000+', label: 'Funds Analyzed', color: 'blue' },
    { icon: 'TrendingUp', value: '18.2%', label: 'Avg Returns', color: 'emerald' },
    { icon: 'Calculator', value: '₹3.2L', label: 'Tax Saved/Year', color: 'green' },
    { icon: 'RefreshCw', value: 'Daily', label: 'Rebalancing', color: 'teal' }
  ]

  // Tab 1: Concept
  const ConceptTab = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
            <PieChart size={32} className="text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white">Comprehensive Mutual Fund Advisory</h3>
            <p className="text-gray-400">AI analyzes 5,000+ schemes across 44 AMCs</p>
          </div>
        </div>
      </motion.div>

      {/* Fund Universe Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/30 p-6"
      >
        <h4 className="text-lg font-semibold text-blue-400 mb-4">The Fund Universe We Cover</h4>
        
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { category: 'Equity', count: '2,134', color: '#3b82f6' },
            { category: 'Debt', count: '1,456', color: '#06b6d4' },
            { category: 'Hybrid', count: '892', color: '#10b981' },
            { category: 'Others', count: '518', color: '#8b5cf6' }
          ].map((fund) => (
            <motion.div
              key={fund.category}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div 
                className="p-4 rounded-xl text-center"
                style={{ 
                  background: `${fund.color}15`,
                  border: `1px solid ${fund.color}40`
                }}
              >
                <div className="text-2xl font-bold" style={{ color: fund.color }}>
                  {fund.count}
                </div>
                <div className="text-sm text-gray-400">{fund.category} Funds</div>
              </div>
              
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{ border: `2px solid ${fund.color}` }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: Math.random() }}
              />
            </motion.div>
          ))}
        </div>

        {/* Selection Process Flow */}
        <div className="bg-black/30 rounded-xl p-4">
          <h5 className="text-sm font-semibold text-gray-400 mb-3">AI Selection Process</h5>
          
          <div className="flex items-center justify-between">
            {[
              { step: 'Scan', icon: Search, desc: '5,000+ funds' },
              { step: 'Filter', icon: Filter, desc: 'Risk profile' },
              { step: 'Analyze', icon: Database, desc: 'Performance' },
              { step: 'Select', icon: Award, desc: 'Top 20' }
            ].map((step, index) => (
              <React.Fragment key={step.step}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-2">
                    <step.icon size={24} className="text-blue-400" />
                  </div>
                  <div className="text-xs font-semibold text-white">{step.step}</div>
                  <div className="text-xs text-gray-500">{step.desc}</div>
                </motion.div>
                
                {index < 3 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                  >
                    <ChevronRight className="text-gray-600" size={20} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Key Benefits */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Outperformance', value: '+4.8%', desc: 'vs Category Avg' },
          { label: 'Tax Efficiency', value: '₹3.2L', desc: 'Annual Savings' },
          { label: 'Risk-Adjusted', value: '1.8', desc: 'Sharpe Ratio' }
        ].map((benefit, i) => (
          <motion.div
            key={benefit.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="bg-gray-900/50 rounded-xl p-4 text-center"
          >
            <div className="text-2xl font-bold text-emerald-400">{benefit.value}</div>
            <div className="text-sm text-white">{benefit.label}</div>
            <div className="text-xs text-gray-500">{benefit.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Tab 2: Features
  const FeaturesTab = () => {
    const features = [
      {
        category: 'Selection Intelligence',
        items: [
          { name: 'Multi-factor Analysis', desc: '127 parameters evaluated' },
          { name: 'Peer Comparison', desc: 'Category & benchmark analysis' },
          { name: 'Manager Track Record', desc: 'Historical performance scoring' },
          { name: 'Expense Optimization', desc: 'Lowest cost for performance' }
        ],
        color: 'blue'
      },
      {
        category: 'Tax Optimization',
        items: [
          { name: 'LTCG Harvesting', desc: 'Minimize capital gains tax' },
          { name: 'ELSS Selection', desc: '80C deduction optimization' },
          { name: 'Dividend Planning', desc: 'Tax-efficient income' },
          { name: 'SWP Structuring', desc: 'Systematic withdrawal plans' }
        ],
        color: 'green'
      },
      {
        category: 'Portfolio Management',
        items: [
          { name: 'Dynamic Rebalancing', desc: 'Daily portfolio optimization' },
          { name: 'Risk Monitoring', desc: 'Real-time risk assessment' },
          { name: 'Goal Alignment', desc: 'Target-based allocation' },
          { name: 'Exit Timing', desc: 'Optimal redemption signals' }
        ],
        color: 'purple'
      }
    ]

    return (
      <div className="space-y-6">
        {features.map((category, catIndex) => {
          const colorMap = {
            blue: 'from-blue-500/10 to-cyan-500/10',
            green: 'from-green-500/10 to-emerald-500/10',
            purple: 'from-purple-500/10 to-pink-500/10'
          }
          const borderMap = {
            blue: 'border-blue-500/30',
            green: 'border-green-500/30',
            purple: 'border-purple-500/30'
          }
          const textMap = {
            blue: 'text-blue-400',
            green: 'text-green-400',
            purple: 'text-purple-400'
          }

          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: catIndex * 0.2 }}
              className={`bg-gradient-to-br ${colorMap[category.color]} rounded-xl border ${borderMap[category.color]} p-4`}
            >
              <h4 className={`text-lg font-semibold ${textMap[category.color]} mb-3`}>
                {category.category}
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + catIndex * 0.2 + i * 0.1 }}
                    className="bg-black/20 rounded-lg p-3"
                  >
                    <div className="text-sm font-semibold text-white mb-1">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {item.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    )
  }

  // Tab 3: Live Demo
  const LiveDemoTab = () => (
    <div className="space-y-6">
      {/* Portfolio Performance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/30 p-6"
      >
        <h4 className="text-xl font-bold text-emerald-400 mb-4">Sample Portfolio Performance</h4>
        
        {/* Before/After Comparison */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30">
            <h5 className="text-sm font-semibold text-red-400 mb-3">Before ARIA</h5>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Returns</span>
                <span className="text-sm text-white">12.4%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Risk (Std Dev)</span>
                <span className="text-sm text-white">18.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Sharpe Ratio</span>
                <span className="text-sm text-white">0.68</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Tax Paid</span>
                <span className="text-sm text-red-400">₹4.8L</span>
              </div>
            </div>
          </div>

          <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30">
            <h5 className="text-sm font-semibold text-emerald-400 mb-3">After ARIA</h5>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Returns</span>
                <span className="text-sm text-emerald-400 font-bold">18.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Risk (Std Dev)</span>
                <span className="text-sm text-emerald-400 font-bold">14.1%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Sharpe Ratio</span>
                <span className="text-sm text-emerald-400 font-bold">1.29</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Tax Paid</span>
                <span className="text-sm text-emerald-400 font-bold">₹1.6L</span>
              </div>
            </div>
          </div>
        </div>

        {/* Allocation Chart */}
        <div className="bg-black/20 rounded-xl p-4">
          <h5 className="text-sm font-semibold text-gray-400 mb-3">Optimized Allocation</h5>
          
          <div className="space-y-3">
            {[
              { fund: 'Large Cap Equity', allocation: 35, color: '#3b82f6' },
              { fund: 'Mid Cap Equity', allocation: 25, color: '#06b6d4' },
              { fund: 'Debt Funds', allocation: 20, color: '#10b981' },
              { fund: 'International', allocation: 15, color: '#8b5cf6' },
              { fund: 'Gold/Others', allocation: 5, color: '#f59e0b' }
            ].map((item, i) => (
              <div key={item.fund} className="flex items-center gap-3">
                <div className="text-xs text-gray-400 w-28">{item.fund}</div>
                <div className="flex-1 h-6 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full flex items-center justify-end px-2"
                    style={{ background: item.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.allocation}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                  >
                    <span className="text-xs text-white font-semibold">{item.allocation}%</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Recent Rebalancing Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-900/50 rounded-xl border border-gray-800 p-4"
      >
        <h5 className="text-sm font-semibold text-gray-300 mb-3">Recent Optimization Actions</h5>
        <div className="space-y-2">
          {[
            { action: 'Switched', from: 'HDFC Top 100', to: 'Nifty 50 Index', reason: 'Lower expense ratio', saving: '₹12,000/year' },
            { action: 'Redeemed', from: 'Axis Small Cap', to: 'Debt Fund', reason: 'Risk rebalancing', saving: 'Protected ₹2.3L' },
            { action: 'Added', from: 'Cash', to: 'PPFAS Flexi Cap', reason: 'Valuation opportunity', saving: 'Expected +3.2%' }
          ].map((action, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center justify-between p-2 bg-black/20 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <RefreshCw className="text-blue-400" size={16} />
                <div>
                  <span className="text-sm font-semibold text-white">{action.action}: </span>
                  <span className="text-sm text-gray-400">{action.from} → {action.to}</span>
                </div>
              </div>
              <span className="text-sm text-emerald-400">{action.saving}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )

  const tabs = [
    {
      id: 'concept',
      label: 'Concept',
      icon: PieChart,
      content: <ConceptTab />
    },
    {
      id: 'features',
      label: 'Features',
      icon: Shield,
      content: <FeaturesTab />
    },
    {
      id: 'live',
      label: 'Live Demo',
      icon: TrendingUp,
      content: <LiveDemoTab />
    }
  ]

  return (
    <StandardSlideLayout
      title="CGMF Advisory Module"
      subtitle="AI-powered mutual fund selection across 5,000+ schemes"
      badges={['operational']}
      metrics={metrics}
      showFooter={true}
    >
      <TabInterface
        tabs={tabs}
        defaultTab="concept"
        variant="pills"
        position="top"
      />
    </StandardSlideLayout>
  )
}

export default CGMFAdvisory
