import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Network, Zap, Globe, User, Activity, Shield, TrendingUp } from 'lucide-react'

// ARIA Avatar Image Configuration
// Professional AI CEO: Silver hair, glasses, teal shirt, grey suit with holographic display
// Using the actual ARIA image from Gemini
import ariaAvatarImage from '../assets/aria-avatar.png'
const ariaAvatarUrl = ariaAvatarImage

// ARIA Avatar Component - Professional AI CEO
export default function ARIAAvatar({ 
  size = 'medium', 
  variant = 'default',
  animated = true,
  showPulse = true,
  showTitle = false,
  mood = 'confident'
}) {
  // Size configurations
  const sizes = {
    small: { container: 80, image: 70 },
    medium: { container: 120, image: 110 },
    large: { container: 200, image: 180 },
    hero: { container: 300, image: 280 }
  }

  const currentSize = sizes[size] || sizes.medium

  // Color schemes for different variants
  const variants = {
    default: {
      primary: '#14b8a6',
      secondary: '#06b6d4',
      accent: '#22d3ee',
      glow: 'rgba(20, 184, 166, 0.4)'
    },
    purple: {
      primary: '#8b5cf6',
      secondary: '#a78bfa',
      accent: '#c4b5fd',
      glow: 'rgba(139, 92, 246, 0.4)'
    },
    gradient: {
      primary: '#14b8a6',
      secondary: '#3b82f6',
      accent: '#8b5cf6',
      glow: 'rgba(20, 184, 166, 0.4)'
    }
  }

  const colors = variants[variant] || variants.default

  // Use professional avatar image URL or placeholder
  // You can replace this with an actual image of ARIA generated from:
  // - Canva AI Avatar Generator
  // - Fotor AI Avatar
  // - HeyGen AI Avatar
  // - Or any professional headshot
  
  // Use the ARIA avatar image
  const getAvatarUrl = () => {
    // Using the actual ARIA image from assets
    return ariaAvatarUrl
  }

  const ARIAImage = () => (
    <div
      style={{
        width: currentSize.image,
        height: currentSize.image,
        borderRadius: '50%',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
        padding: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          overflow: 'hidden',
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src={getAvatarUrl()}
          alt="ARIA - Your AI Family Office CEO"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
    </div>
  )

  return (
    <motion.div
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      style={{
        position: 'relative',
        width: currentSize.container,
        height: currentSize.container,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Outer Pulsing Ring */}
      {showPulse && (
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            position: 'absolute',
            width: currentSize.container,
            height: currentSize.container,
            borderRadius: '50%',
            border: `2px solid ${colors.primary}`,
            background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`
          }}
        />
      )}

      {/* Professional Avatar Image */}
      <motion.div
        whileHover={animated ? { scale: 1.05 } : {}}
        style={{
          position: 'relative',
          zIndex: 2
        }}
      >
        <ARIAImage />
      </motion.div>

      {/* Optional Title */}
      {showTitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            position: 'absolute',
            bottom: -30,
            left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap'
          }}
        >
          <p style={{
            fontSize: size === 'small' ? '0.8rem' : '1rem',
            color: colors.primary,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 0
          }}>
            ARIA
          </p>
          <p style={{
            fontSize: size === 'small' ? '0.6rem' : '0.75rem',
            color: '#94a3b8',
            textAlign: 'center',
            margin: 0
          }}>
            AI CEO
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}

// ARIA Status Indicator Component
export function ARIAStatus({ status = 'active', size = 'small' }) {
  const statusConfig = {
    active: { color: '#22c55e', text: 'Active', pulse: true },
    thinking: { color: '#3b82f6', text: 'Thinking', pulse: true },
    processing: { color: '#f59e0b', text: 'Processing', pulse: true },
    alert: { color: '#ef4444', text: 'Alert', pulse: false }
  }

  const config = statusConfig[status] || statusConfig.active
  const sizeMap = {
    small: 12,
    medium: 16,
    large: 20
  }
  const dotSize = sizeMap[size] || sizeMap.small

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.25rem 0.75rem',
      background: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '1rem',
      border: `1px solid ${config.color}30`
    }}>
      <motion.div
        animate={config.pulse ? {
          scale: [1, 1.2, 1],
          opacity: [1, 0.6, 1]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          width: dotSize,
          height: dotSize,
          borderRadius: '50%',
          background: config.color,
          boxShadow: `0 0 10px ${config.color}80`
        }}
      />
      <span style={{
        color: config.color,
        fontSize: size === 'small' ? '0.75rem' : '0.875rem',
        fontWeight: '500'
      }}>
        {config.text}
      </span>
    </div>
  )
}

// ARIA Icon Component - Simplified humanized icon
export function ARIAIcon({ size = 24, color = '#14b8a6' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle cx="50" cy="50" r="45" fill={color} opacity="0.1" />
      <circle cx="50" cy="50" r="35" fill={color} opacity="0.2" />
      
      {/* Face */}
      <ellipse cx="50" cy="45" rx="20" ry="23" fill={color} />
      
      {/* Hair */}
      <path
        d="M 30 35 Q 30 25, 50 25 Q 70 25, 70 35 L 70 40 Q 68 45, 65 45 L 63 38 Q 50 39, 37 38 L 35 45 Q 32 45, 30 40 Z"
        fill="#1a1a2e"
      />
      
      {/* Glasses */}
      <rect x="35" y="42" width="12" height="10" rx="2" fill="none" stroke="white" strokeWidth="1.5"/>
      <rect x="53" y="42" width="12" height="10" rx="2" fill="none" stroke="white" strokeWidth="1.5"/>
      <line x1="47" y1="47" x2="53" y2="47" stroke="white" strokeWidth="1.5"/>
      
      {/* Body */}
      <ellipse cx="50" cy="75" rx="25" ry="15" fill="#0f172a" />
      <polygon points="40,65 50,72 60,65" fill={color} opacity="0.6" />
    </svg>
  )
}
