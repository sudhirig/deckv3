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
          
          {/* Left: The Avatar & Teams - Premium Version */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '450px', height: '400px' }}>
             
             {/* Connector Lines */}
             <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
               {[
                 { x: -160, y: -80 },
                 { x: 160, y: -80 },
                 { x: -160, y: 80 },
                 { x: 160, y: 80 },
                 { x: 0, y: 150 }
               ].map((pos, i) => (
                 <motion.line
                   key={i}
                   x1="225"
                   y1="200"
                   x2={225 + pos.x}
                   y2={200 + pos.y}
                   stroke="rgba(255,255,255,0.1)"
                   strokeWidth="1"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                 />
               ))}
             </svg>

             {/* Hero Avatar with Gradient Border */}
             <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                style={{ zIndex: 10 }}
             >
               <div style={{
                 padding: '4px',
                 background: 'linear-gradient(135deg, #14B8A6, #06B6D4)',
                 borderRadius: '50%',
                 boxShadow: '0 0 40px rgba(20, 184, 166, 0.4)'
               }}>
                 <div style={{
                   background: '#0f172a',
                   borderRadius: '50%',
                   padding: '8px',
                   width: '120px',
                   height: '120px',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center'
                 }}>
                   <ARIAAvatar size="large" variant="gradient" animated={true} showPulse={true} showTitle={false} />
                 </div>
               </div>
             </motion.div>

             {/* Orbiting Team Cards - Premium Style */}
             {[
               { label: 'Investment', detail: 'Global Macro Strategy', icon: Brain, x: -160, y: -80, color: '#14B8A6' },
               { label: 'Risk', detail: 'Real-time Protection', icon: Shield, x: 160, y: -80, color: '#EF4444' },
               { label: 'Tax', detail: 'Daily Harvesting', icon: TrendingUp, x: -160, y: 80, color: '#FBBF24' },
               { label: 'India', detail: 'GIFT City Access', icon: Globe, x: 160, y: 80, color: '#8B5CF6' },
               { label: 'Compliance', detail: 'Auto-Regulatory', icon: FileCheck, x: 0, y: 150, color: '#3B82F6' },
             ].map((item, i) => (
               <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: item.x, y: item.y }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.1, type: 'spring', stiffness: 50 }}
                style={{
                  position: 'absolute',
                  zIndex: 5,
                  background: 'rgba(30, 41, 59, 0.6)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(100, 116, 139, 0.3)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '0.6rem 1rem',
                  minWidth: '140px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                }}
               >
                 <div style={{
                   padding: '6px',
                   borderRadius: '8px',
                   background: `${item.color}20`,
                   color: item.color
                 }}>
                   <item.icon size={16} />
                 </div>
                 <div>
                   <p style={{ fontSize: '0.75rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>{item.label}</p>
                   <p style={{ fontSize: '0.6rem', color: '#94A3B8', margin: 0 }}>{item.detail}</p>
                 </div>
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
