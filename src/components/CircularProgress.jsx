import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function CircularProgress({ 
  value, 
  size = 120, 
  strokeWidth = 8, 
  color = '#14b8a6',
  label = '',
  delay = 0
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const timerRef = useRef(null)
  const intervalRef = useRef(null)
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (displayValue / 100) * circumference

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      let current = 0
      const increment = value / 60
      intervalRef.current = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, 16)
    }, delay * 1000)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [value, delay])

  return (
    <div style={{ 
      display: 'inline-flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      <svg
        width={size}
        height={size}
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{
            filter: `drop-shadow(0 0 8px ${color}88)`
          }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.3em"
          style={{
            fontSize: `${size / 3}px`,
            fontWeight: 'bold',
            fill: color,
            transform: 'rotate(90deg)',
            transformOrigin: 'center'
          }}
        >
          {displayValue}%
        </text>
      </svg>
      {label && (
        <span style={{ fontSize: '0.9rem', color: '#94a3b8', textAlign: 'center' }}>
          {label}
        </span>
      )}
    </div>
  )
}
