import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import BarChart from '../components/BarChart'
import { Calculator, TrendingUp, PiggyBank, Award, DollarSign, Shield, Percent, ArrowRight, Sparkles } from 'lucide-react'
import './SlideStyles.css'

const GiftCityTaxOptimizationSlide = () => {
  const [animateMetrics, setAnimateMetrics] = useState(false)
  const [savingsCounter, setSavingsCounter] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 500)
    
    // Continuous counter animation for savings
    const interval = setInterval(() => {
      setSavingsCounter(prev => (prev + 1) % 100)
    }, 50)
    
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])
  
  // Sample data for comparison chart
  const taxComparisonData = [
    { label: 'Mainland', value: 30, displayValue: '30%' },
    { label: 'MF Tax', value: 20, displayValue: '20%' },
    { label: 'GIFT City', value: 10, displayValue: '10%' },
    { label: 'No GST', value: 0, displayValue: '0%' }
  ]
  
  return (
    <div className="slide-content" style={{ position: 'relative' }}>
      <ParticleBackground count={50} color="#10b981" />
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.12) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)',
        zIndex: 0
      }} />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="glass-card"
        style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="slide-title">
            <GradientText gradient="from-green-400 via-emerald-400 to-yellow-400">
              Tax Optimization Showcase
            </GradientText>
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Real Savings for Real Investors
          </p>
        </motion.div>

        {/* Hero Savings Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
            borderRadius: '20px',
            position: 'relative'
          }}
        >
          {/* Animated Money Particles */}
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              color: '#10b981',
              fontSize: '2rem',
              opacity: 0.3
            }}
          >
            ₹
          </motion.div>
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '60%',
              right: '15%',
              color: '#fbbf24',
              fontSize: '1.5rem',
              opacity: 0.3
            }}
          >
            ₹
          </motion.div>
          
          <Sparkles className="w-12 h-12 text-green-400 mx-auto mb-2" />
          <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            <GradientText gradient="from-green-400 to-yellow-400">
              ₹<AnimatedCounter end={10} duration={2000} /> Lakh
            </GradientText>
          </h3>
          <p style={{ color: '#94a3b8' }}>5-Year Tax Savings</p>
        </motion.div>

        {/* Top Metrics with Continuous Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            marginBottom: '2rem'
          }}
        >
          {[
            { icon: DollarSign, label: '5-Year Savings', value: 10, prefix: '₹', suffix: 'L', color: '#10b981', pulse: true },
            { icon: Shield, label: 'GST Rate', value: 0, suffix: '%', color: '#06b6d4' },
            { icon: Percent, label: 'Corp Tax', value: 10, suffix: '%', color: '#a855f7' },
            { icon: Award, label: 'Compliant', value: 100, suffix: '%', color: '#fbbf24' }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="glass-card"
              style={{
                padding: '1rem',
                textAlign: 'center',
                background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}08 100%)`,
                border: `1px solid ${item.color}30`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Continuous Pulse for Key Metrics */}
              {item.pulse && (
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: item.color,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0
                  }}
                />
              )}
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <item.icon className="w-5 h-5 mx-auto mb-2" style={{ color: item.color }} />
                <motion.div
                  animate={item.pulse ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ fontSize: '1.5rem', fontWeight: 'bold', color: item.color }}
                >
                  {item.prefix}<AnimatedCounter end={item.value} duration={1500} />{item.suffix}
                </motion.div>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Visual Tax Comparison with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              position: 'relative'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', color: '#06b6d4', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <Calculator className="w-5 h-5 mr-2" />
              Tax Rate Comparison
            </h3>
            
            <BarChart data={taxComparisonData} height={120} colorScheme="gradient" animated={animateMetrics} />
            
            {/* Animated Savings Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{
                marginTop: '1rem',
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(251, 191, 36, 0.1) 100%)',
                borderRadius: '8px',
                textAlign: 'center'
              }}
            >
              <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                GIFT City offers{' '}
                <motion.span
                  animate={{ color: ['#10b981', '#fbbf24', '#10b981'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ fontWeight: 'bold', fontSize: '1.1rem' }}
                >
                  66% lower taxes
                </motion.span>
                {' '}than mainland
              </p>
            </motion.div>
          </motion.div>

          {/* Investment Analysis Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              position: 'relative'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', color: '#a855f7', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <TrendingUp className="w-5 h-5 mr-2" />
              ₹1 Crore Investment Analysis
            </h3>
            
            {/* Investment Options with Animated Progress */}
            <div style={{ space: 'y-3' }}>
              {[
                { type: 'Direct Equity', tax: 30, savings: 0, color: '#ef4444' },
                { type: 'Mutual Funds', tax: 20, savings: 5, color: '#f59e0b' },
                { type: 'GIFT City AIF', tax: 10, savings: 10, color: '#10b981' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  style={{
                    marginBottom: '1rem',
                    padding: '0.75rem',
                    background: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '8px',
                    border: `1px solid ${item.color}30`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <CircularProgress value={100 - item.tax} size={35} strokeWidth={3} />
                      <span style={{ marginLeft: '0.75rem', color: '#e2e8f0' }}>{item.type}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1rem', fontWeight: 'bold', color: item.color }}>
                        {item.tax}% Tax
                      </div>
                      {item.savings > 0 && (
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          style={{ fontSize: '0.75rem', color: '#10b981' }}
                        >
                          Save ₹{item.savings}L
                        </motion.div>
                      )}
                    </div>
                  </div>
                  
                  {/* Animated Tax Bar */}
                  <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.tax}%` }}
                      transition={{ delay: 1.3 + index * 0.1, duration: 0.8 }}
                      style={{
                        height: '100%',
                        background: item.color,
                        boxShadow: `0 0 10px ${item.color}50`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Savings Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="glass-card"
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: '1.3rem', color: '#fbbf24', marginBottom: '0.5rem' }}>
                Your Total Savings Over 5 Years
              </h4>
              <p style={{ color: '#94a3b8' }}>
                Through GIFT City tax optimization structure
              </p>
            </div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #10b981, #fbbf24)',
                borderRadius: '16px'
              }}
            >
              <PiggyBank className="w-12 h-12 text-white" />
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginTop: '0.5rem' }}>
                ₹10L+
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default GiftCityTaxOptimizationSlide