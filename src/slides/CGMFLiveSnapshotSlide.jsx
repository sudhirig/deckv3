import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Calculator, TrendingUp, Award, PiggyBank, Shield, Target, CheckCircle, DollarSign, Percent } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'

const CGMFLiveSnapshotSlide = () => {
  const [animateMetrics, setAnimateMetrics] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 500)
    return () => clearTimeout(timer)
  }, [])
  
  // Sample data for charts
  const returnsData = [
    { label: '2019', value: 12, displayValue: '12%' },
    { label: '2020', value: 18, displayValue: '18%' },
    { label: '2021', value: 28, displayValue: '28%' },
    { label: '2022', value: 15, displayValue: '15%' },
    { label: '2023', value: 22, displayValue: '22%' },
    { label: '2024', value: 24, displayValue: '24%' }
  ]
  
  const fundScoreData = [
    { label: 'Axis ELSS', value: 95, displayValue: '95' },
    { label: 'Mirae Tax', value: 93, displayValue: '93' },
    { label: 'Quant Tax', value: 91, displayValue: '91' },
    { label: 'SBI ELSS', value: 88, displayValue: '88' }
  ]
  
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">CGMF Unified Fund Platform</h1>
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-5 h-5 text-red-500 mr-2 animate-pulse" />
            <p className="text-sm text-gray-400">Live Dashboard - 16,766 Active Funds</p>
          </div>
        </motion.div>

        {/* Top Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-6 gap-2 mb-4"
        >
          <div className="glassmorphic-card p-2 text-center">
            <PiggyBank className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-green-400">
              ₹<AnimatedCounter end={1.55} decimals={2} duration={1500} />L
            </div>
            <p className="text-xs text-gray-400">Tax Saved</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Target className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-blue-400">
              <AnimatedCounter end={16766} duration={2000} />
            </div>
            <p className="text-xs text-gray-400">Total Funds</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Award className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-purple-400">
              <AnimatedCounter end={95} duration={1500} />
            </div>
            <p className="text-xs text-gray-400">Top Score</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <TrendingUp className="w-4 h-4 text-teal-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-teal-400">
              <AnimatedCounter end={24} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">Avg Return</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <Shield className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-yellow-400">
              <AnimatedCounter end={7} duration={1000} />
            </div>
            <p className="text-xs text-gray-400">AI Agents</p>
          </div>
          <div className="glassmorphic-card p-2 text-center">
            <CheckCircle className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <div className="text-lg font-bold text-green-400">
              <AnimatedCounter end={100} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">Authentic</p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Side - Fund Recommendations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <h3 className="text-sm font-semibold text-purple-400 mb-3 flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Top ELSS Recommendations
            </h3>
            <BarChart data={fundScoreData} height={100} colorScheme="gradient" animated={animateMetrics} />
            
            {/* Tax Optimization Summary */}
            <div className="mt-3 p-2 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-400">Section 80C Used:</span>
                  <div className="text-lg font-bold text-green-400">
                    ₹<AnimatedCounter end={1.5} decimals={1} duration={1500} />L
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Total Annual Savings:</span>
                  <div className="text-lg font-bold text-teal-400">
                    ₹<AnimatedCounter end={1.55} decimals={2} duration={1500} />L
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <h3 className="text-sm font-semibold text-teal-400 mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              6-Year Performance Trend
            </h3>
            <LineChart data={returnsData} height={100} animated={animateMetrics} />
            
            {/* AI Agent Status */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="text-center p-1 bg-green-900/20 rounded">
                <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mb-1 animate-pulse"></div>
                <p className="text-xs text-green-400">Goal Agent</p>
                <p className="text-xs text-gray-400">Active</p>
              </div>
              <div className="text-center p-1 bg-blue-900/20 rounded">
                <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto mb-1 animate-pulse"></div>
                <p className="text-xs text-blue-400">Tax Agent</p>
                <p className="text-xs text-gray-400">Active</p>
              </div>
              <div className="text-center p-1 bg-purple-900/20 rounded">
                <div className="w-2 h-2 bg-purple-400 rounded-full mx-auto mb-1 animate-pulse"></div>
                <p className="text-xs text-purple-400">Risk Agent</p>
                <p className="text-xs text-gray-400">Analyzing</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Portfolio Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="glassmorphic-card mt-4 bg-gradient-to-r from-teal-900/20 to-purple-900/20"
        >
          <h3 className="text-sm font-semibold text-teal-400 mb-2">Live Portfolio Snapshot</h3>
          <div className="grid grid-cols-5 gap-3">
            {[
              { label: 'Portfolio Value', value: '₹50L', color: 'text-blue-400' },
              { label: 'Today\'s Change', value: '+₹25K', color: 'text-green-400' },
              { label: 'YTD Returns', value: '+24%', color: 'text-teal-400' },
              { label: 'Active Funds', value: '12', color: 'text-purple-400' },
              { label: 'Tax Saved YTD', value: '₹1.55L', color: 'text-green-400' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className={`text-lg font-bold ${item.color}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="text-center mt-3"
        >
          <p className="text-xs text-gray-500">
            Live Platform: <span className="text-teal-400">app.voraventures.ai/cgmf</span> | 
            <span className="text-green-400 ml-2">✓ Real AMC Data</span> | 
            <span className="text-purple-400 ml-2">✓ AI-Powered</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default CGMFLiveSnapshotSlide