import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { ChevronRight, Clock, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react'
import './SlideStyles.css'

export default function CustomerJourney1Slide() {
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

  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <AnimatedText delay={0.2}>
          <h2 className="slide-title" style={{ marginBottom: '0.5rem' }}>
            <GradientText gradient="from-green-400 to-emerald-400">
              Customer Journey: First 30 Days
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            From skeptical prospect to delighted advocate
          </p>
        </AnimatedText>

        {/* Journey Timeline */}
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          {/* Progress Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            style={{
              position: 'absolute',
              top: '60px',
              left: '5%',
              right: '5%',
              height: '3px',
              background: 'linear-gradient(90deg, #c084fc, #60a5fa, #4ade80, #fbbf24)',
              transformOrigin: 'left'
            }}
          />

          {/* Journey Steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.15 }}
                style={{ position: 'relative' }}
              >
                {/* Step Card */}
                <div style={{
                  background: `linear-gradient(135deg, ${step.color}15, transparent)`,
                  border: `1px solid ${step.color}33`,
                  borderRadius: '12px',
                  padding: '1.5rem',
                  height: '100%'
                }}>
                  {/* Icon and Duration */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    marginBottom: '1rem',
                    gap: '0.5rem'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: `${step.color}22`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <step.icon size={24} style={{ color: step.color }} />
                    </div>
                    <div>
                      <h4 style={{ color: step.color, marginBottom: '0.25rem' }}>
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

                  {/* Actions */}
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

                  {/* Emotion */}
                  <div style={{
                    padding: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '6px',
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

                  {/* Metric */}
                  <div style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingTop: '0.75rem',
                    fontSize: '0.9rem',
                    color: '#4ade80',
                    fontWeight: '600',
                    textAlign: 'center'
                  }}>
                    {step.metric}
                  </div>
                </div>

                {/* Arrow */}
                {index < journeySteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    style={{
                      position: 'absolute',
                      top: '70px',
                      right: '-25px',
                      color: '#64748b',
                      zIndex: 1
                    }}
                  >
                    <ChevronRight size={20} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}
        >
          <div style={{
            padding: '1rem',
            background: 'rgba(147, 51, 234, 0.1)',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#c084fc' }}>96%</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Complete Onboarding</div>
          </div>
          <div style={{
            padding: '1rem',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#60a5fa' }}>4.9/5</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Satisfaction Score</div>
          </div>
          <div style={{
            padding: '1rem',
            background: 'rgba(34, 197, 94, 0.1)',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4ade80' }}>18min</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Avg Setup Time</div>
          </div>
          <div style={{
            padding: '1rem',
            background: 'rgba(251, 191, 36, 0.1)',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fbbf24' }}>73</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>NPS Score</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}