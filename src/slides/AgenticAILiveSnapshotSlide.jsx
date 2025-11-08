import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Brain, MessageSquare, Activity } from 'lucide-react'

const AgenticAILiveSnapshotSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Agentic AI Live Snapshot</h1>
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-sm text-gray-400">Multi-Agent Conversation in Progress</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-3"
        >
          <div className="bg-black/70 rounded-lg p-3 font-mono text-xs">
            <div className="border-b border-gray-700 pb-2 mb-3">
              <span className="text-purple-400">AGENTIC AI SYSTEM v2.0</span>
              <span className="text-gray-400 ml-4">Task: Portfolio Optimization for Client #4821</span>
            </div>
            
            <div className="space-y-2">
              <div className="border-l-2 border-blue-400 pl-2">
                <span className="text-blue-400">[Risk Agent]:</span>
                <p className="text-gray-300">Portfolio beta: 1.23, suggesting moderate-high risk</p>
                <p className="text-gray-400">Recommendation: Reduce tech allocation by 15%</p>
              </div>
              
              <div className="border-l-2 border-green-400 pl-2">
                <span className="text-green-400">[Performance Agent]:</span>
                <p className="text-gray-300">YTD return: 18.5% vs benchmark 12.3%</p>
                <p className="text-gray-400">Suggestion: Lock in profits on HDFC Bank</p>
              </div>
              
              <div className="border-l-2 border-orange-400 pl-2">
                <span className="text-orange-400">[Tax Optimization Agent]:</span>
                <p className="text-gray-300">Potential LTCG: ₹2.3L</p>
                <p className="text-gray-400">Strategy: Harvest loss from Vodafone to offset</p>
              </div>
              
              <div className="border-l-2 border-purple-400 pl-2">
                <span className="text-purple-400">[Consensus Builder]:</span>
                <p className="text-gray-300">Analyzing 3 agent recommendations...</p>
                <p className="text-teal-400 font-bold">Final Decision: Rebalance with 3 actions</p>
              </div>
              
              <div className="bg-gray-900/50 rounded p-2 mt-3">
                <p className="text-teal-400 font-bold">CONSENSUS REACHED:</p>
                <ol className="text-gray-300 ml-4 mt-1">
                  <li>1. Sell 50% HDFC Bank (book ₹45K profit)</li>
                  <li>2. Exit Vodafone (harvest ₹12K loss)</li>
                  <li>3. Add defensive: 30% to Debt funds</li>
                </ol>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-3 text-center">
              <div>
                <p className="text-green-400 font-bold">11 sec</p>
                <p className="text-gray-500">Analysis Time</p>
              </div>
              <div>
                <p className="text-blue-400 font-bold">4</p>
                <p className="text-gray-500">Agents Used</p>
              </div>
              <div>
                <p className="text-purple-400 font-bold">97%</p>
                <p className="text-gray-500">Confidence</p>
              </div>
              <div>
                <p className="text-orange-400 font-bold">₹33K</p>
                <p className="text-gray-500">Net Gain</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 mt-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="glassmorphic-card p-2"
          >
            <Brain className="w-4 h-4 text-purple-400 mb-1" />
            <p className="text-xs font-semibold">Parallel Processing</p>
            <p className="text-xs text-gray-400">4 agents analyzed simultaneously</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="glassmorphic-card p-2"
          >
            <MessageSquare className="w-4 h-4 text-teal-400 mb-1" />
            <p className="text-xs font-semibold">Consensus Building</p>
            <p className="text-xs text-gray-400">Unified decision from multiple views</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="glassmorphic-card p-2"
          >
            <Activity className="w-4 h-4 text-green-400 mb-1" />
            <p className="text-xs font-semibold">Real-time Execution</p>
            <p className="text-xs text-gray-400">Decisions implemented instantly</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AgenticAILiveSnapshotSlide