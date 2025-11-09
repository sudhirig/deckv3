import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, TrendingUp, Activity, BarChart3, DollarSign, Percent, Clock, CheckCircle } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'

const AlgoTradingLiveSnapshotSlide = () => {
  const [animateMetrics, setAnimateMetrics] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 500)
    return () => clearTimeout(timer)
  }, [])
  
  // Sample data for charts
  const performanceData = [
    { label: 'Jan', value: 100, displayValue: '100' },
    { label: 'Feb', value: 112, displayValue: '112' },
    { label: 'Mar', value: 108, displayValue: '108' },
    { label: 'Apr', value: 125, displayValue: '125' },
    { label: 'May', value: 139, displayValue: '139' },
    { label: 'Jun', value: 147, displayValue: '147' }
  ]
  
  const strategyData = [
    { label: 'RSI', value: 68, displayValue: '68%' },
    { label: 'MA Cross', value: 72, displayValue: '72%' },
    { label: 'Bollinger', value: 65, displayValue: '65%' },
    { label: 'MACD', value: 71, displayValue: '71%' }
  ]
  
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Algo Trading Laboratory</h1>
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-5 h-5 text-red-500 mr-2 animate-pulse" />
            <p className="text-sm text-gray-400">Live Platform Dashboard</p>
          </div>
        </motion.div>

        {/* Top Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-6 gap-2 mb-4"
        >
          <div className="glassmorphic-card p-2 text-center">
            <DollarSign className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-green-400">
              +<AnimatedCounter end={147} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">Total Return</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <TrendingUp className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-blue-400">
              <AnimatedCounter end={1.92} decimals={2} duration={1500} />
            </div>
            <p className="text-xs text-gray-400">Sharpe Ratio</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Percent className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-purple-400">
              <AnimatedCounter end={68} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">Win Rate</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Activity className="w-4 h-4 text-teal-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-teal-400">
              <AnimatedCounter end={122} duration={1500} />+
            </div>
            <p className="text-xs text-gray-400">Indicators</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Clock className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-yellow-400">
              <AnimatedCounter end={24} duration={1500} />ms
            </div>
            <p className="text-xs text-gray-400">Execution</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <CheckCircle className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-green-400">
              <AnimatedCounter end={100} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">Uptime</p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Side - Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <h3 className="text-lg text-purple-400 mb-3 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Portfolio Performance
            </h3>
            <LineChart data={performanceData} height={120} animated={animateMetrics} />
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Annual Return:</span>
                <span className="text-green-400 font-bold">19.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Max Drawdown:</span>
                <span className="text-yellow-400 font-bold">-12.4%</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Strategy Performance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <h3 className="text-lg text-teal-400 mb-3 flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Strategy Win Rates
            </h3>
            <BarChart data={strategyData} height={120} colorScheme="gradient" animated={animateMetrics} />
            <div className="mt-3 text-xs text-center text-gray-400">
              Average Win Rate: <span className="text-teal-400 font-bold">69%</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Natural Language to Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="glassmorphic-card mt-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20"
        >
          <h3 className="text-sm text-purple-400 mb-2">Natural Language Strategy Builder</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-gray-400 mb-1">Input:</p>
              <div className="bg-black/50 p-2 rounded text-xs font-mono text-blue-300">
                "Buy when RSI &lt; 30 and above 200-day moving average"
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">AI Generated Code:</p>
              <div className="bg-black/50 p-2 rounded text-xs font-mono text-green-400">
                if indicators.rsi &lt; 30 and price &gt; indicators.sma_200:<br />
                &nbsp;&nbsp;execute_trade('BUY', position_size=0.02)
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="text-center mt-2"
        >
          <p className="text-xs text-gray-500">
            Live Platform: <span className="text-teal-400">app.voraventures.ai/algo-lab</span> | 
            <span className="text-green-400 ml-2">✓ No coding required</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AlgoTradingLiveSnapshotSlide