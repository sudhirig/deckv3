import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { 
  TrendingUp, DollarSign, Calculator, Target,
  Users, ArrowUpRight, Calendar, CheckCircle
} from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

/**
 * BusinessModelCompleteFixed - Comprehensive financial view with inline styles
 * Shows: Revenue projections, unit economics, break-even, path to $100M ARR
 */
export default function BusinessModelCompleteFixed() {
  const [selectedYear, setSelectedYear] = useState(0)
  const [animateChart, setAnimateChart] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateChart(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const yearData = [
    { 
      year: 'Year 1', 
      revenue: 2.5, 
      costs: 4.2, 
      profit: -1.7,
      users: 500,
      arpu: 5000,
      cac: 1500,
      milestones: ['Product launch', 'First 100 users', 'SEBI approval']
    },
    { 
      year: 'Year 2', 
      revenue: 12, 
      costs: 10.5, 
      profit: 1.5,
      users: 2000,
      arpu: 6000,
      cac: 1400,
      milestones: ['Break-even', 'B2B2C launch', '1000 CPAs']
    },
    { 
      year: 'Year 3', 
      revenue: 35, 
      costs: 24.5, 
      profit: 10.5,
      users: 5000,
      arpu: 7000,
      cac: 1300,
      milestones: ['Series A', 'US expansion', 'Alternative assets']
    },
    { 
      year: 'Year 4', 
      revenue: 100, 
      costs: 60, 
      profit: 40,
      users: 12500,
      arpu: 8000,
      cac: 1200,
      milestones: ['$100M ARR', 'Series B', 'Global launch']
    },
    { 
      year: 'Year 5', 
      revenue: 250, 
      costs: 137.5, 
      profit: 112.5,
      users: 30000,
      arpu: 8333,
      cac: 1100,
      milestones: ['IPO ready', 'Market leader', 'Unicorn status']
    }
  ]

  const topMetrics = [
    { icon: Calculator, value: '50x', label: 'LTV/CAC', color: '#10b981' },
    { icon: Calendar, value: 'Month 18', label: 'Break-even', color: '#22c55e' },
    { icon: TrendingUp, value: '70%', label: 'Gross Margin', color: '#14b8a6' },
    { icon: Target, value: '$100M', label: 'Year 4 ARR', color: '#06b6d4' }
  ]

  const financialHighlights = [
    { label: 'Gross Margin', value: '70%', icon: TrendingUp, color: '#10b981' },
    { label: 'Burn Multiple', value: '0.8x', icon: Calculator, color: '#3b82f6' },
    { label: 'Growth Rate', value: '180%', icon: ArrowUpRight, color: '#8b5cf6' },
    { label: 'Magic Number', value: '1.5', icon: Target, color: '#fbbf24' }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Background gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(20, 184, 166, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}
        >
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '0.5rem' }}>
            <GradientText gradient="from-emerald-400 to-teal-400">
              Path to $100M ARR
            </GradientText>
          </h1>
          <p style={{ fontSize: '1rem', color: '#94a3b8' }}>
            Unit economics and financial projections showing clear path to profitability
          </p>
        </motion.div>

        {/* Top Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          {topMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                style={{
                  padding: '0.75rem 1rem',
                  background: `linear-gradient(135deg, ${metric.color}15, ${metric.color}08)`,
                  border: `1px solid ${metric.color}40`,
                  borderRadius: pxToRem(12),
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <Icon size={20} color={metric.color} />
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: metric.color }}>{metric.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{metric.label}</div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Content */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Left: Hockey Stick Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.05))',
              borderRadius: pxToRem(16),
              border: '1px solid rgba(16, 185, 129, 0.3)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#10b981', marginBottom: '1rem' }}>
              Revenue Growth Trajectory
            </h4>
            
            {/* Chart */}
            <div style={{ position: 'relative', height: '200px', flex: 1 }}>
              <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 500 200">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map(i => (
                  <React.Fragment key={i}>
                    <line
                      x1="50"
                      y1={30 + i * 35}
                      x2="480"
                      y2={30 + i * 35}
                      stroke="#374151"
                      strokeWidth="0.5"
                      strokeDasharray="2,2"
                    />
                    <text x="35" y={35 + i * 35} fill="#9ca3af" fontSize="10" textAnchor="end">
                      ${250 - i * 62.5}M
                    </text>
                  </React.Fragment>
                ))}
                
                {/* X-axis labels */}
                {yearData.map((year, i) => (
                  <text key={year.year} x={90 + i * 90} y="190" fill="#9ca3af" fontSize="10" textAnchor="middle">
                    {year.year}
                  </text>
                ))}

                {/* Revenue line */}
                <motion.path
                  d={`M 90 ${165 - yearData[0].revenue * 0.6} 
                      L ${90 + 90} ${165 - yearData[1].revenue * 0.6}
                      L ${90 + 180} ${165 - yearData[2].revenue * 0.6}
                      L ${90 + 270} ${165 - yearData[3].revenue * 0.6}
                      L ${90 + 360} ${165 - yearData[4].revenue * 0.6}`}
                  stroke="#10b981"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: animateChart ? 1 : 0 }}
                  transition={{ duration: 2 }}
                />

                {/* Cost line */}
                <motion.path
                  d={`M 90 ${165 - yearData[0].costs * 0.6} 
                      L ${90 + 90} ${165 - yearData[1].costs * 0.6}
                      L ${90 + 180} ${165 - yearData[2].costs * 0.6}
                      L ${90 + 270} ${165 - yearData[3].costs * 0.6}
                      L ${90 + 360} ${165 - yearData[4].costs * 0.6}`}
                  stroke="#f59e0b"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: animateChart ? 1 : 0 }}
                  transition={{ duration: 2, delay: 0.3 }}
                />

                {/* Break-even marker */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <circle cx={90 + 90} cy="110" r="5" fill="#10b981" />
                  <text x={90 + 90} y="95" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">
                    Break-even
                  </text>
                </motion.g>

                {/* Data points */}
                {yearData.map((year, i) => (
                  <motion.circle
                    key={year.year}
                    cx={90 + i * 90}
                    cy={165 - year.revenue * 0.6}
                    r="4"
                    fill="#10b981"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    onMouseEnter={() => setSelectedYear(i)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}

                {/* Legend */}
                <g transform="translate(380, 15)">
                  <circle cx="0" cy="0" r="3" fill="#10b981" />
                  <text x="10" y="3" fill="#10b981" fontSize="9">Revenue</text>
                  <line x1="0" y1="12" x2="15" y2="12" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" />
                  <text x="20" y="15" fill="#f59e0b" fontSize="9">Costs</text>
                </g>
              </svg>
            </div>

            {/* Year Details */}
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: '1rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem'
              }}
            >
              <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: pxToRem(8), padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Revenue</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#10b981' }}>
                  ${yearData[selectedYear].revenue}M
                </div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: pxToRem(8), padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Users</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#e2e8f0' }}>
                  {yearData[selectedYear].users.toLocaleString()}
                </div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: pxToRem(8), padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>ARPU</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#e2e8f0' }}>
                  ${yearData[selectedYear].arpu}
                </div>
              </div>
            </motion.div>

            {/* Milestones */}
            <div style={{ marginTop: '0.75rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.5rem' }}>
                {yearData[selectedYear].year} Milestones:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {yearData[selectedYear].milestones.map((milestone, i) => (
                  <motion.div
                    key={milestone}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(16, 185, 129, 0.2)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      color: '#10b981'
                    }}
                  >
                    {milestone}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Unit Economics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* CAC/LTV Ratio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))',
                borderRadius: pxToRem(12),
                border: '1px solid rgba(139, 92, 246, 0.3)',
                padding: '1rem'
              }}
            >
              <h5 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#a78bfa', marginBottom: '0.75rem' }}>
                Unit Economics
              </h5>
              
              {/* CAC Bar */}
              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                  <span style={{ color: '#9ca3af' }}>CAC</span>
                  <span style={{ fontWeight: 'bold', color: '#ef4444' }}>$1,500</span>
                </div>
                <div style={{ height: '12px', background: 'rgba(239, 68, 68, 0.2)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <motion.div
                    style={{ height: '100%', background: 'linear-gradient(to right, #ef4444, #f97316)', borderRadius: '9999px' }}
                    initial={{ width: 0 }}
                    animate={{ width: '10%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>

              {/* LTV Bar */}
              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                  <span style={{ color: '#9ca3af' }}>LTV</span>
                  <span style={{ fontWeight: 'bold', color: '#10b981' }}>$75,000</span>
                </div>
                <div style={{ height: '12px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <motion.div
                    style={{ height: '100%', background: 'linear-gradient(to right, #10b981, #22c55e)', borderRadius: '9999px' }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                  />
                </div>
              </div>

              {/* Ratio display */}
              <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, type: 'spring' }}
                  style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a78bfa' }}
                >
                  50x
                </motion.div>
                <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>LTV/CAC Ratio</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.75rem' }}>
                <div style={{ textAlign: 'center', padding: '0.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: pxToRem(8) }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#e2e8f0' }}>3 mo</div>
                  <div style={{ fontSize: '0.65rem', color: '#6b7280' }}>Payback</div>
                </div>
                <div style={{ textAlign: 'center', padding: '0.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: pxToRem(8) }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#e2e8f0' }}>95%</div>
                  <div style={{ fontSize: '0.65rem', color: '#6b7280' }}>Retention</div>
                </div>
              </div>
            </motion.div>

            {/* Financial Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                background: 'rgba(17, 24, 39, 0.5)',
                borderRadius: pxToRem(12),
                border: '1px solid rgba(55, 65, 81, 0.5)',
                padding: '1rem'
              }}
            >
              <h5 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#d1d5db', marginBottom: '0.75rem' }}>
                Financial Highlights
              </h5>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {financialHighlights.map((metric, i) => {
                  const Icon = metric.icon
                  return (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.5rem',
                        background: 'rgba(0,0,0,0.3)',
                        borderRadius: pxToRem(8)
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Icon size={14} color={metric.color} />
                        <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{metric.label}</span>
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: metric.color }}>{metric.value}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Exit Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.05))',
                borderRadius: pxToRem(12),
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '1rem'
              }}
            >
              <h5 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#10b981', marginBottom: '0.75rem' }}>
                Exit Timeline
              </h5>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Year 2: Series A ($20M)',
                  'Year 4: Series B ($50M)',
                  'Year 5: IPO Ready'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={14} color="#10b981" />
                    <span style={{ fontSize: '0.75rem', color: '#e2e8f0' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1rem',
            background: 'linear-gradient(to right, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: pxToRem(12),
            border: '1px solid rgba(16, 185, 129, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <DollarSign size={24} color="#10b981" />
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0' }}>
                Clear path to profitability with best-in-class unit economics
              </div>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                50x LTV/CAC • 70% gross margin • Month 18 break-even
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>$1B+</div>
            <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Valuation by Year 5</div>
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
