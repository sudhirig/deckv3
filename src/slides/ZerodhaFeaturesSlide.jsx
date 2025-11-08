import React from 'react'
import { motion } from 'framer-motion'
import { Mic, LayoutDashboard, Bot, Clock } from 'lucide-react'

const ZerodhaFeaturesSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Zerodha Features & Capabilities</h1>
          <p className="text-xl text-gray-400 mb-6">Transform Your Trading Experience</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {/* Voice Trading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Mic className="w-6 h-6 text-orange-400 mr-2" />
              <h3 className="text-xl text-orange-400">Voice Trading 3.0</h3>
            </div>
            
            <div className="space-y-3">
              <div className="border-l-2 border-orange-400 pl-3">
                <p className="font-semibold text-sm">Multi-Language Support</p>
                <p className="text-xs text-gray-400">English, Hindi, Tamil</p>
              </div>
              
              <div className="border-l-2 border-orange-400 pl-3">
                <p className="font-semibold text-sm">Natural Commands</p>
                <p className="text-xs text-gray-400">"Buy 100 shares of Reliance"</p>
              </div>
              
              <div className="border-l-2 border-orange-400 pl-3">
                <p className="font-semibold text-sm">Ultra-Low Latency</p>
                <p className="text-xs text-gray-400">11ms response time</p>
              </div>
              
              <div className="border-l-2 border-orange-400 pl-3">
                <p className="font-semibold text-sm">Voice Confirmation</p>
                <p className="text-xs text-gray-400">Audio feedback on execution</p>
              </div>
            </div>
          </motion.div>

          {/* Living Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <LayoutDashboard className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl text-blue-400">Living Dashboard</h3>
            </div>
            
            <div className="space-y-3">
              <div className="border-l-2 border-blue-400 pl-3">
                <p className="font-semibold text-sm">Real-Time P&L</p>
                <p className="text-xs text-gray-400">Live profit tracking</p>
              </div>
              
              <div className="border-l-2 border-blue-400 pl-3">
                <p className="font-semibold text-sm">AI Recommendations</p>
                <p className="text-xs text-gray-400">Contextual suggestions</p>
              </div>
              
              <div className="border-l-2 border-blue-400 pl-3">
                <p className="font-semibold text-sm">Risk Monitoring</p>
                <p className="text-xs text-gray-400">Automatic alerts</p>
              </div>
              
              <div className="border-l-2 border-blue-400 pl-3">
                <p className="font-semibold text-sm">Market Pulse</p>
                <p className="text-xs text-gray-400">Sector heat maps</p>
              </div>
            </div>
          </motion.div>

          {/* Magic Actions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Bot className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl text-purple-400">Magic Actions</h3>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm">• Auto Stop-Loss placement</p>
              <p className="text-sm">• Bracket order optimization</p>
              <p className="text-sm">• Position sizing AI</p>
              <p className="text-sm">• Exit strategy suggestions</p>
              <p className="text-sm">• Tax-loss harvesting</p>
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Clock className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-xl text-green-400">Speed & Scale</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-center">
              <div>
                <p className="text-2xl font-bold text-green-400">11ms</p>
                <p className="text-xs text-gray-400">Response</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">10K+</p>
                <p className="text-xs text-gray-400">Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">99.9%</p>
                <p className="text-xs text-gray-400">Uptime</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-400">3</p>
                <p className="text-xs text-gray-400">Languages</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What You Get */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-orange-900/20 to-blue-900/20 mt-4"
        >
          <h4 className="text-lg text-teal-400 mb-2">What You Get:</h4>
          <p className="text-sm">
            <span className="text-orange-400">Voice-first trading</span> + 
            <span className="text-blue-400"> AI recommendations</span> + 
            <span className="text-purple-400"> automated actions</span> = 
            <span className="text-green-400 font-bold"> Professional trading made simple</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ZerodhaFeaturesSlide