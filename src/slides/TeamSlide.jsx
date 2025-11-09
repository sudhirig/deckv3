import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
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

  // Title
  const title = (
    <>
      <GradientText gradient="from-purple-400 via-violet-400 to-indigo-400">
        Built by Experts in AI, Finance, and Global Markets
      </GradientText>
      <p style={{ 
        textAlign: 'center', 
        color: '#94a3b8', 
        fontSize: '1.2rem',
        marginTop: '0.5rem'
      }}>
        Former Google, Goldman Sachs & Morgan Stanley Leaders Building the Future
      </p>
    </>
  )

  // Grid cards for 4-column layout
  const cards = [
    // Column 1: CEO Profile
    <motion.div
      key="ceo"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHoveredMember('Sudhir G')}
      onHoverEnd={() => setHoveredMember(null)}
      className="glass-card"
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(124, 58, 237, 0.1))',
        position: 'relative'
      }}
    >
      {hoveredMember === 'Sudhir G' && (
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
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <img 
          src={ceoImage} 
          alt="CEO" 
          style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '12px',
            border: '2px solid rgba(139, 92, 246, 0.5)'
          }} 
        />
        <div>
          <h3 style={{ color: '#a78bfa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
            {founders[0].name}
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            {founders[0].title}
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <p style={{ color: '#fbbf24', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1rem' }}>
          "{founders[0].achievement}"
        </p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h4 style={{ color: '#a78bfa', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Background</h4>
        {founders[0].background.map((item, i) => (
          <div key={i} style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
            • {item}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {founders[0].companies.map((company, i) => (
          <div key={i} style={{
            padding: '0.25rem 0.75rem',
            background: 'rgba(139, 92, 246, 0.2)',
            borderRadius: '20px',
            fontSize: '0.8rem',
            color: '#a78bfa'
          }}>
            {company}
          </div>
        ))}
      </div>
    </motion.div>,

    // Column 2: CFO Profile
    <motion.div
      key="cfo"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHoveredMember('Sachin Shah')}
      onHoverEnd={() => setHoveredMember(null)}
      className="glass-card"
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1))',
        position: 'relative'
      }}
    >
      {hoveredMember === 'Sachin Shah' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: 'absolute',
            top: -10,
            left: -10,
            right: -10,
            bottom: -10,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent)',
            borderRadius: '20px',
            zIndex: -1,
            filter: 'blur(20px)'
          }}
        />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <img 
          src={cfoImage} 
          alt="CFO" 
          style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '12px',
            border: '2px solid rgba(59, 130, 246, 0.5)'
          }} 
        />
        <div>
          <h3 style={{ color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
            {founders[1].name}
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            {founders[1].title}
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <p style={{ color: '#fbbf24', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1rem' }}>
          "{founders[1].achievement}"
        </p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h4 style={{ color: '#60a5fa', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Background</h4>
        {founders[1].background.map((item, i) => (
          <div key={i} style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
            • {item}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {founders[1].companies.map((company, i) => (
          <div key={i} style={{
            padding: '0.25rem 0.75rem',
            background: 'rgba(59, 130, 246, 0.2)',
            borderRadius: '20px',
            fontSize: '0.8rem',
            color: '#60a5fa'
          }}>
            {company}
          </div>
        ))}
      </div>
    </motion.div>,

    // Column 3: Team Metrics
    <div key="metrics" style={{ display: 'grid', gap: '1rem' }}>
      <h3 style={{ color: '#22c55e', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
        Team Impact Metrics
      </h3>
      
      {teamMetrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
          className="glass-card"
          style={{
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'rgba(34, 197, 94, 0.05)'
          }}
        >
          <metric.icon size={24} color="#22c55e" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#22c55e' }}>
              {metric.prefix}<AnimatedCounter end={metric.value} delay={0.8 + index * 0.1} />{metric.suffix}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{metric.label}</div>
          </div>
        </motion.div>
      ))}
    </div>,

    // Column 4: Company Experience
    <div key="experience" style={{ display: 'grid', gap: '1rem' }}>
      <h3 style={{ color: '#fbbf24', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
        Elite Experience
      </h3>
      
      <motion.div
        className="glass-card"
        style={{ padding: '1.5rem' }}
      >
        <h4 style={{ color: '#fbbf24', fontSize: '0.9rem', marginBottom: '1rem' }}>
          Previous Companies
        </h4>
        {companyLogos.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem',
              marginBottom: '0.5rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '8px',
              borderLeft: `3px solid ${company.color}`
            }}
          >
            <Building2 size={20} color={company.color} />
            <span style={{ fontSize: '1rem', color: '#e2e8f0' }}>{company.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="glass-card"
        style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))'
        }}
      >
        <Award size={28} color="#fbbf24" style={{ marginBottom: '0.5rem' }} />
        <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '0.5rem' }}>
          Why We Win
        </div>
        <div style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: '1.6' }}>
          Deep domain expertise + cutting-edge AI + proven execution track record
        </div>
      </motion.div>
    </div>
  ]

  return (
    <GridLayout
      title={title}
      columns={4}
      cards={cards}
      particles={<ParticleBackground count={45} color="#8b5cf6" />}
    />
  )
}