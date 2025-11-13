import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  StandardSlideLayout, 
  SlideHeader, 
  MetricsBar, 
  FeatureGrid 
} from '../../components/design-system'
import * as Lucide from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * MarketOpportunityMerged - Consolidated market analysis slide
 * Merges: LargestMarketSlide, MarketInMotionSlide, MarketSizingSlide, OpportunitySlide
 */
const MarketOpportunityMerged = () => {
  const [hoveredSection, setHoveredSection] = useState(null)

  // Market metrics for the footer
  const metrics = [
    { icon: 'DollarSign', value: '$124T', label: 'Wealth Transfer', color: 'teal' },
    { icon: 'Users', value: '46%', label: 'Switching Now', color: 'cyan' },
    { icon: 'Globe', value: '$5T', label: 'India Opportunity', color: 'emerald' },
    { icon: 'TrendingUp', value: '20x', label: 'Growth Potential', color: 'yellow' }
  ]

  return (
    <StandardSlideLayout
      title="The $124 Trillion Opportunity"
      subtitle="The largest wealth transfer in history is happening NOW"
      badges={['stanford']}
      metrics={metrics}
      showHeader={true}
      showFooter={true}
    >
      <div className="grid grid-cols-2 gap-8 h-full">
        {/* Left Column: Market Size Visualization */}
        <motion.div 
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Wealth Transfer Visual */}
          <div className="relative flex-1 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Generational Wealth Transfer
            </h3>
            
            {/* Circular Visualization */}
            <div className="relative h-64 flex items-center justify-center">
              <motion.div
                className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-teal-500/30 to-cyan-500/30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
              />
              <div className="relative z-10 text-center">
                <motion.div 
                  className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.5 }}
                >
                  $124T
                </motion.div>
                <div className="text-gray-400 mt-2">By 2045</div>
              </div>
            </div>

            {/* Transfer Flow */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-400">Baby Boomers</span>
                <div className="flex items-center gap-2">
                  <Lucide.ArrowRight className="text-teal-400" size={16} />
                  <span className="text-white font-semibold">$72T</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-400">Gen X to Millennials</span>
                <div className="flex items-center gap-2">
                  <Lucide.ArrowRight className="text-cyan-400" size={16} />
                  <span className="text-white font-semibold">$52T</span>
                </div>
              </div>
            </div>
          </div>

          {/* Market in Motion */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold text-white">Market Switching</h4>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
                URGENT
              </span>
            </div>
            <div className="text-4xl font-bold text-red-400 mb-2">46%</div>
            <div className="text-gray-400 text-sm">
              Actively looking for new advisors RIGHT NOW
            </div>
            <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                initial={{ width: 0 }}
                animate={{ width: '46%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: TAM/SAM/SOM & India */}
        <motion.div 
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* TAM/SAM/SOM Pyramid */}
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
            <h3 className="text-2xl font-bold text-white mb-6">Market Sizing</h3>
            
            {/* Pyramid Visualization */}
            <div className="relative h-64">
              {/* TAM */}
              <motion.div 
                className="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-t-xl flex items-center justify-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onMouseEnter={() => setHoveredSection('tam')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="text-center">
                  <div className="text-sm text-gray-400">TAM</div>
                  <div className="text-2xl font-bold text-white">$600B</div>
                  <div className="text-xs text-gray-500">Global Wealth Tech</div>
                </div>
              </motion.div>
              
              {/* SAM */}
              <motion.div 
                className="absolute inset-x-8 top-24 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                onMouseEnter={() => setHoveredSection('sam')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="text-center">
                  <div className="text-sm text-gray-400">SAM</div>
                  <div className="text-2xl font-bold text-white">$150B</div>
                  <div className="text-xs text-gray-500">AI-First Platforms</div>
                </div>
              </motion.div>
              
              {/* SOM */}
              <motion.div 
                className="absolute inset-x-16 bottom-0 h-20 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-b-xl flex items-center justify-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onMouseEnter={() => setHoveredSection('som')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="text-center">
                  <div className="text-sm text-gray-400">SOM</div>
                  <div className="text-2xl font-bold text-white">$30B</div>
                  <div className="text-xs text-gray-500">5 Year Target</div>
                </div>
              </motion.div>

              {/* Hover Details */}
              <AnimatePresence>
                {hoveredSection && (
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 rounded-lg p-3 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                  >
                    {hoveredSection === 'tam' && '2025-2035 Market'}
                    {hoveredSection === 'sam' && 'Our Addressable Market'}
                    {hoveredSection === 'som' && '5% Market Share Goal'}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* India Opportunity */}
          <motion.div 
            className="flex-1 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🇮🇳</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">India: Our Gateway</h4>
                <div className="text-sm text-gray-400">Not our ceiling</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Market Size</span>
                <span className="text-2xl font-bold text-emerald-400">$5T</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">HNW Growth</span>
                <span className="text-xl font-semibold text-white">12% CAGR</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">GIFT City Access</span>
                <span className="text-lg font-medium text-teal-400">Exclusive</span>
              </div>
              
              {/* Growth Bar */}
              <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                <div className="text-sm text-emerald-400 font-medium">
                  Fastest growing wealth market globally
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Time to Act: NOW
      </motion.div>
    </StandardSlideLayout>
  )
}

export default MarketOpportunityMerged
