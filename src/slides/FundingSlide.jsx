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

          {/* Enhanced 18-Month Milestone Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(16, 185, 129, 0.05))',
              backdropFilter: 'blur(15px)',
              borderRadius: '20px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              position: 'relative'
            }}
          >
            <h3 style={{ 
              fontSize: '1.3rem', 
              background: 'linear-gradient(135deg, #10b981, #06b6d4)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', 
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Target size={24} color="#10b981" />
              18-Month Execution Timeline
            </h3>
            
            {/* Central Timeline Spine */}
            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ delay: 1.5, duration: 1.5, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  left: '1.5rem',
                  top: '2rem',
                  width: '3px',
                  height: 'calc(100% - 4rem)',
                  background: 'linear-gradient(180deg, #06b6d4, #10b981, #fbbf24)',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
                  borderRadius: '2px'
                }}
              />
            
              {[
                { 
                  month: 'Q2 2025', 
                  aum: 350, 
                  clients: 200, 
                  milestone: 'IBKR Integration Live', 
                  features: ['Automated Trading', 'Multi-Asset Support'],
                  color: '#06b6d4',
                  icon: '🚀'
                },
                { 
                  month: 'Q3 2025', 
                  aum: 600, 
                  clients: 400, 
                  milestone: 'GIFT City Gateway', 
                  features: ['Tax Optimization', 'AIF Structure'],
                  color: '#10b981',
                  icon: '🏛️'
                },
                { 
                  month: 'Q4 2025', 
                  aum: 1000, 
                  clients: 600, 
                  milestone: 'Break-even & Series A', 
                  features: ['Global Expansion', 'AI v2.0'],
                  color: '#fbbf24',
                  icon: '🎯'
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.month}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 1.8 + index * 0.3,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.03, x: 10 }}
                  style={{
                    marginBottom: '2rem',
                    position: 'relative',
                    paddingLeft: '2rem'
                  }}
                >
                  {/* Animated Node Connector */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: 1
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity, delay: index * 0.5 },
                      opacity: { delay: 1.8 + index * 0.3, duration: 0.5 }
                    }}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${milestone.color}, ${milestone.color}80)`,
                      border: `3px solid #0f172a`,
                      boxShadow: `0 0 30px ${milestone.color}, 0 0 60px ${milestone.color}50`,
                      zIndex: 2
                    }}
                  />
                  
                  {/* Motion Link Line */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '1.5rem', opacity: 1 }}
                    transition={{ delay: 2.0 + index * 0.3, duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      left: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      height: '2px',
                      background: `linear-gradient(90deg, ${milestone.color}, transparent)`,
                      zIndex: 1
                    }}
                  />
                  
                  {/* Milestone Card */}
                  <motion.div
                    style={{
                      padding: '1.5rem',
                      background: `linear-gradient(135deg, ${milestone.color}20, ${milestone.color}10)`,
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      border: `2px solid ${milestone.color}40`,
                      boxShadow: `0 10px 40px ${milestone.color}20`,
                      marginLeft: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span style={{ fontSize: '1.5rem' }}>{milestone.icon}</span>
                          <span style={{ color: milestone.color, fontWeight: 'bold', fontSize: '1.1rem' }}>
                            {milestone.month}
                          </span>
                        </div>
                        <p style={{ color: '#e2e8f0', fontWeight: 'bold', fontSize: '1rem', marginTop: '0.5rem' }}>
                          {milestone.milestone}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        >
                          <p style={{ color: '#e2e8f0', fontWeight: 'bold', fontSize: '1.2rem' }}>
                            $<AnimatedCounter value={milestone.aum} duration={2000} delay={2000 + index * 300}/>M
                          </p>
                          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                            AUM Target
                          </p>
                        </motion.div>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                      {milestone.features.map((feature, fi) => (
                        <motion.span
                          key={feature}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 2.2 + index * 0.3 + fi * 0.1 }}
                          style={{
                            padding: '0.3rem 0.8rem',
                            background: `${milestone.color}30`,
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            color: milestone.color,
                            border: `1px solid ${milestone.color}50`
                          }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div style={{ 
                      marginTop: '0.75rem', 
                      paddingTop: '0.75rem',
                      borderTop: `1px solid ${milestone.color}20`,
                      display: 'flex',
                      gap: '2rem'
                    }}>
                      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>
                        <AnimatedCounter value={milestone.clients} duration={2000} delay={2100 + index * 300}/> clients
                      </span>
                      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>
                        {index === 0 ? '40%' : index === 1 ? '70%' : '100%'} platform features
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Investor Commitment Cards with Halo Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          style={{ marginTop: '2rem' }}
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            style={{ 
              textAlign: 'center',
              fontSize: '1.5rem',
              background: 'linear-gradient(135deg, #c084fc, #ec4899)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '2rem'
            }}
          >
            Investor Commitment Status
          </motion.h3>
          
          {/* Investor Cards Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '1.5rem', 
            marginBottom: '2rem' 
          }}>
            {[
              { 
                name: 'Angel Syndicate', 
                amount: 0.5, 
                logo: '👥', 
                status: 'Committed',
                highlight: 'Early believers',
                color: '#8b5cf6',
                details: ['10 HNW Angels', 'Tech Entrepreneurs']
              },
              { 
                name: 'Family Offices', 
                amount: 0.75, 
                logo: '🏛️', 
                status: 'Committed',
                highlight: 'Strategic partners',
                color: '#10b981',
                details: ['3 Family Offices', 'Middle East & India']
              },
              { 
                name: 'VC Partners', 
                amount: 0.25, 
                logo: '🚀', 
                status: 'In Diligence',
                highlight: 'Fintech expertise',
                color: '#06b6d4',
                details: ['2 Fintech VCs', 'Series A lead interest']
              }
            ].map((investor, index) => (
              <motion.div
                key={investor.name}
                initial={{ opacity: 0, y: 30, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: 2.6 + index * 0.15,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                onHoverStart={() => setHoveredCard(investor.name)}
                onHoverEnd={() => setHoveredCard(null)}
                style={{
                  padding: '1.5rem',
                  background: `linear-gradient(135deg, ${investor.color}15, rgba(255, 255, 255, 0.02))`,
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  border: `2px solid ${investor.color}40`,
                  position: 'relative',
                  overflow: 'visible',
                  cursor: 'pointer',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Animated Halo Effect */}
                {hoveredCard === investor.name && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '-20px',
                        right: '-20px',
                        bottom: '-20px',
                        background: `radial-gradient(circle, ${investor.color}40, transparent)`,
                        borderRadius: '24px',
                        filter: 'blur(20px)',
                        zIndex: -1
                      }}
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                      style={{
                        position: 'absolute',
                        top: '-30px',
                        left: '-30px',
                        right: '-30px',
                        bottom: '-30px',
                        background: `conic-gradient(from 0deg, transparent, ${investor.color}30, transparent)`,
                        borderRadius: '30px',
                        filter: 'blur(15px)',
                        zIndex: -2
                      }}
                    />
                  </>
                )}
                
                {/* Status Badge */}
                <motion.div
                  animate={{ 
                    opacity: investor.status === 'Committed' ? [1, 0.8, 1] : 1
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: '0.3rem 0.8rem',
                    background: investor.status === 'Committed' ? 
                      'linear-gradient(135deg, #10b981, #059669)' : 
                      'linear-gradient(135deg, #fbbf24, #f59e0b)',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    color: '#fff',
                    fontWeight: 'bold'
                  }}
                >
                  {investor.status}
                </motion.div>
                
                {/* Logo with Breathing Animation */}
                <motion.div
                  animate={{ 
                    scale: pulseAnimation ? 1 : 1.1,
                    rotate: hoveredCard === investor.name ? [0, -5, 5, 0] : 0
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ 
                    fontSize: '2.5rem', 
                    marginBottom: '1rem',
                    filter: hoveredCard === investor.name ? 'drop-shadow(0 0 20px rgba(255,255,255,0.5))' : 'none'
                  }}
                >
                  {investor.logo}
                </motion.div>
                
                <h4 style={{ 
                  color: '#e2e8f0', 
                  fontSize: '1.1rem',
                  marginBottom: '0.5rem'
                }}>
                  {investor.name}
                </h4>
                
                <motion.p
                  animate={{ 
                    scale: hoveredCard === investor.name ? 1.05 : 1,
                    color: hoveredCard === investor.name ? investor.color : '#ec4899'
                  }}
                  style={{ 
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}
                >
                  ${investor.amount}M
                </motion.p>
                
                <p style={{ 
                  color: '#94a3b8', 
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                  marginBottom: '1rem'
                }}>
                  {investor.highlight}
                </p>
                
                {/* Investor Details */}
                {investor.details.map((detail, di) => (
                  <motion.div
                    key={detail}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.8 + index * 0.15 + di * 0.1 }}
                    style={{
                      fontSize: '0.8rem',
                      color: '#64748b',
                      marginBottom: '0.25rem',
                      paddingLeft: '1rem',
                      position: 'relative'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: investor.color
                    }}>▸</span>
                    {detail}
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Lead Investor CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.2, type: 'spring' }}
            style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '2px solid rgba(147, 51, 234, 0.4)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              animate={{
                background: [
                  'linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent)',
                  'linear-gradient(45deg, transparent, rgba(236, 72, 153, 0.1), transparent)',
                  'linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent)'
                ],
                x: ['-100%', '100%', '-100%']
              }}
              transition={{ duration: 10, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                animate={{ 
                  scale: [1, 1.03, 1],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  borderRadius: '16px',
                  marginBottom: '1rem',
                  boxShadow: '0 10px 40px rgba(139, 92, 246, 0.4)'
                }}
              >
                <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>
                  🎯 Seeking Lead Investor
                </p>
                <p style={{ fontSize: '1.2rem', color: '#fff' }}>
                  $2.5M+ for Board Seat
                </p>
              </motion.div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '4rem',
                marginTop: '1.5rem'
              }}>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Remaining</p>
                  <p style={{ color: '#e2e8f0', fontSize: '1.5rem', fontWeight: 'bold' }}>$3.5M</p>
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Valuation</p>
                  <p style={{ color: '#e2e8f0', fontSize: '1.5rem', fontWeight: 'bold' }}>$50M</p>
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Close Date</p>
                  <p style={{ color: '#e2e8f0', fontSize: '1.5rem', fontWeight: 'bold' }}>Q2 2025</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  marginTop: '1.5rem',
                  padding: '1rem 2.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(236, 72, 153, 0.5)',
                  borderRadius: '12px',
                  color: '#e2e8f0',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Request Investment Deck <ChevronRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
