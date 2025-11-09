import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Building, ArrowDown, Globe, Shield, TrendingUp, DollarSign, Percent, Building2, Zap, Users } from 'lucide-react'
import './SlideStyles.css'

export default function GiftCityEntityStructureSlide() {
  const [hoveredEntity, setHoveredEntity] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [flowStep, setFlowStep] = useState(0)
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 3000)
    
    const flowInterval = setInterval(() => {
      setFlowStep(prev => (prev + 1) % 4)
    }, 2000)
    
    return () => {
      clearInterval(pulseInterval)
      clearInterval(flowInterval)
    }
  }, [])
  
  return (
    <div className="slide-content" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Premium Particle Animation */}
      <ParticleBackground count={45} color="#06b6d4" />
      
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 60%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 3 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="slide-title"
          style={{ textAlign: 'center', marginBottom: '0.5rem' }}
        >
          <GradientText gradient="from-cyan-400 via-blue-400 to-teal-400">
            Vora Ventures Entity Structure
          </GradientText>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ 
            textAlign: 'center', 
            color: '#94a3b8', 
            fontSize: '1.2rem',
            marginBottom: '2rem'
          }}
        >
          Three-Layer Global Architecture for Maximum Tax Efficiency
        </motion.p>
        
        {/* Animated Flow Diagram */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Animated Connection Lines */}
          <svg 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              zIndex: 1,
              pointerEvents: 'none'
            }}
            viewBox="0 0 900 600"
          >
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8">
                  <animate attributeName="stop-color" 
                    values="#06b6d4;#10b981;#8b5cf6;#06b6d4" 
                    dur="6s" 
                    repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.4">
                  <animate attributeName="stop-color" 
                    values="#10b981;#8b5cf6;#06b6d4;#10b981" 
                    dur="6s" 
                    repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            
            {/* Animated Flow Lines */}
            <motion.path
              d="M450 120 L450 200"
              stroke="url(#flowGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: flowStep >= 1 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))' }}
            />
            
            <motion.path
              d="M450 320 L450 400"
              stroke="url(#flowGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: flowStep >= 2 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              style={{ filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))' }}
            />
            
            {/* Branching to 3 GIFT entities */}
            <motion.path
              d="M450 400 L300 480"
              stroke="url(#flowGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: flowStep >= 3 ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            />
            <motion.path
              d="M450 400 L450 480"
              stroke="url(#flowGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: flowStep >= 3 ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            />
            <motion.path
              d="M450 400 L600 480"
              stroke="url(#flowGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: flowStep >= 3 ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            />
          </svg>
          
          {/* US Entity - Top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -5 }}
            onHoverStart={() => setHoveredEntity('US')}
            onHoverEnd={() => setHoveredEntity(null)}
            style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.05))',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              marginBottom: '2rem',
              position: 'relative',
              overflow: 'visible'
            }}
          >
            {/* Halo Effect on Hover */}
            {hoveredEntity === 'US' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
                  borderRadius: '24px',
                  filter: 'blur(20px)',
                  zIndex: -1
                }}
              />
            )}
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <motion.div
                    animate={{ rotate: pulseAnimation ? 0 : 360 }}
                    transition={{ duration: 3 }}
                  >
                    <Globe size={32} color="#3b82f6" />
                  </motion.div>
                  <h3 style={{ fontSize: '1.5rem', color: '#3b82f6' }}>
                    Vora Ventures LLC
                  </h3>
                </div>
                <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>Delaware, USA</p>
                <p style={{ color: '#10b981', fontWeight: 'bold' }}>Global Holding Entity</p>
              </div>
              
              <motion.div
                animate={{ scale: pulseAnimation ? 1 : 1.05 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'right' }}
              >
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>
                  $<AnimatedCounter value={250} duration={2000} />M
                </p>
                <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Target AUM</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* India Entity - Middle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -5 }}
            onHoverStart={() => setHoveredEntity('India')}
            onHoverEnd={() => setHoveredEntity(null)}
            style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.15), rgba(249, 115, 22, 0.05))',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '2px solid rgba(251, 146, 60, 0.3)',
              marginBottom: '2rem',
              position: 'relative',
              overflow: 'visible'
            }}
          >
            {/* Halo Effect */}
            {hoveredEntity === 'India' && (
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  background: 'radial-gradient(circle, rgba(251, 146, 60, 0.3), transparent)',
                  borderRadius: '24px',
                  filter: 'blur(20px)',
                  zIndex: -1
                }}
              />
            )}
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <motion.div
                    animate={{ y: pulseAnimation ? 0 : -5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Building size={32} color="#fb923c" />
                  </motion.div>
                  <h3 style={{ fontSize: '1.5rem', color: '#fb923c' }}>
                    Vora Ventures LLP
                  </h3>
                </div>
                <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>Mumbai, India</p>
                <p style={{ color: '#fbbf24', fontWeight: 'bold' }}>Operations Hub</p>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <motion.div
                  animate={{ scale: hoveredEntity === 'India' ? 1.1 : 1 }}
                  style={{ textAlign: 'center' }}
                >
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>
                    <AnimatedCounter value={30} duration={1500} />%
                  </p>
                  <p style={{ color: '#64748b', fontSize: '0.75rem' }}>Tax Rate</p>
                </motion.div>
                <motion.div
                  animate={{ scale: hoveredEntity === 'India' ? 1.1 : 1 }}
                  style={{ textAlign: 'center' }}
                >
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7' }}>
                    <AnimatedCounter value={100} duration={1500} />+
                  </p>
                  <p style={{ color: '#64748b', fontSize: '0.75rem' }}>Team</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* GIFT City Entities - Bottom Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              {
                name: 'Tech LLP',
                icon: Shield,
                color: '#14b8a6',
                gst: 0,
                tax: 10,
                status: 'AI Platform Ready',
                features: ['Zero GST', 'Tech Hub', 'R&D Center']
              },
              {
                name: 'AIF LLP',
                icon: DollarSign,
                color: '#8b5cf6',
                aum: 250,
                category: 'Category III',
                status: 'Fund Raising',
                features: ['Global LPs', 'Tax Pass-through', 'USD Denominated']
              },
              {
                name: 'Advisory LLP',
                icon: TrendingUp,
                color: '#10b981',
                capGains: 0,
                license: 'IFSCA',
                status: 'Operational',
                features: ['Zero Cap Gains', 'Global Access', 'Full Compliance']
              }
            ].map((entity, index) => (
              <motion.div
                key={entity.name}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: 0.9 + index * 0.15,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.08,
                  y: -10,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                onHoverStart={() => setHoveredEntity(entity.name)}
                onHoverEnd={() => setHoveredEntity(null)}
                style={{
                  padding: '1.25rem',
                  background: `linear-gradient(135deg, ${entity.color}20, rgba(255, 255, 255, 0.02))`,
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px',
                  border: `2px solid ${entity.color}40`,
                  position: 'relative',
                  overflow: 'visible',
                  cursor: 'pointer'
                }}
              >
                {/* Particle Halo on Hover */}
                {hoveredEntity === entity.name && (
                  <>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.2, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${entity.color}40, transparent)`,
                        zIndex: -1
                      }}
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                      style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '-10px',
                        right: '-10px',
                        bottom: '-10px',
                        background: `conic-gradient(from 0deg, transparent, ${entity.color}20, transparent)`,
                        borderRadius: '20px',
                        zIndex: -2
                      }}
                    />
                  </>
                )}
                
                {/* Header with Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <motion.div
                      animate={{ 
                        rotate: hoveredEntity === entity.name ? [0, -10, 10, 0] : 0,
                        scale: pulseAnimation ? 1 : 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <entity.icon size={24} color={entity.color} />
                    </motion.div>
                    <h4 style={{ color: entity.color, fontWeight: 'bold' }}>
                      {entity.name}
                    </h4>
                  </div>
                </div>
                
                {/* Entity Specific Metrics */}
                {entity.aum && (
                  <motion.div
                    animate={{ scale: hoveredEntity === entity.name ? 1.05 : 1 }}
                    style={{ marginBottom: '0.75rem' }}
                  >
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: entity.color }}>
                      $<AnimatedCounter value={entity.aum} duration={2000} />M
                    </p>
                    <p style={{ color: '#64748b', fontSize: '0.75rem' }}>{entity.category}</p>
                  </motion.div>
                )}
                
                {entity.gst !== undefined && (
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                    <div>
                      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981' }}>
                        {entity.gst}%
                      </p>
                      <p style={{ color: '#64748b', fontSize: '0.7rem' }}>GST</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#06b6d4' }}>
                        {entity.tax}%
                      </p>
                      <p style={{ color: '#64748b', fontSize: '0.7rem' }}>Tax</p>
                    </div>
                  </div>
                )}
                
                {entity.capGains !== undefined && (
                  <div style={{ marginBottom: '0.75rem' }}>
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981' }}>
                      {entity.capGains}% Cap Gains
                    </p>
                    <p style={{ color: '#64748b', fontSize: '0.75rem' }}>{entity.license} Licensed</p>
                  </div>
                )}
                
                {/* Features List */}
                <div style={{ marginTop: '0.75rem' }}>
                  {entity.features.map((feature, fi) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.15 + fi * 0.1 }}
                      style={{
                        fontSize: '0.75rem',
                        color: '#94a3b8',
                        marginBottom: '0.25rem',
                        paddingLeft: '1rem',
                        position: 'relative'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: entity.color
                      }}>▸</span>
                      {feature}
                    </motion.div>
                  ))}
                </div>
                
                {/* Status Bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.4 + index * 0.15, duration: 0.8 }}
                  style={{
                    marginTop: '0.75rem',
                    height: '3px',
                    background: `linear-gradient(90deg, ${entity.color}, ${entity.color}80)`,
                    borderRadius: '3px',
                    transformOrigin: 'left'
                  }}
                />
                
                <p style={{ 
                  fontSize: '0.75rem', 
                  color: entity.color,
                  marginTop: '0.5rem',
                  fontWeight: 'bold'
                }}>
                  {entity.status}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom Summary Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(16, 185, 129, 0.05))',
            borderRadius: '20px',
            border: '1px solid rgba(6, 182, 212, 0.2)'
          }}
        >
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '2rem',
            textAlign: 'center'
          }}>
            {[
              { label: 'GST Rate', value: 0, suffix: '%', color: '#14b8a6' },
              { label: 'Corp Tax', value: 10, suffix: '%', color: '#06b6d4' },
              { label: 'Compliant', value: 100, suffix: '%', color: '#10b981' },
              { label: 'Total Entities', value: 3, color: '#8b5cf6' }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.p
                  animate={{ 
                    scale: pulseAnimation && index === 0 ? [1, 1.1, 1] : 1,
                    color: pulseAnimation && index === 0 ? [metric.color, '#fff', metric.color] : metric.color
                  }}
                  transition={{ duration: 1 }}
                  style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold'
                  }}
                >
                  <AnimatedCounter value={metric.value} duration={1500 + index * 200} />
                  {metric.suffix}
                </motion.p>
                <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}