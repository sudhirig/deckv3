import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

/**
 * PersonalizationAtScaleFixed - Full-screen layout
 */
export default function PersonalizationAtScaleFixed() {
  const factors = ['Tax Situation', 'Risk Profile', 'Time Horizon', 'Life Goals', 'Cash Flow', 'Estate Plans', 'Geographic Exposure', 'Alternative Access']

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
        {/* Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(20, 184, 166, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1rem', position: 'relative', zIndex: 1 }}
        >
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '0.5rem' }}>
            <GradientText gradient="from-teal-400 to-cyan-400">
              Personalization at Scale
            </GradientText>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            This level of personalization is impossible without AI
          </p>
        </motion.div>

        {/* Hero Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.1))',
            border: '2px solid rgba(20, 184, 166, 0.4)',
            borderRadius: pxToRem(16)
          }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#14b8a6' }}>10,000</span>
            <span style={{ fontSize: '1.5rem', color: '#5eead4', marginLeft: '0.5rem' }}>Clients =</span>
            <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#14b8a6', marginLeft: '0.5rem' }}>10,000</span>
            <span style={{ fontSize: '1.5rem', color: '#5eead4', marginLeft: '0.5rem' }}>Unique Strategies</span>
          </div>
        </motion.div>

        {/* Comparison Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            flex: 1,
            position: 'relative',
            zIndex: 1
          }}
        >
          {/* Traditional Approach */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            borderRadius: pxToRem(16),
            padding: '1.75rem',
            border: '2px solid rgba(239, 68, 68, 0.3)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ 
              fontSize: '1.4rem', 
              fontWeight: '700',
              color: '#f87171',
              marginBottom: '1.5rem'
            }}>
              Traditional Advisors
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
              {[
                { text: '5 Model Portfolios', sub: 'One size fits most' },
                { text: 'Quarterly Reviews', sub: 'Reactive adjustments' },
                { text: 'Generic Allocations', sub: 'Age-based formulas' },
                { text: 'Manual Adjustments', sub: 'Human bandwidth limits' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#ef4444', fontSize: '1.5rem', lineHeight: 1 }}>×</span>
                  <div>
                    <div style={{ fontSize: '1.1rem', color: '#e2e8f0', fontWeight: '500' }}>{item.text}</div>
                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ 
              marginTop: '1rem',
              padding: '0.75rem',
              background: 'rgba(239, 68, 68, 0.1)',
              borderRadius: pxToRem(8),
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '1rem', color: '#fca5a5', fontStyle: 'italic' }}>"Best fit" approach</span>
            </div>
          </div>

          {/* ARIA Approach */}
          <div style={{
            background: 'linear-gradient(135deg, #0f766e 0%, #0891b2 100%)',
            borderRadius: pxToRem(16),
            padding: '1.75rem',
            border: '2px solid rgba(20, 184, 166, 0.5)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ 
              fontSize: '1.4rem', 
              fontWeight: '700',
              color: '#5eead4',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ARIA AI CEO
              <Sparkles size={20} color="#5eead4" />
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
              {[
                { text: 'Infinite Variations', sub: 'Truly unique per client' },
                { text: 'Real-Time Optimization', sub: 'Continuous adjustments' },
                { text: 'Exact Goal Mapping', sub: 'Your specific objectives' },
                { text: 'AI-Driven Precision', sub: '68+ agents working 24/7' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#5eead4', fontSize: '1.5rem', lineHeight: 1 }}>✓</span>
                  <div>
                    <div style={{ fontSize: '1.1rem', color: '#f0fdfa', fontWeight: '500' }}>{item.text}</div>
                    <div style={{ fontSize: '0.9rem', color: '#a7f3d0' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ 
              marginTop: '1rem',
              padding: '0.75rem',
              background: 'rgba(94, 234, 212, 0.15)',
              borderRadius: pxToRem(8),
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '1rem', color: '#5eead4', fontStyle: 'italic' }}>True 1-to-1 at scale</span>
            </div>
          </div>
        </motion.div>

        {/* Personalization Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: '1.5rem',
            padding: '1rem 1.5rem',
            background: 'linear-gradient(to right, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: pxToRem(12),
            border: '1px solid rgba(20, 184, 166, 0.25)',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            <span style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: '600' }}>Personalization Factors:</span>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {factors.map((factor, idx) => (
                <motion.div
                  key={factor}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.03 }}
                  style={{
                    background: 'rgba(20, 184, 166, 0.15)',
                    border: '1px solid rgba(20, 184, 166, 0.4)',
                    borderRadius: pxToRem(6),
                    padding: '0.4rem 0.9rem',
                    fontSize: '0.95rem',
                    color: '#5eead4',
                    fontWeight: '500'
                  }}
                >
                  {factor}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
