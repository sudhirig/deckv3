import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react'
import { pxToRem } from '../utils/responsive'

const GiftCityCallToActionSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: pxToRem(-20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-5xl mb-4">Join Us in GIFT City</h1>
          <p className="text-xl text-gray-400 mb-8">Be Part of India's Financial Revolution</p>
        </motion.div>

        {/* Investment Opportunity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-teal-900/30 to-green-900/30 mb-6"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-teal-400 mb-4">The Opportunity is NOW</h2>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-4xl font-bold gradient-text">$3M</p>
                <p className="text-sm text-gray-400">Current Round</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text">83x</p>
                <p className="text-sm text-gray-400">Growth Target</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text">30</p>
                <p className="text-sm text-gray-400">Months to $250M</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Reasons */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: pxToRem(20) }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="text-center">
              <div className="text-3xl mb-2">🏛️</div>
              <h3 className="text-lg text-teal-400 mb-2">Regulatory Advantage</h3>
              <p className="text-sm text-gray-400">IFSCA licensed, 0% tax for investors</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: pxToRem(20) }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="text-lg text-teal-400 mb-2">AI Technology</h3>
              <p className="text-sm text-gray-400">68+ agents, 600% alpha advantage</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: pxToRem(20) }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="text-center">
              <div className="text-3xl mb-2">🌏</div>
              <h3 className="text-lg text-teal-400 mb-2">India Gateway</h3>
              <p className="text-sm text-gray-400">$5T market, direct access</p>
            </div>
          </motion.div>
        </div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="glassmorphic-card"
        >
          <h3 className="text-2xl text-center text-teal-400 mb-6">Next Steps</h3>
          
          <div className="grid grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center cursor-pointer"
            >
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-teal-400" />
              </div>
              <h4 className="text-lg font-bold mb-1">1. Schedule Call</h4>
              <p className="text-xs text-gray-400">30-min intro with founders</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center cursor-pointer"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-lg font-bold mb-1">2. Due Diligence</h4>
              <p className="text-xs text-gray-400">Full access to platform & data</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <div className="text-2xl">🤝</div>
                </motion.div>
              </div>
              <h4 className="text-lg font-bold mb-1">3. Partnership</h4>
              <p className="text-xs text-gray-400">Join as LP or strategic investor</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-6 text-center"
        >
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-teal-400 mr-2" />
              <span className="text-sm">invest@voraventures.gift</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-sm">+91 98765 43210</span>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg text-white font-bold text-lg"
          >
            Start the Conversation →
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default GiftCityCallToActionSlide