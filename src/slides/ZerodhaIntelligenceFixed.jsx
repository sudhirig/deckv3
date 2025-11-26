import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Brain, ArrowRight, BarChart3, Activity, Target, Shield } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

/**
 * ZerodhaIntelligenceFixed - Clean, feature-focused design
 * No unverified performance claims - only product capabilities
 */
export default function ZerodhaIntelligenceFixed() {
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        padding: '2rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 20% 30%, rgba(139, 92, 246, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}
        >
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '0.5rem' }}>
            <GradientText gradient="from-purple-400 to-pink-400">
              Zerodha Intelligence Module
            </GradientText>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            AI-powered trading intelligence on India's largest broker
          </p>
        </motion.div>

        {/* Simple 3-Step Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '2rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          {[
            { icon: '📊', label: 'Zerodha Kite', sub: 'Real-time market data', color: '#8b5cf6' },
            { icon: '🧠', label: 'ARIA Analysis', sub: 'Pattern recognition', color: '#14b8a6' },
            { icon: '⚡', label: 'Smart Signals', sub: 'Actionable insights', color: '#10b981' }
          ].map((step, i) => (
            <React.Fragment key={step.label}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  textAlign: 'center',
                  padding: '1.5rem 2.5rem',
                  background: `linear-gradient(135deg, ${step.color}15, ${step.color}05)`,
                  border: `2px solid ${step.color}40`,
                  borderRadius: pxToRem(16),
                  minWidth: '180px'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{step.icon}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#e2e8f0' }}>{step.label}</div>
                <div style={{ fontSize: '1rem', color: '#9ca3af' }}>{step.sub}</div>
              </motion.div>
              {i < 2 && (
                <ArrowRight size={32} color="#4b5563" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Key Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
            flex: 1,
            position: 'relative',
            zIndex: 1
          }}
        >
          {[
            { 
              icon: BarChart3, 
              title: 'Technical Analysis Suite', 
              desc: 'RSI, MACD, Bollinger Bands, Ichimoku, and more',
              color: '#8b5cf6' 
            },
            { 
              icon: Brain, 
              title: 'Pattern Recognition', 
              desc: 'AI identifies chart patterns across multiple timeframes',
              color: '#3b82f6' 
            },
            { 
              icon: Target, 
              title: 'Entry & Exit Signals', 
              desc: 'Intelligent alerts based on technical conditions',
              color: '#14b8a6' 
            },
            { 
              icon: Shield, 
              title: 'Risk Management', 
              desc: 'Position sizing and stop-loss recommendations',
              color: '#10b981' 
            }
          ].map((cap) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.title}
                whileHover={{ scale: 1.02 }}
                style={{
                  padding: '1.5rem',
                  background: 'rgba(17, 24, 39, 0.6)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: pxToRem(14),
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: `${cap.color}20`,
                  borderRadius: pxToRem(12),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={26} color={cap.color} />
                </div>
                <div>
                  <div style={{ fontSize: '1.15rem', fontWeight: '600', color: '#e2e8f0', marginBottom: '0.3rem' }}>
                    {cap.title}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#9ca3af', lineHeight: 1.4 }}>
                    {cap.desc}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom - Integration Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: '1.5rem',
            padding: '1rem 1.5rem',
            background: 'linear-gradient(to right, rgba(139, 92, 246, 0.12), rgba(16, 185, 129, 0.12))',
            borderRadius: pxToRem(12),
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              borderRadius: pxToRem(12),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Brain size={26} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: '600', color: '#e2e8f0' }}>
                Seamless Zerodha Kite Integration
              </div>
              <div style={{ fontSize: '0.95rem', color: '#9ca3af' }}>
                Works with your existing Zerodha account • No additional setup
              </div>
            </div>
          </div>
          <div style={{ 
            padding: '0.75rem 1.5rem',
            background: 'rgba(139, 92, 246, 0.2)',
            borderRadius: pxToRem(10),
            border: '1px solid rgba(139, 92, 246, 0.3)'
          }}>
            <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#a78bfa' }}>Module 1 of 5</span>
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
