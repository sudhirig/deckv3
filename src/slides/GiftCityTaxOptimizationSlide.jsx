import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, PiggyBank, Award, DollarSign, Shield, Percent, ArrowRight } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import BarChart from '../components/BarChart'

const GiftCityTaxOptimizationSlide = () => {
  const [animateMetrics, setAnimateMetrics] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 500)
    return () => clearTimeout(timer)
  }, [])
  
  // Sample data for comparison chart
  const taxComparisonData = [
    { label: 'Mainland', value: 30, displayValue: '30%' },
    { label: 'MF Tax', value: 20, displayValue: '20%' },
    { label: 'GIFT City', value: 10, displayValue: '10%' },
    { label: 'No GST', value: 0, displayValue: '0%' }
  ]
  
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-3">Tax Optimization Showcase</h1>
          <p className="text-lg text-gray-400 mb-4">Real Savings for Real Investors</p>
        </motion.div>

        {/* Top Savings Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-4 gap-3 mb-4"
        >
          <div className="glassmorphic-card p-3 text-center">
            <DollarSign className="w-5 h-5 text-green-400 mx-auto mb-1" />
            <div className="text-2xl font-bold text-green-400">
              ₹<AnimatedCounter end={10} duration={1500} />L
            </div>
            <p className="text-xs text-gray-400">5-Year Savings</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <Shield className="w-5 h-5 text-teal-400 mx-auto mb-1" />
            <div className="text-2xl font-bold text-teal-400">
              <AnimatedCounter end={0} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">GST Rate</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <Percent className="w-5 h-5 text-purple-400 mx-auto mb-1" />
            <div className="text-2xl font-bold text-purple-400">
              <AnimatedCounter end={10} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">Corp Tax</p>
          </div>
          <div className="glassmorphic-card p-3 text-center">
            <Award className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
            <div className="text-2xl font-bold text-yellow-400">
              <AnimatedCounter end={100} duration={1500} />%
            </div>
            <p className="text-xs text-gray-400">Compliant</p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Side - Visual Tax Comparison */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <h3 className="text-lg text-teal-400 mb-3 flex items-center">
              <Calculator className="w-5 h-5 mr-2" />
              Tax Rate Comparison
            </h3>
            <BarChart data={taxComparisonData} height={120} colorScheme="gradient" animated={animateMetrics} />
            <div className="mt-3 text-center text-xs text-gray-400">
              GIFT City offers <span className="text-green-400 font-bold">66% lower taxes</span> than mainland
            </div>
          </motion.div>

          {/* Right Side - Savings Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <h3 className="text-lg text-purple-400 mb-3 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              ₹1 Crore Investment Analysis
            </h3>
            
            {/* Investment Comparison */}
            <div className="space-y-3">
              {[
                { type: 'Direct Equity', tax: 30, savings: 0, color: 'red' },
                { type: 'Mutual Funds', tax: 20, savings: 5, color: 'orange' },
                { type: 'GIFT City AIF', tax: 10, savings: 10, color: 'green' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-center justify-between p-2 bg-gray-800/30 rounded"
                >
                  <div className="flex items-center">
                    <CircularProgress value={100 - item.tax} size={30} strokeWidth={2} />
                    <span className="ml-2 text-sm">{item.type}</span>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-bold text-${item.color}-400`}>
                      {item.tax}% Tax
                    </div>
                    {item.savings > 0 && (
                      <div className="text-xs text-green-400">
                        Save ₹{item.savings}L
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ELSS vs GIFT City Comparison */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="glassmorphic-card bg-gradient-to-r from-orange-900/20 to-red-900/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <PiggyBank className="w-5 h-5 text-orange-400 mr-2" />
                <h4 className="text-lg text-orange-400">Traditional ELSS</h4>
              </div>
              <div className="text-2xl font-bold text-orange-400">
                ₹<AnimatedCounter end={46800} duration={1500} />
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Max Deduction:</span>
                <span className="text-orange-300">₹1.5L limit</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Lock-in:</span>
                <span className="text-red-400">3 years mandatory</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tax on Gains:</span>
                <span className="text-red-400">10-15% LTCG</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="glassmorphic-card bg-gradient-to-r from-teal-900/20 to-green-900/20 border border-teal-500/30"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Award className="w-5 h-5 text-teal-400 mr-2" />
                <h4 className="text-lg text-teal-400">GIFT City AIF</h4>
              </div>
              <div className="text-2xl font-bold text-green-400">
                ₹<AnimatedCounter end={155000} duration={1500} />
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Investment:</span>
                <span className="text-green-400">Unlimited ✓</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Lock-in:</span>
                <span className="text-green-400">None ✓</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Capital Gains:</span>
                <span className="text-green-400">0% tax ✓</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="glassmorphic-card mt-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 text-center"
        >
          <div className="flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-teal-400 mr-2" />
            <span className="text-lg text-teal-400">
              Annual Tax Savings: <span className="font-bold text-green-400">₹1,55,000</span> on ₹50L portfolio
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Real example • Real investor • Real savings
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.4 }}
          className="text-center mt-3"
        >
          <p className="text-xs text-gray-500">
            GIFT City IFSC: <span className="text-teal-400">India's Tax Haven</span> | 
            <span className="text-green-400 ml-2">✓ 100% Legal</span> | 
            <span className="text-purple-400 ml-2">✓ IFSCA Regulated</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default GiftCityTaxOptimizationSlide