import { useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AnimatedCounter({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  className = '',
  decimals = 0 
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      let startTime
      const startValue = 0
      const endValue = end

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const current = startValue + (endValue - startValue) * easeOutQuart
        
        setCount(current)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(endValue)
        }
      }
      
      requestAnimationFrame(animate)
      controls.start({ 
        scale: [1, 1.1, 1],
        transition: { duration: 0.5, delay: duration * 0.8 }
      })
    }
  }, [isInView, end, duration, controls])

  return (
    <motion.span 
      ref={ref}
      animate={controls}
      className={className}
    >
      {prefix}{count.toFixed(decimals)}{suffix}
    </motion.span>
  )
}
