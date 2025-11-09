import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { Gem, TrendingUp, Users, Target, Rocket, DollarSign, Briefcase, Handshake } from 'lucide-react'
import { SPACING, TYPOGRAPHY, pxToRem } from '../utils/responsive'
import './SlideStyles.css'

const Act4to5TransitionSlide = () => {
  return (
    <div className="slide-content act-slide" style={{ position: 'relative' }}>
      <ParticleBackground count={60} color="#fbbf24" />
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)',
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
                background: 'conic-gradient(from 0deg, #fbbf24, #f59e0b, #d97706, #fbbf24)',
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
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fbbf24' }}>
                  <AnimatedCounter end={80} duration={1500} />%
                </span>
              </div>
            </motion.div>
            
            <div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.25rem' }}>JOURNEY PROGRESS</p>
              <h2 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: '600' }}>Act 4 → Act 5</h2>
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
            <GradientText gradient="from-yellow-400 via-amber-400 to-orange-400">
              Team & Growth Proven
            </GradientText>
          </h1>
          <p style={{ fontSize: TYPOGRAPHY.subheadline, color: '#94a3b8' }}>
            Now, The Partnership Opportunity
          </p>
        </motion.div>

        {/* Central Diamond */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
          style={{
            textAlign: 'center',
            marginBottom: SPACING.xl
          }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{
              display: 'inline-block',
              padding: SPACING.lg,
              background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(251, 191, 36, 0.1) 40%, transparent 70%)',
              borderRadius: '50%',
              marginBottom: SPACING.md
            }}
          >
            <Gem className="w-24 h-24 text-yellow-400" />
          </motion.div>
          
          <h2 style={{ fontSize: pxToRem(40), marginBottom: SPACING.xs }}>
            <GradientText gradient="from-yellow-400 to-orange-400">
              $5 Trillion Opportunity
            </GradientText>
          </h2>
          <p style={{ fontSize: pxToRem(19), color: '#94a3b8' }}>
            Ready to lead this transformation together
          </p>
        </motion.div>

        {/* Traction & Opportunity */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACING.xl, marginBottom: SPACING.xl }}>
          {/* Traction Achieved */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Glow Effect */}
            <motion.div
              animate={{ 
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)',
                zIndex: 0
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: SPACING.md }}>
                <TrendingUp className="w-8 h-8 text-amber-400 mr-3" />
                <h3 style={{ fontSize: SPACING.md, color: '#fbbf24' }}>Traction Achieved</h3>
              </div>
              
              <div style={{ fontSize: '1.1rem', lineHeight: '2', color: '#f8f9fa' }}>
                {[
                  { icon: Rocket, text: 'Platform operational at scale' },
                  { icon: DollarSign, text: '$3M → $250M growth path' },
                  { icon: Users, text: 'Revenue model validated' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                    style={{ display: 'flex', alignItems: 'center', marginBottom: pxToRem(12) }}
                  >
                    <item.icon className="w-5 h-5 text-amber-300 mr-3 flex-shrink-0" />
                    <span>{item.text}</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      style={{ marginLeft: 'auto' }}
                    >
                      <span style={{ color: '#fbbf24', fontSize: pxToRem(19) }}>✓</span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              {/* Key Metrics */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                style={{ marginTop: SPACING.md, paddingTop: SPACING.md, borderTop: '1px solid rgba(251, 191, 36, 0.2)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: SPACING.md, fontWeight: 'bold', color: '#fbbf24' }}>
                      <AnimatedCounter end={250} duration={1500} />M
                    </div>
                    <p style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>Target AUM</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: SPACING.md, fontWeight: 'bold', color: '#f59e0b' }}>
                      <AnimatedCounter end={17.8} decimals={1} duration={1500} />:1
                    </div>
                    <p style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>LTV/CAC</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: SPACING.md, fontWeight: 'bold', color: '#d97706' }}>
                      <AnimatedCounter end={3.5} decimals={1} duration={1500} />mo
                    </div>
                    <p style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>Payback</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Your Decision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Pulse Effect */}
            <motion.div
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '150%',
                height: '150%',
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)',
                transform: 'translate(-50%, -50%)',
                zIndex: 0
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: SPACING.md }}>
                <Handshake className="w-8 h-8 text-teal-400 mr-3" />
                <h3 style={{ fontSize: SPACING.md, color: '#14b8a6' }}>Your Decision</h3>
              </div>
              
              <div style={{ fontSize: '1.1rem', lineHeight: '2', color: '#f8f9fa' }}>
                {[
                  { icon: Briefcase, text: 'Lead the AI revolution' },
                  { icon: Target, text: "Capture India's $5T opportunity" },
                  { icon: Users, text: 'Join proven operators' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                    style={{ display: 'flex', alignItems: 'center', marginBottom: pxToRem(12) }}
                  >
                    <item.icon className="w-5 h-5 text-teal-300 mr-3 flex-shrink-0" />
                    <span>{item.text}</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                      style={{ marginLeft: 'auto' }}
                    >
                      <span style={{ color: '#14b8a6', fontSize: pxToRem(19) }}>→</span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              {/* Investment Highlights */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
                style={{ marginTop: SPACING.md, paddingTop: SPACING.md, borderTop: '1px solid rgba(20, 184, 166, 0.2)' }}
              >
                <p style={{ fontSize: pxToRem(19), color: '#14b8a6', fontWeight: 'bold', textAlign: 'center' }}>
                  $5M Seed Round
                </p>
                <p style={{ fontSize: pxToRem(14), color: '#94a3b8', textAlign: 'center', marginTop: SPACING.xs }}>
                  Lead the transformation of wealth management
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Final Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{ marginBottom: SPACING.lg }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'between', marginBottom: SPACING.sm }}>
            <span style={{ fontSize: pxToRem(14), color: '#94a3b8' }}>Journey to Partnership</span>
            <span style={{ fontSize: pxToRem(19), color: '#fbbf24', fontWeight: 'bold', marginLeft: 'auto' }}>
              <AnimatedCounter end={80} duration={1000} />% Complete
            </span>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{ width: '100%', height: pxToRem(12), background: 'rgba(255, 255, 255, 0.1)', borderRadius: pxToRem(6), overflow: 'hidden' }}>
              <motion.div
                initial={{ width: '60%' }}
                animate={{ width: '80%' }}
                transition={{ delay: 2.2, duration: 1, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #14b8a6)',
                  borderRadius: pxToRem(6),
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
                }}
              />
            </div>
            
            {/* Milestone Markers */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
              {[0, 20, 40, 60, 80, 100].map((pos, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: pos <= 80 ? 1 : 0.7 }}
                  transition={{ delay: 2.3 + index * 0.1 }}
                  style={{
                    position: 'absolute',
                    left: `${pos}%`,
                    width: pxToRem(8),
                    height: pxToRem(8),
                    borderRadius: '50%',
                    background: pos <= 80 ? '#fbbf24' : '#475569',
                    transform: 'translateX(-50%)'
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          style={{ 
            textAlign: 'center',
            padding: SPACING.lg,
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
            borderRadius: pxToRem(16),
            border: '1px solid rgba(139, 92, 246, 0.3)'
          }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Gem className="w-12 h-12 text-purple-400 mx-auto mb-2" />
          </motion.div>
          <p style={{ fontSize: pxToRem(21), color: '#a855f7', fontWeight: 'bold' }}>
            The moment is now. The team is ready. The platform is live.
          </p>
          <p style={{ fontSize: SPACING.sm, color: '#94a3b8', marginTop: SPACING.xs }}>
            Let's discuss how we build the future of wealth management together
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Act4to5TransitionSlide