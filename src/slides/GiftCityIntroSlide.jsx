import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Globe, Shield, TrendingUp } from 'lucide-react'

const GiftCityIntroSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-5xl mb-4">Act 6: GIFT City Advantage</h1>
          <h2 className="text-3xl text-teal-400 mb-8">India's Gateway to Global Finance</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Building2 className="w-8 h-8 text-teal-400 mr-3" />
              <h3 className="text-2xl text-teal-400">GIFT City IFSC</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✓</span>
                <span>India's first International Financial Services Centre</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✓</span>
                <span>Regulatory sandbox for fintech innovation</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✓</span>
                <span>Direct access to $5T Indian wealth market</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✓</span>
                <span>Tax-efficient structure for global investors</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl text-green-400">Regulatory Benefits</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>0% GST on services</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>10% corporate tax (vs 30% mainland)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>100% foreign ownership allowed</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>No capital gains tax for investors</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8"
        >
          <div className="glassmorphic-card bg-gradient-to-r from-teal-900/20 to-green-900/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Globe className="w-10 h-10 text-teal-400 mr-4" />
                <div>
                  <h4 className="text-xl text-teal-400">Vora Ventures GIFT IFSC</h4>
                  <p className="text-gray-400">Your gateway to India's $5 trillion opportunity</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp className="w-12 h-12 text-green-400" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GiftCityIntroSlide