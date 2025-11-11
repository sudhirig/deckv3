import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import CircularProgress from '../components/CircularProgress'
import { TrendingUp, Building2, Users, Target, DollarSign, Calendar, Rocket, Award, Sparkles } from 'lucide-react'
import './SlideStyles.css'
import { pxToRem, TYPOGRAPHY } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'

export default function ExitStrategySlide() {
  const [hoveredOption, setHoveredOption] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [selectedOption, setSelectedOption] = useState(0)
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 3000)
    
    const cycleInterval = setInterval(() => {
      setSelectedOption(prev => (prev + 1) % 3)
    }, 5000)
    
    return () => {
      clearInterval(pulseInterval)
      clearInterval(cycleInterval)
    }
  }, [])
  
  const exitOptions = [
    {
      type: 'IPO',
      timeline: '5-7 years',
      valuation: '$1B+',
      probability: 35,
      color: '#60a5fa',
      icon: Rocket,
      requirements: [
        '$100M+ revenue run rate',
        '25% EBITDA margins',
        '10,000+ clients',
        'Multi-market presence'
      ],
      comparables: ['Coinbase ($60B)', 'Robinhood ($15B)', 'SoFi ($8B)']
    },
    {
      type: 'Strategic Acquisition',
      timeline: '3-5 years',
      valuation: '$500M-1B',
      probability: 45,
      color: '#4ade80',
      icon: Building2,
      requirements: [
        'Market leadership position',
        'Proprietary AI technology',
        'Strong client retention',
        'Regulatory compliance'
      ],
      comparables: ['Plaid ($13.4B)', 'Nutmeg ($360M)', 'Personal Capital ($1B)']
    },
    {
      type: 'PE Buyout',
      timeline: '4-6 years',
      valuation: '$750M+',
      probability: 20,
      color: '#fbbf24',
      icon: Users,
      requirements: [
        'Predictable cash flows',
        'High EBITDA margins',
        'Scalable platform',
        'Management continuity'
      ],
      comparables: ['Apex Clearing ($4.7B)', 'Envestnet ($4.5B)', 'InvestCloud ($1B)']
    }
  ]

  const acquirers = [
    { name: 'JP Morgan', rationale: 'Digital wealth expansion', iconType: 'building', iconGradient: 'from-blue-400 to-cyan-400' },
    { name: 'BlackRock', rationale: 'Aladdin ecosystem', iconType: 'circle', iconGradient: 'from-purple-400 to-pink-400' },
    { name: 'Charles Schwab', rationale: 'Next-gen platform', iconType: 'circle', iconGradient: 'from-blue-400 to-cyan-400' },
    { name: 'Goldman Sachs', rationale: 'Marcus enhancement', iconType: 'building', iconGradient: 'from-orange-400 to-amber-400' },
    { name: 'Morgan Stanley', rationale: 'E*TRADE synergies', iconType: 'building', iconGradient: 'from-purple-400 to-pink-400' },
    { name: 'Fidelity', rationale: 'Digital transformation', iconType: 'circle', iconGradient: 'from-teal-400 to-green-400' }
  ]

  const cards = exitOptions.map((option, index) => (
    <motion.div
      key={option.type}
      initial={{ opacity: 0, y: pxToRem(30), scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.4 + index * 0.15, type: 'spring' }}
      whileHover={{ scale: 1.05, y: pxToRem(-10) }}
      onHoverStart={() => setHoveredOption(index)}
      onHoverEnd={() => setHoveredOption(null)}
      style={{
        padding: pxToRem(24),
        background: `linear-gradient(135deg, ${option.color}15, rgba(255, 255, 255, 0.02))`,
        backdropFilter: `blur(${pxToRem(15)})`,
        borderRadius: pxToRem(16),
        border: `${pxToRem(2)} solid ${option.color}30`,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'visible',
        transition: 'all 0.3s ease'
      }}
      onClick={() => setSelectedOption(index)}
    >
      {hoveredOption === index && (
        <motion.div
          initial={{
            opacity: 0.2,
            scale: 0.98
          }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [0.98, 1.02, 0.98]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: pxToRem(-20),
            background: `radial-gradient(circle, ${option.color}30, transparent)`,
            borderRadius: pxToRem(20),
            filter: `blur(${pxToRem(15)})`,
            zIndex: -1
          }}
        />
      )}
      
      <div style={{ marginBottom: pxToRem(16) }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8), marginBottom: pxToRem(8) }}>
          <motion.div
            animate={{ 
              rotate: selectedOption === index ? 360 : 0,
              scale: selectedOption === index ? 1.2 : 1
            }}
            transition={{ duration: 1 }}
          >
            <option.icon size={24} color={option.color} />
          </motion.div>
          <h3 style={{ fontSize: pxToRem(20.8), color: option.color, fontWeight: 'bold' }}>
            {option.type}
          </h3>
        </div>
        <p style={{ fontSize: pxToRem(14.4), color: '#94a3b8' }}>{option.timeline}</p>
      </div>
      
      <motion.div
        animate={{ scale: selectedOption === index ? [1, 1.05, 1] : 1 }}
        transition={{ duration: 2 }}
        style={{ 
          fontSize: pxToRem(28.8),
          fontWeight: 'bold',
          color: option.color,
          marginBottom: pxToRem(16)
        }}
      >
        {option.valuation}
      </motion.div>
      
      <div style={{ marginBottom: pxToRem(16) }}>
        <CircularProgress 
          value={option.probability}
          size={80}
          strokeWidth={8}
          color={option.color}
        />
        <p style={{ fontSize: pxToRem(13.6), color: '#94a3b8', marginTop: pxToRem(8), textAlign: 'center' }}>
          Probability
        </p>
      </div>
      
      <div style={{ marginBottom: pxToRem(16) }}>
        <p style={{ fontSize: pxToRem(14.4), color: '#94a3b8', marginBottom: pxToRem(8) }}>Requirements:</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {option.requirements.map((req, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: pxToRem(-10) }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + idx * 0.1 }}
              style={{ 
                fontSize: pxToRem(12.8),
                color: '#e2e8f0',
                marginBottom: pxToRem(4),
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <motion.span
                animate={{ scale: pulseAnimation ? [1, 1.5, 1] : 1 }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                style={{ color: option.color, marginRight: pxToRem(8) }}
              >
                •
              </motion.span>
              {req}
            </motion.li>
          ))}
        </ul>
      </div>
      
      <div>
        <p style={{ fontSize: pxToRem(14.4), color: '#94a3b8', marginBottom: pxToRem(8) }}>Comparables:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: pxToRem(4) }}>
          {option.comparables.map((comp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: pxToRem(5) }}
              style={{ 
                fontSize: pxToRem(12.8),
                color: '#e2e8f0',
                padding: `${pxToRem(4)} ${pxToRem(8)}`,
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: pxToRem(4)
              }}
            >
              {comp}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  ))

  const summary = (
    <>
      <motion.div
        initial={{ opacity: 0, y: pxToRem(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        style={{
          padding: pxToRem(24),
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(255, 255, 255, 0.02))',
          backdropFilter: `blur(${pxToRem(10)})`,
          borderRadius: pxToRem(16),
          border: `${pxToRem(2)} solid rgba(16, 185, 129, 0.3)`,
          marginBottom: pxToRem(24)
        }}
      >
        <h3 style={{ 
          fontSize: pxToRem(19.2),
          marginBottom: pxToRem(16),
          display: 'flex',
          alignItems: 'center',
          gap: pxToRem(8)
        }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Award size={24} color="#10b981" />
          </motion.div>
          <GradientText gradient="from-green-400 to-teal-400">
            Potential Strategic Acquirers
          </GradientText>
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: pxToRem(16) }}>
          {acquirers.map((acq, index) => (
            <motion.div
              key={acq.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.1, y: pxToRem(-5) }}
              style={{
                textAlign: 'center',
                padding: pxToRem(16),
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: pxToRem(12),
                border: `${pxToRem(1)} solid rgba(255, 255, 255, 0.1)`,
                cursor: 'pointer'
              }}
            >
              <motion.div
                animate={{ 
                  y: pulseAnimation ? [0, pxToRem(-5), 0] : 0
                }}
                transition={{ duration: 2, delay: index * 0.2 }}
                style={{ marginBottom: pxToRem(8) }}
              >
                <Icon type={acq.iconType} size={24} variant="inline" gradient={acq.iconGradient} />
              </motion.div>
              <p style={{ fontSize: pxToRem(14.4), color: '#e2e8f0', marginBottom: pxToRem(4) }}>
                {acq.name}
              </p>
              <p style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>
                {acq.rationale}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        style={{
          textAlign: 'center',
          padding: pxToRem(16),
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(255, 255, 255, 0.02))',
          borderRadius: pxToRem(12),
          border: `${pxToRem(1)} solid rgba(251, 191, 36, 0.3)`
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', gap: pxToRem(48), alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: pxToRem(14.4), color: '#94a3b8', marginBottom: pxToRem(4) }}>Target Return</p>
            <motion.div
              animate={{ scale: pulseAnimation ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 2 }}
              style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#fbbf24' }}
            >
              <AnimatedCounter end={toFiniteNumber(20)} duration={1.5} />x-<AnimatedCounter end={toFiniteNumber(50)} duration={1.5} />x
            </motion.div>
          </div>
          <div>
            <p style={{ fontSize: pxToRem(14.4), color: '#94a3b8', marginBottom: pxToRem(4) }}>Target Timeline</p>
            <motion.div
              animate={{ color: pulseAnimation ? '#10b981' : '#4ade80' }}
              transition={{ duration: 1 }}
              style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold' }}
            >
              3-7 Years
            </motion.div>
          </div>
          <div>
            <p style={{ fontSize: pxToRem(14.4), color: '#94a3b8', marginBottom: pxToRem(4) }}>IRR Target</p>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#8b5cf6' }}
            >
              <AnimatedCounter end={toFiniteNumber(75)} duration={1.5} />%+
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )


  return (
    <GridLayout 
      title={<GradientText gradient="from-purple-400 via-pink-400 to-blue-400">Exit Strategy & Investor Returns</GradientText>}
      subtitle={
        <motion.span
          animate={{ color: pulseAnimation ? '#10b981' : '#4ade80' }}
          transition={{ duration: 1 }}
          style={{ fontWeight: 'bold' }}
        >
          Multiple paths to liquidity with 20-50x return potential
        </motion.span>
      }
      cards={cards}
      columns={3}
      summary={summary}
    />
  )
}
