import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import { HeroLayout } from '../components/StandardLayouts'
import { Users, Brain, Target, PiggyBank, TrendingUp, Shield, BarChart2, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

const CGMFConceptSlide = () => {
  const title = (
    <GradientText gradient="from-teal-400 via-emerald-400 to-green-400">
      Chapter 2: CGMF Mutual Fund Advisory
    </GradientText>
  )

  const subtitle = "9 AI Agents Managing 16,766 Funds"

  const backgroundVisual = (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 40% 20%, rgba(20, 184, 166, 0.12) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.06) 0%, transparent 50%)',
      zIndex: 0
    }} />
  )

  const overlayContent = (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="glass-card"
      style={{ position: 'relative', zIndex: 1, maxWidth: '75rem', margin: '0 auto' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        {[
          { value: 16766, label: 'Funds Analyzed', color: '#14b8a6', icon: BarChart2 },
          { value: 9, label: 'AI Agents', color: '#10b981', icon: Brain },
          { value: 1.55, label: 'Lakh Tax Saved', prefix: '₹', color: '#fbbf24', icon: PiggyBank }
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="glass-card"
            style={{
              padding: '1rem',
              textAlign: 'center',
              background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}08 100%)`,
              border: `1px solid ${stat.color}30`,
              position: 'relative'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', top: '0.625rem', right: '0.625rem' }}
            >
              <stat.icon className="w-4 h-4" style={{ color: stat.color, opacity: 0.5 }} />
            </motion.div>
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: '1.8rem', fontWeight: 'bold', color: stat.color }}
            >
              {stat.prefix}<AnimatedCounter end={stat.value} duration={2} decimals={stat.value < 10 ? 2 : 0} />
            </motion.div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="glass-card"
        style={{
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
          border: '1px solid rgba(20, 184, 166, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(20, 184, 166, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.2) 1px, transparent 1px)',
            backgroundSize: '3.125rem 3.125rem',
            zIndex: 0
          }}
        />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontSize: '1.3rem', color: '#14b8a6', marginBottom: '1.5rem', textAlign: 'center' }}>
            The 9-Agent Dream Team
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { iconType: 'target', iconGradient: 'from-purple-400 to-pink-400', name: 'Goal Analyzer', desc: 'Understands objectives', color: '#a855f7' },
              { iconType: 'barChart', iconGradient: 'from-blue-400 to-cyan-400', name: 'Risk Profiler', desc: 'Assesses tolerance', color: '#3b82f6' },
              { iconType: 'search', iconGradient: 'from-teal-400 to-green-400', name: 'Fund Scanner', desc: '16,766 funds analyzed', color: '#10b981' },
              { iconType: 'dollarSign', iconGradient: 'from-orange-400 to-amber-400', name: 'Tax Optimizer', desc: '₹1.55L annual savings', color: '#f59e0b' },
              { iconType: 'scale', iconGradient: 'from-teal-400 to-green-400', name: 'Rebalancer', desc: 'Portfolio optimization', color: '#14b8a6' },
              { iconType: 'shield', iconGradient: 'from-green-400 to-emerald-400', name: 'Stress Tester', desc: 'Scenario analysis', color: '#fbbf24' },
              { iconType: 'trending', iconGradient: 'from-teal-400 to-green-400', name: 'Performance Tracker', desc: 'Real-time monitoring', color: '#ef4444' },
              { iconType: 'refresh', iconGradient: 'from-purple-400 to-pink-400', name: 'Exit Strategist', desc: 'Timing optimization', color: '#8b5cf6' },
              { iconType: 'fileText', iconGradient: 'from-blue-400 to-cyan-400', name: 'Report Generator', desc: 'Insights & analytics', color: '#94a3b8' }
            ].map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.05, type: 'spring' }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  textAlign: 'center',
                  padding: '0.75rem',
                  border: `1px solid ${agent.color}30`,
                  borderRadius: '0.5rem',
                  background: `linear-gradient(135deg, ${agent.color}10 0%, transparent 100%)`,
                  position: 'relative'
                }}
              >
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2 + index * 0.2, repeat: Infinity }}
                  style={{ marginBottom: '0.5rem' }}
                >
                  <Icon type={agent.iconType} size={28} variant="inline" gradient={agent.iconGradient} />
                </motion.div>
                <p style={{ fontSize: '0.8rem', fontWeight: '600', color: agent.color }}>{agent.name}</p>
                <p style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{agent.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="glass-card"
        style={{
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(251, 191, 36, 0.05) 100%)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          position: 'relative'
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1.6, duration: 2 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            height: pxToRem(2),
            background: 'linear-gradient(90deg, #3b82f6, #10b981, #a855f7, #14b8a6)',
            zIndex: 0
          }}
        />
        
        <h4 style={{ fontSize: '1.2rem', color: '#e2e8f0', textAlign: 'center', marginBottom: '2rem' }}>
          CGMF Workflow: 4 Simple Steps
        </h4>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
          {[
            { step: 1, title: 'Input Goals', desc: 'Your objectives', color: '#3b82f6', icon: Target },
            { step: 2, title: 'AI Analysis', desc: '9 agents work', color: '#10b981', icon: Brain },
            { step: 3, title: 'Get Portfolio', desc: 'Optimized selection', color: '#a855f7', icon: TrendingUp },
            { step: 4, title: 'Save Taxes', desc: '₹1.55L annually', color: '#14b8a6', icon: PiggyBank }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ 
                  boxShadow: ['0 0 1.25rem rgba(0,0,0,0)', `0 0 1.875rem ${item.color}40`, '0 0 1.25rem rgba(0,0,0,0)']
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                }}
                style={{
                  width: '3.75rem',
                  height: '3.75rem',
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  position: 'relative'
                }}
              >
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>{item.step}</span>
                <motion.div
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: `2px solid ${item.color}`,
                  }}
                />
              </motion.div>
              <item.icon className="w-5 h-5 mx-auto mb-2" style={{ color: item.color }} />
              <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0' }}>{item.title}</p>
              <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <HeroLayout
      title={title}
      subtitle={subtitle}
      backgroundVisual={backgroundVisual}
      overlayContent={overlayContent}
    />
  )
}

export default CGMFConceptSlide
