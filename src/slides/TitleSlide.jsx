import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { AspectFrame } from '../components/StandardLayouts'
import { Shield, Award, Lock, CheckCircle } from 'lucide-react'
import { SPACING, TYPOGRAPHY, pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function TitleSlide() {
  const moats = [
    { text: 'Agentic AI', delay: 0.8, description: '68+ AI Agents Working 24/7' },
    { text: 'Tax Alpha', delay: 1.2, description: '₹1.55L Annual Savings' },
    { text: 'Alternative Access', delay: 1.6, description: 'GIFT City Exclusive Gateway' }
  ]

  const trustBadges = [
    { icon: Shield, label: 'SOC2', subtext: 'Compliant' },
    { icon: Lock, label: 'ISO27001', subtext: 'Certified' },
    { icon: Award, label: 'Bank-Grade', subtext: 'Security' }
  ]

  const mediaLogos = ['TechCrunch', 'Forbes', 'Bloomberg', 'WSJ', 'FT']

  return (
    <AspectFrame>
      <div className="title-slide" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />
      
      <div className="title-grid-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Left Column: Hero Text */}
        <div className="title-hero-column">
          <AnimatedText delay={0.2}>
            <h1 className="main-title">
              <GradientText gradient="from-teal-400 via-cyan-400 to-green-400">
                The AI-Powered Digital Family Office
              </GradientText>
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={0.4}>
            <p className="subtitle" style={{ marginBottom: pxToRem(24) }}>
              Institutional-Grade Wealth Management<br />
              For the Next Generation
            </p>
          </AnimatedText>

          <AnimatedText delay={3.8}>
            <p className="date">November 2025</p>
          </AnimatedText>
        </div>
        
        {/* Right Column: Supporting Content */}
        <div className="title-supporting-column">
          {/* Sequential Moat Reveal */}
          <div style={{ marginBottom: pxToRem(16) }}>
            {moats.map((moat, index) => (
              <motion.div
                key={moat.text}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  delay: moat.delay, 
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100
                }}
                style={{ 
                  marginBottom: pxToRem(10),
                  textAlign: 'left'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  style={{
                    padding: `${pxToRem(10)} ${pxToRem(16)}`,
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: `blur(${pxToRem(10)})`,
                    borderRadius: pxToRem(10),
                    border: '1px solid rgba(20, 184, 166, 0.3)'
                  }}
                >
                  <span style={{ 
                    fontSize: pxToRem(20), 
                    fontWeight: 'bold',
                    color: '#14b8a6',
                    marginRight: pxToRem(10)
                  }}>
                    {index + 1}.
                  </span>
                  <span style={{ 
                    fontSize: pxToRem(18), 
                    color: '#fff',
                    marginRight: pxToRem(10)
                  }}>
                    {moat.text}
                  </span>
                  <span style={{ 
                    fontSize: pxToRem(13), 
                    color: '#94a3b8'
                  }}>
                    {moat.description}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <AnimatedText delay={2.0}>
            <p className="tagline" style={{ fontSize: pxToRem(13), marginBottom: pxToRem(16) }}>
              The entire pitch in one line: Our three "alpha" moats
            </p>
          </AnimatedText>
          
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: pxToRem(12),
              marginBottom: pxToRem(12)
            }}
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.08, y: -3 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: pxToRem(8),
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: pxToRem(8),
                  border: '1px solid rgba(20, 184, 166, 0.2)',
                  flex: '1'
                }}
              >
                {React.createElement(badge.icon, { 
                  size: 24, 
                  color: '#14b8a6',
                  style: { marginBottom: pxToRem(4) }
                })}
                <span style={{ 
                  fontSize: pxToRem(12), 
                  fontWeight: 'bold', 
                  color: '#fff' 
                }}>
                  {badge.label}
                </span>
                <span style={{ 
                  fontSize: pxToRem(10), 
                  color: '#94a3b8' 
                }}>
                  {badge.subtext}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Media Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0, duration: 0.8 }}
          >
            <p style={{ 
              fontSize: pxToRem(11), 
              color: '#94a3b8', 
              marginBottom: pxToRem(8),
              textTransform: 'uppercase',
              letterSpacing: pxToRem(1.5)
            }}>
              As Featured In
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: pxToRem(12),
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              {mediaLogos.map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 0.7, x: 0 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  transition={{ delay: 3.2 + index * 0.1, duration: 0.4 }}
                  style={{
                    fontSize: pxToRem(14),
                    fontWeight: '600',
                    color: '#64748b',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="tech-background"></div>
    </div>
    </AspectFrame>
  )
}
