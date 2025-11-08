import React from 'react'
import { motion } from 'framer-motion'
import { Camera, TrendingUp, Activity, BarChart3 } from 'lucide-react'

const AlgoTradingLiveSnapshotSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Algo Trading Live Snapshot</h1>
          <div className="flex items-center justify-center mb-3">
            <Camera className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-sm text-gray-400">Live Strategy Backtest & Performance</p>
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
              <span className="text-purple-400">ALGO LAB v2.0</span>
              <span className="text-gray-400 ml-2">Strategy: "Buy RSI oversold, sell overbought"</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-900/50 rounded p-2">
                <h4 className="text-green-400 mb-1">Natural Language Input</h4>
                <div className="bg-black/50 p-1 rounded font-mono text-xs">
                  "Buy when RSI &lt; 30 and price above 200 SMA.
                  Sell when RSI &gt; 70 or 10% profit reached.
                  Stop loss at 5%. Position size 2% of capital."
                </div>
                
                <div className="mt-2">
                  <p className="text-purple-400">AI Translation → Python Code</p>
                  <div className="bg-black/50 p-1 rounded font-mono text-green-400" style={{fontSize: '10px'}}>
                    if rsi &lt; 30 and price &gt; sma_200:
                    &nbsp;&nbsp;signal = 'BUY'
                    elif rsi &gt; 70 or profit &gt;= 0.10:
                    &nbsp;&nbsp;signal = 'SELL'
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded p-2">
                <h4 className="text-blue-400 mb-1">Backtest Results (5 Years)</h4>
                <div className="grid grid-cols-2 gap-1">
                  <div>
                    <p className="text-gray-400">Total Return:</p>
                    <p className="text-green-400 font-bold">+147.3%</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Annual Return:</p>
                    <p className="text-green-400 font-bold">19.8%</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Sharpe Ratio:</p>
                    <p className="text-blue-400 font-bold">1.92</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Win Rate:</p>
                    <p className="text-purple-400 font-bold">68%</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Max Drawdown:</p>
                    <p className="text-yellow-400 font-bold">-12.4%</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Total Trades:</p>
                    <p className="text-gray-300 font-bold">342</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-2 bg-gray-900/50 rounded p-2">
              <h4 className="text-orange-400 mb-1">Performance Chart</h4>
              <div className="h-16 flex items-end justify-around">
                <div className="bg-green-500/30 w-3" style={{height: '30%'}}></div>
                <div className="bg-green-500/30 w-3" style={{height: '45%'}}></div>
                <div className="bg-red-500/30 w-3" style={{height: '35%'}}></div>
                <div className="bg-green-500/30 w-3" style={{height: '55%'}}></div>
                <div className="bg-green-500/30 w-3" style={{height: '60%'}}></div>
                <div className="bg-green-500/30 w-3" style={{height: '75%'}}></div>
                <div className="bg-red-500/30 w-3" style={{height: '65%'}}></div>
                <div className="bg-green-500/30 w-3" style={{height: '85%'}}></div>
                <div className="bg-green-500/30 w-3" style={{height: '90%'}}></div>
                <div className="bg-green-500/30 w-3" style={{height: '100%'}}></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-400">
                <span>2019</span>
                <span>2024</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-2 text-center">
              <div className="bg-gray-900/50 rounded p-1">
                <p className="text-green-400 font-bold">LIVE</p>
                <p className="text-gray-500">Paper Trading</p>
              </div>
              <div className="bg-gray-900/50 rounded p-1">
                <p className="text-blue-400 font-bold">122</p>
                <p className="text-gray-500">Indicators Used</p>
              </div>
              <div className="bg-gray-900/50 rounded p-1">
                <p className="text-purple-400 font-bold">47ms</p>
                <p className="text-gray-500">Execution Time</p>
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
            Live Platform: <span className="text-teal-400">app.voraventures.ai/algo-lab</span> | 
            <span className="text-green-400 ml-2">✓ No coding required</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AlgoTradingLiveSnapshotSlide