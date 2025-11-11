import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import { Users, Brain, Target, PiggyBank, TrendingUp, Shield, BarChart2, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
import './SlideStyles.css'

const CGMFConceptSlide = () => {
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

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #1a1c3d 0%, #0f1629 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {backgroundVisual}
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          padding: `${pxToRem(16)} ${pxToRem(32)}`,
          position: 'relative',
          zIndex: 1
        }}
      >
        <h1 style={{ 
          fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
          marginBottom: pxToRem(6)
        }}>
          <GradientText gradient="from-teal-400 via-emerald-400 to-green-400">
            Chapter 2: CGMF Mutual Fund Advisory
          </GradientText>
        </h1>
        <p style={{ 
          fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
          color: '#94a3b8'
        }}>
          9 AI Agents Managing 16,766 Funds
        </p>
      </motion.div>
      
      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: `0 ${pxToRem(32)} ${pxToRem(24)}`,
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(0.75rem, 1.5vw, 1rem)'
      }}>
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(0.5rem, 1vw, 0.75rem)'
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
                padding: 'clamp(0.5rem, 1vw, 0.75rem)',
                textAlign: 'center',
                background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}08 100%)`,
                border: `${pxToRem(1)} solid ${stat.color}30`,
                position: 'relative'
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', top: pxToRem(6), right: pxToRem(6) }}
              >
                <stat.icon className="w-3 h-3" style={{ color: stat.color, opacity: 0.5 }} />
              </motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ 
                  fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', 
                  fontWeight: 'bold', 
                  color: stat.color 
                }}
              >
                {stat.prefix}<AnimatedCounter end={toFiniteNumber(stat.value)} duration={2} decimals={stat.value < 10 ? 2 : 0} />
              </motion.div>
              <p style={{ 
                fontSize: 'clamp(0.6rem, 0.9vw, 0.7rem)', 
                color: '#94a3b8' 
              }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 9-Agent Dream Team Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="glass-card"
          style={{
            flex: 1,
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
            border: `${pxToRem(1)} solid rgba(20, 184, 166, 0.3)`,
            position: 'relative',
            overflow: 'hidden',
            padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
            display: 'flex',
            flexDirection: 'column'
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
              backgroundSize: `${pxToRem(50)} ${pxToRem(50)}`,
              zIndex: 0
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ 
              fontSize: 'clamp(0.95rem, 1.4vw, 1.2rem)', 
              color: '#14b8a6', 
              marginBottom: 'clamp(0.75rem, 1.2vw, 1rem)', 
              textAlign: 'center' 
            }}>
              The 9-Agent Dream Team
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: 'clamp(0.5rem, 1vw, 0.75rem)',
              flex: 1,
              overflow: 'auto'
            }}>
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
                  whileHover={{ scale: 1.05, y: -3 }}
                  style={{
                    textAlign: 'center',
                    padding: 'clamp(0.4rem, 0.8vw, 0.6rem)',
                    border: `${pxToRem(1)} solid ${agent.color}30`,
                    borderRadius: pxToRem(6),
                    background: `linear-gradient(135deg, ${agent.color}10 0%, transparent 100%)`,
                    position: 'relative'
                  }}
                >
                  <motion.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 2 + index * 0.2, repeat: Infinity }}
                    style={{ marginBottom: pxToRem(4) }}
                  >
                    <Icon type={agent.iconType} size={20} variant="inline" gradient={agent.iconGradient} />
                  </motion.div>
                  <p style={{ 
                    fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)', 
                    fontWeight: '600', 
                    color: agent.color,
                    margin: 0
                  }}>{agent.name}</p>
                  <p style={{ 
                    fontSize: 'clamp(0.5rem, 0.75vw, 0.6rem)', 
                    color: '#94a3b8',
                    margin: 0
                  }}>{agent.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.05))',
            border: `${pxToRem(1)} solid rgba(251, 191, 36, 0.3)`,
            padding: 'clamp(0.5rem, 1vw, 0.75rem)',
            textAlign: 'center',
            maxHeight: '10vh'
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p style={{ 
              fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', 
              color: '#fbbf24', 
              fontWeight: '600',
              margin: 0
            }}>
              <Sparkles className="w-3 h-3 inline mr-1" />
              Your Personal Mutual Fund Advisory Army - Always Learning, Always Optimizing
              <Sparkles className="w-3 h-3 inline ml-1" />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default CGMFConceptSlide