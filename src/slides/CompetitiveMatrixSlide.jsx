import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { Check, X, Minus, TrendingUp, DollarSign, Users, Shield } from 'lucide-react'
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
    if (value === true) return <Check size={16} style={{ color: '#4ade80' }} />
    if (value === false) return <X size={16} style={{ color: '#ef4444' }} />
    return <Minus size={16} style={{ color: '#fbbf24' }} />
  }

  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem' }}
      >
        <AnimatedText delay={0.2}>
          <h2 className="slide-title" style={{ marginBottom: '0.5rem' }}>
            <GradientText gradient="from-green-400 to-emerald-400">
              Competitive Analysis Matrix
            </GradientText>
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8', textAlign: 'center', marginBottom: '1.5rem' }}>
            Comprehensive superiority across all dimensions
          </p>
        </AnimatedText>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            overflowX: 'auto',
            marginBottom: '2rem'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                <th style={{
                  padding: '0.75rem',
                  textAlign: 'left',
                  fontSize: '0.85rem',
                  color: '#94a3b8',
                  borderBottom: '2px solid rgba(20, 184, 166, 0.3)'
                }}>
                  Feature
                </th>
                {competitors.map((competitor) => (
                  <motion.th
                    key={competitor.name}
                    style={{
                      padding: '0.75rem',
                      textAlign: 'center',
                      borderBottom: '2px solid rgba(20, 184, 166, 0.3)',
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
                      fontSize: '0.9rem', 
                      color: competitor.color,
                      fontWeight: 'bold',
                      marginBottom: '0.25rem'
                    }}>
                      {competitor.name}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
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
                >
                  <td style={{
                    padding: '0.75rem',
                    fontSize: '0.8rem',
                    color: '#e2e8f0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    {feature}
                  </td>
                  {competitors.map((competitor) => (
                    <td
                      key={competitor.name}
                      style={{
                        padding: '0.75rem',
                        textAlign: 'center',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
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
              
              {/* Pricing Row */}
              <tr style={{ background: 'rgba(147, 51, 234, 0.05)' }}>
                <td style={{
                  padding: '0.75rem',
                  fontSize: '0.85rem',
                  color: '#c084fc',
                  fontWeight: 'bold'
                }}>
                  Annual Fees
                </td>
                {competitors.map((competitor) => (
                  <td
                    key={competitor.name}
                    style={{
                      padding: '0.75rem',
                      textAlign: 'center',
                      fontSize: '0.85rem',
                      color: competitor.name === 'Us' ? '#4ade80' : '#e2e8f0',
                      fontWeight: competitor.name === 'Us' ? 'bold' : 'normal'
                    }}
                  >
                    {competitor.pricing}
                  </td>
                ))}
              </tr>
              
              {/* Min Investment Row */}
              <tr style={{ background: 'rgba(251, 191, 36, 0.05)' }}>
                <td style={{
                  padding: '0.75rem',
                  fontSize: '0.85rem',
                  color: '#fbbf24',
                  fontWeight: 'bold'
                }}>
                  Minimum
                </td>
                {competitors.map((competitor) => (
                  <td
                    key={competitor.name}
                    style={{
                      padding: '0.75rem',
                      textAlign: 'center',
                      fontSize: '0.85rem',
                      color: competitor.name === 'Us' ? '#4ade80' : '#e2e8f0',
                      fontWeight: competitor.name === 'Us' ? 'bold' : 'normal'
                    }}
                  >
                    {competitor.minInvestment}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}
        >
          <div style={{
            padding: '1rem',
            background: 'rgba(34, 197, 94, 0.1)',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <TrendingUp size={24} style={{ color: '#4ade80', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#4ade80' }}>10/10</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Features</div>
          </div>
          <div style={{
            padding: '1rem',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <DollarSign size={24} style={{ color: '#60a5fa', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#60a5fa' }}>80%</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Lower Cost</div>
          </div>
          <div style={{
            padding: '1rem',
            background: 'rgba(147, 51, 234, 0.1)',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <Users size={24} style={{ color: '#c084fc', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#c084fc' }}>$1M</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Accessible</div>
          </div>
          <div style={{
            padding: '1rem',
            background: 'rgba(251, 191, 36, 0.1)',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <Shield size={24} style={{ color: '#fbbf24', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#fbbf24' }}>24/7</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>AI Support</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}