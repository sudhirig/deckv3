import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { Brain, Shield, TrendingUp, Zap, Check } from 'lucide-react'

/**
 * SlideAgenticSymphonyV2 - World-Class UI/UX
 * "The Agentic Symphony"
 * Layout: Flow Chart / Network Diagram
 */
const SlideAgenticSymphonyV2 = () => {
  const steps = [
    { icon: Brain, label: 'RESEARCH', color: '#8B5CF6', x: 0 },
    { icon: TrendingUp, label: 'TAX', color: '#FBBF24', x: 1 },
    { icon: Shield, label: 'RISK', color: '#EF4444', x: 2 },
    { icon: Zap, label: 'EXECUTE', color: '#10B981', x: 3 }
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
        padding: '3rem 4rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 4vw, 3rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem'
          }}>
            THE AGENTIC SYMPHONY
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8' }}>
            How 68+ agents collaborate to execute a single decision
          </p>
        </div>

        {/* Flow Visualization */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          padding: '0 2rem'
        }}>
          {/* Connection Line */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '4rem',
            right: '4rem',
            height: '2px',
            background: 'rgba(255,255,255,0.1)',
            zIndex: 0
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'linear' }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #8B5CF6, #10B981)',
                boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
              }}
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.4 }}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: '#0f172a',
                  border: `2px solid ${step.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 20px ${step.color}40`
                }}>
                  <Icon size={32} color={step.color} />
                </div>
                <p style={{ fontSize: '0.9rem', fontWeight: '800', color: '#FFFFFF', letterSpacing: '0.1em' }}>
                  {step.label}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Result */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5 }}
          style={{
            marginTop: 'auto',
            alignSelf: 'center',
            padding: '1rem 2rem',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div style={{ padding: '4px', background: '#10B981', borderRadius: '50%' }}>
            <Check size={16} color="white" />
          </div>
          <p style={{ fontSize: '1rem', color: '#10B981', fontWeight: '600', margin: 0 }}>
            Trade Executed in 11ms
          </p>
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideAgenticSymphonyV2
