import React from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, PiggyBank, Award } from 'lucide-react'

const GiftCityTaxOptimizationSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-5xl mb-4">Tax Optimization Showcase</h1>
          <p className="text-xl text-gray-400 mb-8">Real Savings for Real Investors</p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glassmorphic-card mb-6"
        >
          <h3 className="text-2xl text-teal-400 mb-4">₹1 Crore Investment Comparison</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="text-lg text-gray-400 mb-3">Investment Type</h4>
              <div className="space-y-2">
                <p className="text-sm">Direct Equity (Mainland)</p>
                <p className="text-sm">Mutual Funds (Mainland)</p>
                <p className="text-sm font-bold text-teal-400">GIFT City AIF</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg text-gray-400 mb-3">Annual Tax</h4>
              <div className="space-y-2">
                <p className="text-sm text-red-400">₹3.00L (30%)</p>
                <p className="text-sm text-orange-400">₹2.00L (20%)</p>
                <p className="text-sm font-bold text-green-400">₹1.00L (10%)</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg text-gray-400 mb-3">5-Year Savings</h4>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Baseline</p>
                <p className="text-sm text-yellow-400">₹5.00L saved</p>
                <p className="text-sm font-bold text-green-400">₹10.00L saved</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ELSS vs GIFT City */}
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <PiggyBank className="w-6 h-6 text-orange-400 mr-2" />
              <h4 className="text-xl text-orange-400">Traditional ELSS</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Max Deduction:</span>
                <span className="text-orange-400">₹1.5L</span>
              </li>
              <li className="flex justify-between">
                <span>Lock-in Period:</span>
                <span className="text-orange-400">3 years</span>
              </li>
              <li className="flex justify-between">
                <span>Tax on Gains:</span>
                <span className="text-red-400">10-15%</span>
              </li>
              <li className="flex justify-between">
                <span>Annual Benefit:</span>
                <span className="text-orange-400">₹46,800</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="glassmorphic-card border border-teal-500/30"
          >
            <div className="flex items-center mb-3">
              <Award className="w-6 h-6 text-teal-400 mr-2" />
              <h4 className="text-xl text-teal-400">GIFT City AIF</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Max Investment:</span>
                <span className="text-green-400">Unlimited</span>
              </li>
              <li className="flex justify-between">
                <span>Lock-in Period:</span>
                <span className="text-green-400">None</span>
              </li>
              <li className="flex justify-between">
                <span>Tax on Gains:</span>
                <span className="text-green-400">0%</span>
              </li>
              <li className="flex justify-between">
                <span>Annual Benefit:</span>
                <span className="text-green-400 font-bold">₹1.55L+</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Real Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-teal-900/20 to-green-900/20 mt-6"
        >
          <div className="flex items-center mb-3">
            <Calculator className="w-8 h-8 text-teal-400 mr-3" />
            <h3 className="text-2xl text-teal-400">Real Client Example</h3>
          </div>
          
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-400">Portfolio Size</p>
              <p className="text-2xl font-bold">₹5 Cr</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Annual Returns</p>
              <p className="text-2xl font-bold text-blue-400">22%</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Tax Saved/Year</p>
              <p className="text-2xl font-bold text-green-400">₹1.55L</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">10-Year Benefit</p>
              <p className="text-2xl font-bold text-teal-400">₹15.5L</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GiftCityTaxOptimizationSlide