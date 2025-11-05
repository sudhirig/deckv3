import { motion } from 'framer-motion'

export default function PulsingBadge({ children, color = 'teal', className = '' }) {
  const colors = {
    teal: 'bg-teal-500/20 text-teal-400 border-teal-500/40',
    green: 'bg-green-500/20 text-green-400 border-green-500/40',
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
    purple: 'bg-purple-500/20 text-purple-400 border-purple-500/40',
    orange: 'bg-orange-500/20 text-orange-400 border-orange-500/40'
  }

  return (
    <motion.div
      className={`inline-block px-4 py-2 border-2 rounded-lg ${colors[color]} ${className}`}
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          '0 0 0 0 rgba(20, 184, 166, 0)',
          '0 0 20px 5px rgba(20, 184, 166, 0.3)',
          '0 0 0 0 rgba(20, 184, 166, 0)'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop'
      }}
    >
      {children}
    </motion.div>
  )
}
