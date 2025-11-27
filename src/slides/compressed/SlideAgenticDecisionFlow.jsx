import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { Brain, TrendingUp, TrendingDown, Minus, Shield, Target, ArrowRight, Zap, BarChart3, Activity } from 'lucide-react'

/**
 * SlideAgenticDecisionFlow - World-Class UI/UX
 * "How ARIA Makes Decisions"
 * Shows the agentic flow: Analysts → Risk Manager → Portfolio Manager → Execution
 */
const SlideAgenticDecisionFlow = () => {
  const [activeStep, setActiveStep] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 5)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const analystAgents = [
    { name: 'Warren Buffett', style: 'Value Investing', signal: 'bullish', confidence: 75 },
    { name: 'Ben Graham', style: 'Deep Value', signal: 'bullish', confidence: 80 },
    { name: 'Cathie Wood', style: 'Disruptive Innovation', signal: 'bearish', confidence: 45 },
    { name: 'Phil Fisher', style: 'Growth', signal: 'bullish', confidence: 70 },
    { name: 'Ray Dalio', style: 'All-Weather', signal: 'neutral', confidence: 55 },
    { name: 'Stan Druckenmiller', style: 'Macro Trading', signal: 'bullish', confidence: 65 }
  ]

  const getSignalColor = (signal) => {
    if (signal === 'bullish') return '#10B981'
    if (signal === 'bearish') return '#EF4444'
    return '#F59E0B'
  }

  const getSignalIcon = (signal) => {
    if (signal === 'bullish') return TrendingUp
    if (signal === 'bearish') return TrendingDown
    return Minus
  }

  const steps = [
    { label: 'Start', sublabel: 'Market Data' },
    { label: 'Pick Agents', sublabel: 'Strategy Selection' },
    { label: 'Trading Signals', sublabel: 'Analysis Complete' },
    { label: 'Risk Signals', sublabel: 'Risk Assessment' },
    { label: 'Take Action', sublabel: 'Execute Trade' }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #0a0f1b 0%, #0f172a 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 2rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(20, 184, 166, 0.15)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '20px',
            padding: '0.3rem 0.8rem',
            marginBottom: '0.5rem'
          }}>
            <Brain size={14} color="#14B8A6" />
            <span style={{ color: '#14B8A6', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.05em' }}>
              ARIA AI • DECISION ENGINE
            </span>
          </div>
          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.25rem'
          }}>
            AI TRADING DECISION FLOW
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
            How 68+ agents collaborate to make optimal investment decisions
          </p>
        </motion.div>

        {/* Flow Steps Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '1.25rem'
          }}
        >
          {steps.map((step, i) => (
            <div key={step.label} style={{ display: 'flex', alignItems: 'center' }}>
              <motion.div
                animate={{
                  background: i <= activeStep ? '#14B8A6' : 'rgba(100, 116, 139, 0.3)',
                  scale: i === activeStep ? 1.1 : 1
                }}
                style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: '20px',
                  border: i <= activeStep ? '1px solid #14B8A6' : '1px solid rgba(100, 116, 139, 0.3)'
                }}
              >
                <span style={{
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  color: i <= activeStep ? '#0F172A' : '#64748B'
                }}>
                  {i + 1}. {step.label}
                </span>
              </motion.div>
              {i < steps.length - 1 && (
                <ArrowRight size={14} color={i < activeStep ? '#14B8A6' : '#334155'} style={{ margin: '0 0.25rem' }} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Main Flow Visualization */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 0.3fr 1fr 0.3fr 1fr 0.3fr 0.8fr',
          gap: '0.5rem',
          flex: 1,
          alignItems: 'center'
        }}>
          {/* Analyst Agents Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'rgba(20, 184, 166, 0.05)',
              border: '1px solid rgba(20, 184, 166, 0.2)',
              borderRadius: '16px',
              padding: '0.75rem',
              height: '100%'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <BarChart3 size={16} color="#14B8A6" />
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#14B8A6' }}>ANALYST AGENTS</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {analystAgents.map((agent, i) => {
                const SignalIcon = getSignalIcon(agent.signal)
                return (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    style={{
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(100, 116, 139, 0.2)',
                      borderRadius: '8px',
                      padding: '0.4rem 0.6rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <p style={{ fontSize: '0.65rem', fontWeight: '700', color: '#E2E8F0', margin: 0 }}>{agent.name}</p>
                      <p style={{ fontSize: '0.5rem', color: '#64748B', margin: 0 }}>{agent.style}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <span style={{
                        fontSize: '0.55rem',
                        padding: '0.15rem 0.35rem',
                        borderRadius: '4px',
                        background: `${getSignalColor(agent.signal)}20`,
                        color: getSignalColor(agent.signal),
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        {agent.signal}
                      </span>
                      <span style={{ fontSize: '0.55rem', color: '#94A3B8' }}>{agent.confidence}%</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Arrow 1 */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={24} color="#14B8A6" />
            </motion.div>
          </div>

          {/* Risk Manager */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              background: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '16px',
              padding: '1rem',
              height: 'fit-content'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: 'rgba(239, 68, 68, 0.2)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Shield size={20} color="#EF4444" />
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: '700', color: '#EF4444', margin: 0 }}>RISK MANAGER</p>
                <p style={{ fontSize: '0.6rem', color: '#64748B', margin: 0 }}>Aggregates & Validates</p>
              </div>
            </div>
            
            <div style={{
              background: 'rgba(15, 23, 42, 0.8)',
              borderRadius: '10px',
              padding: '0.75rem',
              marginBottom: '0.5rem'
            }}>
              <p style={{ fontSize: '0.6rem', color: '#94A3B8', margin: '0 0 0.3rem 0' }}>Consensus Signal</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={18} color="#10B981" />
                <span style={{ fontSize: '1rem', fontWeight: '800', color: '#10B981' }}>BULLISH</span>
                <span style={{ fontSize: '0.7rem', color: '#64748B' }}>4/6 agents</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div style={{ flex: 1, background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', padding: '0.4rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: '700', color: '#10B981', margin: 0 }}>68%</p>
                <p style={{ fontSize: '0.5rem', color: '#64748B', margin: 0 }}>CONFIDENCE</p>
              </div>
              <div style={{ flex: 1, background: 'rgba(245, 158, 11, 0.1)', borderRadius: '6px', padding: '0.4rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: '700', color: '#F59E0B', margin: 0 }}>LOW</p>
                <p style={{ fontSize: '0.5rem', color: '#64748B', margin: 0 }}>RISK LEVEL</p>
              </div>
            </div>
          </motion.div>

          {/* Arrow 2 */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
              <ArrowRight size={24} color="#8B5CF6" />
            </motion.div>
          </div>

          {/* Portfolio Manager */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              background: 'rgba(139, 92, 246, 0.05)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '16px',
              padding: '1rem',
              height: 'fit-content'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: 'rgba(139, 92, 246, 0.2)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Target size={20} color="#8B5CF6" />
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: '700', color: '#8B5CF6', margin: 0 }}>PORTFOLIO MGR</p>
                <p style={{ fontSize: '0.6rem', color: '#64748B', margin: 0 }}>Final Decision</p>
              </div>
            </div>
            
            <div style={{
              background: 'rgba(15, 23, 42, 0.8)',
              borderRadius: '10px',
              padding: '0.75rem',
              marginBottom: '0.5rem'
            }}>
              <p style={{ fontSize: '0.6rem', color: '#94A3B8', margin: '0 0 0.3rem 0' }}>Decision</p>
              <div style={{
                background: 'linear-gradient(135deg, #10B981, #059669)',
                borderRadius: '8px',
                padding: '0.5rem',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#FFFFFF' }}>BUY</span>
              </div>
            </div>

            <div style={{ background: 'rgba(139, 92, 246, 0.1)', borderRadius: '6px', padding: '0.4rem' }}>
              <p style={{ fontSize: '0.6rem', color: '#8B5CF6', margin: 0, fontWeight: '600' }}>Position Size: 2.5%</p>
              <p style={{ fontSize: '0.5rem', color: '#64748B', margin: '0.15rem 0 0 0' }}>Within risk limits</p>
            </div>
          </motion.div>

          {/* Arrow 3 */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            >
              <ArrowRight size={24} color="#F59E0B" />
            </motion.div>
          </div>

          {/* Execution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              background: 'rgba(245, 158, 11, 0.05)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              borderRadius: '16px',
              padding: '0.75rem',
              height: 'fit-content'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <Zap size={16} color="#F59E0B" />
              <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#F59E0B' }}>EXECUTION</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              {['BUY', 'COVER', 'SELL', 'SHORT', 'HOLD'].map((action, i) => (
                <motion.div
                  key={action}
                  animate={{
                    background: action === 'BUY' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(30, 41, 59, 0.6)',
                    borderColor: action === 'BUY' ? '#10B981' : 'rgba(100, 116, 139, 0.2)'
                  }}
                  style={{
                    padding: '0.3rem 0.5rem',
                    borderRadius: '6px',
                    border: '1px solid',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  {action === 'BUY' && <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} style={{ width: '6px', height: '6px', background: '#10B981', borderRadius: '50%' }} />}
                  <span style={{
                    fontSize: '0.6rem',
                    fontWeight: '700',
                    color: action === 'BUY' ? '#10B981' : action === 'SELL' || action === 'SHORT' ? '#EF4444' : '#64748B'
                  }}>
                    {action}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: '0.75rem',
            padding: '0.5rem 1rem',
            background: 'rgba(20, 184, 166, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem'
          }}
        >
          <Activity size={16} color="#14B8A6" />
          <span style={{ fontSize: '0.75rem', color: '#14B8A6', fontWeight: '600' }}>
            Real-time decisions in 11ms • No human intervention required • 24/7 automated execution
          </span>
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideAgenticDecisionFlow
