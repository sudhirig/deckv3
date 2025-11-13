import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign, Users, BarChart, PieChart } from 'lucide-react'

// 1. Market Growth Chart - Shows $30B to $600B TAM growth
export function MarketGrowthChart({ animated = true }) {
  const years = [2020, 2023, 2025, 2030]
  const values = [30, 100, 250, 600] // in billions
  const maxValue = 600

  return (
    <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
      <h3 style={{ color: '#14b8a6', fontSize: '1.2rem', marginBottom: '1rem' }}>
        India Wealth Management TAM
      </h3>
      <div style={{ position: 'relative', height: 'calc(100% - 3rem)' }}>
        {years.map((year, i) => (
          <motion.div
            key={year}
            initial={animated ? { width: 0 } : { width: `${(values[i] / maxValue) * 100}%` }}
            animate={{ width: `${(values[i] / maxValue) * 100}%` }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            style={{
              position: 'absolute',
              bottom: `${i * 25}%`,
              left: 0,
              height: '20%',
              background: `linear-gradient(90deg, #14b8a6, #06b6d4)`,
              borderRadius: '0 8px 8px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '0 1rem'
            }}
          >
            <span style={{ color: 'white', fontWeight: 'bold', marginRight: '0.5rem' }}>
              ${values[i]}B
            </span>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
              {year}
            </span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            padding: '0.5rem 1rem',
            background: 'rgba(20, 184, 166, 0.2)',
            borderRadius: '8px',
            border: '1px solid #14b8a6'
          }}
        >
          <p style={{ color: '#14b8a6', fontSize: '1.5rem', fontWeight: 'bold' }}>
            47% CAGR
          </p>
        </motion.div>
      </div>
    </div>
  )
}

// 2. AI Performance Comparison - Stanford study results
export function AIPerformanceChart({ animated = true }) {
  const data = [
    { label: 'AI Models', value: 72, color: '#10b981' },
    { label: 'Human Advisors', value: 32, color: '#ef4444' },
    { label: 'Robo-Advisors', value: 48, color: '#fbbf24' }
  ]

  return (
    <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
      <h3 style={{ color: '#3b82f6', fontSize: '1.2rem', marginBottom: '1rem' }}>
        Portfolio Performance (Annual %)
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: 'calc(100% - 3rem)' }}>
        {data.map((item, i) => (
          <div key={item.label} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '120px', color: '#e2e8f0', fontSize: '0.9rem' }}>
              {item.label}
            </div>
            <div style={{ flex: 1, position: 'relative', height: '40px' }}>
              <motion.div
                initial={animated ? { width: 0 } : { width: `${item.value}%` }}
                animate={{ width: `${item.value}%` }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                style={{
                  height: '100%',
                  background: item.color,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: '0 1rem'
                }}
              >
                <span style={{ color: 'white', fontWeight: 'bold' }}>
                  {item.value}%
                </span>
              </motion.div>
              {item.label === 'AI Models' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  style={{
                    position: 'absolute',
                    right: '-80px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#10b981',
                    fontWeight: 'bold'
                  }}
                >
                  2.25x Better
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 3. Revenue Projection Chart
export function RevenueProjectionChart({ animated = true }) {
  const years = ['Y1', 'Y2', 'Y3', 'Y4', 'Y5']
  const revenue = [2, 15, 50, 120, 250] // in millions
  const maxRevenue = 250

  return (
    <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
      <h3 style={{ color: '#10b981', fontSize: '1.2rem', marginBottom: '1rem' }}>
        Revenue Projection ($M)
      </h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', height: 'calc(100% - 3rem)', gap: '0.5rem' }}>
        {years.map((year, i) => (
          <div key={year} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
              initial={animated ? { height: 0 } : { height: `${(revenue[i] / maxRevenue) * 100}%` }}
              animate={{ height: `${(revenue[i] / maxRevenue) * 100}%` }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              style={{
                width: '100%',
                background: `linear-gradient(180deg, #14b8a6, #06b6d4)`,
                borderRadius: '8px 8px 0 0',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '0.5rem 0'
              }}
            >
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>
                ${revenue[i]}M
              </span>
            </motion.div>
            <div style={{ marginTop: '0.5rem', color: '#94a3b8', fontSize: '0.8rem' }}>
              {year}
            </div>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          marginTop: '0.5rem',
          textAlign: 'center',
          color: '#5eead4',
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }}
      >
        Path to Unicorn in 5 Years
      </motion.div>
    </div>
  )
}

// 4. Agent Performance Metrics
export function AgentMetricsChart({ animated = true }) {
  const metrics = [
    { label: 'Decisions/Day', value: '1M+', icon: BarChart, color: '#3b82f6' },
    { label: 'Response Time', value: '<100ms', icon: TrendingUp, color: '#10b981' },
    { label: 'Accuracy', value: '99.9%', icon: PieChart, color: '#8b5cf6' },
    { label: 'Uptime', value: '99.99%', icon: TrendingUp, color: '#fbbf24' }
  ]

  return (
    <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
      <h3 style={{ color: '#3b82f6', fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center' }}>
        ARIA Performance Metrics
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', height: 'calc(100% - 3rem)' }}>
        {metrics.map((metric, i) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={metric.label}
              initial={animated ? { opacity: 0, scale: 0.9 } : {}}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: `linear-gradient(135deg, ${metric.color}22, ${metric.color}11)`,
                borderRadius: '12px',
                border: `1px solid ${metric.color}44`,
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Icon size={24} color={metric.color} />
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: metric.color, margin: '0.5rem 0' }}>
                {metric.value}
              </p>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', textAlign: 'center' }}>
                {metric.label}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// 5. Tax Savings Visualization
export function TaxSavingsChart({ animated = true }) {
  const [savings, setSavings] = useState(0)
  const targetSavings = 15 // lakhs

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setSavings(targetSavings), 500)
      return () => clearTimeout(timer)
    } else {
      setSavings(targetSavings)
    }
  }, [animated])

  return (
    <div style={{ width: '100%', height: '100%', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h3 style={{ color: '#10b981', fontSize: '1.2rem', marginBottom: '1rem' }}>
        Average Tax Savings per Client
      </h3>
      <div style={{ position: 'relative', width: '200px', height: '200px' }}>
        <svg width="200" height="200" style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="rgba(16, 185, 129, 0.2)"
            strokeWidth="20"
          />
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="#10b981"
            strokeWidth="20"
            strokeDasharray={`${(savings / targetSavings) * 502} 502`}
            initial={{ strokeDasharray: '0 502' }}
            animate={{ strokeDasharray: `${(savings / targetSavings) * 502} 502` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </svg>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>
          <motion.p
            style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ₹{savings}L
          </motion.p>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
            Annual Savings
          </p>
        </div>
      </div>
    </div>
  )
}

// Export all charts as a collection
export const AllCharts = {
  MarketGrowthChart,
  AIPerformanceChart,
  RevenueProjectionChart,
  AgentMetricsChart,
  TaxSavingsChart
}
