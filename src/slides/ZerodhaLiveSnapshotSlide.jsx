import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Activity, TrendingUp, Bot } from 'lucide-react'

const ZerodhaLiveSnapshotSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Zerodha Live Platform Snapshot</h1>
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-sm text-gray-400">Live System Screenshot - November 2024</p>
          </div>
        </motion.div>

        {/* Main Screenshot Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4"
        >
          {/* Mock Terminal/Dashboard Interface */}
          <div className="bg-black/70 rounded-lg p-4 font-mono text-xs">
            <div className="flex items-center mb-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-gray-400">ARIA Trading Assistant - Live Session</span>
            </div>
            
            {/* Conversation Interface */}
            <div className="space-y-2">
              <div className="text-orange-400">
                <span className="text-gray-500">[10:32:15]</span> 🎤 Voice: "Buy 100 shares of TCS"
              </div>
              <div className="text-purple-400">
                <span className="text-gray-500">[10:32:15]</span> 🤖 ARIA: Processing voice command...
              </div>
              <div className="text-blue-400">
                <span className="text-gray-500">[10:32:15]</span> 📊 Analysis: TCS @ ₹3,456.75
                <div className="ml-12 text-gray-400">
                  • RSI: 58.3 (Neutral)<br/>
                  • MACD: Bullish crossover<br/>
                  • Support: ₹3,400 | Resistance: ₹3,500
                </div>
              </div>
              <div className="text-green-400">
                <span className="text-gray-500">[10:32:16]</span> ✅ Order Placed: BUY 100 TCS @ ₹3,456.75
              </div>
              <div className="text-teal-400">
                <span className="text-gray-500">[10:32:16]</span> 🔊 Voice: "Order executed successfully"
              </div>
              <div className="text-yellow-400">
                <span className="text-gray-500">[10:32:16]</span> ⏱️ Total execution time: 11ms
              </div>
            </div>
            
            {/* Live Dashboard Stats */}
            <div className="mt-4 pt-3 border-t border-gray-700">
              <div className="grid grid-cols-4 gap-3">
                <div className="text-center">
                  <p className="text-green-400 text-lg font-bold">+₹12,450</p>
                  <p className="text-gray-500">Today's P&L</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-400 text-lg font-bold">23</p>
                  <p className="text-gray-500">Trades Today</p>
                </div>
                <div className="text-center">
                  <p className="text-purple-400 text-lg font-bold">87%</p>
                  <p className="text-gray-500">Win Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-orange-400 text-lg font-bold">11ms</p>
                  <p className="text-gray-500">Avg Response</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Annotated Features */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="glassmorphic-card p-3"
          >
            <div className="flex items-center mb-1">
              <Activity className="w-4 h-4 text-orange-400 mr-2" />
              <p className="text-xs font-semibold">Voice Recognition</p>
            </div>
            <p className="text-xs text-gray-400">Natural language processing in 3 languages</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="glassmorphic-card p-3"
          >
            <div className="flex items-center mb-1">
              <Bot className="w-4 h-4 text-purple-400 mr-2" />
              <p className="text-xs font-semibold">AI Analysis</p>
            </div>
            <p className="text-xs text-gray-400">Real-time technical & fundamental analysis</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="glassmorphic-card p-3"
          >
            <div className="flex items-center mb-1">
              <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
              <p className="text-xs font-semibold">Instant Execution</p>
            </div>
            <p className="text-xs text-gray-400">Direct integration with Zerodha Kite API</p>
          </motion.div>
        </div>

        {/* Live URL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="text-center mt-4"
        >
          <p className="text-xs text-gray-500">
            Live Platform: <span className="text-teal-400">app.voraventures.ai/zerodha</span> | 
            <span className="text-green-400 ml-2">✓ Operational 24/7</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ZerodhaLiveSnapshotSlide