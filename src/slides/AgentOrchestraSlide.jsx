import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Brain, TrendingUp, Shield, Target, Scale, Zap } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function AgentOrchestraSlide() {
  const agents = [
    { 
      name: 'Tax Alpha Agent',
      icon: Brain,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      metrics: ['Harvests losses daily', 'Files returns auto', 'Saves ₹15L/year'],
      angle: 0,
      highlight: '₹15L'
    },
    { 
      name: 'Market Intel Agent',
      icon: TrendingUp,
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      metrics: ['10K sources/sec', 'Predicts 3 days ahead', '73% accuracy'],
      angle: 72,
      highlight: '73%'
    },
    { 
      name: 'Risk Guardian',
      icon: Shield,
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
      metrics: ['Monitors 24/7', 'Millisecond rebalance', '95% drawdown prevention'],
      angle: 144,
      highlight: '24/7'
    },
    { 
      name: 'Opportunity Hunter',
      icon: Target,
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      metrics: ['Finds arbitrage', 'Hidden alpha discovery', '+3.2% returns'],
      angle: 216,
      highlight: '+3.2%'
    },
    { 
      name: 'Compliance Agent',
      icon: Scale,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      metrics: ['Auto-reports', 'Audit trail', '100% compliant'],
      angle: 288,
      highlight: '100%'
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        position: 'relative',
        background: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.08) 0%, rgba(34, 211, 238, 0.03) 40%, transparent 70%)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <h1 style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '0.5rem' }}>
            <GradientText gradient="from-teal-400 via-cyan-400 to-blue-400">
              ARIA's 5 Specialized Teams
            </GradientText>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.3rem)', color: '#94a3b8' }}>
            <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>She Commands 68+ Specialists</span> Working in Perfect Harmony
          </p>
        </motion.div>

        {/* Orchestration Visualization */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Animated Background Rings */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.1 }}
            transition={{ delay: 0.2, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              position: 'absolute',
              width: 'clamp(300px, 30vw, 400px)',
              height: 'clamp(300px, 30vw, 400px)',
              borderRadius: '50%',
              border: '2px solid rgba(20, 184, 166, 0.3)',
              pointerEvents: 'none'
            }}
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.8, opacity: 0.05 }}
            transition={{ delay: 0.5, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              position: 'absolute',
              width: 'clamp(400px, 40vw, 500px)',
              height: 'clamp(400px, 40vw, 500px)',
              borderRadius: '50%',
              border: '1px solid rgba(34, 211, 238, 0.2)',
              pointerEvents: 'none'
            }}
          />

          {/* Central Orchestrator */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            style={{
              position: 'absolute',
              width: 'clamp(160px, 18vw, 200px)',
              height: 'clamp(160px, 18vw, 200px)',
              background: 'linear-gradient(135deg, #14b8a6 0%, #22d3ee 50%, #0891b2 100%)',
              borderRadius: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 80px rgba(20, 184, 166, 0.5), inset 0 0 20px rgba(255,255,255,0.2)',
              zIndex: 10,
              cursor: 'pointer',
              border: '3px solid rgba(255,255,255,0.2)'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Zap size={48} color="white" />
            </motion.div>
            <div style={{ color: 'white', fontWeight: 'bold', fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', marginTop: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
              ARIA CORE
            </div>
            <div style={{ color: 'rgba(255,255,255,0.95)', fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
              Orchestrator
            </div>
          </motion.div>

          {/* Connection Lines */}
          <svg style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}>
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {agents.map((agent, i) => {
              const radius = 250
              const x = 50 + radius * Math.cos(agent.angle * Math.PI / 180) / 5.5
              const y = 50 + radius * Math.sin(agent.angle * Math.PI / 180) / 5.5
              return (
                <g key={i}>
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`${x}%`}
                    y2={`${y}%`}
                    stroke={agent.color}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    filter="url(#glow)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="10;0"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </motion.line>
                  <motion.circle
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r="3"
                    fill={agent.color}
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.5, 1] }}
                    transition={{ delay: 1.3 + i * 0.1, duration: 0.5 }}
                  />
                </g>
              )
            })}
          </svg>

          {/* Agent Nodes */}
          {agents.map((agent, index) => {
            const Icon = agent.icon
            const radius = 250
            const x = radius * Math.cos(agent.angle * Math.PI / 180)
            const y = radius * Math.sin(agent.angle * Math.PI / 180)
            
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, zIndex: 20 }}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                  width: 'clamp(140px, 14vw, 180px)',
                  padding: 'clamp(0.6rem, 0.8vw, 0.9rem)',
                  background: `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))`,
                  backdropFilter: 'blur(10px)',
                  border: `2px solid ${agent.color}`,
                  borderRadius: pxToRem(16),
                  boxShadow: `0 8px 32px ${agent.color}30, inset 0 1px 0 rgba(255,255,255,0.1)`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  marginBottom: '0.5rem',
                  padding: '0.4rem',
                  background: agent.gradient,
                  borderRadius: pxToRem(8),
                  margin: '-0.3rem -0.3rem 0.5rem -0.3rem'
                }}>
                  <Icon size={22} color="white" />
                  <div style={{ 
                    fontSize: 'clamp(0.75rem, 0.9vw, 0.9rem)', 
                    fontWeight: 'bold', 
                    color: 'white',
                    textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                  }}>
                    {agent.name}
                  </div>
                </div>
                
                {/* Highlight Metric */}
                <div style={{
                  fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)',
                  fontWeight: 'bold',
                  color: agent.color,
                  textAlign: 'center',
                  marginBottom: '0.3rem'
                }}>
                  {agent.highlight}
                </div>
                
                <div style={{ fontSize: 'clamp(0.6rem, 0.7vw, 0.7rem)', color: '#cbd5e1', lineHeight: 1.4 }}>
                  {agent.metrics.map((metric, i) => (
                    <div key={i} style={{ 
                      marginBottom: '0.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}>
                      <span style={{ color: agent.color, fontSize: '0.5rem' }}>▸</span>
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
          
          {/* Data Flow Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                delay: i * 0.4,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#22d3ee',
                boxShadow: '0 0 6px #22d3ee',
                left: '50%',
                top: '50%',
                pointerEvents: 'none'
              }}
            />
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.1), transparent)',
            borderRadius: pxToRem(8)
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 10px #10b981'
              }} />
              <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Real-time Sync</span>
            </motion.div>
            
            <p style={{ 
              fontSize: 'clamp(0.9rem, 1.1vw, 1.2rem)', 
              color: '#5eead4',
              fontWeight: '600',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              "Not one AI, but a symphony of specialized intelligence"
            </p>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#3b82f6',
                boxShadow: '0 0 10px #3b82f6'
              }} />
              <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Autonomous Orchestration</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
