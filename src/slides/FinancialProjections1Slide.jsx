import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import { TrendingUp, DollarSign, Users, Target } from 'lucide-react'
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
    { label: 'TAM', value: '$112T', sublabel: 'Global wealth market' },
    { label: 'SAM', value: '$5.4T', sublabel: 'HNW individuals switching' },
    { label: 'SOM', value: '$54B', sublabel: '1% capture in 5 years' },
    { label: 'Target', value: '$5B', sublabel: 'Year 5 AUM' }
  ]

  const getChartHeight = (value, max) => (value / max) * 200

  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <AnimatedText delay={0.2}>
          <h2 className="slide-title" style={{ marginBottom: '0.5rem' }}>
            <GradientText gradient="from-green-400 to-emerald-400">
              Financial Projections: Path to Profitability
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Conservative projections with massive upside potential
          </p>
        </AnimatedText>

        {/* Market Opportunity */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              style={{
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
                borderRadius: '12px',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '0.85rem', color: '#4ade80', marginBottom: '0.5rem' }}>
                {metric.label}
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#e2e8f0' }}>
                {metric.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                {metric.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growth Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            background: 'rgba(59, 130, 246, 0.05)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          <h3 style={{ color: '#60a5fa', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            5-Year Growth Trajectory
          </h3>
          
          <div style={{ position: 'relative', height: '250px', marginBottom: '1rem' }}>
            {/* Grid Lines */}
            {[0, 1, 2, 3, 4].map(i => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: `${i * 50}px`,
                  height: '1px',
                  background: 'rgba(255, 255, 255, 0.05)'
                }}
              />
            ))}
            
            {/* Chart Bars */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
              height: '200px',
              paddingTop: '20px'
            }}>
              {projections.map((proj, index) => (
                <motion.div
                  key={proj.year}
                  initial={{ height: 0 }}
                  animate={{ height: getChartHeight(proj.aum, 5000) }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  style={{
                    width: '15%',
                    background: 'linear-gradient(180deg, #60a5fa, #3b82f6)',
                    borderRadius: '8px 8px 0 0',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-25px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    color: '#60a5fa'
                  }}>
                    ${proj.aum}M
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* X-axis Labels */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '0.5rem'
            }}>
              {projections.map(proj => (
                <div key={proj.year} style={{ fontSize: '0.85rem', color: '#94a3b8', width: '15%', textAlign: 'center' }}>
                  {proj.year}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Detailed Projections Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{
            background: 'rgba(147, 51, 234, 0.05)',
            borderRadius: '12px',
            padding: '1rem',
            overflow: 'auto'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                <th style={{ 
                  padding: '0.75rem', 
                  textAlign: 'left',
                  fontSize: '0.85rem',
                  color: '#c084fc',
                  borderBottom: '2px solid rgba(147, 51, 234, 0.2)'
                }}>
                  Metric
                </th>
                {projections.map(proj => (
                  <th key={proj.year} style={{
                    padding: '0.75rem',
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    color: '#c084fc',
                    borderBottom: '2px solid rgba(147, 51, 234, 0.2)'
                  }}>
                    {proj.year}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.75rem', fontSize: '0.85rem', color: '#e2e8f0' }}>
                  <DollarSign size={14} style={{ display: 'inline', marginRight: '0.5rem', color: '#4ade80' }} />
                  AUM ($M)
                </td>
                {projections.map(proj => (
                  <td key={proj.year} style={{ 
                    padding: '0.75rem', 
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    color: '#4ade80',
                    fontWeight: 'bold'
                  }}>
                    ${proj.aum}M
                  </td>
                ))}
              </tr>
              <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <td style={{ padding: '0.75rem', fontSize: '0.85rem', color: '#e2e8f0' }}>
                  <Users size={14} style={{ display: 'inline', marginRight: '0.5rem', color: '#60a5fa' }} />
                  Clients
                </td>
                {projections.map(proj => (
                  <td key={proj.year} style={{ 
                    padding: '0.75rem', 
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    color: '#60a5fa'
                  }}>
                    {proj.clients}
                  </td>
                ))}
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', fontSize: '0.85rem', color: '#e2e8f0' }}>
                  <TrendingUp size={14} style={{ display: 'inline', marginRight: '0.5rem', color: '#fbbf24' }} />
                  Revenue ($M)
                </td>
                {projections.map(proj => (
                  <td key={proj.year} style={{ 
                    padding: '0.75rem', 
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    color: '#fbbf24',
                    fontWeight: 'bold'
                  }}>
                    ${proj.revenue}M
                  </td>
                ))}
              </tr>
              <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <td style={{ padding: '0.75rem', fontSize: '0.85rem', color: '#e2e8f0' }}>
                  <Target size={14} style={{ display: 'inline', marginRight: '0.5rem', color: '#fbbf24' }} />
                  EBITDA ($M)
                </td>
                {projections.map(proj => (
                  <td key={proj.year} style={{ 
                    padding: '0.75rem', 
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    color: proj.ebitda >= 0 ? '#4ade80' : '#ef4444',
                    fontWeight: 'bold'
                  }}>
                    {proj.ebitda >= 0 ? '+' : ''}{proj.ebitda}M
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Key Assumption */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            marginTop: '1.5rem',
            textAlign: 'center',
            padding: '1rem',
            background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
            borderRadius: '8px'
          }}
        >
          <p style={{ fontSize: '1rem', color: '#4ade80' }}>
            Break-even in <strong>Month 30</strong> • <strong>70% EBITDA margins</strong> by Year 5
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}