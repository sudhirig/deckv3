import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { 
  Monitor, Play, MessageSquare, TrendingUp, DollarSign,
  Globe, Shield, ChevronRight, Terminal, CheckCircle
} from 'lucide-react'
import './SlideStyles.css'

export default function ARIALiveDemoSlide() {
  const [terminalLines, setTerminalLines] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [currentQuery, setCurrentQuery] = useState(0)
  
  const queries = [
    {
      input: "Optimize my portfolio for India exposure with tax efficiency",
      outputs: [
        "→ Analyzing current portfolio composition...",
        "→ Identifying tax loss harvesting opportunities: $47K available",
        "→ Evaluating GIFT City investment structures...",
        "→ Recommending 15% allocation to India via GIFT route",
        "✓ Strategy created: Save $47K taxes + 15% India allocation"
      ]
    },
    {
      input: "What's my risk exposure if tech drops 20%?",
      outputs: [
        "→ Running stress test scenarios...",
        "→ Portfolio beta to tech sector: 0.67",
        "→ Expected impact: -13.4% ($1.7M)",
        "→ Hedging strategies available: 3 options",
        "✓ Recommendation: Protective put strategy at 0.8% cost"
      ]
    }
  ]

  useEffect(() => {
    // Animate terminal output
    const currentOutputs = queries[currentQuery].outputs
    currentOutputs.forEach((line, idx) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev.slice(-4), line])
        if (idx === currentOutputs.length - 1) {
          setShowResults(true)
        }
      }, idx * 800)
    })
    
    // Cycle queries
    const timer = setTimeout(() => {
      setCurrentQuery((currentQuery + 1) % queries.length)
      setTerminalLines([])
      setShowResults(false)
    }, 6000)
    
    return () => clearTimeout(timer)
  }, [currentQuery])

  const title = (
    <GradientText gradient="from-teal-400 to-cyan-400">
      ARIA in Action - Live Demo
    </GradientText>
  )

  const metrics = [
    {
      icon: Monitor,
      value: 100,
      suffix: '%',
      label: 'Live Platform',
      color: '#14b8a6',
      description: 'Production system running real portfolios'
    },
    {
      icon: TrendingUp,
      value: 10000,
      suffix: '+',
      label: 'Daily Transactions',
      color: '#06b6d4',
      description: 'Processing real trades across all markets'
    },
    {
      icon: Globe,
      value: 12,
      suffix: '',
      label: 'Markets Connected',
      color: '#10b981',
      description: 'US, India, Singapore, Dubai, and more'
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Subtitle */}
      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <p style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: '600' }}>
          Live platform demonstration - watch ARIA process real queries
        </p>
      </div>

      {/* Demo Container */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem'
      }}>
        {/* Left: Chat Interface */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid rgba(20, 184, 166, 0.2)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid rgba(20, 184, 166, 0.2)'
          }}>
            <MessageSquare size={20} color="#14b8a6" />
            <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#e2e8f0' }}>
              Natural Language Interface
            </h3>
          </div>

          {/* Query Input */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.5)',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1rem',
            border: '1px solid rgba(100, 116, 139, 0.3)'
          }}>
            <div style={{
              fontSize: '0.75rem',
              color: '#64748b',
              marginBottom: '0.5rem'
            }}>
              USER QUERY:
            </div>
            <motion.div
              key={currentQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                fontSize: '0.95rem',
                color: '#e2e8f0',
                lineHeight: '1.5'
              }}
            >
              "{queries[currentQuery].input}"
            </motion.div>
          </div>

          {/* ARIA Response */}
          <div style={{
            flex: 1,
            background: 'rgba(20, 184, 166, 0.05)',
            borderRadius: '8px',
            padding: '1rem',
            border: '1px solid rgba(20, 184, 166, 0.2)'
          }}>
            <div style={{
              fontSize: '0.75rem',
              color: '#14b8a6',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ARIA PROCESSING
              <motion.div
                animate={{
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity
                }}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#14b8a6'
                }}
              />
            </div>
            
            {/* Processing Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Understanding intent...', 'Activating agents...', 'Analyzing portfolio...', 'Generating strategy...'].map((step, idx) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: terminalLines.length > idx ? 1 : 0.3,
                    x: 0
                  }}
                  transition={{ delay: idx * 0.2 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: terminalLines.length > idx ? '#5eead4' : '#64748b'
                  }}
                >
                  {terminalLines.length > idx ? (
                    <CheckCircle size={14} color="#5eead4" />
                  ) : (
                    <div style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      border: '1px solid #64748b'
                    }} />
                  )}
                  {step}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Terminal Output */}
        <div style={{
          background: '#0a0f1b',
          borderRadius: '12px',
          border: '1px solid rgba(20, 184, 166, 0.2)',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Terminal Header */}
          <div style={{
            background: 'linear-gradient(90deg, #1e293b 0%, #334155 100%)',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid rgba(20, 184, 166, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Terminal size={16} color="#14b8a6" />
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontFamily: 'monospace' }}>
              aria-core v2.1.0
            </span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.25rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
            </div>
          </div>

          {/* Terminal Content */}
          <div style={{
            flex: 1,
            padding: '1rem',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            color: '#10b981',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <AnimatePresence>
              {terminalLines.map((line, idx) => (
                <motion.div
                  key={`${currentQuery}-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    color: line.startsWith('✓') ? '#10b981' : 
                           line.startsWith('→') ? '#14b8a6' : '#94a3b8'
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Cursor */}
            <motion.span
              animate={{
                opacity: [1, 0, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
              style={{ color: '#14b8a6' }}
            >
              █
            </motion.span>
          </div>
        </div>
      </div>

      {/* Results Panel */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
              borderRadius: '8px',
              padding: '1rem',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle size={20} color="#10b981" />
              <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#10b981' }}>
                Strategy Generated Successfully
              </span>
            </div>
            <button style={{
              padding: '0.5rem 1rem',
              background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
              border: 'none',
              borderRadius: '6px',
              color: 'white',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Execute Now
              <ChevronRight size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
      metrics={metrics}
    />
  )
}
