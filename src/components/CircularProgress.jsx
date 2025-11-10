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
  // EARLY VALIDATION: Convert all props to safe values immediately
  const parsedValue = Number.parseFloat(value ?? 0)
  const safeValue = (Number.isFinite(parsedValue) && parsedValue >= 0 && parsedValue <= 100) ? parsedValue : 0
  
  const parsedSize = Number.parseFloat(size ?? 120)
  const rawSafeSize = (Number.isFinite(parsedSize) && parsedSize > 0) ? parsedSize : 120
  
  const parsedStrokeWidth = Number.parseFloat(strokeWidth ?? 8)
  const rawSafeStrokeWidth = (Number.isFinite(parsedStrokeWidth) && parsedStrokeWidth > 0) ? parsedStrokeWidth : 8
  
  const parsedDelay = Number.parseFloat(delay ?? 0)
  const safeDelay = (Number.isFinite(parsedDelay) && parsedDelay >= 0) ? parsedDelay : 0
  
  // CRITICAL: Ensure strokeWidth is never >= size to prevent invalid radius
  const safeStrokeWidth = rawSafeStrokeWidth >= rawSafeSize ? Math.max(rawSafeSize / 3, 1) : rawSafeStrokeWidth
  const safeSize = rawSafeSize
  
  // Calculate radius with absolute guarantees
  const calculatedRadius = (safeSize - safeStrokeWidth) / 2
  const radius = Math.max(calculatedRadius, 1) // Absolute minimum radius of 1
  
  // Final safety check: If radius is still invalid, bail out immediately
  if (!Number.isFinite(radius) || radius <= 0) {
    console.error('CircularProgress: FATAL - Cannot calculate valid radius', { 
      radius,
      calculatedRadius,
      size: safeSize, 
      strokeWidth: safeStrokeWidth,
      originalProps: { value, size, strokeWidth }
    })
    return null
  }
  
  const [displayValue, setDisplayValue] = useState(0)
  const timerRef = useRef(null)
  const intervalRef = useRef(null)
  
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

  // Explicit radius for JSX to prevent ANY possibility of undefined
  const jsxRadius = Number(radius) || 56
  
  // DEBUG: Log if something went wrong
  if (!Number.isFinite(jsxRadius) || jsxRadius <= 0) {
    console.error('CircularProgress: Invalid jsxRadius!', {
      jsxRadius,
      radius,
      calculatedRadius,
      size, strokeWidth,
      safeSize, safeStrokeWidth
    })
  }
  
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
          r={jsxRadius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={safeStrokeWidth}
          fill="none"
        />
        <motion.circle
          cx={safeSize / 2}
          cy={safeSize / 2}
          r={jsxRadius}
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
