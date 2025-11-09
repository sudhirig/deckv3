import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import ParticleBackground from '../components/ParticleBackground'
import { Shield, Award, Lock, CheckCircle } from 'lucide-react'
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
    <div className="slide-content title-slide" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Premium Particle Animation */}
      <ParticleBackground count={45} color="#14b8a6" />
      
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
      
      <div className="title-content" style={{ position: 'relative', zIndex: 2 }}>
        <AnimatedText delay={0.2}>
          <h1 className="main-title">
            <GradientText gradient="from-teal-400 via-cyan-400 to-green-400">
              The AI-Powered Digital Family Office
            </GradientText>
          </h1>
        </AnimatedText>
        
        <AnimatedText delay={0.4}>
          <p className="subtitle">
            Institutional-Grade Wealth Management<br />
            For the Next Generation
          </p>
        </AnimatedText>
        
        {/* Sequential Moat Reveal with Descriptions */}
        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
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
                marginBottom: '1rem',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 2rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  border: '1px solid rgba(20, 184, 166, 0.3)'
                }}
              >
                <span style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold',
                  color: '#14b8a6',
                  marginRight: '1rem'
                }}>
                  {index + 1}.
                </span>
                <span style={{ 
                  fontSize: '1.3rem', 
                  color: '#fff',
                  marginRight: '1rem'
                }}>
                  {moat.text}
                </span>
                <span style={{ 
                  fontSize: '0.9rem', 
                  color: '#94a3b8'
                }}>
                  {moat.description}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <AnimatedText delay={2.0}>
          <p className="tagline">The entire pitch in one line: Our three "alpha" moats</p>
        </AnimatedText>
        
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem',
            marginBottom: '1.5rem'
          }}
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.6 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -5 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                border: '1px solid rgba(20, 184, 166, 0.2)'
              }}
            >
              {React.createElement(badge.icon, { 
                size: 28, 
                color: '#14b8a6',
                style: { marginBottom: '0.25rem' }
              })}
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: 'bold', 
                color: '#fff' 
              }}>
                {badge.label}
              </span>
              <span style={{ 
                fontSize: '0.7rem', 
                color: '#94a3b8' 
              }}>
                {badge.subtext}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Media Logos - "As Seen In" */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.0, duration: 0.8 }}
          style={{
            marginTop: '1.5rem',
            textAlign: 'center'
          }}
        >
          <p style={{ 
            fontSize: '0.8rem', 
            color: '#94a3b8', 
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            As Featured In
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            {mediaLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.7, x: 0 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ delay: 3.2 + index * 0.1, duration: 0.4 }}
                style={{
                  fontSize: '1rem',
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
        
        <AnimatedText delay={3.8}>
          <p className="date" style={{ marginTop: '1rem' }}>November 2025</p>
        </AnimatedText>
      </div>
      
      <div className="tech-background"></div>
    </div>
  )
}
