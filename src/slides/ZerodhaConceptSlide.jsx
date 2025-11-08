import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Mic, LayoutDashboard, MessageSquare } from 'lucide-react'

const ZerodhaConceptSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Chapter 1: Zerodha Trading Intelligence</h1>
          <p className="text-xl text-gray-400 mb-6">AI Layer Over Your Existing Broker</p>
        </motion.div>

        {/* ARIA & ELIVATE Framework */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Brain className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl text-purple-400 font-bold">ARIA Framework</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-purple-400 mr-2 font-bold">A</span>
                <div>
                  <span className="font-semibold">Analyze</span>
                  <p className="text-xs text-gray-400">Real-time market scanning</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-2 font-bold">R</span>
                <div>
                  <span className="font-semibold">Recommend</span>
                  <p className="text-xs text-gray-400">AI-powered suggestions</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-2 font-bold">I</span>
                <div>
                  <span className="font-semibold">Implement</span>
                  <p className="text-xs text-gray-400">One-click execution</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-2 font-bold">A</span>
                <div>
                  <span className="font-semibold">Adapt</span>
                  <p className="text-xs text-gray-400">Learn from outcomes</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <MessageSquare className="w-6 h-6 text-teal-400 mr-2" />
              <h3 className="text-xl text-teal-400 font-bold">ELIVATE System</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">E</span>
                <div>
                  <span className="font-semibold">Engage</span>
                  <p className="text-xs text-gray-400">Natural conversation</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">L</span>
                <div>
                  <span className="font-semibold">Listen</span>
                  <p className="text-xs text-gray-400">Understand intent</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">I</span>
                <div>
                  <span className="font-semibold">Integrate</span>
                  <p className="text-xs text-gray-400">Connect to Zerodha</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">V</span>
                <div>
                  <span className="font-semibold">Validate</span>
                  <p className="text-xs text-gray-400">Risk checks</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Workflow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-purple-900/20 to-teal-900/20"
        >
          <h4 className="text-lg text-center mb-4">Seamless Trading Workflow</h4>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <Mic className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <p className="text-sm font-semibold">Voice Command</p>
              <p className="text-xs text-gray-400">"Buy TCS"</p>
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-teal-400"
            >
              →
            </motion.div>
            <div className="text-center">
              <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-sm font-semibold">AI Processing</p>
              <p className="text-xs text-gray-400">11ms analysis</p>
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="text-teal-400"
            >
              →
            </motion.div>
            <div className="text-center">
              <LayoutDashboard className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-sm font-semibold">Zerodha Kite</p>
              <p className="text-xs text-gray-400">Order placed</p>
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
              className="text-teal-400"
            >
              →
            </motion.div>
            <div className="text-center">
              <div className="text-2xl mb-2">✅</div>
              <p className="text-sm font-semibold">Confirmation</p>
              <p className="text-xs text-gray-400">Voice feedback</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ZerodhaConceptSlide