import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Lock, Key, IndianRupee, TrendingUp, Building2, ArrowRight } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function IndiaGatewaySlide() {
  return (
    <AspectFrame>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        overflow: 'hidden'
      }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <h1 style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '0.5rem' }}>
            <GradientText gradient="from-orange-400 via-pink-400 to-purple-400">
              India: Our Gateway, Not Our Ceiling
            </GradientText>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.3rem)', color: '#94a3b8' }}>
            Phase 1 of our Wedge & Expand Strategy
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          alignItems: 'stretch'
        }}>
          
          {/* Problem: Locked Market */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.08))',
              borderRadius: pxToRem(12),
              padding: '1.5rem',
              border: '2px solid rgba(239, 68, 68, 0.3)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Lock size={32} color="#ef4444" />
              <h3 style={{ color: '#ef4444', fontSize: '1.3rem', fontWeight: 'bold' }}>
                The Problem
              </h3>
            </div>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '0.25rem' }}>
                  $5 Trillion
                </p>
                <p style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>
                  Indian wealth locked behind complexity
                </p>
              </div>
              
              <div style={{ 
                background: 'rgba(0,0,0,0.3)', 
                borderRadius: pxToRem(8),
                padding: '0.75rem'
              }}>
                <p style={{ fontSize: '0.85rem', color: '#f87171', marginBottom: '0.5rem' }}>
                  ❌ Zero-tax leakage requirement
                </p>
                <p style={{ fontSize: '0.85rem', color: '#f87171', marginBottom: '0.5rem' }}>
                  ❌ Complex regulatory maze
                </p>
                <p style={{ fontSize: '0.85rem', color: '#f87171' }}>
                  ❌ No direct market access
                </p>
              </div>
              
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', fontStyle: 'italic', marginTop: 'auto' }}>
                "Everyone wants in, nobody can enter"
              </p>
            </div>
          </motion.div>

          {/* Solution: Exclusive Access */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(16, 185, 129, 0.08))',
              borderRadius: pxToRem(12),
              padding: '1.5rem',
              border: '2px solid rgba(20, 184, 166, 0.3)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Key size={32} color="#14b8a6" />
              <h3 style={{ color: '#14b8a6', fontSize: '1.3rem', fontWeight: 'bold' }}>
                Our Solution
              </h3>
            </div>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.1))',
                borderRadius: pxToRem(8),
                padding: '1rem',
                border: '1px solid rgba(251, 191, 36, 0.3)'
              }}>
                <Building2 size={24} color="#fbbf24" style={{ marginBottom: '0.5rem' }} />
                <p style={{ fontSize: '1.1rem', color: '#fbbf24', fontWeight: 'bold' }}>
                  Vora + GIFT City
                </p>
                <p style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.25rem' }}>
                  Exclusive AIF License
                </p>
              </div>
              
              <div style={{ 
                background: 'rgba(0,0,0,0.3)', 
                borderRadius: pxToRem(8),
                padding: '0.75rem'
              }}>
                <p style={{ fontSize: '0.85rem', color: '#5eead4', marginBottom: '0.5rem' }}>
                  ✓ Zero tax on all gains
                </p>
                <p style={{ fontSize: '0.85rem', color: '#5eead4', marginBottom: '0.5rem' }}>
                  ✓ Full regulatory compliance
                </p>
                <p style={{ fontSize: '0.85rem', color: '#5eead4' }}>
                  ✓ Direct market access
                </p>
              </div>
              
              <div style={{ 
                marginTop: 'auto',
                background: 'rgba(20, 184, 166, 0.2)',
                borderRadius: pxToRem(8),
                padding: '0.75rem',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#14b8a6' }}>
                  18 Months
                </p>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Head start before competition
                </p>
              </div>
            </div>
          </motion.div>

          {/* Proof: Already Live */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(79, 70, 229, 0.08))',
              borderRadius: pxToRem(12),
              padding: '1.5rem',
              border: '2px solid rgba(99, 102, 241, 0.3)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <TrendingUp size={32} color="#6366f1" />
              <h3 style={{ color: '#6366f1', fontSize: '1.3rem', fontWeight: 'bold' }}>
                The Proof
              </h3>
            </div>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.1))',
                borderRadius: pxToRem(8),
                padding: '1rem',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#22c55e' }}>
                  LIVE NOW
                </p>
                <p style={{ fontSize: '0.9rem', color: '#e2e8f0', marginTop: '0.25rem' }}>
                  ARIA manages Vora AIF
                </p>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <div style={{
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: pxToRem(8),
                  padding: '0.5rem',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fbbf24' }}>
                    <IndianRupee style={{ display: 'inline' }} size={16} />100Cr
                  </p>
                  <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                    Target AUM
                  </p>
                </div>
                <div style={{
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: pxToRem(8),
                  padding: '0.5rem',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#a78bfa' }}>
                    24/7
                  </p>
                  <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                    AI Trading
                  </p>
                </div>
              </div>
              
              <div style={{
                marginTop: 'auto',
                padding: '0.75rem',
                background: 'rgba(99, 102, 241, 0.2)',
                borderRadius: pxToRem(8),
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                  "ARIA is the AI CEO"
                </p>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  She makes all investment decisions
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'linear-gradient(90deg, rgba(20, 184, 166, 0.1), rgba(99, 102, 241, 0.1))',
            borderRadius: pxToRem(12),
            border: '1px solid rgba(20, 184, 166, 0.3)',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
          }}
        >
          <p style={{ fontSize: '1.1rem', color: '#14b8a6', fontWeight: '600' }}>
            Year 1: Dominate India
          </p>
          <ArrowRight size={24} color="#94a3b8" />
          <p style={{ fontSize: '1.1rem', color: '#6366f1', fontWeight: '600' }}>
            Year 2: Expand to US
          </p>
          <ArrowRight size={24} color="#94a3b8" />
          <p style={{ fontSize: '1.1rem', color: '#a78bfa', fontWeight: '600' }}>
            Year 3-5: Go Global
          </p>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
