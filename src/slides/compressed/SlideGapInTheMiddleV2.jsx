import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { TrendingUp, TrendingDown, AlertTriangle, Check, X } from 'lucide-react'

/**
 * SlideGapInTheMiddleV2 - SIMPLIFIED World-class UI/UX
 * Bigger fonts, less text, cleaner layout
 */
const SlideGapInTheMiddleV2 = () => {

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2.5rem 3.5rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(251, 113, 133, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}
        >
          <h1 style={{
            fontSize: 'clamp(2.2rem, 3.5vw, 2.8rem)',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em'
          }}>
            THE GAP IN THE MIDDLE
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8' }}>
            <span style={{ color: '#FB7185', fontWeight: '600' }}>7.9M families</span> stuck between two worlds — too big for Robinhood, too small for Goldman
          </p>
        </motion.div>

        {/* Top Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          {[
            { value: '7.9M', label: 'Families Stuck', color: '#FB7185' },
            { value: '$107T', label: 'Total Wealth', color: '#14B8A6' },
            { value: '-$190K', label: 'Annual Loss', color: '#EF4444' },
            { value: '46%', label: 'Switching Now', color: '#FBBF24' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <p style={{ fontSize: '1.75rem', color: stat.color, fontWeight: '700', margin: 0 }}>{stat.value}</p>
              <p style={{ fontSize: '0.9rem', color: '#64748B', margin: '4px 0 0 0' }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main 3-Column Layout */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr 1fr',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Left - Robinhood */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'rgba(30, 41, 59, 0.5)',
              borderRadius: '20px',
              border: '1px solid rgba(100, 116, 139, 0.3)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>ROBINHOOD</p>
              <p style={{ fontSize: '2rem', color: '#94A3B8', fontWeight: '700', margin: 0 }}>{'<$500K'}</p>
            </div>

            <div style={{ flex: 1 }}>
              {[
                { label: 'US Only', good: false },
                { label: 'Stocks Only', good: false },
                { label: 'Self-Serve', good: true },
                { label: 'No India', good: false }
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem 0',
                  borderBottom: i < 3 ? '1px solid rgba(100, 116, 139, 0.15)' : 'none'
                }}>
                  {item.good ? <Check size={20} color="#14B8A6" /> : <X size={20} color="#64748B" />}
                  <p style={{ fontSize: '1.1rem', color: '#E2E8F0', margin: 0 }}>{item.label}</p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 'auto',
              padding: '1.25rem',
              background: 'rgba(100, 116, 139, 0.1)',
              borderRadius: '14px',
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <TrendingDown size={24} color="#64748B" />
                <span style={{ fontSize: '2rem', color: '#94A3B8', fontWeight: '700' }}>+1.5%</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748B', margin: '0.5rem 0 0 0' }}>Annual Alpha</p>
            </div>
          </motion.div>

          {/* Center - THE GAP (Hero) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.15), rgba(251, 113, 133, 0.05))',
              borderRadius: '24px',
              border: '2px solid rgba(251, 113, 133, 0.4)',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(251, 113, 133, 0.15)'
            }}
          >
            {/* Spectrum Bar */}
            <div style={{ width: '100%', marginBottom: '2rem' }}>
              <div style={{
                height: '12px',
                background: 'linear-gradient(90deg, #64748B 0%, #FB7185 50%, #14B8A6 100%)',
                borderRadius: '6px',
                position: 'relative'
              }}>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '28px',
                    height: '28px',
                    background: '#FB7185',
                    borderRadius: '50%',
                    border: '4px solid #0A1628',
                    boxShadow: '0 0 24px rgba(251, 113, 133, 0.7)'
                  }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#64748B' }}>Robinhood</span>
                <span style={{ fontSize: '1rem', color: '#FB7185', fontWeight: '700' }}>YOU ARE HERE</span>
                <span style={{ fontSize: '0.9rem', color: '#14B8A6' }}>Goldman</span>
              </div>
            </div>

            {/* STUCK Message */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
              <AlertTriangle size={72} color="#FB7185" style={{ marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '3.5rem', color: '#FFFFFF', fontWeight: '700', margin: 0, letterSpacing: '-0.02em' }}>STUCK</h2>
              <p style={{ fontSize: '1.25rem', color: '#94A3B8', margin: '0.5rem 0 0 0' }}>$1M - $25M Portfolio</p>
            </motion.div>

            {/* Loss Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                padding: '1.5rem 3rem',
                background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.25), rgba(251, 113, 133, 0.1))',
                borderRadius: '16px',
                border: '1px solid rgba(251, 113, 133, 0.4)',
                textAlign: 'center'
              }}
            >
              <p style={{ fontSize: '0.9rem', color: '#FB7185', margin: 0, fontWeight: '600', letterSpacing: '0.1em' }}>ANNUAL LOSS PER FAMILY</p>
              <motion.p
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ fontSize: '3.5rem', color: '#FFFFFF', margin: '0.25rem 0 0 0', fontWeight: '700' }}
              >
                -$190K
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right - Goldman */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(20, 184, 166, 0.03))',
              borderRadius: '20px',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.9rem', color: '#14B8A6', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>GOLDMAN</p>
              <p style={{ fontSize: '2rem', color: '#14B8A6', fontWeight: '700', margin: 0 }}>$25M+</p>
            </div>

            <div style={{ flex: 1 }}>
              {[
                { label: 'Global Access' },
                { label: '+ Alternatives' },
                { label: 'White Glove' },
                { label: '0% India Tax' }
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem 0',
                  borderBottom: i < 3 ? '1px solid rgba(20, 184, 166, 0.15)' : 'none'
                }}>
                  <Check size={20} color="#14B8A6" />
                  <p style={{ fontSize: '1.1rem', color: '#E2E8F0', margin: 0 }}>{item.label}</p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 'auto',
              padding: '1.25rem',
              background: 'rgba(20, 184, 166, 0.1)',
              borderRadius: '14px',
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <TrendingUp size={24} color="#14B8A6" />
                <span style={{ fontSize: '2rem', color: '#14B8A6', fontWeight: '700' }}>+8.2%</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#14B8A6', margin: '0.5rem 0 0 0' }}>Annual Alpha</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '1.5rem',
            padding: '1rem 2rem',
            background: 'rgba(30, 41, 59, 0.5)',
            borderRadius: '16px',
            border: '1px solid rgba(251, 191, 36, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <AlertTriangle size={24} color="#FBBF24" />
            <span style={{ fontSize: '1.1rem', color: '#FBBF24', fontWeight: '600' }}>THE THREE FAILURES:</span>
          </div>
          
          <div style={{ display: 'flex', gap: '3rem' }}>
            {[
              { title: 'Tax', detail: 'Miss 2% alpha' },
              { title: 'Alternatives', detail: '80% in PDFs' },
              { title: 'India', detail: '$5T locked' }
            ].map((failure) => (
              <div key={failure.title} style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '1.1rem', color: '#FFFFFF', margin: 0, fontWeight: '600' }}>{failure.title}</p>
                <p style={{ fontSize: '0.85rem', color: '#FBBF24', margin: '2px 0 0 0' }}>{failure.detail}</p>
              </div>
            ))}
          </div>

          <div style={{
            padding: '0.75rem 1.25rem',
            background: 'rgba(20, 184, 166, 0.15)',
            borderRadius: '10px',
            border: '1px solid rgba(20, 184, 166, 0.3)'
          }}>
            <p style={{ fontSize: '1rem', color: '#14B8A6', margin: 0, fontWeight: '600' }}>$124T transferring NOW</p>
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideGapInTheMiddleV2
