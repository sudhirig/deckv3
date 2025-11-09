import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { CheckCircle, TrendingUp, Users, Shield, Award, Sparkles, Activity } from 'lucide-react'
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
  
  return (
    <div className="slide-content act-slide" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Premium Particle Animation - 50 particles */}
      <ParticleBackground count={50} color="#a78bfa" />
      
      {/* Multi-layer Animated Gradients */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(167, 139, 250, 0.18) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 60%, rgba(192, 132, 252, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 80%, rgba(196, 181, 253, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 30%, rgba(167, 139, 250, 0.18) 0%, transparent 60%)'
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />
      
      {/* Animated Light Rays */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 360]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150%',
          height: '150%',
          background: 'conic-gradient(from 0deg, transparent, rgba(167, 139, 250, 0.1), transparent, rgba(192, 132, 252, 0.1), transparent)',
          zIndex: 1
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="act-content"
        style={{ position: 'relative', zIndex: 3 }}
      >
        {/* Act Number with Enhanced Animation */}
        <motion.div 
          className="act-number"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          style={{ 
            position: 'relative',
            display: 'inline-block',
            marginBottom: '1rem'
          }}
        >
          <motion.div
            animate={{ 
              scale: pulseAnimation ? [1, 1.05, 1] : 1,
              filter: pulseAnimation ? ['brightness(1)', 'brightness(1.2)', 'brightness(1)'] : 'brightness(1)'
            }}
            transition={{ duration: 2 }}
          >
            <GradientText gradient="from-purple-400 via-violet-400 to-indigo-400">
              ACT 4
            </GradientText>
          </motion.div>
          
          {/* Animated Sparkles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', top: -10, right: -10 }}
          >
            <Sparkles size={24} color="#a78bfa" />
          </motion.div>
        </motion.div>
        
        {/* Title with Premium Typography */}
        <motion.h1 
          className="act-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
          style={{ marginBottom: '0.5rem' }}
        >
          <GradientText gradient="from-purple-300 via-purple-400 to-violet-400">
            The Proof
          </GradientText>
        </motion.h1>
        
        {/* Subtitle with Animation */}
        <motion.p 
          className="act-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ 
            fontSize: '1.2rem',
            color: '#c084fc',
            marginBottom: '2rem'
          }}
        >
          Validation & Traction
        </motion.p>
        
        {/* Main Content Glass Card with Depth */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
          whileHover={{ scale: 1.02 }}
          style={{ 
            marginTop: '2rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.15), rgba(255, 255, 255, 0.03))',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '2px solid rgba(167, 139, 250, 0.3)',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          {/* Animated Halo Effect */}
          <motion.div
            animate={{ 
              opacity: pulseAnimation ? [0.1, 0.2, 0.1] : 0.1,
              scale: pulseAnimation ? [0.98, 1.02, 0.98] : 1
            }}
            transition={{ duration: 3 }}
            style={{
              position: 'absolute',
              inset: -20,
              background: 'radial-gradient(circle, rgba(167, 139, 250, 0.2), transparent)',
              borderRadius: '24px',
              filter: 'blur(20px)',
              zIndex: -1
            }}
          />
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{ 
              fontSize: '1.3rem',
              color: '#c084fc',
              marginBottom: '1.5rem',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <motion.div
              animate={{ rotate: pulseAnimation ? 360 : 0 }}
              transition={{ duration: 2 }}
            >
              <Award size={28} color="#c084fc" />
            </motion.div>
            Evidence of Success:
          </motion.div>
          
          <div style={{ fontSize: '1.1rem', lineHeight: '2', color: '#e2e8f0' }}>
            {[
              { text: 'Real clients generating measurable alpha', icon: TrendingUp, value: '18.5%', color: '#10b981' },
              { text: 'Live platform with Zerodha integration', icon: Activity, value: '100%', color: '#3b82f6' },
              { text: 'Competitive positioning validated by market', icon: CheckCircle, value: '97%', color: '#fbbf24' },
              { text: 'Triple lock advantages create 18-month moat', icon: Shield, value: '18mo', color: '#ef4444' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.15, duration: 0.6, type: 'spring' }}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ x: 10 }}
                style={{ 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  background: hoveredItem === index 
                    ? `linear-gradient(135deg, ${item.color}20, rgba(255, 255, 255, 0.05))`
                    : 'transparent',
                  borderLeft: `3px solid ${item.color}`,
                  transition: 'all 0.3s ease'
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: hoveredItem === index ? 360 : 0,
                    scale: hoveredItem === index ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon size={24} color={item.color} />
                </motion.div>
                <span style={{ flex: 1 }}>{item.text}</span>
                {item.value && (
                  <motion.span
                    animate={{ 
                      scale: pulseAnimation && index === 0 ? [1, 1.1, 1] : 1,
                      color: pulseAnimation ? item.color : '#94a3b8'
                    }}
                    transition={{ duration: 1 }}
                    style={{ 
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      color: item.color
                    }}
                  >
                    {item.value}
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Takeaway with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            style={{
              marginTop: '2rem',
              padding: '1rem',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(255, 255, 255, 0.02))',
              borderRadius: '12px',
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}
          >
            <div style={{ 
              fontSize: '1.1rem',
              color: '#22c55e',
              fontStyle: 'italic',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Users size={24} color="#22c55e" />
              </motion.div>
              Takeaway: This isn't theoretical - we're operational and winning with{' '}
              <AnimatedCounter value={127} duration={1500} />+ active users
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom Metrics Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem'
          }}
        >
          {[
            { label: 'Client Retention', value: 97, suffix: '%' },
            { label: 'Platform Uptime', value: 99.9, suffix: '%' },
            { label: 'Alpha Generated', value: 18.5, suffix: '%' }
          ].map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              style={{ textAlign: 'center' }}
            >
              <motion.div
                animate={{ 
                  scale: pulseAnimation ? [1, 1.05, 1] : 1,
                  color: pulseAnimation ? '#a78bfa' : '#c084fc'
                }}
                transition={{ duration: 2, delay: index * 0.3 }}
                style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a78bfa' }}
              >
                <AnimatedCounter value={metric.value} decimals={metric.value < 100 ? 1 : 0} duration={1500} />
                {metric.suffix}
              </motion.div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}