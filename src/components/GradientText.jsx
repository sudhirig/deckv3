import { motion } from 'framer-motion'

const gradientMap = {
  'from-teal-400 to-green-400': 'linear-gradient(135deg, #2dd4bf 0%, #22c55e 100%)',
  'from-teal-400 via-cyan-400 to-green-400': 'linear-gradient(135deg, #2dd4bf 0%, #22d3ee 50%, #22c55e 100%)',
  'from-blue-400 to-purple-400': 'linear-gradient(135deg, #60a5fa 0%, #c084fc 100%)',
  'from-purple-400 to-pink-400': 'linear-gradient(135deg, #c084fc 0%, #f472b6 100%)',
  'from-green-400 to-teal-400': 'linear-gradient(135deg, #4ade80 0%, #2dd4bf 100%)'
}

export default function GradientText({ 
  children, 
  gradient = 'from-teal-400 to-green-400',
  className = '',
  animate = false
}) {
  const gradientStyle = {
    background: gradientMap[gradient] || gradientMap['from-teal-400 to-green-400'],
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  }
  
  if (!animate) {
    return <span className={className} style={gradientStyle}>{children}</span>
  }

  return (
    <motion.span
      className={className}
      style={{...gradientStyle, opacity: 0}}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.span>
  )
}
