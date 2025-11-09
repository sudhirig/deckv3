import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { Calculator, Shield, TrendingUp, FileText, DollarSign, BarChart2, Sparkles, Award } from 'lucide-react'
import './SlideStyles.css'

const CGMFFeaturesSlide = () => {
  return (
    <div className="slide-content" style={{ position: 'relative' }}>
      <ParticleBackground count={45} color="#10b981" />
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 60% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 60%), radial-gradient(circle at 20% 70%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)',
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
            <GradientText gradient="from-emerald-400 via-green-400 to-teal-400">
              CGMF Features & Capabilities
            </GradientText>
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Institutional-Grade Analysis for Every Investor
          </p>
        </motion.div>

        {/* Top Feature Metrics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
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
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="glass-card"
              style={{
                padding: '0.75rem',
                textAlign: 'center',
                background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}08 100%)`,
                border: `1px solid ${stat.color}30`
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                style={{ fontSize: '1.3rem', fontWeight: 'bold', color: stat.color }}
              >
                {stat.prefix}<AnimatedCounter end={stat.value} duration={1500} decimals={stat.value < 10 ? 2 : 0} />{stat.unit}
              </motion.div>
              <p style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {/* Tax Optimization Engine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Money Flow */}
            <motion.div
              animate={{ 
                y: [-50, 100],
                opacity: [0, 0.3, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute',
                left: '80%',
                fontSize: '2rem',
                color: '#10b981'
              }}
            >
              ₹
            </motion.div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Calculator className="w-7 h-7 text-green-400 mr-3" />
                <h3 style={{ fontSize: '1.3rem', color: '#10b981' }}>Tax Optimization Engine</h3>
                <Sparkles className="w-5 h-5 text-green-400 ml-auto" />
              </div>
              
              <div style={{ space: 'y-3' }}>
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
                    style={{ marginBottom: '1rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{item.label}:</span>
                      <motion.span 
                        animate={{ color: ['#10b981', '#fbbf24', '#10b981'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        style={{ fontSize: '0.9rem', fontWeight: 'bold' }}
                      >
                        {item.value}
                      </motion.span>
                    </div>
                    <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg, #10b981, #14b8a6)`,
                          boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stress Testing Suite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Pulse Warning Effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)'
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Shield className="w-7 h-7 text-red-400 mr-3" />
                <h3 style={{ fontSize: '1.3rem', color: '#ef4444' }}>Stress Testing Suite</h3>
              </div>
              
              <div style={{ space: 'y-2' }}>
                {[
                  { emoji: '📉', scenario: 'Market Crash', impact: '-40% scenario', color: '#ef4444' },
                  { emoji: '📈', scenario: 'Bull Run', impact: '+30% projection', color: '#10b981' },
                  { emoji: '💹', scenario: 'Sector Rotation', impact: 'Impact analysis', color: '#f59e0b' },
                  { emoji: '🌍', scenario: 'Global Crisis', impact: 'Full simulation', color: '#3b82f6' },
                  { emoji: '💱', scenario: 'Currency Risk', impact: 'FX exposure', color: '#a855f7' }
                ].map((test, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    whileHover={{ x: -5, scale: 1.02 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.5rem',
                      background: `${test.color}10`,
                      borderRadius: '6px',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      style={{ fontSize: '1.2rem', marginRight: '0.75rem' }}
                    >
                      {test.emoji}
                    </motion.span>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{test.scenario}: </span>
                      <span style={{ fontSize: '0.8rem', color: test.color }}>{test.impact}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ELIVATE Scoring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <TrendingUp className="w-7 h-7 text-purple-400 mr-3" />
              <h3 style={{ fontSize: '1.3rem', color: '#a855f7' }}>ELIVATE Scoring</h3>
            </div>
            
            <div style={{ space: 'y-3' }}>
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
                  style={{
                    borderLeft: `3px solid ${score.color}`,
                    paddingLeft: '1rem',
                    marginBottom: '1.2rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0' }}>{score.metric}</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <CircularProgress value={score.value} size={30} strokeWidth={3} />
                      <motion.span
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ marginLeft: '0.5rem', fontSize: '1rem', fontWeight: 'bold', color: score.color }}
                      >
                        {score.value}%
                      </motion.span>
                    </div>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${score.value}%` }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 1 }}
                      style={{
                        height: '100%',
                        background: score.color,
                        boxShadow: `0 0 15px ${score.color}50`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Unified Fund Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <FileText className="w-7 h-7 text-blue-400 mr-3" />
              <h3 style={{ fontSize: '1.3rem', color: '#3b82f6' }}>Unified Fund Hub</h3>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{ marginLeft: 'auto' }}
              >
                <BarChart2 className="w-5 h-5 text-blue-400" />
              </motion.div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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
                  whileHover={{ scale: 1.1 }}
                  style={{
                    textAlign: 'center',
                    padding: '0.75rem',
                    background: `${hub.color}10`,
                    borderRadius: '8px',
                    border: `1px solid ${hub.color}30`
                  }}
                >
                  <motion.p
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    style={{ fontSize: '1.3rem', fontWeight: 'bold', color: hub.color }}
                  >
                    <AnimatedCounter end={hub.value} duration={1500} />{hub.unit}
                  </motion.p>
                  <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{hub.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default CGMFFeaturesSlide