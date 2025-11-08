import React from 'react'
import { motion } from 'framer-motion'
import { Calculator, Shield, TrendingUp, FileText } from 'lucide-react'

const CGMFFeaturesSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">CGMF Features & Capabilities</h1>
          <p className="text-xl text-gray-400 mb-6">Institutional-Grade Analysis for Every Investor</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {/* Tax Optimization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Calculator className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-xl text-green-400">Tax Optimization Engine</h3>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>ELSS Optimization:</span>
                <span className="text-green-400 font-bold">₹1.5L deduction</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax Harvesting:</span>
                <span className="text-green-400 font-bold">Automated</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Annual Savings:</span>
                <span className="text-green-400 font-bold">₹1.55L+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>LTCG Planning:</span>
                <span className="text-green-400 font-bold">Built-in</span>
              </div>
            </div>
          </motion.div>

          {/* Stress Testing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Shield className="w-6 h-6 text-red-400 mr-2" />
              <h3 className="text-xl text-red-400">Stress Testing Suite</h3>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm">📉 Market Crash: -40% scenario</p>
              <p className="text-sm">📈 Bull Run: +30% projection</p>
              <p className="text-sm">💹 Sector Rotation impact</p>
              <p className="text-sm">🌍 Global Crisis simulation</p>
              <p className="text-sm">💱 Currency Risk analysis</p>
            </div>
          </motion.div>

          {/* ELIVATE Scoring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <TrendingUp className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl text-purple-400">ELIVATE Scoring</h3>
            </div>
            
            <div className="space-y-2">
              <div className="border-l-2 border-purple-400 pl-3">
                <p className="text-sm font-semibold">Performance Score</p>
                <div className="w-full bg-gray-700 rounded h-2 mt-1">
                  <div className="bg-purple-400 h-2 rounded" style={{width: '87%'}}></div>
                </div>
              </div>
              <div className="border-l-2 border-purple-400 pl-3">
                <p className="text-sm font-semibold">Risk-Adjusted Return</p>
                <div className="w-full bg-gray-700 rounded h-2 mt-1">
                  <div className="bg-purple-400 h-2 rounded" style={{width: '92%'}}></div>
                </div>
              </div>
              <div className="border-l-2 border-purple-400 pl-3">
                <p className="text-sm font-semibold">Tax Efficiency</p>
                <div className="w-full bg-gray-700 rounded h-2 mt-1">
                  <div className="bg-purple-400 h-2 rounded" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Unified Fund Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <FileText className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl text-blue-400">Unified Fund Hub</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-center">
              <div>
                <p className="text-xl font-bold text-blue-400">43</p>
                <p className="text-xs text-gray-400">AMCs</p>
              </div>
              <div>
                <p className="text-xl font-bold text-green-400">16,766</p>
                <p className="text-xs text-gray-400">Funds</p>
              </div>
              <div>
                <p className="text-xl font-bold text-purple-400">100%</p>
                <p className="text-xs text-gray-400">Coverage</p>
              </div>
              <div>
                <p className="text-xl font-bold text-orange-400">Real-time</p>
                <p className="text-xs text-gray-400">NAVs</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What You Get */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-green-900/20 to-purple-900/20 mt-4"
        >
          <h4 className="text-lg text-teal-400 mb-2">What You Get:</h4>
          <p className="text-sm">
            <span className="text-green-400">₹1.55L tax savings</span> + 
            <span className="text-red-400"> risk protection</span> + 
            <span className="text-purple-400"> AI scoring</span> + 
            <span className="text-blue-400"> unified platform</span> = 
            <span className="text-teal-400 font-bold"> Complete mutual fund solution</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default CGMFFeaturesSlide