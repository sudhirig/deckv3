import React from 'react'
import { motion } from 'framer-motion'

export default function ARIALogo({ 
  size = 'medium', 
  variant = 'full', // full, icon, text
  animated = true,
  color = 'gradient' // gradient, white, dark
}) {
  const sizes = {
    small: { height: 32, fontSize: 16 },
    medium: { height: 40, fontSize: 20 },
    large: { height: 56, fontSize: 28 },
    xl: { height: 72, fontSize: 36 }
  }

  const currentSize = sizes[size] || sizes.medium
  
  const getColor = () => {
    if (color === 'gradient') {
      return 'url(#logoGradient)'
    } else if (color === 'white') {
      return '#ffffff'
    } else {
      return '#0f172a'
    }
  }

  const IconLogo = () => (
    <svg 
      width={currentSize.height} 
      height={currentSize.height} 
      viewBox="0 0 60 60" 
      fill="none"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="logoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      
      {/* Outer Ring - AI Brain Network */}
      <motion.circle
        cx="30"
        cy="30"
        r="28"
        stroke={getColor()}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, rotate: 0 }}
        animate={animated ? { 
          pathLength: 1,
          rotate: 360
        } : {}}
        transition={{ 
          pathLength: { duration: 2, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />
      
      {/* Inner Hexagon - Tech/AI Symbol */}
      <motion.path
        d="M 30 8 L 45 17 L 45 35 L 30 44 L 15 35 L 15 17 Z"
        stroke={getColor()}
        strokeWidth="1.5"
        fill="url(#logoGradient2)"
        initial={{ scale: 0 }}
        animate={animated ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      
      {/* Center A - Stylized */}
      <motion.path
        d="M 30 20 L 24 36 M 30 20 L 36 36 M 26 30 L 34 30"
        stroke={getColor()}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={animated ? { pathLength: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
      />
      
      {/* Neural Network Dots */}
      {[
        { x: 30, y: 8 },
        { x: 45, y: 17 },
        { x: 45, y: 35 },
        { x: 30, y: 44 },
        { x: 15, y: 35 },
        { x: 15, y: 17 }
      ].map((pos, i) => (
        <motion.circle
          key={i}
          cx={pos.x}
          cy={pos.y}
          r="2"
          fill={getColor()}
          initial={{ scale: 0 }}
          animate={animated ? { scale: [0, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
        />
      ))}
    </svg>
  )

  const TextLogo = () => (
    <div style={{
      display: 'flex',
      alignItems: 'baseline',
      gap: '2px',
      fontSize: currentSize.fontSize,
      fontWeight: '700',
      letterSpacing: '-0.02em'
    }}>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={animated ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          background: color === 'gradient' 
            ? 'linear-gradient(135deg, #14b8a6, #06b6d4)'
            : getColor(),
          WebkitBackgroundClip: color === 'gradient' ? 'text' : 'unset',
          WebkitTextFillColor: color === 'gradient' ? 'transparent' : getColor(),
          backgroundClip: color === 'gradient' ? 'text' : 'unset'
        }}
      >
        ARIA
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={animated ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          color: color === 'white' ? '#ffffff' : '#64748b',
          fontWeight: '400'
        }}
      >
        wealth
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        animate={animated ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          background: color === 'gradient'
            ? 'linear-gradient(135deg, #06b6d4, #10b981)'
            : getColor(),
          WebkitBackgroundClip: color === 'gradient' ? 'text' : 'unset',
          WebkitTextFillColor: color === 'gradient' ? 'transparent' : getColor(),
          backgroundClip: color === 'gradient' ? 'text' : 'unset',
          fontWeight: '700'
        }}
      >
        .ai
      </motion.span>
    </div>
  )

  if (variant === 'icon') {
    return <IconLogo />
  }

  if (variant === 'text') {
    return <TextLogo />
  }

  // Full logo (icon + text)
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: size === 'small' ? '8px' : '12px'
    }}>
      <IconLogo />
      <TextLogo />
    </div>
  )
}

// Simplified version for headers
export function ARIALogoSimple({ isDark = false }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer'
    }}>
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <circle 
          cx="20" 
          cy="20" 
          r="18" 
          stroke={isDark ? '#0f172a' : '#14b8a6'} 
          strokeWidth="2"
        />
        <path 
          d="M 20 10 L 14 26 M 20 10 L 26 26 M 16 20 L 24 20" 
          stroke={isDark ? '#0f172a' : '#14b8a6'} 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
      <div style={{
        fontSize: '20px',
        fontWeight: '700',
        letterSpacing: '-0.02em'
      }}>
        <span style={{ color: isDark ? '#0f172a' : '#14b8a6' }}>ARIA</span>
        <span style={{ color: '#64748b', fontWeight: '400' }}>wealth</span>
        <span style={{ color: isDark ? '#0f172a' : '#06b6d4' }}>.ai</span>
      </div>
    </div>
  )
}
