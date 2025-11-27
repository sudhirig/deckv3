import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { XCircle, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

/**
 * SlideEnterARIA - Bridge Slide
 * Connects Problem (Act 1) to Solution (ARIA)
 * "The market needs X. Enter ARIA."
 */
const SlideEnterARIA = () => {
  const problems = [
    { text: 'Access Gap', detail: 'India, Alts locked behind $5M walls' },
    { text: 'Intelligence Gap', detail: 'Humans cannot optimize 24/7' },
    { text: 'Cost Gap', detail: '$1M+ for family office services' }
  ]

  const needs = [
    'Global market access without barriers',
    'AI-powered 24/7 optimization',
    'Institutional quality at accessible cost'
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Background Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Main Content */}
        <div style={{
          display: 'flex',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 5
        }}>
          {/* Left: The Problem Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              minWidth: '320px'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem'
            }}>
              <XCircle size={24} color="#EF4444" />
              <h2 style={{ fontSize: '1.25rem', color: '#EF4444', fontWeight: '700', margin: 0 }}>
                THE PROBLEM
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {problems.map((problem, i) => (
                <motion.div
                  key={problem.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    borderRadius: '10px',
                    padding: '0.75rem 1rem',
                    borderLeft: '3px solid #EF4444'
                  }}
                >
                  <p style={{ fontSize: '0.9rem', fontWeight: '700', color: '#F87171', margin: 0 }}>
                    {problem.text}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: '#94A3B8', margin: '0.25rem 0 0 0' }}>
                    {problem.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={48} color="#64748B" />
            </motion.div>
            <span style={{
              fontSize: '0.75rem',
              color: '#64748B',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              What's Needed
            </span>
          </motion.div>

          {/* Right: The Solution Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: 'rgba(20, 184, 166, 0.05)',
              border: '1px solid rgba(20, 184, 166, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              minWidth: '320px'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem'
            }}>
              <CheckCircle size={24} color="#14B8A6" />
              <h2 style={{ fontSize: '1.25rem', color: '#14B8A6', fontWeight: '700', margin: 0 }}>
                WHAT'S NEEDED
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {needs.map((need, i) => (
                <motion.div
                  key={need}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  style={{
                    background: 'rgba(20, 184, 166, 0.1)',
                    borderRadius: '10px',
                    padding: '0.75rem 1rem',
                    borderLeft: '3px solid #14B8A6',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <CheckCircle size={16} color="#14B8A6" />
                  <p style={{ fontSize: '0.85rem', color: '#E2E8F0', margin: 0 }}>
                    {need}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA: Enter ARIA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, type: 'spring' }}
          style={{
            marginTop: '3rem',
            textAlign: 'center',
            position: 'relative',
            zIndex: 5
          }}
        >
          <motion.div
            animate={{ 
              boxShadow: ['0 0 30px rgba(20, 184, 166, 0.3)', '0 0 60px rgba(20, 184, 166, 0.5)', '0 0 30px rgba(20, 184, 166, 0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(6, 182, 212, 0.15))',
              border: '2px solid rgba(20, 184, 166, 0.5)',
              borderRadius: '20px',
              padding: '1.5rem 4rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Sparkles size={28} color="#14B8A6" />
            <div style={{ textAlign: 'left' }}>
              <p style={{ 
                fontSize: '0.8rem', 
                color: '#94A3B8', 
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                The Solution
              </p>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #14B8A6, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0
              }}>
                ENTER ARIA
              </h2>
            </div>
            <ArrowRight size={28} color="#14B8A6" />
          </motion.div>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#E2E8F0',
            marginTop: '1rem',
            fontWeight: '600'
          }}>
            <span style={{ color: '#FBBF24' }}>Democratizing Goldman Sachs</span> — Institutional-grade wealth management for everyone
          </p>
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideEnterARIA
