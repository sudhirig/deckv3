import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout,
  TabInterface,
  MetricsBar
} from '../../components/design-system'
import { 
  Zap, Activity, Target, Network, Clock,
  TrendingUp, GitBranch, AlertTriangle, CheckCircle
} from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * TradingExecution - High-speed trading execution engine
 * Tab 1: Concept - Multi-venue routing and execution
 * Tab 2: Features - Smart order routing, slippage minimization
 * Tab 3: Live Demo - 11ms execution proof with analytics
 */
const TradingExecution = () => {
  const [executionTime, setExecutionTime] = useState(0)
  const [orderFlow, setOrderFlow] = useState([])
  
  useEffect(() => {
    // Animate execution timer
    const timer = setInterval(() => {
      setExecutionTime(prev => {
        if (prev >= 11) return 0
        return prev + 1
      })
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const metrics = [
    { icon: 'Zap', value: '11ms', label: 'Avg Execution', color: 'yellow' },
    { icon: 'Target', value: '99.8%', label: 'Fill Rate', color: 'emerald' },
    { icon: 'Activity', value: '0.02%', label: 'Avg Slippage', color: 'green' },
    { icon: 'Network', value: '15+', label: 'Venues', color: 'blue' }
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
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
            <Zap size={32} className="text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white">Lightning-Fast Execution Engine</h3>
            <p className="text-gray-400">11ms average latency across 15+ trading venues</p>
          </div>
        </div>
      </motion.div>

      {/* Multi-Venue Routing Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/30 p-6"
      >
        <h4 className="text-lg font-semibold text-yellow-400 mb-4">Smart Order Routing System</h4>
        
        {/* Routing Diagram */}
        <div className="relative h-64">
          <svg className="w-full h-full" viewBox="0 0 500 250">
            {/* Central ARIA Engine */}
            <rect x="200" y="100" width="100" height="50" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="8" />
            <text x="250" y="130" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
              ARIA Engine
            </text>
            
            {/* Trading Venues */}
            {[
              { name: 'NSE', x: 50, y: 30 },
              { name: 'BSE', x: 50, y: 100 },
              { name: 'MCX', x: 50, y: 170 },
              { name: 'NASDAQ', x: 450, y: 30 },
              { name: 'NYSE', x: 450, y: 100 },
              { name: 'CME', x: 450, y: 170 }
            ].map((venue, i) => (
              <React.Fragment key={venue.name}>
                <rect
                  x={venue.x - 30}
                  y={venue.y - 15}
                  width="60"
                  height="30"
                  fill="#1e293b"
                  stroke="#3b82f6"
                  strokeWidth="1"
                  rx="4"
                />
                <text x={venue.x} y={venue.y + 3} fill="#3b82f6" fontSize="12" textAnchor="middle">
                  {venue.name}
                </text>
                
                {/* Connection Lines */}
                <motion.line
                  x1={venue.x < 250 ? venue.x + 30 : venue.x - 30}
                  y1={venue.y}
                  x2={venue.x < 250 ? 200 : 300}
                  y2="125"
                  stroke="#f59e0b"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  opacity="0.5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values={venue.x < 250 ? "10;0" : "0;10"}
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </motion.line>
                
                {/* Data Flow Particles */}
                <motion.circle
                  r="2"
                  fill="#f59e0b"
                  initial={{ 
                    cx: venue.x < 250 ? venue.x + 30 : venue.x - 30,
                    cy: venue.y
                  }}
                  animate={{ 
                    cx: venue.x < 250 ? [venue.x + 30, 200] : [venue.x - 30, 300],
                    cy: [venue.y, 125]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                />
              </React.Fragment>
            ))}
            
            {/* Speed Indicator */}
            <text x="250" y="200" fill="#f59e0b" fontSize="24" textAnchor="middle" fontWeight="bold">
              ⚡ 11ms
            </text>
            <text x="250" y="220" fill="#94a3b8" fontSize="12" textAnchor="middle">
              Average Execution Time
            </text>
          </svg>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-black/30 rounded-xl p-3 text-center">
            <GitBranch className="mx-auto mb-2 text-yellow-400" size={24} />
            <div className="text-sm font-semibold text-yellow-400">Multi-Venue</div>
            <div className="text-xs text-gray-400">15+ exchanges</div>
          </div>
          <div className="bg-black/30 rounded-xl p-3 text-center">
            <Target className="mx-auto mb-2 text-orange-400" size={24} />
            <div className="text-sm font-semibold text-orange-400">Smart Routing</div>
            <div className="text-xs text-gray-400">Best price discovery</div>
          </div>
          <div className="bg-black/30 rounded-xl p-3 text-center">
            <Clock className="mx-auto mb-2 text-amber-400" size={24} />
            <div className="text-sm font-semibold text-amber-400">Low Latency</div>
            <div className="text-xs text-gray-400">Sub-millisecond</div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  // Tab 2: Features
  const FeaturesTab = () => {
    const features = [
      {
        category: 'Execution Capabilities',
        items: [
          { name: 'Market Orders', desc: 'Instant execution at best price' },
          { name: 'Limit Orders', desc: 'Price-controlled execution' },
          { name: 'Iceberg Orders', desc: 'Hidden volume strategies' },
          { name: 'TWAP/VWAP', desc: 'Time/Volume weighted average' }
        ],
        color: 'yellow'
      },
      {
        category: 'Smart Routing',
        items: [
          { name: 'Best Price Discovery', desc: 'Scan all venues simultaneously' },
          { name: 'Liquidity Aggregation', desc: 'Combine multiple sources' },
          { name: 'Dark Pool Access', desc: 'Hidden liquidity venues' },
          { name: 'Cost Analysis', desc: 'Factor in all fees & rebates' }
        ],
        color: 'orange'
      },
      {
        category: 'Risk Controls',
        items: [
          { name: 'Pre-Trade Checks', desc: 'Validate before sending' },
          { name: 'Position Limits', desc: 'Automatic enforcement' },
          { name: 'Fat Finger Protection', desc: 'Prevent erroneous orders' },
          { name: 'Kill Switch', desc: 'Emergency stop capability' }
        ],
        color: 'red'
      },
      {
        category: 'Analytics',
        items: [
          { name: 'TCA Reports', desc: 'Transaction cost analysis' },
          { name: 'Slippage Tracking', desc: 'Real-time monitoring' },
          { name: 'Venue Performance', desc: 'Execution quality metrics' },
          { name: 'Best Execution', desc: 'Regulatory compliance' }
        ],
        color: 'amber'
      }
    ]

    return (
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => {
          const colorMap = {
            yellow: 'from-yellow-500/10 to-orange-500/10',
            orange: 'from-orange-500/10 to-red-500/10',
            red: 'from-red-500/10 to-pink-500/10',
            amber: 'from-amber-500/10 to-yellow-500/10'
          }
          const borderMap = {
            yellow: 'border-yellow-500/30',
            orange: 'border-orange-500/30',
            red: 'border-red-500/30',
            amber: 'border-amber-500/30'
          }
          const textMap = {
            yellow: 'text-yellow-400',
            orange: 'text-orange-400',
            red: 'text-red-400',
            amber: 'text-amber-400'
          }

          return (
            <motion.div
              key={feature.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className={`bg-gradient-to-br ${colorMap[feature.color]} rounded-xl border ${borderMap[feature.color]} p-4`}
            >
              <h4 className={`text-md font-semibold ${textMap[feature.color]} mb-3`}>
                {feature.category}
              </h4>
              
              <div className="space-y-2">
                {feature.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.15 + i * 0.05 }}
                    className="bg-black/20 rounded-lg p-2"
                  >
                    <div className="text-xs font-semibold text-white">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500">
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
  const LiveDemoTab = () => {
    const [selectedOrder, setSelectedOrder] = useState(0)
    
    const recentOrders = [
      {
        symbol: 'RELIANCE',
        qty: 500,
        type: 'BUY',
        venues: ['NSE', 'BSE'],
        fillTime: '9ms',
        avgPrice: '2,451.25',
        slippage: '0.01%',
        status: 'FILLED'
      },
      {
        symbol: 'TCS',
        qty: 200,
        type: 'SELL',
        venues: ['NSE'],
        fillTime: '11ms',
        avgPrice: '3,412.50',
        slippage: '0.02%',
        status: 'FILLED'
      },
      {
        symbol: 'INFY',
        qty: 1000,
        type: 'BUY',
        venues: ['NSE', 'BSE', 'CHI-X'],
        fillTime: '13ms',
        avgPrice: '1,456.75',
        slippage: '0.03%',
        status: 'FILLED'
      }
    ]

    return (
      <div className="space-y-6">
        {/* Live Execution Monitor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/30 p-6"
        >
          <h4 className="text-xl font-bold text-yellow-400 mb-4">Live Execution Monitor</h4>
          
          {/* Execution Timer */}
          <div className="bg-black/30 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Current Execution</span>
              <span className="text-xs text-emerald-400">● LIVE</span>
            </div>
            
            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                style={{ width: `${(executionTime / 11) * 100}%` }}
              />
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <span className="text-3xl font-bold text-yellow-400">{executionTime}ms</span>
              <span className="text-sm text-gray-400">Target: 11ms</span>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="space-y-2">
            <div className="text-sm font-semibold text-gray-400 mb-2">Recent Executions</div>
            {recentOrders.map((order, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedOrder(i)}
                className={`p-3 rounded-lg cursor-pointer transition-all ${
                  selectedOrder === i ? 'bg-yellow-500/20 border border-yellow-500/30' : 'bg-black/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-bold ${order.type === 'BUY' ? 'text-emerald-400' : 'text-red-400'}`}>
                      {order.type}
                    </span>
                    <span className="text-sm font-semibold text-white">{order.symbol}</span>
                    <span className="text-sm text-gray-400">×{order.qty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="text-yellow-400" size={14} />
                    <span className="text-sm font-bold text-yellow-400">{order.fillTime}</span>
                  </div>
                </div>
                
                {selectedOrder === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pt-2 border-t border-gray-800"
                  >
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-gray-500">Avg Price</span>
                        <div className="text-white">₹{order.avgPrice}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Slippage</span>
                        <div className="text-emerald-400">{order.slippage}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Venues</span>
                        <div className="text-white">{order.venues.join(', ')}</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Execution Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/50 rounded-xl border border-gray-800 p-4"
        >
          <h5 className="text-sm font-semibold text-gray-300 mb-3">Today's Performance</h5>
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Orders', value: '1,847', change: '+12%' },
              { label: 'Avg Speed', value: '11.2ms', change: '-0.8ms' },
              { label: 'Fill Rate', value: '99.8%', change: '+0.1%' },
              { label: 'Saved', value: '₹3.2L', change: 'Slippage' }
            ].map((stat) => (
              <div key={stat.label} className="bg-black/30 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
                <div className="text-xs text-emerald-400">{stat.change}</div>
              </div>
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
      icon: Zap,
      content: <ConceptTab />
    },
    {
      id: 'features',
      label: 'Features',
      icon: Network,
      content: <FeaturesTab />
    },
    {
      id: 'live',
      label: 'Live Demo',
      icon: Activity,
      content: <LiveDemoTab />
    }
  ]

  return (
    <StandardSlideLayout
      title="Trading Execution Engine"
      subtitle="Lightning-fast multi-venue execution with 11ms average latency"
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

export default TradingExecution
