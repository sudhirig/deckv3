import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { Brain, Lock, Users, Building2, AlertCircle } from 'lucide-react'

/**
 * SlideWhySolutionsFailV2 - SIMPLIFIED World-class UI/UX
 * 2x2 Grid with visual bars instead of text lists
 * Bigger fonts, less text, more visual
 */
const SlideWhySolutionsFailV2 = () => {
  const [advisorCount, setAdvisorCount] = useState(0)

  useEffect(() => {
    const target = 100000
    const timer = setInterval(() => {
      setAdvisorCount(prev => {
        if (prev >= target) {
          clearInterval(timer)
          return target
        }
        return prev + 2500
      })
    }, 50)
    return () => clearInterval(timer)
  }, [])

  // Visual bar component for Access/Intelligence with 50% benchmark
  const MetricBar = ({ label, value, color, maxValue = 100 }) => (
    <div style={{ marginBottom: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
        <span style={{ fontSize: '0.9rem', color, fontWeight: '700' }}>{value}%</span>
      </div>
      <div style={{ height: '8px', background: 'rgba(100, 116, 139, 0.2)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
        {/* 50% Benchmark Line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'rgba(255, 255, 255, 0.3)',
          zIndex: 1
        }} />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 50 }}
          style={{ height: '100%', background: color, borderRadius: '4px', position: 'relative', zIndex: 2 }}
        />
      </div>
    </div>
  )

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 2.5rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 30%, rgba(251, 191, 36, 0.06) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1rem', position: 'relative', zIndex: 1 }}
        >
          <h1 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            WHY TODAY'S SOLUTIONS FAIL
          </h1>
          <p style={{ fontSize: '1rem', color: '#94A3B8' }}>
            They give you <span style={{ color: '#14B8A6', fontWeight: '600' }}>Access</span> OR <span style={{ color: '#14B8A6', fontWeight: '600' }}>Intelligence</span> — never both
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '1rem',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Top Left - ROBO-ADVISORS (High Intelligence, Low Access) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'rgba(30, 41, 59, 0.6)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Badge */}
            <div style={{
              alignSelf: 'flex-start',
              background: 'rgba(20, 184, 166, 0.15)',
              padding: '6px 14px',
              borderRadius: '20px',
              marginBottom: '0.5rem'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#14B8A6', fontWeight: '700' }}>HIGH INTELLIGENCE</span>
            </div>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'rgba(20, 184, 166, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Brain size={24} color="#14B8A6" />
              </div>
              <div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>ROBO-ADVISORS</h2>
                <p style={{ fontSize: '0.85rem', color: '#64748B', margin: '4px 0 0 0' }}>Betterment, Wealthfront, Arta</p>
              </div>
            </div>

            {/* Visual Bars */}
            <div style={{ flex: 1 }}>
              <MetricBar label="Intelligence" value={85} color="#14B8A6" />
              <MetricBar label="Access" value={25} color="#EF4444" />
            </div>

            {/* Bottom Insight */}
            <div style={{
              marginTop: 'auto',
              padding: '0.75rem',
              background: 'rgba(20, 184, 166, 0.1)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '0.95rem', color: '#E2E8F0', margin: 0 }}>
                Smart but <span style={{ color: '#14B8A6', fontWeight: '700' }}>US-only, no alternatives</span>
              </p>
            </div>
          </motion.div>

          {/* Top Right - GOLDMAN (Has Both) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(251, 191, 36, 0.05))',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '2px solid rgba(251, 191, 36, 0.4)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: '0 10px 40px rgba(251, 191, 36, 0.15)',
              overflow: 'hidden'
            }}
          >
            {/* Shimmer Effect */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '50%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />

            {/* Badge */}
            <div style={{
              alignSelf: 'flex-start',
              background: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
              padding: '6px 14px',
              borderRadius: '20px',
              marginBottom: '0.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              <span style={{ fontSize: '0.75rem', color: '#0A1628', fontWeight: '700' }}>HAS BOTH</span>
            </div>

            {/* 1% Badge */}
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(251, 191, 36, 0.2)',
              padding: '6px 12px',
              borderRadius: '14px'
            }}>
              <span style={{ fontSize: '0.85rem', color: '#FBBF24', fontWeight: '700' }}>1% ONLY</span>
            </div>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(251, 191, 36, 0.15))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Building2 size={24} color="#FBBF24" />
              </div>
              <div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>GOLDMAN SACHS</h2>
                <p style={{ fontSize: '0.85rem', color: '#FBBF24', margin: '4px 0 0 0' }}>The gold standard</p>
              </div>
            </div>

            {/* Visual Bars */}
            <div style={{ flex: 1 }}>
              <MetricBar label="Intelligence" value={95} color="#14B8A6" />
              <MetricBar label="Access" value={95} color="#14B8A6" />
            </div>

            {/* Bottom Insight */}
            <div style={{
              marginTop: 'auto',
              padding: '0.75rem',
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1))',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '1rem', color: '#FBBF24', margin: 0, fontWeight: '700' }}>
                Needs $25M+ minimum
              </p>
            </div>
          </motion.div>

          {/* Bottom Left - PRIVATE BANKS (High Access, Low Intelligence) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: 'rgba(30, 41, 59, 0.6)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Badge */}
            <div style={{
              alignSelf: 'flex-start',
              background: 'rgba(148, 163, 184, 0.15)',
              padding: '6px 14px',
              borderRadius: '20px',
              marginBottom: '0.5rem'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: '700' }}>HIGH ACCESS</span>
            </div>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'rgba(148, 163, 184, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Lock size={24} color="#94A3B8" />
              </div>
              <div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>PRIVATE BANKS</h2>
                <p style={{ fontSize: '0.85rem', color: '#64748B', margin: '4px 0 0 0' }}>JPM, UBS, Credit Suisse</p>
              </div>
            </div>

            {/* Visual Bars */}
            <div style={{ flex: 1 }}>
              <MetricBar label="Intelligence" value={30} color="#EF4444" />
              <MetricBar label="Access" value={80} color="#14B8A6" />
            </div>

            {/* Bottom Insight */}
            <div style={{
              marginTop: 'auto',
              padding: '0.75rem',
              background: 'rgba(148, 163, 184, 0.1)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '0.95rem', color: '#E2E8F0', margin: 0 }}>
                Access but <span style={{ color: '#FB7185', fontWeight: '700' }}>1990s technology</span>
              </p>
            </div>
          </motion.div>

          {/* Bottom Right - CPAs & ADVISORS (Neither) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.12), rgba(239, 68, 68, 0.04))',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Badge */}
            <div style={{
              alignSelf: 'flex-start',
              background: 'rgba(239, 68, 68, 0.2)',
              padding: '6px 14px',
              borderRadius: '20px',
              marginBottom: '0.5rem'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#EF4444', fontWeight: '700' }}>NEITHER</span>
            </div>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'rgba(239, 68, 68, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Users size={24} color="#EF4444" />
              </div>
              <div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>CPAs & ADVISORS</h2>
                <p style={{ fontSize: '0.85rem', color: '#EF4444', margin: '4px 0 0 0' }}>Your trusted advisor</p>
              </div>
            </div>

            {/* Visual Bars */}
            <div style={{ flex: 1 }}>
              <MetricBar label="Intelligence" value={20} color="#EF4444" />
              <MetricBar label="Access" value={15} color="#EF4444" />
            </div>

            {/* Crisis Stats */}
            <div style={{
              marginTop: 'auto',
              padding: '0.75rem',
              background: 'rgba(239, 68, 68, 0.15)',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '1.5rem', color: '#EF4444', fontWeight: '800', margin: 0 }}>{advisorCount.toLocaleString()}</p>
                <p style={{ fontSize: '0.7rem', color: '#94A3B8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>shortage by 2030</p>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'rgba(239, 68, 68, 0.3)' }} />
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '1.5rem', color: '#EF4444', fontWeight: '800', margin: 0 }}>1:500</p>
                <p style={{ fontSize: '0.7rem', color: '#94A3B8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>advisor ratio</p>
              </div>
            </div>
          </motion.div>

          {/* Center Matrix Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: 'spring' }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              background: 'linear-gradient(135deg, #0A1628, #1e293b)',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid rgba(20, 184, 166, 0.4)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
            }}
          >
            <AlertCircle size={28} color="#14B8A6" />
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            background: 'linear-gradient(to right, rgba(20, 184, 166, 0.1), rgba(20, 184, 166, 0.05))',
            borderRadius: '16px',
            border: '1px solid rgba(20, 184, 166, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 1
          }}
        >
          <p style={{ fontSize: '1rem', color: '#E2E8F0', margin: 0 }}>
            You need <span style={{ color: '#14B8A6', fontWeight: '700' }}>HIGH ACCESS</span> + <span style={{ color: '#14B8A6', fontWeight: '700' }}>HIGH INTELLIGENCE</span>
          </p>
          <div style={{
            padding: '0.5rem 1rem',
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1))',
            borderRadius: '10px',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}>
            <p style={{ fontSize: '1rem', color: '#FBBF24', margin: 0, fontWeight: '700' }}>Only the 1% get both today</p>
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideWhySolutionsFailV2
