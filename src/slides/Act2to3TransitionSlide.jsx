import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { ArrowRight, Users, Cpu, Zap, Target, Award, Sparkles, TrendingUp, Shield, CheckCircle } from 'lucide-react'

const Act2to3TransitionSlide = () => {
  const [animateProgress, setAnimateProgress] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 500)
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
          <h1 className="gradient-text text-5xl mb-4">Solution Defined</h1>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 mb-4">
              <Sparkles className="w-10 h-10 text-teal-400" />
            </div>
            <h2 className="text-3xl text-teal-400">See the Proof</h2>
          </motion.div>
        </motion.div>

        {/* Enhanced Progress Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-4 gap-3 mb-6"
        >
          <div className="glassmorphic-card p-3 text-center">
            <Users className="w-5 h-5 text-purple-400 mx-auto mb-1" />
            <div className="text-2xl font-bold text-purple-400">
              <AnimatedCounter end={68} duration={1500} />+
            </div>
            <p className="text-xs text-gray-400">AI Agents</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <Target className="w-5 h-5 text-blue-400 mx-auto mb-1" />
            <div className="text-2xl font-bold text-blue-400">
              <AnimatedCounter end={7} duration={1500} />
            </div>
            <p className="text-xs text-gray-400">Modules</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <TrendingUp className="w-5 h-5 text-green-400 mx-auto mb-1" />
            <div className="text-2xl font-bold text-green-400">
              <AnimatedCounter end={250} duration={1500} />M
            </div>
            <p className="text-xs text-gray-400">Target AUM</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <Award className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
            <div className="text-2xl font-bold text-yellow-400">
              <AnimatedCounter end={100} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">Live</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          <motion.div 
            className="glassmorphic-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-3">
              <Cpu className="w-5 h-5 text-blue-400 mr-2" />
              <h3 className="text-lg text-blue-400 font-semibold">Solution Recap</h3>
            </div>
            <div className="space-y-3">
              {[
                { icon: <Users />, text: 'AI Family Office with 68+ agents', value: 68 },
                { icon: <Zap />, text: 'Three alpha sources automated', value: 3 },
                { icon: <Shield />, text: 'Institutional grade, retail access', value: 100 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 text-blue-300 mr-2">
                      {React.cloneElement(item.icon, { className: 'w-4 h-4' })}
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                  <CircularProgress value={item.value} size={30} strokeWidth={2} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="glassmorphic-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-3">
              <ArrowRight className="w-5 h-5 text-teal-400 mr-2" />
              <h3 className="text-lg text-teal-400 font-semibold">Coming Next</h3>
            </div>
            <div className="space-y-3">
              {[
                { icon: <CheckCircle />, text: 'Live platform demonstration', status: 'ready' },
                { icon: <CheckCircle />, text: 'Real customer results', status: 'ready' },
                { icon: <CheckCircle />, text: '100% operational today', status: 'ready' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    {React.cloneElement(item.icon, { 
                      className: `w-5 h-5 ${item.status === 'ready' ? 'text-green-400' : 'text-gray-400'} mr-2` 
                    })}
                  </motion.div>
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-12"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Journey Progress</span>
            <span className="text-sm text-teal-400">40%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '20%' }}
              animate={{ width: '40%' }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-full bg-gradient-to-r from-teal-500 to-green-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Act2to3TransitionSlide