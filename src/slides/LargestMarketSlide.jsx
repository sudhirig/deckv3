import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Globe, DollarSign } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function LargestMarketSlide() {
  const title = (
    <GradientText gradient="from-cyan-400 to-blue-400">
      The Largest Market on Earth
    </GradientText>
  )

  const usDominanceStats = [
    { value: '35%', label: 'of all global wealth is held by the US', color: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.1)' },
    { value: '39.7%', label: "of the world's millionaires are in the US", color: '#10b981', bgColor: 'rgba(16, 185, 129, 0.1)' },
    { value: '7.9M', label: 'HNW individuals ($1M+ liquid)', color: '#8b5cf6', bgColor: 'rgba(139, 92, 246, 0.1)' }
  ]

  const emilliData = [
    '$107 Trillion in total wealth',
    'Quadrupled since 2000',
    'The most underserved segment',
    'Demand institutional-grade services',
    'Cannot access traditional family offices'
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1 }}>
        
        {/* Left Side - US Dominance */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.5rem'
            }}
          >
            <Globe size={32} color="#3b82f6" />
            <h2 style={{ fontSize: '1.4rem', color: '#e2e8f0', fontWeight: 'bold' }}>
              The US Dominance
            </h2>
          </motion.div>

          {usDominanceStats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              style={{
                background: stat.bgColor,
                border: `2px solid ${stat.color}`,
                borderRadius: pxToRem(16),
                padding: '1.5rem',
                textAlign: 'center'
              }}
            >
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: stat.color,
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.95rem',
                color: '#e2e8f0',
                lineHeight: '1.4'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side - EMILLI Opportunity */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.75rem'
            }}
          >
            <DollarSign size={32} color="#fbbf24" />
            <h2 style={{ fontSize: '1.4rem', color: '#e2e8f0', fontWeight: 'bold' }}>
              The EMILLI Opportunity
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              marginBottom: '1rem'
            }}
          >
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
              Everyday Millionaires ($1-5M)
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {emilliData.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                    fontSize: '1rem',
                    color: '#e2e8f0'
                  }}
                >
                  <span style={{ color: '#fbbf24' }}>▪</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.3), rgba(139, 69, 19, 0.15))',
              border: '2px solid rgba(180, 83, 9, 0.5)',
              borderRadius: pxToRem(12),
              padding: '1.25rem',
              marginTop: 'auto'
            }}
          >
            <p style={{
              fontSize: '1.1rem',
              color: '#fed7aa',
              fontWeight: '600'
            }}>
              <strong>The Opportunity:</strong> This is the single largest concentration of 'stranded' wealth that lacks professional-grade advisory
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
