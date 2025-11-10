import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Brain, TrendingUp, Shield, Zap, Globe, Users, Target, DollarSign, Award, PiggyBank } from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function GiftCityThreePillarPlatformSlide() {
  const [hoveredPillar, setHoveredPillar] = useState(null)
  const [activeAnimation, setActiveAnimation] = useState(0)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setActiveAnimation(prev => (prev + 1) % 3)
    }, 3000)
    
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    
    return () => {
      clearInterval(animationInterval)
      clearInterval(pulseInterval)
    }
  }, [])
  
  const pillars = [
    {
      id: 1,
      title: 'AI Technology Platform',
      icon: Brain,
      color: '#8b5cf6',
      gradient: 'from-purple-500 to-indigo-500',
      metrics: [
        { value: 68, suffix: '+', label: 'AI Agents', icon: Zap },
        { value: 7, suffix: '', label: 'Live Modules', icon: Globe },
        { value: 11, suffix: 'ms', label: 'Response Time', icon: Target }
      ],
      features: [
        'Dual-team analysis system',
        'FinBERT sentiment processing',
        '182+ news sources tracked',
        'Real-time decision engine'
      ],
      highlight: 'Technology Foundation'
    },
    {
      id: 2,
      title: 'Category III AIF',
      icon: TrendingUp,
      color: '#10b981',
      gradient: 'from-green-500 to-emerald-500',
      metrics: [
        { value: 250, prefix: '$', suffix: 'M', label: 'Target AUM', icon: DollarSign },
        { value: 600, suffix: '%', label: 'AI Advantage', icon: Award },
        { value: 30, label: 'Month Horizon', icon: Target }
      ],
      features: [
        'Global LP access',
        'Tax pass-through structure',
        'USD denominated fund',
        'GIFT IFSC benefits'
      ],
      highlight: 'Investment Vehicle'
    },
    {
      id: 3,
      title: 'Investment Advisory',
      icon: Shield,
      color: '#06b6d4',
      gradient: 'from-cyan-500 to-blue-500',
      metrics: [
        { value: 1.55, prefix: '₹', suffix: 'L', label: 'Tax Savings', icon: PiggyBank },
        { value: 100, suffix: '%', label: 'IFSCA Licensed', icon: Shield },
        { value: 24, suffix: '/7', label: 'Support', icon: Users }
      ],
      features: [
        'Family office focus',
        'HNI & UHNI clients',
        'Zero capital gains',
        'Regulatory compliance'
      ],
      highlight: 'Client Interface'
    }
  ]

  const renderPillarCard = (pillar, index) => (
    <div
      style={{
        padding: '1.5rem',
        background: `linear-gradient(135deg, ${pillar.color}15, rgba(255, 255, 255, 0.02))`,
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: `2px solid ${pillar.color}30`,
        position: 'relative',
        overflow: 'visible',
        cursor: 'pointer'
      }}
    >
      {/* Animated Halo Effect */}
      {hoveredPillar === pillar.id && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '-1.875rem',
              left: '-1.875rem',
              right: '-1.875rem',
              bottom: '-1.875rem',
              background: `radial-gradient(circle, ${pillar.color}40, transparent)`,
              borderRadius: '1.5rem',
              filter: 'blur(1.5625rem)',
              zIndex: -1
            }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: '-2.5rem',
              left: '-2.5rem',
              right: '-2.5rem',
              bottom: '-2.5rem',
              background: `conic-gradient(from 0deg, transparent, ${pillar.color}20, transparent)`,
              borderRadius: '1.875rem',
              filter: 'blur(1.25rem)',
              zIndex: -2
            }}
          />
        </>
      )}
      
      {/* Pillar Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <motion.div
            animate={{ 
              rotate: activeAnimation === index ? [0, -10, 10, 0] : 0,
              scale: pulseAnimation && activeAnimation === index ? 1.2 : 1
            }}
            transition={{ duration: 0.5 }}
            style={{
              padding: '0.75rem',
              background: `linear-gradient(135deg, ${pillar.color}, ${pillar.color}cc)`,
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <pillar.icon size={28} color="#fff" />
          </motion.div>
          <div>
            <h3 style={{ 
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: pillar.color
            }}>
              Pillar {pillar.id}
            </h3>
            <p style={{ 
              fontSize: '0.75rem',
              color: '#64748b'
            }}>
              {pillar.highlight}
            </p>
          </div>
        </div>
        
        <h4 style={{ 
          fontSize: '1.25rem',
          background: `linear-gradient(135deg, ${pillar.color}, ${pillar.color}80)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>
          {pillar.title}
        </h4>
      </div>
      
      {/* Metrics Grid */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.5rem',
        marginBottom: '1.5rem'
      }}>
        {pillar.metrics.map((metric, mi) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.2 + mi * 0.1 }}
            whileHover={{ scale: 1.1 }}
            style={{
              padding: '0.5rem',
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '0.5rem',
              textAlign: 'center'
            }}
          >
            <motion.p
              animate={{ 
                scale: hoveredPillar === pillar.id && mi === 0 ? [1, 1.1, 1] : 1
              }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ 
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: pillar.color
              }}
            >
              {metric.prefix || ''}
              <AnimatedCounter end={metric.value || 0} duration={1500 + mi * 200} />
              {metric.suffix || ''}
            </motion.p>
            <p style={{ 
              fontSize: '0.65rem',
              color: '#64748b',
              marginTop: '0.25rem'
            }}>
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
      
      {/* Features List */}
      <div style={{ marginBottom: '1.5rem' }}>
        {pillar.features.map((feature, fi) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: pxToRem(-20) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 + index * 0.2 + fi * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}
          >
            <motion.span
              animate={{ 
                scale: hoveredPillar === pillar.id ? [1, 1.3, 1] : 1
              }}
              transition={{ duration: 0.5, delay: fi * 0.1 }}
              style={{ 
                color: pillar.color,
                fontSize: '0.8rem'
              }}
            >
              ▸
            </motion.span>
            <span style={{ 
              fontSize: '0.85rem',
              color: '#94a3b8'
            }}>
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
      
      {/* Animated Progress Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ 
          delay: 1.2 + index * 0.2,
          duration: 0.8,
          ease: 'easeOut'
        }}
        style={{
          height: '0.25rem',
          background: `linear-gradient(90deg, ${pillar.color}, ${pillar.color}60)`,
          borderRadius: '0.25rem',
          transformOrigin: 'left',
          boxShadow: `0 0 1.25rem ${pillar.color}50`
        }}
      />
    </div>
  )

  const summary = (
    <motion.div
      initial={{ opacity: 0, y: pxToRem(30) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8 }}
      style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))',
        borderRadius: '1.25rem',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Integration Lines */}
      <svg 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
        viewBox="0 0 1000 150"
      >
        <motion.path
          d="M100,75 Q250,25 400,75 T700,75 T1000,75"
          stroke="url(#integrationGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
        <defs>
          <linearGradient id="integrationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.p
          animate={{ 
            scale: pulseAnimation ? [1, 1.02, 1] : 1
          }}
          transition={{ duration: 2 }}
          style={{ 
            fontSize: '1.8rem',
            fontWeight: 'bold'
          }}
        >
          <span style={{ color: '#8b5cf6' }}>Technology</span>
          <span style={{ color: '#64748b' }}> + </span>
          <span style={{ color: '#10b981' }}>Fund</span>
          <span style={{ color: '#64748b' }}> + </span>
          <span style={{ color: '#06b6d4' }}>Advisory</span>
          <span style={{ color: '#64748b' }}> = </span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, type: 'spring' }}
          style={{ marginTop: '0.5rem' }}
        >
          <GradientText gradient="from-purple-400 via-green-400 to-cyan-400">
            <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              Complete Ecosystem
            </span>
          </GradientText>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          style={{ 
            color: '#94a3b8',
            fontSize: '0.95rem',
            marginTop: '1rem'
          }}
        >
          Seamlessly integrated for maximum performance and tax efficiency
        </motion.p>
      </div>
    </motion.div>
  )

  return (
    <GridLayout
      title={
        <>
          <GradientText gradient="from-purple-400 via-green-400 to-cyan-400">
            Three-Pillar Platform Architecture
          </GradientText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              textAlign: 'center', 
              color: '#94a3b8', 
              fontSize: '1.2rem',
              marginTop: '0.5rem',
              marginBottom: '1rem'
            }}
          >
            Building the Future of Digital Finance from GIFT City
          </motion.p>
        </>
      }
      cards={pillars.map((pillar, index) => renderPillarCard(pillar, index))}
      columns={3}
      summary={summary}
      particles={
        <>
          {/* Multi-layer Animated Gradient */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1
            }}
          />
          
          {/* Light Sweep Effect */}
          <motion.div
            animate={{
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
              x: ['-100%', '200%']
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
              pointerEvents: 'none'
            }}
          />
        </>
      }
    />
  )
}
