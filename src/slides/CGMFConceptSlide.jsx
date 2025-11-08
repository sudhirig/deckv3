import React from 'react'
import { motion } from 'framer-motion'
import { Users, Brain, Target, PiggyBank } from 'lucide-react'

const CGMFConceptSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Chapter 2: CGMF Mutual Fund Advisory</h1>
          <p className="text-xl text-gray-400 mb-6">9 AI Agents Managing 16,766 Funds</p>
        </motion.div>

        {/* 9 Agent Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glassmorphic-card mb-4"
        >
          <h3 className="text-xl text-teal-400 mb-3 text-center">The 9-Agent Dream Team</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-2 border border-purple-500/30 rounded">
              <div className="text-2xl mb-1">🎯</div>
              <p className="text-xs font-semibold">Goal Analyzer</p>
              <p className="text-xs text-gray-400">Understands objectives</p>
            </div>
            <div className="text-center p-2 border border-blue-500/30 rounded">
              <div className="text-2xl mb-1">📊</div>
              <p className="text-xs font-semibold">Risk Profiler</p>
              <p className="text-xs text-gray-400">Assesses tolerance</p>
            </div>
            <div className="text-center p-2 border border-green-500/30 rounded">
              <div className="text-2xl mb-1">🔍</div>
              <p className="text-xs font-semibold">Fund Scanner</p>
              <p className="text-xs text-gray-400">16,766 funds analyzed</p>
            </div>
            <div className="text-center p-2 border border-orange-500/30 rounded">
              <div className="text-2xl mb-1">💰</div>
              <p className="text-xs font-semibold">Tax Optimizer</p>
              <p className="text-xs text-gray-400">₹1.55L annual savings</p>
            </div>
            <div className="text-center p-2 border border-teal-500/30 rounded">
              <div className="text-2xl mb-1">⚖️</div>
              <p className="text-xs font-semibold">Rebalancer</p>
              <p className="text-xs text-gray-400">Portfolio optimization</p>
            </div>
            <div className="text-center p-2 border border-yellow-500/30 rounded">
              <div className="text-2xl mb-1">🛡️</div>
              <p className="text-xs font-semibold">Stress Tester</p>
              <p className="text-xs text-gray-400">Scenario analysis</p>
            </div>
            <div className="text-center p-2 border border-red-500/30 rounded">
              <div className="text-2xl mb-1">📈</div>
              <p className="text-xs font-semibold">Performance Tracker</p>
              <p className="text-xs text-gray-400">Real-time monitoring</p>
            </div>
            <div className="text-center p-2 border border-purple-500/30 rounded">
              <div className="text-2xl mb-1">🔄</div>
              <p className="text-xs font-semibold">Exit Strategist</p>
              <p className="text-xs text-gray-400">Timing optimization</p>
            </div>
            <div className="text-center p-2 border border-gray-500/30 rounded">
              <div className="text-2xl mb-1">📝</div>
              <p className="text-xs font-semibold">Report Generator</p>
              <p className="text-xs text-gray-400">Insights & analytics</p>
            </div>
          </div>
        </motion.div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-teal-900/20 to-green-900/20"
        >
          <h4 className="text-lg text-center mb-3">CGMF Workflow: 4 Simple Steps</h4>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-lg font-bold text-blue-400">1</span>
              </div>
              <p className="text-sm font-semibold">Input Goals</p>
              <p className="text-xs text-gray-400">Your objectives</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-lg font-bold text-green-400">2</span>
              </div>
              <p className="text-sm font-semibold">AI Analysis</p>
              <p className="text-xs text-gray-400">9 agents work</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-lg font-bold text-purple-400">3</span>
              </div>
              <p className="text-sm font-semibold">Get Portfolio</p>
              <p className="text-xs text-gray-400">Optimized selection</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-lg font-bold text-teal-400">4</span>
              </div>
              <p className="text-sm font-semibold">Save Taxes</p>
              <p className="text-xs text-gray-400">₹1.55L annually</p>
            </div>
          </div>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="grid grid-cols-4 gap-3 mt-4"
        >
          <div className="glassmorphic-card p-3 text-center">
            <p className="text-2xl font-bold text-teal-400">16,766</p>
            <p className="text-xs text-gray-400">Funds Analyzed</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <p className="text-2xl font-bold text-green-400">₹1.55L</p>
            <p className="text-xs text-gray-400">Tax Savings/Year</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <p className="text-2xl font-bold text-purple-400">100%</p>
            <p className="text-xs text-gray-400">Real Funds</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <p className="text-2xl font-bold text-orange-400">45 sec</p>
            <p className="text-xs text-gray-400">Analysis Time</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CGMFConceptSlide