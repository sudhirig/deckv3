import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { 
  Brain, Users, Zap, Activity, Shield, Globe, 
  TrendingUp, Calculator, FileText, GitBranch, Sparkles
} from 'lucide-react'
import './SlideStyles.css'

export default function AgenticSymphonySlide() {
  const [activeAgents, setActiveAgents] = useState([])
  const [currentAction, setCurrentAction] = useState(0)
  
  useEffect(() => {
    // Animate agents joining the symphony
    const agents = ['research', 'tax', 'india', 'risk', 'execution', 'monitoring']
    agents.forEach((agent, idx) => {
      setTimeout(() => {
        setActiveAgents(prev => [...prev, agent])
      }, idx * 400)
    })
    
    // Cycle through actions
    const actionTimer = setInterval(() => {
      setCurrentAction(prev => (prev + 1) % 4)
    }, 2500)
    
    return () => clearInterval(actionTimer)
  }, [])

  const title = (
    <GradientText gradient="from-violet-400 to-purple-400">
      ARIA in Action - Agentic Symphony
    </GradientText>
  )

  const metrics = [
    {
      icon: Users,
      value: 12,
      suffix: '',
      label: 'AI Agents',
      color: '#8b5cf6',
      description: 'Specialized agents in harmony'
    },
    {
      icon: Zap,
      value: 3.7,
      suffix: 's',
      label: 'Response',
      color: '#a855f7',
      description: 'Portfolio decisions in seconds'
    },
    {
      icon: Activity,
      value: 100,
      suffix: '+',
      label: 'Parallel',
      color: '#9333ea',
      description: 'Simultaneous analysis tasks'
    }
  ]

  const agentTypes = [
    { id: 'research', icon: Brain, color: '#3b82f6', name: 'Research Agent', task: 'Analyzing 10,000+ data points' },
    { id: 'tax', icon: Calculator, color: '#10b981', name: 'Tax Agent', task: 'Optimizing across 50 strategies' },
    { id: 'india', icon: Globe, color: '#f59e0b', name: 'India Agent', task: 'Scanning GIFT City opportunities' },
    { id: 'risk', icon: Shield, color: '#ef4444', name: 'Risk Agent', task: 'Running 1000 stress scenarios' },
    { id: 'execution', icon: TrendingUp, color: '#14b8a6', name: 'Execution Agent', task: 'Routing to best venues' },
    { id: 'monitoring', icon: Activity, color: '#8b5cf6', name: 'Monitoring Agent', task: 'Tracking real-time performance' }
  ]

  const collaborationActions = [
    'Research shares market insights with Tax for optimization',
    'Tax coordinates with India for GIFT City structuring',
    'Risk validates strategies with Execution for safety',
    'All agents converge on unified recommendation'
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {/* Subtitle */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600', margin: 0 }}>
          Watch 12 agents collaborate on a single portfolio decision in real-time
        </p>
      </div>

      {/* Agent Orchestra Visualization */}
      <div style={{
        flex: 1,
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        padding: '1.5rem',
        overflow: 'hidden',
        minHeight: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Central Brain */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)',
            zIndex: 10
          }}
        >
          <Brain size={40} color="#ffffff" />
        </motion.div>
        
        {/* CEO Label */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, 55px)',
          fontSize: '0.85rem',
          fontWeight: '600',
          color: '#a855f7',
          zIndex: 11
        }}>
          ARIA CEO
        </div>

        {/* Orbiting Agents */}
        {agentTypes.map((agent, idx) => {
          const angle = (idx * 60) * Math.PI / 180
          const radius = 120  // Increased for better spacing
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          
          return (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: activeAgents.includes(agent.id) ? 1 : 0.2,
                scale: activeAgents.includes(agent.id) ? 1 : 0.8,
                x: x,
                y: y
              }}
              transition={{ delay: idx * 0.1 }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '55px',
                height: '55px',
                marginLeft: '-27.5px',
                marginTop: '-27.5px',
                background: activeAgents.includes(agent.id) 
                  ? `linear-gradient(135deg, ${agent.color}20 0%, ${agent.color}30 100%)`
                  : 'rgba(30, 41, 59, 0.5)',
                border: `1px solid ${activeAgents.includes(agent.id) ? agent.color : '#475569'}`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {React.createElement(agent.icon, { 
                size: 22, 
                color: activeAgents.includes(agent.id) ? agent.color : '#64748b' 
              })}
              
              {/* Connection Lines */}
              {activeAgents.includes(agent.id) && (
                <svg
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '200px',
                    height: '200px',
                    marginLeft: '-100px',
                    marginTop: '-100px',
                    pointerEvents: 'none',
                    zIndex: 0
                  }}
                >
                  <motion.line
                    x1="100"
                    y1="100"
                    x2={100 - x * 0.83}
                    y2={100 - y * 0.83}
                    stroke={agent.color}
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    animate={{
                      strokeDasharray: [0, 200],
                      strokeOpacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                </svg>
              )}
            </motion.div>
          )
        })}

        {/* Agent Details Panel */}
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1rem',
          right: '1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.75rem'
        }}>
          {agentTypes.slice(0, 3).map(agent => (
            <motion.div
              key={agent.id}
              animate={{
                opacity: activeAgents.includes(agent.id) ? 1 : 0.3
              }}
              style={{
                background: activeAgents.includes(agent.id) 
                  ? 'rgba(30, 41, 59, 0.8)' 
                  : 'rgba(30, 41, 59, 0.3)',
                borderRadius: '6px',
                padding: '0.75rem',
                border: `1px solid ${activeAgents.includes(agent.id) ? agent.color : '#475569'}40`,
                fontSize: '0.75rem'
              }}
            >
              <div style={{ 
                color: activeAgents.includes(agent.id) ? agent.color : '#64748b',
                fontWeight: '600',
                marginBottom: '0.25rem',
                fontSize: '0.85rem'
              }}>
                {agent.name}
              </div>
              <div style={{ 
                color: activeAgents.includes(agent.id) ? '#94a3b8' : '#475569',
                fontSize: '0.7rem',
                lineHeight: '1.3'
              }}>
                {activeAgents.includes(agent.id) ? agent.task : 'Standby...'}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collaboration Action Display */}
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
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '8px',
              padding: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <GitBranch size={16} color="#a855f7" />
            <span style={{ fontSize: '0.85rem', color: '#e2e8f0', flex: 1 }}>
              {collaborationActions[currentAction]}
            </span>
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
              style={{
                marginLeft: 'auto',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#a855f7'
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          textAlign: 'center',
          padding: '1rem',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
          borderRadius: '8px',
          border: '1px solid rgba(139, 92, 246, 0.3)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Sparkles size={16} color="#a855f7" />
          <p style={{
            fontSize: '1.05rem',
            fontWeight: '600',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            One query triggers an entire orchestra of intelligence
          </p>
          <Sparkles size={16} color="#a855f7" />
        </div>
      </motion.div>
    </div>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
      metrics={metrics}
    />
  )
}
