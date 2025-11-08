import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Shield, Globe, Zap } from 'lucide-react'

const GiftCityAIFAdvantagesSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-5xl mb-4">Category III AIF Advantages</h1>
          <p className="text-xl text-gray-400 mb-8">Why GIFT City Makes Our Fund Superior</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {/* Tax Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <DollarSign className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl text-green-400">Tax Efficiency</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Corporate Tax</span>
                <span className="text-2xl font-bold text-green-400">10%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">GST on Services</span>
                <span className="text-2xl font-bold text-green-400">0%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Capital Gains (Investors)</span>
                <span className="text-2xl font-bold text-green-400">0%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Withholding Tax</span>
                <span className="text-2xl font-bold text-green-400">Exempt</span>
              </div>
            </div>
          </motion.div>

          {/* Regulatory Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl text-blue-400">Regulatory Edge</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">✓</span>
                <div>
                  <p className="font-semibold">IFSCA Oversight</p>
                  <p className="text-sm text-gray-400">World-class regulatory framework</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">✓</span>
                <div>
                  <p className="font-semibold">100% Foreign Ownership</p>
                  <p className="text-sm text-gray-400">No restrictions on LP nationality</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">✓</span>
                <div>
                  <p className="font-semibold">USD Denominated</p>
                  <p className="text-sm text-gray-400">Natural hedge against INR</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Market Access */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl text-purple-400">Market Access</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">→</span>
                <div>
                  <p className="font-semibold">Indian Markets</p>
                  <p className="text-sm text-gray-400">Direct access to NSE, BSE</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">→</span>
                <div>
                  <p className="font-semibold">Global Markets</p>
                  <p className="text-sm text-gray-400">Trade US, EU, Asia exchanges</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">→</span>
                <div>
                  <p className="font-semibold">Alternative Assets</p>
                  <p className="text-sm text-gray-400">Crypto, commodities, derivatives</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Performance Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl text-yellow-400">Performance Edge</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">⚡</span>
                <div>
                  <p className="font-semibold">Low Latency Trading</p>
                  <p className="text-sm text-gray-400">Direct exchange connectivity</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">⚡</span>
                <div>
                  <p className="font-semibold">24/7 Operations</p>
                  <p className="text-sm text-gray-400">Trade global markets round the clock</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">⚡</span>
                <div>
                  <p className="font-semibold">Leverage Allowed</p>
                  <p className="text-sm text-gray-400">Up to 10x for sophisticated strategies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-6 text-center glassmorphic-card bg-gradient-to-r from-green-900/20 to-blue-900/20"
        >
          <p className="text-xl">
            Mainland India Fund: <span className="text-red-400">30% tax + 18% GST</span> vs 
            GIFT City AIF: <span className="text-green-400"> 10% tax + 0% GST</span>
          </p>
          <p className="text-2xl font-bold text-teal-400 mt-2">38% Cost Advantage</p>
        </motion.div>
      </div>
    </div>
  )
}

export default GiftCityAIFAdvantagesSlide