import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import { Server, Cpu, Zap, Cloud, Database, Globe, Wifi, HardDrive } from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function GiftCityTechnologyInfrastructureSlide() {
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(prev => (prev + 1) % 4)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const physicalInfra = {
    title: 'Physical Infrastructure',
    icon: Server,
    color: '#a855f7',
    features: [
      { 
        name: 'Ultra Low Latency',
        detail: 'Sub-millisecond to NSE/BSE',
        icon: Zap,
        value: '<1ms'
      },
      { 
        name: 'Dedicated Data Center',
        detail: 'Tier 4, 99.99% uptime',
        icon: HardDrive,
        value: '99.99%'
      },
      { 
        name: 'Direct Market Access',
        detail: 'Co-location facilities',
        icon: Wifi,
        value: 'Direct'
      },
      { 
        name: 'Redundant Connectivity',
        detail: 'Multiple submarine cables',
        icon: Globe,
        value: '5 Routes'
      }
    ]
  }

  const digitalCapabilities = {
    title: 'Digital Capabilities',
    icon: Cloud,
    color: '#3b82f6',
    features: [
      { 
        name: 'AI Computing Power',
        detail: 'GPU clusters for ML/AI',
        icon: Cpu,
        value: '1000+ GPUs'
      },
      { 
        name: 'Real-time Processing',
        detail: '1M+ transactions/second',
        icon: Database,
        value: '1M+ TPS'
      },
      { 
        name: 'Global API Gateway',
        detail: 'Connect to 100+ exchanges',
        icon: Globe,
        value: '100+ APIs'
      },
      { 
        name: 'Blockchain Ready',
        detail: 'DLT infrastructure enabled',
        icon: Zap,
        value: 'Web3'
      }
    ]
  }

  const performanceMetrics = [
    { label: 'Response Time', value: 11, unit: 'ms', color: '#fbbf24' },
    { label: 'Uptime SLA', value: 99.99, unit: '%', color: '#10b981' },
    { label: 'Daily Data', value: 10, unit: 'TB', color: '#3b82f6' },
    { label: 'Operations', value: '24/7', unit: '', color: '#a855f7' }
  ]

  const renderInfrastructureCard = (infra, index) => (
    <motion.div
      initial={{ opacity: 0, x: index === 0 ? pxToRem(-30) : pxToRem(30) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + index * 0.2, type: 'spring' }}
      style={{
        padding: '1.5rem',
        background: `linear-gradient(135deg, ${infra.color}15, rgba(255, 255, 255, 0.02))`,
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: `2px solid ${infra.color}30`,
        position: 'relative'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <motion.div
          animate={{ 
            rotate: pulseAnimation === index ? 360 : 0,
            scale: pulseAnimation === index ? [1, 1.2, 1] : 1
          }}
          transition={{ duration: 0.5 }}
          style={{
            padding: '0.75rem',
            background: `linear-gradient(135deg, ${infra.color}, ${infra.color}80)`,
            borderRadius: '0.75rem'
          }}
        >
          <infra.icon size={28} color="#fff" />
        </motion.div>
        <h3 style={{ fontSize: '1.3rem', color: infra.color }}>
          {infra.title}
        </h3>
      </div>
      
      {/* Features */}
      {infra.features.map((feature, fi) => (
        <motion.div
          key={feature.name}
          initial={{ opacity: 0, y: pxToRem(10) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + index * 0.2 + fi * 0.1 }}
          whileHover={{ scale: 1.02, x: pxToRem(5) }}
          onHoverStart={() => setHoveredFeature(`${infra.title}-${feature.name}`)}
          onHoverEnd={() => setHoveredFeature(null)}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            padding: '0.75rem',
            background: hoveredFeature === `${infra.title}-${feature.name}`
              ? `linear-gradient(135deg, ${infra.color}20, rgba(0, 0, 0, 0.4))`
              : 'rgba(0, 0, 0, 0.3)',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
            <motion.div
              animate={{ 
                y: hoveredFeature === `${infra.title}-${feature.name}` ? [0, -3, 0] : 0
              }}
              transition={{ duration: 0.5 }}
            >
              <feature.icon size={20} color={infra.color} />
            </motion.div>
            <div>
              <p style={{ 
                fontSize: '0.95rem',
                fontWeight: 'bold',
                color: '#e2e8f0',
                marginBottom: '0.25rem'
              }}>
                {feature.name}
              </p>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                {feature.detail}
              </p>
            </div>
          </div>
          <motion.div
            animate={{ 
              scale: hoveredFeature === `${infra.title}-${feature.name}` ? 1.1 : 1
            }}
            style={{
              padding: '0.5rem',
              background: `${infra.color}20`,
              borderRadius: '0.375rem'
            }}
          >
            <p style={{ 
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: infra.color
            }}>
              {feature.value}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )

  const performanceCard = (
    <motion.div
      initial={{ opacity: 0, y: pxToRem(30) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(59, 130, 246, 0.1))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '2px solid rgba(251, 191, 36, 0.3)',
        gridColumn: 'span 2'
      }}
    >
      <h3 style={{
        fontSize: '1.3rem',
        textAlign: 'center',
        marginBottom: '1.5rem'
      }}>
        <GradientText gradient="from-amber-400 to-blue-400">
          Platform Performance Metrics
        </GradientText>
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem'
      }}>
        {performanceMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 + index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.05 }}
            style={{
              textAlign: 'center',
              padding: '1rem',
              background: `linear-gradient(135deg, ${metric.color}15, rgba(0, 0, 0, 0.3))`,
              borderRadius: '0.75rem',
              border: `1px solid ${metric.color}40`
            }}
          >
            <motion.div
              animate={{ 
                scale: pulseAnimation === index ? [1, 1.1, 1] : 1,
                color: pulseAnimation === index 
                  ? [metric.color, '#fff', metric.color] 
                  : metric.color
              }}
              transition={{ duration: 1 }}
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}
            >
              {typeof metric.value === 'number' ? (
                <>
                  <AnimatedCounter end={metric.value} duration={2000} decimals={metric.unit === '%' ? 2 : 0} />
                  {metric.unit}
                </>
              ) : (
                metric.value
              )}
            </motion.div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        style={{
          marginTop: '1.5rem',
          padding: '1rem',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.15))',
          borderRadius: '0.75rem',
          textAlign: 'center'
        }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.02, 1],
            rotate: [0, 1, -1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p style={{ fontSize: '1.1rem' }}>
            <GradientText gradient="from-teal-400 via-blue-400 to-purple-400">
              GIFT City + AI + Infrastructure = 
            </GradientText>
            {' '}
            <span style={{ color: '#10b981', fontWeight: 'bold' }}>
              Unbeatable Advantage
            </span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )

  const summary = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.2, type: 'spring' }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(16, 185, 129, 0.1))',
        borderRadius: '1.25rem',
        border: '2px solid rgba(168, 85, 247, 0.3)',
        textAlign: 'center'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem'
      }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <Icon type="zap" size={48} variant="badge" gradient="from-purple-400 to-pink-400" />
        </motion.div>
        
        <div>
          <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            <GradientText gradient="from-purple-400 via-pink-400 to-orange-400">
              Enterprise-Grade Infrastructure
            </GradientText>
          </h4>
          <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
            World's most advanced fintech infrastructure in GIFT City
          </p>
        </div>
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <Icon type="globe" size={48} variant="badge" gradient="from-blue-400 to-cyan-400" />
        </motion.div>
      </div>
    </motion.div>
  )

  return (
    <GridLayout
      title={
        <>
          <GradientText gradient="from-purple-400 via-blue-400 to-cyan-400">
            GIFT City Tech Infrastructure
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
            World-Class Technology Hub for Global Finance
          </motion.p>
        </>
      }
      cards={[
        renderInfrastructureCard(physicalInfra, 0),
        renderInfrastructureCard(digitalCapabilities, 1),
        performanceCard
      ]}
      columns={2}
      summary={summary}
      particles={
        <>
          {/* Network Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.cos(i * 30) * 50, 0],
                y: [0, Math.sin(i * 30) * 50, 0],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3
              }}
              style={{
                position: 'absolute',
                left: `${20 + (i % 4) * 20}%`,
                top: `${20 + Math.floor(i / 4) * 30}%`,
                color: i % 2 === 0 ? '#a855f7' : '#3b82f6'
              }}
            >
              <Cpu size={12} />
            </motion.div>
          ))}
          
          {/* Background Gradient Animation */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)'
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