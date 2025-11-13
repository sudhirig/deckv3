import React from 'react'
import { motion } from 'framer-motion'
import ARIAIconBadge from '../ARIAIconBadge'
import StanfordBadge from '../StanfordBadge'
import OperationalBadge from '../OperationalBadge'

/**
 * SlideHeader - Consistent header component for all slides
 * Includes title, subtitle, logo, and badges
 */
const SlideHeader = ({
  title,
  subtitle,
  badges = [], // Array of badge types: 'stanford', 'operational', 'custom'
  showLogo = true,
  align = 'left', // left, center, right
  size = 'default' // small, default, large
}) => {
  // Size configurations
  const sizeConfig = {
    small: {
      title: 'text-3xl',
      subtitle: 'text-lg',
      logo: 40,
      padding: 'mb-4'
    },
    default: {
      title: 'text-4xl lg:text-5xl',
      subtitle: 'text-xl',
      logo: 50,
      padding: 'mb-6'
    },
    large: {
      title: 'text-5xl lg:text-6xl',
      subtitle: 'text-2xl',
      logo: 60,
      padding: 'mb-8'
    }
  }

  const config = sizeConfig[size]

  // Alignment classes
  const alignmentClasses = {
    left: 'text-left justify-start',
    center: 'text-center justify-center',
    right: 'text-right justify-end'
  }

  // Render badges
  const renderBadge = (badge, index) => {
    switch (badge) {
      case 'stanford':
        return <StanfordBadge key={index} variant="compact" />
      case 'operational':
        return <OperationalBadge key={index} variant="compact" />
      default:
        if (typeof badge === 'object' && badge.component) {
          return <div key={index}>{badge.component}</div>
        }
        return null
    }
  }

  return (
    <motion.header 
      className={`relative ${config.padding} ${alignmentClasses[align]}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start justify-between">
        {/* Left Section: Logo and Title */}
        <div className={`flex items-start gap-4 ${align === 'center' ? 'flex-1' : ''}`}>
          {/* Logo */}
          {showLogo && align !== 'right' && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <ARIAIconBadge size={config.logo} />
            </motion.div>
          )}

          {/* Title and Subtitle */}
          <div className={align === 'center' ? 'flex-1' : ''}>
            {/* Title with Gradient */}
            {title && (
              <motion.h1 
                className={`${config.title} font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-tight`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {title}
              </motion.h1>
            )}

            {/* Subtitle */}
            {subtitle && (
              <motion.p 
                className={`${config.subtitle} text-gray-400 mt-2`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* Right-aligned logo */}
          {showLogo && align === 'right' && (
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <ARIAIconBadge size={config.logo} />
            </motion.div>
          )}
        </div>

        {/* Right Section: Badges */}
        {badges.length > 0 && (
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {badges.map((badge, index) => renderBadge(badge, index))}
          </motion.div>
        )}
      </div>

      {/* Decorative Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </motion.header>
  )
}

export default SlideHeader
