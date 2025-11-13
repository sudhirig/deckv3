import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Brain, Database, Globe, Calculator, Shield, TrendingUp, FileText } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function ARIASwarmSlide() {
  const subAgents = [
    { name: 'ARIA Data Engine', icon: Database, color: '#3b82f6', desc: 'Reads K-1s/LPAs, structures private data' },
    { name: 'India Gateway Agent', icon: Globe, color: '#10b981', desc: 'Analyzes Indian market, executes via AIF' },
    { name: 'Tax Alpha Agent', icon: Calculator, color: '#f59e0b', desc: 'Daily tax-loss harvesting opportunities' },
    { name: 'Risk Agent', icon: Shield, color: '#ef4444', desc: 'Stress-tests against market shocks' },
    { name: 'Portfolio Rebalancer', icon: TrendingUp, color: '#8b5cf6', desc: 'Executes trades via Alpaca/IBKR' },
    { name: 'Research Agent', icon: FileText, color: '#ec4899', desc: 'Reads S-1s, earnings for opportunities' }
  ]

  return (
    <AspectFrame>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        position: 'relative'
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '0.5rem' }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.25rem' }}>
            <GradientText gradient="from-teal-400 to-cyan-400">
              ARIA Commands 68+ Specialists
            </GradientText>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', fontWeight: '600' }}>
            ARIA is not a single AI. She orchestrates a symphony of specialized intelligence.
          </p>
        </motion.div>

        <div style={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Central ARIA Orchestrator */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            style={{
              position: 'absolute',
              width: 'clamp(180px, 20vw, 240px)',
              height: 'clamp(180px, 20vw, 240px)',
              background: 'linear-gradient(135deg, #14b8a6, #22d3ee)',
              borderRadius: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 80px rgba(20, 184, 166, 0.5)',
              zIndex: 10
            }}
          >
            <Brain size={64} color="white" />
            <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem', marginTop: '0.5rem' }}>
              ARIA
            </div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem' }}>
              The Orchestrator
            </div>
            <div style={{ 
              color: 'rgba(255,255,255,0.8)', 
              fontSize: '0.8rem', 
              marginTop: '0.5rem',
              padding: '0.35rem 0.85rem',
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '20px'
            }}>
              Managing 68+ Agents
            </div>
          </motion.div>

          {/* Orbital Rings to show hierarchy */}
          <svg style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}>
            <motion.circle
              cx="50%"
              cy="50%"
              r="220"
              fill="none"
              stroke="rgba(20, 184, 166, 0.1)"
              strokeWidth="1"
              strokeDasharray="5,10"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="320"
              fill="none"
              stroke="rgba(20, 184, 166, 0.05)"
              strokeWidth="1"
              strokeDasharray="3,7"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
          </svg>

          {/* Sub-Agents in circular arrangement */}
          {subAgents.map((agent, index) => {
            const Icon = agent.icon
            const angle = (index * 60) * Math.PI / 180
            const radius = 320
            const x = radius * Math.cos(angle - Math.PI / 2)
            const y = radius * Math.sin(angle - Math.PI / 2)
            
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, zIndex: 20 }}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                  width: 'clamp(160px, 18vw, 200px)',
                  padding: 'clamp(0.75rem, 1vw, 1rem)',
                  background: `linear-gradient(135deg, ${agent.color}15, ${agent.color}05)`,
                  border: `1.5px solid ${agent.color}`,
                  borderRadius: pxToRem(10),
                  boxShadow: `0 4px 20px ${agent.color}20`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <Icon size={24} color={agent.color} />
                  <div style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: 'bold', 
                    color: agent.color 
                  }}>
                    {agent.name}
                  </div>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: '1.4' }}>
                  {agent.desc}
                </div>
              </motion.div>
            )
          })}

          {/* Connection lines */}
          {subAgents.map((agent, index) => {
            const angle = (index * 60) * Math.PI / 180
            const innerRadius = 120
            const outerRadius = 240
            const x1 = innerRadius * Math.cos(angle - Math.PI / 2)
            const y1 = innerRadius * Math.sin(angle - Math.PI / 2)
            const x2 = outerRadius * Math.cos(angle - Math.PI / 2)
            const y2 = outerRadius * Math.sin(angle - Math.PI / 2)
            
            return (
              <motion.div
                key={`line-${index}`}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '0',
                  height: '0',
                  pointerEvents: 'none'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <svg style={{
                  position: 'absolute',
                  left: '0',
                  top: '0',
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none'
                }}>
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x2}px)`}
                    y2={`calc(50% + ${y2}px)`}
                    stroke={agent.color}
                    strokeWidth="1"
                    strokeDasharray="2,4"
                    opacity="0.5"
                  />
                </svg>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            textAlign: 'center',
            fontSize: '1rem',
            color: '#64748b',
            fontStyle: 'italic'
          }}
        >
          "Manages the workflow, builds consensus, and is your single point of contact."
        </motion.div>
      </div>
    </AspectFrame>
  )
}
