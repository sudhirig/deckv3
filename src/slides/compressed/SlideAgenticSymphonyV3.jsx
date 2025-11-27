import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { Brain, Shield, Globe, TrendingUp, Calculator, Activity, Sparkles, Zap } from 'lucide-react'

/**
 * SlideAgenticSymphonyV3 - World-Class UI/UX
 * "The Agentic Symphony"
 * Retains the "Orbiting/Live" animation from the original fixed slide.
 */
const SlideAgenticSymphonyV3 = () => {
  const [activeAgents, setActiveAgents] = useState([])
  
  useEffect(() => {
    const agents = ['research', 'tax', 'india', 'risk', 'execution']
    // Reset
    setActiveAgents([])
    
    // Sequential activation
    agents.forEach((agent, idx) => {
      setTimeout(() => setActiveAgents(prev => [...prev, agent]), 500 + idx * 400)
    })
  }, [])

  const agents = [
    { id: 'research', icon: Brain, color: '#3b82f6', label: 'Research', angle: 270 },
    { id: 'tax', icon: Calculator, color: '#10b981', label: 'Tax', angle: 342 },
    { id: 'india', icon: Globe, color: '#f59e0b', label: 'India', angle: 54 },
    { id: 'risk', icon: Shield, color: '#ef4444', label: 'Risk', angle: 126 },
    { id: 'execution', icon: TrendingUp, color: '#14b8a6', label: 'Execution', angle: 198 }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Module Badge */}
        <div style={{ 
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(20, 184, 166, 0.15)',
          border: '1px solid rgba(20, 184, 166, 0.3)',
          borderRadius: '20px',
          padding: '0.4rem 1rem',
          marginBottom: '1rem',
          alignSelf: 'flex-start',
          zIndex: 10
        }}>
          <Brain size={14} color="#14B8A6" />
          <span style={{ color: '#14B8A6', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
            ARIA AI
          </span>
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', zIndex: 10 }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            THE AGENTIC SYMPHONY
          </h1>
          <p style={{ fontSize: '1rem', color: '#94A3B8' }}>
            68+ AI agents orchestrated in real-time
          </p>
        </div>

        {/* Orchestra Visualization */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Central Brain (The Conductor) */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 20px rgba(139, 92, 246, 0.3)', '0 0 40px rgba(139, 92, 246, 0.6)', '0 0 20px rgba(139, 92, 246, 0.3)'] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              position: 'relative'
            }}
          >
            <Brain size={48} color="#fff" />
            {/* Ripples */}
            {[1, 2, 3].map(i => (
              <motion.div
                key={i}
                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '1px solid rgba(139, 92, 246, 0.5)',
                  zIndex: -1
                }}
              />
            ))}
          </motion.div>

          {/* Orbiting Agents */}
          {agents.map((agent, idx) => {
            const isActive = activeAgents.includes(agent.id)
            const radius = 220
            const rad = (agent.angle * Math.PI) / 180
            const x = Math.cos(rad) * radius
            const y = Math.sin(rad) * radius
            
            const Icon = agent.icon

            return (
              <React.Fragment key={agent.id}>
                {/* Connection Line */}
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
                  <motion.line
                    x1="50%" y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke={agent.color}
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: isActive ? 1 : 0, opacity: isActive ? 0.3 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </svg>

                {/* Agent Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: isActive ? 1 : 0.8, opacity: isActive ? 1 : 0.2 }}
                  style={{
                    position: 'absolute',
                    left: `calc(50% + ${x}px - 40px)`,
                    top: `calc(50% + ${y}px - 40px)`,
                    width: '80px',
                    height: '80px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `2px solid ${isActive ? agent.color : '#334155'}`,
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 5,
                    boxShadow: isActive ? `0 0 20px ${agent.color}40` : 'none'
                  }}
                >
                  <Icon size={24} color={isActive ? agent.color : '#64748b'} />
                  <span style={{ fontSize: '0.7rem', marginTop: '4px', fontWeight: '700', color: '#e2e8f0' }}>
                    {agent.label}
                  </span>
                </motion.div>
              </React.Fragment>
            )
          })}
        </div>

        {/* Bottom "Live" Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          style={{
            marginTop: '1rem',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '12px',
            padding: '0.75rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            alignSelf: 'center'
          }}
        >
          <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 8px #10b981' }} />
          <span style={{ color: '#10b981', fontWeight: '600', fontSize: '0.9rem' }}>
            LIVE EXECUTION: 11ms Latency
          </span>
        </motion.div>

      </div>
    </AspectFrame>
  )
}

export default SlideAgenticSymphonyV3
