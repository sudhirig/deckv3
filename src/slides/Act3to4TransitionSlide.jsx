import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { Rocket, Star, TrendingUp, Users, Target, Award, DollarSign, ArrowUpRight, CheckCircle } from 'lucide-react'
import { SPACING, TYPOGRAPHY, pxToRem } from '../utils/responsive'
import './SlideStyles.css'

const Act3to4TransitionSlide = () => {
  return (
    <div className="slide-content act-slide" style={{ position: 'relative' }}>
      <ParticleBackground count={55} color="#a855f7" />
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 50%)',
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
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                width: pxToRem(80),
                height: pxToRem(80),
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #a855f7, #8b5cf6, #14b8a6, #a855f7)',
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
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#a855f7' }}>
                  <AnimatedCounter end={60} duration={1500} />%
                </span>
              </div>
            </motion.div>
            
            <div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.25rem' }}>JOURNEY PROGRESS</p>
              <h2 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: '600' }}>Act 3 → Act 4</h2>
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
            <GradientText gradient="from-purple-400 via-violet-400 to-indigo-400">
              Proof Established
            </GradientText>
          </h1>
          <p style={{ fontSize: TYPOGRAPHY.subheadline, color: '#94a3b8' }}>
            Now, Meet the Team Building This
          </p>
        </motion.div>

        {/* Central Achievement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
          style={{
            textAlign: 'center',
            marginBottom: SPACING.xl,
            padding: pxToRem(40),
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
            borderRadius: pxToRem(24),
            border: '1px solid rgba(168, 85, 247, 0.3)'
          }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              display: 'inline-block',
              marginBottom: SPACING.md
            }}
          >
            <Rocket className="w-20 h-20 text-purple-400" />
          </motion.div>
          
          <h2 style={{ fontSize: pxToRem(40), marginBottom: SPACING.sm }}>
            <GradientText gradient="from-purple-400 to-pink-400">
              Ready to Scale
            </GradientText>
          </h2>
          
          {/* Key Metrics */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: SPACING.xl, marginTop: SPACING.lg }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: pxToRem(40), fontWeight: 'bold', color: '#fbbf24' }}>
                ₹<AnimatedCounter end={1.55} decimals={2} duration={1500} />L
              </div>
              <p style={{ fontSize: pxToRem(14), color: '#94a3b8' }}>Tax Saved</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: pxToRem(40), fontWeight: 'bold', color: '#14b8a6' }}>
                <AnimatedCounter end={68} duration={1500} />+
              </div>
              <p style={{ fontSize: pxToRem(14), color: '#94a3b8' }}>AI Agents</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: pxToRem(40), fontWeight: 'bold', color: '#8b5cf6' }}>
                $<AnimatedCounter end={5} duration={1500} />T
              </div>
              <p style={{ fontSize: pxToRem(14), color: '#94a3b8' }}>Market</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Proven Results & Growth Path */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACING.xl, marginBottom: SPACING.xl }}>
          {/* Proven Results */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: SPACING.md }}>
                <Star className="w-8 h-8 text-purple-400 mr-3" />
                <h3 style={{ fontSize: SPACING.md, color: '#a855f7' }}>Proven Results</h3>
              </div>
              
              <div style={{ fontSize: '1.1rem', lineHeight: '2', color: '#f8f9fa' }}>
                {[
                  { icon: Award, text: 'Platform live & operational' },
                  { icon: Users, text: '68+ AI agents deployed' },
                  { icon: DollarSign, text: '₹1.55L savings demonstrated' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                    style={{ display: 'flex', alignItems: 'center', marginBottom: pxToRem(12) }}
                  >
                    <item.icon className="w-5 h-5 text-purple-300 mr-3 flex-shrink-0" />
                    <span>{item.text}</span>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      style={{ marginLeft: 'auto' }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              {/* Success Metrics Grid */}
              <div style={{ marginTop: SPACING.md, paddingTop: SPACING.md, borderTop: '1px solid rgba(168, 85, 247, 0.2)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: SPACING.sm, textAlign: 'center' }}>
                  <div>
                    <CircularProgress value={100} size={40} strokeWidth={3} />
                    <p style={{ fontSize: pxToRem(12), color: '#94a3b8', marginTop: SPACING.xs }}>Live</p>
                  </div>
                  <div>
                    <CircularProgress value={100} size={40} strokeWidth={3} />
                    <p style={{ fontSize: pxToRem(12), color: '#94a3b8', marginTop: SPACING.xs }}>Tested</p>
                  </div>
                  <div>
                    <CircularProgress value={100} size={40} strokeWidth={3} />
                    <p style={{ fontSize: pxToRem(12), color: '#94a3b8', marginTop: SPACING.xs }}>Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Growth Path */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: SPACING.md }}>
                <TrendingUp className="w-8 h-8 text-teal-400 mr-3" />
                <h3 style={{ fontSize: SPACING.md, color: '#14b8a6' }}>Growth Path</h3>
              </div>
              
              <div style={{ space: 'y-4' }}>
                {[
                  { label: 'Market Opportunity', value: '$5T', trend: '+15% YoY' },
                  { label: 'Revenue Model', value: '3-tier', trend: '20/2/0.5%' },
                  { label: 'Scale Target', value: '1000x', trend: '30 months' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
                      padding: SPACING.sm,
                      borderRadius: pxToRem(12),
                      marginBottom: pxToRem(12),
                      border: '1px solid rgba(20, 184, 166, 0.2)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#94a3b8', fontSize: pxToRem(14) }}>{item.label}</span>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: pxToRem(21), fontWeight: 'bold', color: '#14b8a6' }}>{item.value}</div>
                        <div style={{ fontSize: pxToRem(12), color: '#6ee7b7' }}>{item.trend}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Growth Visualization */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                style={{ marginTop: SPACING.md }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: pxToRem(60) }}>
                  {[20, 35, 50, 70, 85, 100].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                      style={{
                        width: pxToRem(12),
                        background: `linear-gradient(to top, #14b8a6, #22c55e)`,
                        borderRadius: '4px 4px 0 0'
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Next Step */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{ 
            textAlign: 'center',
            padding: SPACING.lg,
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
            borderRadius: pxToRem(16),
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowUpRight className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
          </motion.div>
          <p style={{ fontSize: pxToRem(21), color: '#fbbf24', fontWeight: 'bold' }}>
            Platform Proven. Market Validated. Team Ready.
          </p>
          <p style={{ fontSize: SPACING.sm, color: '#94a3b8', marginTop: SPACING.xs }}>
            Let's meet the team making this $5T opportunity real
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Act3to4TransitionSlide