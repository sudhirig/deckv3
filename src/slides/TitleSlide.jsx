import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { AspectFrame } from '../components/StandardLayouts'
import { Shield, Award, Lock } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function TitleSlide() {
  const moats = [
    { text: 'Agentic AI', description: '68+ AI Agents Working 24/7' },
    { text: 'Tax Alpha', description: '₹1.55L Annual Savings' },
    { text: 'Alternative Access', description: 'GIFT City Exclusive Gateway' }
  ]

  const trustBadges = [
    { icon: Shield, label: 'SOC2', subtext: 'Compliant' },
    { icon: Lock, label: 'ISO27001', subtext: 'Certified' },
    { icon: Award, label: 'Bank-Grade', subtext: 'Security' }
  ]

  const mediaLogos = ['TechCrunch', 'Forbes', 'Bloomberg', 'WSJ', 'FT']

  return (
    <AspectFrame>
      <div className="title-slide-container">
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
          className="title-slide-background"
        />
        
        <div className="title-slide-content">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="title-main-section"
          >
            <h1 className="title-main">
              <GradientText gradient="from-teal-400 via-cyan-400 to-green-400">
                The AI-Powered Digital Family Office
              </GradientText>
            </h1>
            
            <p className="title-subtitle">
              Institutional-Grade Wealth Management<br />
              For the Next Generation
            </p>
          </motion.div>
          
          {/* Three Moats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="title-moats-section"
          >
            {moats.map((moat, index) => (
              <motion.div
                key={moat.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="title-moat-card"
              >
                <span className="title-moat-number">{index + 1}.</span>
                <span className="title-moat-text">{moat.text}</span>
                <span className="title-moat-desc">{moat.description}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="title-tagline"
          >
            The entire pitch in one line: Our three "alpha" moats
          </motion.p>
          
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="title-badges-section"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.4 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="title-badge"
              >
                {React.createElement(badge.icon, { 
                  size: 24, 
                  color: '#14b8a6'
                })}
                <span className="title-badge-label">{badge.label}</span>
                <span className="title-badge-subtext">{badge.subtext}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Media Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="title-media-section"
          >
            <p className="title-media-label">As Featured In</p>
            <div className="title-media-logos">
              {mediaLogos.map((logo, index) => (
                <motion.span
                  key={logo}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 0.7, x: 0 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  transition={{ delay: 3.0 + index * 0.1, duration: 0.4 }}
                  className="title-media-logo"
                >
                  {logo}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6, duration: 0.8 }}
            className="title-date"
          >
            November 2025
          </motion.p>
        </div>
        
        <div className="tech-background"></div>
      </div>
    </AspectFrame>
  )
}
