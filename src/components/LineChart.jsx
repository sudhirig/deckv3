import React from 'react'
import { motion } from 'framer-motion'

const LineChart = ({ data, height = 150, width = '100%', animated = true, showGrid = true }) => {
  const maxValue = Math.max(...data.map(d => d.value))
  const minValue = Math.min(...data.map(d => d.value))
  const range = maxValue - minValue || 1 // Prevent division by zero for flat datasets
  
  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 100 - ((item.value - minValue) / range) * 100
    return { x, y, ...item }
  })
  
  const pathData = points.reduce((acc, point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`
    return `${acc} L ${point.x} ${point.y}`
  }, '')
  
  return (
    <div className="relative" style={{ height, width }}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {showGrid && (
          <g className="opacity-20">
            {[0, 25, 50, 75, 100].map(y => (
              <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="white" strokeWidth="0.2" />
            ))}
          </g>
        )}
        
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <motion.path
          d={`${pathData} L 100 100 L 0 100 Z`}
          fill="url(#areaGradient)"
          initial={animated ? { opacity: 0 } : {}}
          animate={animated ? { opacity: 1 } : {}}
          transition={animated ? { duration: 0.8 } : {}}
        />
        
        <motion.path
          d={pathData}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={animated ? { pathLength: 0 } : {}}
          animate={animated ? { pathLength: 1 } : {}}
          transition={animated ? { duration: 1.2 } : {}}
        />
        
        {points.map((point, index) => (
          <motion.circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="1.5"
            fill="#10b981"
            initial={animated ? { scale: 0 } : {}}
            animate={animated ? { scale: 1 } : {}}
            transition={animated ? { delay: index * 0.1, duration: 0.3 } : {}}
          />
        ))}
      </svg>
      
      <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-400">
        {data.map((item, index) => (
          <span key={index} className="truncate">{item.label}</span>
        ))}
      </div>
    </div>
  )
}

export default LineChart