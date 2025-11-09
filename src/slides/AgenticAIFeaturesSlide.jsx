import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Cpu, Zap, GitBranch, Shield, Brain, Network, Sparkles, Activity } from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import './SlideStyles.css'

export default function AgenticAIFeaturesSlide() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [networkPulse, setNetworkPulse] = useState(true)
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    
    const networkInterval = setInterval(() => {
      setNetworkPulse(prev => !prev)
    }, 3000)
    
    return () => {
      clearInterval(pulseInterval)
      clearInterval(networkInterval)
    }
  }, [])
  
  const title = (
    <GradientText gradient="from-purple-400 via-violet-400 to-indigo-400">
      Agentic AI Features
    </GradientText>
  )
  
  const subtitle = "Enterprise-Grade Multi-Agent System"
  
  const particles = (
    <>
      <ParticleBackground count={50} color="#a855f7" />
      
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)'
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />
      
      <svg 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1,
          zIndex: 1
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${(i + 1) * 12.5}%`}
            cy="50%"
            r="3"
            fill="#a855f7"
            animate={{
              r: networkPulse ? [3, 8, 3] : 3,
              opacity: networkPulse ? [0.3, 1, 0.3] : 0.3
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity
            }}
          />
        ))}
        {[...Array(7)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${(i + 1) * 12.5}%`}
            y1="50%"
            x2={`${(i + 2) * 12.5}%`}
            y2="50%"
            stroke="#a855f7"
            strokeWidth="1"
            animate={{
              opacity: networkPulse ? [0.2, 0.8, 0.2] : 0.2
            }}
            transition={{
              duration: 2,
              delay: i * 0.15,
              repeat: Infinity
            }}
          />
        ))}
      </svg>
    </>
  )
  
  const summary = (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: 'spring' }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}
      >
        <motion.div
          animate={{
            boxShadow: pulseAnimation 
              ? ['0 0 1.875rem rgba(168, 85, 247, 0.5)', '0 0 3.75rem rgba(168, 85, 247, 0.8)', '0 0 1.875rem rgba(168, 85, 247, 0.5)']
              : '0 0 1.875rem rgba(168, 85, 247, 0.5)'
          }}
          transition={{ duration: 2 }}
          style={{
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.1))',
            borderRadius: '3.125rem',
            border: '0.125rem solid rgba(168, 85, 247, 0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Network size={24} color="#a855f7" />
          </motion.div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#a855f7' }}>
            68+ AI Agents Active
          </span>
          <motion.div
            animate={{ scale: pulseAnimation ? [1, 1.5, 1] : 1 }}
            transition={{ duration: 1 }}
            style={{
              width: '0.625rem',
              height: '0.625rem',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 1.25rem #10b981'
            }}
          />
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.15))',
          backdropFilter: 'blur(1.25rem)',
          borderRadius: '1.25rem',
          border: '0.125rem solid rgba(168, 85, 247, 0.4)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'visible'
        }}
      >
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: -2,
            background: 'linear-gradient(90deg, #a855f7, #3b82f6, #a855f7)',
            borderRadius: '1.25rem',
            filter: 'blur(0.5rem)',
            zIndex: -1
          }}
        />
        
        <h4 style={{ fontSize: '1.2rem', color: '#14b8a6', marginBottom: '0.5rem' }}>
          What You Get:
        </h4>
        <p style={{ fontSize: '1rem', color: '#e2e8f0' }}>
          <motion.span
            animate={{ color: pulseAnimation ? '#a855f7' : '#8b5cf6' }}
            transition={{ duration: 1 }}
            style={{ fontWeight: 'bold' }}
          >
            68+ specialized agents
          </motion.span>{' '}
          working together for{' '}
          <motion.span
            animate={{ color: pulseAnimation ? '#14b8a6' : '#10b981' }}
            transition={{ duration: 1 }}
            style={{ fontWeight: 'bold' }}
          >
            superior investment decisions
          </motion.span>
        </p>
      </motion.div>
    </>
  )
  
  const cards = [
    <motion.div
      key="agents"
      initial={{ opacity: 0, x: -30, rotateY: -15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      onHoverStart={() => setHoveredCard('agents')}
      onHoverEnd={() => setHoveredCard(null)}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(168, 85, 247, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {hoveredCard === 'agents' && (
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: -20,
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)',
            borderRadius: '1.5rem',
            filter: 'blur(1.25rem)',
            zIndex: -1
          }}
        />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <motion.div
          animate={{ rotate: pulseAnimation ? 360 : 0 }}
          transition={{ duration: 2 }}
        >
          <Cpu size={32} color="#a855f7" />
        </motion.div>
        <h3 style={{ fontSize: '1.3rem', color: '#a855f7', marginLeft: '1rem' }}>
          Agent Types
        </h3>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ marginLeft: 'auto' }}
        >
          <Brain size={24} color="#a855f7" />
        </motion.div>
      </div>
      
      {[
        { name: 'Research Agents', count: 12, color: '#a855f7' },
        { name: 'Trading Agents', count: 8, color: '#3b82f6' },
        { name: 'Risk Agents', count: 6, color: '#ef4444' },
        { name: 'Optimization Agents', count: 4, color: '#10b981' }
      ].map((type, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 + index * 0.1 }}
          whileHover={{ x: 10 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.75rem',
            marginBottom: '0.5rem',
            borderLeft: `0.1875rem solid ${type.color}`,
            background: `${type.color}10`,
            borderRadius: '0 0.5rem 0.5rem 0'
          }}
        >
          <span style={{ color: '#e2e8f0' }}>{type.name}:</span>
          <motion.span
            animate={{ scale: pulseAnimation ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            style={{ color: type.color, fontWeight: 'bold' }}
          >
            <AnimatedCounter value={type.count} duration={1000} />
          </motion.span>
        </motion.div>
      ))}
    </motion.div>,
    
    <motion.div
      key="performance"
      initial={{ opacity: 0, x: 30, rotateY: 15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.6, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      onHoverStart={() => setHoveredCard('performance')}
      onHoverEnd={() => setHoveredCard(null)}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(251, 191, 36, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {hoveredCard === 'performance' && (
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: -20,
            background: 'conic-gradient(from 0deg, transparent, rgba(251, 191, 36, 0.2), transparent)',
            borderRadius: '1.5rem',
            filter: 'blur(1.25rem)',
            zIndex: -1
          }}
        />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Zap size={32} color="#fbbf24" />
        <h3 style={{ fontSize: '1.3rem', color: '#fbbf24', marginLeft: '1rem' }}>
          Performance
        </h3>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{ marginLeft: 'auto' }}
        >
          <Activity size={24} color="#fbbf24" />
        </motion.div>
      </div>
      
      {[
        { label: 'Response Time', value: '< 100ms', color: '#fbbf24' },
        { label: 'Parallel Tasks', value: '50+', color: '#fb923c' },
        { label: 'Decisions/Hour', value: '10,000+', color: '#10b981' },
        { label: 'Accuracy', value: '99.7%', color: '#14b8a6' }
      ].map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
          whileHover={{ x: -10 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.75rem',
            marginBottom: '0.5rem',
            borderLeft: `0.1875rem solid ${metric.color}`,
            background: `${metric.color}10`,
            borderRadius: '0 0.5rem 0.5rem 0'
          }}
        >
          <span style={{ color: '#e2e8f0' }}>{metric.label}:</span>
          <motion.span
            animate={{ 
              color: pulseAnimation ? metric.color : '#fbbf24'
            }}
            transition={{ duration: 1 }}
            style={{ fontWeight: 'bold' }}
          >
            {metric.value}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>,
    
    <motion.div
      key="collaboration"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.7, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      onHoverStart={() => setHoveredCard('collaboration')}
      onHoverEnd={() => setHoveredCard(null)}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(16, 185, 129, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {hoveredCard === 'collaboration' && (
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: -20,
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent)',
            borderRadius: '1.5rem',
            filter: 'blur(1.25rem)',
            zIndex: -1
          }}
        />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <GitBranch size={32} color="#10b981" />
        <h3 style={{ fontSize: '1.3rem', color: '#10b981', marginLeft: '1rem' }}>
          Collaboration
        </h3>
        <motion.div
          animate={{ scale: pulseAnimation ? [1, 1.3, 1] : 1 }}
          transition={{ duration: 1 }}
          style={{ marginLeft: 'auto' }}
        >
          <Sparkles size={24} color="#10b981" />
        </motion.div>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {[
          'Consensus building algorithms',
          'Weighted voting system',
          'Knowledge sharing',
          'Self-improvement loops'
        ].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            whileHover={{ x: 5, color: '#10b981' }}
            style={{
              padding: '0.5rem',
              marginBottom: '0.5rem',
              color: '#e2e8f0',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <motion.span
              animate={{ scale: networkPulse ? [1, 1.5, 1] : 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              style={{ color: '#10b981', marginRight: '0.5rem' }}
            >
              •
            </motion.span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>,
    
    <motion.div
      key="reliability"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      onHoverStart={() => setHoveredCard('reliability')}
      onHoverEnd={() => setHoveredCard(null)}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(59, 130, 246, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {hoveredCard === 'reliability' && (
        <motion.div
          animate={{ 
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: -20,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
            borderRadius: '1.5rem',
            filter: 'blur(1.25rem)',
            zIndex: -1
          }}
        />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Shield size={32} color="#3b82f6" />
        <h3 style={{ fontSize: '1.3rem', color: '#3b82f6', marginLeft: '1rem' }}>
          Reliability
        </h3>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {[
          'Fallback mechanisms',
          'Error recovery',
          'Audit trails',
          'Version control'
        ].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 + index * 0.1 }}
            whileHover={{ x: 5, color: '#3b82f6' }}
            style={{
              padding: '0.5rem',
              marginBottom: '0.5rem',
              color: '#e2e8f0',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <motion.span
              animate={{ rotate: pulseAnimation ? 360 : 0 }}
              transition={{ duration: 2 }}
              style={{ color: '#3b82f6', marginRight: '0.5rem' }}
            >
              •
            </motion.span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  ]
  
  return (
    <GridLayout
      title={title}
      subtitle={subtitle}
      cards={cards}
      columns={2}
      summary={summary}
      particles={particles}
    />
  )
}
