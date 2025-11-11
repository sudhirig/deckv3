import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import Icon from '../components/Icon'
import { Calculator, Shield, TrendingUp, FileText, DollarSign, BarChart2, Sparkles, Award, Brain, Zap, Target } from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function CGMFFeaturesSlide() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [moneyAnimation, setMoneyAnimation] = useState(true)
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    
    const moneyInterval = setInterval(() => {
      setMoneyAnimation(prev => !prev)
    }, 3000)
    
    return () => {
      clearInterval(pulseInterval)
      clearInterval(moneyInterval)
    }
  }, [])
  
  const title = (
    <GradientText gradient="from-emerald-400 via-green-400 to-teal-400">
      CGMF Features & Capabilities
    </GradientText>
  )
  
  const subtitle = "Institutional-Grade Analysis for Every Investor"
  
  const particles = (
    <>
      
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 60% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 70%, rgba(251, 191, 36, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 60% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)'
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
      
      {moneyAnimation && [...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -50, x: Math.random() * window.innerWidth, opacity: 0 }}
          animate={{ 
            y: window.innerHeight + 50,
            x: Math.random() * window.innerWidth,
            opacity: [0, 0.6, 0]
          }}
          transition={{ 
            duration: 4,
            delay: i * 0.8,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            fontSize: '2rem',
            color: '#10b981',
            zIndex: 2
          }}
        >
          ₹
        </motion.div>
      ))}
    </>
  )
  
  const summary = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '0.75rem',
        marginBottom: '2rem'
      }}
    >
      {[
        { value: 43, label: 'AMCs', color: '#3b82f6', icon: Award },
        { value: 16766, label: 'Funds', color: '#10b981', icon: FileText },
        { value: 1.55, label: 'L Saved', prefix: '₹', color: '#fbbf24', icon: DollarSign },
        { value: 9, label: 'AI Agents', color: '#a855f7', icon: Brain },
        { value: 95, label: 'Tax Efficiency', unit: '%', color: '#ef4444', icon: Calculator }
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4 + index * 0.08, type: 'spring' }}
          whileHover={{ 
            scale: 1.08,
            y: -5,
            boxShadow: `0 0.9375rem 2.5rem ${stat.color}40`
          }}
          style={{
            padding: '0.75rem',
            textAlign: 'center',
            background: `linear-gradient(135deg, ${stat.color}20, rgba(255, 255, 255, 0.02))`,
            backdropFilter: 'blur(1.25rem)',
            borderRadius: '1rem',
            border: `0.125rem solid ${stat.color}30`,
            position: 'relative',
            overflow: 'visible'
          }}
        >
          {hoveredCard === index && (
            <motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{
                position: 'absolute',
                inset: pxToRem(-10),
                borderRadius: '1rem',
                border: `0.125rem solid ${stat.color}`,
                zIndex: -1
              }}
            />
          )}
          
          <motion.div
            animate={{ 
              rotate: pulseAnimation && index === 2 ? [0, 10, -10, 0] : 0,
              scale: pulseAnimation && index === 3 ? [1, 1.2, 1] : 1
            }}
            transition={{ duration: 1 }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <stat.icon size={20} color={stat.color} />
          </motion.div>
          
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            style={{ fontSize: '1.3rem', fontWeight: 'bold', color: stat.color }}
          >
            {stat.prefix}<AnimatedCounter value={stat.value} duration={1500} decimals={stat.value < 10 ? 2 : 0} />{stat.unit}
          </motion.div>
          <p style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  )
  
  const cards = [
    <motion.div
      key="tax"
      initial={{ opacity: 0, x: -30, rotateY: -15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.6, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(16, 185, 129, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      <motion.div
        animate={{ 
          y: [-50, 150],
          opacity: [0, 0.5, 0],
          rotate: [0, 360]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          position: 'absolute',
          left: '80%',
          fontSize: '2.5rem',
          color: '#10b981',
          filter: 'blur(0.0625rem)'
        }}
      >
        ₹
      </motion.div>
      
      <motion.div
        initial={{
          scale: 1,
          opacity: 0.1
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '-1.25rem',
          left: '-1.25rem',
          right: '-1.25rem',
          bottom: '-1.25rem',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2), transparent)',
          borderRadius: '1.5rem',
          filter: 'blur(1.25rem)',
          zIndex: -1
        }}
      />
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Calculator size={32} color="#10b981" />
        <h3 style={{ fontSize: '1.3rem', color: '#10b981', marginLeft: '1rem' }}>
          Tax Optimization Engine
        </h3>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{ marginLeft: 'auto' }}
        >
          <Sparkles size={24} color="#10b981" />
        </motion.div>
      </div>
      
      {[
        { label: 'ELSS Optimization', value: '₹1.5L deduction', progress: 100 },
        { label: 'Tax Harvesting', value: 'Automated', progress: 95 },
        { label: 'Annual Savings', value: '₹1.55L+', progress: 100 },
        { label: 'LTCG Planning', value: 'Built-in', progress: 90 }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
          whileHover={{ x: 5 }}
          style={{ marginBottom: '1rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{item.label}:</span>
            <motion.span 
              animate={{ 
                color: pulseAnimation ? '#10b981' : '#fbbf24'
              }}
              transition={{ duration: 1 }}
              style={{ fontSize: '0.9rem', fontWeight: 'bold' }}
            >
              {item.value}
            </motion.span>
          </div>
          <div style={{ 
            height: '0.25rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '0.125rem',
            overflow: 'hidden'
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.progress}%` }}
              transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #10b981, #14b8a6)',
                boxShadow: '0 0 0.9375rem rgba(16, 185, 129, 0.5)'
              }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>,
    
    <motion.div
      key="stress"
      initial={{ opacity: 0, x: 30, rotateY: 15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.7, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(239, 68, 68, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.25rem',
          width: '5rem',
          height: '5rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4), transparent)',
          filter: 'blur(1.25rem)'
        }}
      />
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Shield size={32} color="#ef4444" />
        <h3 style={{ fontSize: '1.3rem', color: '#ef4444', marginLeft: '1rem' }}>
          Stress Testing Suite
        </h3>
      </div>
      
      {[
        { iconType: 'trending', iconGradient: 'from-red-400 to-pink-400', scenario: 'Market Crash', impact: '-40% scenario', color: '#ef4444' },
        { iconType: 'trending', iconGradient: 'from-teal-400 to-green-400', scenario: 'Bull Run', impact: '+30% projection', color: '#10b981' },
        { iconType: 'barChart', iconGradient: 'from-orange-400 to-amber-400', scenario: 'Sector Rotation', impact: 'Impact analysis', color: '#f59e0b' },
        { iconType: 'globe', iconGradient: 'from-blue-400 to-cyan-400', scenario: 'Global Crisis', impact: 'Full simulation', color: '#3b82f6' },
        { iconType: 'dollar', iconGradient: 'from-purple-400 to-pink-400', scenario: 'Currency Risk', impact: 'FX exposure', color: '#a855f7' }
      ].map((test, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 + index * 0.08 }}
          whileHover={{ 
            x: -5,
            scale: 1.02,
            backgroundColor: `${test.color}20`
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem',
            background: `${test.color}10`,
            borderRadius: '0.5rem',
            marginBottom: '0.6rem',
            border: `0.0625rem solid ${test.color}30`,
            transition: 'all 0.3s ease'
          }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            style={{ marginRight: '0.75rem' }}
          >
            <Icon type={test.iconType} size={20} variant="inline" gradient={test.iconGradient} />
          </motion.div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{test.scenario}: </span>
            <span style={{ fontSize: '0.8rem', color: test.color, fontWeight: 'bold' }}>
              {test.impact}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>,
    
    <motion.div
      key="elivate"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.9, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(168, 85, 247, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.1), transparent)',
          zIndex: -1
        }}
      />
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <TrendingUp size={32} color="#a855f7" />
        <h3 style={{ fontSize: '1.3rem', color: '#a855f7', marginLeft: '1rem' }}>
          ELIVATE Scoring
        </h3>
        <motion.div
          animate={{ scale: pulseAnimation ? [1, 1.3, 1] : 1 }}
          transition={{ duration: 1 }}
          style={{ marginLeft: 'auto' }}
        >
          <Target size={24} color="#a855f7" />
        </motion.div>
      </div>
      
      {[
        { metric: 'Performance Score', value: 87, color: '#a855f7' },
        { metric: 'Risk-Adjusted Return', value: 92, color: '#8b5cf6' },
        { metric: 'Tax Efficiency', value: 95, color: '#7c3aed' }
      ].map((score, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 + index * 0.1 }}
          whileHover={{ paddingLeft: '1.5rem' }}
          style={{
            borderLeft: `0.1875rem solid ${score.color}`,
            paddingLeft: '1rem',
            marginBottom: '1.2rem',
            transition: 'all 0.3s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0' }}>
              {score.metric}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CircularProgress value={score.value} size={30} strokeWidth={3} />
              <motion.span
                animate={{ scale: pulseAnimation ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 1.5 }}
                style={{ 
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: score.color
                }}
              >
                {score.value}%
              </motion.span>
            </div>
          </div>
          <div style={{ 
            height: '0.375rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '0.1875rem',
            overflow: 'hidden'
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${score.value}%` }}
              transition={{ delay: 1.2 + index * 0.1, duration: 1 }}
              style={{
                height: '100%',
                background: `linear-gradient(90deg, ${score.color}, ${score.color}80)`,
                boxShadow: `0 0 1.25rem ${score.color}50`
              }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>,
    
    <motion.div
      key="hub"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.0, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(59, 130, 246, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      <motion.div
        initial={{
          backgroundPosition: '0% 0%',
          opacity: 0.1
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          position: 'absolute',
          inset: pxToRem(-20),
          background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.2), transparent)',
          backgroundSize: '200% 200%',
          borderRadius: '1.5rem',
          filter: 'blur(0.9375rem)',
          zIndex: -1
        }}
      />
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <FileText size={32} color="#3b82f6" />
        <h3 style={{ fontSize: '1.3rem', color: '#3b82f6', marginLeft: '1rem' }}>
          Unified Fund Hub
        </h3>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ marginLeft: 'auto' }}
        >
          <BarChart2 size={24} color="#3b82f6" />
        </motion.div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        {[
          { value: 43, label: 'AMCs', color: '#3b82f6' },
          { value: 16766, label: 'Funds', color: '#10b981' },
          { value: 100, label: 'Categories', unit: '+', color: '#fbbf24' },
          { value: 24, label: 'Updates', unit: '/7', color: '#ef4444' }
        ].map((hub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: `0 0.625rem 1.5625rem ${hub.color}30`
            }}
            style={{
              textAlign: 'center',
              padding: '0.75rem',
              background: `linear-gradient(135deg, ${hub.color}15, ${hub.color}05)`,
              borderRadius: '0.75rem',
              border: `0.125rem solid ${hub.color}30`
            }}
          >
            <motion.p
              animate={{ 
                scale: pulseAnimation ? [1, 1.1, 1] : 1
              }}
              transition={{ duration: 2, delay: index * 0.3 }}
              style={{ 
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: hub.color
              }}
            >
              <AnimatedCounter value={hub.value} duration={1500} />{hub.unit}
            </motion.p>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
              {hub.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  ]
  
  return (
    <GridLayout
      title={title}
      subtitle={subtitle}
      cards={cards}
      columns={2}
      summary={summary}
      particles={particles}
    />
  )
}
