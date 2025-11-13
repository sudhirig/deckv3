import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function AgenticWorkflowSlide() {
  const workflowSteps = [
    {
      number: '1',
      title: 'User Input',
      color: '#3b82f6',
      borderColor: 'rgba(59, 130, 246, 0.5)',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      content: '"I just had a $10M liquidity event. How do I invest for long-term growth, minimize 2025 taxes, and get'
    },
    {
      number: '2',
      title: 'Orchestration',
      color: '#8b5cf6',
      borderColor: 'rgba(139, 92, 246, 0.5)',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      content: 'AI Orchestrator activates:\n• Tax Agent\n• Alts Agent\n• Portfolio Agent'
    },
    {
      number: '3',
      title: 'Agent Analysis',
      color: '#10b981',
      borderColor: 'rgba(16, 185, 129, 0.5)',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      content: 'Tax: Find TLH opportunities\nAlts: Identify 3 PC funds\nPortfolio: Build core allocation'
    },
    {
      number: '4',
      title: 'Consensus',
      color: '#14b8a6',
      borderColor: 'rgba(20, 184, 166, 0.5)',
      bgColor: 'rgba(20, 184, 166, 0.1)',
      content: 'Agents debate and validate:\n• Cross-check assumptions\n• Risk validation\n• Synthesize plan'
    },
    {
      number: '5',
      title: 'Presentation',
      color: '#f97316',
      borderColor: 'rgba(249, 115, 22, 0.5)',
      bgColor: 'rgba(249, 115, 22, 0.1)',
      content: 'AI presents holistic plan:\n"Invest 60% public, 20% PC fund, 20% munis, harvest $50K losses..."'
    },
    {
      number: '6',
      title: 'Execution',
      color: '#ec4899',
      borderColor: 'rgba(236, 72, 153, 0.5)',
      bgColor: 'rgba(236, 72, 153, 0.1)',
      content: 'User approves →\nAI executes via API →\n24/7 monitoring begins'
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        gap: '1rem'
      }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '0.25rem' }}>
            <GradientText gradient="from-cyan-400 to-purple-400">
              Agentic Workflow: From Query to Portfolio
            </GradientText>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            Example: HNW Liquidity Event
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '1rem',
          alignItems: 'stretch'
        }}>
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              {/* Step Container */}
              <div style={{
                flex: 1,
                background: step.bgColor,
                border: `2px solid ${step.borderColor}`,
                borderRadius: pxToRem(12),
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Step Number Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '32px',
                  height: '32px',
                  background: step.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  boxShadow: `0 4px 12px ${step.color}40`
                }}>
                  {step.number}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1rem',
                  color: '#e2e8f0',
                  fontWeight: 'bold',
                  marginTop: '0.75rem',
                  marginBottom: '0.75rem',
                  textAlign: 'center'
                }}>
                  {step.title}
                </h3>

                {/* Content */}
                <div style={{
                  flex: 1,
                  fontSize: '0.8rem',
                  color: '#94a3b8',
                  lineHeight: '1.4',
                  whiteSpace: 'pre-line'
                }}>
                  {step.content}
                </div>
              </div>

              {/* Arrow to next step */}
              {index < workflowSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  style={{
                    position: 'absolute',
                    right: '-1.25rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: step.color,
                    fontSize: '1.5rem',
                    zIndex: 1
                  }}
                >
                  →
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </AspectFrame>
  )
}
