import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { Clock, CheckCircle, AlertCircle, ArrowRight, Wallet } from 'lucide-react'

/**
 * SlideLockedToLiquidV2 - World-Class UI/UX
 * "From Locked to Liquid"
 * Layout: Split Timeline Comparison
 */
const SlideLockedToLiquidV2 = () => {
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem 4rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Module Badge */}
        <div style={{ 
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(139, 92, 246, 0.15)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '20px',
          padding: '0.4rem 1rem',
          marginBottom: '1rem',
          alignSelf: 'flex-start'
        }}>
          <Wallet size={14} color="#8B5CF6" />
          <span style={{ color: '#8B5CF6', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
            ARIA WEALTH
          </span>
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 4vw, 3rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem'
          }}>
            FROM LOCKED TO LIQUID
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8' }}>
            The friction of India investing, eliminated
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '3rem',
          flex: 1,
          alignItems: 'center',
          position: 'relative'
        }}>
          
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'rgba(239, 68, 68, 0.05)',
              borderRadius: '24px',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              padding: '2rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <AlertCircle size={24} color="#EF4444" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#EF4444', margin: 0 }}>THE OLD WAY</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
              {[
                { label: 'Find Advisor', time: '2-4 Weeks' },
                { label: 'Legal Setup', time: '4-6 Weeks' },
                { label: 'Fund Transfer', time: '1-2 Weeks' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(239,68,68,0.1)' }}>
                  <span style={{ color: '#94A3B8' }}>{item.label}</span>
                  <span style={{ color: '#EF4444', fontWeight: '600' }}>{item.time}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 'auto', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#EF4444', margin: 0 }}>~12 WEEKS</p>
              <p style={{ fontSize: '0.75rem', color: '#EF4444', margin: 0 }}>TOTAL TIME</p>
            </div>
          </motion.div>

          {/* VS Arrow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '2px', height: '100px', background: 'linear-gradient(to bottom, transparent, #94A3B8, transparent)' }} />
            <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '50%', border: '1px solid #94A3B8' }}>
              <ArrowRight size={24} color="#94A3B8" />
            </div>
            <div style={{ width: '2px', height: '100px', background: 'linear-gradient(to bottom, transparent, #94A3B8, transparent)' }} />
          </div>

          {/* ARIA Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(20, 184, 166, 0.05))',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '24px',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 40px rgba(20, 184, 166, 0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <CheckCircle size={24} color="#14B8A6" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#14B8A6', margin: 0 }}>ARIA WAY</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
              {[
                { label: 'Connect Account', time: '30 Seconds' },
                { label: 'KYC Verify', time: '2 Minutes' },
                { label: 'Structing', time: 'Instant' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(20, 184, 166, 0.1)' }}>
                  <span style={{ color: '#E2E8F0' }}>{item.label}</span>
                  <span style={{ color: '#14B8A6', fontWeight: '600' }}>{item.time}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 'auto', padding: '1rem', background: 'rgba(20, 184, 166, 0.2)', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#14B8A6', margin: 0 }}>&lt; 5 MINS</p>
              <p style={{ fontSize: '0.75rem', color: '#14B8A6', margin: 0 }}>TOTAL TIME</p>
            </div>
          </motion.div>

        </div>
      </div>
    </AspectFrame>
  )
}

export default SlideLockedToLiquidV2
