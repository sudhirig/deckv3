import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Link, Cloud, Shield } from 'lucide-react'

const FutureModulesFeaturesSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-4xl mb-2">Future Modules Features</h1>
          <p className="text-xl text-gray-400 mb-6">Next-Gen Capabilities Coming Soon</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <DollarSign className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-xl text-yellow-400">Crypto Module</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Bitcoin & Ethereum trading</li>
              <li>• DeFi yield farming</li>
              <li>• NFT portfolio tracking</li>
              <li>• Cross-chain arbitrage</li>
              <li>• Staking rewards optimization</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Link className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl text-blue-400">Cross-Asset</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Multi-asset correlation</li>
              <li>• Global portfolio sync</li>
              <li>• Currency hedging</li>
              <li>• Regulatory compliance</li>
              <li>• Unified reporting</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Cloud className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl text-purple-400">AI Enhancements</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• GPT-5 integration</li>
              <li>• Quantum computing ready</li>
              <li>• Real-time translation</li>
              <li>• Voice cloning for alerts</li>
              <li>• Predictive modeling v3</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <Shield className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-xl text-green-400">Enterprise</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• White-label solution</li>
              <li>• Multi-tenant architecture</li>
              <li>• Custom AI training</li>
              <li>• Dedicated infrastructure</li>
              <li>• SLA guarantees</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="glassmorphic-card bg-gradient-to-r from-yellow-900/20 to-purple-900/20 mt-4"
        >
          <h4 className="text-lg text-teal-400 mb-2">What You Get:</h4>
          <p className="text-sm">
            <span className="text-yellow-400">Future-proof platform</span> that
            <span className="text-teal-400 font-bold"> grows with your needs</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default FutureModulesFeaturesSlide