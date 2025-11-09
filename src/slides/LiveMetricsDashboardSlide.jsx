import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, TrendingUp, Users, DollarSign, Globe, Shield, Clock, CheckCircle, BarChart3, Zap } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'

const LiveMetricsDashboardSlide = () => {
  const [animateMetrics, setAnimateMetrics] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 500)
    return () => clearTimeout(timer)
  }, [])
  
  // Sample data for charts
  const uptimeData = [
    { label: 'Mon', value: 99.98, displayValue: '99.98%' },
    { label: 'Tue', value: 99.99, displayValue: '99.99%' },
    { label: 'Wed', value: 100, displayValue: '100%' },
    { label: 'Thu', value: 99.97, displayValue: '99.97%' },
    { label: 'Fri', value: 100, displayValue: '100%' },
    { label: 'Sat', value: 99.98, displayValue: '99.98%' },
    { label: 'Sun', value: 100, displayValue: '100%' }
  ]
  
  const userActivityData = [
    { label: '6AM', value: 2500, displayValue: '2.5K' },
    { label: '9AM', value: 8200, displayValue: '8.2K' },
    { label: '12PM', value: 10247, displayValue: '10.2K' },
    { label: '3PM', value: 9800, displayValue: '9.8K' },
    { label: '6PM', value: 6500, displayValue: '6.5K' },
    { label: '9PM', value: 3200, displayValue: '3.2K' }
  ]
  
  const performanceData = [
    { label: 'Returns', value: 28.5, displayValue: '28.5%' },
    { label: 'Win Rate', value: 87, displayValue: '87%' },
    { label: 'Tax Saved', value: 95, displayValue: '95%' },
    { label: 'Accuracy', value: 99, displayValue: '99%' }
  ]
  
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Live Platform Metrics</h1>
          <p className="text-lg text-gray-400 mb-4">Real-time Performance Dashboard</p>
        </motion.div>

        {/* Top Status Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-6 gap-2 mb-4"
        >
          <div className="glassmorphic-card p-2 text-center">
            <Activity className="w-4 h-4 text-green-400 mx-auto mb-1 animate-pulse" />
            <div className="text-lg font-bold text-green-400">
              <AnimatedCounter end={99.97} decimals={2} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">Uptime</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Zap className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-yellow-400">
              <AnimatedCounter end={11} duration={1000} />ms
            </div>
            <p className="text-xs text-gray-400">Response</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Users className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-blue-400">
              <AnimatedCounter end={10247} duration={2000} />
            </div>
            <p className="text-xs text-gray-400">Active Users</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <BarChart3 className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-purple-400">
              <AnimatedCounter end={45892} duration={2500} />
            </div>
            <p className="text-xs text-gray-400">Daily Trades</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <DollarSign className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-green-400">
              ₹<AnimatedCounter end={2450} duration={2000} />Cr
            </div>
            <p className="text-xs text-gray-400">AUM</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Shield className="w-4 h-4 text-teal-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-teal-400">
              <AnimatedCounter end={1.2} decimals={1} duration={1500} />M
            </div>
            <p className="text-xs text-gray-400">Decisions/Day</p>
          </div>
        </motion.div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* Platform Health with Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-green-400 flex items-center">
                <Activity className="w-4 h-4 mr-2" />
                Platform Health
              </h3>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1"></div>
                <span className="text-xs text-green-400">Live</span>
              </div>
            </div>
            
            <LineChart data={uptimeData} height={80} animated={animateMetrics} />
            
            <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
              <div>
                <p className="text-gray-400">API Response:</p>
                <p className="text-green-400 font-bold">11ms avg</p>
              </div>
              <div>
                <p className="text-gray-400">Workflows:</p>
                <p className="text-blue-400 font-bold">127 active</p>
              </div>
            </div>
            
            {/* Status Indicators */}
            <div className="mt-3 flex justify-between">
              <CircularProgress value={99.97} size={30} strokeWidth={2} />
              <CircularProgress value={100} size={30} strokeWidth={2} />
              <CircularProgress value={95} size={30} strokeWidth={2} />
            </div>
          </motion.div>

          {/* User Activity with Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-blue-400 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                User Activity
              </h3>
              <span className="text-xs text-gray-400">Today</span>
            </div>
            
            <LineChart data={userActivityData} height={80} animated={animateMetrics} />
            
            <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
              <div>
                <p className="text-gray-400">Voice Commands:</p>
                <p className="text-orange-400 font-bold">127K today</p>
              </div>
              <div>
                <p className="text-gray-400">Peak Users:</p>
                <p className="text-blue-400 font-bold">10.2K @ 12PM</p>
              </div>
            </div>
            
            {/* Live Activity Pulse */}
            <div className="mt-3 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/40 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Performance Metrics with Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-purple-400 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Performance
              </h3>
              <span className="text-xs text-green-400">▲ +5.2%</span>
            </div>
            
            <BarChart data={performanceData} height={80} colorScheme="gradient" animated={animateMetrics} />
            
            <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
              <div>
                <p className="text-gray-400">Tax Saved/User:</p>
                <p className="text-green-400 font-bold">₹1.55L avg</p>
              </div>
              <div>
                <p className="text-gray-400">Algo Accuracy:</p>
                <p className="text-purple-400 font-bold">94.5%</p>
              </div>
            </div>
            
            {/* Performance Badge */}
            <div className="mt-3 text-center">
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                <CheckCircle className="w-3 h-3 text-green-400 mr-1" />
                <span className="text-xs text-green-400">All Systems Optimal</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Real-time Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="glassmorphic-card mt-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-teal-400 flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Global Operations
            </h3>
            <div className="flex space-x-4 text-xs">
              <span className="text-green-400">US: Active</span>
              <span className="text-green-400">India: Active</span>
              <span className="text-green-400">GIFT City: Active</span>
            </div>
          </div>
          
          {/* Animated Activity Stream */}
          <div className="grid grid-cols-4 gap-2 text-center">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xs"
            >
              <Clock className="w-4 h-4 text-blue-400 mx-auto mb-1" />
              <p className="text-gray-400">Last Trade</p>
              <p className="text-blue-400 font-bold">2s ago</p>
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="text-xs"
            >
              <Activity className="w-4 h-4 text-green-400 mx-auto mb-1" />
              <p className="text-gray-400">AI Decisions</p>
              <p className="text-green-400 font-bold">342/min</p>
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="text-xs"
            >
              <Shield className="w-4 h-4 text-purple-400 mx-auto mb-1" />
              <p className="text-gray-400">Security</p>
              <p className="text-purple-400 font-bold">100%</p>
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              className="text-xs"
            >
              <DollarSign className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
              <p className="text-gray-400">Volume</p>
              <p className="text-yellow-400 font-bold">₹450Cr</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.4 }}
          className="text-center mt-3"
        >
          <p className="text-xs text-gray-500">
            Live Dashboard: <span className="text-teal-400">app.voraventures.ai/metrics</span> | 
            <span className="text-green-400 ml-2">✓ Real-time Data</span> | 
            <span className="text-purple-400 ml-2">✓ 24/7 Monitoring</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default LiveMetricsDashboardSlide