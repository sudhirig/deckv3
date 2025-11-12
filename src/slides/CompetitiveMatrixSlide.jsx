import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TableLayout } from '../components/StandardLayouts'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import ResponsiveTable from '../components/ResponsiveTable'
import Icon from '../components/Icon'
import { Check, X, Minus, TrendingUp, DollarSign, Users, Shield } from 'lucide-react'
import { pxToRem, SPACING } from '../utils/responsive'
import './SlideStyles.css'

export default function CompetitiveMatrixSlide() {
  const [hoveredColumn, setHoveredColumn] = useState(null)
  const [hoveredRow, setHoveredRow] = useState(null)
  
  const features = [
    'AI-Powered Portfolio Management',
    'Daily Tax Loss Harvesting', 
    'Alternative Investments Access',
    'India/GIFT City Gateway',
    'Crypto Integration',
    '24/7 AI Support',
    'Multi-Generational Planning',
    'Real-Time Rebalancing',
    'Private Market Access',
    'Transparent Pricing'
  ]

  const competitors = [
    {
      name: 'Us',
      type: 'AI Family Office',
      color: '#4ade80',
      scores: [true, true, true, true, true, true, true, true, true, true],
      pricing: '0.25%',
      minInvestment: '$1M'
    },
    {
      name: 'Private Banks',
      type: 'Traditional',
      color: '#ef4444',
      scores: [false, false, 'partial', false, false, false, true, false, true, false],
      pricing: '1.5-2.5%',
      minInvestment: '$10M'
    },
    {
      name: 'Robo-Advisors',
      type: 'Digital',
      color: '#f97316',
      scores: ['partial', false, false, false, 'partial', false, false, true, false, true],
      pricing: '0.25-0.5%',
      minInvestment: '$500'
    },
    {
      name: 'Family Offices',
      type: 'Traditional',
      color: '#fbbf24',
      scores: [false, 'partial', true, false, 'partial', false, true, false, true, false],
      pricing: '1-1.5%',
      minInvestment: '$100M'
    },
    {
      name: 'Wealth Managers',
      type: 'Hybrid',
      color: '#60a5fa',
      scores: [false, false, 'partial', false, false, false, true, false, 'partial', 'partial'],
      pricing: '0.75-1.5%',
      minInvestment: '$250K'
    }
  ]

  const getIcon = (value) => {
    if (value === true) return <Check size={18} style={{ color: '#4ade80' }} />
    if (value === false) return <X size={18} style={{ color: '#ef4444' }} />
    return <Minus size={18} style={{ color: '#fbbf24' }} />
  }

  // Title
  const title = (
    <>
      <GradientText gradient="from-green-400 to-emerald-400">
        Competitive Analysis Matrix
      </GradientText>
    </>
  )

  // Subtitle
  const subtitle = (
    <p style={{ fontSize: '1.2rem', color: '#94a3b8', textAlign: 'center' }}>
      Comprehensive superiority across all dimensions
    </p>
  )

  // Table content
  const tableContent = (
    <ResponsiveTable minWidth={pxToRem(700)}>
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0', fontSize: '0.85rem' }}>
        <thead>
          <tr>
            <th style={{
              padding: pxToRem(10),
              textAlign: 'left',
              fontSize: '0.95rem',
              color: '#94a3b8',
              borderBottom: `${pxToRem(2)} solid rgba(20, 184, 166, 0.3)`,
              minWidth: pxToRem(180)
            }}>
              Feature
            </th>
            {competitors.map((competitor) => (
              <motion.th
                key={competitor.name}
                style={{
                  padding: pxToRem(10),
                  textAlign: 'center',
                  borderBottom: `${pxToRem(2)} solid rgba(20, 184, 166, 0.3)`,
                  background: competitor.name === 'Us' ? 
                    'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(20, 184, 166, 0.15))' : 
                    hoveredColumn === competitor.name ? 
                    'rgba(255, 255, 255, 0.03)' :
                    'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={() => setHoveredColumn(competitor.name)}
                onMouseLeave={() => setHoveredColumn(null)}
                animate={hoveredColumn === competitor.name ? {
                  scale: 1.02
                } : {}}
              >
                <div style={{ 
                  fontSize: '0.95rem', 
                  color: competitor.color,
                  fontWeight: 'bold',
                  marginBottom: '0.35rem'
                }}>
                  {competitor.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  {competitor.type}
                </div>
              </motion.th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, featureIndex) => (
            <motion.tr
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + featureIndex * 0.05 }}
              onMouseEnter={() => setHoveredRow(featureIndex)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                background: hoveredRow === featureIndex ? 'rgba(255, 255, 255, 0.02)' : 'transparent'
              }}
            >
              <td style={{
                padding: pxToRem(8),
                fontSize: '0.85rem',
                color: '#e2e8f0',
                borderBottom: `${pxToRem(1)} solid rgba(255, 255, 255, 0.05)`
              }}>
                {feature}
              </td>
              {competitors.map((competitor) => (
                <td
                  key={competitor.name}
                  style={{
                    padding: pxToRem(8),
                    textAlign: 'center',
                    borderBottom: `${pxToRem(1)} solid rgba(255, 255, 255, 0.05)`,
                    background: competitor.name === 'Us' ? 
                      'rgba(34, 197, 94, 0.05)' : 
                      'transparent'
                  }}
                >
                  {getIcon(competitor.scores[featureIndex])}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </ResponsiveTable>
  )

  // Metrics - Pricing comparison
  const metrics = [
    <motion.div 
      key="pricing"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      style={{
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
        padding: SPACING.md,
        borderRadius: pxToRem(12),
        border: `${pxToRem(1)} solid rgba(34, 197, 94, 0.2)`
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: SPACING.sm }}>
        <DollarSign size={24} color="#4ade80" />
        <h4 style={{ color: '#4ade80', fontSize: '1.2rem' }}>Pricing Comparison</h4>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: SPACING.xs }}>
        {competitors.map(comp => (
          <div key={comp.name} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.9rem', color: comp.color, fontWeight: 'bold' }}>{comp.name}</div>
            <div style={{ fontSize: '1.1rem', color: '#e2e8f0', marginTop: '0.25rem' }}>{comp.pricing}</div>
          </div>
        ))}
      </div>
    </motion.div>,
    
    <motion.div 
      key="minimum"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6 }}
      style={{
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1))',
        padding: SPACING.md,
        borderRadius: pxToRem(12),
        border: `${pxToRem(1)} solid rgba(59, 130, 246, 0.2)`
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: SPACING.sm }}>
        <Users size={24} color="#60a5fa" />
        <h4 style={{ color: '#60a5fa', fontSize: '1.2rem' }}>Minimum Investment</h4>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: SPACING.xs }}>
        {competitors.map(comp => (
          <div key={comp.name} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.9rem', color: comp.color, fontWeight: 'bold' }}>{comp.name}</div>
            <div style={{ fontSize: '1.1rem', color: '#e2e8f0', marginTop: '0.25rem' }}>{comp.minInvestment}</div>
          </div>
        ))}
      </div>
    </motion.div>,
    
    <motion.div 
      key="summary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.7 }}
      style={{
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))',
        padding: SPACING.md,
        borderRadius: pxToRem(12),
        border: `${pxToRem(1)} solid rgba(251, 191, 36, 0.2)`,
        textAlign: 'center'
      }}
    >
      <Shield size={32} color="#fbbf24" style={{ marginBottom: '0.5rem' }} />
      <h4 style={{ color: '#fbbf24', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Our Advantage</h4>
      <p style={{ fontSize: '1.1rem', color: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        10/10 features <Icon type="shield" variant="inline" gradient="from-teal-400 to-green-400" size={20} /> • Lowest fees for full service • Optimal minimum ($1M)
      </p>
    </motion.div>
  ]

  return (
    <TableLayout
      title={title}
      subtitle={subtitle}
      tableContent={tableContent}
      metrics={metrics}
    />
  )
}