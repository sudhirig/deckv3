import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Brain, Shield, Globe, TrendingUp, Calculator, Activity, GitBranch, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

/**
 * AgenticSymphonyFixed - Full-screen layout
 */
export default function AgenticSymphonyFixed() {
  const [activeAgents, setActiveAgents] = useState([])
  const [currentAction, setCurrentAction] = useState(0)
  
  useEffect(() => {
    const agents = ['research', 'tax', 'india', 'risk', 'execution', 'monitoring']
    agents.forEach((agent, idx) => {
      setTimeout(() => setActiveAgents(prev => [...prev, agent]), idx * 300)
    })
    const actionTimer = setInterval(() => setCurrentAction(prev => (prev + 1) % 4), 2500)
    return () => clearInterval(actionTimer)
  }, [])

  const agentTypes = [
    { id: 'research', icon: Brain, color: '#3b82f6', name: 'Research', task: 'Analyzing data' },
    { id: 'tax', icon: Calculator, color: '#10b981', name: 'Tax', task: 'Optimizing strategies' },
    { id: 'india', icon: Globe, color: '#f59e0b', name: 'India', task: 'GIFT City opportunities' },
    { id: 'risk', icon: Shield, color: '#ef4444', name: 'Risk', task: 'Stress scenarios' },
    { id: 'execution', icon: TrendingUp, color: '#14b8a6', name: 'Execution', task: 'Best venues' },
    { id: 'monitoring', icon: Activity, color: '#8b5cf6', name: 'Monitor', task: 'Real-time tracking' }
  ]

  const collaborationActions = [
    'Research shares market insights with Tax for optimization',
    'Tax coordinates with India for GIFT City structuring',
    'Risk validates strategies with Execution for safety',
    'All agents converge on unified recommendation'
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        padding: '2rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1rem', position: 'relative', zIndex: 1 }}
        >
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '0.3rem' }}>
            <GradientText gradient="from-violet-400 to-purple-400">
              ARIA Agentic Symphony
            </GradientText>
          </h1>
          <p style={{ fontSize: '1rem', color: '#94a3b8' }}>
            Watch specialized agents collaborate on portfolio decisions in real-time
          </p>
        </motion.div>

        {/* Main Orchestra Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            flex: 1,
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(168, 85, 247, 0.05))',
            borderRadius: pxToRem(16),
            border: '1px solid rgba(139, 92, 246, 0.25)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}
        >
          {/* Collaboration Action Display - Top */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAction}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                right: '1rem',
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: pxToRem(10),
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <GitBranch size={18} color="#a855f7" />
              <span style={{ fontSize: '1rem', color: '#e2e8f0', flex: 1 }}>
                {collaborationActions[currentAction]}
              </span>
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a855f7' }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Central Brain */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 60px rgba(139, 92, 246, 0.5)',
              zIndex: 10,
              flexDirection: 'column'
            }}
          >
            <Brain size={40} color="#ffffff" />
            <span style={{ fontSize: '0.7rem', color: '#fff', marginTop: '0.25rem', fontWeight: '600' }}>ARIA</span>
          </motion.div>

          {/* Orbiting Agents */}
          {agentTypes.map((agent, idx) => {
            const angle = (idx * 60 - 90) * Math.PI / 180
            const radius = 140
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            const Icon = agent.icon
            const isActive = activeAgents.includes(agent.id)
            
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isActive ? 1 : 0.3, scale: isActive ? 1 : 0.8 }}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px - 35px)`,
                  top: `calc(50% + ${y}px - 35px)`,
                  width: '70px',
                  height: '70px',
                  background: isActive ? `${agent.color}20` : 'rgba(30, 41, 59, 0.5)',
                  border: `2px solid ${isActive ? agent.color : '#475569'}`,
                  borderRadius: pxToRem(12),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.25rem'
                }}
              >
                <Icon size={24} color={isActive ? agent.color : '#64748b'} />
                <span style={{ fontSize: '0.7rem', color: isActive ? agent.color : '#64748b', fontWeight: '600' }}>
                  {agent.name}
                </span>
              </motion.div>
            )
          })}

          {/* Agent Details - Bottom */}
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            right: '1rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '0.5rem'
          }}>
            {agentTypes.map(agent => {
              const isActive = activeAgents.includes(agent.id)
              return (
                <motion.div
                  key={agent.id}
                  animate={{ opacity: isActive ? 1 : 0.4 }}
                  style={{
                    background: isActive ? 'rgba(30, 41, 59, 0.9)' : 'rgba(30, 41, 59, 0.4)',
                    borderRadius: pxToRem(8),
                    padding: '0.5rem',
                    border: `1px solid ${isActive ? agent.color : '#475569'}40`,
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: isActive ? agent.color : '#64748b', fontWeight: '600' }}>
                    {agent.name}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: isActive ? '#94a3b8' : '#475569', marginTop: '0.2rem' }}>
                    {isActive ? agent.task : 'Standby'}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '1rem',
            padding: '0.85rem 1.5rem',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(168, 85, 247, 0.08))',
            borderRadius: pxToRem(12),
            border: '1px solid rgba(139, 92, 246, 0.3)',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          <Sparkles size={18} color="#a855f7" />
          <p style={{
            fontSize: '1.15rem',
            fontWeight: '600',
            background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            One query triggers an entire orchestra of intelligence
          </p>
          <Sparkles size={18} color="#a855f7" />
        </motion.div>
      </div>
    </AspectFrame>
  )
}
