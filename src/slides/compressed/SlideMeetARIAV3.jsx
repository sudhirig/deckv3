import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import ARIAAvatar from '../../components/ARIAAvatar'
import { Brain, Shield, TrendingUp, Globe, FileCheck, DollarSign } from 'lucide-react'

/**
 * SlideMeetARIAV3 - World-Class UI/UX
 * "The Value Proposition"
 * Merges "Meet ARIA" with "$1M vs $10K" Economics
 */
const SlideMeetARIAV3 = () => {
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 4rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Background Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 4vw, 3rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            MEET ARIA
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8' }}>
            The <span style={{ color: '#14B8A6', fontWeight: '700' }}>$1M Family Office</span> for <span style={{ color: '#FBBF24', fontWeight: '700' }}>$10K/Year</span>
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '4rem',
          flex: 1,
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          
          {/* Left: The Avatar & Teams */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             {/* Hero Avatar */}
             <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
             >
                <ARIAAvatar size="large" variant="gradient" animated={true} showPulse={true} showTitle={false} />
             </motion.div>

             {/* Orbiting Badges */}
             {[
               { label: 'Tax', icon: TrendingUp, x: -140, y: -80, color: '#FBBF24' },
               { label: 'Risk', icon: Shield, x: 140, y: -80, color: '#EF4444' },
               { label: 'India', icon: Globe, x: -140, y: 80, color: '#8B5CF6' },
               { label: 'Alts', icon: Brain, x: 140, y: 80, color: '#14B8A6' },
               { label: 'Legal', icon: FileCheck, x: 0, y: 150, color: '#3B82F6' },
             ].map((item, i) => (
               <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                style={{
                  position: 'absolute',
                  transform: `translate(${item.x}px, ${item.y}px)`,
                  background: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${item.color}40`,
                  borderRadius: '30px',
                  padding: '8px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: `0 4px 12px ${item.color}20`
                }}
               >
                 <item.icon size={16} color={item.color} />
                 <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '600' }}>{item.label}</span>
               </motion.div>
             ))}
          </div>

          {/* Right: The Economics Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Comparison Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                background: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(100, 116, 139, 0.2)',
                padding: '2rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1px 1fr',
                gap: '2rem'
              }}
            >
              {/* Old Way */}
              <div style={{ textAlign: 'center', opacity: 0.6 }}>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: '700', marginBottom: '1rem' }}>
                  Traditional Office
                </p>
                <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#EF4444', margin: 0 }}>
                  $1M+
                </p>
                <p style={{ fontSize: '0.9rem', color: '#EF4444', marginTop: '0.5rem' }}>
                  Annual Cost
                </p>
                <ul style={{ textAlign: 'left', marginTop: '1.5rem', fontSize: '0.85rem', color: '#94A3B8', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#EF4444' }}>×</span> 3-6 Month Lag</li>
                  <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#EF4444' }}>×</span> Manual Errors</li>
                  <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#EF4444' }}>×</span> Passive Reports</li>
                </ul>
              </div>

              {/* Divider */}
              <div style={{ background: 'rgba(255,255,255,0.1)' }} />

              {/* ARIA Way */}
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', color: '#14B8A6', textTransform: 'uppercase', fontWeight: '700', marginBottom: '1rem' }}>
                  ARIA OS
                </p>
                <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#14B8A6', margin: 0 }}>
                  $10K
                </p>
                <p style={{ fontSize: '0.9rem', color: '#14B8A6', marginTop: '0.5rem' }}>
                  Annual Subscription
                </p>
                 <ul style={{ textAlign: 'left', marginTop: '1.5rem', fontSize: '0.85rem', color: '#E2E8F0', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#14B8A6' }}>✓</span> Real-time Dashboard</li>
                  <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#14B8A6' }}>✓</span> AI Accuracy</li>
                  <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#14B8A6' }}>✓</span> Active Optimization</li>
                </ul>
              </div>
            </motion.div>

            {/* Bottom Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(16, 185, 129, 0.1))',
                borderRadius: '16px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                border: '1px solid rgba(20, 184, 166, 0.3)'
              }}
            >
              <DollarSign size={24} color="#14B8A6" />
              <p style={{ color: '#14B8A6', fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>
                Democratizing Access for the 99%
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default SlideMeetARIAV3
