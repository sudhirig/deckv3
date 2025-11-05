import { motion } from 'framer-motion'

export default function AnimatedText({ 
  children, 
  delay = 0, 
  className = '',
  type = 'fade-up' // 'fade-up', 'fade-in', 'slide-in'
}) {
  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    'slide-in': {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants[type]}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
