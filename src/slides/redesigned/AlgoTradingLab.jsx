import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout,
  TabInterface,
  MetricsBar
} from '../../components/design-system'
import { 
  LineChart, TestTube, PlayCircle, BarChart3, 
  Settings, Shield, TrendingUp, AlertCircle, CheckCircle
} from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * AlgoTradingLab - Algorithmic trading and strategy development
 * Tab 1: Concept - Strategy development flow
 * Tab 2: Features - Backtesting engine, paper trading
 * Tab 3: Live Demo - Performance metrics and live deployment
 */
const AlgoTradingLab = () => {
  const metrics = [
    { icon: 'LineChart', value: '847', label: 'Strategies Tested', color: 'purple' },
    { icon: 'TrendingUp', value: '2.4', label: 'Avg Sharpe Ratio', color: 'emerald' },
    { icon: 'Shield', value: '12%', label: 'Max Drawdown', color: 'blue' },
    { icon: 'PlayCircle', value: '37', label: 'Live Strategies', color: 'green' }
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
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
            <TestTube size={32} className="text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white">Algorithmic Trading Laboratory</h3>
            <p className="text-gray-400">From idea to live trading in minutes, not months</p>
          </div>
        </div>
      </motion.div>

      {/* Strategy Development Pipeline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/30 p-6"
      >
        <h4 className="text-lg font-semibold text-indigo-400 mb-4">Strategy Development Pipeline</h4>
        
        {/* Pipeline Flow */}
        <div className="relative">
          {/* Steps */}
          <div className="grid grid-cols-5 gap-2">
            {[
              { step: 'IDEATION', icon: '💡', desc: 'Strategy hypothesis' },
              { step: 'CODING', icon: '⚙️', desc: 'Algorithm creation' },
              { step: 'BACKTEST', icon: '📊', desc: 'Historical validation' },
              { step: 'PAPER', icon: '📝', desc: 'Simulated trading' },
              { step: 'LIVE', icon: '🚀', desc: 'Real deployment' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-black/30 rounded-xl p-3 text-center border border-indigo-500/30">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-xs font-bold text-indigo-400">{item.step}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                </div>
                
                {index < 4 && (
                  <motion.div
                    className="absolute top-1/2 -right-1 w-3 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    style={{ transformOrigin: 'left' }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Time Comparison */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30">
              <div className="text-sm text-red-400 font-semibold mb-2">Traditional Approach</div>
              <div className="text-2xl font-bold text-white">3-6 months</div>
              <div className="text-xs text-gray-400">Manual coding, testing, deployment</div>
            </div>
            
            <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30">
              <div className="text-sm text-emerald-400 font-semibold mb-2">With ARIA Lab</div>
              <div className="text-2xl font-bold text-white">2-3 hours</div>
              <div className="text-xs text-gray-400">AI-assisted development & testing</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Advantages */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Strategies/Day', value: '50+', icon: '⚡' },
          { label: 'Success Rate', value: '68%', icon: '✅' },
          { label: 'Time Saved', value: '95%', icon: '⏱️' }
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="bg-gray-900/50 rounded-xl p-4 text-center"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Tab 2: Features
  const FeaturesTab = () => {
    const features = [
      {
        title: 'Backtesting Engine',
        items: [
          '10+ years historical data',
          'Tick-by-tick simulation',
          'Transaction cost modeling',
          'Slippage estimation'
        ],
        stats: { tested: '847', win: '68%' },
        color: 'indigo'
      },
      {
        title: 'Paper Trading',
        items: [
          'Real-time market simulation',
          'Virtual portfolio tracking',
          'Risk metrics monitoring',
          'Performance analytics'
        ],
        stats: { active: '124', profit: '82%' },
        color: 'purple'
      },
      {
        title: 'Strategy Builder',
        items: [
          '200+ technical indicators',
          'Custom signal creation',
          'ML model integration',
          'Multi-asset support'
        ],
        stats: { indicators: '200+', assets: '500+' },
        color: 'blue'
      },
      {
        title: 'Risk Management',
        items: [
          'Position sizing algorithms',
          'Stop-loss automation',
          'Drawdown controls',
          'Correlation analysis'
        ],
        stats: { maxDD: '12%', sharpe: '2.4' },
        color: 'cyan'
      }
    ]

    return (
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => {
          const colorMap = {
            indigo: 'from-indigo-500/10 to-purple-500/10',
            purple: 'from-purple-500/10 to-pink-500/10',
            blue: 'from-blue-500/10 to-cyan-500/10',
            cyan: 'from-cyan-500/10 to-teal-500/10'
          }
          const borderMap = {
            indigo: 'border-indigo-500/30',
            purple: 'border-purple-500/30',
            blue: 'border-blue-500/30',
            cyan: 'border-cyan-500/30'
          }
          const textMap = {
            indigo: 'text-indigo-400',
            purple: 'text-purple-400',
            blue: 'text-blue-400',
            cyan: 'text-cyan-400'
          }

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`bg-gradient-to-br ${colorMap[feature.color]} rounded-xl border ${borderMap[feature.color]} p-4`}
            >
              <h4 className={`text-lg font-semibold ${textMap[feature.color]} mb-3`}>
                {feature.title}
              </h4>
              
              <div className="space-y-2 mb-3">
                {feature.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.15 + i * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle size={12} className={textMap[feature.color]} />
                    <span className="text-xs text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-800">
                {Object.entries(feature.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className={`text-lg font-bold ${textMap[feature.color]}`}>{value}</div>
                    <div className="text-xs text-gray-500 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    )
  }

  // Tab 3: Live Demo
  const LiveDemoTab = () => {
    const [selectedStrategy, setSelectedStrategy] = useState(0)
    
    const strategies = [
      {
        name: 'Momentum Breakout',
        status: 'LIVE',
        pnl: '+₹8.7L',
        winRate: '72%',
        trades: 234,
        sharpe: 2.6,
        maxDD: '8.2%'
      },
      {
        name: 'Mean Reversion',
        status: 'LIVE',
        pnl: '+₹5.3L',
        winRate: '68%',
        trades: 412,
        sharpe: 2.1,
        maxDD: '11.5%'
      },
      {
        name: 'Pairs Trading',
        status: 'PAPER',
        pnl: '+₹2.1L',
        winRate: '75%',
        trades: 89,
        sharpe: 2.8,
        maxDD: '6.4%'
      }
    ]

    return (
      <div className="space-y-6">
        {/* Live Strategy Performance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/30 p-6"
        >
          <h4 className="text-xl font-bold text-indigo-400 mb-4">Active Strategy Performance</h4>
          
          {/* Strategy Selector */}
          <div className="flex gap-2 mb-4">
            {strategies.map((strategy, i) => (
              <motion.button
                key={strategy.name}
                onClick={() => setSelectedStrategy(i)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedStrategy === i 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-black/30 text-gray-400 hover:bg-black/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {strategy.name}
                {strategy.status === 'LIVE' && (
                  <span className="ml-2 w-2 h-2 bg-emerald-400 rounded-full inline-block animate-pulse" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Selected Strategy Details */}
          <motion.div
            key={selectedStrategy}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/30 rounded-xl p-4"
          >
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-400">P&L</div>
                <div className="text-2xl font-bold text-emerald-400">
                  {strategies[selectedStrategy].pnl}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Win Rate</div>
                <div className="text-2xl font-bold text-white">
                  {strategies[selectedStrategy].winRate}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Total Trades</div>
                <div className="text-2xl font-bold text-white">
                  {strategies[selectedStrategy].trades}
                </div>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="h-32 relative">
              <svg className="w-full h-full" viewBox="0 0 400 120">
                {/* Grid */}
                {[0, 1, 2, 3].map(i => (
                  <line
                    key={i}
                    x1="30"
                    y1={30 + i * 25}
                    x2="380"
                    y2={30 + i * 25}
                    stroke="#374151"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                  />
                ))}
                
                {/* Performance Curve */}
                <motion.path
                  d={`M 30 90 Q 100 85 150 70 T 250 60 Q 320 50 380 ${30 + selectedStrategy * 10}`}
                  stroke="#10b981"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5 }}
                />
                
                {/* Fill */}
                <motion.path
                  d={`M 30 90 Q 100 85 150 70 T 250 60 Q 320 50 380 ${30 + selectedStrategy * 10} L 380 105 L 30 105 Z`}
                  fill="url(#perfGradient)"
                  opacity="0.2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ delay: 0.5 }}
                />
                
                <defs>
                  <linearGradient id="perfGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Risk Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-black/20 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Sharpe Ratio</span>
                  <span className="text-sm font-bold text-indigo-400">
                    {strategies[selectedStrategy].sharpe}
                  </span>
                </div>
              </div>
              <div className="bg-black/20 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Max Drawdown</span>
                  <span className="text-sm font-bold text-orange-400">
                    {strategies[selectedStrategy].maxDD}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Recent Backtest Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/50 rounded-xl border border-gray-800 p-4"
        >
          <h5 className="text-sm font-semibold text-gray-300 mb-3">Recent Backtest Results</h5>
          <div className="space-y-2">
            {[
              { strategy: 'Volatility Arbitrage', period: '2019-2024', cagr: '24.3%', sharpe: '2.2', status: 'Ready' },
              { strategy: 'Options Spread', period: '2020-2024', cagr: '18.7%', sharpe: '1.9', status: 'Testing' },
              { strategy: 'Sector Rotation', period: '2018-2024', cagr: '21.5%', sharpe: '2.5', status: 'Ready' }
            ].map((test, i) => (
              <motion.div
                key={test.strategy}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center justify-between p-2 bg-black/20 rounded-lg"
              >
                <div>
                  <span className="text-sm font-semibold text-white">{test.strategy}</span>
                  <span className="text-xs text-gray-500 ml-2">{test.period}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-emerald-400">{test.cagr} CAGR</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    test.status === 'Ready' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {test.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  }

  const tabs = [
    {
      id: 'concept',
      label: 'Concept',
      icon: TestTube,
      content: <ConceptTab />
    },
    {
      id: 'features',
      label: 'Features',
      icon: Settings,
      content: <FeaturesTab />
    },
    {
      id: 'live',
      label: 'Live Demo',
      icon: PlayCircle,
      content: <LiveDemoTab />
    }
  ]

  return (
    <StandardSlideLayout
      title="Algorithmic Trading Laboratory"
      subtitle="Design, test, and deploy trading strategies with AI assistance"
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

export default AlgoTradingLab
