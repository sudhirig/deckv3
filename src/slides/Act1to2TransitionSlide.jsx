import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Brain, Target, DollarSign, Users, ArrowRight } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'

const Act1to2TransitionSlide = () => {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => setProgress(20), 500)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-5xl mb-6">From Problem to Solution</h1>
          
          {/* Visual Journey with Icons and Progress */}
          <div className="flex items-center justify-between mb-8 relative px-8">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 -translate-y-1/2" />
            <motion.div
              className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-red-500 to-green-500 -translate-y-1/2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="relative z-10 bg-gray-900 p-3 rounded-lg border border-red-500/30"
            >
              <TrendingUp className="w-10 h-10 text-red-500 mx-auto mb-1" />
              <p className="text-sm font-bold text-gray-300">Problem</p>
              <p className="text-xs text-gray-500">97% locked</p>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
              className="relative z-10 bg-gray-900 p-3 rounded-lg border border-purple-500/30"
            >
              <Brain className="w-10 h-10 text-purple-500 mx-auto mb-1" />
              <p className="text-sm font-bold text-gray-300">Discovery</p>
              <p className="text-xs text-gray-500">AI breakthrough</p>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.4, type: "spring" }}
              className="relative z-10 bg-gray-900 p-3 rounded-lg border border-green-500/30"
            >
              <Target className="w-10 h-10 text-green-500 mx-auto mb-1" />
              <p className="text-sm font-bold text-gray-300">Solution</p>
              <p className="text-xs text-gray-500">Digital Office</p>
            </motion.div>
          </div>
          
          {/* Key Metrics with Animated Counters */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="glassmorphic-card p-3 text-center"
            >
              <DollarSign className="w-6 h-6 text-green-400 mx-auto mb-1" />
              <div className="text-2xl font-bold text-green-400">
                $<AnimatedCounter end={5} duration={1500} />T
              </div>
              <p className="text-xs text-gray-400">Market Size</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="glassmorphic-card p-3 text-center"
            >
              <Users className="w-6 h-6 text-blue-400 mx-auto mb-1" />
              <div className="text-2xl font-bold text-blue-400">
                <AnimatedCounter end={97} duration={1500} />%
              </div>
              <p className="text-xs text-gray-400">Underserved</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
              className="glassmorphic-card p-3 text-center"
            >
              <Brain className="w-6 h-6 text-purple-400 mx-auto mb-1" />
              <div className="text-2xl font-bold text-purple-400">
                <AnimatedCounter end={68} duration={1500} />+
              </div>
              <p className="text-xs text-gray-400">AI Agents</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 }}
              className="glassmorphic-card p-3 text-center"
            >
              <ArrowRight className="w-6 h-6 text-teal-400 mx-auto mb-1" />
              <div className="text-2xl font-bold text-teal-400">
                <AnimatedCounter end={600} duration={1500} />%
              </div>
              <p className="text-xs text-gray-400">Alpha Gain</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="grid grid-cols-2 gap-6 mt-8"
        >
          {/* Problem Bar Chart */}
          <div className="glassmorphic-card p-4">
            <h3 className="text-lg text-red-400 mb-3 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Problems Identified
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Locked Capital', value: 97, color: 'bg-red-500' },
                { label: 'No AI Access', value: 95, color: 'bg-orange-500' },
                { label: 'Tax Inefficient', value: 89, color: 'bg-yellow-500' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="text-gray-300">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ delay: 2.8 + idx * 0.1, duration: 0.6 }}
                      className={`h-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Solution Bar Chart */}
          <div className="glassmorphic-card p-4">
            <h3 className="text-lg text-green-400 mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Solutions Delivered
            </h3>
            <div className="space-y-3">
              {[
                { label: 'AI Agents Ready', value: 68, color: 'bg-green-500' },
                { label: 'Tax Optimized', value: 100, color: 'bg-teal-500' },
                { label: 'India Unlocked', value: 100, color: 'bg-blue-500' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="text-gray-300">{item.label === 'AI Agents Ready' ? '68+' : item.value + '%'}</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ delay: 3.1 + idx * 0.1, duration: 0.6 }}
                      className={`h-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Journey Progress with Circular Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-6"
        >
          <CircularProgress value={progress} size={80} strokeWidth={6} />
          <div>
            <p className="text-xl text-teal-400 font-semibold">Journey Progress</p>
            <p className="text-sm text-gray-400">Transitioning from Act 1 to Act 2</p>
            <p className="text-xs text-gray-500 mt-1">Next: The AI-Powered Solution</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Act1to2TransitionSlide