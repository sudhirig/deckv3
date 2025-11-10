import React from 'react'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Award, FileCheck } from 'lucide-react'
import { pxToRem } from '../utils/responsive'

const GiftCityRegulatoryComplianceSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: pxToRem(-20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-5xl mb-4">Full Regulatory Compliance</h1>
          <p className="text-xl text-gray-400 mb-8">IFSCA Licensed & Operational</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {/* Licenses & Approvals */}
          <motion.div
            initial={{ opacity: 0, x: pxToRem(-20) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-gold-400 mr-3" />
              <h3 className="text-2xl text-gold-400">Licenses Secured</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                <div>
                  <p className="font-semibold">IFSCA Investment Advisor</p>
                  <p className="text-xs text-gray-400">License #IFSCA/IA/2024/001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                <div>
                  <p className="font-semibold">Category III AIF</p>
                  <p className="text-xs text-gray-400">Registration pending (Q1 2025)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                <div>
                  <p className="font-semibold">Technology Services</p>
                  <p className="text-xs text-gray-400">GIFT SEZ approved</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                <div>
                  <p className="font-semibold">FATF Compliant</p>
                  <p className="text-xs text-gray-400">AML/KYC frameworks active</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compliance Framework */}
          <motion.div
            initial={{ opacity: 0, x: pxToRem(20) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-4">
              <FileCheck className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl text-blue-400">Compliance Stack</h3>
            </div>
            
            <div className="space-y-3">
              <div className="border-l-2 border-blue-400 pl-3">
                <p className="font-semibold text-sm">Risk Management</p>
                <p className="text-xs text-gray-400">Real-time monitoring, 24/7 alerts</p>
              </div>
              
              <div className="border-l-2 border-blue-400 pl-3">
                <p className="font-semibold text-sm">Client Onboarding</p>
                <p className="text-xs text-gray-400">Digital KYC, AI verification</p>
              </div>
              
              <div className="border-l-2 border-blue-400 pl-3">
                <p className="font-semibold text-sm">Reporting</p>
                <p className="text-xs text-gray-400">Automated IFSCA submissions</p>
              </div>
              
              <div className="border-l-2 border-blue-400 pl-3">
                <p className="font-semibold text-sm">Audits</p>
                <p className="text-xs text-gray-400">Quarterly reviews, annual certification</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: pxToRem(20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-blue-900/20 to-green-900/20 mt-6"
        >
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-10 h-10 text-teal-400" />
          </div>
          
          <h3 className="text-2xl text-center text-teal-400 mb-4">Trust & Security</h3>
          
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-green-400">100%</p>
              <p className="text-xs text-gray-400">Regulatory Compliant</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-400">256-bit</p>
              <p className="text-xs text-gray-400">Encryption Standard</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-400">SOC2</p>
              <p className="text-xs text-gray-400">Type II Certified</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-400">ISO 27001</p>
              <p className="text-xs text-gray-400">Security Standard</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-lg">
            <span className="text-gray-400">Operating under </span>
            <span className="text-teal-400 font-bold">IFSCA's world-class regulatory framework</span>
            <span className="text-gray-400"> since 2024</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default GiftCityRegulatoryComplianceSlide