import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, Minus, AlertCircle } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'
import GradientText from './GradientText'

const MetricsDashboard = ({ 
  metrics = [],
  title = "Key Metrics",
  subtitle = "",
  layout = "grid", // grid, row, column
  animated = true,
  refreshInterval = null // milliseconds, null = no refresh
}) => {
  const [currentMetrics, setCurrentMetrics] = useState(metrics)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  useEffect(() => {
    if (refreshInterval) {
      const timer = setInterval(() => {
        // Simulate metric updates if refresh is enabled
        setCurrentMetrics(prev => prev.map(metric => ({
          ...metric,
          value: metric.isLive ? 
            metric.value + (Math.random() - 0.5) * (metric.volatility || 10) : 
            metric.value,
          trend: metric.isLive ? 
            Math.random() > 0.5 ? 'up' : 'down' : 
            metric.trend
        })))
        setLastUpdate(new Date())
      }, refreshInterval)
      
      return () => clearInterval(timer)
    }
  }, [refreshInterval, metrics])

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'up': return <TrendingUp size={16} />
      case 'down': return <TrendingDown size={16} />
      case 'neutral': return <Minus size={16} />
      default: return null
    }
  }

  const getTrendColor = (trend) => {
    switch(trend) {
      case 'up': return '#4ade80'
      case 'down': return '#f87171'
      case 'neutral': return '#94a3b8'
      default: return '#64748b'
    }
  }

  const formatValue = (value, format) => {
    if (typeof value !== 'number') return value
    
    switch(format) {
      case 'currency':
        return value >= 1000000 ? `$${(value / 1000000).toFixed(1)}M` :
               value >= 1000 ? `$${(value / 1000).toFixed(0)}K` :
               `$${value.toFixed(0)}`
      case 'percentage':
        return `${value.toFixed(1)}%`
      case 'number':
        return value >= 1000000 ? `${(value / 1000000).toFixed(1)}M` :
               value >= 1000 ? `${(value / 1000).toFixed(0)}K` :
               value.toFixed(0)
      case 'decimal':
        return value.toFixed(2)
      default:
        return value
    }
  }

  const getLayoutClass = () => {
    switch(layout) {
      case 'row':
        return 'flex flex-row gap-4'
      case 'column':
        return 'flex flex-col gap-4'
      case 'grid':
      default:
        return `grid grid-cols-${Math.min(currentMetrics.length, 4)} gap-4`
    }
  }

  const containerStyle = layout === 'grid' ? {
    display: 'grid',
    gridTemplateColumns: `repeat(${Math.min(currentMetrics.length, 4)}, 1fr)`,
    gap: '1.5rem'
  } : layout === 'row' ? {
    display: 'flex',
    flexDirection: 'row',
    gap: '1.5rem',
    flexWrap: 'wrap'
  } : {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }

  return (
    <div style={{ width: '100%' }}>
      {/* Header */}
      {(title || subtitle) && (
        <div style={{ marginBottom: '2rem' }}>
          {title && (
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              <GradientText gradient="from-teal-400 to-cyan-400">
                {title}
              </GradientText>
            </h3>
          )}
          {subtitle && (
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{subtitle}</p>
          )}
        </div>
      )}

      {/* Metrics Container */}
      <div style={containerStyle}>
        {currentMetrics.map((metric, index) => (
          <motion.div
            key={metric.id || index}
            initial={{ opacity: 0, y: animated ? 20 : 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            style={{
              background: metric.bgColor || 'rgba(20, 184, 166, 0.1)',
              border: `1px solid ${metric.borderColor || 'rgba(20, 184, 166, 0.2)'}`,
              borderRadius: '12px',
              padding: '1.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background Pattern */}
            {metric.showPattern && (
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: `linear-gradient(135deg, ${metric.accentColor || '#14b8a6'}22, transparent)`,
                borderRadius: '50%',
                transform: 'translate(30%, -30%)'
              }} />
            )}

            {/* Alert Badge */}
            {metric.alert && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '0.5rem',
                  color: '#fbbf24',
                  background: 'rgba(251, 191, 36, 0.1)',
                  padding: '0.25rem',
                  borderRadius: '4px'
                }}
              >
                <AlertCircle size={16} />
              </motion.div>
            )}

            {/* Metric Content */}
            <div style={{ position: 'relative' }}>
              {/* Label and Trend */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '0.75rem'
              }}>
                <span style={{ 
                  color: '#94a3b8', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {metric.label}
                </span>
                {metric.trend && (
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: getTrendColor(metric.trend)
                  }}>
                    {getTrendIcon(metric.trend)}
                    {metric.change && (
                      <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>
                        {metric.change}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Value */}
              <div style={{ 
                fontSize: metric.valueSize || '2rem', 
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                {metric.animated ? (
                  <AnimatedCounter 
                    end={typeof metric.value === 'number' ? metric.value : 0}
                    duration={1.5}
                    prefix={metric.format === 'currency' ? '$' : ''}
                    suffix={metric.format === 'percentage' ? '%' : ''}
                  />
                ) : (
                  <span style={{ 
                    color: metric.valueColor || '#e2e8f0'
                  }}>
                    {formatValue(metric.value, metric.format)}
                  </span>
                )}
              </div>

              {/* Description */}
              {metric.description && (
                <p style={{ 
                  fontSize: '0.8rem', 
                  color: '#64748b',
                  lineHeight: '1.4'
                }}>
                  {metric.description}
                </p>
              )}

              {/* Progress Bar */}
              {metric.progress !== undefined && (
                <div style={{ marginTop: '1rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                    fontSize: '0.8rem',
                    color: '#94a3b8'
                  }}>
                    <span>Progress</span>
                    <span>{metric.progress}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.progress}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${metric.progressColor || '#14b8a6'}, ${metric.progressEndColor || '#22d3ee'})`,
                        borderRadius: '3px'
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Sparkline (if data provided) */}
              {metric.sparklineData && (
                <div style={{ marginTop: '1rem', height: '40px' }}>
                  <svg 
                    width="100%" 
                    height="40" 
                    viewBox={`0 0 100 40`}
                    preserveAspectRatio="none"
                  >
                    <polyline
                      fill="none"
                      stroke={metric.sparklineColor || '#14b8a6'}
                      strokeWidth="2"
                      points={metric.sparklineData.map((value, i) => 
                        `${(i / (metric.sparklineData.length - 1)) * 100},${40 - (value / Math.max(...metric.sparklineData)) * 40}`
                      ).join(' ')}
                    />
                  </svg>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer with last update */}
      {refreshInterval && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            marginTop: '1.5rem',
            textAlign: 'center',
            color: '#64748b',
            fontSize: '0.8rem'
          }}
        >
          Last updated: {lastUpdate.toLocaleTimeString()}
        </motion.div>
      )}
    </div>
  )
}

export default MetricsDashboard