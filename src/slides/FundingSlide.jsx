import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import ParticleBackground from '../components/ParticleBackground'
import CircularProgress from '../components/CircularProgress'
import { TrendingUp, DollarSign, Rocket, Target, Users, Award, Building2, ChevronRight } from 'lucide-react'
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

  return (
    <div className="slide-content" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Premium Particle Animation */}
      <ParticleBackground count={50} color="#8b5cf6" />
      
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)'
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

      {/* Light Sweep Animation */}
      <motion.div
        animate={{
          background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.1), transparent)',
          x: ['-100%', '200%']
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
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
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 3 }}
      >
        <AnimatedText delay={0.2}>
          <h1 className="slide-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <GradientText gradient="from-purple-400 via-pink-400 to-indigo-400">
              $5M to Scale Our Proven Platform
            </GradientText>
          </h1>
        </AnimatedText>
        
        <AnimatedText delay={0.4}>
          <p style={{ 
            textAlign: 'center', 
            color: '#94a3b8', 
            fontSize: '1.2rem',
            marginBottom: '2rem'
          }}>
            Accelerating from $250M to $1B AUM in 18 Months
          </p>
        </AnimatedText>
        
        {/* Funding Metrics with Breathing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          {fundingMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredCard(metric.label)}
              onHoverEnd={() => setHoveredCard(null)}
              style={{
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: `1px solid ${metric.color}40`,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Particle Halo on Hover */}
              {hoveredCard === metric.label && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    background: `radial-gradient(circle, ${metric.color}30, transparent)`,
                    filter: 'blur(20px)',
                    zIndex: -1
                  }}
                />
              )}

              {/* Breathing Icon */}
              <motion.div
                animate={{ 
                  scale: pulseAnimation ? 1 : 1.1,
                  rotate: pulseAnimation ? 0 : 5
                }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: '0.75rem' }}
              >
                <metric.icon size={28} color={metric.color} />
              </motion.div>

              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: metric.color }}>
                {metric.prefix}
                <AnimatedCounter 
                  value={metric.value} 
                  duration={1500 + index * 200}
                  delay={1000 + index * 100}
                />
                {metric.suffix}
              </div>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Use of Funds & Milestones Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Use of Funds with Visual Bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            style={{
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '20px',
              border: '1px solid rgba(139, 92, 246, 0.2)'
            }}
          >
            <h3 style={{ 
              fontSize: '1.3rem', 
              color: '#8b5cf6', 
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Rocket size={24} />
              Use of Funds
            </h3>
            
            {useOfFunds.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 1.4 + index * 0.1 }}
                style={{ marginBottom: '1.5rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>{item.category}</span>
                  <motion.span 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    style={{ color: item.color, fontWeight: 'bold' }}
                  >
                    ${item.amount}M ({item.percentage}%)
                  </motion.span>
                </div>
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  height: '8px',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ delay: 1.6 + index * 0.1, duration: 0.8 }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${item.color}, ${item.color}90)`,
                      boxShadow: `0 0 20px ${item.color}50`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 18-Month Roadmap with Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            style={{
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '20px',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}
          >
            <h3 style={{ 
              fontSize: '1.3rem', 
              color: '#10b981', 
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Target size={24} />
              18-Month Roadmap
            </h3>
            
            {[
              { month: 6, aum: 350, clients: 200, milestone: 'IBKR Integration Live', color: '#06b6d4' },
              { month: 12, aum: 600, clients: 400, milestone: 'GIFT City Gateway', color: '#10b981' },
              { month: 18, aum: 1000, clients: 600, milestone: 'Break-even & Series A', color: '#fbbf24' }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.month}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.2 }}
                whileHover={{ scale: 1.02, x: 5 }}
                style={{
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: `${milestone.color}15`,
                  borderRadius: '12px',
                  border: `1px solid ${milestone.color}40`,
                  position: 'relative'
                }}
              >
                {/* Timeline Connector */}
                {index < 2 && (
                  <motion.div
                    animate={{ height: ['0%', '100%'] }}
                    transition={{ delay: 2.0 + index * 0.2, duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '100%',
                      width: '2px',
                      height: '1.5rem',
                      background: milestone.color,
                      opacity: 0.5
                    }}
                  />
                )}
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: milestone.color,
                      boxShadow: `0 0 20px ${milestone.color}`
                    }}
                  />
                  <span style={{ color: milestone.color, fontWeight: 'bold' }}>
                    Month {milestone.month}
                  </span>
                </div>
                
                <div style={{ paddingLeft: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '2rem', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#e2e8f0' }}>
                      $<AnimatedCounter value={milestone.aum} duration={2000} delay={2000 + index * 200}/>M AUM
                    </span>
                    <span style={{ color: '#94a3b8' }}>
                      <AnimatedCounter value={milestone.clients} duration={2000} delay={2100 + index * 200}/> clients
                    </span>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.85rem' }}>{milestone.milestone}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Current Investors & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          style={{
            marginTop: '2rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(236, 72, 153, 0.15))',
            borderRadius: '20px',
            border: '1px solid rgba(147, 51, 234, 0.3)',
            textAlign: 'center'
          }}
        >
          <h3 style={{ color: '#c084fc', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
            Current Investors
          </h3>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
            {investors.map((investor, index) => (
              <motion.div
                key={investor.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -5 }}
                style={{
                  padding: '1rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(236, 72, 153, 0.3)'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{investor.logo}</div>
                <p style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>{investor.name}</p>
                <p style={{ color: '#ec4899', fontWeight: 'bold' }}>${investor.amount}M</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              borderRadius: '16px',
              display: 'inline-block'
            }}
          >
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>
              Seeking Lead Investor
            </p>
            <p style={{ fontSize: '1.1rem', color: '#fff' }}>
              $3.5M remaining at $50M valuation
            </p>
            <p style={{ fontSize: '0.9rem', color: '#fff', opacity: 0.9, marginTop: '0.5rem' }}>
              Board seat available for $2.5M+ commitment
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
