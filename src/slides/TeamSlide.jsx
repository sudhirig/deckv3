import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Linkedin, Building2, Award, Users, TrendingUp, Brain, DollarSign, Target, Check, Briefcase, GraduationCap } from 'lucide-react'
import { pxToRem, SPACING, TYPOGRAPHY } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
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
        fontSize: TYPOGRAPHY.body,
        marginTop: SPACING.xs
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
        padding: pxToRem(14),
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
            top: pxToRem(-10),
            left: pxToRem(-10),
            right: pxToRem(-10),
            bottom: pxToRem(-10),
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent)',
            borderRadius: pxToRem(20),
            zIndex: -1,
            filter: `blur(${pxToRem(20)})`
          }}
        />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.sm }}>
        <img 
          src={ceoImage} 
          alt="CEO" 
          style={{ 
            width: pxToRem(60), 
            height: pxToRem(60), 
            borderRadius: pxToRem(12),
            border: `${pxToRem(2)} solid rgba(139, 92, 246, 0.5)`
          }} 
        />
        <div>
          <h3 style={{ color: '#a78bfa', fontSize: TYPOGRAPHY.body, marginBottom: pxToRem(4) }}>
            {founders[0].name}
          </h3>
          <p style={{ color: '#94a3b8', fontSize: TYPOGRAPHY.body }}>
            {founders[0].title}
          </p>
        </div>
      </div>

      <div style={{ marginBottom: SPACING.sm }}>
        <p style={{ color: '#fbbf24', fontSize: TYPOGRAPHY.body, fontStyle: 'italic', marginBottom: SPACING.sm }}>
          "{founders[0].achievement}"
        </p>
      </div>

      <div style={{ marginBottom: SPACING.sm }}>
        <h4 style={{ color: '#a78bfa', fontSize: TYPOGRAPHY.body, marginBottom: SPACING.xs }}>Background</h4>
        {founders[0].background.map((item, i) => (
          <div key={i} style={{ fontSize: TYPOGRAPHY.body, color: '#e2e8f0', marginBottom: pxToRem(4) }}>
            • {item}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: SPACING.sm, marginTop: SPACING.sm }}>
        {founders[0].companies.map((company, i) => (
          <div key={i} style={{
            padding: `${pxToRem(4)} ${pxToRem(12)}`,
            background: 'rgba(139, 92, 246, 0.2)',
            borderRadius: pxToRem(20),
            fontSize: TYPOGRAPHY.body,
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
        padding: pxToRem(14),
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
            top: pxToRem(-10),
            left: pxToRem(-10),
            right: pxToRem(-10),
            bottom: pxToRem(-10),
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent)',
            borderRadius: pxToRem(20),
            zIndex: -1,
            filter: `blur(${pxToRem(20)})`
          }}
        />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.sm }}>
        <img 
          src={cfoImage} 
          alt="CFO" 
          style={{ 
            width: pxToRem(60), 
            height: pxToRem(60), 
            borderRadius: pxToRem(12),
            border: `${pxToRem(2)} solid rgba(59, 130, 246, 0.5)`
          }} 
        />
        <div>
          <h3 style={{ color: '#60a5fa', fontSize: TYPOGRAPHY.body, marginBottom: pxToRem(4) }}>
            {founders[1].name}
          </h3>
          <p style={{ color: '#94a3b8', fontSize: TYPOGRAPHY.body }}>
            {founders[1].title}
          </p>
        </div>
      </div>

      <div style={{ marginBottom: SPACING.sm }}>
        <p style={{ color: '#fbbf24', fontSize: TYPOGRAPHY.body, fontStyle: 'italic', marginBottom: SPACING.sm }}>
          "{founders[1].achievement}"
        </p>
      </div>

      <div style={{ marginBottom: SPACING.sm }}>
        <h4 style={{ color: '#60a5fa', fontSize: TYPOGRAPHY.body, marginBottom: SPACING.xs }}>Background</h4>
        {founders[1].background.map((item, i) => (
          <div key={i} style={{ fontSize: TYPOGRAPHY.body, color: '#e2e8f0', marginBottom: pxToRem(4) }}>
            • {item}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: SPACING.sm, marginTop: SPACING.sm }}>
        {founders[1].companies.map((company, i) => (
          <div key={i} style={{
            padding: `${pxToRem(4)} ${pxToRem(12)}`,
            background: 'rgba(59, 130, 246, 0.2)',
            borderRadius: pxToRem(20),
            fontSize: TYPOGRAPHY.body,
            color: '#60a5fa'
          }}>
            {company}
          </div>
        ))}
      </div>
    </motion.div>,

    // Column 3: Team Metrics
    <div key="metrics" style={{ display: 'grid', gap: SPACING.sm }}>
      <h3 style={{ color: '#22c55e', fontSize: TYPOGRAPHY.body, marginBottom: SPACING.xs }}>
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
            padding: SPACING.sm,
            display: 'flex',
            alignItems: 'center',
            gap: SPACING.sm,
            background: 'rgba(34, 197, 94, 0.05)'
          }}
        >
          <metric.icon size={24} color="#22c55e" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#22c55e' }}>
              {metric.prefix}<AnimatedCounter end={toFiniteNumber(metric.value)} delay={0.8 + index * 0.1} duration={2} />{metric.suffix}
            </div>
            <div style={{ fontSize: TYPOGRAPHY.body, color: '#94a3b8' }}>{metric.label}</div>
          </div>
        </motion.div>
      ))}
    </div>,

    // Column 4: Company Experience
    <div key="experience" style={{ display: 'grid', gap: SPACING.sm }}>
      <h3 style={{ color: '#fbbf24', fontSize: TYPOGRAPHY.body, marginBottom: SPACING.xs }}>
        Elite Experience
      </h3>
      
      <motion.div
        className="glass-card"
        style={{ padding: SPACING.md }}
      >
        <h4 style={{ color: '#fbbf24', fontSize: TYPOGRAPHY.body, marginBottom: SPACING.sm }}>
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
              gap: SPACING.sm,
              padding: pxToRem(12),
              marginBottom: SPACING.xs,
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: pxToRem(8),
              borderLeft: `${pxToRem(3)} solid ${company.color}`
            }}
          >
            <Building2 size={20} color={company.color} />
            <span style={{ fontSize: TYPOGRAPHY.body, color: '#e2e8f0' }}>{company.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="glass-card"
        style={{
          padding: SPACING.md,
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))'
        }}
      >
        <Award size={28} color="#fbbf24" style={{ marginBottom: SPACING.xs }} />
        <div style={{ fontSize: TYPOGRAPHY.body, fontWeight: 'bold', color: '#fbbf24', marginBottom: SPACING.xs }}>
          Why We Win
        </div>
        <div style={{ fontSize: TYPOGRAPHY.body, color: '#e2e8f0', lineHeight: '1.6' }}>
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
    />
  )
}