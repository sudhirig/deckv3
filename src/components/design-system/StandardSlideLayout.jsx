import React from 'react'
import { motion } from 'framer-motion'
import SlideHeader from './SlideHeader'
import MetricsBar from './MetricsBar'

/**
 * StandardSlideLayout - Master layout component for all slides
 * Provides consistent structure, spacing, and animations
 */
const StandardSlideLayout = ({
  children,
  title,
  subtitle,
  badges = [],
  metrics = [],
  showHeader = true,
  showFooter = false,
  className = '',
  variant = 'default', // default, centered, split
  backgroundGradient = true
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  // Layout classes based on variant
  const layoutClasses = {
    default: 'flex flex-col',
    centered: 'flex flex-col items-center justify-center',
    split: 'grid grid-cols-2 gap-8'
  }

  // Background gradient
  const backgroundStyle = backgroundGradient ? {
    background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)'
  } : {}

  return (
    <motion.div
      className={`relative w-full h-screen overflow-hidden ${className}`}
      style={backgroundStyle}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Effects */}
      {backgroundGradient && (
        <>
          {/* Gradient Mesh */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full filter blur-3xl" />
          </div>

          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </>
      )}

      {/* Main Container */}
      <div className="relative z-10 h-full flex flex-col p-8">
        {/* Header */}
        {showHeader && (
          <motion.div variants={childVariants}>
            <SlideHeader
              title={title}
              subtitle={subtitle}
              badges={badges}
            />
          </motion.div>
        )}

        {/* Content Area */}
        <motion.div 
          className={`flex-1 ${layoutClasses[variant]} py-6`}
          variants={childVariants}
        >
          {children}
        </motion.div>

        {/* Footer Metrics */}
        {showFooter && metrics.length > 0 && (
          <motion.div variants={childVariants}>
            <MetricsBar metrics={metrics} />
          </motion.div>
        )}
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-teal-500/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-500/20" />
    </motion.div>
  )
}

export default StandardSlideLayout
