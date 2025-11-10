import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import ParticleBackground from '../components/ParticleBackground'
import AnimatedCounter from '../components/AnimatedCounter'
import { Camera, Brain, MessageSquare, Activity, Users, Cpu, Shield, Zap, Network, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function AgenticAILiveSnapshotSlide() {
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [agentActivity, setAgentActivity] = useState([true, false, true, false])
  const [consensusProgress, setConsensusProgress] = useState(0)
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    
    const activityInterval = setInterval(() => {
      setAgentActivity(prev => prev.map(() => Math.random() > 0.5))
    }, 1500)
    
    const consensusInterval = setInterval(() => {
      setConsensusProgress(prev => (prev + 10) % 100)
    }, 1000)
    
    return () => {
      clearInterval(pulseInterval)
      clearInterval(activityInterval)
      clearInterval(consensusInterval)
    }
  }, [])
  
  const particles = (
    <>
      <ParticleBackground count={50} color="#8b5cf6" />
      
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.18) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.18) 0%, transparent 60%)'
          ]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
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
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50rem',
          height: '50rem',
          opacity: 0.1,
          zIndex: 1
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 800 800">
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180
            const x = 400 + 200 * Math.cos(angle)
            const y = 400 + 200 * Math.sin(angle)
            return (
              <g key={i}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r={8}
                  fill="#8b5cf6"
                  animate={{ r: (pulseAnimation === true) ? [8, 15, 8] : 8 }}
                  transition={{ duration: 2, delay: i * 0.1 }}
                />
                <line
                  x1="400"
                  y1="400"
                  x2={x}
                  y2={y}
                  stroke="#8b5cf6"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </g>
            )
          })}
        </svg>
      </motion.div>
    </>
  )
  
  const mainVisual = (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '1.5rem'
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 255, 255, 0.02))',
            backdropFilter: 'blur(1.25rem)',
            border: '0.125rem solid rgba(139, 92, 246, 0.4)',
            borderRadius: '1.25rem',
            padding: '1.5rem 2.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: 'absolute',
              inset: '-1.25rem',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)',
              borderRadius: '1.5rem',
              filter: 'blur(1.25rem)',
              zIndex: -1
            }}
          />
          
          <motion.div
            animate={{ scale: pulseAnimation ? [1, 1.05, 1] : 1 }}
            transition={{ duration: 3 }}
            style={{ fontSize: '3rem', fontWeight: 'bold', color: '#a78bfa' }}
          >
            68+
          </motion.div>
          <div style={{ fontSize: '1rem', color: '#e2e8f0' }}>
            Total AI Agents
          </div>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {[
            { count: '12', label: 'Investment Committee', color: '#fbbf24', icon: '🏛️' },
            { count: '18', label: 'Hedge Fund Team', color: '#10b981', icon: '📈' },
            { count: '9', label: 'Risk Management', color: '#ef4444', icon: '🛡️' },
            { count: '20+', label: 'Operations', color: '#60a5fa', icon: '⚡' }
          ].map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 1.25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                backdropFilter: 'blur(0.625rem)',
                borderLeft: `0.1875rem solid ${group.color}`,
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <motion.span
                  animate={{ scale: agentActivity[index] ? [1, 1.3, 1] : 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ fontSize: '1.2rem' }}
                >
                  {group.icon}
                </motion.span>
                <div>
                  <motion.div
                    animate={{ color: agentActivity[index] ? group.color : '#94a3b8' }}
                    style={{ fontSize: '1.4rem', fontWeight: 'bold' }}
                  >
                    {group.count}
                  </motion.div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {group.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.95), rgba(30, 30, 30, 0.9))',
          backdropFilter: 'blur(1.25rem)',
          border: '0.125rem solid rgba(139, 92, 246, 0.4)',
          borderRadius: '1.25rem',
          padding: '1.5rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: '0.125rem',
            background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)',
            boxShadow: '0 0 1.25rem #8b5cf6',
            zIndex: 2
          }}
        />
        
        <div style={{
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(0.9375rem)',
          borderRadius: '1rem',
          padding: '1.5rem',
          fontFamily: 'monospace',
          fontSize: '0.875rem'
        }}>
          <div style={{
            borderBottom: '0.125rem solid rgba(139, 92, 246, 0.3)',
            paddingBottom: '1rem',
            marginBottom: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Network size={20} color="#a78bfa" />
              </motion.div>
              <span style={{ color: '#a78bfa', fontSize: '1rem', fontWeight: 'bold' }}>
                AGENTIC AI SYSTEM v2.0
              </span>
            </div>
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Cpu size={16} color="#94a3b8" />
              <span style={{ color: '#94a3b8' }}>Task: Portfolio Optimization #4821</span>
            </motion.div>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            {[
              { 
                agent: 'Risk Agent',
                color: '#3b82f6',
                message: 'Portfolio beta: 1.23, suggesting moderate-high risk',
                recommendation: 'Reduce tech allocation by 15%',
                status: 'analyzing'
              },
              {
                agent: 'Performance Agent',
                color: '#10b981',
                message: 'YTD return: 18.5% vs benchmark 12.3%',
                recommendation: 'Lock in profits on HDFC Bank',
                status: 'complete'
              },
              {
                agent: 'Tax Optimization Agent',
                color: '#f59e0b',
                message: 'Potential LTCG: ₹2.3L',
                recommendation: 'Harvest loss from Vodafone to offset',
                status: 'processing'
              },
              {
                agent: 'Consensus Builder',
                color: '#a78bfa',
                message: 'Analyzing 3 agent recommendations...',
                recommendation: 'Final Decision: Rebalance with 3 actions',
                status: 'finalizing'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -1.25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.15 }}
                whileHover={{ x: 0.3125 }}
                style={{
                  padding: '1rem',
                  marginBottom: '0.75rem',
                  background: `linear-gradient(135deg, ${item.color}15, rgba(255, 255, 255, 0.02))`,
                  borderLeft: `0.1875rem solid ${item.color}`,
                  borderRadius: '0 0.5rem 0.5rem 0',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  animate={{ 
                    width: item.status === 'complete' ? '100%' : `${consensusProgress}%`
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '0.125rem',
                    background: item.color,
                    boxShadow: `0 0 0.625rem ${item.color}`
                  }}
                />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Brain size={16} color={item.color} />
                    <span style={{ color: item.color, fontWeight: 'bold' }}>
                      [{item.agent}]
                    </span>
                  </div>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      padding: '0.25rem 0.5rem',
                      background: `${item.color}20`,
                      borderRadius: '0.75rem',
                      fontSize: '0.7rem',
                      color: item.color
                    }}
                  >
                    {item.status}
                  </motion.div>
                </div>
                <div style={{ color: '#e2e8f0' }}>{item.message}</div>
                <div style={{ color: item.color, marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <motion.span
                    animate={{ x: [0, 0.3125, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                  {item.recommendation}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              padding: '1rem',
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.05))',
              borderRadius: '0.75rem',
              border: '0.0625rem solid rgba(168, 85, 247, 0.3)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: '#a78bfa', fontSize: '0.9rem' }}>Consensus Building Progress</span>
              <motion.span
                animate={{ color: pulseAnimation ? '#10b981' : '#a78bfa' }}
                transition={{ duration: 1 }}
                style={{ fontSize: '0.9rem', fontWeight: 'bold' }}
              >
                {consensusProgress}%
              </motion.span>
            </div>
            <div style={{ height: '0.5rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '0.25rem', overflow: 'hidden' }}>
              <motion.div
                animate={{ width: `${consensusProgress}%` }}
                transition={{ duration: 0.5 }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
                  boxShadow: '0 0 1.25rem rgba(139, 92, 246, 0.5)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
  
  const keyInsights = (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          gap: '1rem'
        }}
      >
        <motion.div
          animate={{ 
            scale: pulseAnimation ? [1, 1.3, 1] : 1,
            opacity: pulseAnimation ? [1, 0.6, 1] : 1
          }}
          transition={{ duration: 1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1))',
            borderRadius: '3.125rem',
            border: '0.125rem solid #ef4444'
          }}
        >
          <Camera size={20} color="#ef4444" />
          <span style={{ fontSize: '1rem', color: '#ef4444', fontWeight: 'bold' }}>LIVE</span>
        </motion.div>
        <span style={{ fontSize: '1rem', color: '#94a3b8' }}>
          Multi-Agent Consensus Building in Progress
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 1.25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem'
        }}
      >
        {[
          { label: 'Decisions/Min', value: 156, icon: Zap, color: '#fbbf24' },
          { label: 'Active Agents', value: 68, icon: Users, color: '#8b5cf6' },
          { label: 'Accuracy Rate', value: 99.7, unit: '%', icon: Shield, color: '#10b981' },
          { label: 'Response Time', value: 87, unit: 'ms', icon: Activity, color: '#3b82f6' }
        ].map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 + index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.05, y: -0.3125 }}
            style={{
              padding: '1rem',
              background: `linear-gradient(135deg, ${metric.color}20, rgba(255, 255, 255, 0.02))`,
              backdropFilter: 'blur(1.25rem)',
              borderRadius: '1rem',
              border: `0.125rem solid ${metric.color}30`,
              textAlign: 'center',
              position: 'relative',
              overflow: 'visible'
            }}
          >
            <motion.div
              animate={{ rotate: pulseAnimation ? 360 : 0 }}
              transition={{ duration: 2 }}
            >
              <metric.icon size={24} color={metric.color} />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              style={{ fontSize: '1.5rem', fontWeight: 'bold', color: metric.color, marginTop: '0.5rem' }}
            >
              <AnimatedCounter value={metric.value} decimals={metric.value < 100 ? 1 : 0} duration={1500} />
              {metric.unit}
            </motion.div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
  
  return (
    <DataSlideLayout
      title="Agentic AI Live Snapshot"
      particles={particles}
      mainVisual={mainVisual}
      keyInsights={keyInsights}
    />
  )
}
