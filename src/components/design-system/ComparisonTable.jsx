import React from 'react'
import { motion } from 'framer-motion'
import * as Lucide from 'lucide-react'

/**
 * ComparisonTable - Standard comparison component
 * For Before/After, Traditional/ARIA, Competitor/Us comparisons
 */
const ComparisonTable = ({
  data = [], // Array of { category, left, right, winner }
  leftLabel = 'Traditional',
  rightLabel = 'ARIA',
  leftColor = 'red',
  rightColor = 'teal',
  variant = 'default', // default, detailed, compact
  showWinner = true,
  animated = true,
  className = ''
}) => {
  // Color mappings
  const colorClasses = {
    teal: {
      bg: 'bg-teal-500/10',
      border: 'border-teal-500/30',
      text: 'text-teal-400',
      gradient: 'from-teal-500 to-teal-600'
    },
    red: {
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      text: 'text-red-400',
      gradient: 'from-red-500 to-red-600'
    },
    cyan: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      text: 'text-cyan-400',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    gray: {
      bg: 'bg-gray-500/10',
      border: 'border-gray-500/30',
      text: 'text-gray-400',
      gradient: 'from-gray-500 to-gray-600'
    }
  }

  const leftColors = colorClasses[leftColor] || colorClasses.gray
  const rightColors = colorClasses[rightColor] || colorClasses.teal

  // Variant configurations
  const variantConfig = {
    compact: {
      padding: 'p-3',
      fontSize: 'text-sm',
      headerSize: 'text-base',
      gap: 'gap-2'
    },
    default: {
      padding: 'p-4',
      fontSize: 'text-base',
      headerSize: 'text-lg',
      gap: 'gap-3'
    },
    detailed: {
      padding: 'p-6',
      fontSize: 'text-lg',
      headerSize: 'text-xl',
      gap: 'gap-4'
    }
  }

  const config = variantConfig[variant]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animated ? 0.1 : 0
      }
    }
  }

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <motion.div
      className={`w-full ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Headers */}
      <motion.div 
        className={`grid grid-cols-3 ${config.gap} mb-6`}
        variants={rowVariants}
      >
        {/* Category Header */}
        <div className="flex items-center justify-center">
          <span className={`${config.headerSize} font-semibold text-gray-500`}>
            Comparison
          </span>
        </div>

        {/* Left Header */}
        <div className={`
          ${config.padding} ${leftColors.bg} ${leftColors.border}
          border rounded-xl text-center
        `}>
          <h3 className={`${config.headerSize} font-bold ${leftColors.text}`}>
            {leftLabel}
          </h3>
        </div>

        {/* Right Header */}
        <div className={`
          ${config.padding} ${rightColors.bg} ${rightColors.border}
          border rounded-xl text-center
        `}>
          <h3 className={`${config.headerSize} font-bold ${rightColors.text}`}>
            {rightLabel}
          </h3>
        </div>
      </motion.div>

      {/* Comparison Rows */}
      <div className={`space-y-${variant === 'compact' ? '2' : '4'}`}>
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-3 ${config.gap}`}
            variants={rowVariants}
            whileHover={animated ? { scale: 1.01 } : {}}
          >
            {/* Category */}
            <div className={`
              ${config.padding}
              bg-gray-900/50 backdrop-blur-sm
              border border-gray-800 rounded-xl
              flex items-center justify-center
            `}>
              <span className={`${config.fontSize} font-medium text-gray-300`}>
                {item.category}
              </span>
            </div>

            {/* Left Value */}
            <motion.div
              className={`
                ${config.padding}
                bg-gray-900/50 backdrop-blur-sm
                border ${item.winner === 'left' ? 'border-red-500/50' : 'border-gray-800'}
                rounded-xl relative overflow-hidden
                ${item.winner === 'left' ? 'ring-2 ring-red-500/20' : ''}
              `}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Winner Indicator */}
              {showWinner && item.winner === 'left' && (
                <motion.div
                  className="absolute top-2 right-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                >
                  <Lucide.Award size={16} className={leftColors.text} />
                </motion.div>
              )}

              {/* Value */}
              {typeof item.left === 'object' ? (
                <div>
                  <div className={`${config.fontSize} font-bold text-white mb-1`}>
                    {item.left.value}
                  </div>
                  {item.left.description && (
                    <div className="text-sm text-gray-500">
                      {item.left.description}
                    </div>
                  )}
                </div>
              ) : (
                <div className={`${config.fontSize} text-gray-300`}>
                  {item.left}
                </div>
              )}

              {/* Cross mark for losing side */}
              {showWinner && item.winner === 'right' && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <Lucide.X size={40} className="text-red-500" />
                </motion.div>
              )}
            </motion.div>

            {/* Right Value */}
            <motion.div
              className={`
                ${config.padding}
                bg-gray-900/50 backdrop-blur-sm
                border ${item.winner === 'right' ? 'border-teal-500/50' : 'border-gray-800'}
                rounded-xl relative overflow-hidden
                ${item.winner === 'right' ? 'ring-2 ring-teal-500/20' : ''}
              `}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Winner Indicator */}
              {showWinner && item.winner === 'right' && (
                <motion.div
                  className="absolute top-2 right-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                >
                  <Lucide.Award size={16} className={rightColors.text} />
                </motion.div>
              )}

              {/* Value */}
              {typeof item.right === 'object' ? (
                <div>
                  <div className={`${config.fontSize} font-bold text-white mb-1`}>
                    {item.right.value}
                  </div>
                  {item.right.description && (
                    <div className="text-sm text-gray-500">
                      {item.right.description}
                    </div>
                  )}
                </div>
              ) : (
                <div className={`${config.fontSize} text-gray-300`}>
                  {item.right}
                </div>
              )}

              {/* Checkmark for winning side */}
              {showWinner && item.winner === 'right' && (
                <motion.div
                  className="absolute bottom-2 right-2"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, type: 'spring' }}
                >
                  <Lucide.CheckCircle size={20} className="text-teal-400" />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      {showWinner && (
        <motion.div
          className="mt-8 p-4 bg-teal-500/10 border border-teal-500/30 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-teal-400 font-medium">
            {rightLabel} wins in {data.filter(d => d.winner === 'right').length} out of {data.length} categories
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default ComparisonTable
