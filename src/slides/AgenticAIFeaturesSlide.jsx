import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Zap, GitBranch, Shield } from 'lucide-react'

const AgenticAIFeaturesSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Agentic AI Features</h1>
          <p className="text-xl text-gray-400 mb-6">Enterprise-Grade Multi-Agent System</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Cpu className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl text-purple-400">Agent Types</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Research Agents:</span>
                <span className="text-purple-400">12</span>
              </div>
              <div className="flex justify-between">
                <span>Trading Agents:</span>
                <span className="text-blue-400">8</span>
              </div>
              <div className="flex justify-between">
                <span>Risk Agents:</span>
                <span className="text-red-400">6</span>
              </div>
              <div className="flex justify-between">
                <span>Optimization Agents:</span>
                <span className="text-green-400">4</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Zap className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-xl text-yellow-400">Performance</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Response Time:</span>
                <span className="text-yellow-400">&lt; 100ms</span>
              </div>
              <div className="flex justify-between">
                <span>Parallel Tasks:</span>
                <span className="text-orange-400">50+</span>
              </div>
              <div className="flex justify-between">
                <span>Decisions/Hour:</span>
                <span className="text-green-400">10,000+</span>
              </div>
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span className="text-teal-400">99.7%</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <GitBranch className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-xl text-green-400">Collaboration</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Consensus building algorithms</li>
              <li>• Weighted voting system</li>
              <li>• Knowledge sharing</li>
              <li>• Self-improvement loops</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Shield className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl text-blue-400">Reliability</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Fallback mechanisms</li>
              <li>• Error recovery</li>
              <li>• Audit trails</li>
              <li>• Version control</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-purple-900/20 to-blue-900/20 mt-4"
        >
          <h4 className="text-lg text-teal-400 mb-2">What You Get:</h4>
          <p className="text-sm">
            <span className="text-purple-400">68+ specialized agents</span> working together for
            <span className="text-teal-400 font-bold"> superior investment decisions</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AgenticAIFeaturesSlide