import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, DollarSign, Globe, Shield } from 'lucide-react'

// 6. Customer Acquisition Funnel
export function AcquisitionFunnelChart({ animated = true }) {
  const stages = [
    { label: 'CPA Network', value: 1000, color: '#8b5cf6' },
    { label: 'Qualified Leads', value: 500, color: '#6366f1' },
    { label: 'Demos Booked', value: 200, color: '#3b82f6' },
    { label: 'Trials Started', value: 100, color: '#06b6d4' },
    { label: 'Customers', value: 50, color: '#14b8a6' }
  ]

  return (
    <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
      <h3 style={{ color: '#8b5cf6', fontSize: '1.2rem', marginBottom: '1rem' }}>
        B2B2C Acquisition Funnel
      </h3>
      <div style={{ position: 'relative', height: 'calc(100% - 3rem)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {stages.map((stage, i) => {
          const width = 100 - (i * 15)
          return (
            <motion.div
              key={stage.label}
              initial={animated ? { opacity: 0, scale: 0.8 } : {}}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              style={{
                width: `${width}%`,
                height: `${100 / stages.length}%`,
                background: stage.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                clipPath: `polygon(${i * 7.5}% 0%, ${100 - i * 7.5}% 0%, ${100 - (i + 1) * 7.5}% 100%, ${(i + 1) * 7.5}% 100%)`,
                position: 'relative'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  {stage.value}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem' }}>
                  {stage.label}
                </p>
              </div>
            </motion.div>
          )
        })}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            position: 'absolute',
            bottom: '-30px',
            color: '#14b8a6',
            fontWeight: 'bold'
          }}
        >
          5% Conversion Rate
        </motion.div>
      </div>
    </div>
  )
}

// 7. Market Share Capture
export function MarketShareChart({ animated = true }) {
  const segments = [
    { label: 'ARIA (Y5)', value: 5, color: '#14b8a6' },
    { label: 'Traditional', value: 60, color: '#64748b' },
    { label: 'Robo-Advisors', value: 10, color: '#fbbf24' },
    { label: 'Others', value: 25, color: '#94a3b8' }
  ]

  const total = segments.reduce((sum, seg) => sum + seg.value, 0)
  let currentAngle = 0

  return (
    <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
      <h3 style={{ color: '#8b5cf6', fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center' }}>
        Target Market Share (Year 5)
      </h3>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', height: 'calc(100% - 3rem)' }}>
        <div style={{ position: 'relative', width: '200px', height: '200px' }}>
          <svg width="200" height="200">
            {segments.map((segment, i) => {
              const angle = (segment.value / total) * 360
              const startAngle = currentAngle
              currentAngle += angle
              
              const x1 = 100 + 80 * Math.cos((startAngle * Math.PI) / 180)
              const y1 = 100 + 80 * Math.sin((startAngle * Math.PI) / 180)
              const x2 = 100 + 80 * Math.cos(((startAngle + angle) * Math.PI) / 180)
              const y2 = 100 + 80 * Math.sin(((startAngle + angle) * Math.PI) / 180)
              
              const largeArcFlag = angle > 180 ? 1 : 0
              
              return (
                <motion.path
                  key={segment.label}
                  d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={segment.color}
                  initial={animated ? { opacity: 0, scale: 0.8 } : {}}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{ transformOrigin: '100px 100px' }}
                />
              )
            })}
          </svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {segments.map((segment, i) => (
            <motion.div
              key={segment.label}
              initial={animated ? { opacity: 0, x: 20 } : {}}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <div style={{
                width: '12px',
                height: '12px',
                background: segment.color,
                borderRadius: '2px'
              }} />
              <span style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>
                {segment.label}: {segment.value}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 8. India Opportunity Timeline
export function IndiaTimelineChart({ animated = true }) {
  const milestones = [
    { year: '2025', event: 'GIFT City Launch', status: 'active', icon: Target },
    { year: '2026', event: '₹100Cr AUM', status: 'future', icon: DollarSign },
    { year: '2027', event: 'Pan-India Expansion', status: 'future', icon: Globe },
    { year: '2028', event: 'US Market Entry', status: 'future', icon: Users },
    { year: '2030', event: 'Global Leader', status: 'future', icon: Shield }
  ]

  return (
    <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
      <h3 style={{ color: '#f97316', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
        Expansion Timeline
      </h3>
      <div style={{ position: 'relative', height: 'calc(100% - 4rem)', padding: '0 2rem' }}>
        {/* Timeline Line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(180deg, #f97316, #fbbf24)',
          transform: 'translateX(-50%)'
        }} />
        
        {milestones.map((milestone, i) => {
          const Icon = milestone.icon
          return (
            <motion.div
              key={milestone.year}
              initial={animated ? { opacity: 0, scale: 0.8 } : {}}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              style={{
                position: 'absolute',
                left: i % 2 === 0 ? 0 : 'auto',
                right: i % 2 === 1 ? 0 : 'auto',
                top: `${i * 20}%`,
                width: '45%',
                textAlign: i % 2 === 0 ? 'right' : 'left'
              }}
            >
              <div style={{
                padding: '0.75rem',
                background: milestone.status === 'active' 
                  ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(251, 191, 36, 0.1))'
                  : 'rgba(0,0,0,0.3)',
                borderRadius: '8px',
                border: `1px solid ${milestone.status === 'active' ? '#f97316' : '#64748b'}`
              }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                  <Icon size={20} color={milestone.status === 'active' ? '#f97316' : '#94a3b8'} />
                  <p style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 'bold', 
                    color: milestone.status === 'active' ? '#f97316' : '#e2e8f0' 
                  }}>
                    {milestone.year}
                  </p>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                  {milestone.event}
                </p>
              </div>
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: i % 2 === 0 ? 'calc(100% + 11px)' : 'auto',
                right: i % 2 === 1 ? 'calc(100% + 11px)' : 'auto',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: milestone.status === 'active' ? '#f97316' : '#64748b',
                border: '2px solid #0f172a'
              }} />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// 9. Competitive Advantage Matrix
export function CompetitiveMatrixChart({ animated = true }) {
  const competitors = [
    { name: 'ARIA', ai: 95, india: 98, scale: 85, color: '#14b8a6' },
    { name: 'Traditional', ai: 20, india: 30, scale: 90, color: '#ef4444' },
    { name: 'Robo-Advisors', ai: 60, india: 10, scale: 70, color: '#fbbf24' },
    { name: 'Neo-Banks', ai: 40, india: 50, scale: 60, color: '#8b5cf6' }
  ]

  return (
    <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
      <h3 style={{ color: '#3b82f6', fontSize: '1.2rem', marginBottom: '1rem' }}>
        Competitive Advantage Score
      </h3>
      <div style={{ height: 'calc(100% - 3rem)' }}>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>
          <div style={{ width: '100px' }}>Company</div>
          <div style={{ flex: 1, textAlign: 'center' }}>AI Capability</div>
          <div style={{ flex: 1, textAlign: 'center' }}>India Access</div>
          <div style={{ flex: 1, textAlign: 'center' }}>Scale Potential</div>
        </div>
        {competitors.map((company, i) => (
          <motion.div
            key={company.name}
            initial={animated ? { opacity: 0, x: -20 } : {}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{
              display: 'flex',
              gap: '0.5rem',
              marginBottom: '0.75rem',
              alignItems: 'center'
            }}
          >
            <div style={{
              width: '100px',
              color: company.color,
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}>
              {company.name}
            </div>
            {['ai', 'india', 'scale'].map((metric, j) => (
              <div key={metric} style={{ flex: 1, height: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                <motion.div
                  initial={animated ? { width: 0 } : { width: `${company[metric]}%` }}
                  animate={{ width: `${company[metric]}%` }}
                  transition={{ delay: i * 0.1 + (j + 1) * 0.1, duration: 0.6 }}
                  style={{
                    height: '100%',
                    background: company.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '0 0.5rem'
                  }}
                >
                  <span style={{ color: 'white', fontSize: '0.7rem', fontWeight: 'bold' }}>
                    {company[metric]}
                  </span>
                </motion.div>
              </div>
            ))}
          </motion.div>
        ))}
        {competitors[0].name === 'ARIA' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{
              marginTop: '1rem',
              padding: '0.5rem',
              background: 'rgba(20, 184, 166, 0.1)',
              borderRadius: '8px',
              textAlign: 'center',
              color: '#14b8a6',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}
          >
            ARIA Leads in 2 of 3 Key Metrics
          </motion.div>
        )}
      </div>
    </div>
  )
}

// 10. Unit Economics Breakdown
export function UnitEconomicsChart({ animated = true }) {
  const metrics = [
    { label: 'CAC', value: '$500', detail: 'via CPAs', color: '#ef4444' },
    { label: 'LTV', value: '$25,000', detail: '5 years', color: '#10b981' },
    { label: 'Payback', value: '3 months', detail: 'industry best', color: '#fbbf24' },
    { label: 'LTV/CAC', value: '50x', detail: 'exceptional', color: '#3b82f6' }
  ]

  return (
    <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
      <h3 style={{ color: '#8b5cf6', fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center' }}>
        Unit Economics
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', height: 'calc(100% - 3rem)' }}>
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={animated ? { opacity: 0, y: 20 } : {}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            style={{
              background: `linear-gradient(135deg, ${metric.color}22, ${metric.color}11)`,
              borderRadius: '12px',
              border: `2px solid ${metric.color}44`,
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
              {metric.label}
            </p>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: metric.color, margin: '0.25rem 0' }}>
              {metric.value}
            </p>
            <p style={{ fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic' }}>
              {metric.detail}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          marginTop: '1rem',
          textAlign: 'center',
          padding: '0.5rem',
          background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))',
          borderRadius: '8px',
          border: '1px solid rgba(16, 185, 129, 0.3)'
        }}
      >
        <p style={{ fontSize: '0.9rem', color: '#14b8a6', fontWeight: 'bold' }}>
          Best-in-Class Unit Economics for SaaS
        </p>
      </motion.div>
    </div>
  )
}

// Export all advanced charts
export const AdvancedCharts = {
  AcquisitionFunnelChart,
  MarketShareChart,
  IndiaTimelineChart,
  CompetitiveMatrixChart,
  UnitEconomicsChart
}
