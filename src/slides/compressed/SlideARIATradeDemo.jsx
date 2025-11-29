import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { 
  Zap, 
  TrendingUp, 
  Mic, 
  BarChart3, 
  Shield, 
  ArrowRight,
  Activity,
  Check,
  LineChart,
  Brain,
  Send
} from 'lucide-react'

/**
 * SlideARIATradeDemo - ARIA Trade slide
 * Original layout with modern slide 11 styling
 */
const SlideARIATradeDemo = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [demoLine, setDemoLine] = useState(0)

  const steps = [
    { icon: LineChart, label: 'Zerodha Kite', color: '#8B5CF6' },
    { icon: Brain, label: 'ARIA Analysis', color: '#14B8A6' },
    { icon: Send, label: 'Execution', color: '#10B981' }
  ]

  const demoLines = [
    { text: '→ Analyzing RELIANCE chart patterns...', color: '#94A3B8' },
    { text: '→ RSI: 65 | MACD: Bullish crossover', color: '#94A3B8' },
    { text: '→ Support: ₹2,850 | Resistance: ₹2,920', color: '#94A3B8' },
    { text: '✓ BUY signal generated @ ₹2,875', color: '#10B981' }
  ]

  const capabilities = [
    { icon: BarChart3, title: 'Pattern Recognition', desc: '5,000+ securities', color: '#8B5CF6' },
    { icon: Mic, title: 'Voice Trading', desc: 'Hindi • Gujarati • English', color: '#14B8A6' },
    { icon: TrendingUp, title: 'Smart Routing', desc: 'AI-optimized execution', color: '#F59E0B' },
    { icon: Shield, title: 'Risk Management', desc: 'Auto stop-loss', color: '#EC4899' }
  ]

  // Animate through steps
  useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(stepTimer)
  }, [])

  // Animate demo lines
  useEffect(() => {
    const lineTimer = setInterval(() => {
      setDemoLine(prev => (prev + 1) % (demoLines.length + 1))
    }, 1200)
    return () => clearInterval(lineTimer)
  }, [])

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2.5rem 3.5rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}
        >
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '20px',
            padding: '0.4rem 1rem',
            marginBottom: '1rem'
          }}>
            <Zap size={16} color="#F59E0B" />
            <span style={{ color: '#F59E0B', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.05em' }}>
              ARIA TRADE
            </span>
          </div>
          
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            Live Trading Platform
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8' }}>
            AI-powered Zerodha integration with <span style={{ color: '#10B981', fontWeight: '700' }}>11ms</span> execution latency
          </p>
        </motion.div>

        {/* Main Content - Two Columns */}
        <div style={{ 
          flex: 1, 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '2rem',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Left: Animated Flow + Demo Terminal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Integration Flow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                borderRadius: '16px',
                padding: '1.5rem',
                border: '2px solid rgba(139, 92, 246, 0.3)'
              }}
            >
              <p style={{ fontSize: '0.8rem', color: '#8B5CF6', marginBottom: '1rem', fontWeight: '700', letterSpacing: '0.1em' }}>
                INTEGRATION FLOW
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {steps.map((step, i) => {
                  const StepIcon = step.icon
                  return (
                    <React.Fragment key={step.label}>
                      <motion.div
                        animate={{ 
                          scale: activeStep === i ? 1.08 : 1,
                          opacity: activeStep >= i ? 1 : 0.5
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          textAlign: 'center',
                          padding: '1.25rem 1.75rem',
                          background: activeStep === i ? `${step.color}15` : 'transparent',
                          borderRadius: '16px',
                          border: activeStep === i ? `2px solid ${step.color}40` : '2px solid transparent',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '14px',
                          background: `${step.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 0.75rem auto'
                        }}>
                          <StepIcon size={28} color={step.color} strokeWidth={2} />
                        </div>
                        <p style={{ 
                          fontSize: '1rem', 
                          fontWeight: '700', 
                          color: activeStep === i ? step.color : '#94A3B8',
                          margin: 0
                        }}>
                          {step.label}
                        </p>
                      </motion.div>
                      {i < 2 && (
                        <motion.div
                          animate={{ opacity: activeStep > i ? 1 : 0.3 }}
                        >
                          <ArrowRight size={24} color={activeStep > i ? '#10B981' : '#4B5563'} />
                        </motion.div>
                      )}
                    </React.Fragment>
                  )
                })}
              </div>
            </motion.div>

            {/* Live Demo Terminal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                flex: 1,
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.8))',
                borderRadius: '16px',
                padding: '1.5rem',
                border: '2px solid rgba(20, 184, 166, 0.3)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Terminal Header */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                marginBottom: '1.25rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(20, 184, 166, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Activity size={18} color="#14B8A6" />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#14B8A6', letterSpacing: '0.1em' }}>LIVE DEMO</span>
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#10B981',
                    boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)',
                    marginLeft: 'auto'
                  }}
                />
              </div>
              
              {/* Terminal Content */}
              <div style={{ 
                flex: 1, 
                fontFamily: '"SF Mono", "Fira Code", monospace', 
                fontSize: '1rem',
                lineHeight: 1.6
              }}>
                <AnimatePresence mode="wait">
                  {demoLines.slice(0, demoLine).map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      style={{ 
                        color: line.color, 
                        marginBottom: '0.6rem',
                        padding: '0.25rem 0'
                      }}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {demoLine <= demoLines.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    style={{ color: '#10B981', fontSize: '1.1rem' }}
                  >
                    █
                  </motion.span>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right: Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              alignContent: 'start'
            }}
          >
            {capabilities.map((cap, i) => {
              const Icon = cap.icon
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{
                    background: 'rgba(30, 41, 59, 0.6)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    border: `2px solid ${cap.color}30`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: `${cap.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <Icon size={28} color={cap.color} />
                  </div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '700', 
                    color: '#FFFFFF',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {cap.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#94A3B8', margin: 0 }}>
                    {cap.desc}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '1.5rem',
            padding: '1.25rem 2rem',
            background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.15), rgba(20, 184, 166, 0.1))',
            borderRadius: '14px',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          {[
            { title: 'Production Live', sub: 'Real trading', isLive: true },
            { title: '11ms', sub: 'Voice Latency', isLive: false },
            { title: '5,000+', sub: 'Securities', isLive: false },
            { title: '0-100', sub: 'ELIVATE Score', isLive: false }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {item.isLive ? (
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 12px rgba(16, 185, 129, 0.6)'
                }} />
              ) : (
                <Check size={20} color="#F59E0B" strokeWidth={3} />
              )}
              <div>
                <p style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '700', 
                  color: item.isLive ? '#10B981' : '#FFFFFF', 
                  margin: 0 
                }}>
                  {item.title}
                </p>
                <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: 0 }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideARIATradeDemo
