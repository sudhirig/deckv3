import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Activity, TrendingUp, MessageSquare } from 'lucide-react'
import { pxToRem } from '../utils/responsive'

const SentimentModuleLiveSnapshotSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Sentiment Module Live Snapshot</h1>
          <div className="flex items-center justify-center mb-3">
            <Camera className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-sm text-gray-400">Interactive Nifty 500 Heat Map - Real-time</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-2"
        >
          <div className="bg-black/70 rounded-lg p-2 text-xs">
            <div className="border-b border-gray-700 pb-1 mb-2">
              <span className="text-purple-400">SENTIMENT HEAT MAP</span>
              <span className="text-gray-400 ml-2">Last Update: 2 seconds ago | 182 sources analyzed</span>
            </div>
            
            {/* Heat Map Grid */}
            <div className="grid grid-cols-10 gap-1 mb-2">
              {/* Row 1 - IT Sector */}
              <div className="bg-green-500/70 p-1 rounded text-center">
                <div className="font-bold">TCS</div>
                <div>+67</div>
              </div>
              <div className="bg-green-500/50 p-1 rounded text-center">
                <div className="font-bold">INFY</div>
                <div>+45</div>
              </div>
              <div className="bg-green-500/60 p-1 rounded text-center">
                <div className="font-bold">WIPRO</div>
                <div>+52</div>
              </div>
              <div className="bg-yellow-500/50 p-1 rounded text-center">
                <div className="font-bold">HCL</div>
                <div>+12</div>
              </div>
              <div className="bg-green-500/40 p-1 rounded text-center">
                <div className="font-bold">TECHM</div>
                <div>+38</div>
              </div>
              
              {/* Row 1 - Banking */}
              <div className="bg-blue-500/60 p-1 rounded text-center">
                <div className="font-bold">HDFC</div>
                <div>+23</div>
              </div>
              <div className="bg-blue-500/50 p-1 rounded text-center">
                <div className="font-bold">ICICI</div>
                <div>+18</div>
              </div>
              <div className="bg-yellow-500/40 p-1 rounded text-center">
                <div className="font-bold">AXIS</div>
                <div>+5</div>
              </div>
              <div className="bg-blue-500/70 p-1 rounded text-center">
                <div className="font-bold">KOTAK</div>
                <div>+31</div>
              </div>
              <div className="bg-red-500/30 p-1 rounded text-center">
                <div className="font-bold">SBI</div>
                <div>-8</div>
              </div>
              
              {/* Row 2 - Mixed sectors */}
              <div className="bg-green-500/80 p-1 rounded text-center">
                <div className="font-bold">RIL</div>
                <div>+72</div>
              </div>
              <div className="bg-red-500/50 p-1 rounded text-center">
                <div className="font-bold">TATA</div>
                <div>-24</div>
              </div>
              <div className="bg-green-500/30 p-1 rounded text-center">
                <div className="font-bold">BHARTI</div>
                <div>+15</div>
              </div>
              <div className="bg-red-500/60 p-1 rounded text-center">
                <div className="font-bold">MARUTI</div>
                <div>-35</div>
              </div>
              <div className="bg-yellow-500/50 p-1 rounded text-center">
                <div className="font-bold">ITC</div>
                <div>0</div>
              </div>
              <div className="bg-green-500/70 p-1 rounded text-center">
                <div className="font-bold">L&T</div>
                <div>+58</div>
              </div>
              <div className="bg-red-500/40 p-1 rounded text-center">
                <div className="font-bold">COAL</div>
                <div>-18</div>
              </div>
              <div className="bg-green-500/50 p-1 rounded text-center">
                <div className="font-bold">SUNPHRM</div>
                <div>+42</div>
              </div>
              <div className="bg-yellow-500/60 p-1 rounded text-center">
                <div className="font-bold">HINDUL</div>
                <div>+8</div>
              </div>
              <div className="bg-green-500/40 p-1 rounded text-center">
                <div className="font-bold">ASIAN</div>
                <div>+28</div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-gray-400">Bullish (+50 to +100)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                <span className="text-gray-400">Neutral (-20 to +20)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-gray-400">Bearish (-100 to -50)</span>
              </div>
            </div>
            
            {/* Chat Interface */}
            <div className="bg-gray-900/50 rounded p-2">
              <h4 className="text-blue-400 mb-1">Conversational Interface</h4>
              <div className="bg-black/50 p-1 rounded">
                <p className="text-orange-400">User: "What's driving TCS sentiment?"</p>
                <p className="text-purple-400 mt-1">AI: TCS sentiment +67 driven by:</p>
                <ul className="text-gray-300 ml-2">
                  <li>• Q3 earnings beat estimates by 12%</li>
                  <li>• $2B deal win announcement</li>
                  <li>• 84% positive mentions across 42 articles</li>
                </ul>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-4 gap-2 mt-2 text-center">
              <div className="bg-gray-900/50 rounded p-1">
                <p className="text-green-400 font-bold">62%</p>
                <p className="text-gray-500">Bullish</p>
              </div>
              <div className="bg-gray-900/50 rounded p-1">
                <p className="text-red-400 font-bold">23%</p>
                <p className="text-gray-500">Bearish</p>
              </div>
              <div className="bg-gray-900/50 rounded p-1">
                <p className="text-purple-400 font-bold">50K</p>
                <p className="text-gray-500">Articles/Day</p>
              </div>
              <div className="bg-gray-900/50 rounded p-1">
                <p className="text-teal-400 font-bold">2 sec</p>
                <p className="text-gray-500">Refresh</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center mt-2"
        >
          <p className="text-xs text-gray-500">
            Live Platform: <span className="text-teal-400">app.voraventures.ai/sentiment</span> | 
            <span className="text-green-400 ml-2">✓ Real-time market mood</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default SentimentModuleLiveSnapshotSlide