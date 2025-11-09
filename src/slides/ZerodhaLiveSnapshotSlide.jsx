import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Activity, TrendingUp, Bot, Mic, Globe, Clock, CheckCircle, DollarSign, Percent } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'

const ZerodhaLiveSnapshotSlide = () => {
  const [animateMetrics, setAnimateMetrics] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 500)
    return () => clearTimeout(timer)
  }, [])
  
  // Sample data for charts
  const performanceData = [
    { label: '9AM', value: 0, displayValue: '0' },
    { label: '10AM', value: 4500, displayValue: '4.5K' },
    { label: '11AM', value: 7200, displayValue: '7.2K' },
    { label: '12PM', value: 8900, displayValue: '8.9K' },
    { label: '1PM', value: 10200, displayValue: '10.2K' },
    { label: '2PM', value: 12450, displayValue: '12.4K' }
  ]
  
  const languageData = [
    { label: 'Hindi', value: 45, displayValue: '45%' },
    { label: 'English', value: 35, displayValue: '35%' },
    { label: 'Gujarati', value: 20, displayValue: '20%' }
  ]
  
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Zerodha Voice Trading Platform</h1>
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-5 h-5 text-red-500 mr-2 animate-pulse" />
            <p className="text-sm text-gray-400">Live Dashboard - Real Trading Session</p>
          </div>
        </motion.div>

        {/* Top Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-6 gap-2 mb-4"
        >
          <div className="glassmorphic-card p-2 text-center">
            <Mic className="w-4 h-4 text-orange-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-orange-400">
              <AnimatedCounter end={3} duration={1000} />
            </div>
            <p className="text-xs text-gray-400">Languages</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Clock className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-purple-400">
              <AnimatedCounter end={11} duration={1500} />ms
            </div>
            <p className="text-xs text-gray-400">Latency</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <TrendingUp className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-green-400">
              ₹<AnimatedCounter end={12.4} decimals={1} duration={1500} />K
            </div>
            <p className="text-xs text-gray-400">Today P&L</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Activity className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-blue-400">
              <AnimatedCounter end={23} duration={1500} />
            </div>
            <p className="text-xs text-gray-400">Trades</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Percent className="w-4 h-4 text-teal-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-teal-400">
              <AnimatedCounter end={87} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">Win Rate</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <CheckCircle className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-green-400">
              <AnimatedCounter end={100} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">Accuracy</p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Side - Live Voice Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glassmorphic-card bg-gradient-to-br from-gray-900/50 to-gray-800/50"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-purple-400 flex items-center">
                <Bot className="w-4 h-4 mr-2" />
                ARIA Voice Assistant
              </h3>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-xs text-green-400">Live</span>
              </div>
            </div>
            
            {/* Voice Commands Log */}
            <div className="bg-black/50 rounded p-2 space-y-2 text-xs font-mono mb-3">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-orange-300"
              >
                🎤 "रिलायंस के 100 शेयर खरीदो"
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-purple-300"
              >
                🤖 Processing Hindi command...
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-green-300"
              >
                ✅ BUY 100 RELIANCE @ ₹2,456
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-yellow-300"
              >
                ⏱️ Execution: 11ms
              </motion.div>
            </div>
            
            {/* Language Distribution */}
            <div>
              <p className="text-xs text-gray-400 mb-2">Language Usage Today</p>
              <BarChart data={languageData} height={80} colorScheme="gradient" animated={animateMetrics} />
            </div>
          </motion.div>

          {/* Right Side - Performance Charts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <h3 className="text-sm font-semibold text-teal-400 mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Today's P&L Performance
            </h3>
            <LineChart data={performanceData} height={100} animated={animateMetrics} />
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Best Trade:</span>
                <span className="text-green-400">+₹3,450</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Time:</span>
                <span className="text-purple-400">11ms</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="grid grid-cols-4 gap-2 mt-4"
        >
          <div className="glassmorphic-card p-2 text-center">
            <Globe className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <p className="text-xs font-semibold">Multi-Language</p>
            <p className="text-xs text-gray-400">Hindi, English, Gujarati</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Activity className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <p className="text-xs font-semibold">Real-time Analysis</p>
            <p className="text-xs text-gray-400">Technical + Sentiment</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <CheckCircle className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <p className="text-xs font-semibold">100% Accurate</p>
            <p className="text-xs text-gray-400">Voice Recognition</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Clock className="w-4 h-4 text-orange-400 mx-auto mb-1" />
            <p className="text-xs font-semibold">Ultra-Low Latency</p>
            <p className="text-xs text-gray-400">11ms Response</p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.4 }}
          className="text-center mt-3"
        >
          <p className="text-xs text-gray-500">
            Live Platform: <span className="text-teal-400">app.voraventures.ai/voice-trading</span> | 
            <span className="text-green-400 ml-2">✓ Production Ready</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ZerodhaLiveSnapshotSlide