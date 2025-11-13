import React from 'react'
import { motion } from 'framer-motion'
import { Award, TrendingUp } from 'lucide-react'

export default function StanfordBadge({ 
  variant = 'full', // full, compact, mini
  animated = true,
  position = 'inline' // inline, float-right, float-left
}) {
  const variants = {
    full: {
      padding: '0.75rem 1.5rem',
      fontSize: '0.9rem',
      showDetails: true
    },
    compact: {
      padding: '0.5rem 1rem',
      fontSize: '0.8rem',
      showDetails: false
    },
    mini: {
      padding: '0.4rem 0.75rem',
      fontSize: '0.75rem',
      showDetails: false
    }
  }
  
  const config = variants[variant]
  
  const positionStyles = {
    inline: {},
    'float-right': {
      position: 'absolute',
      top: '2rem',
      right: '3rem',
      zIndex: 100
    },
    'float-left': {
      position: 'absolute',
      top: '2rem',
      left: '3rem',
      zIndex: 100
    }
  }
  
  return (
    <motion.div
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: variant === 'mini' ? '0.5rem' : '0.75rem',
        padding: config.padding,
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(251, 191, 36, 0.1))',
        border: '1px solid rgba(249, 115, 22, 0.3)',
        borderRadius: '2rem',
        cursor: 'default',
        ...positionStyles[position]
      }}
    >
      <Award size={variant === 'mini' ? 16 : 20} color="#fb923c" />
      
      <div style={{
        display: 'flex',
        flexDirection: config.showDetails ? 'column' : 'row',
        alignItems: config.showDetails ? 'flex-start' : 'center',
        gap: config.showDetails ? '0.2rem' : '0.5rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.3rem'
        }}>
          <motion.span
            animate={animated ? {
              scale: [1, 1.1, 1],
              textShadow: ['0 0 0px #fb923c', '0 0 10px #fb923c', '0 0 0px #fb923c']
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
            style={{
              fontSize: variant === 'full' ? '1.2rem' : '1rem',
              fontWeight: 'bold',
              color: '#fb923c'
            }}
          >
            600%
          </motion.span>
          <span style={{
            fontSize: config.fontSize,
            color: '#e2e8f0',
            fontWeight: '600'
          }}>
            AI Outperformance
          </span>
        </div>
        
        {config.showDetails && (
          <span style={{
            fontSize: '0.7rem',
            color: '#94a3b8'
          }}>
            Stanford Study 2024 - AI beats 93% of fund managers
          </span>
        )}
        
        {!config.showDetails && variant !== 'mini' && (
          <span style={{
            fontSize: '0.7rem',
            color: '#94a3b8'
          }}>
            Stanford 2024
          </span>
        )}
      </div>
      
      {variant === 'full' && (
        <TrendingUp size={18} color="#4ade80" />
      )}
    </motion.div>
  )
}
