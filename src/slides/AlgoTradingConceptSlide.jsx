import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Cpu, BarChart3, Zap } from 'lucide-react'

const AlgoTradingConceptSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Chapter 6: Algo Trading Laboratory</h1>
          <p className="text-xl text-gray-400 mb-6">Natural Language to Trading Strategy</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glassmorphic-card mb-4"
        >
          <h3 className="text-xl text-teal-400 mb-3 text-center">From Words to Wealth</h3>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="text-2xl">💬</div>
              </div>
              <p className="text-sm font-semibold">Natural Language</p>
              <p className="text-xs text-gray-400">"Buy on RSI oversold"</p>
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-teal-400"
            >
              →
            </motion.div>
            <div className="text-center">
              <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Code2 className="w-7 h-7 text-purple-400" />
              </div>
              <p className="text-sm font-semibold">AI Translation</p>
              <p className="text-xs text-gray-400">Strategy code</p>
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              className="text-teal-400"
            >
              →
            </motion.div>
            <div className="text-center">
              <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="w-7 h-7 text-orange-400" />
              </div>
              <p className="text-sm font-semibold">Backtest</p>
              <p className="text-xs text-gray-400">5-year history</p>
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              className="text-teal-400"
            >
              →
            </motion.div>
            <div className="text-center">
              <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Zap className="w-7 h-7 text-green-400" />
              </div>
              <p className="text-sm font-semibold">Deploy</p>
              <p className="text-xs text-gray-400">Live trading</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Cpu className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-lg text-purple-400">122+ Indicators</h3>
            </div>
            <div className="grid grid-cols-2 gap-1 text-xs">
              <div>• RSI, MACD</div>
              <div>• Bollinger Bands</div>
              <div>• Moving Averages</div>
              <div>• Fibonacci</div>
              <div>• Volume Profile</div>
              <div>• Market Structure</div>
              <div>• Options Flow</div>
              <div>• Custom Indicators</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <BarChart3 className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-lg text-green-400">Optimization Engine</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Parameter Tuning:</span>
                <span className="text-green-400">AI-powered</span>
              </div>
              <div className="flex justify-between">
                <span>Walk-Forward:</span>
                <span className="text-blue-400">5 years</span>
              </div>
              <div className="flex justify-between">
                <span>Monte Carlo:</span>
                <span className="text-purple-400">1000 runs</span>
              </div>
              <div className="flex justify-between">
                <span>Risk Management:</span>
                <span className="text-orange-400">Built-in</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-purple-900/20 to-green-900/20 mt-4"
        >
          <h4 className="text-lg text-center mb-2">Sample Strategies Created</h4>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div className="text-center">
              <p className="text-blue-400 font-semibold">Mean Reversion</p>
              <p>Annual Return: 24.5%</p>
              <p className="text-gray-400">Sharpe: 1.8</p>
            </div>
            <div className="text-center">
              <p className="text-green-400 font-semibold">Momentum</p>
              <p>Annual Return: 31.2%</p>
              <p className="text-gray-400">Sharpe: 2.1</p>
            </div>
            <div className="text-center">
              <p className="text-purple-400 font-semibold">Arbitrage</p>
              <p>Annual Return: 18.7%</p>
              <p className="text-gray-400">Sharpe: 3.2</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AlgoTradingConceptSlide