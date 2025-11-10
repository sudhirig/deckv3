import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import { HeroLayout } from '../components/StandardLayouts'
import { Brain, Users, MessageSquare, Network, Cpu, Zap, GitBranch, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

const AgenticAIConceptSlide = () => {
  const title = (
    <GradientText gradient="from-purple-400 via-violet-400 to-pink-400">
      Chapter 3: Agentic AI System
    </GradientText>
  )

  const subtitle = "Multi-Agent Collaboration Architecture"

  const backgroundVisual = (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 50% 30%, rgba(168, 85, 247, 0.12) 0%, transparent 60%), radial-gradient(circle at 20% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.06) 0%, transparent 50%)',
      zIndex: 0
    }} />
  )

  const overlayContent = (
    <motion.div
      initial={{ opacity: 0, y: 3.125 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="glass-card"
      style={{ position: 'relative', zIndex: 1, maxWidth: '75rem', margin: '0 auto' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="glass-card"
        style={{
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1,
          zIndex: 0
        }}>
          <motion.line
            x1="20%" y1="50%" x2="50%" y2="50%"
            stroke="#a855f7"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line
            x1="50%" y1="50%" x2="80%" y2="50%"
            stroke="#3b82f6"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />
        </svg>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <Network className="w-7 h-7 text-purple-400 mr-3" />
            <h3 style={{ fontSize: '1.3rem', color: '#a855f7' }}>Agent Collaboration Network</h3>
            <Sparkles className="w-5 h-5 text-purple-400 ml-3" />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { icon: Brain, title: 'Master Coordinator', desc: 'Orchestrates all agents', color: '#3b82f6', delay: 0 },
              { icon: Users, title: 'Specialist Agents', desc: 'Domain expertise', color: '#10b981', delay: 1 },
              { icon: MessageSquare, title: 'Consensus Builder', desc: 'Resolves conflicts', color: '#a855f7', delay: 2 }
            ].map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                style={{ textAlign: 'center' }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: agent.delay * 120
                  }}
                  transition={{ 
                    scale: { duration: 2, repeat: Infinity, delay: agent.delay },
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
                  }}
                  style={{
                    width: '5rem',
                    height: '5rem',
                    background: `linear-gradient(135deg, ${agent.color}30, ${agent.color}10)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    border: `2px solid ${agent.color}50`,
                    position: 'relative'
                  }}
                >
                  <agent.icon className="w-10 h-10" style={{ color: agent.color }} />
                  
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: pxToRem(-5),
                      left: '50%',
                      width: '0.625rem',
                      height: '0.625rem',
                      background: agent.color,
                      borderRadius: '50%',
                      transform: 'translateX(-50%)'
                    }} />
                  </motion.div>
                </motion.div>
                
                <p style={{ fontSize: '1rem', fontWeight: '600', color: agent.color, marginBottom: '0.25rem' }}>
                  {agent.title}
                </p>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{agent.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <GitBranch className="w-7 h-7 text-teal-400 mr-3" />
            <h4 style={{ fontSize: '1.2rem', color: '#14b8a6' }}>Agent Communication</h4>
          </div>
          
          <div style={{ space: 'y-3' }}>
            {[
              { feature: 'Shared memory context', icon: Cpu, color: '#14b8a6' },
              { feature: 'Event-driven messaging', icon: Zap, color: '#06b6d4' },
              { feature: 'Parallel processing', icon: GitBranch, color: '#0891b2' },
              { feature: 'Conflict resolution', icon: MessageSquare, color: '#0e7490' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem',
                  marginBottom: '0.75rem',
                  background: `${item.color}10`,
                  borderRadius: '0.5rem',
                  border: `1px solid ${item.color}30`
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10 + index * 2, repeat: Infinity, ease: 'linear' }}
                >
                  <item.icon className="w-5 h-5 mr-3" style={{ color: item.color }} />
                </motion.div>
                <span style={{ color: '#e2e8f0' }}>{item.feature}</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  style={{ marginLeft: 'auto', color: item.color }}
                >
                  →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(251, 146, 60, 0.05) 100%)',
            border: '1px solid rgba(249, 115, 22, 0.3)',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <Cpu className="w-7 h-7 text-orange-400 mr-3" />
            <h4 style={{ fontSize: '1.2rem', color: '#f97316' }}>Decision Process</h4>
          </div>
          
          <div style={{ space: 'y-3' }}>
            {[
              { step: '1. Task Assignment', time: '2s', progress: 100 },
              { step: '2. Parallel Analysis', time: '5s', progress: 80 },
              { step: '3. Opinion Synthesis', time: '3s', progress: 90 },
              { step: '4. Final Decision', time: '1s', progress: 100 }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                style={{ marginBottom: '1rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{process.step}</span>
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                    style={{ fontSize: '0.8rem', color: '#94a3b8' }}
                  >
                    {process.time}
                  </motion.span>
                </div>
                <div style={{ height: '0.375rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '0.1875rem', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${process.progress}%` }}
                    transition={{ delay: 1.3 + index * 0.15, duration: 0.8 }}
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #f97316, #fbbf24)',
                      boxShadow: '0 0 0.625rem rgba(249, 115, 22, 0.5)'
                    }}
                  />
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              style={{
                marginTop: '1rem',
                padding: '0.75rem',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
                borderRadius: '0.5rem',
                textAlign: 'center'
              }}
            >
              <p style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: '600' }}>
                Total Time: <AnimatedCounter end={11} duration={1000} />s
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        className="glass-card"
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
          border: '1px solid rgba(168, 85, 247, 0.3)'
        }}
      >
        <h4 style={{ fontSize: '1.2rem', color: '#e2e8f0', textAlign: 'center', marginBottom: '1.5rem' }}>
          Sample: Portfolio Review Request
        </h4>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {[
            { iconType: 'user', iconGradient: 'from-blue-400 to-cyan-400', label: 'User Request', color: '#94a3b8' },
            { iconType: 'bot', iconGradient: 'from-purple-400 to-pink-400', label: '9 Agents Activate', color: '#a855f7' },
            { iconType: 'refresh', iconGradient: 'from-blue-400 to-cyan-400', label: 'Parallel Analysis', color: '#3b82f6' },
            { iconType: 'sparkles', iconGradient: 'from-teal-400 to-green-400', label: 'Consensus Result', color: '#10b981' }
          ].map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9 + index * 0.1, type: 'spring' }}
                style={{ textAlign: 'center' }}
              >
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  style={{ marginBottom: '0.5rem' }}
                >
                  <Icon type={step.iconType} size={28} variant="inline" gradient={step.iconGradient} />
                </motion.div>
                <p style={{ fontSize: '0.8rem', color: step.color }}>{step.label}</p>
              </motion.div>
              
              {index < 3 && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{ color: '#a855f7' }}
                >
                  →
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <HeroLayout
      title={title}
      subtitle={subtitle}
      backgroundVisual={backgroundVisual}
      overlayContent={overlayContent}
    />
  )
}

export default AgenticAIConceptSlide
