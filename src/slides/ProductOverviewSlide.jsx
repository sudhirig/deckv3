import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import EditableWrapper from '../components/EditableWrapper'
import { useEditMode } from '../contexts/EditModeContext'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

// Animated counter component
function AnimatedCounter({ value, suffix = '', prefix = '', color }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const numValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''))
    const animation = animate(count, numValue, { duration: 2 })
    
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v)
    })

    return () => {
      animation.stop()
      unsubscribe()
    }
  }, [value, count, rounded])

  return (
    <div style={{ fontSize: 'clamp(1.4rem, 1.8vw, 1.8rem)', fontWeight: 'bold', color }}>
      {prefix}{displayValue}{suffix}
    </div>
  )
}

export default function ProductOverviewSlide() {
  const [hoveredModule, setHoveredModule] = useState(null)
  const [isAnimated, setIsAnimated] = useState(false)
  
  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const modules = [
    {
      title: 'Voice Trading',
      icon: 'zap',
      gradient: 'from-orange-400 to-amber-400',
      color: '#fb923c',
      bgGradient: 'rgba(249, 115, 22, 0.12), rgba(251, 191, 36, 0.08)',
      border: 'rgba(249, 115, 22, 0.25)',
      metrics: ['11ms latency', '3 languages', 'Zerodha API'],
      status: 'LIVE',
      statusColor: '#4ade80'
    },
    {
      title: 'CGMF Advisory',
      icon: 'trending',
      gradient: 'from-green-400 to-emerald-400',
      color: '#4ade80',
      bgGradient: 'rgba(34, 197, 94, 0.12), rgba(20, 184, 166, 0.08)',
      border: 'rgba(34, 197, 94, 0.25)',
      metrics: ['16,766 funds', '43 AMCs', 'AI picks'],
      status: 'LIVE',
      statusColor: '#4ade80'
    },
    {
      title: 'GIFT City',
      icon: 'globe',
      gradient: 'from-pink-400 to-rose-400',
      color: '#ec4899',
      bgGradient: 'rgba(236, 72, 153, 0.12), rgba(219, 39, 119, 0.08)',
      border: 'rgba(236, 72, 153, 0.25)',
      metrics: ['$5T TAM', 'Tax-free', 'Moat'],
      status: "Q1'25",
      statusColor: '#fbbf24'
    },
    {
      title: 'Algo Lab',
      icon: 'barChart',
      gradient: 'from-blue-400 to-cyan-400',
      color: '#60a5fa',
      bgGradient: 'rgba(59, 130, 246, 0.12), rgba(96, 165, 250, 0.08)',
      border: 'rgba(59, 130, 246, 0.25)',
      metrics: ['122 signals', 'Backtest', 'Risk mgmt'],
      status: 'LIVE',
      statusColor: '#4ade80'
    },
    {
      title: 'Sentiment Intel',
      icon: 'search',
      gradient: 'from-purple-400 to-pink-400',
      color: '#a78bfa',
      bgGradient: 'rgba(168, 85, 247, 0.12), rgba(139, 92, 246, 0.08)',
      border: 'rgba(168, 85, 247, 0.25)',
      metrics: ['182+ sources', 'FinBERT', 'Heat maps'],
      status: 'LIVE',
      statusColor: '#4ade80'
    },
    {
      title: 'AI Research',
      icon: 'fileText',
      gradient: 'from-teal-400 to-green-400',
      color: '#5eead4',
      bgGradient: 'rgba(20, 184, 166, 0.12), rgba(34, 197, 94, 0.08)',
      border: 'rgba(20, 184, 166, 0.25)',
      metrics: ['InvITs/REITs', 'PDF analysis', '+300bps'],
      status: 'LIVE',
      statusColor: '#4ade80'
    },
    {
      title: 'Tax Alpha',
      icon: 'wallet',
      gradient: 'from-yellow-400 to-orange-400',
      color: '#fbbf24',
      bgGradient: 'rgba(251, 191, 36, 0.12), rgba(249, 115, 22, 0.08)',
      border: 'rgba(251, 191, 36, 0.25)',
      metrics: ['+1.8% alpha', 'Daily harvest', 'Auto-switch'],
      status: "Q2'25",
      statusColor: '#fbbf24'
    }
  ]

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #0f1629 0%, #1a1c3d 100%)',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          padding: `${pxToRem(16)} ${pxToRem(32)} ${pxToRem(8)}`,
          position: 'relative',
          zIndex: 10
        }}
      >
        <EditableWrapper
          slideId="product-overview"
          elementId="main-title"
          type="text"
          isDraggable={false}
        >
          <h1 style={{ 
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            marginBottom: pxToRem(8)
          }}>
            <GradientText gradient="from-purple-400 via-blue-400 to-cyan-400">
              The Complete AI Family Office Suite
            </GradientText>
          </h1>
        </EditableWrapper>
        
        <EditableWrapper
          slideId="product-overview"
          elementId="subtitle"
          type="text"
          isDraggable={false}
        >
          <p style={{ 
            fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
            color: '#94a3b8',
            marginBottom: pxToRem(4)
          }}>
            7 Operational Modules • 68+ AI Agents • 100% Live Today
          </p>
        </EditableWrapper>
        
        <EditableWrapper
          slideId="product-overview"
          elementId="tagline"
          type="text"
          isDraggable={false}
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ 
              fontSize: 'clamp(1.1rem, 1.6vw, 1.4rem)',
              color: '#e9d5ff',
              fontWeight: 600,
              letterSpacing: '0.5px'
            }}
          >
            Everything You Need. One Platform. Infinite Alpha.
          </motion.p>
        </EditableWrapper>
      </motion.div>

      {/* Main Content Area - Split Layout */}
      <div style={{
        flex: 1,
        position: 'relative',
        padding: `0 ${pxToRem(32)}`,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        gap: '0',
        overflow: 'hidden'
      }}>
        {/* Left Section - 75% width for AI Command and Modules */}
        <div style={{
          position: 'relative',
          width: '75%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem',
          overflow: 'hidden'
        }}>
          {/* Circular Module Container */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            maxHeight: 'calc(100vh - 160px)',
            aspectRatio: '1.7 / 1'
          }}>
          {/* SVG for Animated Connection Lines */}
          <svg 
            viewBox="0 0 900 500"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 0
            }}
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.6)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Animated Connection Lines */}
            {modules.map((module, index) => {
              const angle = (index * 360 / modules.length - 90) * Math.PI / 180
              const radius = 160
              const centerX = 450
              const centerY = 250
              const endX = centerX + radius * Math.cos(angle)
              const endY = centerY + radius * Math.sin(angle)
              
              return (
                <g key={index}>
                  <motion.line
                    x1={centerX}
                    y1={centerY}
                    x2={endX}
                    y2={endY}
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isAnimated ? { pathLength: 0.7, opacity: 0.6 } : {}}
                    transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                  />
                  {/* Animated dots along the line */}
                  <circle
                    r="3"
                    fill="#9333ea"
                    filter="url(#glow)"
                  >
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      path={`M ${centerX} ${centerY} L ${endX} ${endY}`}
                    />
                  </circle>
                </g>
              )
            })}
          </svg>

          {/* Central AI Command Center */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}
          >
            <div style={{ 
              width: '200px',
              height: '200px',
              padding: '1.25rem',
              background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.1))',
              border: '2.5px solid rgba(147, 51, 234, 0.6)',
              borderRadius: '50%',
              boxShadow: '0 0 50px rgba(147, 51, 234, 0.5), inset 0 0 30px rgba(147, 51, 234, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {/* Pulsing rings */}
              <div style={{
                position: 'absolute',
                inset: '-15px',
                borderRadius: '50%',
                border: '2px solid rgba(147, 51, 234, 0.4)',
                animation: 'pulse 2s infinite'
              }} />
              <div style={{
                position: 'absolute',
                inset: '-30px',
                borderRadius: '50%',
                border: '1px solid rgba(147, 51, 234, 0.2)',
                animation: 'pulse 2s infinite 0.5s'
              }} />
              
              <Icon type="bot" size={40} variant="inline" gradient="from-purple-400 to-blue-400" />
              <h3 style={{ 
                fontSize: '1.2rem',
                color: '#e9d5ff',
                margin: '0.6rem 0 0.3rem',
                fontWeight: 700,
                textAlign: 'center'
              }}>
                AI Command
              </h3>
              <p style={{ 
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.9)',
                textAlign: 'center',
                margin: 0,
                lineHeight: '1.4'
              }}>
                68+ Agents<br/>
                Orchestrating 24/7
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                marginTop: '0.5rem'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  animation: 'pulse 2s infinite'
                }} />
                <span style={{ color: '#4ade80', fontSize: '0.9rem', fontWeight: 600 }}>LIVE</span>
              </div>
            </div>
          </motion.div>

            {/* Module Cards in Circular Arrangement */}
            {modules.map((module, index) => {
              const angle = (index * 360 / modules.length - 90) * Math.PI / 180
              const radius = 32  // Optimized radius for better fit
              const x = 50 + radius * Math.cos(angle)
              const y = 50 + radius * Math.sin(angle)
              
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + index * 0.1,
                    type: "spring"
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    zIndex: 20,
                    transition: { duration: 0.2 }
                  }}
                  onHoverStart={() => setHoveredModule(index)}
                  onHoverEnd={() => setHoveredModule(null)}
                  style={{
                    position: 'absolute',
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                    width: '160px',
                    zIndex: hoveredModule === index ? 15 : 5
                  }}
                >
                  <div style={{
                    padding: '1.1rem 0.9rem',
                    background: hoveredModule === index 
                      ? `linear-gradient(135deg, ${module.bgGradient.replace('0.12', '0.2').replace('0.08', '0.15')})` 
                      : `linear-gradient(135deg, ${module.bgGradient})`,
                    border: `2px solid ${module.border}`,
                    borderRadius: '12px',
                    backdropFilter: 'blur(12px)',
                    boxShadow: hoveredModule === index 
                      ? `0 10px 30px rgba(0, 0, 0, 0.4), 0 0 25px ${module.color}40`
                      : '0 4px 16px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                    <Icon type={module.icon} size={28} variant="inline" gradient={module.gradient} />
                    <h4 style={{ 
                      fontSize: '1.15rem', 
                      color: module.color, 
                      margin: '0.5rem 0 0.4rem', 
                      fontWeight: 700,
                      textAlign: 'center'
                    }}>
                      {module.title}
                    </h4>
                    <div style={{ 
                      fontSize: '0.85rem', 
                      color: 'rgba(255, 255, 255, 0.85)', 
                      lineHeight: '1.4',
                      textAlign: 'center'
                    }}>
                      {module.metrics.map((metric, i) => (
                        <div key={i} style={{ marginBottom: '2px' }}>• {metric}</div>
                      ))}
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.3rem', 
                      marginTop: '0.5rem' 
                    }}>
                      <div style={{ 
                        width: '7px', 
                        height: '7px', 
                        borderRadius: '50%', 
                        background: module.statusColor,
                        boxShadow: `0 0 6px ${module.statusColor}`
                      }} />
                      <span style={{ 
                        color: module.statusColor, 
                        fontSize: '0.8rem',
                        fontWeight: 600 
                      }}>
                        {module.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Vertical Separator Line */}
        <div style={{
          width: '1px',
          height: '80%',
          background: 'linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.3), rgba(147, 51, 234, 0.3), transparent)',
          alignSelf: 'center',
          margin: '0 1.5rem'
        }} />

        {/* Right Section - 25% width for Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          style={{ 
            width: '25%',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            justifyContent: 'flex-start',
            padding: '0.5rem 1rem',
            overflowY: 'auto',
            overflowX: 'hidden',
            maxHeight: '100%'
          }}
        >
          {/* Metrics Section */}
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {/* AUM */}
            <div style={{ 
              padding: '0.4rem 0.8rem',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))',
              borderRadius: '6px',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#60a5fa' }}>$10M</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase' }}>AUM</div>
            </div>
            
            {/* Clients */}
            <div style={{ 
              padding: '0.4rem 0.8rem',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))',
              borderRadius: '6px',
              border: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#4ade80' }}>5+</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase' }}>Clients</div>
            </div>
            
            {/* Outperformance */}
            <div style={{ 
              padding: '0.4rem 0.8rem',
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05))',
              borderRadius: '6px',
              border: '1px solid rgba(251, 191, 36, 0.2)'
            }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#fbbf24' }}>25%</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase' }}>Outperformance</div>
            </div>
            
            {/* Live Status */}
            <div style={{ 
              padding: '0.4rem 0.8rem',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))',
              borderRadius: '6px',
              border: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#4ade80' }}>100%</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase' }}>Live</div>
            </div>
          </div>

          {/* Moats Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.3rem'
          }}>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Competitive Moats
            </div>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '0.25rem'
            }}>
              <div style={{
                padding: '0.2rem 0.6rem',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent)',
                borderLeft: '2px solid #60a5fa',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <Icon type="lock" size={12} variant="inline" gradient="from-blue-400 to-cyan-400" />
                <span style={{ fontSize: '0.7rem', color: '#60a5fa' }}>Tech Moat</span>
              </div>
              
              <div style={{
                padding: '0.2rem 0.6rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), transparent)',
                borderLeft: '2px solid #4ade80',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <Icon type="scale" size={12} variant="inline" gradient="from-green-400 to-emerald-400" />
                <span style={{ fontSize: '0.7rem', color: '#4ade80' }}>Regulatory</span>
              </div>
              
              <div style={{
                padding: '0.2rem 0.6rem',
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), transparent)',
                borderLeft: '2px solid #5eead4',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <Icon type="shield" size={12} variant="inline" gradient="from-teal-400 to-green-400" />
                <span style={{ fontSize: '0.7rem', color: '#5eead4' }}>Trust</span>
              </div>
              
              <div style={{
                padding: '0.2rem 0.6rem',
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), transparent)',
                borderLeft: '2px solid #a78bfa',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <Icon type="sparkles" size={12} variant="inline" gradient="from-purple-400 to-pink-400" />
                <span style={{ fontSize: '0.7rem', color: '#a78bfa' }}>Patents Pending</span>
              </div>
            </div>
            
          </div>

          {/* Broker APIs Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.3rem'
          }}>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Broker APIs
            </div>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '0.2rem',
              fontSize: '0.7rem'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem'
              }}>
                <span style={{ color: '#4ade80' }}>✅</span>
                <span style={{ color: '#4ade80' }}>Zerodha</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem'
              }}>
                <span style={{ color: '#fbbf24' }}>⏳</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>IBKR</span>
                <span style={{ color: '#fbbf24', fontSize: '0.7rem', fontStyle: 'italic' }}>(Q1'25)</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem'
              }}>
                <span style={{ color: '#fbbf24' }}>⏳</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Alpaca</span>
                <span style={{ color: '#fbbf24', fontSize: '0.7rem', fontStyle: 'italic' }}>(Q2'25)</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div style={{ 
            marginTop: 'auto',
            paddingTop: '0.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ 
              fontSize: '0.65rem',
              color: 'rgba(255, 255, 255, 0.4)',
              textAlign: 'center'
            }}>
              <div style={{ marginBottom: '0.2rem' }}>Powered by</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.2' }}>
                NextJS • Python • AWS<br/>
                MongoDB • Claude AI • OpenAI
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}