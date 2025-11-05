import { motion } from 'framer-motion'

export default function InteractiveCard({ 
  children, 
  className = '',
  gradient = 'teal',
  hover = true,
  glow = false,
  delay = 0
}) {
  const gradients = {
    teal: 'rgba(20, 184, 166, 0.1)',
    green: 'rgba(34, 197, 94, 0.1)',
    blue: 'rgba(59, 130, 246, 0.1)',
    purple: 'rgba(147, 51, 234, 0.1)',
    red: 'rgba(239, 68, 68, 0.1)',
    yellow: 'rgba(251, 191, 36, 0.1)'
  }

  const glowColors = {
    teal: '#14b8a6',
    green: '#22c55e',
    blue: '#3b82f6',
    purple: '#9333ea',
    red: '#ef4444',
    yellow: '#fbbf24'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { 
        y: -8, 
        boxShadow: glow ? `0 20px 40px ${glowColors[gradient]}40, 0 0 30px ${glowColors[gradient]}30` : `0 20px 40px rgba(0, 0, 0, 0.3)`
      } : {}}
      className={className}
      style={{
        background: gradients[gradient],
        border: `1px solid ${glowColors[gradient]}40`,
        borderRadius: '16px',
        padding: '2rem',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: hover ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {glow && (
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: `radial-gradient(circle, ${glowColors[gradient]}20 0%, transparent 70%)`,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  )
}
