import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { Rocket, Star, TrendingUp, Users, Target, Award, DollarSign, ArrowUpRight } from 'lucide-react'

const Act3to4TransitionSlide = () => {
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
          <h1 className="gradient-text text-5xl mb-4">Proof Established</h1>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/20 to-teal-500/20 mb-4">
              <Rocket className="w-10 h-10 text-teal-400" />
            </div>
            <h2 className="text-3xl text-teal-400">Scale the Impact</h2>
          </motion.div>
        </motion.div>

        {/* Impact Metrics */}
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
            <p className="text-xs text-gray-400">AI Agents Live</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <DollarSign className="w-5 h-5 text-green-400 mx-auto mb-1" />
            <div className="text-2xl font-bold text-green-400">
              ₹<AnimatedCounter end={1.55} decimals={2} duration={1500} />L
            </div>
            <p className="text-xs text-gray-400">Tax Saved</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <Target className="w-5 h-5 text-blue-400 mx-auto mb-1" />
            <div className="text-2xl font-bold text-blue-400">
              $<AnimatedCounter end={5} duration={1500} />T
            </div>
            <p className="text-xs text-gray-400">Market Size</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <ArrowUpRight className="w-5 h-5 text-teal-400 mx-auto mb-1" />
            <div className="text-2xl font-bold text-teal-400">
              <AnimatedCounter end={1000} duration={1500} />x
            </div>
            <p className="text-xs text-gray-400">30mo Target</p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          {/* Proven Results */}
          <motion.div 
            className="glassmorphic-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-3">
              <Star className="w-5 h-5 text-purple-400 mr-2" />
              <h3 className="text-lg text-purple-400 font-semibold">Proven Results</h3>
            </div>
            <div className="space-y-3">
              {[
                { icon: <Award />, text: 'Platform live & operational', progress: 100 },
                { icon: <Users />, text: '68+ AI agents deployed', progress: 100 },
                { icon: <DollarSign />, text: '₹1.55L savings demonstrated', progress: 100 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center flex-1">
                    <div className="w-6 h-6 text-purple-300 mr-2">
                      {React.cloneElement(item.icon, { className: 'w-4 h-4' })}
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                  <div className="flex items-center">
                    <CircularProgress value={item.progress} size={25} strokeWidth={2} />
                    <span className="ml-2 text-xs text-green-400">✓</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Success Indicators */}
            <div className="mt-4 pt-3 border-t border-gray-700/50">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-green-400">
                    <AnimatedCounter end={100} duration={1000} />%
                  </div>
                  <p className="text-xs text-gray-400">Live</p>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-400">
                    <AnimatedCounter end={7} duration={1000} />
                  </div>
                  <p className="text-xs text-gray-400">Modules</p>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-400">
                    <AnimatedCounter end={24} duration={1000} />hr
                  </div>
                  <p className="text-xs text-gray-400">Uptime</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Growth Path */}
          <motion.div 
            className="glassmorphic-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-3">
              <TrendingUp className="w-5 h-5 text-teal-400 mr-2" />
              <h3 className="text-lg text-teal-400 font-semibold">Growth Path</h3>
            </div>
            <div className="space-y-3">
              {[
                { metric: 'Market Opportunity', value: '$5T', trend: '+15% YoY' },
                { metric: 'Revenue Model', value: '3-tier', trend: '20/2/0.5%' },
                { metric: 'Scale Target', value: '1000x', trend: '30 months' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="bg-gradient-to-r from-teal-900/20 to-blue-900/20 rounded p-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">{item.metric}</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-teal-400">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.trend}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Growth Chart Visualization */}
            <div className="mt-4 pt-3 border-t border-gray-700/50">
              <p className="text-xs text-gray-400 mb-2">Projected Growth</p>
              <div className="flex items-end justify-between h-12">
                {[20, 35, 50, 70, 85, 100].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                    className="w-4 bg-gradient-to-t from-teal-500 to-green-500 rounded-t"
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>Q1</span>
                <span>Q4</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Journey Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-6"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400 flex items-center">
              <Rocket className="w-4 h-4 mr-1 text-teal-400" />
              Journey Progress
            </span>
            <span className="text-sm text-teal-400 font-bold">60% Complete</span>
          </div>
          
          <div className="relative">
            <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full"
                initial={{ width: '45%' }}
                animate={{ width: '60%' }}
                transition={{ delay: 2, duration: 1, ease: "easeOut" }}
              />
            </div>
            
            {/* Milestone Markers */}
            <div className="absolute top-0 left-0 w-full h-3 flex items-center">
              {[0, 20, 40, 60, 80, 100].map((pos, index) => (
                <motion.div
                  key={index}
                  className={`absolute w-2 h-2 rounded-full ${
                    pos <= 60 ? 'bg-teal-400' : 'bg-gray-600'
                  }`}
                  style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: pos <= 60 ? 1.2 : 0.8 }}
                  transition={{ delay: 2 + index * 0.1 }}
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-3 text-xs text-center">
            <span className="text-blue-400">✓ Act 1-3</span>
            <span className="text-teal-400 font-bold">→ Act 4: Team</span>
            <span className="text-gray-600">Act 5: Ask</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Act3to4TransitionSlide