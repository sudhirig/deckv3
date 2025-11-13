import React from 'react'
import { motion } from 'framer-motion'

export default function ARIAIconBadge({ size = 60, animated = true }) {
  return (
    <motion.div
      initial={animated ? { scale: 0, rotate: -180 } : {}}
      animate={animated ? { scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.8, type: "spring" }}
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.2,
        background: 'linear-gradient(135deg, #0f172a, #1e293b)',
        border: '2px solid rgba(20, 184, 166, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 30px rgba(20, 184, 166, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.1) 0%, transparent 70%)',
      }} />
      
      {/* Hexagon background */}
      <svg 
        width={size * 0.8} 
        height={size * 0.8} 
        viewBox="0 0 60 60" 
        fill="none"
        style={{ position: 'absolute' }}
      >
        <path
          d="M 30 10 L 45 20 L 45 40 L 30 50 L 15 40 L 15 20 Z"
          stroke="rgba(20, 184, 166, 0.2)"
          strokeWidth="1"
          fill="rgba(20, 184, 166, 0.05)"
        />
      </svg>
      
      {/* Letter A */}
      <svg 
        width={size * 0.5} 
        height={size * 0.5} 
        viewBox="0 0 40 40" 
        fill="none"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <defs>
          <linearGradient id="aGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        
        {/* Stylized A */}
        <path
          d="M 20 8 L 12 32 M 20 8 L 28 32 M 15 22 L 25 22"
          stroke="url(#aGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Animated connection lines */}
        {animated && (
          <motion.path
            d="M 20 8 L 12 32 L 28 32 L 20 8"
            stroke="url(#aGradient)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.3, 0.3, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
        
        {/* Tech dots with twinkle animation */}
        <motion.circle 
          cx="20" 
          cy="8" 
          r="2" 
          fill="#14b8a6"
          animate={animated ? {
            scale: [1, 1.5, 1],
            opacity: [1, 0.6, 1]
          } : {}}
          transition={animated ? {
            duration: 2,
            repeat: Infinity,
            delay: 0,
            ease: "easeInOut"
          } : {}}
        />
        <motion.circle 
          cx="12" 
          cy="32" 
          r="2" 
          fill="#06b6d4"
          animate={animated ? {
            scale: [1, 1.5, 1],
            opacity: [1, 0.6, 1]
          } : {}}
          transition={animated ? {
            duration: 2,
            repeat: Infinity,
            delay: 0.7,
            ease: "easeInOut"
          } : {}}
        />
        <motion.circle 
          cx="28" 
          cy="32" 
          r="2" 
          fill="#10b981"
          animate={animated ? {
            scale: [1, 1.5, 1],
            opacity: [1, 0.6, 1]
          } : {}}
          transition={animated ? {
            duration: 2,
            repeat: Infinity,
            delay: 1.4,
            ease: "easeInOut"
          } : {}}
        />
      </svg>
      
      {/* Pulse animation */}
      {animated && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            inset: -2,
            borderRadius: size * 0.2,
            border: '2px solid #14b8a6',
          }}
        />
      )}
    </motion.div>
  )
}
