import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, BarChart3, Code2 } from 'lucide-react'

const AlgoTradingFeaturesSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Algo Trading Features</h1>
          <p className="text-xl text-gray-400 mb-6">Professional Quant Trading Made Simple</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Code2 className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl text-purple-400">Strategy Builder</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Natural language input</li>
              <li>• Visual strategy designer</li>
              <li>• Pre-built templates</li>
              <li>• Custom indicators</li>
              <li>• Multi-timeframe analysis</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <BarChart3 className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-xl text-green-400">Backtesting Suite</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• 10 years historical data</li>
              <li>• Tick-by-tick simulation</li>
              <li>• Transaction costs included</li>
              <li>• Slippage modeling</li>
              <li>• Performance analytics</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Shield className="w-6 h-6 text-red-400 mr-2" />
              <h3 className="text-xl text-red-400">Risk Controls</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Position sizing AI</li>
              <li>• Stop-loss automation</li>
              <li>• Drawdown limits</li>
              <li>• Correlation checks</li>
              <li>• Circuit breakers</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Zap className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-xl text-yellow-400">Live Trading</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• One-click deployment</li>
              <li>• Paper trading mode</li>
              <li>• Real-time monitoring</li>
              <li>• Auto-rebalancing</li>
              <li>• Performance tracking</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-purple-900/20 to-yellow-900/20 mt-4"
        >
          <h4 className="text-lg text-teal-400 mb-2">What You Get:</h4>
          <p className="text-sm">
            <span className="text-purple-400">No-code algo trading</span> with
            <span className="text-yellow-400 font-bold"> institutional-grade performance</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AlgoTradingFeaturesSlide