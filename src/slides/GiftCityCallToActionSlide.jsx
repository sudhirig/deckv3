import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import { ArrowRight, Phone, Mail, Calendar, Rocket, TrendingUp } from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function GiftCityCallToActionSlide() {
  const [hoveredStep, setHoveredStep] = useState(null)
  const [hoveredReason, setHoveredReason] = useState(null)

  const opportunity = {
    currentRound: 3,
    growthTarget: 83,
    timeframe: 30,
    targetValuation: 250
  }

  const reasons = [
    { 
      id: 'regulatory',
      title: 'Regulatory Advantage',
      desc: 'IFSCA licensed, 0% tax for investors',
      icon: 'building',
      gradient: 'from-teal-400 to-green-400',
      color: '#14b8a6'
    },
    { 
      id: 'technology',
      title: 'AI Technology',
      desc: '68+ agents, 600% alpha advantage',
      icon: 'bot',
      gradient: 'from-purple-400 to-pink-400',
      color: '#a855f7'
    },
    { 
      id: 'market',
      title: 'India Gateway',
      desc: '$5T market, direct access',
      icon: 'globe',
      gradient: 'from-blue-400 to-cyan-400',
      color: '#3b82f6'
    }
  ]

  const nextSteps = [
    { 
      id: 1,
      title: 'Schedule Call',
      desc: '30-min intro with founders',
      icon: Calendar,
      color: '#14b8a6'
    },
    { 
      id: 2,
      title: 'Due Diligence',
      desc: 'Full access to platform & data',
      icon: ArrowRight,
      color: '#10b981'
    },
    { 
      id: 3,
      title: 'Partnership',
      desc: 'Join as LP or strategic investor',
      icon: 'users',
      iconType: 'lucide-react',
      color: '#3b82f6'
    }
  ]

  const opportunityCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, type: 'spring' }}
      style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(16, 185, 129, 0.15))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '2px solid rgba(20, 184, 166, 0.4)',
        gridColumn: 'span 3',
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {/* Animated Glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '-2rem',
          left: '-2rem',
          right: '-2rem',
          bottom: '-2rem',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, transparent 70%)',
          borderRadius: '2rem',
          filter: 'blur(2rem)',
          zIndex: -1
        }}
      />
      
      <motion.h2
        initial={{ opacity: 0, y: pxToRem(-20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{
          fontSize: '2rem',
          marginBottom: '2rem'
        }}
      >
        <GradientText gradient="from-teal-400 to-green-400">
          The Opportunity is NOW
        </GradientText>
      </motion.h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        marginBottom: '1.5rem'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.p
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ 
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}
          >
            <GradientText gradient="from-amber-400 to-orange-400">
              $<AnimatedCounter end={opportunity.currentRound} duration={1500} />M
            </GradientText>
          </motion.p>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Current Round</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, type: 'spring' }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.p
            animate={{ 
              scale: [1, 1.05, 1],
              color: ['#f59e0b', '#ef4444', '#f59e0b']
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            style={{ 
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}
          >
            <AnimatedCounter end={opportunity.growthTarget} duration={2000} />x
          </motion.p>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Growth Target</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: 'spring' }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.p
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            style={{ 
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#10b981',
              marginBottom: '0.5rem'
            }}
          >
            <AnimatedCounter end={opportunity.timeframe} duration={1800} />
          </motion.p>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Months to $250M</p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}
      >
        <Rocket size={24} color="#14b8a6" />
        <p style={{ fontSize: '1.1rem', color: '#14b8a6' }}>
          Join us in building India's first AI-powered Digital Family Office
        </p>
        <TrendingUp size={24} color="#10b981" />
      </motion.div>
    </motion.div>
  )

  const reasonsCards = reasons.map((reason, index) => (
    <motion.div
      key={reason.id}
      initial={{ opacity: 0, y: pxToRem(30) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6 + index * 0.1 }}
      whileHover={{ scale: 1.05, y: pxToRem(-5) }}
      onHoverStart={() => setHoveredReason(reason.id)}
      onHoverEnd={() => setHoveredReason(null)}
      style={{
        padding: '1.5rem',
        background: `linear-gradient(135deg, ${reason.color}15, rgba(0, 0, 0, 0.3))`,
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: `2px solid ${reason.color}30`,
        textAlign: 'center',
        cursor: 'pointer',
        position: 'relative'
      }}
    >
      {hoveredReason === reason.id && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: 'absolute',
            top: '-1rem',
            left: '-1rem',
            right: '-1rem',
            bottom: '-1rem',
            background: `radial-gradient(circle, ${reason.color}30, transparent)`,
            borderRadius: '1.5rem',
            filter: 'blur(1.5rem)',
            zIndex: -1
          }}
        />
      )}
      
      <motion.div
        animate={{ 
          rotate: hoveredReason === reason.id ? [0, 10, -10, 0] : 0,
          scale: hoveredReason === reason.id ? 1.2 : 1
        }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '1rem' }}
      >
        <Icon 
          type={reason.icon} 
          size={40} 
          variant="badge" 
          gradient={reason.gradient} 
        />
      </motion.div>
      
      <h3 style={{ 
        fontSize: '1.2rem',
        color: reason.color,
        marginBottom: '0.5rem'
      }}>
        {reason.title}
      </h3>
      
      <p style={{ 
        fontSize: '0.85rem',
        color: '#94a3b8'
      }}>
        {reason.desc}
      </p>
    </motion.div>
  ))

  const nextStepsCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.0 }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.1))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '2px solid rgba(59, 130, 246, 0.3)',
        gridColumn: 'span 3'
      }}
    >
      <h3 style={{
        fontSize: '1.5rem',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <GradientText gradient="from-blue-400 to-purple-400">
          Next Steps
        </GradientText>
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem'
      }}>
        {nextSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: pxToRem(-20) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2 + index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredStep(step.id)}
            onHoverEnd={() => setHoveredStep(null)}
            style={{
              textAlign: 'center',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <motion.div
              animate={{ 
                y: hoveredStep === step.id ? pxToRem(-5) : 0
              }}
              transition={{ duration: 0.3 }}
              style={{
                width: '4rem',
                height: '4rem',
                margin: '0 auto 1rem',
                background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `2px solid ${step.color}50`
              }}
            >
              {step.iconType === 'lucide-react' ? (
                <Icon type={step.icon} size={28} variant="inline" gradient={`from-blue-400 to-cyan-400`} />
              ) : (
                <step.icon size={28} color={step.color} />
              )}
            </motion.div>
            
            <h4 style={{ 
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: step.color,
              marginBottom: '0.5rem'
            }}>
              {step.id}. {step.title}
            </h4>
            
            <p style={{ 
              fontSize: '0.8rem',
              color: '#94a3b8'
            }}>
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        style={{
          marginTop: '2rem',
          textAlign: 'center'
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '1rem 2.5rem',
            background: 'linear-gradient(135deg, #14b8a6, #10b981)',
            borderRadius: '0.75rem',
            border: 'none',
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 0.5rem 2rem rgba(20, 184, 166, 0.3)'
          }}
        >
          Start the Conversation <ArrowRight size={20} style={{ display: 'inline', marginLeft: '0.5rem' }} />
        </motion.button>
      </motion.div>
    </motion.div>
  )

  const contactInfo = (
    <motion.div
      initial={{ opacity: 0, y: pxToRem(20) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.0 }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05))',
        borderRadius: '1.25rem',
        border: '2px solid rgba(251, 191, 36, 0.3)',
        textAlign: 'center'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3rem'
      }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer'
          }}
        >
          <Mail size={24} color="#14b8a6" />
          <span style={{ fontSize: '1rem', color: '#e2e8f0' }}>
            invest@voraventures.gift
          </span>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer'
          }}
        >
          <Phone size={24} color="#10b981" />
          <span style={{ fontSize: '1rem', color: '#e2e8f0' }}>
            +91 98765 43210
          </span>
        </motion.div>
      </div>
    </motion.div>
  )

  return (
    <GridLayout
      title={
        <>
          <GradientText gradient="from-teal-400 via-green-400 to-blue-400">
            Join Us in GIFT City
          </GradientText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              textAlign: 'center', 
              color: '#94a3b8', 
              fontSize: '1.2rem',
              marginTop: '0.5rem'
            }}
          >
            Be Part of India's Financial Revolution
          </motion.p>
        </>
      }
      cards={[opportunityCard, ...reasonsCards, nextStepsCard]}
      columns={3}
      summary={contactInfo}
      particles={
        <>
          {/* Rising Stars Effect */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [100, -100],
                x: [Math.random() * 20 - 10, Math.random() * 20 - 10],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeOut'
              }}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                bottom: 0,
                fontSize: '1rem',
                color: i % 3 === 0 ? '#14b8a6' : i % 3 === 1 ? '#3b82f6' : '#fbbf24'
              }}
            >
              ★
            </motion.div>
          ))}
          
          {/* Animated Background */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 30%, rgba(20, 184, 166, 0.15) 0%, transparent 60%)',
                'radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
                'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.15) 0%, transparent 60%)',
                'radial-gradient(circle at 30% 30%, rgba(20, 184, 166, 0.15) 0%, transparent 60%)'
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2
            }}
          />
        </>
      }
    />
  )
}