import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Globe, Cpu, TrendingUp } from 'lucide-react'

const FutureModulesConceptSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Chapter 4: Future Modules</h1>
          <p className="text-xl text-gray-400 mb-6">Expansion Roadmap 2025-2027</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Globe className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl text-blue-400">Global Markets</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>US Markets (NYSE, NASDAQ)</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>European Exchanges</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>Asian Markets</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>24/7 Trading Coverage</span>
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
              <Cpu className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl text-purple-400">Alternative Assets</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <span className="text-purple-400 mr-2">→</span>
                <span>Cryptocurrency Trading</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-2">→</span>
                <span>Commodities & Gold</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-2">→</span>
                <span>REITs & Real Estate</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-2">→</span>
                <span>Private Equity Access</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-blue-900/20 to-purple-900/20 mt-4"
        >
          <h3 className="text-xl text-center text-teal-400 mb-3">Development Timeline</h3>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-400 font-bold">Q1</span>
              </div>
              <p className="text-xs font-semibold">2025</p>
              <p className="text-xs text-gray-400">US Markets</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-400 font-bold">Q2</span>
              </div>
              <p className="text-xs font-semibold">2025</p>
              <p className="text-xs text-gray-400">Crypto</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-400 font-bold">Q3</span>
              </div>
              <p className="text-xs font-semibold">2025</p>
              <p className="text-xs text-gray-400">Commodities</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-orange-400 font-bold">Q4</span>
              </div>
              <p className="text-xs font-semibold">2025</p>
              <p className="text-xs text-gray-400">REITs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-teal-400 font-bold">2026</span>
              </div>
              <p className="text-xs font-semibold">Beyond</p>
              <p className="text-xs text-gray-400">PE Access</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-3 gap-3 mt-4"
        >
          <div className="glassmorphic-card p-3 text-center">
            <Rocket className="w-5 h-5 text-orange-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-orange-400">15+</p>
            <p className="text-xs text-gray-400">New Modules</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <Globe className="w-5 h-5 text-blue-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-blue-400">50+</p>
            <p className="text-xs text-gray-400">Global Exchanges</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <TrendingUp className="w-5 h-5 text-green-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-green-400">10x</p>
            <p className="text-xs text-gray-400">Platform Growth</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FutureModulesConceptSlide