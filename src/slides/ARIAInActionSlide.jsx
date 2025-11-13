import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { User, Brain, Database, Calculator, Globe, Shield, CheckCircle } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function ARIAInActionSlide() {
  const title = (
    <GradientText gradient="from-purple-400 to-pink-400">
      ARIA in Action: The "Agentic Symphony"
    </GradientText>
  )

  const workflow = [
    {
      step: 1,
      label: 'USER QUERY',
      actor: 'HNW Client',
      icon: User,
      color: '#3b82f6',
      content: 'I just had a $25M liquidity event from my startup sale. What\'s a holistic plan that minimizes my tax bill and gets me India exposure?'
    },
    {
      step: 2,
      label: 'ORCHESTRATION',
      actor: 'ARIA (The Brain)',
      icon: Brain,
      color: '#14b8a6',
      content: 'ARIA activates 4 specialized teams to orchestrate the solution:'
    },
    {
      step: 3,
      label: 'PARALLEL ANALYSIS',
      actor: "ARIA's Teams",
      agents: [
        {
          name: 'Data Engine',
          icon: Database,
          color: '#3b82f6',
          action: 'Reads the $25M sale doc & K-1s to understand full asset picture'
        },
        {
          name: 'Tax Agent',
          icon: Calculator,
          color: '#f59e0b',
          action: 'Calculates $5M tax bill. Recommends $10M tax-loss harvesting'
        },
        {
          name: 'India Agent',
          icon: Globe,
          color: '#10b981',
          action: 'Recommends $2.5M (10%) to India Gateway Fund (0% tax)'
        },
        {
          name: 'Risk Agent',
          icon: Shield,
          color: '#ef4444',
          action: 'Warns of tech over-exposure. Recommends Private Credit'
        }
      ]
    },
    {
      step: 4,
      label: 'CONSENSUS',
      actor: 'The Plan',
      icon: CheckCircle,
      color: '#8b5cf6',
      content: 'ARIA\'s Orchestrator builds a single, unified plan from the agents\' consensus and presents it to you and your CPA.'
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '0.5rem' }}>
      {workflow.map((item, index) => {
        if (item.step === 3) {
          // Special handling for parallel agents
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.3 }}
              style={{
                flex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '0.5rem'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}>
                  {item.step}
                </div>
                <div style={{ fontSize: '1rem', color: '#8b5cf6', fontWeight: 'bold' }}>
                  {item.label}: {item.actor}
                </div>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                paddingLeft: '3rem'
              }}>
                {item.agents.map((agent, i) => {
                  const Icon = agent.icon
                  return (
                    <motion.div
                      key={agent.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      style={{
                        padding: '0.75rem',
                        background: `linear-gradient(135deg, ${agent.color}10, ${agent.color}05)`,
                        border: `1px solid ${agent.color}30`,
                        borderRadius: pxToRem(12),
                        display: 'flex',
                        gap: '1rem'
                      }}
                    >
                      <Icon size={24} color={agent.color} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.85rem', color: agent.color, fontWeight: 'bold' }}>
                          {agent.name}:
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.4' }}>
                          {agent.action}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )
        }

        const Icon = item.icon
        return (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.3 }}
            style={{
              flex: item.step === 1 ? 1.3 : 1,
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              padding: '1rem',
              background: `linear-gradient(135deg, ${item.color}10, transparent)`,
              borderLeft: `3px solid ${item.color}`,
              borderRadius: '0 8px 8px 0'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              background: `${item.color}20`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: item.color,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}>
                {item.step}
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.25rem'
              }}>
                <Icon size={24} color={item.color} />
                <span style={{ fontSize: '1rem', color: item.color, fontWeight: 'bold' }}>
                  {item.label}: {item.actor}
                </span>
              </div>
              <div style={{ 
                fontSize: '0.9rem', 
                color: '#e2e8f0',
                lineHeight: '1.5',
                fontStyle: item.step === 1 ? 'italic' : 'normal'
              }}>
                "{item.content}"
              </div>
            </div>

            {/* Arrow to next step */}
            {item.step < 4 && (
              <div style={{
                position: 'absolute',
                right: '-10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: item.color,
                fontSize: '1.5rem'
              }}>
                ↓
              </div>
            )}
          </motion.div>
        )
      })}
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
