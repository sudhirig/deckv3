import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { Brain, TrendingUp, Shield, Target, ArrowRight, Zap, Newspaper, FileText, CheckCircle } from 'lucide-react'

/**
 * SlideAgenticDecisionFlow - World-Class Animated Decision Flow
 * Shows TESLA example with Sentiment → Analysts → Consensus → Risk → Portfolio → Zerodha Execution
 */
const SlideAgenticDecisionFlow = () => {
  const [phase, setPhase] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPhase(prev => (prev + 1) % 6)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  const phases = [
    { label: 'Market Data', color: '#64748B' },
    { label: 'Sentiment Analysis', color: '#3B82F6' },
    { label: 'Investment Committee', color: '#14B8A6' },
    { label: 'Risk Assessment', color: '#EF4444' },
    { label: 'Portfolio Decision', color: '#8B5CF6' },
    { label: 'Zerodha Execution', color: '#F59E0B' }
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
        padding: '2rem 2.5rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.5rem' }}>
            HOW ARIA MAKES DECISIONS
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1rem', color: '#64748B' }}>Live Example:</span>
            <span style={{ 
              fontSize: '1.1rem', 
              fontWeight: '700', 
              color: '#14B8A6',
              background: 'rgba(20, 184, 166, 0.15)',
              padding: '0.25rem 0.75rem',
              borderRadius: '6px',
              border: '1px solid rgba(20, 184, 166, 0.3)'
            }}>
              TSLA — Tesla Inc.
            </span>
          </div>
        </motion.div>

        {/* Phase Progress Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {phases.map((p, i) => (
            <motion.div
              key={p.label}
              animate={{ 
                background: i <= phase ? p.color : 'rgba(100, 116, 139, 0.2)',
                scale: i === phase ? 1.05 : 1
              }}
              style={{
                padding: '0.4rem 0.75rem',
                borderRadius: '20px',
                border: `1px solid ${i <= phase ? p.color : 'rgba(100, 116, 139, 0.3)'}`,
                transition: 'all 0.3s ease'
              }}
            >
              <span style={{ fontSize: '0.7rem', fontWeight: '600', color: i <= phase ? '#FFF' : '#64748B' }}>
                {i + 1}. {p.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Main Flow - Horizontal */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr auto 1fr',
          gap: '0.75rem',
          alignItems: 'center'
        }}>
          
          {/* 1. Sentiment Analysis */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: phase >= 1 ? 1 : 0.3, x: 0 }}
            style={{
              background: phase >= 1 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(30, 41, 59, 0.5)',
              border: `1px solid ${phase >= 1 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(100, 116, 139, 0.2)'}`,
              borderRadius: '16px',
              padding: '1rem',
              transition: 'all 0.5s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Newspaper size={20} color="#3B82F6" />
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#3B82F6' }}>SENTIMENT</span>
            </div>
            <AnimatePresence>
              {phase >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                >
                  <div style={{ background: 'rgba(16, 185, 129, 0.15)', borderRadius: '8px', padding: '0.5rem' }}>
                    <p style={{ fontSize: '0.65rem', color: '#94A3B8', margin: 0 }}>News Score</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: '800', color: '#10B981', margin: 0 }}>+0.72</p>
                  </div>
                  <div style={{ background: 'rgba(59, 130, 246, 0.15)', borderRadius: '8px', padding: '0.5rem' }}>
                    <p style={{ fontSize: '0.65rem', color: '#94A3B8', margin: 0 }}>Social Buzz</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: '800', color: '#3B82F6', margin: 0 }}>HIGH</p>
                  </div>
                  <p style={{ fontSize: '0.6rem', color: '#64748B', margin: 0, fontStyle: 'italic' }}>
                    182 sources • FinBERT (Goldman-grade)
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Arrow */}
          <motion.div animate={{ x: phase >= 2 ? [0, 8, 0] : 0 }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowRight size={24} color={phase >= 2 ? '#14B8A6' : '#334155'} />
          </motion.div>

          {/* 2. Investment Committee */}
          <motion.div
            animate={{ opacity: phase >= 2 ? 1 : 0.3 }}
            style={{
              background: phase >= 2 ? 'rgba(20, 184, 166, 0.1)' : 'rgba(30, 41, 59, 0.5)',
              border: `1px solid ${phase >= 2 ? 'rgba(20, 184, 166, 0.4)' : 'rgba(100, 116, 139, 0.2)'}`,
              borderRadius: '16px',
              padding: '1rem',
              transition: 'all 0.5s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Brain size={20} color="#14B8A6" />
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#14B8A6' }}>COMMITTEE</span>
            </div>
            <AnimatePresence>
              {phase >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}
                >
                  {[
                    { name: 'Buffett AI', vote: 'BUY', conf: 78 },
                    { name: 'Graham AI', vote: 'HOLD', conf: 65 },
                    { name: 'Wood AI', vote: 'BUY', conf: 92 }
                  ].map((agent) => (
                    <div key={agent.name} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(15, 23, 42, 0.8)',
                      borderRadius: '6px',
                      padding: '0.35rem 0.5rem'
                    }}>
                      <span style={{ fontSize: '0.7rem', color: '#E2E8F0', fontWeight: '600' }}>{agent.name}</span>
                      <span style={{
                        fontSize: '0.6rem',
                        padding: '0.15rem 0.35rem',
                        borderRadius: '4px',
                        background: agent.vote === 'BUY' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                        color: agent.vote === 'BUY' ? '#10B981' : '#F59E0B',
                        fontWeight: '700'
                      }}>
                        {agent.vote}
                      </span>
                    </div>
                  ))}
                  <p style={{ fontSize: '0.6rem', color: '#14B8A6', margin: '0.25rem 0 0 0', fontWeight: '600' }}>
                    18 AI Experts → Consensus: BUY
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Arrow */}
          <motion.div animate={{ x: phase >= 3 ? [0, 8, 0] : 0 }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowRight size={24} color={phase >= 3 ? '#EF4444' : '#334155'} />
          </motion.div>

          {/* 3. Risk Manager */}
          <motion.div
            animate={{ opacity: phase >= 3 ? 1 : 0.3 }}
            style={{
              background: phase >= 3 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(30, 41, 59, 0.5)',
              border: `1px solid ${phase >= 3 ? 'rgba(239, 68, 68, 0.4)' : 'rgba(100, 116, 139, 0.2)'}`,
              borderRadius: '16px',
              padding: '1rem',
              transition: 'all 0.5s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Shield size={20} color="#EF4444" />
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#EF4444' }}>RISK CHECK</span>
            </div>
            <AnimatePresence>
              {phase >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                >
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{ flex: 1, background: 'rgba(16, 185, 129, 0.15)', borderRadius: '6px', padding: '0.4rem', textAlign: 'center' }}>
                      <p style={{ fontSize: '0.55rem', color: '#94A3B8', margin: 0 }}>VaR</p>
                      <p style={{ fontSize: '0.9rem', fontWeight: '700', color: '#10B981', margin: 0 }}>2.1%</p>
                    </div>
                    <div style={{ flex: 1, background: 'rgba(245, 158, 11, 0.15)', borderRadius: '6px', padding: '0.4rem', textAlign: 'center' }}>
                      <p style={{ fontSize: '0.55rem', color: '#94A3B8', margin: 0 }}>Beta</p>
                      <p style={{ fontSize: '0.9rem', fontWeight: '700', color: '#F59E0B', margin: 0 }}>1.8</p>
                    </div>
                  </div>
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    borderRadius: '6px',
                    padding: '0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.3rem'
                  }}>
                    <CheckCircle size={14} color="#10B981" />
                    <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#10B981' }}>APPROVED</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Arrow */}
          <motion.div animate={{ x: phase >= 4 ? [0, 8, 0] : 0 }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowRight size={24} color={phase >= 4 ? '#8B5CF6' : '#334155'} />
          </motion.div>

          {/* 4. Portfolio Manager */}
          <motion.div
            animate={{ opacity: phase >= 4 ? 1 : 0.3 }}
            style={{
              background: phase >= 4 ? 'rgba(139, 92, 246, 0.1)' : 'rgba(30, 41, 59, 0.5)',
              border: `1px solid ${phase >= 4 ? 'rgba(139, 92, 246, 0.4)' : 'rgba(100, 116, 139, 0.2)'}`,
              borderRadius: '16px',
              padding: '1rem',
              transition: 'all 0.5s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Target size={20} color="#8B5CF6" />
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#8B5CF6' }}>DECISION</span>
            </div>
            <AnimatePresence>
              {phase >= 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                >
                  <motion.div
                    animate={{ boxShadow: ['0 0 0px #10B981', '0 0 20px #10B981', '0 0 0px #10B981'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                      background: 'linear-gradient(135deg, #10B981, #059669)',
                      borderRadius: '10px',
                      padding: '0.6rem',
                      textAlign: 'center'
                    }}
                  >
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFFFFF' }}>BUY</span>
                  </motion.div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: '700', color: '#E2E8F0', margin: 0 }}>250 shares</p>
                    <p style={{ fontSize: '0.65rem', color: '#8B5CF6', margin: '0.2rem 0 0 0' }}>2.5% of portfolio</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Arrow */}
          <motion.div animate={{ x: phase >= 5 ? [0, 8, 0] : 0 }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowRight size={24} color={phase >= 5 ? '#F59E0B' : '#334155'} />
          </motion.div>

          {/* 5. Zerodha Execution */}
          <motion.div
            animate={{ opacity: phase >= 5 ? 1 : 0.3 }}
            style={{
              background: phase >= 5 ? 'rgba(245, 158, 11, 0.1)' : 'rgba(30, 41, 59, 0.5)',
              border: `1px solid ${phase >= 5 ? 'rgba(245, 158, 11, 0.4)' : 'rgba(100, 116, 139, 0.2)'}`,
              borderRadius: '16px',
              padding: '1rem',
              transition: 'all 0.5s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Zap size={20} color="#F59E0B" />
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#F59E0B' }}>ZERODHA</span>
            </div>
            <AnimatePresence>
              {phase >= 5 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                >
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    borderRadius: '8px',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%' }}
                    />
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#10B981' }}>EXECUTED</span>
                  </div>
                  <div style={{ background: 'rgba(15, 23, 42, 0.8)', borderRadius: '6px', padding: '0.4rem' }}>
                    <p style={{ fontSize: '0.6rem', color: '#94A3B8', margin: 0 }}>TSLA @ $248.50</p>
                    <p style={{ fontSize: '0.6rem', color: '#F59E0B', margin: '0.2rem 0 0 0', fontWeight: '600' }}>11ms latency</p>
                  </div>
                  <div style={{
                    background: 'rgba(139, 92, 246, 0.15)',
                    borderRadius: '6px',
                    padding: '0.35rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    <FileText size={12} color="#8B5CF6" />
                    <span style={{ fontSize: '0.6rem', color: '#8B5CF6' }}>Research Report →</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem'
          }}
        >
          {[
            { value: '18', label: 'AI Investors', color: '#14B8A6' },
            { value: '122+', label: 'Indicators', color: '#8B5CF6' },
            { value: '2.78M+', label: 'Data Points', color: '#3B82F6' },
            { value: '73%', label: 'Prediction Accuracy', color: '#10B981' }
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.25rem', fontWeight: '800', color: stat.color, margin: 0 }}>{stat.value}</p>
              <p style={{ fontSize: '0.7rem', color: '#64748B', margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideAgenticDecisionFlow
