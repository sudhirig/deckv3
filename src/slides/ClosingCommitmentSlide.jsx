import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import CircularProgress from '../components/CircularProgress'
import { Rocket, Target, Clock, HandshakeIcon, ChevronRight, Star, DollarSign, TrendingUp, Award, Shield } from 'lucide-react'
import { pxToRem, SPACING, TYPOGRAPHY } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
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
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #1a1c3d 0%, #0f1629 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background animation */}
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
          zIndex: 0
        }}
      />
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          padding: `${pxToRem(20)} ${pxToRem(32)}`,
          position: 'relative',
          zIndex: 1
        }}
      >
        <h1 style={{ 
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          marginBottom: pxToRem(6)
        }}>
          <GradientText gradient="from-purple-400 via-pink-400 to-red-400">
            Join Us in Revolutionizing Wealth Management
          </GradientText>
        </h1>
        <p style={{ 
          fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)',
          color: '#94a3b8'
        }}>
          The opportunity to define the future of AI-powered finance
        </p>
      </motion.div>
      
      {/* Main Content Grid */}
      <div style={{
        flex: 1,
        padding: `0 ${pxToRem(32)} ${pxToRem(24)}`,
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(1rem, 2vw, 2rem)',
          maxWidth: pxToRem(1100),
          margin: '0 auto',
          width: '100%',
          height: '100%'
        }}>
          {/* Left side - Investment Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(0.75rem, 1.5vw, 1rem)'
            }}
          >
            {/* Investment Opportunity */}
            <div className="glass-card" style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1))',
              padding: 'clamp(0.75rem, 1.5vw, 1.25rem)'
            }}>
              <h3 style={{ 
                color: '#ec4899', 
                marginBottom: pxToRem(8), 
                fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' 
              }}>
                Investment Opportunity
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: pxToRem(12) }}>
                <div>
                  <div style={{ 
                    color: '#94a3b8',
                    fontSize: 'clamp(0.7rem, 1vw, 0.85rem)'
                  }}>Raise Amount</div>
                  <div style={{ 
                    fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', 
                    fontWeight: 'bold', 
                    color: '#ec4899' 
                  }}>
                    ${askDetails.raise}M
                  </div>
                </div>
                <div>
                  <div style={{ 
                    color: '#94a3b8',
                    fontSize: 'clamp(0.7rem, 1vw, 0.85rem)'
                  }}>Pre-Money</div>
                  <div style={{ 
                    fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', 
                    fontWeight: 'bold', 
                    color: '#8b5cf6' 
                  }}>
                    ${askDetails.valuation}M
                  </div>
                </div>
              </div>
            </div>

            {/* Use of Funds */}
            <div className="glass-card" style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))',
              padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
              flex: 1
            }}>
              <h4 style={{ 
                color: '#10b981', 
                marginBottom: pxToRem(8), 
                fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' 
              }}>
                Strategic Deployment
              </h4>
              {useOfFunds.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  style={{ marginBottom: pxToRem(10) }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: pxToRem(3),
                    alignItems: 'center'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: pxToRem(6)
                    }}>
                      <item.icon size={14} color={item.color} />
                      <span style={{ 
                        color: '#e2e8f0',
                        fontSize: 'clamp(0.7rem, 1vw, 0.85rem)'
                      }}>
                        {item.category}
                      </span>
                    </div>
                    <span style={{ 
                      color: item.color, 
                      fontWeight: 'bold',
                      fontSize: 'clamp(0.7rem, 1vw, 0.85rem)'
                    }}>
                      {item.percentage}%
                    </span>
                  </div>
                  <div style={{ 
                    height: pxToRem(3), 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    borderRadius: pxToRem(2),
                    overflow: 'hidden'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      style={{
                        height: '100%',
                        background: item.color
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Benefits & Next Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(0.75rem, 1.5vw, 1rem)'
            }}
          >
            {/* Investor Benefits */}
            <div className="glass-card" style={{
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))',
              padding: 'clamp(0.75rem, 1.5vw, 1.25rem)'
            }}>
              <h4 style={{ 
                color: '#fbbf24', 
                marginBottom: pxToRem(8), 
                fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' 
              }}>
                Why Invest Now
              </h4>
              {investorBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: pxToRem(10),
                    padding: 'clamp(0.5rem, 1vw, 0.75rem)',
                    marginBottom: pxToRem(6),
                    background: hoveredBenefit === index ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    borderRadius: pxToRem(6),
                    transition: 'all 0.3s ease'
                  }}
                >
                  <benefit.icon size={16} color={benefit.color} />
                  <span style={{ 
                    color: '#e2e8f0',
                    fontSize: 'clamp(0.7rem, 1vw, 0.85rem)'
                  }}>
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Next Steps Timeline */}
            <div className="glass-card" style={{
              background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(59, 130, 246, 0.1))',
              padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h4 style={{ 
                color: '#3b82f6', 
                marginBottom: pxToRem(8), 
                fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' 
              }}>
                Next Steps
              </h4>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                flex: 1
              }}>
                {nextSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    style={{
                      textAlign: 'center',
                      opacity: activeStep === index ? 1 : 0.5,
                      transform: activeStep === index ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <motion.div
                      animate={{ 
                        scale: activeStep === index ? [1, 1.15, 1] : 1
                      }}
                      transition={{ duration: 1, repeat: activeStep === index ? Infinity : 0 }}
                    >
                      <step.icon size={20} color="#3b82f6" style={{ margin: `0 auto ${pxToRem(4)}` }} />
                    </motion.div>
                    <div style={{ 
                      color: '#e2e8f0', 
                      fontWeight: 'bold',
                      fontSize: 'clamp(0.7rem, 1vw, 0.85rem)'
                    }}>
                      {step.phase}
                    </div>
                    <div style={{ 
                      fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)', 
                      color: '#64748b', 
                      marginTop: pxToRem(2) 
                    }}>
                      {step.duration}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}