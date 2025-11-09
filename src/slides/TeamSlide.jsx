import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import ParticleBackground from '../components/ParticleBackground'
import AnimatedCounter from '../components/AnimatedCounter'
import { Linkedin, Building2, Award, Users, TrendingUp, Brain, DollarSign, Target, Check, Briefcase, GraduationCap } from 'lucide-react'
import ceoImage from '@assets/stock_images/professional_indian__b5bf24ba.jpg'
import cfoImage from '@assets/stock_images/professional_indian__403e201d.jpg'
import './SlideStyles.css'

export default function TeamSlide() {
  const [hoveredMember, setHoveredMember] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const founders = [
    {
      name: 'Sudhir G',
      title: 'Co-Founder & CEO',
      linkedin: 'linkedin.com/in/sudhir-g-0972298/',
      expertise: ['AI Strategy', 'Product', 'Engineering'],
      companies: ['Google', 'Goldman Sachs'],
      background: [
        '15+ years wealth management',
        'Ex-Goldman Sachs PWM',
        'MBA, CFA Charter'
      ],
      photo: ceoImage,
      achievement: 'Built AI systems managing $2B+ AUM'
    },
    {
      name: 'Sachin Shah',
      title: 'Co-Founder & CFO',
      linkedin: 'voraventures.com/executive-team/sachin-shah',
      expertise: ['Finance', 'Risk', 'Compliance'],
      companies: ['Morgan Stanley', 'JP Morgan'],
      background: [
        'Vora Ventures Partner',
        'Financial Architecture',
        'Tax Optimization Expert'
      ],
      photo: cfoImage,
      achievement: 'Structured $5B+ in alternative investments'
    }
  ]

  const teamMetrics = [
    { label: 'Combined Experience', value: 33, suffix: '+ years', icon: Brain },
    { label: 'AUM Managed', value: 250, suffix: 'M', prefix: '$', icon: DollarSign },
    { label: 'AI Agents Deployed', value: 68, suffix: '+', icon: Users },
    { label: 'Client Success Rate', value: 97, suffix: '%', icon: Target }
  ]

  const companyLogos = [
    { name: 'Google', color: '#4285f4' },
    { name: 'Goldman', color: '#7399d9' },
    { name: 'Morgan Stanley', color: '#1e4d2b' },
    { name: 'JP Morgan', color: '#0e7eb8' }
  ]

  return (
    <div className="slide-content" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Premium Particle Animation */}
      <ParticleBackground count={45} color="#8b5cf6" />
      
      {/* Animated Gradient Background with Depth */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />

      {/* Light Sweep Animation */}
      <motion.div
        animate={{
          background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent)',
          x: ['-100%', '200%']
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 3 }}
      >
        <AnimatedText delay={0.2}>
          <h1 className="slide-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <GradientText gradient="from-purple-400 via-violet-400 to-indigo-400">
              Built by Experts in AI, Finance, and Global Markets
            </GradientText>
          </h1>
        </AnimatedText>
        
        <AnimatedText delay={0.4}>
          <p style={{ 
            textAlign: 'center', 
            color: '#94a3b8', 
            fontSize: '1.2rem',
            marginBottom: '2rem'
          }}>
            Former Google, Goldman Sachs & Morgan Stanley Leaders Building the Future
          </p>
        </AnimatedText>
        
        {/* Team Members Grid with Multi-Layer Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '2rem',
          marginBottom: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {founders.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8, type: 'spring' }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredMember(member.name)}
              onHoverEnd={() => setHoveredMember(null)}
              style={{ position: 'relative' }}
            >
              {/* Particle Halo Effect on Hover */}
              {hoveredMember === member.name && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    position: 'absolute',
                    top: -10,
                    left: -10,
                    right: -10,
                    bottom: -10,
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent)',
                    borderRadius: '20px',
                    zIndex: -1,
                    filter: 'blur(20px)'
                  }}
                />
              )}

              {/* Multi-Layer Glass Card */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Inner Glow Layer */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.6), transparent)',
                  animation: 'shimmer 3s infinite'
                }} />

                {/* Profile Section */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <motion.div 
                    animate={{ scale: pulseAnimation ? 1 : 1.05 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      marginRight: '1.5rem',
                      position: 'relative',
                      boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
                    }}
                  >
                    {/* Breathing Ring Animation */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        position: 'absolute',
                        top: -5,
                        left: -5,
                        right: -5,
                        bottom: -5,
                        borderRadius: '50%',
                        border: '2px solid rgba(139, 92, 246, 0.5)'
                      }}
                    />
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </motion.div>
                  
                  <div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold',
                      color: '#fff',
                      marginBottom: '0.25rem'
                    }}>
                      {member.name}
                    </h3>
                    <p style={{ 
                      fontSize: '1rem',
                      color: '#8b5cf6',
                      marginBottom: '0.5rem'
                    }}>
                      {member.title}
                    </p>
                    <motion.a
                      href={`https://${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(10, 102, 194, 0.2)',
                        borderRadius: '8px',
                        border: '1px solid rgba(10, 102, 194, 0.5)',
                        color: '#0a66c2',
                        textDecoration: 'none',
                        fontSize: '0.875rem'
                      }}
                    >
                      <Linkedin size={16} />
                      LinkedIn Profile
                    </motion.a>
                  </div>
                </div>

                {/* Company Logos with Animation */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    {member.companies.map((company, idx) => (
                      <motion.div
                        key={company}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        style={{
                          padding: '0.5rem 1rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <Building2 size={14} color={companyLogos.find(l => l.name === company)?.color} />
                        <span style={{ color: '#fff', fontSize: '0.875rem' }}>{company}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Expertise Tags with Staggered Animation */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {member.expertise.map((skill, idx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: 1.0 + idx * 0.1,
                          type: 'spring',
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.05 }}
                        style={{
                          padding: '0.25rem 0.75rem',
                          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1))',
                          borderRadius: '20px',
                          border: '1px solid rgba(139, 92, 246, 0.3)',
                          color: '#a78bfa',
                          fontSize: '0.875rem'
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Achievement with Counter Animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  style={{
                    padding: '0.75rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '8px',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <Award size={16} color="#10b981" style={{ marginBottom: '0.25rem' }} />
                  <p style={{ color: '#10b981', fontSize: '0.875rem' }}>
                    {member.achievement}
                  </p>
                </motion.div>

                {/* Experience Badge */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: '0.5rem 1rem',
                    background: 'linear-gradient(135deg, #f59e0b, #f97316)',
                    borderRadius: '20px',
                    color: '#fff',
                    fontSize: '0.875rem',
                    fontWeight: 'bold'
                  }}
                >
                  {member.background[0]}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Team Metrics with Breathing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '20px',
            border: '1px solid rgba(139, 92, 246, 0.2)'
          }}
        >
          <h3 style={{ 
            textAlign: 'center',
            fontSize: '1.3rem',
            color: '#a78bfa',
            marginBottom: '1.5rem'
          }}>
            Collective Impact
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {teamMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -5 }}
                style={{
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                {/* Breathing Background Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)`,
                    filter: 'blur(10px)',
                    zIndex: -1
                  }}
                />
                
                <motion.div
                  animate={{ 
                    scale: pulseAnimation ? 1 : 1.05,
                    rotate: pulseAnimation ? 0 : 5
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ marginBottom: '0.5rem' }}
                >
                  <metric.icon size={32} color="#8b5cf6" />
                </motion.div>
                
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff' }}>
                  {metric.prefix}
                  <AnimatedCounter 
                    value={metric.value} 
                    duration={2000 + index * 200}
                    delay={1800 + index * 100}
                  />
                  {metric.suffix}
                </div>
                <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Trust Badges with Advisors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          style={{
            marginTop: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}
        >
          {/* Advisors */}
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            style={{
              padding: '1.5rem',
              background: 'rgba(34, 197, 94, 0.1)',
              borderRadius: '16px',
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}
          >
            <h4 style={{ color: '#22c55e', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
              Elite Advisors
            </h4>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.6' }}>
              <div>• Former SEC Commissioner</div>
              <div>• Big 4 Tax Partner</div>
              <div>• GIFT City Expert</div>
            </div>
          </motion.div>

          {/* Track Record */}
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            style={{
              padding: '1.5rem',
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '16px',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}
          >
            <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
              Proven Track Record
            </h4>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.6' }}>
              <div>• $2B+ AUM managed</div>
              <div>• 3 successful exits</div>
              <div>• 15+ AI patents</div>
            </div>
          </motion.div>

          {/* Achievement */}
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            style={{
              padding: '1.5rem',
              background: 'rgba(168, 85, 247, 0.1)',
              borderRadius: '16px',
              border: '1px solid rgba(168, 85, 247, 0.3)'
            }}
          >
            <h4 style={{ color: '#a855f7', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
              Industry Recognition
            </h4>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.6' }}>
              <div>• Stanford Research</div>
              <div>• McKinsey Alumni</div>
              <div>• 100% Compliance</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          style={{
            textAlign: 'center',
            marginTop: '2rem'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem 2rem',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}
          >
            <TrendingUp size={20} color="#10b981" />
            <span style={{ color: '#10b981', fontWeight: 'bold' }}>
              Building India's First AI-Powered Digital Family Office
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
