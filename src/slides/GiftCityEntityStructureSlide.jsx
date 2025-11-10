import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import { 
  Building, 
  Users, 
  Globe, 
  Shield, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  Award,
  DollarSign,
  Star
} from 'lucide-react'
import { DataSlideLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function GiftCityEntityStructureSlide() {
  const [selectedEntity, setSelectedEntity] = useState('aif')
  const [hoveredBenefit, setHoveredBenefit] = useState(null)

  const entities = {
    aif: {
      name: 'Vora Ventures Category III AIF',
      location: 'GIFT City IFSC',
      color: '#06b6d4',
      description: 'Core investment vehicle'
    },
    holding: {
      name: 'India-based Holding Company',
      location: 'Mainland India',
      color: '#10b981',
      description: 'Operational structure'
    },
    investment: {
      name: 'Investment Holdings',
      location: 'Portfolio Companies',
      color: '#8b5cf6',
      description: 'Target investments'
    }
  }

  const structureFlow = [
    { from: 'Global LPs', to: 'AIF', flow: 'Capital' },
    { from: 'AIF', to: 'Holdings', flow: 'Investment' },
    { from: 'Holdings', to: 'India Market', flow: 'Deployment' }
  ]

  const benefits = [
    {
      title: '0% GST on Services',
      description: 'GIFT City exemption vs 18% mainland',
      icon: DollarSign,
      color: '#10b981',
      savings: '₹18L per ₹1Cr'
    },
    {
      title: '10% Corporate Tax',
      description: 'vs 30% for mainland funds',
      icon: TrendingUp,
      color: '#06b6d4',
      savings: '₹20L per ₹1Cr'
    },
    {
      title: '100% Foreign Ownership',
      description: 'No restrictions on LP nationality',
      icon: Globe,
      color: '#8b5cf6',
      savings: 'Unlimited'
    },
    {
      title: 'IFSCA Regulatory Protection',
      description: 'World-class regulatory framework',
      icon: Shield,
      color: '#f59e0b',
      savings: 'Compliance Edge'
    }
  ]

  const mainVisual = (
    <div>
      {/* Entity Flow Diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
        style={{
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(16, 185, 129, 0.05))',
          borderRadius: '1.25rem',
          border: '2px solid rgba(6, 182, 212, 0.3)',
          marginBottom: '1.5rem'
        }}
      >
        {/* Global LPs */}
        <motion.div
          initial={{ opacity: 0, y: pxToRem(-20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 2, repeat: Infinity }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.1))',
              borderRadius: '50%',
              border: '2px solid rgba(139, 92, 246, 0.3)',
              marginBottom: '1rem'
            }}
          >
            <Users size={36} color="#8b5cf6" />
          </motion.div>
          <h3 style={{ color: '#a78bfa', fontSize: '1.2rem' }}>Global LPs</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Limited Partners</p>
        </motion.div>

        {/* Flow Arrow 1 */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '2.5rem' }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{
            width: '0.125rem',
            background: 'linear-gradient(180deg, #8b5cf6, #06b6d4)',
            margin: '0 auto 1rem',
            position: 'relative'
          }}
        >
          <motion.div
            animate={{ y: [0, pxToRem(10), 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              position: 'absolute',
              bottom: pxToRem(-6),
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <ArrowRight size={16} color="#06b6d4" style={{ transform: 'rotate(90deg)' }} />
          </motion.div>
        </motion.div>

        {/* AIF Entity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
          whileHover={{ scale: 1.03 }}
          onClick={() => setSelectedEntity('aif')}
          style={{
            padding: '1.5rem',
            background: selectedEntity === 'aif' 
              ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(20, 184, 166, 0.15))'
              : 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(20, 184, 166, 0.08))',
            borderRadius: '1rem',
            border: `2px solid ${selectedEntity === 'aif' ? '#06b6d4' : 'rgba(6, 182, 212, 0.3)'}`,
            cursor: 'pointer',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <Building size={32} color="#06b6d4" />
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#06b6d4', fontSize: '1.3rem', marginBottom: '0.25rem' }}>
                Vora Ventures Category III AIF
              </h3>
              <p style={{ color: '#14b8a6', fontSize: '0.9rem' }}>GIFT City IFSC</p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Star size={24} color="#fbbf24" />
            </motion.div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['Tax Efficient', '0% GST', '10% Tax', 'USD Denominated'].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                style={{
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(6, 182, 212, 0.2)',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  color: '#67e8f9'
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Flow Arrow 2 */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '2.5rem' }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{
            width: '0.125rem',
            background: 'linear-gradient(180deg, #06b6d4, #10b981)',
            margin: '0 auto 1rem',
            position: 'relative'
          }}
        >
          <motion.div
            animate={{ y: [0, 0.625, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            style={{
              position: 'absolute',
              bottom: -0.375,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <ArrowRight size={16} color="#10b981" style={{ transform: 'rotate(90deg)' }} />
          </motion.div>
        </motion.div>

        {/* India Market */}
        <motion.div
          initial={{ opacity: 0, y: pxToRem(20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            textAlign: 'center'
          }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2), rgba(34, 197, 94, 0.1))',
              borderRadius: '50%',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              marginBottom: '1rem'
            }}
          >
            <TrendingUp size={36} color="#10b981" />
          </motion.div>
          <h3 style={{ color: '#10b981', fontSize: '1.2rem' }}>India Market</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>$5T Opportunity</p>
        </motion.div>
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: pxToRem(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem'
        }}
      >
        {[
          { label: 'Tax Rate', value: '10%', color: '#10b981', change: '-66%' },
          { label: 'GST', value: '0%', color: '#06b6d4', change: '-100%' },
          { label: 'Foreign Cap', value: '100%', color: '#8b5cf6', change: 'No Limit' },
          { label: 'Setup Time', value: '6-8 weeks', color: '#f59e0b', change: 'Fast Track' }
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 + i * 0.1 }}
            style={{
              padding: '1rem',
              background: `linear-gradient(135deg, ${stat.color}15, rgba(0, 0, 0, 0.2))`,
              borderRadius: '0.75rem',
              border: `1px solid ${stat.color}30`
            }}
          >
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
              {stat.label}
            </p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: stat.color }}>
              {stat.value}
            </p>
            <p style={{ fontSize: '0.7rem', color: '#10b981' }}>
              {stat.change}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )

  const keyInsights = (
    <div style={{
      padding: '1.5rem',
      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.05))',
      borderRadius: '1.25rem',
      border: '2px solid rgba(168, 85, 247, 0.3)'
    }}>
      <h3 style={{ 
        fontSize: '1.2rem',
        color: '#a855f7',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <Award size={24} />
        Structure Benefits
      </h3>

      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, x: pxToRem(20) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 + index * 0.15 }}
          whileHover={{ scale: 1.02, x: pxToRem(5) }}
          onHoverStart={() => setHoveredBenefit(benefit.title)}
          onHoverEnd={() => setHoveredBenefit(null)}
          style={{
            marginBottom: '1rem',
            padding: '1rem',
            background: `linear-gradient(135deg, ${benefit.color}15, rgba(0, 0, 0, 0.2))`,
            borderRadius: '0.75rem',
            border: `1px solid ${benefit.color}30`,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {hoveredBenefit === benefit.title && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at center, ${benefit.color}20, transparent)`,
                zIndex: 0
              }}
            />
          )}

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <motion.div
                animate={{ 
                  rotate: hoveredBenefit === benefit.title ? 360 : 0,
                  scale: hoveredBenefit === benefit.title ? 1.1 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <benefit.icon size={24} color={benefit.color} />
              </motion.div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: benefit.color, fontSize: '1rem', fontWeight: 'bold' }}>
                  {benefit.title}
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                  {benefit.description}
                </p>
              </div>
              <motion.div
                animate={{ 
                  scale: hoveredBenefit === benefit.title ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: 0.5, repeat: hoveredBenefit === benefit.title ? Infinity : 0 }}
                style={{
                  padding: '0.5rem 0.75rem',
                  background: `${benefit.color}20`,
                  borderRadius: '0.5rem'
                }}
              >
                <p style={{ color: benefit.color, fontSize: '0.9rem', fontWeight: 'bold' }}>
                  {benefit.savings}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  const supportingData = (
    <motion.div
      initial={{ opacity: 0, y: pxToRem(30) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8 }}
      style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(16, 185, 129, 0.1))',
        borderRadius: '1.25rem',
        border: '2px solid rgba(6, 182, 212, 0.3)',
        textAlign: 'center'
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          <GradientText gradient="from-cyan-400 to-emerald-400">
            66% Lower Operating Costs
          </GradientText>
        </h4>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
          Through GIFT City entity structure vs mainland alternatives
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
          <div>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ef4444' }}>48%</p>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Mainland Cost</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ArrowRight size={24} color="#64748b" />
          </div>
          <div>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#10b981' }}>10%</p>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>GIFT City Cost</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  const particles = (
    <>
      <ParticleBackground count={50} color="#06b6d4" />
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 20%, rgba(6, 182, 212, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 50%, rgba(16, 185, 129, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 20%, rgba(6, 182, 212, 0.12) 0%, transparent 60%)'
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
    </>
  )

  return (
    <DataSlideLayout
      title={
        <>
          <GradientText gradient="from-cyan-400 via-teal-400 to-emerald-400">
            Entity Structure Optimization
          </GradientText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ 
              textAlign: 'center', 
              color: '#94a3b8', 
              fontSize: '1.2rem',
              marginTop: '0.5rem'
            }}
          >
            Maximum Tax Efficiency Through GIFT City AIF
          </motion.p>
        </>
      }
      mainVisual={mainVisual}
      keyInsights={keyInsights}
      supportingData={supportingData}
      particles={particles}
    />
  )
}
