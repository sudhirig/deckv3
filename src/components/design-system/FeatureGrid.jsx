import React from 'react'
import { motion } from 'framer-motion'
import * as Lucide from 'lucide-react'

/**
 * FeatureGrid - Reusable grid layout for features
 * Consistent card-based design with hover effects
 */
const FeatureGrid = ({
  features = [], // Array of { icon, title, description, metric, badge, color }
  columns = 2, // 2, 3, or 4
  variant = 'default', // default, compact, detailed
  animated = true,
  gap = 'default', // small, default, large
  className = ''
}) => {
  // Column configurations
  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  // Gap configurations
  const gapClasses = {
    small: 'gap-4',
    default: 'gap-6',
    large: 'gap-8'
  }

  // Variant configurations
  const variantConfig = {
    compact: {
      padding: 'p-4',
      iconSize: 24,
      titleSize: 'text-lg',
      descSize: 'text-sm',
      metricSize: 'text-2xl'
    },
    default: {
      padding: 'p-6',
      iconSize: 32,
      titleSize: 'text-xl',
      descSize: 'text-base',
      metricSize: 'text-3xl'
    },
    detailed: {
      padding: 'p-8',
      iconSize: 40,
      titleSize: 'text-2xl',
      descSize: 'text-lg',
      metricSize: 'text-4xl'
    }
  }

  const config = variantConfig[variant]

  // Get icon component
  const getIcon = (iconName) => {
    const Icon = Lucide[iconName] || Lucide.Zap
    return Icon
  }

  // Color mappings
  const colorClasses = {
    teal: 'from-teal-500 to-teal-600',
    cyan: 'from-cyan-500 to-cyan-600',
    emerald: 'from-emerald-500 to-emerald-600',
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600',
    yellow: 'from-yellow-500 to-yellow-600',
    blue: 'from-blue-500 to-blue-600',
    red: 'from-red-500 to-red-600',
    default: 'from-gray-500 to-gray-600'
  }

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div
      className={`grid ${columnClasses[columns]} ${gapClasses[gap]} ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {features.map((feature, index) => {
        const Icon = getIcon(feature.icon)
        const gradientClass = colorClasses[feature.color] || colorClasses.default

        return (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={animated ? { 
              scale: 1.02,
              transition: { duration: 0.2 }
            } : {}}
            className="relative group"
          >
            {/* Card Container */}
            <div className={`
              relative h-full
              bg-gray-900/50 backdrop-blur-sm
              border border-gray-800
              rounded-xl ${config.padding}
              hover:border-gray-700
              transition-all duration-300
              overflow-hidden
            `}>
              {/* Background Gradient on Hover */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-5
                bg-gradient-to-br ${gradientClass}
                transition-opacity duration-300
              `} />

              {/* Badge */}
              {feature.badge && (
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <span className="px-2 py-1 text-xs font-medium bg-teal-500/20 text-teal-400 rounded-full">
                    {feature.badge}
                  </span>
                </motion.div>
              )}

              {/* Icon */}
              <div className={`
                w-12 h-12 mb-4
                bg-gradient-to-r ${gradientClass}
                rounded-lg
                flex items-center justify-center
                group-hover:scale-110 transition-transform duration-300
              `}>
                <Icon size={config.iconSize} className="text-white" />
              </div>

              {/* Title */}
              <h3 className={`${config.titleSize} font-bold text-white mb-2`}>
                {feature.title}
              </h3>

              {/* Description */}
              {feature.description && (
                <p className={`${config.descSize} text-gray-400 mb-4 leading-relaxed`}>
                  {feature.description}
                </p>
              )}

              {/* Metric */}
              {feature.metric && (
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className={`${config.metricSize} font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
                    {feature.metric.value}
                  </div>
                  {feature.metric.label && (
                    <div className="text-sm text-gray-500 mt-1">
                      {feature.metric.label}
                    </div>
                  )}
                </div>
              )}

              {/* List Items */}
              {feature.items && feature.items.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <Lucide.Check size={14} className="text-teal-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Action Button */}
              {feature.action && (
                <motion.button
                  className={`
                    mt-4 w-full py-2 px-4
                    bg-gradient-to-r ${gradientClass}
                    text-white font-medium rounded-lg
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {feature.action}
                </motion.button>
              )}

              {/* Corner Accent */}
              <div className={`
                absolute -bottom-1 -right-1 w-16 h-16
                bg-gradient-to-tl ${gradientClass} opacity-10
                rounded-tl-3xl
              `} />
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default FeatureGrid
