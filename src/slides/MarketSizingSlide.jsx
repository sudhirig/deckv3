import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Target, BarChart3, TrendingUp } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function MarketSizingSlide() {
  const title = (
    <GradientText gradient="from-cyan-400 to-purple-400">
      Market Sizing: The Opportunity
    </GradientText>
  )

  const tamData = {
    title: 'Total Addressable Market (TAM)',
    points: [
      'US HNW population: 7.9M ($1M+ liquid)',
      'EMILLI segment: $107T in wealth',
      'Traditional advisor fees: 1-2% = $1-2T annual spend'
    ]
  }

  const samData = {
    title: 'Serviceable Addressable Market (SAM)',
    points: [
      'Tech-savvy HNWIs: ~2M in US',
      'Average portfolio: $1-3M',
      'Our target fee: 0.50%',
      'Market size: $10-30B annual revenue potential'
    ]
  }

  const somData = {
    title: 'Serviceable Obtainable Market (SOM)',
    points: [
      'Year 3 target: 0.1% market share'
    ]
  }

  const growthDrivers = [
    {
      title: 'Demographic Tailwinds',
      color: '#14b8a6',
      points: [
        '$124T wealth transfer underway',
        '562K new millionaires/year in US',
        'Gen X inheriting $1.4T/year (peak)'
      ]
    },
    {
      title: 'Behavioral Shifts',
      color: '#3b82f6',
      points: [
        '46% planning to switch advisors',
        '72% say stocks/bonds insufficient',
        'Demand for digital + alternatives'
      ]
    },
    {
      title: 'Technology Adoption',
      color: '#8b5cf6',
      points: [
        '41% of Millennials use robo-advisors',
        'AI acceptance accelerating',
        'Mobile-first expectations'
      ]
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1 }}>
        
        {/* Left Side - TAM/SAM/SOM */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}
          >
            <Target size={28} color="#ef4444" />
            <h2 style={{ fontSize: '1.3rem', color: '#ef4444', fontWeight: 'bold' }}>
              TAM / SAM / SOM
            </h2>
          </motion.div>

          {/* TAM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: pxToRem(12),
              padding: '1rem'
            }}
          >
            <h3 style={{ fontSize: '0.95rem', color: '#e2e8f0', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              {tamData.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {tamData.points.map((point, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: '0.3rem',
                  fontSize: '0.85rem',
                  color: '#e2e8f0'
                }}>
                  <span style={{ color: '#ef4444' }}>▪</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SAM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05))',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              borderRadius: pxToRem(12),
              padding: '1rem'
            }}
          >
            <h3 style={{ fontSize: '0.95rem', color: '#e2e8f0', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              {samData.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {samData.points.map((point, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: '0.3rem',
                  fontSize: '0.85rem',
                  color: '#e2e8f0'
                }}>
                  <span style={{ color: '#fbbf24' }}>▪</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SOM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: pxToRem(12),
              padding: '1rem'
            }}
          >
            <h3 style={{ fontSize: '0.95rem', color: '#e2e8f0', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              {somData.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {somData.points.map((point, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: '0.3rem',
                  fontSize: '0.85rem',
                  color: '#e2e8f0'
                }}>
                  <span style={{ color: '#22c55e' }}>▪</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Side - Growth Drivers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}
          >
            <BarChart3 size={28} color="#14b8a6" />
            <h2 style={{ fontSize: '1.3rem', color: '#e2e8f0', fontWeight: 'bold' }}>
              Growth Drivers
            </h2>
          </motion.div>

          {growthDrivers.map((driver, index) => (
            <motion.div
              key={driver.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              style={{
                background: `linear-gradient(135deg, ${driver.color}15, ${driver.color}05)`,
                border: `1px solid ${driver.color}40`,
                borderLeft: `4px solid ${driver.color}`,
                borderRadius: pxToRem(12),
                padding: '0.75rem 1rem'
              }}
            >
              <h4 style={{
                fontSize: '0.95rem',
                color: driver.color,
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>
                {driver.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {driver.points.map((point, i) => (
                  <li key={i} style={{
                    fontSize: '0.8rem',
                    color: '#e2e8f0',
                    marginBottom: '0.2rem'
                  }}>
                    • {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
