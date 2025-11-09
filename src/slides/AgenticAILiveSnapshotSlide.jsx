import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { Camera, Brain, MessageSquare, Activity, Users, Cpu, Shield, Zap } from 'lucide-react'
import './SlideStyles.css'

const AgenticAILiveSnapshotSlide = () => {
  return (
    <div className="slide-content" style={{ position: 'relative' }}>
      <ParticleBackground count={50} color="#8b5cf6" />
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 60%), radial-gradient(circle at 30% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        zIndex: 0
      }} />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="glass-card"
        style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="slide-title">
            <GradientText gradient="from-purple-400 via-violet-400 to-indigo-400">
              Agentic AI Live Snapshot
            </GradientText>
          </h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Camera className="w-5 h-5 text-red-500" />
              <span style={{ fontSize: '1rem', color: '#ef4444' }}>LIVE</span>
            </motion.div>
            <span style={{ fontSize: '1rem', color: '#94a3b8', marginLeft: '1rem' }}>
              Multi-Agent Consensus Building in Progress
            </span>
          </motion.div>
        </motion.div>

        {/* Main AI Terminal Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.9) 0%, rgba(30, 30, 30, 0.8) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Scanning Line Animation */}
          <motion.div
            animate={{ y: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)',
              zIndex: 2
            }}
          />
          
          <div style={{
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '1.5rem',
            fontFamily: 'monospace',
            fontSize: '0.875rem'
          }}>
            {/* System Header */}
            <div style={{
              borderBottom: '1px solid rgba(139, 92, 246, 0.3)',
              paddingBottom: '1rem',
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ color: '#a78bfa' }}>AGENTIC AI SYSTEM v2.0</span>
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Cpu className="w-4 h-4 text-purple-400" />
                <span style={{ color: '#94a3b8' }}>Task: Portfolio Optimization #4821</span>
              </motion.div>
            </div>
            
            {/* Agent Conversations */}
            <div style={{ space: 'y-3' }}>
              {[
                { 
                  agent: 'Risk Agent',
                  color: '#3b82f6',
                  message: 'Portfolio beta: 1.23, suggesting moderate-high risk',
                  recommendation: 'Reduce tech allocation by 15%',
                  delay: 0.4
                },
                {
                  agent: 'Performance Agent',
                  color: '#10b981',
                  message: 'YTD return: 18.5% vs benchmark 12.3%',
                  recommendation: 'Lock in profits on HDFC Bank',
                  delay: 0.6
                },
                {
                  agent: 'Tax Optimization Agent',
                  color: '#f59e0b',
                  message: 'Potential LTCG: ₹2.3L',
                  recommendation: 'Harvest loss from Vodafone to offset',
                  delay: 0.8
                },
                {
                  agent: 'Consensus Builder',
                  color: '#a78bfa',
                  message: 'Analyzing 3 agent recommendations...',
                  recommendation: 'Final Decision: Rebalance with 3 actions',
                  delay: 1.0
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.delay }}
                  style={{
                    borderLeft: `2px solid ${item.color}`,
                    paddingLeft: '1rem',
                    marginBottom: '1rem'
                  }}
                >
                  <span style={{ color: item.color }}>
                    [{item.agent}]:
                  </span>
                  <p style={{ color: '#e5e7eb', marginTop: '0.25rem' }}>
                    {item.message}
                  </p>
                  <p style={{ color: '#9ca3af', marginTop: '0.25rem' }}>
                    {item.recommendation}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Consensus Result */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)',
                borderRadius: '8px',
                padding: '1rem',
                marginTop: '1.5rem',
                border: '1px solid rgba(139, 92, 246, 0.3)'
              }}
            >
              <p style={{ color: '#14b8a6', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                CONSENSUS REACHED:
              </p>
              <ol style={{ color: '#e5e7eb', marginLeft: '1.5rem' }}>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  1. Sell 50% HDFC Bank (book ₹45K profit)
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  2. Exit Vodafone (harvest ₹12K loss)
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  3. Add defensive: 30% to Debt funds
                </motion.li>
              </ol>
            </motion.div>
            
            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                marginTop: '1.5rem',
                textAlign: 'center'
              }}
            >
              {[
                { label: 'Analysis Time', value: '11', suffix: ' sec', color: '#10b981' },
                { label: 'Agents Used', value: '4', color: '#3b82f6' },
                { label: 'Confidence', value: '97', suffix: '%', color: '#a78bfa' },
                { label: 'Net Gain', value: '₹33K', color: '#f59e0b' }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: '0.5rem',
                    background: `${metric.color}10`,
                    borderRadius: '8px',
                    border: `1px solid ${metric.color}30`
                  }}
                >
                  <p style={{ color: metric.color, fontWeight: 'bold', fontSize: '1.25rem' }}>
                    {metric.value}{metric.suffix || ''}
                  </p>
                  <p style={{ color: '#6b7280', fontSize: '0.75rem' }}>{metric.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginTop: '2rem'
          }}
        >
          {[
            {
              icon: Brain,
              title: 'Parallel Processing',
              desc: '4 agents analyzed simultaneously',
              color: '#a78bfa',
              gradient: 'from-purple-500/20 to-violet-500/10'
            },
            {
              icon: MessageSquare,
              title: 'Consensus Building',
              desc: 'Unified decision from multiple views',
              color: '#14b8a6',
              gradient: 'from-teal-500/20 to-cyan-500/10'
            },
            {
              icon: Activity,
              title: 'Real-time Execution',
              desc: 'Decisions implemented instantly',
              color: '#10b981',
              gradient: 'from-green-500/20 to-emerald-500/10'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 + index * 0.1 }}
              className="glass-card"
              style={{
                padding: '1.5rem',
                background: `linear-gradient(135deg, ${feature.gradient})`,
                border: `1px solid ${feature.color}30`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated Background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: `radial-gradient(circle, ${feature.color}10 0%, transparent 70%)`,
                  zIndex: 0
                }}
              />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <feature.icon className="w-6 h-6 mb-2" style={{ color: feature.color }} />
                <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>
                  {feature.title}
                </p>
                <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* System Status Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          style={{
            marginTop: '2rem',
            padding: '1rem',
            background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
            borderRadius: '8px',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
              <span style={{ fontSize: '0.875rem', color: '#10b981' }}>System Online</span>
            </motion.div>
            
            <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
              68+ AI Agents Available
            </span>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <CircularProgress value={97} size={40} strokeWidth={3} />
            <CircularProgress value={100} size={40} strokeWidth={3} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AgenticAILiveSnapshotSlide