import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Moon, Sun, Briefcase } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

/**
 * YourAICEOatWorkFixed - Full-screen layout, no sidebar
 */
export default function YourAICEOatWorkFixed() {
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
              Your AI CEO at Work
            </GradientText>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            Autonomous wealth management at unprecedented scale
          </p>
        </motion.div>

        {/* 24/7 Timeline - Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            flex: 1,
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.08), rgba(6, 182, 212, 0.05))',
            borderRadius: pxToRem(16),
            border: '1px solid rgba(20, 184, 166, 0.25)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            zIndex: 1
          }}
        >
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#e2e8f0',
            marginBottom: '1.25rem',
            textAlign: 'center'
          }}>
            ARIA's 24-Hour Wealth Optimization Cycle
          </h3>

          {/* Three Time Periods */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            flex: 1
          }}>
            {/* While You Sleep */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                borderRadius: pxToRem(14),
                padding: '1.5rem',
                border: '2px solid rgba(251, 146, 60, 0.4)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  background: 'rgba(251, 146, 60, 0.2)',
                  borderRadius: pxToRem(10),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Moon size={24} color="#fb923c" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#fb923c', fontWeight: '600', margin: 0 }}>While You Sleep</h4>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>12AM - 8AM</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                {[
                  'Harvesting tax losses pre-market',
                  'Analyzing overnight global movements',
                  'Preparing trading queue for market open',
                  'Scanning for arbitrage opportunities'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <span style={{ color: '#fb923c', fontSize: '1.1rem', lineHeight: 1 }}>•</span>
                    <span style={{ fontSize: '1rem', color: '#e2e8f0', lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* While You Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                background: 'linear-gradient(135deg, #0f766e 0%, #0891b2 100%)',
                borderRadius: pxToRem(14),
                padding: '1.5rem',
                border: '2px solid rgba(20, 184, 166, 0.5)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  background: 'rgba(94, 234, 212, 0.2)',
                  borderRadius: pxToRem(10),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Sun size={24} color="#5eead4" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#5eead4', fontWeight: '600', margin: 0 }}>While You Work</h4>
                  <span style={{ fontSize: '0.85rem', color: '#a7f3d0' }}>8AM - 6PM</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                {[
                  'Rebalancing portfolios globally',
                  'Executing India market opportunities',
                  'Real-time risk monitoring & hedging',
                  'Tax-loss harvesting throughout the day'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <span style={{ color: '#5eead4', fontSize: '1.1rem', lineHeight: 1 }}>✓</span>
                    <span style={{ fontSize: '1rem', color: '#f0fdfa', lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* On Your Vacation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                background: 'linear-gradient(135deg, #312e81 0%, #4c1d95 100%)',
                borderRadius: pxToRem(14),
                padding: '1.5rem',
                border: '2px solid rgba(139, 92, 246, 0.5)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  background: 'rgba(167, 139, 250, 0.2)',
                  borderRadius: pxToRem(10),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Briefcase size={24} color="#a78bfa" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#a78bfa', fontWeight: '600', margin: 0 }}>On Your Vacation</h4>
                  <span style={{ fontSize: '0.85rem', color: '#c4b5fd' }}>6PM - 12AM</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                {[
                  'Managing corporate actions',
                  'Processing dividends & distributions',
                  'Planning next day\'s strategies',
                  'Compliance monitoring & reporting'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <span style={{ color: '#a78bfa', fontSize: '1.1rem', lineHeight: 1 }}>◆</span>
                    <span style={{ fontSize: '1rem', color: '#ede9fe', lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '1rem',
            padding: '1rem 1.5rem',
            background: 'linear-gradient(to right, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.15))',
            borderRadius: pxToRem(12),
            border: '1px solid rgba(20, 184, 166, 0.3)',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}
        >
          <h3 style={{
            fontSize: '1.4rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.3rem'
          }}>
            Thousands of micro-decisions compound into massive value
          </h3>
          <p style={{ fontSize: '1rem', color: '#94a3b8', margin: 0 }}>
            Continuous optimization that's impossible for humans to replicate
          </p>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
