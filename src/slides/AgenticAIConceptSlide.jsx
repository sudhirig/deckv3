import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Users, MessageSquare, Network } from 'lucide-react'

const AgenticAIConceptSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Chapter 3: Agentic AI System</h1>
          <p className="text-xl text-gray-400 mb-6">Multi-Agent Collaboration Architecture</p>
        </motion.div>

        {/* Agent Network Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glassmorphic-card mb-4"
        >
          <div className="flex items-center justify-center mb-3">
            <Network className="w-6 h-6 text-purple-400 mr-2" />
            <h3 className="text-xl text-purple-400">Agent Collaboration Network</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-sm font-semibold">Master Coordinator</p>
              <p className="text-xs text-gray-400">Orchestrates all agents</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <p className="text-sm font-semibold">Specialist Agents</p>
              <p className="text-xs text-gray-400">Domain expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <MessageSquare className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-sm font-semibold">Consensus Builder</p>
              <p className="text-xs text-gray-400">Resolves conflicts</p>
            </div>
          </div>
        </motion.div>

        {/* How Agents Collaborate */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <h4 className="text-lg text-teal-400 mb-2">Agent Communication</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <span className="text-teal-400 mr-2">→</span>
                <span>Shared memory context</span>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-2">→</span>
                <span>Event-driven messaging</span>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-2">→</span>
                <span>Parallel processing</span>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-2">→</span>
                <span>Conflict resolution</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <h4 className="text-lg text-orange-400 mb-2">Decision Process</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>1. Task Assignment</span>
                <span className="text-gray-400">2s</span>
              </div>
              <div className="flex items-center justify-between">
                <span>2. Parallel Analysis</span>
                <span className="text-gray-400">5s</span>
              </div>
              <div className="flex items-center justify-between">
                <span>3. Opinion Synthesis</span>
                <span className="text-gray-400">3s</span>
              </div>
              <div className="flex items-center justify-between">
                <span>4. Final Decision</span>
                <span className="text-gray-400">1s</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Example Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-purple-900/20 to-blue-900/20 mt-4"
        >
          <h4 className="text-lg text-center mb-3">Sample: Portfolio Review Request</h4>
          <div className="flex items-center justify-between text-xs">
            <div className="text-center">
              <div className="text-xl mb-1">👤</div>
              <p>User Request</p>
              <p className="text-gray-400">"Review my portfolio"</p>
            </div>
            <span className="text-teal-400">→</span>
            <div className="text-center">
              <div className="text-xl mb-1">🎯</div>
              <p>Risk Agent</p>
              <p className="text-gray-400">Analyzes exposure</p>
            </div>
            <span className="text-teal-400">→</span>
            <div className="text-center">
              <div className="text-xl mb-1">📊</div>
              <p>Performance Agent</p>
              <p className="text-gray-400">Checks returns</p>
            </div>
            <span className="text-teal-400">→</span>
            <div className="text-center">
              <div className="text-xl mb-1">💰</div>
              <p>Tax Agent</p>
              <p className="text-gray-400">Optimizes taxes</p>
            </div>
            <span className="text-teal-400">→</span>
            <div className="text-center">
              <div className="text-xl mb-1">📝</div>
              <p>Final Report</p>
              <p className="text-gray-400">Unified advice</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AgenticAIConceptSlide