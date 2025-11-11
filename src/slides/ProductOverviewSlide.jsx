import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useState, useEffect } from 'react'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
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
    
    const unsubscribe = rounded.onChange((v) => {
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
  // Calculate radial positions for modules (7 modules in a circle)
  const modulePositions = [
    { top: '8%', left: '50%', transform: 'translateX(-50%)' }, // Top center - Voice Trading
    { top: '25%', right: '12%', transform: 'none' }, // Top right - CGMF
    { top: '50%', right: '5%', transform: 'translateY(-50%)' }, // Right - GIFT City
    { bottom: '35%', right: '12%', transform: 'none' }, // Bottom right - Algo Lab
    { bottom: '18%', left: '50%', transform: 'translateX(-50%)' }, // Bottom center - Sentiment
    { bottom: '35%', left: '12%', transform: 'none' }, // Bottom left - AI Research
    { top: '50%', left: '5%', transform: 'translateY(-50%)' }, // Left - Tax Alpha
  ]

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
      overflow: 'hidden'
    }}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          padding: `${pxToRem(20)} ${pxToRem(32)} ${pxToRem(12)}`,
          position: 'relative',
          zIndex: 10
        }}
      >
        <h1 style={{ 
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          marginBottom: pxToRem(8)
        }}>
          <GradientText gradient="from-purple-400 via-blue-400 to-cyan-400">
            The Complete AI Family Office Suite
          </GradientText>
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
          color: '#94a3b8',
          marginBottom: pxToRem(4)
        }}>
          7 Operational Modules • 68+ AI Agents • 100% Live Today
        </p>
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
      </motion.div>

      {/* Main Content Area with Radial Layout */}
      <div style={{
        flex: 1,
        position: 'relative',
        padding: `0 ${pxToRem(32)}`,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Radial Module Container */}
        <div style={{
          position: 'relative',
          flex: 1,
          minHeight: '450px'
        }}>
          {/* Connection Lines SVG */}
          <svg style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1
          }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
              </linearGradient>
            </defs>
            {/* Lines will be drawn from center to each module */}
            {modulePositions.map((pos, index) => (
              <motion.line
                key={index}
                x1="50%"
                y1="50%"
                x2={pos.left || (pos.right ? `calc(100% - ${pos.right})` : '50%')}
                y2={pos.top || (pos.bottom ? `calc(100% - ${pos.bottom})` : '50%')}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="10"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </motion.line>
            ))}
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
              zIndex: 5
            }}
          >
            <div style={{ 
              width: '240px',
              height: '240px',
              padding: 'clamp(1.5rem, 2vw, 2rem)',
              background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.25), rgba(59, 130, 246, 0.15))',
              border: `${pxToRem(3)} solid rgba(147, 51, 234, 0.5)`,
              borderRadius: '50%',
              boxShadow: '0 0 40px rgba(147, 51, 234, 0.4), inset 0 0 20px rgba(147, 51, 234, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {/* Pulsing ring animation */}
              <div style={{
                position: 'absolute',
                top: '-3px',
                left: '-3px',
                right: '-3px',
                bottom: '-3px',
                borderRadius: '50%',
                border: '2px solid rgba(147, 51, 234, 0.5)',
                animation: 'pulseRing 2s infinite'
              }} />
              
              <Icon type="bot" size={40} variant="inline" gradient="from-purple-400 to-blue-400" />
              <h3 style={{ 
                fontSize: 'clamp(1rem, 1.3vw, 1.3rem)',
                color: '#e9d5ff',
                margin: '0.8rem 0 0.4rem',
                fontWeight: 700,
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                AI Command Center
              </h3>
              <div style={{
                fontSize: 'clamp(0.75rem, 0.9vw, 0.9rem)',
                color: '#c4b5fd',
                textAlign: 'center',
                fontWeight: 600,
                marginBottom: '0.5rem'
              }}>
                The AI Brain
              </div>
              <p style={{ 
                fontSize: 'clamp(0.8rem, 1vw, 1rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                textAlign: 'center',
                margin: 0,
                lineHeight: '1.5'
              }}>
                30 Specialized Agents<br/>
                12-Member Committee<br/>
                18 Hedge Fund Team
              </p>
              <div style={{
                fontSize: 'clamp(0.7rem, 0.85vw, 0.85rem)',
                color: '#a78bfa',
                marginTop: '0.8rem',
                fontWeight: 600
              }}>
                Orchestrating 24/7
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                marginTop: '0.5rem'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  animation: 'pulse 2s infinite',
                  boxShadow: '0 0 10px #4ade80'
                }} />
                <span style={{ color: '#4ade80', fontSize: 'clamp(0.8rem, 1vw, 1rem)', fontWeight: 600 }}>LIVE</span>
              </div>
            </div>
          </motion.div>

          {/* Radially Positioned Module Cards */}
          {modules.map((module, index) => {
            const position = modulePositions[index]
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                style={{
                  position: 'absolute',
                  ...position,
                  width: '180px',
                  zIndex: 2
                }}
              >
                <div style={{
                  padding: 'clamp(1rem, 1.3vw, 1.3rem)',
                  background: `linear-gradient(135deg, ${module.bgGradient})`,
                  border: `${pxToRem(1.5)} solid ${module.border}`,
                  borderRadius: pxToRem(12),
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <Icon type={module.icon} size={28} variant="inline" gradient={module.gradient} />
                  <h4 style={{ 
                    fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', 
                    color: module.color, 
                    margin: '0.6rem 0 0.5rem', 
                    fontWeight: 700,
                    textAlign: 'center'
                  }}>
                    {module.title}
                  </h4>
                  <div style={{ 
                    fontSize: 'clamp(0.8rem, 0.95vw, 0.95rem)', 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    lineHeight: '1.5',
                    textAlign: 'center'
                  }}>
                    {module.metrics.map((metric, i) => (
                      <div key={i}>• {metric}</div>
                    ))}
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.3rem', 
                    marginTop: '0.6rem' 
                  }}>
                    <div style={{ 
                      width: '7px', 
                      height: '7px', 
                      borderRadius: '50%', 
                      background: module.statusColor 
                    }} />
                    <span style={{ 
                      color: module.statusColor, 
                      fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)',
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

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(1rem, 1.5vh, 1.5rem)',
            marginTop: 'clamp(1rem, 1.5vh, 1.5rem)'
          }}
        >
          {/* Metrics Bar */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(2rem, 3vw, 3rem)',
            padding: 'clamp(1rem, 1.5vh, 1.5rem) clamp(1.5rem, 2vw, 2rem)',
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))',
            borderRadius: pxToRem(12),
            border: `${pxToRem(1)} solid rgba(59, 130, 246, 0.3)`
          }}>
            <div style={{ textAlign: 'center' }}>
              <AnimatedCounter value={10} prefix="$" suffix="M" color="#60a5fa" />
              <div style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.7)' }}>AUM</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <AnimatedCounter value={5} suffix="+" color="#4ade80" />
              <div style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.7)' }}>Clients</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <AnimatedCounter value={25} suffix="%" color="#fbbf24" />
              <div style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.7)' }}>Outperformance</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <AnimatedCounter value={100} suffix="%" color="#4ade80" />
              <div style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.7)' }}>Live</div>
            </div>
          </div>

          {/* Bottom Rows: Moats, Broker Integration, and Tech Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.8rem, 1vh, 1rem)' }}>
            {/* Moat Badges Row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: 'clamp(0.5rem, 0.7vw, 0.7rem) clamp(1rem, 1.3vw, 1.3rem)',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))',
                  border: `${pxToRem(1)} solid rgba(59, 130, 246, 0.3)`,
                  borderRadius: pxToRem(8),
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(0.5rem, 0.6vw, 0.6rem)'
                }}
              >
                <Icon type="lock" size={20} variant="inline" gradient="from-blue-400 to-cyan-400" />
                <span style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)', color: '#60a5fa', fontWeight: 600 }}>Tech Moat</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: 'clamp(0.5rem, 0.7vw, 0.7rem) clamp(1rem, 1.3vw, 1.3rem)',
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))',
                  border: `${pxToRem(1)} solid rgba(34, 197, 94, 0.3)`,
                  borderRadius: pxToRem(8),
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(0.5rem, 0.6vw, 0.6rem)'
                }}
              >
                <Icon type="scale" size={20} variant="inline" gradient="from-green-400 to-emerald-400" />
                <span style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)', color: '#4ade80', fontWeight: 600 }}>Regulatory</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: 'clamp(0.5rem, 0.7vw, 0.7rem) clamp(1rem, 1.3vw, 1.3rem)',
                  background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.1))',
                  border: `${pxToRem(1)} solid rgba(20, 184, 166, 0.3)`,
                  borderRadius: pxToRem(8),
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(0.5rem, 0.6vw, 0.6rem)'
                }}
              >
                <Icon type="shield" size={20} variant="inline" gradient="from-teal-400 to-green-400" />
                <span style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)', color: '#5eead4', fontWeight: 600 }}>Trust</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: 'clamp(0.5rem, 0.7vw, 0.7rem) clamp(1rem, 1.3vw, 1.3rem)',
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.1))',
                  border: `${pxToRem(1)} solid rgba(168, 85, 247, 0.3)`,
                  borderRadius: pxToRem(8),
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(0.5rem, 0.6vw, 0.6rem)'
                }}
              >
                <Icon type="sparkles" size={20} variant="inline" gradient="from-purple-400 to-pink-400" />
                <span style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)', color: '#a78bfa', fontWeight: 600 }}>Patents Pending</span>
              </motion.div>
            </div>
            
            {/* Broker Integration Timeline Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{ 
                padding: 'clamp(0.7rem, 0.9vw, 0.9rem) clamp(1.5rem, 2vw, 2rem)',
                background: 'linear-gradient(90deg, rgba(249, 115, 22, 0.1), rgba(251, 191, 36, 0.1))',
                borderRadius: pxToRem(10),
                border: `${pxToRem(1)} solid rgba(249, 115, 22, 0.2)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(0.5rem, 0.8vw, 0.8rem)'
              }}
            >
              <span style={{ 
                fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)',
                color: '#fbbf24',
                fontWeight: 600
              }}>
                Broker APIs:
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.8rem, 1.2vw, 1.2rem)' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  padding: 'clamp(0.3rem, 0.4vw, 0.4rem) clamp(0.7rem, 0.9vw, 0.9rem)',
                  background: 'rgba(34, 197, 94, 0.15)',
                  borderRadius: pxToRem(6),
                  border: `${pxToRem(1)} solid rgba(34, 197, 94, 0.3)`
                }}>
                  <span style={{ color: '#4ade80', fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)', fontWeight: 600 }}>
                    Zerodha
                  </span>
                  <span style={{ color: '#4ade80', fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)' }}>✅</span>
                </div>
                <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)' }}>|</span>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.3rem'
                }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)' }}>
                    IBKR
                  </span>
                  <span style={{ color: '#fbbf24', fontSize: 'clamp(0.8rem, 0.95vw, 0.95rem)', fontStyle: 'italic' }}>
                    (Q1'25)
                  </span>
                </div>
                <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)' }}>|</span>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.3rem'
                }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)' }}>
                    Alpaca
                  </span>
                  <span style={{ color: '#fbbf24', fontSize: 'clamp(0.8rem, 0.95vw, 0.95rem)', fontStyle: 'italic' }}>
                    (Q2'25)
                  </span>
                </div>
              </div>
            </motion.div>
            
            {/* Tech Stack Row */}
            <div style={{ 
              fontSize: 'clamp(0.85rem, 1.05vw, 1.05rem)',
              color: 'rgba(255, 255, 255, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(0.5rem, 0.7vw, 0.7rem)'
            }}>
              <span>Powered by:</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                NextJS • Python • AWS • MongoDB • Claude AI • OpenAI
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}