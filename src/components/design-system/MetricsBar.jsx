import React from 'react'
import { motion } from 'framer-motion'
import * as Lucide from 'lucide-react'

/**
 * MetricsBar - Consistent footer metrics component for all slides
 * Displays key metrics with icons and animations
 */
const MetricsBar = ({
  metrics = [], // Array of { icon, value, label, color }
  variant = 'default', // default, compact, expanded
  align = 'center', // left, center, right, spread
  showDividers = true,
  animated = true
}) => {
  // Get icon component
  const getIcon = (iconName) => {
    const Icon = Lucide[iconName] || Lucide.TrendingUp
    return Icon
  }

  // Variant configurations
  const variantConfig = {
    compact: {
      container: 'py-2 px-4',
      metricSpacing: 'gap-6',
      iconSize: 16,
      valueSize: 'text-lg',
      labelSize: 'text-xs'
    },
    default: {
      container: 'py-3 px-6',
      metricSpacing: 'gap-8',
      iconSize: 20,
      valueSize: 'text-xl',
      labelSize: 'text-sm'
    },
    expanded: {
      container: 'py-4 px-8',
      metricSpacing: 'gap-10',
      iconSize: 24,
      valueSize: 'text-2xl',
      labelSize: 'text-base'
    }
  }

  const config = variantConfig[variant]

  // Alignment classes
  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    spread: 'justify-between'
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: animated ? 0.1 : 0
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  }

  // Default metrics if none provided
  const displayMetrics = metrics.length > 0 ? metrics : [
    { icon: 'TrendingUp', value: '600%', label: 'AI Advantage', color: 'teal' },
    { icon: 'Users', value: '46%', label: 'Switching Now', color: 'cyan' },
    { icon: 'DollarSign', value: '$124T', label: 'Opportunity', color: 'emerald' },
    { icon: 'Zap', value: '11ms', label: 'Response Time', color: 'yellow' }
  ]

  // Color mappings
  const colorClasses = {
    teal: 'text-teal-400',
    cyan: 'text-cyan-400',
    emerald: 'text-emerald-400',
    yellow: 'text-yellow-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    default: 'text-gray-400'
  }

  return (
    <motion.div
      className={`relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 ${config.container}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

      {/* Metrics Container */}
      <div className={`relative flex items-center ${config.metricSpacing} ${alignmentClasses[align]}`}>
        {displayMetrics.map((metric, index) => {
          const Icon = getIcon(metric.icon)
          const colorClass = colorClasses[metric.color] || colorClasses.default

          return (
            <React.Fragment key={index}>
              <motion.div
                className="flex items-center gap-3"
                variants={itemVariants}
                whileHover={animated ? { scale: 1.05 } : {}}
              >
                {/* Icon */}
                <div className={`${colorClass} opacity-80`}>
                  <Icon size={config.iconSize} />
                </div>

                {/* Value and Label */}
                <div>
                  <motion.div 
                    className={`${config.valueSize} font-bold text-white`}
                    initial={animated ? { opacity: 0 } : {}}
                    animate={animated ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className={`${config.labelSize} text-gray-500 mt-0.5`}>
                    {metric.label}
                  </div>
                </div>

                {/* Optional Trend Indicator */}
                {metric.trend && (
                  <motion.div
                    className={`ml-2 ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}
                    initial={{ opacity: 0, y: metric.trend === 'up' ? 5 : -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {metric.trend === 'up' ? (
                      <Lucide.ArrowUp size={14} />
                    ) : (
                      <Lucide.ArrowDown size={14} />
                    )}
                  </motion.div>
                )}
              </motion.div>

              {/* Divider */}
              {showDividers && index < displayMetrics.length - 1 && (
                <motion.div
                  className="h-8 w-px bg-gray-700"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                />
              )}
            </React.Fragment>
          )
        })}
      </div>

      {/* Subtle Animation Line */}
      {animated && (
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />
      )}
    </motion.div>
  )
}

export default MetricsBar
