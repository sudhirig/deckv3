import React from 'react'
import { motion } from 'framer-motion'
import { Activity, TrendingUp, Users, DollarSign } from 'lucide-react'

const LiveMetricsDashboardSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-5xl mb-2">Live Platform Metrics</h1>
          <p className="text-xl text-gray-400 mb-6">Real-time Performance Dashboard</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {/* Platform Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Activity className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl text-green-400">Platform Health</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>System Uptime:</span>
                <span className="text-green-400 font-bold">99.97%</span>
              </div>
              <div className="flex justify-between">
                <span>API Response:</span>
                <span className="text-green-400 font-bold">11ms</span>
              </div>
              <div className="flex justify-between">
                <span>Active Workflows:</span>
                <span className="text-blue-400 font-bold">127</span>
              </div>
              <div className="flex justify-between">
                <span>Daily Decisions:</span>
                <span className="text-purple-400 font-bold">1.2M+</span>
              </div>
            </div>
          </motion.div>

          {/* User Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl text-blue-400">User Activity</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Active Users:</span>
                <span className="text-blue-400 font-bold">10,247</span>
              </div>
              <div className="flex justify-between">
                <span>Daily Trades:</span>
                <span className="text-green-400 font-bold">45,892</span>
              </div>
              <div className="flex justify-between">
                <span>Voice Commands:</span>
                <span className="text-orange-400 font-bold">127K</span>
              </div>
              <div className="flex justify-between">
                <span>Portfolios Managed:</span>
                <span className="text-purple-400 font-bold">₹2,450 Cr</span>
              </div>
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl text-purple-400">Performance</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Avg Returns:</span>
                <span className="text-green-400 font-bold">+28.5%</span>
              </div>
              <div className="flex justify-between">
                <span>Win Rate:</span>
                <span className="text-green-400 font-bold">87%</span>
              </div>
              <div className="flex justify-between">
                <span>Tax Saved/User:</span>
                <span className="text-teal-400 font-bold">₹1.55L</span>
              </div>
              <div className="flex justify-between">
                <span>Alpha Generated:</span>
                <span className="text-purple-400 font-bold">+600%</span>
              </div>
            </div>
          </motion.div>

          {/* Revenue Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <DollarSign className="w-8 h-8 text-gold-400 mr-3" />
              <h3 className="text-2xl text-gold-400">Business Metrics</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>MRR:</span>
                <span className="text-gold-400 font-bold">$450K</span>
              </div>
              <div className="flex justify-between">
                <span>ARR Run Rate:</span>
                <span className="text-gold-400 font-bold">$5.4M</span>
              </div>
              <div className="flex justify-between">
                <span>Growth Rate:</span>
                <span className="text-green-400 font-bold">23% MoM</span>
              </div>
              <div className="flex justify-between">
                <span>NPS Score:</span>
                <span className="text-teal-400 font-bold">72</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-green-900/20 to-purple-900/20 mt-4"
        >
          <h4 className="text-lg text-teal-400 mb-2">Live Activity Feed</h4>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <p className="text-green-400">• User #4821: Executed TCS buy order via voice</p>
              <p className="text-blue-400">• AI Committee: Analyzed 30 stocks in 35 seconds</p>
              <p className="text-purple-400">• CGMF: Optimized portfolio, saved ₹45K in taxes</p>
            </div>
            <div className="space-y-1">
              <p className="text-orange-400">• Algo Lab: Deployed new momentum strategy</p>
              <p className="text-teal-400">• Sentiment: Heat map refreshed, 62% bullish</p>
              <p className="text-yellow-400">• System: All services operational, 11ms latency</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-center mt-4"
        >
          <p className="text-lg text-gray-400">
            Live at: <span className="gradient-text font-bold">app.voraventures.ai</span> | 
            <span className="text-green-400 ml-2">✓ 100% Operational</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default LiveMetricsDashboardSlide