import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Brain, MessageSquare, Activity } from 'lucide-react'

const SentimentModuleConceptSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Chapter 7: Sentiment Intelligence Module</h1>
          <p className="text-xl text-gray-400 mb-6">182+ News Sources, 500+ Stocks, Real-time Analysis</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glassmorphic-card mb-4"
        >
          <h3 className="text-xl text-teal-400 mb-3 text-center">News to Alpha Pipeline</h3>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <Globe className="w-10 h-10 text-blue-400 mx-auto mb-2" />
              <p className="text-sm font-semibold">182+ Sources</p>
              <p className="text-xs text-gray-400">Global coverage</p>
            </div>
            <span className="text-teal-400">→</span>
            <div className="text-center">
              <Brain className="w-10 h-10 text-purple-400 mx-auto mb-2" />
              <p className="text-sm font-semibold">FinBERT AI</p>
              <p className="text-xs text-gray-400">NLP processing</p>
            </div>
            <span className="text-teal-400">→</span>
            <div className="text-center">
              <Activity className="w-10 h-10 text-green-400 mx-auto mb-2" />
              <p className="text-sm font-semibold">Sentiment Score</p>
              <p className="text-xs text-gray-400">-100 to +100</p>
            </div>
            <span className="text-teal-400">→</span>
            <div className="text-center">
              <div className="text-2xl mb-2">🔥</div>
              <p className="text-sm font-semibold">Heat Map</p>
              <p className="text-xs text-gray-400">Visual insights</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <h4 className="text-lg text-blue-400 mb-2">News Sources</h4>
            <div className="grid grid-cols-2 gap-1 text-xs">
              <div>• Bloomberg</div>
              <div>• Reuters</div>
              <div>• CNBC</div>
              <div>• WSJ</div>
              <div>• Economic Times</div>
              <div>• Moneycontrol</div>
              <div>• Twitter/X</div>
              <div>• Reddit</div>
              <div>• +174 more</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <h4 className="text-lg text-purple-400 mb-2">FinBERT Processing</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Articles/Day:</span>
                <span className="text-purple-400">50,000+</span>
              </div>
              <div className="flex justify-between">
                <span>Processing Time:</span>
                <span className="text-green-400">&lt; 2 sec</span>
              </div>
              <div className="flex justify-between">
                <span>Languages:</span>
                <span className="text-blue-400">12</span>
              </div>
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span className="text-teal-400">94.3%</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-blue-900/20 to-purple-900/20 mt-4"
        >
          <h4 className="text-lg text-center mb-2">Nifty 500 Coverage</h4>
          <div className="grid grid-cols-5 gap-2 text-center">
            <div>
              <div className="text-xs text-gray-400">IT</div>
              <div className="w-full h-8 bg-green-500/30 rounded flex items-end justify-center">
                <span className="text-xs font-bold">+67</span>
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-400">Banking</div>
              <div className="w-full h-8 bg-blue-500/30 rounded flex items-end justify-center">
                <span className="text-xs font-bold">+23</span>
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-400">Auto</div>
              <div className="w-full h-8 bg-red-500/30 rounded flex items-end justify-center">
                <span className="text-xs font-bold">-15</span>
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-400">Pharma</div>
              <div className="w-full h-8 bg-green-500/30 rounded flex items-end justify-center">
                <span className="text-xs font-bold">+42</span>
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-400">FMCG</div>
              <div className="w-full h-8 bg-yellow-500/30 rounded flex items-end justify-center">
                <span className="text-xs font-bold">+5</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SentimentModuleConceptSlide