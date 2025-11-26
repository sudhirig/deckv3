import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { 
  DollarSign, TrendingUp, Globe, Shield, Brain, Users, 
  Calculator, FileText, CheckCircle, ArrowRight, Sparkles,
  Activity, Target, Award
} from 'lucide-react'
import './SlideStyles.css'

export default function ARIALiquidityEventSlide() {
  const [activeStep, setActiveStep] = useState(0)
  const [showResults, setShowResults] = useState(false)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => {
        if (prev >= 5) {
          setShowResults(true)
          clearInterval(timer)
          return 5
        }
        return prev + 1
      })
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  const title = (
    <GradientText gradient="from-emerald-400 to-teal-400">
      ARIA at Work: $25M Liquidity Event
    </GradientText>
  )

  const metrics = [
    {
      icon: DollarSign,
      value: 25,
      prefix: '$',
      suffix: 'M',
      label: 'Liquidity Event',
      color: '#10b981',
      description: 'Startup acquisition proceeds requiring sophisticated planning'
    },
    {
      icon: Calculator,
      value: 5.2,
      prefix: '$',
      suffix: 'M',
      label: 'Tax Saved',
      color: '#14b8a6',
      description: 'Through QSBS optimization, installment sale, and opportunity zones'
    },
    {
      icon: Globe,
      value: 18,
      suffix: '%',
      label: 'IRR Achieved',
      color: '#06b6d4',
      description: 'Diversified across India, alternatives, and tax-advantaged strategies'
    }
  ]

  const workflowSteps = [
    {
      id: 0,
      phase: 'QUERY',
      title: 'Client Request',
      icon: '💬',
      content: '"I just sold my startup for $25M"',
      detail: 'Need tax optimization & global diversification',
      agents: [],
      color: '#3b82f6'
    },
    {
      id: 1,
      phase: 'ORCHESTRATE',
      title: 'ARIA Activates',
      icon: '🧠',
      content: 'CEO orchestrates specialist teams',
      detail: 'Deploys 12 agents in parallel',
      agents: ['CEO'],
      color: '#14b8a6'
    },
    {
      id: 2,
      phase: 'ANALYZE',
      title: 'Parallel Analysis',
      icon: '⚡',
      content: '4 teams work simultaneously',
      detail: 'Tax, India, Alts, Risk teams activated',
      agents: ['Tax', 'India', 'Alts', 'Risk'],
      color: '#8b5cf6'
    },
    {
      id: 3,
      phase: 'OPTIMIZE',
      title: 'Strategy Formation',
      icon: '🎯',
      content: 'Agents build unified plan',
      detail: 'QSBS + GIFT City + OZ structure',
      agents: ['Tax', 'Legal', 'Structure'],
      color: '#10b981'
    },
    {
      id: 4,
      phase: 'PRESENT',
      title: 'Recommendation',
      icon: '📊',
      content: 'Comprehensive plan delivered',
      detail: 'One-click approval to execute',
      agents: ['Presenter'],
      color: '#f59e0b'
    },
    {
      id: 5,
      phase: 'EXECUTE',
      title: 'Implementation',
      icon: '✅',
      content: 'Automated execution begins',
      detail: 'All trades and structures placed',
      agents: ['Executor', 'Monitor'],
      color: '#10b981'
    }
  ]

  const mainVisual = (
    <div style={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1.5rem',
      padding: '0.5rem'
    }}>
      {/* Subtitle */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: '600' }}>
          Watch ARIA transform a complex liquidity event into optimized wealth in 3.7 seconds
        </p>
      </div>

      {/* Workflow Timeline */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(20, 184, 166, 0.05) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(16, 185, 129, 0.2)',
        padding: '1.5rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {/* Progress Bar */}
        <div style={{
          height: '4px',
          background: 'rgba(30, 41, 59, 0.5)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '1rem'
        }}>
          <motion.div
            animate={{
              width: `${(activeStep + 1) * 16.66}%`
            }}
            transition={{ duration: 0.5 }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #10b981 0%, #14b8a6 100%)',
              borderRadius: '2px'
            }}
          />
        </div>

        {/* Workflow Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          {workflowSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: idx <= activeStep ? 1 : 0.3,
                y: 0,
                scale: idx === activeStep ? 1.05 : 1
              }}
              transition={{ delay: idx * 0.1 }}
              style={{
                background: idx <= activeStep 
                  ? `linear-gradient(135deg, ${step.color}15 0%, ${step.color}25 100%)`
                  : 'rgba(30, 41, 59, 0.3)',
                borderRadius: '8px',
                padding: '0.75rem',
                border: `1px solid ${idx === activeStep ? step.color : 'rgba(100, 116, 139, 0.2)'}`,
                textAlign: 'center',
                position: 'relative'
              }}
            >
              {/* Step Icon */}
              <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                {step.icon}
              </div>
              
              {/* Step Title */}
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '600',
                color: idx <= activeStep ? '#e2e8f0' : '#64748b',
                marginBottom: '0.25rem'
              }}>
                {step.title}
              </div>

              {/* Step Time */}
              <div style={{
                fontSize: '0.65rem',
                color: idx <= activeStep ? '#94a3b8' : '#475569'
              }}>
                {idx === 0 ? '0s' : `${(idx * 0.6).toFixed(1)}s`}
              </div>

              {/* Active Indicator */}
              {idx === activeStep && (
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity
                  }}
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: step.color
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Current Step Details */}
        <AnimatePresence mode="wait">
          {activeStep < workflowSteps.length && (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(51, 65, 85, 0.5) 100%)',
                borderRadius: '8px',
                padding: '1.25rem',
                border: '1px solid rgba(100, 116, 139, 0.3)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.75rem'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: workflowSteps[activeStep].color
                }}>
                  {workflowSteps[activeStep].phase}
                </h3>
                <div style={{
                  display: 'flex',
                  gap: '0.25rem'
                }}>
                  {workflowSteps[activeStep].agents.map((agent, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.25rem 0.5rem',
                        background: `${workflowSteps[activeStep].color}20`,
                        border: `1px solid ${workflowSteps[activeStep].color}40`,
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        color: '#e2e8f0'
                      }}
                    >
                      {agent}
                    </span>
                  ))}
                </div>
              </div>
              <p style={{
                fontSize: '0.95rem',
                color: '#e2e8f0',
                marginBottom: '0.5rem'
              }}>
                {workflowSteps[activeStep].content}
              </p>
              <p style={{
                fontSize: '0.85rem',
                color: '#94a3b8'
              }}>
                {workflowSteps[activeStep].detail}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Panel */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
                borderRadius: '8px',
                padding: '1.25rem',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                marginTop: 'auto'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                <Award size={20} color="#10b981" />
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#10b981'
                }}>
                  Execution Complete
                </h3>
                <Sparkles size={16} color="#10b981" />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>
                    Tax Savings
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#10b981' }}>
                    $5.2M
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>
                    India Allocation
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#14b8a6' }}>
                    10%
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>
                    Alt Assets
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#06b6d4' }}>
                    25%
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>
                    Time Taken
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#f59e0b' }}>
                    3.7s
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '1rem',
                padding: '0.75rem',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '6px',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#a7f3d0',
                  textAlign: 'center'
                }}>
                  What would take weeks with traditional advisors, ARIA completed in seconds
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
    />
  )
}
