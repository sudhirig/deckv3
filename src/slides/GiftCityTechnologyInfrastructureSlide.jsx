import React from 'react'
import { motion } from 'framer-motion'
import { Server, Cpu, Zap, Cloud } from 'lucide-react'
import { pxToRem } from '../utils/responsive'

const GiftCityTechnologyInfrastructureSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: pxToRem(-20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-5xl mb-4">GIFT City Tech Infrastructure</h1>
          <p className="text-xl text-gray-400 mb-8">World-Class Technology Hub for Global Finance</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {/* Physical Infrastructure */}
          <motion.div
            initial={{ opacity: 0, x: pxToRem(-20) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Server className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl text-purple-400">Physical Infrastructure</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <Zap className="w-4 h-4 text-yellow-400 mr-2 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Ultra Low Latency</p>
                  <p className="text-xs text-gray-400">Sub-millisecond to NSE/BSE</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Zap className="w-4 h-4 text-yellow-400 mr-2 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Dedicated Data Center</p>
                  <p className="text-xs text-gray-400">Tier 4, 99.99% uptime</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Zap className="w-4 h-4 text-yellow-400 mr-2 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Direct Market Access</p>
                  <p className="text-xs text-gray-400">Co-location facilities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Zap className="w-4 h-4 text-yellow-400 mr-2 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Redundant Connectivity</p>
                  <p className="text-xs text-gray-400">Multiple submarine cables</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Digital Infrastructure */}
          <motion.div
            initial={{ opacity: 0, x: pxToRem(20) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Cloud className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl text-blue-400">Digital Capabilities</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <Cpu className="w-4 h-4 text-teal-400 mr-2 mt-1" />
                <div>
                  <p className="font-semibold text-sm">AI Computing Power</p>
                  <p className="text-xs text-gray-400">GPU clusters for ML/AI</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Cpu className="w-4 h-4 text-teal-400 mr-2 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Real-time Processing</p>
                  <p className="text-xs text-gray-400">1M+ transactions/second</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Cpu className="w-4 h-4 text-teal-400 mr-2 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Global API Gateway</p>
                  <p className="text-xs text-gray-400">Connect to 100+ exchanges</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Cpu className="w-4 h-4 text-teal-400 mr-2 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Blockchain Ready</p>
                  <p className="text-xs text-gray-400">DLT infrastructure enabled</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: pxToRem(20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-purple-900/20 to-blue-900/20 mt-6"
        >
          <h3 className="text-xl text-center text-teal-400 mb-4">Platform Performance Metrics</h3>
          
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, duration: 0.3 }}
                className="text-3xl font-bold text-yellow-400"
              >
                11ms
              </motion.div>
              <p className="text-xs text-gray-400">Response Time</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="text-3xl font-bold text-green-400"
              >
                99.99%
              </motion.div>
              <p className="text-xs text-gray-400">Uptime SLA</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, duration: 0.3 }}
                className="text-3xl font-bold text-blue-400"
              >
                10TB
              </motion.div>
              <p className="text-xs text-gray-400">Daily Data Processing</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.3 }}
                className="text-3xl font-bold text-purple-400"
              >
                24/7
              </motion.div>
              <p className="text-xs text-gray-400">Operations</p>
            </div>
          </div>
        </motion.div>

        {/* Competitive Advantage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-lg">
            <span className="gradient-text font-bold">GIFT City + AI + Infrastructure = </span>
            <span className="text-teal-400">Unbeatable Advantage</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default GiftCityTechnologyInfrastructureSlide