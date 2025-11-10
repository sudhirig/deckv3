import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function CircularProgress({ 
  value = 0, 
  size = 120, 
  strokeWidth = 8, 
  color = '#14b8a6',
  label = '',
  delay = 0
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const timerRef = useRef(null)
  const intervalRef = useRef(null)
  
  // Parse and validate all numeric props
  const parsedValue = Number.parseFloat(value)
  const safeValue = (Number.isFinite(parsedValue) && parsedValue >= 0 && parsedValue <= 100) ? parsedValue : 0
  
  const parsedSize = Number.parseFloat(size)
  const safeSize = (Number.isFinite(parsedSize) && parsedSize > 0) ? parsedSize : 120
  
  const parsedStrokeWidth = Number.parseFloat(strokeWidth)
  const safeStrokeWidth = (Number.isFinite(parsedStrokeWidth) && parsedStrokeWidth > 0) ? parsedStrokeWidth : 8
  
  const parsedDelay = Number.parseFloat(delay)
  const safeDelay = (Number.isFinite(parsedDelay) && parsedDelay >= 0) ? parsedDelay : 0
  
  // Guard against invalid size/strokeWidth relationship - MUST be before radius calculation
  if (!Number.isFinite(safeSize) || !Number.isFinite(safeStrokeWidth) || safeStrokeWidth >= safeSize || safeSize <= 0 || safeStrokeWidth <= 0) {
    console.warn('CircularProgress: Invalid size/strokeWidth configuration', { 
      size: safeSize, 
      strokeWidth: safeStrokeWidth,
      originalProps: { value, size, strokeWidth, delay }
    })
    return null
  }
  
  // Calculate radius - guaranteed to be valid due to guards above
  const radius = (safeSize - safeStrokeWidth) / 2
  
  // Final safety check (should never trigger if guards above work correctly)
  if (!Number.isFinite(radius) || radius <= 0) {
    console.error('CircularProgress: CRITICAL - Radius calculation failed despite guards', { 
      radius,
      size: safeSize, 
      strokeWidth: safeStrokeWidth,
      originalProps: { value, size, strokeWidth, delay }
    })
    return null
  }
  
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (displayValue / 100) * circumference

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      let current = 0
      const increment = safeValue / 60
      intervalRef.current = setInterval(() => {
        current += increment
        if (current >= safeValue) {
          setDisplayValue(safeValue)
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, 16)
    }, safeDelay * 1000)

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
  }, [safeValue, safeDelay])

  return (
    <div style={{ 
      display: 'inline-flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      <svg
        width={safeSize}
        height={safeSize}
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          cx={safeSize / 2}
          cy={safeSize / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={safeStrokeWidth}
          fill="none"
        />
        <motion.circle
          cx={safeSize / 2}
          cy={safeSize / 2}
          r={radius}
          stroke={color || '#14b8a6'}
          strokeWidth={safeStrokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, delay: safeDelay, ease: [0.16, 1, 0.3, 1] }}
          style={{
            filter: `drop-shadow(0 0 8px ${color || '#14b8a6'}88)`
          }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.3em"
          style={{
            fontSize: `${safeSize / 3}px`,
            fontWeight: 'bold',
            fill: color || '#14b8a6',
            transform: 'rotate(90deg)',
            transformOrigin: 'center'
          }}
        >
          {Math.round(displayValue)}%
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
