import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Target, Trophy } from 'lucide-react'

const GiftCityGrowthStagesSlide = () => {
  return (
    <div className="slide-container">
      <div className="glassmorphic-card large">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text text-5xl mb-4">30-Month Growth Journey</h1>
          <p className="text-xl text-gray-400 mb-8">From $3M to $250M: The GIFT City Advantage</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {/* Stage 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <Rocket className="w-6 h-6 text-blue-400" />
            </div>
            
            <h3 className="text-xl text-blue-400 mb-3">Stage 1: Foundation</h3>
            <p className="text-sm text-gray-400 mb-3">Months 1-10</p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>AUM Target:</span>
                <span className="font-bold text-blue-400">$3M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Investors:</span>
                <span>50 HNIs</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Focus:</span>
                <span>India markets</span>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-700">
              <p className="text-xs text-gray-400">Key Milestones:</p>
              <ul className="text-xs mt-2 space-y-1">
                <li>• IFSCA license secured</li>
                <li>• Platform operational</li>
                <li>• First 50 clients onboarded</li>
              </ul>
            </div>
          </motion.div>

          {/* Stage 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glassmorphic-card"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <Target className="w-6 h-6 text-green-400" />
            </div>
            
            <h3 className="text-xl text-green-400 mb-3">Stage 2: Scale</h3>
            <p className="text-sm text-gray-400 mb-3">Months 11-20</p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>AUM Target:</span>
                <span className="font-bold text-green-400">$20-100M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Investors:</span>
                <span>200 Global</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Focus:</span>
                <span>Asia expansion</span>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-700">
              <p className="text-xs text-gray-400">Key Milestones:</p>
              <ul className="text-xs mt-2 space-y-1">
                <li>• Global LP onboarding</li>
                <li>• Multi-market trading</li>
                <li>• 10x revenue growth</li>
              </ul>
            </div>
          </motion.div>

          {/* Stage 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glassmorphic-card border border-teal-500/30"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-2xl font-bold text-teal-400">3</span>
              </div>
              <Trophy className="w-6 h-6 text-teal-400" />
            </div>
            
            <h3 className="text-xl text-teal-400 mb-3">Stage 3: Dominate</h3>
            <p className="text-sm text-gray-400 mb-3">Months 21-30</p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>AUM Target:</span>
                <span className="font-bold text-teal-400">$250M+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Investors:</span>
                <span>1000+ Global</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Focus:</span>
                <span>Global leader</span>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-700">
              <p className="text-xs text-gray-400">Key Milestones:</p>
              <ul className="text-xs mt-2 space-y-1">
                <li>• Institutional partnerships</li>
                <li>• 24/7 global trading</li>
                <li>• IPO preparation</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Growth Curve */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 glassmorphic-card bg-gradient-to-r from-blue-900/20 via-green-900/20 to-teal-900/20"
        >
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="text-sm text-gray-400">Start</p>
              <p className="text-3xl font-bold text-blue-400">$3M</p>
            </div>
            <div className="flex-1 mx-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="h-2 bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 rounded-full"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400">30 Months</p>
              <p className="text-3xl font-bold text-teal-400">$250M+</p>
            </div>
          </div>
          <p className="text-center text-xl font-bold mt-4">
            <span className="gradient-text">83x Growth via GIFT City</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default GiftCityGrowthStagesSlide