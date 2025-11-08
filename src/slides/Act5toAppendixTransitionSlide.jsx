import React from 'react'
import { motion } from 'framer-motion'

const Act5toAppendixTransitionSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-6xl mb-8">Ready to Invest?</h1>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="text-6xl mb-4">🔬</div>
            <h2 className="text-4xl text-teal-400 mb-4">Deep Dive Into the Technology</h2>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl text-gray-300 mb-8">Product Appendix</h3>
          <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glassmorphic-card p-4"
            >
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="text-lg text-teal-400">7 Operational Modules</h4>
              <p className="text-sm text-gray-400 mt-2">Complete platform walkthrough</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glassmorphic-card p-4"
            >
              <div className="text-3xl mb-2">🤖</div>
              <h4 className="text-lg text-teal-400">68+ AI Agents</h4>
              <p className="text-sm text-gray-400 mt-2">See them in action</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glassmorphic-card p-4"
            >
              <div className="text-3xl mb-2">📸</div>
              <h4 className="text-lg text-teal-400">Live Platform Snapshots</h4>
              <p className="text-sm text-gray-400 mt-2">Real system screenshots</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-2xl text-gray-400 mb-4">What's in the Appendix:</h3>
            <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">1.</span>
                  <span>Zerodha Trading Intelligence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">2.</span>
                  <span>CGMF Mutual Fund Advisory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">3.</span>
                  <span>Agentic AI System</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">4.</span>
                  <span>Future Modules Roadmap</span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">5.</span>
                  <span>Trading Agents & Hedge Fund</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">6.</span>
                  <span>Algo Trading Laboratory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">7.</span>
                  <span>Sentiment Intelligence Module</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Journey Progress</span>
            <span className="text-sm text-teal-400">100% - Technical Deep Dive</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '80%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="h-full bg-gradient-to-r from-teal-500 to-green-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Act5toAppendixTransitionSlide