import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Activity } from 'lucide-react'

export default function OperationalBadge({ 
  variant = 'default', // default, compact, large
  animated = true 
}) {
  const variants = {
    default: {
      padding: '0.5rem 1rem',
      fontSize: '0.85rem',
      iconSize: 16
    },
    compact: {
      padding: '0.4rem 0.75rem',
      fontSize: '0.75rem',
      iconSize: 14
    },
    large: {
      padding: '0.75rem 1.25rem',
      fontSize: '1rem',
      iconSize: 20
    }
  }
  
  const config = variants[variant]
  
  return (
    <motion.div
      initial={animated ? { opacity: 0, y: -10 } : {}}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      whileHover={{ scale: 1.05 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: config.padding,
        background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.15), rgba(34, 197, 94, 0.1))',
        border: '1px solid rgba(74, 222, 128, 0.3)',
        borderRadius: '1.5rem'
      }}
    >
      <motion.div
        animate={animated ? {
          scale: [1, 1.2, 1]
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <CheckCircle size={config.iconSize} color="#4ade80" />
      </motion.div>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span style={{
          fontSize: config.fontSize,
          color: '#4ade80',
          fontWeight: '700'
        }}>
          100% OPERATIONAL
        </span>
        
        <Activity size={config.iconSize} color="#4ade80" />
        
        <span style={{
          fontSize: config.fontSize,
          color: '#e2e8f0',
          fontWeight: '500'
        }}>
          Live Today
        </span>
      </div>
    </motion.div>
  )
}
