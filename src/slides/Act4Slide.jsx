import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ActSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { CheckCircle, TrendingUp, Users, Shield, Award, Sparkles, Activity } from 'lucide-react'
import { pxToRem, SPACING, TYPOGRAPHY } from '../utils/responsive'
import './SlideStyles.css'

export default function Act4Slide() {
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [hoveredItem, setHoveredItem] = useState(null)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  
  // Title with animation
  const title = (
    <motion.div
      animate={{ 
        scale: pulseAnimation ? [1, 1.05, 1] : 1,
        filter: pulseAnimation ? ['brightness(1)', 'brightness(1.2)', 'brightness(1)'] : 'brightness(1)'
      }}
      transition={{ duration: 2 }}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <GradientText gradient="from-purple-400 via-violet-400 to-indigo-400">
        ACT 4
      </GradientText>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', top: pxToRem(-10), right: pxToRem(-10) }}
      >
        <Sparkles size={24} color="#a78bfa" />
      </motion.div>
    </motion.div>
  )
  
  // Subtitle
  const subtitle = (
    <GradientText gradient="from-violet-300 via-purple-300 to-indigo-300" animate>
      Proof of Traction
    </GradientText>
  )
  
  // Progress info
  const progressInfo = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Activity size={20} color="#a78bfa" />
        <span style={{ color: '#c4b5fd' }}>80% Complete</span>
      </div>
      <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
        Demonstrating Real Results
      </div>
    </div>
  )
  
  // Content blocks
  const contentBlocks = [
    // Block 1: Real Traction Today
    <motion.div
      key="traction"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHoveredItem('traction')}
      onHoverEnd={() => setHoveredItem(null)}
      className="glass-card"
      style={{
        padding: '2rem',
        background: hoveredItem === 'traction' 
          ? 'linear-gradient(135deg, rgba(167, 139, 250, 0.25), rgba(196, 181, 253, 0.15))'
          : 'linear-gradient(135deg, rgba(167, 139, 250, 0.15), rgba(196, 181, 253, 0.1))',
        borderLeft: `${pxToRem(4)} solid #a78bfa`,
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <CheckCircle size={32} color="#a78bfa" />
        <h3 style={{ color: '#a78bfa', fontSize: '1.5rem', margin: 0 }}>Real Traction Today</h3>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={{ padding: '1rem', background: 'rgba(167, 139, 250, 0.1)', borderRadius: pxToRem(8) }}>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#c4b5fd', marginBottom: '0.5rem' }}>
            $42M
          </p>
          <p style={{ fontSize: '1rem', color: '#e9d5ff' }}>Assets Under Management</p>
        </div>
        <div style={{ padding: '1rem', background: 'rgba(167, 139, 250, 0.1)', borderRadius: pxToRem(8) }}>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#c4b5fd', marginBottom: '0.5rem' }}>
            27
          </p>
          <p style={{ fontSize: '1rem', color: '#e9d5ff' }}>HNW Clients Live</p>
        </div>
        <div style={{ padding: '1rem', background: 'rgba(167, 139, 250, 0.1)', borderRadius: pxToRem(8) }}>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#c4b5fd', marginBottom: '0.5rem' }}>
            99.97%
          </p>
          <p style={{ fontSize: '1rem', color: '#e9d5ff' }}>Platform Uptime</p>
        </div>
        <div style={{ padding: '1rem', background: 'rgba(167, 139, 250, 0.1)', borderRadius: pxToRem(8) }}>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#c4b5fd', marginBottom: '0.5rem' }}>
            312%
          </p>
          <p style={{ fontSize: '1rem', color: '#e9d5ff' }}>Monthly Growth</p>
        </div>
      </div>
    </motion.div>,
    
    // Block 2: Proof Points
    <motion.div
      key="proof"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHoveredItem('proof')}
      onHoverEnd={() => setHoveredItem(null)}
      className="glass-card"
      style={{
        padding: '2rem',
        background: hoveredItem === 'proof' 
          ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.25), rgba(16, 185, 129, 0.15))'
          : 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.1))',
        borderLeft: `${pxToRem(4)} solid #22c55e`,
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <Award size={32} color="#22c55e" />
        <h3 style={{ color: '#22c55e', fontSize: '1.5rem', margin: 0 }}>Technology Validation</h3>
      </div>
      
      <ul style={{ fontSize: '1.2rem', lineHeight: '2', color: '#e2e8f0' }}>
        <li style={{ marginBottom: '1rem' }}>
          <strong style={{ color: '#86efac' }}>✓ Stanford Study:</strong> 93% of AI funds outperform human managers
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong style={{ color: '#86efac' }}>✓ Live Trading:</strong> Zerodha integration processing 1000+ trades daily
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong style={{ color: '#86efac' }}>✓ Tax Alpha:</strong> ₹1.55L saved per ₹1Cr portfolio annually
        </li>
        <li>
          <strong style={{ color: '#86efac' }}>✓ Client Success:</strong> 97% retention rate, 4.8★ satisfaction
        </li>
      </ul>
    </motion.div>,
    
    // Block 3: Market Opportunity
    <motion.div
      key="market"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHoveredItem('market')}
      onHoverEnd={() => setHoveredItem(null)}
      className="glass-card"
      style={{
        padding: '2rem',
        background: hoveredItem === 'market' 
          ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.25), rgba(249, 115, 22, 0.15))'
          : 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(249, 115, 22, 0.1))',
        borderLeft: `${pxToRem(4)} solid #fbbf24`,
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <TrendingUp size={32} color="#fbbf24" />
        <h3 style={{ color: '#fbbf24', fontSize: '1.5rem', margin: 0 }}>Market Timing Perfect</h3>
      </div>
      
      <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#e2e8f0' }}>
        <p style={{ marginBottom: '1rem' }}>
          <strong style={{ color: '#fbbf24' }}>46%</strong> of HNW investors switching advisors
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong style={{ color: '#fbbf24' }}>$124T</strong> wealth transfer in motion
        </p>
        <p>
          <strong style={{ color: '#fbbf24' }}>$5T</strong> India gateway opportunity via GIFT City
        </p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          marginTop: '1.5rem',
          padding: '1rem',
          background: 'rgba(251, 191, 36, 0.2)',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}
      >
        <p style={{ fontSize: '1.1rem', color: '#fde047' }}>
          "The largest wealth management disruption in 50 years"
        </p>
        <p style={{ fontSize: '0.9rem', color: '#fef3c7', marginTop: '0.5rem' }}>
          - McKinsey Wealth Report 2024
        </p>
      </motion.div>
    </motion.div>
  ]
  
  // CTA
  const cta = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(196, 181, 253, 0.1))',
        borderRadius: pxToRem(12),
        textAlign: 'center',
        border: `${pxToRem(2)} solid rgba(167, 139, 250, 0.3)`
      }}
    >
      <Shield size={40} color="#a78bfa" style={{ marginBottom: '1rem' }} />
      <p style={{ fontSize: '1.4rem', color: '#a78bfa', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        Ready to Scale
      </p>
      <p style={{ fontSize: '1.1rem', color: '#e2e8f0' }}>
        Proven technology • Real clients • Perfect timing • Let's accelerate growth
      </p>
    </motion.div>
  )
  
  return (
    <ActSlideLayout
      actNumber={title}
      actTitle={subtitle}
      progressInfo={progressInfo}
      contentBlocks={contentBlocks}
      cta={cta}
    />
  )
}