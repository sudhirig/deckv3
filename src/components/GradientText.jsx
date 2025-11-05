import { motion } from 'framer-motion'

export default function GradientText({ 
  children, 
  gradient = 'from-teal-400 to-green-400',
  className = '',
  animate = true
}) {
  const baseClasses = `bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`
  
  if (!animate) {
    return <span className={baseClasses}>{children}</span>
  }

  return (
    <motion.span
      className={baseClasses}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.span>
  )
}
