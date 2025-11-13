import React from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout,
  TabInterface,
  MetricsBar,
  FeatureGrid
} from '../../components/design-system'
import { 
  TrendingUp, Activity, Brain, Target, Zap, BarChart3,
  LineChart, Shield, DollarSign, CheckCircle
} from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * ZerodhaIntelligence - Product showcase with 3 tabs
 * Tab 1: Concept - Trading intelligence overview
 * Tab 2: Features - 200+ indicators, pattern recognition
 * Tab 3: Live Demo - ₹15.7L alpha, 73% win rate
 */
const ZerodhaIntelligence = () => {
  const metrics = [
    { icon: 'DollarSign', value: '₹15.7L', label: 'Annual Alpha', color: 'emerald' },
    { icon: 'Target', value: '73%', label: 'Win Rate', color: 'green' },
    { icon: 'Activity', value: '200+', label: 'Indicators', color: 'teal' },
    { icon: 'Zap', value: '11ms', label: 'Execution', color: 'cyan' }
  ]

  // Tab 1: Concept Content
  const ConceptTab = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
            <Brain size={32} className="text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white">AI-Powered Trading Intelligence</h3>
            <p className="text-gray-400">Seamlessly integrated with Zerodha Kite</p>
          </div>
        </div>
      </motion.div>

      {/* Integration Architecture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30 p-6"
      >
        <h4 className="text-lg font-semibold text-purple-400 mb-4">How It Works</h4>
        
        <div className="relative">
          {/* Flow Diagram */}
          <svg className="w-full" height="200" viewBox="0 0 600 200">
            {/* Zerodha Box */}
            <rect x="20" y="60" width="120" height="80" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" rx="8" />
            <text x="80" y="95" fill="#e2e8f0" fontSize="14" textAnchor="middle" fontWeight="bold">Zerodha</text>
            <text x="80" y="115" fill="#94a3b8" fontSize="12" textAnchor="middle">Kite API</text>
            
            {/* Arrow 1 */}
            <motion.path
              d="M 140 100 L 230 100"
              stroke="#8b5cf6"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            {/* ARIA Intelligence */}
            <rect x="230" y="50" width="140" height="100" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" rx="8" />
            <text x="300" y="85" fill="#14b8a6" fontSize="16" textAnchor="middle" fontWeight="bold">ARIA Intel</text>
            <text x="300" y="105" fill="#94a3b8" fontSize="11" textAnchor="middle">Pattern Analysis</text>
            <text x="300" y="120" fill="#94a3b8" fontSize="11" textAnchor="middle">Risk Assessment</text>
            <text x="300" y="135" fill="#94a3b8" fontSize="11" textAnchor="middle">Alpha Discovery</text>
            
            {/* Arrow 2 */}
            <motion.path
              d="M 370 100 L 460 100"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead2)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
            
            {/* Execution */}
            <rect x="460" y="60" width="120" height="80" fill="#1e293b" stroke="#10b981" strokeWidth="2" rx="8" />
            <text x="520" y="95" fill="#10b981" fontSize="14" textAnchor="middle" fontWeight="bold">Execution</text>
            <text x="520" y="115" fill="#94a3b8" fontSize="12" textAnchor="middle">Auto-trades</text>
            
            {/* Arrow markers */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
              </marker>
              <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
              </marker>
            </defs>
            
            {/* Data flow dots */}
            <motion.circle
              r="3"
              fill="#8b5cf6"
              animate={{ cx: [140, 230], cy: [100, 100] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle
              r="3"
              fill="#10b981"
              animate={{ cx: [370, 460], cy: [100, 100] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">Real-time</div>
            <div className="text-sm text-gray-400">Market data sync</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-400">Intelligent</div>
            <div className="text-sm text-gray-400">AI-driven decisions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">Automated</div>
            <div className="text-sm text-gray-400">Hands-free execution</div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  // Tab 2: Features Content
  const FeaturesTab = () => {
    const features = [
      {
        icon: BarChart3,
        title: '200+ Technical Indicators',
        description: 'Comprehensive analysis toolkit',
        stats: 'RSI, MACD, Bollinger, Ichimoku',
        color: 'purple'
      },
      {
        icon: Brain,
        title: 'Pattern Recognition AI',
        description: 'Identifies profitable setups',
        stats: '47 patterns, 82% accuracy',
        color: 'blue'
      },
      {
        icon: Activity,
        title: 'Multi-Timeframe Analysis',
        description: '1min to monthly charts',
        stats: 'Synchronized across 9 timeframes',
        color: 'teal'
      },
      {
        icon: Target,
        title: 'Smart Entry/Exit',
        description: 'Optimal position timing',
        stats: 'Risk:Reward optimized',
        color: 'emerald'
      },
      {
        icon: Shield,
        title: 'Risk Management',
        description: 'Automated stop-loss',
        stats: 'Position sizing algorithms',
        color: 'orange'
      },
      {
        icon: Zap,
        title: 'Lightning Execution',
        description: 'Sub-second order placement',
        stats: '11ms average latency',
        color: 'yellow'
      }
    ]

    return (
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Feature Grid */}
          <div className="grid grid-cols-3 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const colorMap = {
                purple: 'from-purple-500 to-pink-500',
                blue: 'from-blue-500 to-cyan-500',
                teal: 'from-teal-500 to-emerald-500',
                emerald: 'from-emerald-500 to-green-500',
                orange: 'from-orange-500 to-red-500',
                yellow: 'from-yellow-500 to-amber-500'
              }

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-4 relative overflow-hidden"
                >
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colorMap[feature.color]}`} />
                  
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${colorMap[feature.color]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-400 mb-2">{feature.description}</p>
                      <div className="text-xs text-gray-300 font-mono">{feature.stats}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Indicator Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30"
          >
            <h4 className="text-lg font-semibold text-purple-400 mb-4">Indicator Suite Preview</h4>
            
            <div className="grid grid-cols-4 gap-3">
              {['TREND', 'MOMENTUM', 'VOLUME', 'VOLATILITY'].map((category) => (
                <div key={category} className="text-center">
                  <div className="text-xs font-semibold text-gray-400 mb-2">{category}</div>
                  <div className="space-y-1">
                    {['█', '█', '█'].map((_, i) => (
                      <div
                        key={i}
                        className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ opacity: 1 - i * 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  // Tab 3: Live Demo Content
  const LiveDemoTab = () => (
    <div className="space-y-6">
      {/* Performance Dashboard */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/30 p-6"
      >
        <h4 className="text-xl font-bold text-emerald-400 mb-4">Live Performance Metrics</h4>
        
        <div className="grid grid-cols-4 gap-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 rounded-xl p-4 text-center"
          >
            <div className="text-3xl font-bold text-emerald-400">₹15.7L</div>
            <div className="text-sm text-gray-400">Annual Alpha</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 rounded-xl p-4 text-center"
          >
            <div className="text-3xl font-bold text-green-400">73%</div>
            <div className="text-sm text-gray-400">Win Rate</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 rounded-xl p-4 text-center"
          >
            <div className="text-3xl font-bold text-teal-400">2.4</div>
            <div className="text-sm text-gray-400">Sharpe Ratio</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 rounded-xl p-4 text-center"
          >
            <div className="text-3xl font-bold text-cyan-400">847</div>
            <div className="text-sm text-gray-400">Total Trades</div>
          </motion.div>
        </div>

        {/* P&L Chart */}
        <div className="bg-black/20 rounded-xl p-4">
          <h5 className="text-sm font-semibold text-gray-400 mb-3">Cumulative P&L (Last 6 Months)</h5>
          <svg className="w-full" height="150" viewBox="0 0 500 150">
            {/* Grid */}
            {[0, 1, 2, 3, 4].map(i => (
              <line
                key={i}
                x1="40"
                y1={30 + i * 25}
                x2="480"
                y2={30 + i * 25}
                stroke="#374151"
                strokeWidth="0.5"
                strokeDasharray="2,2"
              />
            ))}
            
            {/* P&L Curve */}
            <motion.path
              d="M 40 120 Q 100 110 150 95 T 250 80 Q 350 60 480 30"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
            
            {/* Fill area */}
            <motion.path
              d="M 40 120 Q 100 110 150 95 T 250 80 Q 350 60 480 30 L 480 130 L 40 130 Z"
              fill="url(#gradient)"
              opacity="0.2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 1 }}
            />
            
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Labels */}
            <text x="40" y="145" fill="#9ca3af" fontSize="10">Jan</text>
            <text x="120" y="145" fill="#9ca3af" fontSize="10">Feb</text>
            <text x="200" y="145" fill="#9ca3af" fontSize="10">Mar</text>
            <text x="280" y="145" fill="#9ca3af" fontSize="10">Apr</text>
            <text x="360" y="145" fill="#9ca3af" fontSize="10">May</text>
            <text x="440" y="145" fill="#9ca3af" fontSize="10">Jun</text>
            
            {/* Current Value */}
            <circle cx="480" cy="30" r="5" fill="#10b981" />
            <text x="460" y="20" fill="#10b981" fontSize="12" fontWeight="bold">₹15.7L</text>
          </svg>
        </div>
      </motion.div>

      {/* Recent Trades */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-900/50 rounded-xl border border-gray-800 p-4"
      >
        <h5 className="text-sm font-semibold text-gray-300 mb-3">Recent Successful Trades</h5>
        <div className="space-y-2">
          {[
            { stock: 'RELIANCE', entry: '2,451', exit: '2,587', profit: '₹68,000', gain: '+5.5%' },
            { stock: 'TCS', entry: '3,234', exit: '3,412', profit: '₹44,500', gain: '+5.5%' },
            { stock: 'INFY', entry: '1,456', exit: '1,523', profit: '₹33,500', gain: '+4.6%' }
          ].map((trade, i) => (
            <motion.div
              key={trade.stock}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center justify-between p-2 bg-black/20 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="text-emerald-400" size={16} />
                <span className="font-semibold text-white">{trade.stock}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-400">₹{trade.entry}</span>
                <span className="text-gray-500">→</span>
                <span className="text-gray-400">₹{trade.exit}</span>
                <span className="text-emerald-400 font-semibold">{trade.gain}</span>
              </div>
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
      icon: Brain,
      content: <ConceptTab />
    },
    {
      id: 'features',
      label: 'Features',
      icon: Activity,
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
      title="Zerodha Intelligence Module"
      subtitle="AI-powered trading that delivers ₹15.7L annual alpha per client"
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

export default ZerodhaIntelligence
