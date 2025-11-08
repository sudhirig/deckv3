import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { ChevronRight } from 'lucide-react'
import './SlideStyles.css'

export default function AgendaRoadmapSlide() {
  const roadmapSteps = [
    {
      number: '1',
      title: 'THE PROBLEM',
      subtitle: 'Why Now?',
      details: ['AI disruption', '46% switching', 'Alpha gap'],
      color: '#ef4444',
      gradient: 'from-red-400 to-orange-400'
    },
    {
      number: '2',
      title: 'THE SOLUTION',
      subtitle: 'Our AI Family Office',
      details: ['Agentic AI', 'Three alpha agents', 'Live platform'],
      color: '#14b8a6',
      gradient: 'from-teal-400 to-green-400'
    },
    {
      number: '3',
      title: 'THE PROOF',
      subtitle: 'Validation & Traction',
      details: ['Real clients', '100% operational', 'Competitive moats'],
      color: '#3b82f6',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      number: '4',
      title: 'THE BUSINESS',
      subtitle: 'Path to $1B',
      details: ['$112T TAM', 'Unit economics', 'Expert team'],
      color: '#a78bfa',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      number: '5',
      title: 'THE ASK',
      subtitle: '$5M Seed Round',
      details: ['18-month runway', 'Scale to 1B AUM', 'Market window'],
      color: '#fbbf24',
      gradient: 'from-yellow-400 to-orange-400'
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
          <h2 className="slide-title" style={{ marginBottom: '1rem' }}>
            <GradientText gradient="from-teal-400 to-cyan-400">
              Your Journey Through This Deck
            </GradientText>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '3rem' }}>
            A structured narrative from problem to opportunity
          </p>
        </AnimatedText>

        {/* Roadmap Visual */}
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: '60px',
              left: '10%',
              right: '10%',
              height: '2px',
              background: 'linear-gradient(90deg, #ef4444, #14b8a6, #3b82f6, #a78bfa, #fbbf24)',
              transformOrigin: 'left'
            }}
          />

          {/* Steps */}
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                style={{ 
                  flex: 1, 
                  textAlign: 'center',
                  padding: '0 0.5rem',
                  position: 'relative'
                }}
              >
                {/* Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.15, type: 'spring', stiffness: 200 }}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${step.color}33, ${step.color}11)`,
                    border: `3px solid ${step.color}`,
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: step.color
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Title */}
                <h3 style={{ 
                  fontSize: '1rem', 
                  fontWeight: 'bold',
                  marginBottom: '0.3rem',
                  background: `linear-gradient(135deg, ${step.gradient.split(' ')[1]}, ${step.gradient.split(' ')[3]})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: '#94a3b8',
                  marginBottom: '0.5rem'
                }}>
                  {step.subtitle}
                </p>

                {/* Details */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  style={{ fontSize: '0.8rem', color: '#64748b' }}
                >
                  {step.details.map((detail, i) => (
                    <div key={i} style={{ marginBottom: '0.2rem' }}>
                      • {detail}
                    </div>
                  ))}
                </motion.div>

                {/* Arrow (except last) */}
                {index < roadmapSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{
                      position: 'absolute',
                      top: '30px',
                      right: '-20px',
                      color: '#64748b'
                    }}
                  >
                    <ChevronRight size={20} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          style={{ 
            textAlign: 'center',
            padding: '1.5rem',
            background: 'rgba(20, 184, 166, 0.1)',
            borderRadius: '12px',
            marginTop: '2rem'
          }}
        >
          <p style={{ fontSize: '1.1rem', color: '#14b8a6' }}>
            <strong>28 slides</strong> • <strong>15-minute core story</strong> • <strong>Modular deep dives available</strong>
          </p>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>
            We'll focus on the areas most relevant to your interests
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}