import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Calculator, TrendingUp, Award } from 'lucide-react'

const CGMFLiveSnapshotSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">CGMF Live Platform Snapshot</h1>
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-sm text-gray-400">Unified Fund Hub - Live Analysis</p>
          </div>
        </motion.div>

        {/* Main Dashboard Screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-3"
        >
          <div className="bg-black/70 rounded-lg p-3">
            {/* Header */}
            <div className="border-b border-gray-700 pb-2 mb-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-teal-400">CGMF Unified Fund Hub</span>
                <span className="text-xs text-gray-400">Portfolio: ₹50,00,000 | Tax Saved: ₹1,55,000</span>
              </div>
            </div>
            
            {/* Fund Recommendations */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-900/50 rounded p-2">
                <h4 className="text-xs text-green-400 mb-2">Top ELSS Recommendations</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Axis ELSS</span>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2">+24.3%</span>
                      <span className="text-yellow-400">★ 95</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Mirae Tax Saver</span>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2">+22.7%</span>
                      <span className="text-yellow-400">★ 93</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Quant Tax Plan</span>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2">+28.1%</span>
                      <span className="text-yellow-400">★ 91</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded p-2">
                <h4 className="text-xs text-blue-400 mb-2">Tax Optimization Analysis</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Section 80C Used:</span>
                    <span className="text-green-400">₹1,50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tax Saved (30% bracket):</span>
                    <span className="text-green-400">₹46,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">LTCG Optimization:</span>
                    <span className="text-green-400">₹1,08,200</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-300">Total Annual Savings:</span>
                    <span className="text-green-400">₹1,55,000</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI Agent Activity */}
            <div className="mt-3 bg-gray-900/50 rounded p-2">
              <h4 className="text-xs text-purple-400 mb-2">Live AI Agent Activity</h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <div className="text-green-400 font-bold">ACTIVE</div>
                  <p className="text-gray-400">Goal Analyzer</p>
                </div>
                <div className="text-center">
                  <div className="text-green-400 font-bold">ACTIVE</div>
                  <p className="text-gray-400">Tax Optimizer</p>
                </div>
                <div className="text-center">
                  <div className="text-yellow-400 font-bold">PROCESSING</div>
                  <p className="text-gray-400">Stress Tester</p>
                </div>
              </div>
            </div>
            
            {/* Performance Graph */}
            <div className="mt-3 bg-gray-900/50 rounded p-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Portfolio Performance</span>
                <span className="text-green-400">+18.7% YTD</span>
              </div>
              <div className="h-20 mt-2 flex items-end justify-around">
                <div className="bg-green-500/30 w-4" style={{height: '40%'}}></div>
                <div className="bg-green-500/30 w-4" style={{height: '60%'}}></div>
                <div className="bg-green-500/30 w-4" style={{height: '55%'}}></div>
                <div className="bg-green-500/30 w-4" style={{height: '70%'}}></div>
                <div className="bg-green-500/30 w-4" style={{height: '65%'}}></div>
                <div className="bg-green-500/30 w-4" style={{height: '80%'}}></div>
                <div className="bg-green-500/30 w-4" style={{height: '75%'}}></div>
                <div className="bg-green-500/30 w-4" style={{height: '90%'}}></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-2 mt-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="glassmorphic-card p-2 text-center"
          >
            <Calculator className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-green-400">₹1.55L</p>
            <p className="text-xs text-gray-400">Tax Saved</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="glassmorphic-card p-2 text-center"
          >
            <TrendingUp className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-blue-400">16,766</p>
            <p className="text-xs text-gray-400">Funds Analyzed</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="glassmorphic-card p-2 text-center"
          >
            <Award className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-purple-400">9</p>
            <p className="text-xs text-gray-400">AI Agents</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="glassmorphic-card p-2 text-center"
          >
            <div className="text-lg mb-1">⚡</div>
            <p className="text-lg font-bold text-orange-400">45s</p>
            <p className="text-xs text-gray-400">Analysis Time</p>
          </motion.div>
        </div>

        {/* Live URL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="text-center mt-3"
        >
          <p className="text-xs text-gray-500">
            Live Platform: <span className="text-teal-400">app.voraventures.ai/cgmf</span> | 
            <span className="text-green-400 ml-2">✓ 100% Real Funds</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default CGMFLiveSnapshotSlide