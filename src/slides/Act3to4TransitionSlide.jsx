import React from 'react'
import { motion } from 'framer-motion'

const Act3to4TransitionSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-6xl mb-8">Proof Established</h1>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-4xl text-teal-400 mb-4">Scale the Impact</h2>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 gap-8 mt-12"
        >
          <div className="text-left">
            <h3 className="text-2xl text-purple-400 mb-4">Proven Results:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">★</span>
                <span>Platform live and operational</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">★</span>
                <span>68+ AI agents deployed</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">★</span>
                <span>₹1.55L tax savings demonstrated</span>
              </li>
            </ul>
          </div>
          
          <div className="text-left">
            <h3 className="text-2xl text-teal-400 mb-4">Growth Path:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">📈</span>
                <span>Market opportunity: $5T</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">📈</span>
                <span>Revenue model: 3-tier</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">📈</span>
                <span>Scale: 1000x in 30 months</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-12"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Journey Progress</span>
            <span className="text-sm text-teal-400">60%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '40%' }}
              animate={{ width: '60%' }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-full bg-gradient-to-r from-teal-500 to-green-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Act3to4TransitionSlide