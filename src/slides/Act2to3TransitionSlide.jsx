import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { AspectFrame } from '../components/StandardLayouts'
import { ArrowRight, Users, Brain, Shield, CheckCircle, Sparkles, Code, Database, Zap } from 'lucide-react'
import { SPACING, TYPOGRAPHY, pxToRem } from '../utils/responsive'
import './SlideStyles.css'

const Act2to3TransitionSlide = () => {
  return (
    <AspectFrame>
      <div className="act-slide" style={{ position: 'relative' }}>
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 60%), radial-gradient(circle at 20% 70%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
        zIndex: 0
      }} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="act-content"
        style={{ position: 'relative', zIndex: 1, maxWidth: pxToRem(1200), margin: '0 auto' }}
      >
        {/* Journey Progress */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: SPACING.xl }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: SPACING.lg, marginBottom: SPACING.sm }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                width: pxToRem(80),
                height: pxToRem(80),
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #3b82f6)',
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
                <span style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#3b82f6' }}>
                  <AnimatedCounter end={40} duration={1500} />%
                </span>
              </div>
            </motion.div>
            
            <div>
              <p style={{ fontSize: TYPOGRAPHY.body, color: '#94a3b8', marginBottom: SPACING.xs }}>JOURNEY PROGRESS</p>
              <h2 style={{ fontSize: TYPOGRAPHY.subheadline, color: '#fff', fontWeight: '600' }}>Act 2 → Act 3</h2>
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          style={{ textAlign: 'center', marginBottom: SPACING.xl }}
        >
          <h1 style={{ fontSize: TYPOGRAPHY.hero, fontWeight: '700', marginBottom: SPACING.sm }}>
            <GradientText gradient="from-blue-400 via-cyan-400 to-teal-400">
              Solution Defined
            </GradientText>
          </h1>
          <p style={{ fontSize: TYPOGRAPHY.subheadline, color: '#94a3b8' }}>
            Now, See the Proof in Action
          </p>
        </motion.div>

        {/* Central Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
          style={{
            textAlign: 'center',
            marginBottom: SPACING.xl,
            padding: SPACING.lg,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            borderRadius: pxToRem(20)
          }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              display: 'inline-block',
              padding: SPACING.md,
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(99, 102, 241, 0.1) 100%)',
              borderRadius: '50%',
              marginBottom: SPACING.md
            }}
          >
            <Sparkles className="w-16 h-16 text-blue-400" />
          </motion.div>
          
          <h2 style={{ fontSize: TYPOGRAPHY.hero, color: '#60a5fa', marginBottom: SPACING.sm }}>
            68+ AI Agents Working 24/7
          </h2>
          <p style={{ fontSize: TYPOGRAPHY.subheadline, color: '#94a3b8' }}>
            Let's see them in action
          </p>
        </motion.div>

        {/* Solution Architecture */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACING.xl, marginBottom: SPACING.xl }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: SPACING.md }}>
                <Code className="w-8 h-8 text-green-400 mr-3" />
                <h3 style={{ fontSize: SPACING.md, color: '#22c55e' }}>Solution Recap</h3>
              </div>
              
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#f8f9fa' }}>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  style={{ display: 'flex', alignItems: 'center', marginBottom: SPACING.sm }}
                >
                  <Brain className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                  <span>AI Family Office with <strong style={{ color: '#14b8a6' }}>68+ agents</strong></span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  style={{ display: 'flex', alignItems: 'center', marginBottom: SPACING.sm }}
                >
                  <Zap className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                  <span>Three <strong style={{ color: '#14b8a6' }}>alpha sources</strong> automated</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Shield className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                  <span><strong style={{ color: '#22c55e' }}>Institutional grade</strong>, retail access</span>
                </motion.div>
              </div>
              
              {/* Status Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                style={{ marginTop: SPACING.md, display: 'flex', justifyContent: 'space-between' }}
              >
                <CircularProgress value={100} size={50} strokeWidth={3} />
                <CircularProgress value={100} size={50} strokeWidth={3} />
                <CircularProgress value={100} size={50} strokeWidth={3} />
              </motion.div>
            </div>
          </motion.div>

          {/* Coming Next */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: SPACING.md }}>
                <Database className="w-8 h-8 text-blue-400 mr-3" />
                <h3 style={{ fontSize: SPACING.md, color: '#3b82f6' }}>Coming Next</h3>
              </div>
              
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#f8f9fa' }}>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.4 }}
                  style={{ display: 'flex', alignItems: 'center', marginBottom: SPACING.sm }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                  <span><strong style={{ color: '#60a5fa' }}>Live platform</strong> demonstration</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.4 }}
                  style={{ display: 'flex', alignItems: 'center', marginBottom: SPACING.sm }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                  <span>Real <strong style={{ color: '#60a5fa' }}>customer results</strong></span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.4 }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                  <span><strong style={{ color: '#3b82f6' }}>100% operational</strong> today</span>
                </motion.div>
              </div>
              
              {/* Live Pulse Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
                style={{ marginTop: SPACING.md, display: 'flex', justifyContent: 'center' }}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: pxToRem(60),
                    height: pxToRem(60),
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 50%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <div style={{
                      width: pxToRem(20),
                      height: pxToRem(20),
                      borderRadius: '50%',
                      background: '#3b82f6'
                    }} />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievement Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: SPACING.md,
            marginBottom: SPACING.lg
          }}
        >
          {[
            { icon: Users, label: 'Agents Ready', value: 68, color: '#8b5cf6' },
            { icon: Code, label: 'Modules Live', value: 7, color: '#3b82f6' },
            { icon: Zap, label: 'Response Time', value: 11, suffix: 'ms', color: '#14b8a6' },
            { icon: ArrowRight, label: 'Platform Status', value: 100, suffix: '%', color: '#22c55e' }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-card"
              style={{
                padding: SPACING.md,
                textAlign: 'center',
                background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}10 100%)`,
                border: `1px solid ${item.color}40`
              }}
            >
              <item.icon className="w-8 h-8 mx-auto mb-2" style={{ color: item.color }} />
              <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: item.color }}>
                <AnimatedCounter end={item.value} duration={1500 + index * 200} />
                {item.suffix}
              </div>
              <p style={{ fontSize: pxToRem(14), color: '#94a3b8' }}>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          style={{ 
            textAlign: 'center',
            padding: SPACING.md,
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
            borderRadius: pxToRem(16),
            border: '1px solid rgba(139, 92, 246, 0.3)'
          }}
        >
          <p style={{ fontSize: TYPOGRAPHY.subheadline, color: '#8b5cf6', fontWeight: 'bold' }}>
            Platform is 100% operational. Ready to see the deep dive?
          </p>
          <p style={{ fontSize: TYPOGRAPHY.body, color: '#94a3b8', marginTop: SPACING.xs }}>
            Let's explore our three defensible moats and live platform demos
          </p>
        </motion.div>
      </motion.div>
      </div>
    </AspectFrame>
  )
}

export default Act2to3TransitionSlide