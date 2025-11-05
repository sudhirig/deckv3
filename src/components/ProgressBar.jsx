import { motion } from 'framer-motion'

export default function ProgressBar({ value, label, color = '#14b8a6', delay = 0 }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {label && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '0.5rem',
          fontSize: '0.9rem',
          color: '#94a3b8'
        }}>
          <span>{label}</span>
          <span style={{ fontWeight: 'bold', color }}>{value}%</span>
        </div>
      )}
      <div style={{
        height: '8px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '999px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ 
            duration: 1.5, 
            delay,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}, ${color}dd)`,
            borderRadius: '999px',
            boxShadow: `0 0 20px ${color}88`,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            animate={{
              x: ['0%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
