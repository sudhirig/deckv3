import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CinematicSlideFrame from '../components/CinematicSlideFrame'
import GradientText from '../components/GradientText'
import { Building, ArrowDown, Globe, Shield, TrendingUp, DollarSign, Percent } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import './SlideStyles.css'

const GiftCityEntityStructureSlide = () => {
  const [animateFlow, setAnimateFlow] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateFlow(true), 500)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <CinematicSlideFrame
      particleCount={45}
      particleColor="#06b6d4"
      gradientColors={{
        primary: 'rgba(6, 182, 212, 0.12)',
        secondary: 'rgba(14, 165, 233, 0.08)'
      }}
      gradientPositions={{
        primary: '30% 50%',
        secondary: '70% 50%'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="glass-card"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="slide-title">
            <GradientText gradient="from-cyan-400 via-blue-400 to-indigo-400">
              Vora Ventures Entity Structure
            </GradientText>
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Three-Layer Global Architecture
          </p>
        </motion.div>

        {/* Visual Flow Diagram */}
        <div className="relative">
          {/* Animated Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {animateFlow && (
              <>
                <motion.line
                  x1="50%" y1="25%" x2="50%" y2="45%"
                  stroke="url(#flowGradient)" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.line
                  x1="50%" y1="55%" x2="50%" y2="75%"
                  stroke="url(#flowGradient)" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </>
            )}
          </svg>
          
          <div className="flex flex-col items-center relative z-10">
            {/* US Entity with Metrics */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              className="glassmorphic-card w-full max-w-lg mb-4 border border-blue-500/20"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Globe className="w-6 h-6 text-blue-400 mr-2" />
                    <h3 className="text-xl font-bold text-blue-400">Vora Ventures LLC</h3>
                  </div>
                  <p className="text-sm text-gray-400">Delaware, USA</p>
                  <p className="text-sm mt-2">Global Holding Entity</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">
                    $<AnimatedCounter end={250} duration={1500} />M
                  </div>
                  <p className="text-xs text-gray-400">Target AUM</p>
                </div>
              </div>
            </motion.div>

            {/* Animated Flow Arrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              className="my-2"
            >
              <ArrowDown className="w-8 h-8 text-teal-400 animate-pulse" />
            </motion.div>

            {/* India Entity with Tax Benefits */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="glassmorphic-card w-full max-w-lg mb-4 border border-orange-500/20"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Building className="w-6 h-6 text-orange-400 mr-2" />
                    <h3 className="text-xl font-bold text-orange-400">Vora Ventures LLP</h3>
                  </div>
                  <p className="text-sm text-gray-400">Mumbai, India</p>
                  <p className="text-sm mt-2">Operations Hub</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-right">
                  <div>
                    <div className="text-lg font-bold text-green-400">
                      <AnimatedCounter end={30} duration={1000} />%
                    </div>
                    <p className="text-xs text-gray-400">Tax Rate</p>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-400">
                      <AnimatedCounter end={100} duration={1000} />+
                    </div>
                    <p className="text-xs text-gray-400">Team</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Animated Flow Arrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.3 }}
              className="my-2"
            >
              <ArrowDown className="w-8 h-8 text-teal-400 animate-pulse" />
            </motion.div>

            {/* GIFT City Entities with Enhanced Metrics */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="grid grid-cols-3 gap-3 w-full"
            >
              {/* Tech LLP */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glassmorphic-card border border-teal-500/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-teal-400 mr-2" />
                    <h4 className="text-sm font-bold text-teal-400">Tech LLP</h4>
                  </div>
                  <CircularProgress value={100} size={30} strokeWidth={3} />
                </div>
                <p className="text-xs text-gray-400 mb-2">GIFT IFSC</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">GST</span>
                    <span className="text-sm font-bold text-green-400">0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Tax</span>
                    <span className="text-sm font-bold text-green-400">10%</span>
                  </div>
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '90%' }}
                      transition={{ delay: 2.5, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-teal-500 to-green-500"
                    />
                  </div>
                  <p className="text-xs text-teal-400">AI Platform Ready</p>
                </div>
              </motion.div>

              {/* AIF LLP */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glassmorphic-card border border-purple-500/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-purple-400 mr-2" />
                    <h4 className="text-sm font-bold text-purple-400">AIF LLP</h4>
                  </div>
                  <div className="text-lg font-bold text-purple-400">
                    $<AnimatedCounter end={250} duration={1500} />M
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-2">Category III AIF</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Global LPs</span>
                    <span className="text-sm font-bold text-blue-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Tax Pass</span>
                    <span className="text-sm font-bold text-green-400">✓</span>
                  </div>
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ delay: 2.7, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                  <p className="text-xs text-purple-400">Fund Raising</p>
                </div>
              </motion.div>

              {/* Advisory LLP */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glassmorphic-card border border-green-500/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                    <h4 className="text-sm font-bold text-green-400">Advisory LLP</h4>
                  </div>
                  <Percent className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-xs text-gray-400 mb-2">IFSCA Licensed</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Cap Gains</span>
                    <span className="text-sm font-bold text-green-400">0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Global</span>
                    <span className="text-sm font-bold text-blue-400">✓</span>
                  </div>
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 2.9, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                    />
                  </div>
                  <p className="text-xs text-green-400">Operational</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Metrics Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.6 }}
          className="mt-6 grid grid-cols-4 gap-4"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-400">
              <AnimatedCounter end={0} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">GST Rate</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              <AnimatedCounter end={10} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">Corp Tax</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">
              <AnimatedCounter end={100} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">Compliant</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">
              <AnimatedCounter end={3} duration={1500} />
            </div>
            <p className="text-xs text-gray-400">Entities</p>
          </div>
        </motion.div>
      </motion.div>
    </CinematicSlideFrame>
  )
}

export default GiftCityEntityStructureSlide