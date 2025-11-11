import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import { Brain, Users, MessageSquare, Network, Cpu, Zap, GitBranch, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
import './SlideStyles.css'

const AgenticAIConceptSlide = () => {
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

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #1a1c3d 0%, #0f1629 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {backgroundVisual}
      
      {/* Header Section - constrained height */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          padding: `${pxToRem(16)} ${pxToRem(32)}`,
          maxHeight: '15vh',
          position: 'relative',
          zIndex: 1
        }}
      >
        <h1 style={{ 
          fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
          marginBottom: pxToRem(6)
        }}>
          <GradientText gradient="from-purple-400 via-violet-400 to-pink-400">
            Chapter 3: Agentic AI System
          </GradientText>
        </h1>
        <p style={{ 
          fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
          color: '#94a3b8'
        }}>
          Multi-Agent Collaboration Architecture
        </p>
      </motion.div>
      
      {/* Main Content - constrained height */}
      <div style={{
        flex: 1,
        maxHeight: '85vh',
        padding: `0 ${pxToRem(32)} ${pxToRem(24)}`,
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(0.75rem, 1.5vw, 1rem)'
      }}>
        {/* Agent Network Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
            border: `${pxToRem(1)} solid rgba(168, 85, 247, 0.3)`,
            position: 'relative',
            overflow: 'hidden',
            padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
            maxHeight: '35vh'
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
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: 'clamp(0.75rem, 1.2vw, 1rem)' 
            }}>
              <Network className="w-5 h-5 text-purple-400 mr-2" />
              <h3 style={{ 
                fontSize: 'clamp(0.95rem, 1.4vw, 1.2rem)', 
                color: '#a855f7' 
              }}>Agent Collaboration Network</h3>
              <Sparkles className="w-4 h-4 text-purple-400 ml-2" />
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: 'clamp(0.75rem, 1.2vw, 1rem)' 
            }}>
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
                      width: 'clamp(3rem, 5vw, 4rem)',
                      height: 'clamp(3rem, 5vw, 4rem)',
                      background: `linear-gradient(135deg, ${agent.color}30, ${agent.color}10)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto clamp(0.5rem, 1vw, 0.75rem)',
                      border: `${pxToRem(2)} solid ${agent.color}50`,
                      position: 'relative'
                    }}
                  >
                    <agent.icon className="w-6 h-6" style={{ color: agent.color }} />
                    
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
                        top: pxToRem(-3),
                        left: '50%',
                        width: pxToRem(6),
                        height: pxToRem(6),
                        background: agent.color,
                        borderRadius: '50%',
                        transform: 'translateX(-50%)'
                      }} />
                    </motion.div>
                  </motion.div>
                  
                  <p style={{ 
                    fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', 
                    fontWeight: '600', 
                    color: agent.color, 
                    marginBottom: pxToRem(2) 
                  }}>
                    {agent.title}
                  </p>
                  <p style={{ 
                    fontSize: 'clamp(0.6rem, 0.9vw, 0.7rem)', 
                    color: '#94a3b8' 
                  }}>{agent.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Two Column Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
          flex: 1,
          maxHeight: '45vh',
          overflow: 'hidden'
        }}>
          {/* Agent Communication Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
              border: `${pxToRem(1)} solid rgba(20, 184, 166, 0.3)`,
              position: 'relative',
              padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: 'clamp(0.75rem, 1.2vw, 1rem)' 
            }}>
              <GitBranch className="w-5 h-5 text-teal-400 mr-2" />
              <h4 style={{ 
                fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', 
                color: '#14b8a6' 
              }}>Agent Communication</h4>
            </div>
            
            <div style={{ flex: 1, overflow: 'auto' }}>
              {[
                'Real-time message passing',
                'Conflict resolution protocol',
                'Consensus mechanisms',
                'Parallel processing'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ x: 3, background: 'rgba(20, 184, 166, 0.1)' }}
                  style={{
                    padding: 'clamp(0.3rem, 0.6vw, 0.5rem)',
                    marginBottom: 'clamp(0.3rem, 0.6vw, 0.5rem)',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: pxToRem(4),
                    transition: 'all 0.3s'
                  }}
                >
                  <Zap className="w-3 h-3 text-teal-400 mr-2" />
                  <span style={{ 
                    fontSize: 'clamp(0.65rem, 0.95vw, 0.8rem)', 
                    color: '#e2e8f0' 
                  }}>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Processing Power Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)',
              border: `${pxToRem(1)} solid rgba(249, 115, 22, 0.3)`,
              position: 'relative',
              padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: 'clamp(0.75rem, 1.2vw, 1rem)' 
            }}>
              <Cpu className="w-5 h-5 text-orange-400 mr-2" />
              <h4 style={{ 
                fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', 
                color: '#f97316' 
              }}>Processing Power</h4>
            </div>
            
            <div style={{ 
              flex: 1, 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: 'clamp(0.4rem, 0.8vw, 0.6rem)' 
            }}>
              {[
                { label: 'Decisions/sec', value: 1000, color: '#f97316' },
                { label: 'Data points', value: '10M+', color: '#ec4899' },
                { label: 'Latency', value: '<100ms', color: '#a855f7' },
                { label: 'Accuracy', value: '99.9%', color: '#10b981' }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
                  style={{
                    textAlign: 'center',
                    padding: 'clamp(0.3rem, 0.6vw, 0.4rem)',
                    background: `${metric.color}10`,
                    borderRadius: pxToRem(4),
                    border: `${pxToRem(1)} solid ${metric.color}30`
                  }}
                >
                  <motion.p
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    style={{ 
                      fontSize: 'clamp(0.8rem, 1.2vw, 1rem)', 
                      fontWeight: 'bold', 
                      color: metric.color,
                      margin: 0
                    }}
                  >
                    {typeof metric.value === 'number' ? 
                      <AnimatedCounter end={toFiniteNumber(metric.value)} duration={2} /> : 
                      metric.value
                    }
                  </motion.p>
                  <p style={{ 
                    fontSize: 'clamp(0.55rem, 0.8vw, 0.65rem)', 
                    color: '#94a3b8',
                    margin: 0
                  }}>{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AgenticAIConceptSlide