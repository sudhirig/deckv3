import React from 'react'
import { motion } from 'framer-motion'

const BarChart = ({ data, height = 150, showValues = true, animated = true, colorScheme = 'blue' }) => {
  const maxValue = Math.max(...data.map(d => d.value))
  
  const colors = {
    blue: ['from-blue-500', 'to-blue-600', 'text-blue-400'],
    green: ['from-green-500', 'to-green-600', 'text-green-400'],
    purple: ['from-purple-500', 'to-purple-600', 'text-purple-400'],
    teal: ['from-teal-500', 'to-teal-600', 'text-teal-400'],
    gradient: ['from-teal-500', 'to-green-500', 'text-teal-400']
  }
  
  const [fromColor, toColor, textColor] = colors[colorScheme] || colors.blue
  
  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-2" style={{ height }}>
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * 100
          const Component = animated ? motion.div : 'div'
          
          return (
            <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
              <Component
                className={`w-full bg-gradient-to-t ${fromColor} ${toColor} rounded-t-md relative`}
                initial={animated ? { height: 0 } : {}}
                animate={animated ? { height: `${barHeight}%` } : {}}
                transition={animated ? { delay: index * 0.1, duration: 0.6 } : {}}
                style={!animated ? { height: `${barHeight}%` } : {}}
              >
                {showValues && (
                  <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 ${textColor} font-bold text-sm whitespace-nowrap`}>
                    {item.displayValue || item.value}
                  </div>
                )}
              </Component>
              <div className="text-xs text-gray-400 mt-2 text-center truncate w-full">
                {item.label}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BarChart