import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { ChevronRight, Rocket, Lock, Unlock, Target, TrendingUp, Award } from 'lucide-react'
import './SlideStyles.css'

const Act1to2TransitionSlide = () => {
  return (
    <div className="slide-content act-slide" style={{ position: 'relative' }}>
      <ParticleBackground count={55} color="#22c55e" />
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 30% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)',
        zIndex: 0
      }} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="act-content"
        style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Journey Progress */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #22c55e, #14b8a6, #22c55e)',
                padding: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#0a0a0a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#22c55e' }}>
                  <AnimatedCounter end={20} duration={1500} />%
                </span>
              </div>
            </motion.div>
            
            <div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.25rem' }}>JOURNEY PROGRESS</p>
              <h2 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: '600' }}>Act 1 → Act 2</h2>
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '1rem' }}>
            <GradientText gradient="from-green-400 via-teal-400 to-cyan-400">
              The Problem is Clear
            </GradientText>
          </h1>
          <p style={{ fontSize: '1.8rem', color: '#94a3b8' }}>
            Now, Let's Reveal the Solution
          </p>
        </motion.div>

        {/* What We Learned */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, transparent 30%, rgba(239, 68, 68, 0.1) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
                zIndex: 0
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Lock className="w-8 h-8 text-red-400 mr-3" />
                <h3 style={{ fontSize: '1.5rem', color: '#ef4444' }}>What We Learned</h3>
              </div>
              
              <AnimatedText delay={0.8}>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#f8f9fa' }}>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
                  >
                    <Target className="w-5 h-5 text-red-300 mr-3 flex-shrink-0" />
                    <span><strong style={{ color: '#fbbf24' }}>93%</strong> of fund managers underperform AI</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0, duration: 0.4 }}
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
                  >
                    <TrendingUp className="w-5 h-5 text-red-300 mr-3 flex-shrink-0" />
                    <span><strong style={{ color: '#fbbf24' }}>46%</strong> of HNWIs switching advisors</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, duration: 0.4 }}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Award className="w-5 h-5 text-red-300 mr-3 flex-shrink-0" />
                    <span>Traditional wealth management is <strong style={{ color: '#ef4444' }}>broken</strong></span>
                  </motion.div>
                </div>
              </AnimatedText>
            </div>
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 5 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, transparent 30%, rgba(34, 197, 94, 0.1) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
                zIndex: 0
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Unlock className="w-8 h-8 text-green-400 mr-3" />
                <h3 style={{ fontSize: '1.5rem', color: '#22c55e' }}>What's Next</h3>
              </div>
              
              <AnimatedText delay={1.2}>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#f8f9fa' }}>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3, duration: 0.4 }}
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
                  >
                    <Rocket className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>An <strong style={{ color: '#14b8a6' }}>AI Investment Committee</strong></span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.4 }}
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
                  >
                    <ChevronRight className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>Three <strong style={{ color: '#14b8a6' }}>Alpha Agents</strong> creating returns</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.4 }}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <ChevronRight className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                    <span><strong style={{ color: '#22c55e' }}>100% operational</strong> platform today</span>
                  </motion.div>
                </div>
              </AnimatedText>
            </div>
          </motion.div>
        </div>

        {/* Visual Metaphor - Animated Lock Opening */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.8, type: 'spring' }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '3rem',
            padding: '2rem 3rem',
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(20, 184, 166, 0.3)'
          }}>
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Lock className="w-12 h-12 text-red-400" />
            </motion.div>
            
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-8 h-8 text-teal-400" />
            </motion.div>
            
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Unlock className="w-12 h-12 text-green-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{ 
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}
        >
          <p style={{ fontSize: '1.3rem', color: '#fbbf24', fontWeight: 'bold' }}>
            Ready to see how AI transforms wealth management?
          </p>
          <p style={{ fontSize: '1rem', color: '#94a3b8', marginTop: '0.5rem' }}>
            Let's explore the solution that's already managing real portfolios
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Act1to2TransitionSlide