import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import CircularProgress from '../components/CircularProgress'
import { TrendingUp, DollarSign, Rocket, Target, Users, Award, Building2, ChevronRight } from 'lucide-react'
import { pxToRem, SPACING, TYPOGRAPHY } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
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
    { label: 'Pre-Money', value: 50, prefix: '$', suffix: 'M', color: '#8b5cf6', icon: TrendingUp },
    { label: 'Raising', value: 5, prefix: '$', suffix: 'M', color: '#ec4899', icon: DollarSign },
    { label: 'Lead Min', value: 2.5, prefix: '$', suffix: 'M', color: '#10b981', icon: Award },
    { label: 'Committed', value: 1.5, prefix: '$', suffix: 'M', color: '#06b6d4', icon: Users }
  ]

  const useOfFunds = [
    { category: 'Product & AI', percentage: 40, amount: 2, color: '#8b5cf6' },
    { category: 'Sales & Marketing', percentage: 35, amount: 1.75, color: '#10b981' },
    { category: 'Compliance', percentage: 15, amount: 0.75, color: '#fbbf24' },
    { category: 'Operations', percentage: 10, amount: 0.5, color: '#3b82f6' }
  ]

  const investors = [
    { name: 'Angel Syndicate', amount: 0.5, iconType: 'users', iconGradient: 'from-blue-400 to-cyan-400' },
    { name: 'Family Offices', amount: 0.75, iconType: 'building', iconGradient: 'from-orange-400 to-amber-400' },
    { name: 'Strategic Partner', amount: 0.25, iconType: 'handshake', iconGradient: 'from-teal-400 to-green-400' }
  ]

  // Title
  const title = (
    <GradientText gradient="from-purple-400 via-pink-400 to-indigo-400">
      $5M to Scale Our Proven Platform
    </GradientText>
  )

  // Main visual - Funding Metrics
  const mainVisual = (
    <div style={{ position: 'relative', maxHeight: 'calc(100% - 20px)', overflow: 'hidden' }}>
      
      <div className="responsive-grid-4" style={{ marginBottom: pxToRem(12), gap: pxToRem(8) }}>
        {fundingMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card"
            style={{
              background: `linear-gradient(135deg, ${metric.color}20, rgba(255, 255, 255, 0.02))`,
              border: `1px solid ${metric.color}30`,
              textAlign: 'center',
              padding: pxToRem(10),
              overflow: 'hidden'
            }}
          >
            <metric.icon size={18} color={metric.color} style={{ margin: `0 auto ${pxToRem(4)}` }} />
            <div style={{ color: '#94a3b8', fontSize: pxToRem(11), marginBottom: pxToRem(2) }}>
              {metric.label}
            </div>
            <div style={{ fontSize: pxToRem(18), fontWeight: 'bold', color: metric.color }}>
              <AnimatedCounter 
                end={toFiniteNumber(metric.value)} 
                prefix={metric.prefix} 
                suffix={metric.suffix}
                delay={0.3 + index * 0.05}
                duration={1.5}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <h3 style={{ color: '#ec4899', marginBottom: pxToRem(8), fontSize: pxToRem(14), fontWeight: '600' }}>
        Use of Funds
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: pxToRem(8) }}>
        {useOfFunds.map((item, index) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.05 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: pxToRem(3) }}>
              <span style={{ color: '#e2e8f0', fontSize: pxToRem(12) }}>{item.category}</span>
              <span style={{ color: item.color, fontWeight: 'bold', fontSize: pxToRem(12) }}>
                ${item.amount}M ({item.percentage}%)
              </span>
            </div>
            <div style={{ 
              height: pxToRem(6), 
              background: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: pxToRem(3),
              overflow: 'hidden'
            }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.percentage}%` }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                style={{
                  height: '100%',
                  background: item.color,
                  borderRadius: pxToRem(3)
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: pxToRem(10), height: '100%', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card"
        style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))',
          padding: pxToRem(12),
          flex: 1
        }}
      >
        <h4 style={{ color: '#10b981', marginBottom: pxToRem(8), fontSize: pxToRem(13), fontWeight: '600' }}>
          Committed Investors
        </h4>
        {investors.map((investor, index) => (
          <motion.div
            key={investor.name}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.05 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: pxToRem(8),
              marginBottom: pxToRem(6),
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: pxToRem(6)
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
              <Icon type={investor.iconType} size={16} variant="inline" gradient={investor.iconGradient} />
              <span style={{ color: '#e2e8f0', fontSize: pxToRem(12) }}>{investor.name}</span>
            </div>
            <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: pxToRem(12) }}>${investor.amount}M</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass-card"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
          textAlign: 'center',
          padding: pxToRem(12)
        }}
      >
        <Rocket size={24} color="#ec4899" style={{ margin: `0 auto ${pxToRem(4)}` }} />
        <div style={{ color: '#ec4899', fontWeight: 'bold', fontSize: pxToRem(14) }}>
          Accelerating to $1B AUM
        </div>
        <div style={{ color: '#94a3b8', marginTop: pxToRem(4), fontSize: pxToRem(11) }}>
          18-month timeline with proven traction
        </div>
      </motion.div>
    </div>
  )

  // Supporting data - Metrics
  const supportingData = (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: pxToRem(8), marginTop: pxToRem(8) }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="glass-card"
        style={{
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))',
          textAlign: 'center',
          padding: pxToRem(8)
        }}
      >
        <Target size={18} color="#fbbf24" style={{ margin: `0 auto ${pxToRem(2)}` }} />
        <div style={{ fontSize: pxToRem(16), fontWeight: 'bold', color: '#fbbf24' }}>250</div>
        <div style={{ color: '#94a3b8', fontSize: pxToRem(10) }}>Clients</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.85 }}
        className="glass-card"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1))',
          textAlign: 'center',
          padding: pxToRem(8)
        }}
      >
        <DollarSign size={18} color="#3b82f6" style={{ margin: `0 auto ${pxToRem(2)}` }} />
        <div style={{ fontSize: pxToRem(16), fontWeight: 'bold', color: '#3b82f6' }}>$250M</div>
        <div style={{ color: '#94a3b8', fontSize: pxToRem(10) }}>AUM</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="glass-card"
        style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))',
          textAlign: 'center',
          padding: pxToRem(8)
        }}
      >
        <TrendingUp size={18} color="#10b981" style={{ margin: `0 auto ${pxToRem(2)}` }} />
        <div style={{ fontSize: pxToRem(16), fontWeight: 'bold', color: '#10b981' }}>17.8:1</div>
        <div style={{ color: '#94a3b8', fontSize: pxToRem(10) }}>LTV/CAC</div>
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