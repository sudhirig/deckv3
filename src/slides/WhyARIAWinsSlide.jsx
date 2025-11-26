import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { 
  Trophy, Brain, Globe, Users, Shield, Zap,
  X, Check, Minus, ArrowRight
} from 'lucide-react'
import './SlideStyles.css'

export default function WhyARIAWinsSlide() {
  const [hoveredCompetitor, setHoveredCompetitor] = useState(null)

  const title = (
    <GradientText gradient="from-yellow-400 to-orange-400">
      Why ARIA Wins vs Competition
    </GradientText>
  )

  const metrics = [
    {
      icon: Trophy,
      value: 3,
      suffix: 'x',
      label: 'Better Economics',
      color: '#f59e0b',
      description: 'B2B2C distribution = 70% lower CAC than ARTA'
    },
    {
      icon: Globe,
      value: 100,
      suffix: '%',
      label: 'Unique Access',
      color: '#fbbf24',
      description: 'Only platform with GIFT City India gateway'
    },
    {
      icon: Brain,
      value: 473,
      suffix: 'x',
      label: 'AI ROI',
      color: '#f97316',
      description: 'Each agent delivers 473x value vs cost'
    }
  ]

  const competitors = [
    {
      name: 'ARTA',
      tagline: 'Digital Family Office',
      strengths: ['AI Technology', 'Modern UX', 'Alternative Access'],
      weaknesses: ['No India Access', 'High CAC ($5K)', 'B2C Only'],
      verdict: 'Tech without global access',
      color: '#64748b'
    },
    {
      name: 'Traditional Banks',
      tagline: 'Morgan Stanley, Goldman',
      strengths: ['Brand Trust', 'Full Service', 'Global Reach'],
      weaknesses: ['$100M minimums', 'Legacy Tech', 'Human Advisors'],
      verdict: 'Access without intelligence',
      color: '#94a3b8'
    },
    {
      name: 'Robo-Advisors',
      tagline: 'Betterment, Wealthfront',
      strengths: ['Low Cost', 'Easy Onboarding', 'Tax Harvesting'],
      weaknesses: ['No Alternatives', 'No India', 'Generic Advice'],
      verdict: 'Neither access nor intelligence',
      color: '#475569'
    },
    {
      name: 'ARIA',
      tagline: 'AI Family Office CEO',
      strengths: ['AI + India Access', 'B2B2C Distribution', '473x ROI'],
      weaknesses: [],
      verdict: 'Complete solution at scale',
      color: '#14b8a6',
      isWinner: true
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Subtitle */}
      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <p style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: '600' }}>
          ARTA has AI but no access. Banks have access but no AI. ARIA has both at scale.
        </p>
      </div>

      {/* Competitive Comparison Grid */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem'
      }}>
        {competitors.map((competitor, idx) => (
          <motion.div
            key={competitor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onHoverStart={() => setHoveredCompetitor(idx)}
            onHoverEnd={() => setHoveredCompetitor(null)}
            style={{
              background: competitor.isWinner
                ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)'
                : hoveredCompetitor === idx
                ? 'rgba(30, 41, 59, 0.6)'
                : 'rgba(30, 41, 59, 0.3)',
              borderRadius: '12px',
              padding: '1.25rem',
              border: `1px solid ${competitor.isWinner ? '#14b8a6' : hoveredCompetitor === idx ? '#475569' : 'rgba(100, 116, 139, 0.2)'}`,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}
          >
            {/* Winner Badge */}
            {competitor.isWinner && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(20, 184, 166, 0.4)'
                }}
              >
                <Trophy size={20} color="#ffffff" />
              </motion.div>
            )}

            {/* Header */}
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: competitor.isWinner ? '#14b8a6' : '#e2e8f0',
                marginBottom: '0.25rem'
              }}>
                {competitor.name}
              </h3>
              <p style={{
                fontSize: '0.75rem',
                color: competitor.isWinner ? '#5eead4' : '#64748b',
                fontStyle: 'italic'
              }}>
                {competitor.tagline}
              </p>
            </div>

            {/* Strengths */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{
                fontSize: '0.7rem',
                color: '#10b981',
                fontWeight: '600',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Strengths
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {competitor.strengths.map(strength => (
                  <div
                    key={strength}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.8rem',
                      color: competitor.isWinner ? '#a7f3d0' : '#94a3b8'
                    }}
                  >
                    <Check size={12} color="#10b981" />
                    {strength}
                  </div>
                ))}
              </div>
            </div>

            {/* Weaknesses */}
            {competitor.weaknesses.length > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  fontSize: '0.7rem',
                  color: '#ef4444',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Weaknesses
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {competitor.weaknesses.map(weakness => (
                    <div
                      key={weakness}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        fontSize: '0.8rem',
                        color: '#64748b'
                      }}
                    >
                      <X size={12} color="#ef4444" />
                      {weakness}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verdict */}
            <div style={{
              marginTop: 'auto',
              paddingTop: '1rem',
              borderTop: `1px solid ${competitor.isWinner ? 'rgba(20, 184, 166, 0.3)' : 'rgba(100, 116, 139, 0.2)'}`,
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '0.85rem',
                fontWeight: '600',
                color: competitor.isWinner ? '#10b981' : '#64748b',
                fontStyle: competitor.isWinner ? 'normal' : 'italic'
              }}>
                {competitor.verdict}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key Differentiators */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        padding: '1rem',
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(251, 146, 60, 0.05) 100%)',
        borderRadius: '8px',
        border: '1px solid rgba(245, 158, 11, 0.2)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Brain size={20} color="#f59e0b" />
            <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#f59e0b' }}>
              AI Intelligence
            </h4>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
            68+ agents with 473x ROI
          </p>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Globe size={20} color="#f59e0b" />
            <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#f59e0b' }}>
              Global Access
            </h4>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
            India + GIFT City exclusive
          </p>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Users size={20} color="#f59e0b" />
            <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#f59e0b' }}>
              B2B2C Scale
            </h4>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
            1,000 CPAs = 100K clients
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
    />
  )
}
