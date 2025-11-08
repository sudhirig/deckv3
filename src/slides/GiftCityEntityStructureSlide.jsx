import React from 'react'
import { motion } from 'framer-motion'
import { Building, ArrowDown, Globe, Shield } from 'lucide-react'

const GiftCityEntityStructureSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-5xl mb-8">Vora Ventures Entity Structure</h1>
        </motion.div>

        <div className="flex flex-col items-center">
          {/* US Entity */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glassmorphic-card w-full max-w-md mb-4"
          >
            <div className="flex items-center mb-2">
              <Globe className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-bold text-blue-400">Vora Ventures LLC</h3>
            </div>
            <p className="text-sm text-gray-400">Delaware, USA</p>
            <p className="text-sm mt-2">Global holding company for international investors</p>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <ArrowDown className="w-8 h-8 text-teal-400 my-2" />
          </motion.div>

          {/* India Entity */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glassmorphic-card w-full max-w-md mb-4"
          >
            <div className="flex items-center mb-2">
              <Building className="w-6 h-6 text-orange-400 mr-2" />
              <h3 className="text-xl font-bold text-orange-400">Vora Ventures LLP</h3>
            </div>
            <p className="text-sm text-gray-400">Mumbai, India</p>
            <p className="text-sm mt-2">Indian operations & mainland business</p>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            <ArrowDown className="w-8 h-8 text-teal-400 my-2" />
          </motion.div>

          {/* GIFT City Entities */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="grid grid-cols-3 gap-4 w-full"
          >
            <div className="glassmorphic-card">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-teal-400 mr-2" />
                <h4 className="text-lg font-bold text-teal-400">Tech LLP</h4>
              </div>
              <p className="text-xs text-gray-400">GIFT IFSC</p>
              <p className="text-sm mt-2">AI Platform Development</p>
              <div className="mt-3 text-xs text-green-400">
                • 0% GST<br/>
                • 10% Tax<br/>
                • R&D Benefits
              </div>
            </div>

            <div className="glassmorphic-card">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-teal-400 mr-2" />
                <h4 className="text-lg font-bold text-teal-400">AIF LLP</h4>
              </div>
              <p className="text-xs text-gray-400">GIFT IFSC</p>
              <p className="text-sm mt-2">Fund Management</p>
              <div className="mt-3 text-xs text-green-400">
                • Category III AIF<br/>
                • $250M Target<br/>
                • Global LPs
              </div>
            </div>

            <div className="glassmorphic-card">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-teal-400 mr-2" />
                <h4 className="text-lg font-bold text-teal-400">Advisory LLP</h4>
              </div>
              <p className="text-xs text-gray-400">GIFT IFSC</p>
              <p className="text-sm mt-2">Investment Advisory</p>
              <div className="mt-3 text-xs text-green-400">
                • IFSCA Licensed<br/>
                • Global Clients<br/>
                • No Capital Gains
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-lg text-gray-400">
            Optimized for <span className="text-teal-400">tax efficiency</span>, 
            <span className="text-green-400"> regulatory compliance</span>, and 
            <span className="text-blue-400"> global scalability</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default GiftCityEntityStructureSlide