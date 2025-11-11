import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { DollarSign, Shield, Globe, Zap, CheckCircle2 } from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function GiftCityAIFAdvantagesSlide() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [comparisonAnimation, setComparisonAnimation] = useState(true)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  
  useEffect(() => {
    const comparisonInterval = setInterval(() => {
      setComparisonAnimation(prev => !prev)
    }, 3000)
    
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    
    return () => {
      clearInterval(comparisonInterval)
      clearInterval(pulseInterval)
    }
  }, [])
  
  const advantages = [
    {
      id: 'tax',
      title: 'Tax Efficiency',
      icon: DollarSign,
      color: '#10b981',
      metrics: [
        { label: 'Corporate Tax', mainland: 30, giftCity: 10, unit: '%' },
        { label: 'GST on Services', mainland: 18, giftCity: 0, unit: '%' },
        { label: 'Capital Gains', mainland: 20, giftCity: 0, unit: '%' },
        { label: 'Withholding Tax', mainland: 'Yes', giftCity: 'Exempt', unit: '' }
      ]
    },
    {
      id: 'regulatory',
      title: 'Regulatory Edge',
      icon: Shield,
      color: '#3b82f6',
      features: [
        { title: 'IFSCA Oversight', desc: 'World-class regulatory framework' },
        { title: '100% Foreign Ownership', desc: 'No restrictions on LP nationality' },
        { title: 'USD Denominated', desc: 'Natural hedge against INR volatility' },
        { title: 'Single Window Clearance', desc: 'Fast-track approvals' }
      ]
    },
    {
      id: 'market',
      title: 'Market Access',
      icon: Globe,
      color: '#8b5cf6',
      access: [
        { market: 'Indian Markets', exchanges: ['NSE', 'BSE', 'MCX'], direct: true },
        { market: 'Global Markets', exchanges: ['NYSE', 'NASDAQ', 'LSE'], direct: true },
        { market: 'Alternative Assets', exchanges: ['Crypto', 'Commodities'], direct: true }
      ]
    },
    {
      id: 'performance',
      title: 'Performance Edge',
      icon: Zap,
      color: '#f59e0b',
      capabilities: [
        { feature: 'Low Latency Trading', spec: 'Direct exchange connectivity' },
        { feature: '24/7 Operations', spec: 'Trade global markets round the clock' },
        { feature: 'Leverage Allowed', spec: 'Up to 10x for sophisticated strategies' },
        { feature: 'Multi-Asset Support', spec: 'Equities, derivatives, forex, crypto' }
      ]
    }
  ]

  const renderAdvantageCard = (advantage, index) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? pxToRem(-30) : pxToRem(30), rotateY: index % 2 === 0 ? -15 : 15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
      whileHover={{ scale: 1.03, y: pxToRem(-5) }}
      onHoverStart={() => setHoveredCard(advantage.id)}
      onHoverEnd={() => setHoveredCard(null)}
      style={{
        padding: '1.5rem',
        background: `linear-gradient(135deg, ${advantage.color}15, rgba(255, 255, 255, 0.02))`,
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: `2px solid ${advantage.color}30`,
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {hoveredCard === advantage.id && (
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '-1.25rem',
            left: '-1.25rem',
            right: '-1.25rem',
            bottom: '-1.25rem',
            background: `radial-gradient(circle, ${advantage.color}30, transparent)`,
            borderRadius: '1.5rem',
            filter: 'blur(1.25rem)',
            zIndex: -1
          }}
        />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <motion.div
          animate={{ 
            rotate: advantage.id === 'tax' && pulseAnimation ? 0 : advantage.id === 'tax' ? 360 : 
                    advantage.id === 'regulatory' && pulseAnimation ? 0 : advantage.id === 'regulatory' ? -0.3125 :
                    advantage.id === 'market' && pulseAnimation ? 0 : advantage.id === 'market' ? 360 : 0,
            y: advantage.id === 'regulatory' && pulseAnimation ? 0 : advantage.id === 'regulatory' ? -0.3125 : 0,
            scale: advantage.id === 'performance' && pulseAnimation ? 1.1 : 1
          }}
          transition={{ duration: advantage.id === 'tax' || advantage.id === 'market' ? 2 : 0.5 }}
        >
          <advantage.icon style={{ width: '1.75rem', height: '1.75rem' }} color={advantage.color} />
        </motion.div>
        <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', color: advantage.color }}>{advantage.title}</h3>
      </div>
      
      {/* Tax Efficiency Metrics */}
      {advantage.metrics && advantage.metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, x: pxToRem(-20) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + index * 0.1 + i * 0.1 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.75rem',
            padding: '0.5rem',
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '0.5rem'
          }}
        >
          <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{metric.label}</span>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {typeof metric.mainland === 'number' ? (
              <>
                <motion.span
                  animate={{ 
                    opacity: comparisonAnimation ? 0.5 : 1,
                    scale: comparisonAnimation ? 0.95 : 1
                  }}
                  style={{ color: '#ef4444' }}
                >
                  {metric.mainland}{metric.unit}
                </motion.span>
                <span style={{ color: '#64748b' }}>→</span>
                <motion.span
                  animate={{ 
                    scale: comparisonAnimation ? 1.1 : 1,
                    color: comparisonAnimation ? '#10b981' : '#22c55e'
                  }}
                  style={{ fontWeight: 'bold' }}
                >
                  {metric.giftCity}{metric.unit}
                </motion.span>
              </>
            ) : (
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ color: '#10b981', fontWeight: 'bold' }}
              >
                {metric.giftCity}
              </motion.span>
            )}
          </div>
        </motion.div>
      ))}

      {/* Regulatory Features */}
      {advantage.features && advantage.features.map((feature, i) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: pxToRem(10) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + index * 0.1 + i * 0.1 }}
          style={{
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'start',
            gap: '0.5rem'
          }}
        >
          <motion.div
            animate={{ 
              scale: hoveredCard === advantage.id ? [1, 1.2, 1] : 1
            }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <CheckCircle2 size={18} color={advantage.color} style={{ marginTop: '0.125rem' }} />
          </motion.div>
          <div>
            <p style={{ color: '#e2e8f0', fontWeight: 'bold', fontSize: '0.9rem' }}>
              {feature.title}
            </p>
            <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
              {feature.desc}
            </p>
          </div>
        </motion.div>
      ))}

      {/* Market Access */}
      {advantage.access && advantage.access.map((access, i) => (
        <motion.div
          key={access.market}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + index * 0.1 + i * 0.1 }}
          style={{
            marginBottom: '0.75rem',
            padding: '0.5rem',
            background: `${advantage.color}10`,
            borderRadius: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#e2e8f0', fontWeight: 'bold', fontSize: '0.9rem' }}>
              {access.market}
            </span>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              style={{ color: '#10b981', fontSize: '0.8rem' }}
            >
              Direct Access
            </motion.span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
            {access.exchanges.map((exchange) => (
              <span
                key={exchange}
                style={{
                  padding: '0.2rem 0.5rem',
                  background: `${advantage.color}20`,
                  borderRadius: '0.25rem',
                  fontSize: '0.7rem',
                  color: advantage.color === '#8b5cf6' ? '#a78bfa' : advantage.color
                }}
              >
                {exchange}
              </span>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Performance Capabilities */}
      {advantage.capabilities && advantage.capabilities.map((capability, i) => (
        <motion.div
          key={capability.feature}
          initial={{ opacity: 0, x: pxToRem(20) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 + index * 0.1 + i * 0.1 }}
          style={{
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'start',
            gap: '0.5rem'
          }}
        >
          <motion.div
            animate={{ 
              rotate: hoveredCard === advantage.id ? [0, 180, 360] : 0
            }}
            transition={{ duration: 1, delay: i * 0.1 }}
          >
            <Icon type="zap" size={16} variant="inline" gradient="from-orange-400 to-amber-400" />
          </motion.div>
          <div>
            <p style={{ color: '#e2e8f0', fontWeight: 'bold', fontSize: '0.9rem' }}>
              {capability.feature}
            </p>
            <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
              {capability.spec}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )

  const summary = (
    <motion.div
      initial={{ opacity: 0, y: pxToRem(30) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.1))',
        borderRadius: '1.25rem',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        textAlign: 'center'
      }}
    >
      <motion.div
        animate={{ scale: comparisonAnimation ? [1, 1.02, 1] : 1 }}
        transition={{ duration: 2 }}
      >
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
          Mainland India Fund: 
          <span style={{ color: '#ef4444', fontWeight: 'bold' }}> 30% tax + 18% GST</span>
          <span style={{ color: '#64748b' }}> vs </span>
          GIFT City AIF: 
          <span style={{ color: '#10b981', fontWeight: 'bold' }}> 10% tax + 0% GST</span>
        </p>
        
        <motion.p
          animate={{ 
            scale: [1, 1.05, 1],
            color: ['#10b981', '#06b6d4', '#10b981']
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ 
            fontSize: '1.8rem',
            fontWeight: 'bold',
            marginTop: '1rem'
          }}
        >
          72% Cost Advantage
        </motion.p>
      </motion.div>
    </motion.div>
  )

  return (
    <GridLayout
      title={
        <>
          <GradientText gradient="from-green-400 via-blue-400 to-purple-400">
            Category III AIF Advantages
          </GradientText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              textAlign: 'center', 
              color: '#94a3b8', 
              fontSize: '1.2rem',
              marginTop: '0.5rem'
            }}
          >
            Why GIFT City Makes Our Fund Superior
          </motion.p>
        </>
      }
      cards={advantages.map((advantage, index) => renderAdvantageCard(advantage, index))}
      columns={2}
      summary={summary}
      particles={
        <>
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1
            }}
          />
        </>
      }
    />
  )
}
