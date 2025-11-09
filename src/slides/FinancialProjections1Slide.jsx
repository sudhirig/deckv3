import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import ResponsiveTable from '../components/ResponsiveTable'
import { TrendingUp, DollarSign, Users, Target, BarChart3, PiggyBank, Rocket } from 'lucide-react'
import { pxToRem, SPACING } from '../utils/responsive'
import './SlideStyles.css'

export default function FinancialProjections1Slide() {
  const projections = [
    { year: 'Year 1', aum: 100, clients: 50, revenue: 0.25, ebitda: -1.2 },
    { year: 'Year 2', aum: 350, clients: 175, revenue: 0.88, ebitda: -0.3 },
    { year: 'Year 3', aum: 1000, clients: 500, revenue: 2.5, ebitda: 1.2 },
    { year: 'Year 4', aum: 2500, clients: 1250, revenue: 6.25, ebitda: 3.8 },
    { year: 'Year 5', aum: 5000, clients: 2500, revenue: 12.5, ebitda: 8.7 }
  ]

  const metrics = [
    { label: 'TAM', value: '$112T', sublabel: 'Global wealth market', icon: DollarSign, color: '#22c55e' },
    { label: 'SAM', value: '$5.4T', sublabel: 'HNW individuals switching', icon: Users, color: '#60a5fa' },
    { label: 'SOM', value: '$54B', sublabel: '1% capture in 5 years', icon: Target, color: '#fbbf24' },
    { label: 'Target', value: '$5B', sublabel: 'Year 5 AUM', icon: Rocket, color: '#a78bfa' }
  ]

  const getChartHeight = (value, max) => (value / max) * 250

  // Title
  const title = (
    <>
      <GradientText gradient="from-green-400 to-emerald-400">
        Financial Projections: Path to $5B AUM
      </GradientText>
      <p style={{ fontSize: '1.1rem', color: '#94a3b8', textAlign: 'center', marginTop: '0.5rem' }}>
        Conservative projections with massive upside potential
      </p>
    </>
  )

  // Main visual - Growth Chart
  const mainVisual = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      style={{
        background: 'rgba(59, 130, 246, 0.05)',
        borderRadius: '12px',
        padding: '2rem',
        width: '100%'
      }}
    >
      <h3 style={{ color: '#60a5fa', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
        5-Year AUM Growth Trajectory
      </h3>
      
      <div style={{ position: 'relative', height: pxToRem(300), maxHeight: '40vh', marginBottom: SPACING.sm }}>
        {/* Grid Lines */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: pxToRem(i * 50),
              height: pxToRem(1),
              background: 'rgba(255, 255, 255, 0.05)'
            }}
          />
        ))}
        
        {/* Y-axis labels */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: pxToRem(-40),
              bottom: pxToRem(i * 50 - 8),
              fontSize: '0.85rem',
              color: '#64748b'
            }}
          >
            ${i}B
          </div>
        ))}
        
        {/* Chart Bars */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'flex-end',
          height: pxToRem(250),
          paddingTop: SPACING.lg
        }}>
          {projections.map((proj, index) => (
            <div key={proj.year} style={{ width: '15%', position: 'relative' }}>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: getChartHeight(proj.aum, 5000) }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                style={{
                  width: '100%',
                  background: 'linear-gradient(180deg, #60a5fa, #3b82f6)',
                  borderRadius: `${pxToRem(8)} ${pxToRem(8)} 0 0`,
                  position: 'relative',
                  boxShadow: `0 ${pxToRem(-4)} ${pxToRem(20)} rgba(96, 165, 250, 0.3)`
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  style={{
                    position: 'absolute',
                    top: pxToRem(-30),
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#60a5fa',
                    whiteSpace: 'nowrap'
                  }}
                >
                  ${proj.aum}M
                </motion.div>
              </motion.div>
              
              {/* X-axis Label */}
              <div style={{
                textAlign: 'center',
                marginTop: '0.75rem',
                fontSize: '0.9rem',
                color: '#94a3b8'
              }}>
                {proj.year}
              </div>
              
              {/* Revenue indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                style={{
                  textAlign: 'center',
                  marginTop: '0.25rem',
                  fontSize: '0.8rem',
                  color: '#22c55e'
                }}
              >
                Rev: ${proj.revenue}M
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  // Key insights
  const keyInsights = (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <h3 style={{ color: '#22c55e', fontSize: '1.2rem' }}>
        📊 Market Opportunity
      </h3>
      
      {/* Market Size Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="glass-card"
            style={{
              padding: '1.25rem',
              background: `linear-gradient(135deg, ${metric.color}15, ${metric.color}08)`,
              borderLeft: `3px solid ${metric.color}`
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <metric.icon size={20} color={metric.color} />
              <div style={{ fontSize: '0.9rem', color: metric.color, fontWeight: 'bold' }}>
                {metric.label}
              </div>
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '0.25rem' }}>
              {metric.value}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
              {metric.sublabel}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Supporting data - Detailed Projections Table
  const supportingData = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8 }}
      style={{
        background: 'rgba(147, 51, 234, 0.05)',
        borderRadius: pxToRem(12),
        padding: SPACING.md
      }}
    >
      <h4 style={{ color: '#a78bfa', marginBottom: SPACING.sm, fontSize: '1.1rem' }}>
        Detailed Financial Model
      </h4>
      
      <ResponsiveTable minWidth={pxToRem(600)}>
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(147, 51, 234, 0.2)' }}>
            <th style={{ textAlign: 'left', padding: '0.75rem', color: '#a78bfa', fontSize: '0.9rem' }}>Metric</th>
            {projections.map(p => (
              <th key={p.year} style={{ textAlign: 'right', padding: '0.75rem', color: '#a78bfa', fontSize: '0.9rem' }}>
                {p.year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '0.75rem', color: '#94a3b8' }}>AUM ($M)</td>
            {projections.map(p => (
              <td key={p.year} style={{ textAlign: 'right', padding: '0.75rem', color: '#e2e8f0', fontWeight: 'bold' }}>
                ${p.aum}
              </td>
            ))}
          </tr>
          <tr style={{ background: 'rgba(147, 51, 234, 0.03)' }}>
            <td style={{ padding: '0.75rem', color: '#94a3b8' }}>Clients</td>
            {projections.map(p => (
              <td key={p.year} style={{ textAlign: 'right', padding: '0.75rem', color: '#e2e8f0' }}>
                {p.clients.toLocaleString()}
              </td>
            ))}
          </tr>
          <tr>
            <td style={{ padding: '0.75rem', color: '#94a3b8' }}>Revenue ($M)</td>
            {projections.map(p => (
              <td key={p.year} style={{ textAlign: 'right', padding: '0.75rem', color: '#22c55e' }}>
                ${p.revenue}
              </td>
            ))}
          </tr>
          <tr style={{ background: 'rgba(147, 51, 234, 0.03)' }}>
            <td style={{ padding: '0.75rem', color: '#94a3b8' }}>EBITDA ($M)</td>
            {projections.map(p => (
              <td key={p.year} style={{
                textAlign: 'right',
                padding: '0.75rem',
                color: p.ebitda < 0 ? '#ef4444' : '#22c55e',
                fontWeight: 'bold'
              }}>
                {p.ebitda < 0 ? '(' : ''}${Math.abs(p.ebitda)}{p.ebitda < 0 ? ')' : ''}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      </ResponsiveTable>
      
      <div style={{ marginTop: SPACING.sm, padding: SPACING.sm, background: 'rgba(34, 197, 94, 0.1)', borderRadius: pxToRem(8) }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <PiggyBank size={16} color="#22c55e" />
          <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#22c55e' }}>Key Assumptions</span>
        </div>
        <ul style={{ fontSize: '0.85rem', color: '#94a3b8', paddingLeft: '1.5rem' }}>
          <li>25 bps management fee on AUM</li>
          <li>Break-even by Year 3</li>
          <li>70% EBITDA margin at scale</li>
        </ul>
      </div>
    </motion.div>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
      keyInsights={keyInsights}
      supportingData={supportingData}
    />
  )
}