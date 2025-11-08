import React from 'react'
import { motion } from 'framer-motion'
import { Award, TrendingUp, Clock, BarChart3 } from 'lucide-react'

const TradingAgentsFeaturesSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Trading Agents Features</h1>
          <p className="text-xl text-gray-400 mb-6">World's Best Investment Minds Combined</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Award className="w-6 h-6 text-gold-400 mr-2" />
              <h3 className="text-xl text-gold-400">Investment Styles</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Value Investing:</span>
                <span className="text-blue-400">5 experts</span>
              </div>
              <div className="flex justify-between">
                <span>Growth Investing:</span>
                <span className="text-green-400">6 experts</span>
              </div>
              <div className="flex justify-between">
                <span>Quantitative:</span>
                <span className="text-purple-400">4 experts</span>
              </div>
              <div className="flex justify-between">
                <span>Macro/Technical:</span>
                <span className="text-orange-400">8 experts</span>
              </div>
              <div className="flex justify-between">
                <span>Special Situations:</span>
                <span className="text-red-400">7 experts</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-xl text-green-400">Performance Metrics</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Avg Annual Return:</span>
                <span className="text-green-400 font-bold">28.5%</span>
              </div>
              <div className="flex justify-between">
                <span>Sharpe Ratio:</span>
                <span className="text-green-400 font-bold">2.1</span>
              </div>
              <div className="flex justify-between">
                <span>Max Drawdown:</span>
                <span className="text-yellow-400 font-bold">-12%</span>
              </div>
              <div className="flex justify-between">
                <span>Win Rate:</span>
                <span className="text-green-400 font-bold">87%</span>
              </div>
              <div className="flex justify-between">
                <span>Alpha Generated:</span>
                <span className="text-teal-400 font-bold">+15.2%</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Clock className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl text-blue-400">Speed & Coverage</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• 35-second complete analysis</li>
              <li>• 500+ stocks covered</li>
              <li>• Real-time market data</li>
              <li>• Global markets access</li>
              <li>• 24/7 availability</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <BarChart3 className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl text-purple-400">Decision Process</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Fundamental analysis</li>
              <li>• Technical indicators</li>
              <li>• Sentiment scoring</li>
              <li>• Risk assessment</li>
              <li>• Consensus building</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-gold-900/20 to-green-900/20 mt-4"
        >
          <h4 className="text-lg text-teal-400 mb-2">What You Get:</h4>
          <p className="text-sm">
            <span className="text-gold-400">30 legendary investors</span> analyzing every trade for
            <span className="text-green-400 font-bold"> consistent outperformance</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default TradingAgentsFeaturesSlide