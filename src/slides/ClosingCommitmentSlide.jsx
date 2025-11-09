import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import ParticleBackground from '../components/ParticleBackground'
import CircularProgress from '../components/CircularProgress'
import { Rocket, Target, Clock, HandshakeIcon, ChevronRight, Star, DollarSign, TrendingUp, Award, Shield } from 'lucide-react'
import './SlideStyles.css'

export default function ClosingCommitmentSlide() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(stepInterval)
  }, [])

  const askDetails = {
    raise: 5,
    valuation: 50,
    type: 'Seed Round',
    lead: 'Lead Investor',
    minimum: 2.5
  }

  const useOfFunds = [
    { category: 'Product & AI Development', percentage: 40, color: '#8b5cf6', icon: Rocket },
    { category: 'Customer Acquisition', percentage: 30, color: '#10b981', icon: Target },
    { category: 'Compliance & Operations', percentage: 15, color: '#fbbf24', icon: Shield },
    { category: 'Working Capital', percentage: 15, color: '#06b6d4', icon: DollarSign }
  ]

  const investorBenefits = [
    { icon: Target, text: '100x return potential in 5 years', color: '#ec4899' },
    { icon: Clock, text: 'Early entry at $50M valuation', color: '#8b5cf6' },
    { icon: HandshakeIcon, text: 'Board seat for lead investor', color: '#10b981' },
    { icon: Star, text: 'Pro-rata rights in future rounds', color: '#fbbf24' }
  ]

  const nextSteps = [
    { phase: 'Initial Meeting', duration: '1 Week', icon: HandshakeIcon },
    { phase: 'Due Diligence', duration: '2 Weeks', icon: Shield },
    { phase: 'Term Sheet', duration: '1 Week', icon: Award },
    { phase: 'Closing', duration: '2 Weeks', icon: Rocket }
  ]

  return (
    <div className="slide-content" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Premium Particle Animation */}
      <ParticleBackground count={55} color="#ec4899" />
      
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 25% 40%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 75% 60%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 25% 40%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
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
          background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent)',
          x: ['-100%', '200%']
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
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
        {/* Header */}
        <AnimatedText delay={0.2}>
          <h1 className="slide-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <GradientText gradient="from-purple-400 via-pink-400 to-red-400">
              Join Us in Revolutionizing Wealth Management
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
            The opportunity to define the future of AI-powered finance
          </p>
        </AnimatedText>

        {/* The Ask Section with Breathing Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid rgba(147, 51, 234, 0.3)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Inner Glow Animation */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: -50,
              left: -50,
              right: -50,
              bottom: -50,
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1), transparent)',
              filter: 'blur(40px)',
              zIndex: -1
            }}
          />

          <h3 style={{ color: '#c084fc', marginBottom: '1.5rem', fontSize: '1.4rem', fontWeight: 'bold' }}>
            THE INVESTMENT OPPORTUNITY
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Raise Amount', value: askDetails.raise, prefix: '$', suffix: 'M', color: '#ec4899', icon: DollarSign },
              { label: 'Pre-Money Val', value: askDetails.valuation, prefix: '$', suffix: 'M', color: '#60a5fa', icon: TrendingUp },
              { label: 'Round Type', value: askDetails.type, color: '#4ade80', icon: Award },
              { label: 'Status', value: askDetails.lead, color: '#fbbf24', icon: Target },
              { label: 'Minimum Check', value: askDetails.minimum, prefix: '$', suffix: 'M', color: '#14b8a6', icon: Shield }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -5 }}
                style={{ position: 'relative' }}
              >
                {/* Breathing Glow */}
                <motion.div
                  animate={{ scale: pulseAnimation ? 1 : 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{ marginBottom: '0.5rem' }}
                >
                  <metric.icon size={20} color={metric.color} />
                </motion.div>
                
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: metric.color }}>
                  {metric.prefix}
                  {typeof metric.value === 'number' ? (
                    <AnimatedCounter value={metric.value} duration={1500} delay={1000 + index * 100} />
                  ) : (
                    metric.value
                  )}
                  {metric.suffix}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Use of Funds Bar */}
          <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: '8px', padding: '1rem' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
              USE OF FUNDS
            </div>
            <div style={{ display: 'flex', height: '30px', borderRadius: '6px', overflow: 'hidden', marginBottom: '0.75rem' }}>
              {useOfFunds.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  style={{
                    background: index === 0 ? '#60a5fa' :
                               index === 1 ? '#4ade80' :
                               index === 2 ? '#fbbf24' : '#c084fc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: '#0f172a', fontWeight: 'bold' }}>
                    {item.percentage}%
                  </span>
                </motion.div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '0.5rem' }}>
              {useOfFunds.map((item, index) => (
                <div key={item.category} style={{ fontSize: '0.75rem' }}>
                  <span style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '2px',
                    background: index === 0 ? '#60a5fa' :
                               index === 1 ? '#4ade80' :
                               index === 2 ? '#fbbf24' : '#c084fc',
                    marginRight: '0.25rem'
                  }} />
                  <span style={{ color: '#e2e8f0' }}>{item.category}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Investor Benefits Grid with Breathing Hover States */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          {investorBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.03, y: -5 }}
              onHoverStart={() => setHoveredBenefit(index)}
              onHoverEnd={() => setHoveredBenefit(null)}
              style={{
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: `1px solid ${benefit.color}40`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Particle Halo Effect on Hover */}
              {hoveredBenefit === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    background: `radial-gradient(circle, ${benefit.color}30, transparent)`,
                    filter: 'blur(25px)',
                    zIndex: -1
                  }}
                />
              )}

              {/* Breathing Icon */}
              <motion.div
                animate={{
                  scale: hoveredBenefit === index ? [1, 1.2, 1] : 1,
                  rotate: hoveredBenefit === index ? [0, 5, 0] : 0
                }}
                transition={{ duration: 2, repeat: hoveredBenefit === index ? Infinity : 0 }}
                style={{
                  display: 'inline-flex',
                  padding: '0.75rem',
                  background: `${benefit.color}15`,
                  borderRadius: '12px',
                  marginBottom: '1rem'
                }}
              >
                <benefit.icon size={24} color={benefit.color} />
              </motion.div>

              <p style={{
                fontSize: '1rem',
                color: '#e2e8f0',
                fontWeight: '500',
                lineHeight: '1.5'
              }}>
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Next Steps Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          style={{
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            marginBottom: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Active Step Indicator */}
          <motion.div
            animate={{
              left: `${activeStep * 25}%`
            }}
            transition={{ duration: 0.5, type: 'spring' }}
            style={{
              position: 'absolute',
              bottom: 0,
              width: '25%',
              height: '3px',
              background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
              borderRadius: '3px'
            }}
          />

          <h4 style={{ 
            color: '#fbbf24', 
            marginBottom: '1.5rem', 
            fontSize: '1.2rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Rocket size={24} />
            Next Steps Timeline
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  padding: '1rem',
                  background: index === activeStep ? 
                    'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.2))' : 
                    'rgba(255, 255, 255, 0.02)',
                  borderRadius: '12px',
                  border: `1px solid ${index === activeStep ? '#fbbf24' : 'rgba(251, 191, 36, 0.2)'}`,
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                {/* Step Icon with Breathing Animation */}
                <motion.div
                  animate={{ 
                    scale: index === activeStep ? [1, 1.1, 1] : 1,
                    rotate: index === activeStep ? [0, 5, 0] : 0
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: '40px',
                    height: '40px',
                    margin: '0 auto 0.75rem',
                    background: `linear-gradient(135deg, ${index === activeStep ? '#fbbf24' : '#64748b'}, ${index === activeStep ? '#f59e0b' : '#475569'})`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <step.icon size={20} color="#fff" />
                </motion.div>

                <h5 style={{ 
                  color: index === activeStep ? '#fbbf24' : '#e2e8f0',
                  fontSize: '0.95rem',
                  fontWeight: 'bold',
                  marginBottom: '0.25rem'
                }}>
                  {step.phase}
                </h5>
                
                <p style={{ 
                  color: '#94a3b8',
                  fontSize: '0.8rem'
                }}>
                  {step.duration}
                </p>

                {/* Connecting Line */}
                {index < nextSteps.length - 1 && (
                  <motion.div
                    animate={{ 
                      opacity: index < activeStep ? 1 : 0.3,
                      scaleX: index < activeStep ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      top: '30px',
                      right: '-0.5rem',
                      width: '1rem',
                      height: '2px',
                      background: '#fbbf24',
                      transformOrigin: 'left'
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bold CTA Ribbon with Pulse Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.8, type: 'spring', stiffness: 100 }}
          style={{
            background: 'linear-gradient(135deg, #10b981, #059669)',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Pulse Wave Animation */}
          <motion.div
            animate={{
              scale: [1, 2, 3],
              opacity: [0.5, 0.2, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent)'
            }}
          />

          <motion.h3
            animate={{ scale: pulseAnimation ? 1 : 1.05 }}
            transition={{ duration: 0.5 }}
            style={{ 
              fontSize: '2rem', 
              color: '#fff',
              marginBottom: '1rem',
              fontWeight: 'bold',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
            }}
          >
            Let's Build the Future Together
          </motion.h3>
          
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#fff', 
            marginBottom: '2rem',
            opacity: 0.95,
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Join us in creating the AI-powered wealth management platform that will serve 
            millions of investors globally
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: pulseAnimation ? 
                  '0 10px 40px rgba(255, 255, 255, 0.3)' : 
                  '0 5px 20px rgba(255, 255, 255, 0.2)'
              }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '1rem 2.5rem',
                background: '#fff',
                borderRadius: '12px',
                color: '#059669',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Schedule Deep Dive <ChevronRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2.5rem',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer'
              }}
            >
              Request Data Room
            </motion.button>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{
            marginTop: '2rem',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: '#94a3b8'
          }}
        >
          <p>
            Contact: founders@aifamilyoffice.ai | +1 (555) 123-4567 | www.aifamilyoffice.ai
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}