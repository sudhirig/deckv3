import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Brain, Network, MessageSquare, Vote, Sparkles, ArrowRight } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

/**
 * AgenticAICoreFixed - Clean, feature-focused design
 * No unverified performance claims - only architecture capabilities
 */
export default function AgenticAICoreFixed() {
  const agentTypes = [
    { name: 'Research', desc: 'Market & data analysis', color: '#8b5cf6' },
    { name: 'Risk', desc: 'Portfolio protection', color: '#ef4444' },
    { name: 'Tax', desc: 'Optimization strategies', color: '#10b981' },
    { name: 'Compliance', desc: 'Regulatory adherence', color: '#f59e0b' },
    { name: 'Execution', desc: 'Trade management', color: '#3b82f6' }
  ]

  const capabilities = [
    { 
      icon: Network, 
      title: 'Parallel Processing', 
      desc: 'Multiple specialized agents analyze different aspects simultaneously',
      color: '#8b5cf6' 
    },
    { 
      icon: Vote, 
      title: 'Consensus Building', 
      desc: 'Agents collaborate and vote on recommendations',
      color: '#3b82f6' 
    },
    { 
      icon: MessageSquare, 
      title: 'Knowledge Sharing', 
      desc: 'Shared context enables coordinated decision-making',
      color: '#14b8a6' 
    },
    { 
      icon: Sparkles, 
      title: 'Continuous Learning', 
      desc: 'System improves from feedback and outcomes',
      color: '#10b981' 
    }
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
          background: 'radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}
        >
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '0.5rem' }}>
            <GradientText gradient="from-purple-400 to-pink-400">
              Agentic AI Architecture
            </GradientText>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            Specialized AI agents working together as a unified system
          </p>
        </motion.div>

        {/* Agent Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 1,
            flexWrap: 'wrap'
          }}
        >
          {agentTypes.map((agent, i) => (
            <React.Fragment key={agent.name}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  textAlign: 'center',
                  padding: '1rem 1.5rem',
                  background: `linear-gradient(135deg, ${agent.color}15, ${agent.color}05)`,
                  border: `2px solid ${agent.color}40`,
                  borderRadius: pxToRem(12),
                  minWidth: '120px'
                }}
              >
                <div style={{ fontSize: '1.1rem', fontWeight: '600', color: agent.color }}>{agent.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>{agent.desc}</div>
              </motion.div>
              {i < agentTypes.length - 1 && (
                <ArrowRight size={20} color="#4b5563" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Central Orchestrator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.1))',
            border: '2px solid rgba(139, 92, 246, 0.4)',
            borderRadius: pxToRem(16)
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Brain size={32} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#e2e8f0' }}>ARIA Orchestrator</div>
              <div style={{ fontSize: '1rem', color: '#a78bfa' }}>Coordinates all agents into unified recommendations</div>
            </div>
          </div>
        </motion.div>

        {/* Key Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            flex: 1,
            position: 'relative',
            zIndex: 1
          }}
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.title}
                whileHover={{ scale: 1.02 }}
                style={{
                  padding: '1.25rem',
                  background: 'rgba(17, 24, 39, 0.6)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: pxToRem(14),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: `${cap.color}20`,
                  borderRadius: pxToRem(12),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.75rem'
                }}>
                  <Icon size={26} color={cap.color} />
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: '600', color: '#e2e8f0', marginBottom: '0.3rem' }}>
                  {cap.title}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: 1.4 }}>
                  {cap.desc}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '1.5rem',
            padding: '1rem 1.5rem',
            background: 'linear-gradient(to right, rgba(139, 92, 246, 0.12), rgba(236, 72, 153, 0.12))',
            borderRadius: pxToRem(12),
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              borderRadius: pxToRem(12),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Network size={26} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: '600', color: '#e2e8f0' }}>
                Multi-Agent Intelligence
              </div>
              <div style={{ fontSize: '0.95rem', color: '#9ca3af' }}>
                Each agent specializes • All agents collaborate • One unified recommendation
              </div>
            </div>
          </div>
          <div style={{ 
            padding: '0.75rem 1.5rem',
            background: 'rgba(139, 92, 246, 0.2)',
            borderRadius: pxToRem(10),
            border: '1px solid rgba(139, 92, 246, 0.3)'
          }}>
            <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#a78bfa' }}>Core Technology</span>
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
