import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Users, TrendingUp, Award } from 'lucide-react'
import { pxToRem } from '../utils/responsive'

const TradingAgentsLiveSnapshotSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Trading Agents Live Analysis</h1>
          <div className="flex items-center justify-center mb-3">
            <Camera className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-sm text-gray-400">Real Reliance Industries Analysis - 35 Seconds</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-2"
        >
          <div className="bg-black/70 rounded-lg p-2 text-xs">
            <div className="border-b border-gray-700 pb-1 mb-2">
              <span className="text-gold-400">DUAL-TEAM ANALYSIS</span>
              <span className="text-gray-400 ml-3">Stock: RELIANCE | Price: ₹2,456.75</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-900/50 rounded p-2">
                <h4 className="text-gold-400 mb-1">🏛️ Investment Committee</h4>
                <div className="space-y-1">
                  <div className="text-blue-400">Warren Buffett: BUY</div>
                  <p className="text-gray-300 ml-2">Strong moat, undervalued at 18x P/E</p>
                  
                  <div className="text-green-400">Peter Lynch: BUY</div>
                  <p className="text-gray-300 ml-2">PEG ratio 1.2, growth story intact</p>
                  
                  <div className="text-orange-400">Ray Dalio: HOLD</div>
                  <p className="text-gray-300 ml-2">Macro headwinds, wait for dip</p>
                  
                  <div className="text-purple-400">George Soros: BUY</div>
                  <p className="text-gray-300 ml-2">Oil-to-chemical pivot undervalued</p>
                  
                  <div className="mt-2 pt-1 border-t border-gray-600">
                    <span className="text-gold-400">Committee: </span>
                    <span className="text-green-400 font-bold">75% BUY</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded p-2">
                <h4 className="text-purple-400 mb-1">🏢 Hedge Fund Team</h4>
                <div className="space-y-1">
                  <div className="text-pink-400">Cathie Wood: BUY</div>
                  <p className="text-gray-300 ml-2">Digital services disruption play</p>
                  
                  <div className="text-yellow-400">Jim Simons: BUY</div>
                  <p className="text-gray-300 ml-2">Momentum signals positive</p>
                  
                  <div className="text-cyan-400">Paul Tudor Jones: BUY</div>
                  <p className="text-gray-300 ml-2">Breaking resistance at 2450</p>
                  
                  <div className="text-lime-400">Bill Ackman: HOLD</div>
                  <p className="text-gray-300 ml-2">Wait for debt reduction</p>
                  
                  <div className="mt-2 pt-1 border-t border-gray-600">
                    <span className="text-purple-400">Hedge Fund: </span>
                    <span className="text-green-400 font-bold">83% BUY</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-2 bg-gradient-to-r from-gold-900/30 to-purple-900/30 rounded p-2">
              <h4 className="text-teal-400 mb-1">CONSENSUS DECISION</h4>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-green-400 font-bold text-lg">STRONG BUY</p>
                  <p className="text-gray-400">Combined Score: 79%</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Target: ₹2,850</p>
                  <p className="text-green-400">Upside: +16%</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-2 text-center">
              <div>
                <p className="text-green-400 font-bold">22</p>
                <p className="text-gray-500">Buy votes</p>
              </div>
              <div>
                <p className="text-yellow-400 font-bold">8</p>
                <p className="text-gray-500">Hold votes</p>
              </div>
              <div>
                <p className="text-red-400 font-bold">0</p>
                <p className="text-gray-500">Sell votes</p>
              </div>
              <div>
                <p className="text-teal-400 font-bold">35s</p>
                <p className="text-gray-500">Total time</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center mt-2"
        >
          <p className="text-xs text-gray-500">
            Live Platform: <span className="text-teal-400">app.voraventures.ai/trading-agents</span> | 
            <span className="text-green-400 ml-2">✓ 87% Historical Accuracy</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default TradingAgentsLiveSnapshotSlide