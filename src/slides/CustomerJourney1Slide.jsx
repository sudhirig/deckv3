import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import { ChevronRight, Clock, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react'
import './SlideStyles.css'

export default function CustomerJourney1Slide() {
  const [activeStep, setActiveStep] = useState(-1)
  
  useEffect(() => {
    const sequence = [0, 1, 2, 3]
    sequence.forEach((step, index) => {
      setTimeout(() => {
        setActiveStep(step)
      }, 800 + (index * 600))
    })
  }, [])
  
  const journeySteps = [
    {
      phase: 'Discovery',
      duration: '5 minutes',
      icon: Sparkles,
      color: '#c084fc',
      actions: [
        'AI analyzes existing portfolio',
        'Identifies immediate optimizations',
        'Shows potential tax savings'
      ],
      emotion: '😮 Amazed',
      metric: '$47K immediate savings identified'
    },
    {
      phase: 'Onboarding',
      duration: '15 minutes',
      icon: Zap,
      color: '#60a5fa',
      actions: [
        'Secure account linking',
        'AI builds risk profile',
        'Personalized strategy created'
      ],
      emotion: '🚀 Excited',
      metric: '12 accounts connected seamlessly'
    },
    {
      phase: 'First Week',
      duration: '7 days',
      icon: TrendingUp,
      color: '#4ade80',
      actions: [
        'Daily tax harvesting begins',
        'First rebalancing executed',
        'AI learns preferences'
      ],
      emotion: '📈 Confident',
      metric: '+0.8% alpha generated'
    },
    {
      phase: 'First Month',
      duration: '30 days',
      icon: Shield,
      color: '#fbbf24',
      actions: [
        'Full portfolio optimization',
        'Alternative investments added',
        'Comprehensive reporting'
      ],
      emotion: '💪 Empowered',
      metric: '+2.3% total return vs baseline'
    }
  ]

  const cards = journeySteps.map((step, index) => (
    <div key={step.phase} style={{ position: 'relative', height: '100%' }}>
      <motion.div 
        style={{
          background: activeStep === index 
            ? `linear-gradient(135deg, ${step.color}25, ${step.color}10)`
            : `linear-gradient(135deg, ${step.color}15, transparent)`,
          border: `0.0625rem solid ${step.color}33`,
          borderRadius: '0.75rem',
          padding: '1.5rem',
          height: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
        animate={activeStep === index ? {
          scale: [1, 1.02, 1],
          boxShadow: [`0 0 0 ${step.color}00`, `0 0 1.25rem ${step.color}55`, `0 0 0 ${step.color}00`]
        } : {}}
        transition={{ duration: 0.6 }}
      >
        {activeStep === index && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `radial-gradient(circle at center, ${step.color}33, transparent)`,
              pointerEvents: 'none'
            }}
          />
        )}
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          marginBottom: '1rem',
          gap: '0.5rem'
        }}>
          <div style={{
            width: '3.125rem',
            height: '3.125rem',
            borderRadius: '50%',
            background: `${step.color}22`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <step.icon size={24} style={{ color: step.color }} />
          </div>
          <div>
            <h4 style={{ color: step.color, marginBottom: '0.25rem', fontSize: '1rem' }}>
              {step.phase}
            </h4>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.8rem',
              color: '#64748b'
            }}>
              <Clock size={12} />
              {step.duration}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          {step.actions.map((action, i) => (
            <div
              key={i}
              style={{
                fontSize: '0.85rem',
                color: '#94a3b8',
                marginBottom: '0.25rem',
                paddingLeft: '1rem',
                position: 'relative'
              }}
            >
              <span style={{ 
                position: 'absolute', 
                left: 0,
                color: step.color
              }}>•</span>
              {action}
            </div>
          ))}
        </div>

        <div style={{
          padding: '0.5rem',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '0.375rem',
          marginBottom: '0.75rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
            {step.emotion.split(' ')[0]}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
            {step.emotion.split(' ')[1]}
          </div>
        </div>

        <div style={{
          borderTop: '0.0625rem solid rgba(255, 255, 255, 0.1)',
          paddingTop: '0.75rem',
          fontSize: '0.9rem',
          color: '#4ade80',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          {step.metric}
        </div>
      </motion.div>

      {index < journeySteps.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + index * 0.1 }}
          style={{
            position: 'absolute',
            top: '4.375rem',
            right: '-1.5625rem',
            color: '#64748b',
            zIndex: 1
          }}
        >
          <ChevronRight size={20} />
        </motion.div>
      )}
    </div>
  ))

  const summary = (
    <>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        style={{
          height: '0.1875rem',
          background: 'linear-gradient(90deg, #c084fc, #60a5fa, #4ade80, #fbbf24)',
          transformOrigin: 'left',
          marginBottom: '2rem'
        }}
      />
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem'
      }}>
        <div style={{
          padding: '1rem',
          background: 'rgba(147, 51, 234, 0.1)',
          borderRadius: '0.5rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#c084fc' }}>96%</div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Complete Onboarding</div>
        </div>
        <div style={{
          padding: '1rem',
          background: 'rgba(59, 130, 246, 0.1)',
          borderRadius: '0.5rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#60a5fa' }}>4.9/5</div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Satisfaction Score</div>
        </div>
        <div style={{
          padding: '1rem',
          background: 'rgba(34, 197, 94, 0.1)',
          borderRadius: '0.5rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4ade80' }}>18min</div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Avg Setup Time</div>
        </div>
        <div style={{
          padding: '1rem',
          background: 'rgba(251, 191, 36, 0.1)',
          borderRadius: '0.5rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fbbf24' }}>73</div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>NPS Score</div>
        </div>
      </div>
    </>
  )

  return (
    <GridLayout
      title="Customer Journey: First 30 Days"
      subtitle="From skeptical prospect to delighted advocate"
      cards={cards}
      columns={4}
      summary={summary}
    />
  )
}
