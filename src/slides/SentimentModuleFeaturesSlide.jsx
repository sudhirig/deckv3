import React from 'react'
import { motion } from 'framer-motion'
import { Activity, MessageSquare, TrendingUp, Globe } from 'lucide-react'

const SentimentModuleFeaturesSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Sentiment Module Features</h1>
          <p className="text-xl text-gray-400 mb-6">Market Mood at Your Fingertips</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Activity className="w-6 h-6 text-red-400 mr-2" />
              <h3 className="text-xl text-red-400">Heat Map Analytics</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Interactive Nifty 500 map</li>
              <li>• Sector-wise sentiment</li>
              <li>• Real-time color coding</li>
              <li>• Drill-down capability</li>
              <li>• Historical comparison</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <MessageSquare className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl text-blue-400">Conversational AI</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• "What's the news on TCS?"</li>
              <li>• "Show bearish stocks"</li>
              <li>• "Sector rotation today?"</li>
              <li>• Natural language queries</li>
              <li>• Voice interaction</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-xl text-green-400">Sentiment Signals</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Momentum shifts</li>
              <li>• Breakout alerts</li>
              <li>• Contrarian opportunities</li>
              <li>• Event-driven spikes</li>
              <li>• Trend confirmations</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Globe className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl text-purple-400">Global Coverage</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• 182+ news sources</li>
              <li>• 12 languages</li>
              <li>• Social media included</li>
              <li>• Regulatory filings</li>
              <li>• Earnings calls</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-red-900/20 to-green-900/20 mt-4"
        >
          <h4 className="text-lg text-teal-400 mb-2">What You Get:</h4>
          <p className="text-sm">
            <span className="text-red-400">Market sentiment</span> + 
            <span className="text-blue-400"> AI analysis</span> + 
            <span className="text-green-400"> actionable signals</span> = 
            <span className="text-teal-400 font-bold"> Information edge</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default SentimentModuleFeaturesSlide