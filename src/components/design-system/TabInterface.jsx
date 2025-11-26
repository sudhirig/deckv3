import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * TabInterface - Reusable tabbed content component
 * Used for consolidating multiple slides into one with tabs
 */
const TabInterface = ({
  tabs = [], // Array of { id, label, icon, content }
  defaultTab = 0,
  variant = 'default', // default, pills, underline
  position = 'top', // top, bottom, left, right
  animated = true,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  // Tab style variants
  const tabVariants = {
    default: {
      container: 'bg-gray-900/50 backdrop-blur-sm rounded-xl p-1',
      tab: 'px-6 py-3 rounded-lg',
      activeTab: 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white',
      inactiveTab: 'text-gray-400 hover:text-white'
    },
    pills: {
      container: 'flex gap-2',
      tab: 'px-6 py-3 rounded-full border border-gray-700',
      activeTab: 'bg-teal-500/20 border-teal-500 text-teal-400',
      inactiveTab: 'text-gray-400 hover:border-gray-500 hover:text-white'
    },
    underline: {
      container: 'border-b border-gray-700',
      tab: 'px-6 py-3 relative',
      activeTab: 'text-teal-400',
      inactiveTab: 'text-gray-400 hover:text-white'
    }
  }

  const style = tabVariants[variant]

  // Position layouts
  const layouts = {
    top: 'flex flex-col',
    bottom: 'flex flex-col-reverse',
    left: 'flex flex-row gap-6',
    right: 'flex flex-row-reverse gap-6'
  }

  const tabOrientation = position === 'left' || position === 'right' ? 'flex-col' : 'flex-row'

  // Animation configurations
  const contentVariants = {
    enter: {
      opacity: 0,
      x: animated ? 20 : 0,
      scale: animated ? 0.98 : 1
    },
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      x: animated ? -20 : 0,
      scale: animated ? 0.98 : 1,
      transition: { duration: 0.2, ease: 'easeIn' }
    }
  }

  return (
    <div className={`w-full ${layouts[position]} ${className}`}>
      {/* Tab Navigation */}
      <motion.div
        className={`${style.container} flex ${tabOrientation} ${
          position === 'left' || position === 'right' ? 'min-w-[200px]' : ''
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id || index}
            onClick={() => setActiveTab(index)}
            className={`
              ${style.tab}
              ${activeTab === index ? style.activeTab : style.inactiveTab}
              transition-all duration-300 font-medium flex items-center gap-2
            `}
            whileHover={animated ? { scale: 1.02 } : {}}
            whileTap={animated ? { scale: 0.98 } : {}}
          >
            {/* Tab Icon */}
            {tab.icon && (
              <span className="opacity-80">
                {typeof tab.icon === 'function' ? React.createElement(tab.icon) : 
                 React.isValidElement(tab.icon) ? tab.icon : null}
              </span>
            )}
            
            {/* Tab Label */}
            <span>{tab.label}</span>

            {/* Active Indicator for Underline Variant */}
            {variant === 'underline' && activeTab === index && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400"
                layoutId="activeTab"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}

            {/* Badge/Count */}
            {tab.badge && (
              <span className="ml-2 px-2 py-0.5 text-xs bg-teal-500/20 text-teal-400 rounded-full">
                {tab.badge}
              </span>
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Tab Content */}
      <div className="flex-1 mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            {/* Tab Panel */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
              {/* Tab Header */}
              {tabs[activeTab]?.header && (
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tabs[activeTab].header}
                  </h3>
                  {tabs[activeTab].description && (
                    <p className="text-gray-400">
                      {tabs[activeTab].description}
                    </p>
                  )}
                </div>
              )}

              {/* Tab Content */}
              <div className="w-full">
                {tabs[activeTab]?.content}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tab Indicators (Dots) */}
      {position === 'top' || position === 'bottom' ? (
        <motion.div
          className="flex justify-center gap-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {tabs.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeTab === index
                  ? 'w-8 bg-teal-400'
                  : 'w-1.5 bg-gray-600 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </motion.div>
      ) : null}
    </div>
  )
}

export default TabInterface
