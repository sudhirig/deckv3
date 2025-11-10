import React from 'react'
import { motion } from 'framer-motion'
import { Globe2, Users, MapPin, Briefcase } from 'lucide-react'
import { pxToRem } from '../utils/responsive'

const GiftCityGlobalInvestorAccessSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: pxToRem(-20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-5xl mb-4">Global Investor Access</h1>
          <p className="text-xl text-gray-400 mb-8">Connecting International Capital to Indian Growth</p>
        </motion.div>

        {/* World Map Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glassmorphic-card mb-6"
        >
          <div className="flex justify-center items-center mb-4">
            <Globe2 className="w-16 h-16 text-teal-400" />
          </div>
          
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <p className="text-lg font-bold text-blue-400">USA</p>
              <p className="text-sm text-gray-400">Silicon Valley VCs</p>
              <p className="text-xs">No withholding tax</p>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-lg font-bold text-green-400">Singapore</p>
              <p className="text-sm text-gray-400">Family Offices</p>
              <p className="text-xs">Tax treaty benefits</p>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-lg font-bold text-purple-400">Dubai</p>
              <p className="text-sm text-gray-400">Sovereign Funds</p>
              <p className="text-xs">0% capital gains</p>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-2" />
              <p className="text-lg font-bold text-orange-400">London</p>
              <p className="text-sm text-gray-400">Pension Funds</p>
              <p className="text-xs">FCA recognized</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {/* Investor Types */}
          <motion.div
            initial={{ opacity: 0, x: pxToRem(-20) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-teal-400 mr-3" />
              <h3 className="text-xl text-teal-400">LP Categories</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Family Offices</span>
                <div className="flex items-center">
                  <div className="h-2 w-20 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full mr-2" />
                  <span className="text-sm font-bold">40%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">HNI/UHNI</span>
                <div className="flex items-center">
                  <div className="h-2 w-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mr-2" />
                  <span className="text-sm font-bold">30%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Institutional</span>
                <div className="flex items-center">
                  <div className="h-2 w-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full mr-2" />
                  <span className="text-sm font-bold">20%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Sovereign/Pension</span>
                <div className="flex items-center">
                  <div className="h-2 w-8 bg-gradient-to-r from-green-500 to-green-400 rounded-full mr-2" />
                  <span className="text-sm font-bold">10%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Investment Benefits */}
          <motion.div
            initial={{ opacity: 0, x: pxToRem(20) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-xl text-green-400">Why They Choose Us</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <div>
                  <p className="font-semibold text-sm">India Exposure</p>
                  <p className="text-xs text-gray-400">Direct access to fastest growing major economy</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <div>
                  <p className="font-semibold text-sm">Tax Efficiency</p>
                  <p className="text-xs text-gray-400">0% capital gains, no STT</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <div>
                  <p className="font-semibold text-sm">AI Alpha</p>
                  <p className="text-xs text-gray-400">600% advantage through 68+ agents</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <div>
                  <p className="font-semibold text-sm">USD Denominated</p>
                  <p className="text-xs text-gray-400">Natural hedge, no FX risk</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 glassmorphic-card bg-gradient-to-r from-teal-900/20 to-green-900/20"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-teal-400">100%</p>
              <p className="text-sm text-gray-400">Foreign Ownership Allowed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-400">45+</p>
              <p className="text-sm text-gray-400">Countries Accessible</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">24/7</p>
              <p className="text-sm text-gray-400">Global Market Coverage</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GiftCityGlobalInvestorAccessSlide