import React from 'react'
import { motion } from 'framer-motion'

const CinematicSlideFrame = ({ 
  children, 
  particleCount = 45,
  particleColor = '#14b8a6',
  gradientColors = {
    primary: 'rgba(20, 184, 166, 0.12)',
    secondary: 'rgba(13, 148, 136, 0.08)' 
  },
  gradientPositions = {
    primary: '30% 30%',
    secondary: '70% 70%'
  }
}) => {
  return (
    <div className="slide-content" style={{ position: 'relative' }}>
      {/* Particle Background */}
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at ${gradientPositions.primary}, ${gradientColors.primary} 0%, transparent 60%), radial-gradient(circle at ${gradientPositions.secondary}, ${gradientColors.secondary} 0%, transparent 50%)`,
        zIndex: 0
      }} />
      
      {/* Animated Light Sweep */}
      <motion.div
        animate={{ 
          background: [
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 100%, rgba(255,255,255,0.02) 50%, transparent 0%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2
        }}
      />
      
      {/* Content Container */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}

export default CinematicSlideFrame