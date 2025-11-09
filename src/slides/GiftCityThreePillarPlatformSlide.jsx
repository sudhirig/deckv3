import React from 'react'
import { motion } from 'framer-motion'
import CinematicSlideFrame from '../components/CinematicSlideFrame'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Brain, TrendingUp, Shield } from 'lucide-react'
import './SlideStyles.css'

const GiftCityThreePillarPlatformSlide = () => {
  return (
    <CinematicSlideFrame
      particleCount={50}
      particleColor="#8b5cf6"
      gradientColors={{
        primary: 'rgba(139, 92, 246, 0.12)',
        secondary: 'rgba(16, 185, 129, 0.08)'
      }}
      gradientPositions={{
        primary: '40% 30%',
        secondary: '60% 70%'
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
        >
          <h2 className="slide-title">
            <GradientText gradient="from-purple-400 via-green-400 to-blue-400">
              Three-Pillar Platform
            </GradientText>
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Building the Future of Digital Finance from GIFT City
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {/* Pillar 1: Technology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Brain className="w-10 h-10 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold">Pillar 1</h3>
            </div>
            <h4 className="text-xl text-purple-400 mb-3">AI Technology Platform</h4>
            
            <div className="space-y-3">
              <div className="border-l-2 border-purple-400 pl-3">
                <p className="font-semibold">68+ AI Agents</p>
                <p className="text-sm text-gray-400">Deployed & operational</p>
              </div>
              
              <div className="border-l-2 border-purple-400 pl-3">
                <p className="font-semibold">7 Live Modules</p>
                <p className="text-sm text-gray-400">Trading, advisory, sentiment</p>
              </div>
              
              <div className="border-l-2 border-purple-400 pl-3">
                <p className="font-semibold">11ms Response</p>
                <p className="text-sm text-gray-400">Ultra-low latency</p>
              </div>
            </div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-purple-400 mt-4"
            />
          </motion.div>

          {/* Pillar 2: Fund Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <TrendingUp className="w-10 h-10 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold">Pillar 2</h3>
            </div>
            <h4 className="text-xl text-green-400 mb-3">Category III AIF</h4>
            
            <div className="space-y-3">
              <div className="border-l-2 border-green-400 pl-3">
                <p className="font-semibold">$250M Target</p>
                <p className="text-sm text-gray-400">30-month horizon</p>
              </div>
              
              <div className="border-l-2 border-green-400 pl-3">
                <p className="font-semibold">AI-Driven Alpha</p>
                <p className="text-sm text-gray-400">600% advantage</p>
              </div>
              
              <div className="border-l-2 border-green-400 pl-3">
                <p className="font-semibold">Global LPs</p>
                <p className="text-sm text-gray-400">GIFT IFSC benefits</p>
              </div>
            </div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="h-1 bg-gradient-to-r from-green-500 to-green-400 mt-4"
            />
          </motion.div>

          {/* Pillar 3: Advisory Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Shield className="w-10 h-10 text-teal-400 mr-3" />
              <h3 className="text-2xl font-bold">Pillar 3</h3>
            </div>
            <h4 className="text-xl text-teal-400 mb-3">Investment Advisory</h4>
            
            <div className="space-y-3">
              <div className="border-l-2 border-teal-400 pl-3">
                <p className="font-semibold">IFSCA Licensed</p>
                <p className="text-sm text-gray-400">Full regulatory approval</p>
              </div>
              
              <div className="border-l-2 border-teal-400 pl-3">
                <p className="font-semibold">Family Office</p>
                <p className="text-sm text-gray-400">HNI & UHNI focus</p>
              </div>
              
              <div className="border-l-2 border-teal-400 pl-3">
                <p className="font-semibold">₹1.55L Savings</p>
                <p className="text-sm text-gray-400">Proven tax optimization</p>
              </div>
            </div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="h-1 bg-gradient-to-r from-teal-500 to-teal-400 mt-4"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-8 text-center glassmorphic-card bg-gradient-to-r from-purple-900/20 via-green-900/20 to-teal-900/20"
        >
          <p className="text-2xl font-bold">
            <span className="text-purple-400">Technology</span> + 
            <span className="text-green-400"> Fund</span> + 
            <span className="text-teal-400"> Advisory</span> = 
            <span className="gradient-text"> Complete Ecosystem</span>
          </p>
        </motion.div>
      </motion.div>
    </CinematicSlideFrame>
  )
}

export default GiftCityThreePillarPlatformSlide