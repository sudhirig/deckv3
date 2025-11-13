import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Calculator, Brain, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function EvolutionOfWealthTechSlide() {
  const title = (
    <GradientText gradient="from-blue-400 to-purple-400">
      The Evolution of WealthTech
    </GradientText>
  )

  const stages = [
    {
      era: 'PAST',
      name: 'ROBO-ADVISOR',
      icon: Calculator,
      color: '#64748b',
      description: 'A single algorithm for a single task',
      example: 'e.g., rebalancing a 60/40 portfolio',
      limitation: 'Static, one-size-fits-all, cannot reason',
      opacity: 0.6
    },
    {
      era: 'PRESENT',
      name: 'AGENTIC AI',
      icon: Brain,
      color: '#14b8a6',
      description: 'A swarm of specialized agents who collaborate',
      example: 'Reason, execute complex multi-step tasks',
      limitation: 'Human-in-the-loop, focused on co-pilot',
      opacity: 1,
      highlight: true
    },
    {
      era: 'FUTURE',
      name: 'AUTONOMOUS AGI',
      icon: Sparkles,
      color: '#8b5cf6',
      description: 'Fully autonomous AI that manages all',
      example: 'Complete wealth management autonomy',
      limitation: 'Black box problem, regulatory hurdles',
      opacity: 0.6
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          right: '10%',
          height: '4px',
          background: 'linear-gradient(90deg, #64748b, #14b8a6, #8b5cf6)',
          borderRadius: '2px'
        }} />

        <div style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          padding: '0 1rem'
        }}>
          {stages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: stage.opacity, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                style={{
                  background: stage.highlight 
                    ? `linear-gradient(135deg, ${stage.color}20, ${stage.color}10)`
                    : 'rgba(255, 255, 255, 0.02)',
                  border: stage.highlight 
                    ? `2px solid ${stage.color}`
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: pxToRem(12),
                  padding: '1.25rem',
                  position: 'relative',
                  transform: stage.highlight ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: stage.highlight 
                    ? `0 10px 40px ${stage.color}30`
                    : 'none'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: stage.color,
                  color: 'white',
                  padding: '0.35rem 0.65rem',
                  borderRadius: pxToRem(6),
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}>
                  {stage.era}
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '0.75rem',
                  marginTop: '0.5rem'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: `${stage.color}20`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={40} color={stage.color} />
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: stage.color,
                  textAlign: 'center',
                  marginBottom: '0.75rem'
                }}>
                  {stage.name}
                </h3>

                <div style={{
                  fontSize: '0.9rem',
                  color: '#e2e8f0',
                  textAlign: 'center',
                  marginBottom: '0.5rem',
                  lineHeight: '1.4'
                }}>
                  <strong>What:</strong> {stage.description}
                </div>

                <div style={{
                  fontSize: '0.85rem',
                  color: '#94a3b8',
                  textAlign: 'center',
                  marginBottom: '0.75rem',
                  fontStyle: 'italic'
                }}>
                  {stage.example}
                </div>

                <div style={{
                  fontSize: '0.85rem',
                  color: '#ef4444',
                  textAlign: 'center',
                  padding: '0.5rem',
                  background: 'rgba(239, 68, 68, 0.1)',
                  borderRadius: pxToRem(6),
                  border: '1px solid rgba(239, 68, 68, 0.2)'
                }}>
                  <strong>Limitation:</strong> {stage.limitation}
                </div>

                {stage.highlight && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: 'spring' }}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'linear-gradient(135deg, #14b8a6, #22d3ee)',
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: pxToRem(4),
                      fontSize: '0.6rem',
                      fontWeight: 'bold'
                    }}
                  >
                    OUR MODEL
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

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
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#5eead4',
          fontWeight: '600'
        }}>
          "Robo-advisors follow rules. ARIA is an agentic swarm that reasons."
        </p>
      </motion.div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
