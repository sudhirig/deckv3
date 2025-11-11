import React from 'react'
import { motion } from 'framer-motion'
import { HeroLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Brain, Mic, LayoutDashboard, MessageSquare, Zap, ArrowRight, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
import './SlideStyles.css'

const ZerodhaConceptSlide = () => {
  const backgroundVisual = (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.12) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(20, 184, 166, 0.06) 0%, transparent 60%)',
      zIndex: 0
    }} />
  )

  const overlayContent = (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
          borderRadius: '1.25rem'
        }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            display: 'inline-block',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(251, 191, 36, 0.1) 100%)',
            borderRadius: '50%'
          }}
        >
          <Brain className="w-16 h-16 text-orange-400" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: '1rem' }}
        >
          <h3 style={{ fontSize: '1.8rem' }}>
            <GradientText gradient="from-orange-400 to-yellow-400">
              <AnimatedCounter end={toFiniteNumber(11)} duration={2} />ms Latency
            </GradientText>
          </h3>
          <p style={{ color: '#94a3b8' }}>Voice to Trade Execution</p>
        </motion.div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -3.125 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
            border: '0.0625rem solid rgba(168, 85, 247, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, transparent 30%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              zIndex: 0
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Brain className="w-7 h-7 text-purple-400 mr-3" />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                <GradientText gradient="from-purple-400 to-violet-400">ARIA Framework</GradientText>
              </h3>
            </div>
            
            <div style={{ space: 'y-4' }}>
              {[
                { letter: 'A', title: 'Analyze', desc: 'Real-time market scanning', color: '#a855f7' },
                { letter: 'R', title: 'Recommend', desc: 'AI-powered suggestions', color: '#8b5cf6' },
                { letter: 'I', title: 'Implement', desc: 'One-click execution', color: '#7c3aed' },
                { letter: 'A', title: 'Adapt', desc: 'Learn from outcomes', color: '#6d28d9' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -1.25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 0.3125, scale: 1.02 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    padding: '0.5rem',
                    background: `${item.color}10`,
                    borderRadius: '0.5rem',
                    border: `0.0625rem solid ${item.color}30`
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    style={{
                      color: item.color,
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      marginRight: '1rem',
                      width: '1.875rem'
                    }}
                  >
                    {item.letter}
                  </motion.span>
                  <div>
                    <span style={{ fontWeight: '600', color: '#e2e8f0' }}>{item.title}</span>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 3.125 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%)',
            border: '0.0625rem solid rgba(20, 184, 166, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)',
              transform: 'translate(-50%, -50%)',
              zIndex: 0
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <MessageSquare className="w-7 h-7 text-teal-400 mr-3" />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                <GradientText gradient="from-teal-400 to-cyan-400">ELIVATE System</GradientText>
              </h3>
            </div>
            
            <div style={{ space: 'y-4' }}>
              {[
                { letter: 'E', title: 'Engage', desc: 'Natural conversation', color: '#14b8a6' },
                { letter: 'L', title: 'Listen', desc: 'Understand intent', color: '#06b6d4' },
                { letter: 'I', title: 'Integrate', desc: 'Connect to Zerodha', color: '#0891b2' },
                { letter: 'V', title: 'Validate', desc: 'Risk checks', color: '#0e7490' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 1.25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: -0.3125, scale: 1.02 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    padding: '0.5rem',
                    background: `${item.color}10`,
                    borderRadius: '0.5rem',
                    border: `0.0625rem solid ${item.color}30`
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    style={{
                      color: item.color,
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      marginRight: '1rem',
                      width: '1.875rem'
                    }}
                  >
                    {item.letter}
                  </motion.span>
                  <div>
                    <span style={{ fontWeight: '600', color: '#e2e8f0' }}>{item.title}</span>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 1.25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="glass-card"
        style={{
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(20, 184, 166, 0.05) 100%)',
          border: '0.0625rem solid rgba(249, 115, 22, 0.3)',
          position: 'relative'
        }}
      >
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: '-0.125rem',
            background: 'linear-gradient(45deg, #f97316, #a855f7, #14b8a6, #f97316)',
            backgroundSize: '300% 300%',
            borderRadius: '1rem',
            opacity: 0.3,
            filter: 'blur(0.25rem)',
            zIndex: -1
          }}
        />
        
        <h4 style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '2rem', color: '#e2e8f0' }}>
          Seamless Trading Workflow
        </h4>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {[
            { icon: Mic, label: 'Voice Command', desc: '"Buy TCS"', color: '#f97316' },
            { icon: Brain, label: 'AI Analysis', desc: 'Risk & opportunity', color: '#a855f7' },
            { icon: LayoutDashboard, label: 'Dashboard Update', desc: 'Real-time P&L', color: '#14b8a6' },
            { icon: Zap, label: 'Instant Execution', desc: '11ms response', color: '#fbbf24' }
          ].map((item, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1, type: 'spring' }}
                style={{ textAlign: 'center' }}
              >
                <motion.div
                  animate={{ 
                    y: [-0.125, 0.125, -0.125],
                    rotate: index === 1 ? [0, 360] : 0
                  }}
                  transition={{ 
                    y: { duration: 2, repeat: Infinity },
                    rotate: { duration: 10, repeat: Infinity, ease: 'linear' }
                  }}
                  style={{
                    display: 'inline-block',
                    padding: '1rem',
                    background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                    borderRadius: '50%',
                    marginBottom: '0.5rem'
                  }}
                >
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </motion.div>
                <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0' }}>{item.label}</p>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.desc}</p>
              </motion.div>
              
              {index < 3 && (
                <motion.div
                  animate={{ x: [0, 0.625, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ color: '#94a3b8', fontSize: '1.5rem' }}
                >
                  →
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </>
  )

  return (
    <HeroLayout 
      title={<GradientText gradient="from-orange-400 via-amber-400 to-yellow-400">Chapter 1: Zerodha Trading Intelligence</GradientText>}
      subtitle="AI Layer Over Your Existing Broker"
      backgroundVisual={backgroundVisual}
      overlayContent={overlayContent}
    />
  )
}

export default ZerodhaConceptSlide
