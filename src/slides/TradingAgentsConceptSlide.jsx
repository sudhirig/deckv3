import React from 'react'
import { motion } from 'framer-motion'
import { Users, Brain, Award, TrendingUp } from 'lucide-react'

const TradingAgentsConceptSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Chapter 5: Trading Agents + Hedge Fund</h1>
          <p className="text-xl text-gray-400 mb-4">30 Legendary Investors in Your Pocket</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {/* Investment Committee */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Award className="w-6 h-6 text-gold-400 mr-2" />
              <h3 className="text-lg text-gold-400 font-bold">Investment Committee (12)</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="font-semibold text-blue-400">Warren Buffett AI</p>
                <p className="text-gray-400">Value investing</p>
              </div>
              <div>
                <p className="font-semibold text-green-400">Peter Lynch AI</p>
                <p className="text-gray-400">Growth stocks</p>
              </div>
              <div>
                <p className="font-semibold text-purple-400">Ray Dalio AI</p>
                <p className="text-gray-400">Risk parity</p>
              </div>
              <div>
                <p className="font-semibold text-orange-400">George Soros AI</p>
                <p className="text-gray-400">Macro trends</p>
              </div>
              <div>
                <p className="font-semibold text-teal-400">Benjamin Graham AI</p>
                <p className="text-gray-400">Deep value</p>
              </div>
              <div>
                <p className="font-semibold text-red-400">Carl Icahn AI</p>
                <p className="text-gray-400">Activist</p>
              </div>
            </div>
          </motion.div>

          {/* Hedge Fund Team */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Brain className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-lg text-purple-400 font-bold">Hedge Fund Team (18)</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="font-semibold text-pink-400">Cathie Wood AI</p>
                <p className="text-gray-400">Disruptive tech</p>
              </div>
              <div>
                <p className="font-semibold text-yellow-400">Jim Simons AI</p>
                <p className="text-gray-400">Quant strategies</p>
              </div>
              <div>
                <p className="font-semibold text-cyan-400">Paul Tudor Jones AI</p>
                <p className="text-gray-400">Technical analysis</p>
              </div>
              <div>
                <p className="font-semibold text-indigo-400">Stanley Druckenmiller AI</p>
                <p className="text-gray-400">Currency plays</p>
              </div>
              <div>
                <p className="font-semibold text-lime-400">Bill Ackman AI</p>
                <p className="text-gray-400">Special situations</p>
              </div>
              <div>
                <p className="font-semibold text-rose-400">David Tepper AI</p>
                <p className="text-gray-400">Distressed debt</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-gold-900/20 to-purple-900/20 mt-4"
        >
          <h4 className="text-lg text-center mb-3">Dual-Team Analysis Process</h4>
          <div className="flex items-center justify-between text-xs">
            <div className="text-center">
              <div className="text-xl mb-1">📊</div>
              <p className="font-semibold">Stock Selection</p>
              <p className="text-gray-400">User picks stock</p>
            </div>
            <span className="text-teal-400">→</span>
            <div className="text-center">
              <div className="text-xl mb-1">🏛️</div>
              <p className="font-semibold">Committee Analysis</p>
              <p className="text-gray-400">12 experts evaluate</p>
            </div>
            <span className="text-teal-400">→</span>
            <div className="text-center">
              <div className="text-xl mb-1">🏢</div>
              <p className="font-semibold">Hedge Fund View</p>
              <p className="text-gray-400">18 traders analyze</p>
            </div>
            <span className="text-teal-400">→</span>
            <div className="text-center">
              <div className="text-xl mb-1">🤝</div>
              <p className="font-semibold">Consensus</p>
              <p className="text-gray-400">Combined wisdom</p>
            </div>
            <span className="text-teal-400">→</span>
            <div className="text-center">
              <div className="text-xl mb-1">✅</div>
              <p className="font-semibold">Decision</p>
              <p className="text-gray-400">35 seconds total</p>
            </div>
          </div>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-4 gap-2 mt-4"
        >
          <div className="glassmorphic-card p-2 text-center">
            <p className="text-xl font-bold text-gold-400">30</p>
            <p className="text-xs text-gray-400">Expert AIs</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <p className="text-xl font-bold text-purple-400">35 sec</p>
            <p className="text-xs text-gray-400">Analysis Time</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <p className="text-xl font-bold text-green-400">87%</p>
            <p className="text-xs text-gray-400">Win Rate</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <p className="text-xl font-bold text-blue-400">24/7</p>
            <p className="text-xs text-gray-400">Available</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TradingAgentsConceptSlide