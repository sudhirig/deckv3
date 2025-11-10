import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import CircularProgress from '../components/CircularProgress'
import { TrendingUp, DollarSign, Rocket, Target, Users, Award, Building2, ChevronRight } from 'lucide-react'
import { pxToRem, SPACING, TYPOGRAPHY } from '../utils/responsive'
import './SlideStyles.css'

export default function FundingSlide() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const fundingMetrics = [
    { label: 'Pre-Money Valuation', value: 50, prefix: '$', suffix: 'M', color: '#8b5cf6', icon: TrendingUp },
    { label: 'Raise Amount', value: 5, prefix: '$', suffix: 'M', color: '#ec4899', icon: DollarSign },
    { label: 'Lead Investor', value: 2.5, prefix: '$', suffix: 'M min', color: '#10b981', icon: Award },
    { label: 'Already Committed', value: 1.5, prefix: '$', suffix: 'M', color: '#06b6d4', icon: Users }
  ]

  const useOfFunds = [
    { category: 'Product & AI Development', percentage: 40, amount: 2, color: '#8b5cf6' },
    { category: 'Sales & Marketing', percentage: 35, amount: 1.75, color: '#10b981' },
    { category: 'Compliance & Legal', percentage: 15, amount: 0.75, color: '#fbbf24' },
    { category: 'Operations & Team', percentage: 10, amount: 0.5, color: '#3b82f6' }
  ]

  const investors = [
    { name: 'Angel Syndicate', amount: 0.5, logo: '👥' },
    { name: 'Family Offices', amount: 0.75, logo: '🏛️' },
    { name: 'Strategic Partner', amount: 0.25, logo: '🤝' }
  ]

  // Title
  const title = (
    <GradientText gradient="from-purple-400 via-pink-400 to-indigo-400">
      $5M to Scale Our Proven Platform
    </GradientText>
  )

  // Main visual - Funding Metrics
  const mainVisual = (
    <div style={{ position: 'relative' }}>
      
      <div className="responsive-grid-4" style={{ marginBottom: SPACING.lg }}>
        {fundingMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-card responsive-padding-md"
            style={{
              background: `linear-gradient(135deg, ${metric.color}20, rgba(255, 255, 255, 0.02))`,
              border: `${pxToRem(2)} solid ${metric.color}30`,
              textAlign: 'center',
              position: 'relative',
              overflow: 'visible'
            }}
          >
            <motion.div
              animate={{ 
                opacity: hoveredCard === index ? [0.5, 1, 0.5] : 0.2,
                scale: hoveredCard === index ? [1, 1.5, 1] : 1
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: pxToRem(-20),
                right: pxToRem(-20),
                width: pxToRem(40),
                height: pxToRem(40),
                borderRadius: '50%',
                background: metric.color,
                filter: `blur(${pxToRem(20)})`,
                zIndex: -1
              }}
            />
            <metric.icon size={24} color={metric.color} style={{ margin: `0 auto ${SPACING.xs}` }} />
            <div className="responsive-text-sm" style={{ color: '#94a3b8', marginBottom: pxToRem(4) }}>
              {metric.label}
            </div>
            <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: metric.color }}>
              <AnimatedCounter 
                value={metric.value} 
                prefix={metric.prefix} 
                suffix={metric.suffix}
                delay={0.5 + index * 0.1}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <h3 style={{ color: '#ec4899', marginBottom: SPACING.sm, fontSize: TYPOGRAPHY.body }}>
        Use of Funds
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: pxToRem(12) }}>
        {useOfFunds.map((item, index) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: SPACING.xs }}>
              <span className="responsive-text-sm" style={{ color: '#e2e8f0' }}>{item.category}</span>
              <span className="responsive-text-sm" style={{ color: item.color, fontWeight: 'bold' }}>
                ${item.amount}M ({item.percentage}%)
              </span>
            </div>
            <div style={{ 
              height: pxToRem(8), 
              background: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: pxToRem(4),
              overflow: 'hidden'
            }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.percentage}%` }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                style={{
                  height: '100%',
                  background: item.color,
                  borderRadius: pxToRem(4)
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Key insights - Investors & Traction
  const keyInsights = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md, height: '100%' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-card responsive-padding-md"
        style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))',
          flex: 1
        }}
      >
        <h4 style={{ color: '#10b981', marginBottom: SPACING.sm, fontSize: TYPOGRAPHY.body }}>
          Committed Investors
        </h4>
        {investors.map((investor, index) => (
          <motion.div
            key={investor.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: pxToRem(12),
              marginBottom: SPACING.xs,
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: pxToRem(8)
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(12) }}>
              <span style={{ fontSize: TYPOGRAPHY.subheadline }}>{investor.logo}</span>
              <span className="responsive-text-sm" style={{ color: '#e2e8f0' }}>{investor.name}</span>
            </div>
            <span style={{ color: '#10b981', fontWeight: 'bold' }}>${investor.amount}M</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="glass-card responsive-padding-md"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
          textAlign: 'center'
        }}
      >
        <Rocket size={32} color="#ec4899" style={{ margin: `0 auto ${SPACING.xs}` }} />
        <div className="responsive-text-md" style={{ color: '#ec4899', fontWeight: 'bold' }}>
          Accelerating to $1B AUM
        </div>
        <div className="responsive-text-sm" style={{ color: '#94a3b8', marginTop: SPACING.xs }}>
          18-month timeline with proven traction
        </div>
      </motion.div>
    </div>
  )

  // Supporting data - Metrics
  const supportingData = (
    <div className="responsive-grid-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="glass-card responsive-padding-sm"
        style={{
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))',
          textAlign: 'center'
        }}
      >
        <Target size={24} color="#fbbf24" style={{ margin: `0 auto ${SPACING.xs}` }} />
        <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#fbbf24' }}>250</div>
        <div className="responsive-text-sm" style={{ color: '#94a3b8' }}>Current Clients</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3 }}
        className="glass-card responsive-padding-sm"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1))',
          textAlign: 'center'
        }}
      >
        <DollarSign size={24} color="#3b82f6" style={{ margin: `0 auto ${SPACING.xs}` }} />
        <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#3b82f6' }}>$250M</div>
        <div className="responsive-text-sm" style={{ color: '#94a3b8' }}>Current AUM</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4 }}
        className="glass-card responsive-padding-sm"
        style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))',
          textAlign: 'center'
        }}
      >
        <TrendingUp size={24} color="#10b981" style={{ margin: `0 auto ${SPACING.xs}` }} />
        <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#10b981' }}>17.8:1</div>
        <div className="responsive-text-sm" style={{ color: '#94a3b8' }}>LTV/CAC</div>
      </motion.div>
    </div>
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