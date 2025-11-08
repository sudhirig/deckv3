import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Rocket, Construction, Clock } from 'lucide-react'

const FutureModulesLiveSnapshotSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Future Modules Development Pipeline</h1>
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-sm text-gray-400">Beta Testing Dashboard - Live Preview</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-3"
        >
          <div className="bg-black/70 rounded-lg p-3">
            <div className="border-b border-gray-700 pb-2 mb-3">
              <span className="text-purple-400">DEVELOPMENT PIPELINE</span>
              <span className="text-gray-400 ml-4">Active Projects: 5 | Beta Testers: 127</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-900/50 rounded p-2">
                <h4 className="text-xs text-green-400 mb-2">🟢 IN BETA TESTING</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span>US Market Trading</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-700 rounded-full h-1.5 mr-2">
                        <div className="bg-green-400 h-1.5 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-green-400">85%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>Crypto Module</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-700 rounded-full h-1.5 mr-2">
                        <div className="bg-green-400 h-1.5 rounded-full" style={{width: '72%'}}></div>
                      </div>
                      <span className="text-green-400">72%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded p-2">
                <h4 className="text-xs text-yellow-400 mb-2">🟡 IN DEVELOPMENT</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span>Commodities Trading</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-700 rounded-full h-1.5 mr-2">
                        <div className="bg-yellow-400 h-1.5 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-yellow-400">45%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>REITs Integration</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-700 rounded-full h-1.5 mr-2">
                        <div className="bg-yellow-400 h-1.5 rounded-full" style={{width: '30%'}}></div>
                      </div>
                      <span className="text-yellow-400">30%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 bg-gray-900/50 rounded p-2">
              <h4 className="text-xs text-blue-400 mb-2">🔵 PLANNING PHASE</h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="text-gray-400">Private Equity</p>
                  <p className="text-blue-400">Q2 2025</p>
                </div>
                <div>
                  <p className="text-gray-400">European Markets</p>
                  <p className="text-blue-400">Q3 2025</p>
                </div>
                <div>
                  <p className="text-gray-400">Options Trading</p>
                  <p className="text-blue-400">Q4 2025</p>
                </div>
              </div>
            </div>
            
            <div className="mt-3 bg-gray-900/50 rounded p-2">
              <h4 className="text-xs text-purple-400 mb-2">BETA TESTER FEEDBACK</h4>
              <div className="space-y-1 text-xs text-gray-300">
                <p>"US market integration working seamlessly!" - Beta User #42</p>
                <p>"Crypto module detected arbitrage opportunity, saved $2K" - Beta User #89</p>
                <p>"Can't wait for commodities trading!" - Beta User #15</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-4 gap-2 mt-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="glassmorphic-card p-2 text-center"
          >
            <Rocket className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <p className="text-sm font-bold text-green-400">2</p>
            <p className="text-xs text-gray-400">Ready to Launch</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="glassmorphic-card p-2 text-center"
          >
            <Construction className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
            <p className="text-sm font-bold text-yellow-400">3</p>
            <p className="text-xs text-gray-400">In Development</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="glassmorphic-card p-2 text-center"
          >
            <Clock className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <p className="text-sm font-bold text-blue-400">10+</p>
            <p className="text-xs text-gray-400">Planned</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="glassmorphic-card p-2 text-center"
          >
            <div className="text-sm mb-1">👥</div>
            <p className="text-sm font-bold text-purple-400">127</p>
            <p className="text-xs text-gray-400">Beta Testers</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FutureModulesLiveSnapshotSlide