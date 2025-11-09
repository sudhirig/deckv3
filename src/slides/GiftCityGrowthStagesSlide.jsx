import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { Rocket, Target, Trophy, TrendingUp, Users, Globe, DollarSign, Star } from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import './SlideStyles.css'

const GiftCityGrowthStagesSlide = () => {
  const stages = [
    {
      id: 1,
      title: 'Stage 1: Foundation',
      subtitle: 'Months 1-10',
      icon: Rocket,
      color: '#3b82f6',
      gradient: 'from-blue-500 to-indigo-500',
      metrics: [
        { label: 'AUM Target', value: '$3M', icon: DollarSign },
        { label: 'Investors', value: '50 HNIs', icon: Users },
        { label: 'Focus', value: 'India markets', icon: Target }
      ],
      milestones: [
        'IFSCA license secured',
        'Platform operational',
        'First 50 clients onboarded'
      ],
      progress: 33
    },
    {
      id: 2,
      title: 'Stage 2: Scale',
      subtitle: 'Months 11-20',
      icon: Target,
      color: '#10b981',
      gradient: 'from-green-500 to-emerald-500',
      metrics: [
        { label: 'AUM Target', value: '$20-100M', icon: TrendingUp },
        { label: 'Investors', value: '200 Global', icon: Globe },
        { label: 'Focus', value: 'Asia expansion', icon: Target }
      ],
      milestones: [
        'Global LP onboarding',
        'Multi-market trading',
        '10x revenue growth'
      ],
      progress: 66
    },
    {
      id: 3,
      title: 'Stage 3: Dominate',
      subtitle: 'Months 21-30',
      icon: Trophy,
      color: '#f59e0b',
      gradient: 'from-amber-500 to-yellow-500',
      metrics: [
        { label: 'AUM Target', value: '$250M+', icon: Star },
        { label: 'Investors', value: '1000+ Global', icon: Globe },
        { label: 'Focus', value: 'Market leader', icon: Trophy }
      ],
      milestones: [
        'Market leadership achieved',
        'Unicorn valuation',
        'IPO-ready structure'
      ],
      progress: 100
    }
  ]

  const renderStageCard = (stage, index) => (
    <div style={{
      background: `linear-gradient(135deg, ${stage.color}10 0%, ${stage.color}05 100%)`,
      border: `${index === 2 ? '2px' : '1px'} solid ${stage.color}${index === 2 ? '40' : '30'}`,
      borderRadius: '1rem',
      padding: '1.25rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Stage Number with Glow */}
      <motion.div
        animate={{ 
          boxShadow: index === 2 
            ? ['0 0 1.875rem rgba(245, 158, 11, 0.6)', '0 0 3.125rem rgba(245, 158, 11, 0.9)', '0 0 1.875rem rgba(245, 158, 11, 0.6)']
            : index === 0
              ? ['0 0 1.25rem rgba(59, 130, 246, 0.5)', '0 0 2.5rem rgba(59, 130, 246, 0.8)', '0 0 1.25rem rgba(59, 130, 246, 0.5)']
              : undefined
        }}
        transition={{ duration: index === 2 ? 1.5 : 2, repeat: Infinity }}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}
      >
        <div style={{
          width: '3.125rem',
          height: '3.125rem',
          background: `linear-gradient(135deg, ${stage.color}, ${stage.color}cc)`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '1rem'
        }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>{stage.id}</span>
        </div>
        <stage.icon className="w-7 h-7" style={{ color: stage.color }} />
      </motion.div>
      
      <h3 style={{ fontSize: '1.3rem', color: stage.color, marginBottom: '0.5rem' }}>
        {stage.title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1rem' }}>
        {stage.subtitle}
      </p>
      
      {/* Metrics with Animation */}
      <div style={{ marginBottom: '1rem' }}>
        {stage.metrics.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -1.25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.2 + i * 0.1 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.5rem',
              background: `${stage.color}10`,
              borderRadius: '0.375rem',
              marginBottom: '0.5rem'
            }}
          >
            <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{item.label}</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', fontWeight: 'bold', color: stage.color, marginRight: '0.5rem' }}>
                {item.value}
              </span>
              <item.icon className="w-4 h-4" style={{ color: stage.color }} />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Milestones */}
      <div style={{
        paddingTop: '1rem',
        borderTop: `1px solid ${stage.color}20`
      }}>
        <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
          Key Milestones:
        </p>
        <AnimatedText delay={1 + index * 0.3}>
          <ul style={{ fontSize: '0.75rem', color: '#e2e8f0' }}>
            {stage.milestones.map((milestone, i) => (
              <li key={i} style={{ marginBottom: '0.25rem' }}>• {milestone}</li>
            ))}
          </ul>
        </AnimatedText>
      </div>
      
      {/* Progress Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 + index * 0.2 }}
        style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}
      >
        <CircularProgress value={stage.progress} size={50} strokeWidth={4} />
      </motion.div>

      {/* Animated Trophy Glow for Stage 3 */}
      {index === 2 && (
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity }
          }}
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
            zIndex: 0
          }}
        />
      )}
    </div>
  )

  const timeline = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      style={{
        position: 'relative',
        height: '0.5rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '0.25rem',
        marginBottom: '2rem',
        overflow: 'hidden'
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: 0.5, duration: 2, ease: 'easeInOut' }}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #3b82f6, #10b981, #f59e0b)',
          borderRadius: '0.25rem',
          boxShadow: '0 0 1.25rem rgba(245, 158, 11, 0.5)'
        }}
      />
      
      {/* Timeline Markers */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '0%',
          transform: 'translate(-50%, -50%)',
          width: '1.25rem',
          height: '1.25rem',
          borderRadius: '50%',
          background: '#3b82f6',
          border: '3px solid #0a0a0a'
        }}
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1.25rem',
          height: '1.25rem',
          borderRadius: '50%',
          background: '#10b981',
          border: '3px solid #0a0a0a'
        }}
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '100%',
          transform: 'translate(-50%, -50%)',
          width: '1.25rem',
          height: '1.25rem',
          borderRadius: '50%',
          background: '#f59e0b',
          border: '3px solid #0a0a0a'
        }}
      />
    </motion.div>
  )

  const summary = (
    <motion.div
      initial={{ opacity: 0, y: 1.25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)',
        border: '1px solid rgba(168, 85, 247, 0.3)',
        borderRadius: '1rem',
        textAlign: 'center'
      }}
    >
      <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
        <GradientText gradient="from-purple-400 via-pink-400 to-orange-400">
          83x Return in 30 Months
        </GradientText>
      </h4>
      <p style={{ color: '#94a3b8' }}>
        From $3M seed to $250M valuation through GIFT City advantage
      </p>
    </motion.div>
  )

  return (
    <GridLayout
      title={
        <>
          <GradientText gradient="from-amber-400 via-orange-400 to-yellow-400">
            30-Month Growth Journey
          </GradientText>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', textAlign: 'center', marginTop: '0.5rem' }}>
            From $3M to $250M: The GIFT City Advantage
          </p>
          {timeline}
        </>
      }
      cards={stages.map((stage, index) => renderStageCard(stage, index))}
      columns={3}
      summary={summary}
      particles={
        <>
          <ParticleBackground count={50} color="#f59e0b" />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)',
            zIndex: 0
          }} />
        </>
      }
    />
  )
}

export default GiftCityGrowthStagesSlide
