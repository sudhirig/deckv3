import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { Globe, Lock, ArrowRight, CheckCircle } from 'lucide-react'

/**
 * SlideIndiaGatewayV2 - World-Class UI/UX
 * "The India Gateway Fund"
 * Layout: 2-Column (Text Left, Visual Right)
 */
const SlideIndiaGatewayV2 = () => {
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
        {/* Background Mesh */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '60%',
          height: '100%',
          background: 'radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '3rem', position: 'relative', zIndex: 1 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <Globe size={28} color="#EC4899" />
            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '800',
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              INDIA GATEWAY
            </h1>
          </div>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8' }}>
            Everyone wants in. Nobody can enter. <span style={{ color: '#EC4899', fontWeight: '600' }}>ARIA is the key.</span>
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          flex: 1,
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                background: 'rgba(236, 72, 153, 0.1)',
                border: '1px solid rgba(236, 72, 153, 0.2)',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '2rem'
              }}
            >
              <p style={{ fontSize: '0.9rem', color: '#EC4899', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700', margin: '0 0 0.5rem 0' }}>
                THE PROBLEM
              </p>
              <p style={{ fontSize: '1.1rem', color: '#E2E8F0', margin: 0 }}>
                35% tax, complex regulations, and restricted access via traditional routes.
              </p>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: 'GIFT City AIF', desc: 'Exclusive channel partner' },
                { label: '0% Tax', desc: 'On capital gains for non-residents' },
                { label: 'Seamless Access', desc: 'One-click deployment via ARIA' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
                >
                  <CheckCircle size={24} color="#14B8A6" style={{ marginTop: '2px' }} />
                  <div>
                    <p style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>{item.label}</p>
                    <p style={{ fontSize: '0.9rem', color: '#94A3B8', margin: '2px 0 0 0' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {/* Big Circle */}
            <div style={{
              width: '360px',
              height: '360px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.05))',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '5rem', fontWeight: '800', color: '#EC4899', margin: 0, lineHeight: 1 }}>$5T</p>
                <p style={{ fontSize: '1.25rem', color: '#E2E8F0', margin: '0.5rem 0 0 0' }}>Market Opportunity</p>
              </div>

              {/* Orbiting Badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: -20,
                  borderRadius: '50%',
                  border: '1px dashed rgba(236, 72, 153, 0.2)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  right: -16,
                  width: '32px',
                  height: '32px',
                  background: '#0a0f1b',
                  border: '1px solid #EC4899',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Lock size={14} color="#EC4899" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default SlideIndiaGatewayV2
