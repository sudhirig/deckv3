import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GradientText from '../components/GradientText'
import { AspectFrame } from '../components/StandardLayouts'
import { TrendingUp, Brain, Globe, Sparkles, ChevronRight } from 'lucide-react'
import ARIAAvatar from '../components/ARIAAvatar'
import ARIALogo from '../components/ARIALogo'
import ARIAIconBadge from '../components/ARIAIconBadge'
import './SlideStyles.css'

export default function TitleSlide() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const features = [
    { 
      icon: Brain, 
      title: '68+ AI Specialists',
      subtitle: '5 Orchestrated Teams',
      color: '#14b8a6'
    },
    { 
      icon: Globe, 
      title: 'GIFT City Gateway',
      subtitle: 'Exclusive India Access',
      color: '#06b6d4'
    },
    { 
      icon: TrendingUp, 
      title: '50+ CPAs',
      subtitle: 'B2B2C Distribution',
      color: '#10b981'
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)'
      }}>
        
        {/* Animated Background Mesh */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(ellipse at 20% 30%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 80% 70%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 20% 30%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.6
          }}
        />
        
        {/* Floating Particles */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100
              }}
              animate={{ 
                y: -100,
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 20,
                ease: 'linear'
              }}
              style={{
                position: 'absolute',
                width: 2,
                height: 2,
                borderRadius: '50%',
                background: '#14b8a6',
                opacity: 0.3
              }}
            />
          ))}
        </div>

        {/* Main Content Container */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1
        }}>
          
          {/* Center Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '4rem',
            maxWidth: '1200px',
            width: '90%',
            alignItems: 'center'
          }}>
            
            {/* Left: Main Content */}
            <div>
              {/* Small Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(20, 184, 166, 0.1)',
                  border: '1px solid rgba(20, 184, 166, 0.3)',
                  borderRadius: '2rem',
                  marginBottom: '2rem'
                }}
              >
                <Sparkles size={16} color="#14b8a6" />
                <span style={{ color: '#14b8a6', fontSize: '0.875rem', fontWeight: '500' }}>
                  AI-Powered Wealth Management
                </span>
              </motion.div>
              
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ marginBottom: '1.5rem' }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    fontWeight: '700',
                    lineHeight: '1',
                    letterSpacing: '-0.02em'
                  }}>
                    <GradientText gradient="from-teal-400 via-cyan-400 to-emerald-400">
                      Meet ARIA
                    </GradientText>
                  </h1>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                  >
                    <ARIAIconBadge size={60} animated={true} />
                  </motion.div>
                </div>
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: '300',
                  color: '#e2e8f0',
                  lineHeight: '1.3',
                  letterSpacing: '-0.01em'
                }}>
                  Your AI Family Office CEO
                </h2>
              </motion.div>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                  color: '#94a3b8',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  maxWidth: '600px'
                }}
              >
                She orchestrates wealth like no human can — combining the precision of 
                68+ AI specialists with exclusive India market access to deliver 
                institutional-grade wealth management.
              </motion.p>
              
              {/* Website Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.8rem',
                  background: 'rgba(20, 184, 166, 0.1)',
                  border: '1px solid rgba(20, 184, 166, 0.2)',
                  borderRadius: '0.5rem',
                  marginBottom: '2rem'
                }}
              >
                <Globe size={14} color="#14b8a6" />
                <span style={{ color: '#14b8a6', fontSize: '0.875rem', fontWeight: '600' }}>
                  ARIAwealth.ai
                </span>
              </motion.div>
              
              {/* Feature Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '1rem',
                  marginBottom: '2rem',
                  maxWidth: '500px'
                }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    style={{
                      padding: '1.25rem',
                      background: `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))`,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <feature.icon 
                      size={24} 
                      color={feature.color} 
                      style={{ marginBottom: '0.75rem' }}
                    />
                    <div style={{ 
                      fontSize: '0.95rem', 
                      fontWeight: '600', 
                      color: '#e2e8f0',
                      marginBottom: '0.25rem'
                    }}>
                      {feature.title}
                    </div>
                    <div style={{ 
                      fontSize: '0.8rem', 
                      color: '#64748b'
                    }}>
                      {feature.subtitle}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
              >
                <div style={{
                  padding: '0.75rem 2rem',
                  background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                  borderRadius: '0.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}>
                  <span style={{ color: 'white', fontWeight: '600' }}>
                    Vora Ventures Backed
                  </span>
                  <ChevronRight size={18} color="white" />
                </div>
                
                <div style={{
                  padding: '0.75rem 1.5rem',
                  border: '1px solid rgba(20, 184, 166, 0.3)',
                  borderRadius: '0.5rem',
                  color: '#14b8a6',
                  fontWeight: '500'
                }}>
                  Live Prototype
                </div>
              </motion.div>
            </div>
            
            {/* Right: ARIA Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{
                position: 'relative',
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem'
              }}
            >
              {/* Glow Effect Behind ARIA */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: -1
              }} />
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ARIAAvatar 
                  size="hero" 
                  variant="gradient" 
                  animated={true}
                  showPulse={true}
                  showTitle={false}
                  mood="confident"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            padding: '1rem 2rem',
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '2rem'
          }}
        >
          <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
            GIFT City Exclusive
          </span>
          <span style={{ color: '#334155' }}>•</span>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <ARIAIconBadge size={35} animated={false} />
            <span style={{ 
              fontSize: '0.875rem',
              fontWeight: '600',
              letterSpacing: '-0.01em'
            }}>
              <span style={{ 
                background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>ARIA</span>
              <span style={{ color: '#64748b', fontWeight: '400' }}>wealth</span>
              <span style={{ 
                background: 'linear-gradient(135deg, #06b6d4, #10b981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>.ai</span>
            </span>
          </div>
          <span style={{ color: '#334155' }}>•</span>
          <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
            November 2025
          </span>
        </motion.div>
        
      </div>
    </AspectFrame>
  )
}
