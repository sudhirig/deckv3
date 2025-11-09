import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { TrendingUp, Building2, Users, Target, DollarSign, Calendar, Rocket, Award, Sparkles } from 'lucide-react'
import './SlideStyles.css'

export default function ExitStrategySlide() {
  const [hoveredOption, setHoveredOption] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [selectedOption, setSelectedOption] = useState(0)
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 3000)
    
    const cycleInterval = setInterval(() => {
      setSelectedOption(prev => (prev + 1) % 3)
    }, 5000)
    
    return () => {
      clearInterval(pulseInterval)
      clearInterval(cycleInterval)
    }
  }, [])
  
  const exitOptions = [
    {
      type: 'IPO',
      timeline: '5-7 years',
      valuation: '$1B+',
      probability: 35,
      color: '#60a5fa',
      icon: Rocket,
      requirements: [
        '$100M+ revenue run rate',
        '25% EBITDA margins',
        '10,000+ clients',
        'Multi-market presence'
      ],
      comparables: ['Coinbase ($60B)', 'Robinhood ($15B)', 'SoFi ($8B)']
    },
    {
      type: 'Strategic Acquisition',
      timeline: '3-5 years',
      valuation: '$500M-1B',
      probability: 45,
      color: '#4ade80',
      icon: Building2,
      requirements: [
        'Market leadership position',
        'Proprietary AI technology',
        'Strong client retention',
        'Regulatory compliance'
      ],
      comparables: ['Plaid ($13.4B)', 'Nutmeg ($360M)', 'Personal Capital ($1B)']
    },
    {
      type: 'PE Buyout',
      timeline: '4-6 years',
      valuation: '$750M+',
      probability: 20,
      color: '#fbbf24',
      icon: Users,
      requirements: [
        'Predictable cash flows',
        'High EBITDA margins',
        'Scalable platform',
        'Management continuity'
      ],
      comparables: ['Apex Clearing ($4.7B)', 'Envestnet ($4.5B)', 'InvestCloud ($1B)']
    }
  ]

  const acquirers = [
    { name: 'JP Morgan', rationale: 'Digital wealth expansion', logo: '🏦' },
    { name: 'BlackRock', rationale: 'Aladdin ecosystem', logo: '⚫' },
    { name: 'Charles Schwab', rationale: 'Next-gen platform', logo: '🔵' },
    { name: 'Goldman Sachs', rationale: 'Marcus enhancement', logo: '🏛️' },
    { name: 'Morgan Stanley', rationale: 'E*TRADE synergies', logo: '🏢' },
    { name: 'Fidelity', rationale: 'Digital transformation', logo: '🟢' }
  ]

  return (
    <div className="slide-content" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Premium Particle Animation - 50 particles */}
      <ParticleBackground count={50} color="#8b5cf6" />
      
      {/* Multi-layer Animated Gradients */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 20%, rgba(96, 165, 250, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)'
          ]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />
      
      {/* Animated Money Symbols (for exit valuation) */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: Math.random() * window.innerWidth, opacity: 0 }}
          animate={{ 
            y: window.innerHeight + 100,
            x: Math.random() * window.innerWidth,
            opacity: [0, 0.3, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 2,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            fontSize: '2rem',
            color: '#8b5cf6',
            zIndex: 2
          }}
        >
          $
        </motion.div>
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card"
        style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 3,
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '2px solid rgba(139, 92, 246, 0.2)',
          padding: '2rem'
        }}
      >
        {/* Header with Enhanced Typography */}
        <AnimatedText delay={0.2}>
          <h2 className="slide-title" style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
            <GradientText gradient="from-purple-400 via-pink-400 to-blue-400">
              Exit Strategy & Investor Returns
            </GradientText>
          </h2>
        </AnimatedText>
        
        {/* Subtitle with Live Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            Multiple paths to liquidity with{' '}
            <motion.span
              animate={{ color: pulseAnimation ? '#10b981' : '#4ade80' }}
              transition={{ duration: 1 }}
              style={{ fontWeight: 'bold' }}
            >
              20-50x return potential
            </motion.span>
          </p>
        </motion.div>

        {/* Exit Options Grid with Enhanced Glass Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          {exitOptions.map((option, index) => (
            <motion.div
              key={option.type}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.15, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -10 }}
              onHoverStart={() => setHoveredOption(index)}
              onHoverEnd={() => setHoveredOption(null)}
              style={{
                padding: '1.5rem',
                background: `linear-gradient(135deg, ${option.color}15, rgba(255, 255, 255, 0.02))`,
                backdropFilter: 'blur(15px)',
                borderRadius: '16px',
                border: `2px solid ${option.color}30`,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'visible',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setSelectedOption(index)}
            >
              {/* Hover Halo Effect */}
              {hoveredOption === index && (
                <motion.div
                  animate={{ 
                    opacity: [0.2, 0.4, 0.2],
                    scale: [0.98, 1.02, 0.98]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    inset: -20,
                    background: `radial-gradient(circle, ${option.color}30, transparent)`,
                    borderRadius: '20px',
                    filter: 'blur(15px)',
                    zIndex: -1
                  }}
                />
              )}
              
              {/* Option Header */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <motion.div
                    animate={{ 
                      rotate: selectedOption === index ? 360 : 0,
                      scale: selectedOption === index ? 1.2 : 1
                    }}
                    transition={{ duration: 1 }}
                  >
                    <option.icon size={24} color={option.color} />
                  </motion.div>
                  <h3 style={{ fontSize: '1.3rem', color: option.color, fontWeight: 'bold' }}>
                    {option.type}
                  </h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{option.timeline}</p>
              </div>
              
              {/* Valuation with AnimatedCounter */}
              <motion.div
                animate={{ scale: selectedOption === index ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 2 }}
                style={{ 
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: option.color,
                  marginBottom: '1rem'
                }}
              >
                {option.valuation}
              </motion.div>
              
              {/* Probability Circle */}
              <div style={{ marginBottom: '1rem' }}>
                <CircularProgress 
                  value={option.probability}
                  size={80}
                  strokeWidth={8}
                  color={option.color}
                />
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.5rem', textAlign: 'center' }}>
                  Probability
                </p>
              </div>
              
              {/* Requirements List */}
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Requirements:</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {option.requirements.map((req, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + idx * 0.1 }}
                      style={{ 
                        fontSize: '0.8rem',
                        color: '#e2e8f0',
                        marginBottom: '0.25rem',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <motion.span
                        animate={{ scale: pulseAnimation ? [1, 1.5, 1] : 1 }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        style={{ color: option.color, marginRight: '0.5rem' }}
                      >
                        •
                      </motion.span>
                      {req}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Comparables */}
              <div>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Comparables:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {option.comparables.map((comp, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 5 }}
                      style={{ 
                        fontSize: '0.8rem',
                        color: '#e2e8f0',
                        padding: '0.25rem 0.5rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '4px'
                      }}
                    >
                      {comp}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Potential Acquirers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(255, 255, 255, 0.02))',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '2px solid rgba(16, 185, 129, 0.3)'
          }}
        >
          <h3 style={{ 
            fontSize: '1.2rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Award size={24} color="#10b981" />
            </motion.div>
            <GradientText gradient="from-green-400 to-teal-400">
              Potential Strategic Acquirers
            </GradientText>
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1rem' }}>
            {acquirers.map((acq, index) => (
              <motion.div
                key={acq.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -5 }}
                style={{
                  textAlign: 'center',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer'
                }}
              >
                <motion.div
                  animate={{ 
                    y: pulseAnimation ? [0, -5, 0] : 0
                  }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                  style={{ fontSize: '2rem', marginBottom: '0.5rem' }}
                >
                  {acq.logo}
                </motion.div>
                <p style={{ fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
                  {acq.name}
                </p>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  {acq.rationale}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Bottom ROI Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          style={{
            marginTop: '2rem',
            textAlign: 'center',
            padding: '1rem',
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(255, 255, 255, 0.02))',
            borderRadius: '12px',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.25rem' }}>Target Return</p>
              <motion.div
                animate={{ scale: pulseAnimation ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 2 }}
                style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}
              >
                <AnimatedCounter value={20} duration={1500} />x-<AnimatedCounter value={50} duration={1500} />x
              </motion.div>
            </div>
            <div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.25rem' }}>Target Timeline</p>
              <motion.div
                animate={{ color: pulseAnimation ? '#10b981' : '#4ade80' }}
                transition={{ duration: 1 }}
                style={{ fontSize: '2rem', fontWeight: 'bold' }}
              >
                3-7 Years
              </motion.div>
            </div>
            <div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.25rem' }}>IRR Target</p>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}
              >
                <AnimatedCounter value={75} duration={1500} />%+
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}