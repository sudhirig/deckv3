import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HeroLayout } from '../components/StandardLayouts'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import CircularProgress from '../components/CircularProgress'
import { Rocket, Target, Clock, HandshakeIcon, ChevronRight, Star, DollarSign, TrendingUp, Award, Shield } from 'lucide-react'
import { pxToRem, SPACING, TYPOGRAPHY } from '../utils/responsive'
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

  // Title
  const title = (
    <GradientText gradient="from-purple-400 via-pink-400 to-red-400">
      Join Us in Revolutionizing Wealth Management
    </GradientText>
  )

  // Subtitle
  const subtitle = "The opportunity to define the future of AI-powered finance"

  // Background
  const backgroundContent = (
    <>
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
    </>
  )

  // Overlay content
  const overlayContent = (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr',
      gap: SPACING.lg,
      maxWidth: pxToRem(1100),
      margin: '0 auto'
    }}>
      {/* Left side - Investment Details */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="glass-card responsive-padding-md" style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1))',
          marginBottom: SPACING.md
        }}>
          <h3 style={{ color: '#ec4899', marginBottom: SPACING.sm, fontSize: TYPOGRAPHY.subheadline }}>
            Investment Opportunity
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACING.sm }}>
            <div>
              <div className="responsive-text-sm" style={{ color: '#94a3b8' }}>Raise Amount</div>
              <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#ec4899' }}>
                ${askDetails.raise}M
              </div>
            </div>
            <div>
              <div className="responsive-text-sm" style={{ color: '#94a3b8' }}>Pre-Money</div>
              <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#8b5cf6' }}>
                ${askDetails.valuation}M
              </div>
            </div>
          </div>
        </div>

        {/* Use of Funds */}
        <div className="glass-card responsive-padding-md" style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))'
        }}>
          <h4 style={{ color: '#10b981', marginBottom: SPACING.sm, fontSize: TYPOGRAPHY.body }}>
            Strategic Deployment
          </h4>
          {useOfFunds.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              style={{ marginBottom: pxToRem(12) }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: pxToRem(4) }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: SPACING.xs }}>
                  <item.icon size={16} color={item.color} />
                  <span className="responsive-text-sm" style={{ color: '#e2e8f0' }}>
                    {item.category}
                  </span>
                </div>
                <span style={{ color: item.color, fontWeight: 'bold' }}>
                  {item.percentage}%
                </span>
              </div>
              <div style={{ 
                height: pxToRem(4), 
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
      >
        {/* Investor Benefits */}
        <div className="glass-card responsive-padding-md" style={{
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))',
          marginBottom: SPACING.md
        }}>
          <h4 style={{ color: '#fbbf24', marginBottom: SPACING.sm, fontSize: TYPOGRAPHY.body }}>
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
                gap: pxToRem(12),
                padding: pxToRem(12),
                marginBottom: SPACING.xs,
                background: hoveredBenefit === index ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                borderRadius: pxToRem(8),
                transition: 'all 0.3s ease'
              }}
            >
              <benefit.icon size={20} color={benefit.color} />
              <span className="responsive-text-sm" style={{ color: '#e2e8f0' }}>
                {benefit.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Next Steps Timeline */}
        <div className="glass-card responsive-padding-md" style={{
          background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(59, 130, 246, 0.1))'
        }}>
          <h4 style={{ color: '#3b82f6', marginBottom: SPACING.sm, fontSize: TYPOGRAPHY.body }}>
            Next Steps
          </h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                style={{
                  textAlign: 'center',
                  opacity: activeStep === index ? 1 : 0.5,
                  transform: activeStep === index ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <motion.div
                  animate={{ 
                    scale: activeStep === index ? [1, 1.2, 1] : 1
                  }}
                  transition={{ duration: 1, repeat: activeStep === index ? Infinity : 0 }}
                >
                  <step.icon size={24} color="#3b82f6" style={{ margin: `0 auto ${SPACING.xs}` }} />
                </motion.div>
                <div className="responsive-text-sm" style={{ color: '#e2e8f0', fontWeight: 'bold' }}>
                  {step.phase}
                </div>
                <div style={{ fontSize: TYPOGRAPHY.body, color: '#64748b', marginTop: pxToRem(4) }}>
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )

  return (
    <HeroLayout
      title={title}
      subtitle={subtitle}
      backgroundContent={backgroundContent}
      overlayContent={overlayContent}
    />
  )
}