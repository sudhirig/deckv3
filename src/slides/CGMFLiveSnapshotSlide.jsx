import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import ParticleBackground from '../components/ParticleBackground'
import AnimatedCounter from '../components/AnimatedCounter'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import { Camera, Calculator, TrendingUp, Award, PiggyBank, Shield, Target, CheckCircle, DollarSign, Percent, Brain, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function CGMFLiveSnapshotSlide() {
  const [animateMetrics, setAnimateMetrics] = useState(false)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [agentStatus, setAgentStatus] = useState(['Active', 'Active', 'Analyzing'])
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 500)
    
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    
    const agentInterval = setInterval(() => {
      setAgentStatus(prev => {
        const statuses = ['Active', 'Analyzing', 'Optimizing', 'Complete']
        return prev.map(() => statuses[Math.floor(Math.random() * statuses.length)])
      })
    }, 3000)
    
    return () => {
      clearTimeout(timer)
      clearInterval(pulseInterval)
      clearInterval(agentInterval)
    }
  }, [])
  
  const returnsData = [
    { label: '2019', value: 12, displayValue: '12%' },
    { label: '2020', value: 18, displayValue: '18%' },
    { label: '2021', value: 28, displayValue: '28%' },
    { label: '2022', value: 15, displayValue: '15%' },
    { label: '2023', value: 22, displayValue: '22%' },
    { label: '2024', value: 24, displayValue: '24%' }
  ]
  
  const fundScoreData = [
    { label: 'Axis ELSS', value: 95, displayValue: '95' },
    { label: 'Mirae Tax', value: 93, displayValue: '93' },
    { label: 'Quant Tax', value: 91, displayValue: '91' },
    { label: 'SBI ELSS', value: 88, displayValue: '88' }
  ]
  
  const particles = (
    <>
      <ParticleBackground count={45} color="#4caf50" />
      
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(76, 175, 80, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 50%, rgba(0, 188, 212, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 80%, rgba(156, 39, 176, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 50%, rgba(76, 175, 80, 0.15) 0%, transparent 60%)'
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />
      
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -6.25, x: Math.random() * window.innerWidth }}
          animate={{ 
            y: window.innerHeight + 100,
            x: Math.random() * window.innerWidth,
            rotate: [0, 360]
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            fontSize: '1.5rem',
            color: '#4caf50',
            opacity: 0.3,
            zIndex: 2
          }}
        >
          ₹
        </motion.div>
      ))}
    </>
  )
  
  const mainVisual = (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        {[
          { icon: PiggyBank, label: 'Tax Saved', value: 1.55, prefix: '₹', suffix: 'L', decimals: 2, color: '#4caf50' },
          { icon: Target, label: 'Total Funds', value: 16766, color: '#2196f3' },
          { icon: Award, label: 'Top Score', value: 95, color: '#9c27b0' },
          { icon: TrendingUp, label: 'Avg Return', value: 24, suffix: '%', color: '#00bcd4' },
          { icon: Shield, label: 'AI Agents', value: 7, color: '#ffc107' },
          { icon: CheckCircle, label: 'Authentic', value: 100, suffix: '%', color: '#4caf50' }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 1.25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.08, type: 'spring' }}
            whileHover={{ 
              scale: 1.08,
              y: -0.5,
              boxShadow: `0 1.25rem 2.5rem ${item.color}40`
            }}
            style={{
              padding: '1rem',
              textAlign: 'center',
              background: `linear-gradient(135deg, ${item.color}20, rgba(255, 255, 255, 0.02))`,
              backdropFilter: 'blur(1.25rem)',
              borderRadius: '1rem',
              border: `0.125rem solid ${item.color}30`,
              position: 'relative',
              overflow: 'visible'
            }}
          >
            <motion.div
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(45deg, transparent 30%, ${item.color}20 50%, transparent 70%)`,
                backgroundSize: '200% 200%',
                borderRadius: '1rem',
                zIndex: -1
              }}
            />
            
            <motion.div
              animate={{ 
                rotate: pulseAnimation && index === 0 ? [0, 360] : 0,
                scale: pulseAnimation && index === 3 ? [1, 1.3, 1] : 1
              }}
              transition={{ duration: 2 }}
            >
              <item.icon size={24} color={item.color} />
            </motion.div>
            
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              style={{ fontSize: '1.5rem', fontWeight: 'bold', color: item.color }}
            >
              {item.prefix}<AnimatedCounter value={item.value} decimals={item.decimals || 0} duration={1500} />{item.suffix}
            </motion.div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -3.125, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.6, type: 'spring' }}
          whileHover={{ scale: 1.02 }}
          style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.15), rgba(255, 255, 255, 0.02))',
            backdropFilter: 'blur(1.25rem)',
            borderRadius: '1.25rem',
            border: '0.125rem solid rgba(156, 39, 176, 0.3)',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: 'absolute',
              inset: '-1.875rem',
              background: 'radial-gradient(circle, rgba(156, 39, 176, 0.2), transparent)',
              borderRadius: '1.5rem',
              filter: 'blur(1.25rem)',
              zIndex: -1
            }}
          />
          
          <h3 style={{ 
            fontSize: '1.2rem',
            color: '#9c27b0',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Award size={24} style={{ marginRight: '0.5rem' }} />
            Top ELSS Recommendations
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{ marginLeft: 'auto' }}
            >
              <Sparkles size={20} color="#9c27b0" />
            </motion.div>
          </h3>
          
          <BarChart data={fundScoreData} height={120} colorScheme="gradient" animated={animateMetrics} />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              marginTop: '1.5rem',
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(33, 150, 243, 0.15))',
              borderRadius: '1rem',
              border: '0.125rem solid rgba(76, 175, 80, 0.3)',
              position: 'relative',
              overflow: 'visible'
            }}
          >
            <motion.div
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [0.98, 1.02, 0.98]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute',
                inset: '-0.1875rem',
                background: 'linear-gradient(135deg, #4caf50, #2196f3)',
                borderRadius: '1rem',
                filter: 'blur(0.625rem)',
                zIndex: -1
              }}
            />
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{ textAlign: 'center' }}
              >
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Section 80C Used</p>
                <motion.div
                  animate={{ 
                    scale: pulseAnimation ? [1, 1.1, 1] : 1,
                    color: pulseAnimation ? '#4caf50' : '#10b981'
                  }}
                  transition={{ duration: 1 }}
                  style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                  ₹<AnimatedCounter value={1.5} decimals={1} duration={1500} />L
                </motion.div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{ textAlign: 'center' }}
              >
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Annual Savings</p>
                <motion.div
                  animate={{ 
                    scale: pulseAnimation ? [1, 1.1, 1] : 1,
                    color: pulseAnimation ? '#00bcd4' : '#0891b2'
                  }}
                  transition={{ duration: 1 }}
                  style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                  ₹<AnimatedCounter value={1.55} decimals={2} duration={1500} />L
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 3.125, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.8, type: 'spring' }}
          whileHover={{ scale: 1.02 }}
          style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.15), rgba(255, 255, 255, 0.02))',
            backdropFilter: 'blur(1.25rem)',
            borderRadius: '1.25rem',
            border: '0.125rem solid rgba(0, 188, 212, 0.3)',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(45deg, rgba(0, 188, 212, 0.05), transparent, rgba(33, 150, 243, 0.05))',
              backgroundSize: '200% 200%',
              borderRadius: '1.25rem',
              zIndex: -1
            }}
          />
          
          <h3 style={{ 
            fontSize: '1.2rem',
            color: '#00bcd4',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center'
          }}>
            <TrendingUp size={24} style={{ marginRight: '0.5rem' }} />
            6-Year Performance Trend
            <motion.div
              animate={{ 
                y: pulseAnimation ? [0, -0.3125, 0] : 0
              }}
              transition={{ duration: 1 }}
              style={{ marginLeft: 'auto' }}
            >
              <Target size={20} color="#00bcd4" />
            </motion.div>
          </h3>
          
          <LineChart data={returnsData} height={120} animated={animateMetrics} />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{
              marginTop: '1.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem'
            }}
          >
            {[
              { name: 'Goal Agent', status: agentStatus[0], color: '#4caf50' },
              { name: 'Tax Agent', status: agentStatus[1], color: '#2196f3' },
              { name: 'Risk Agent', status: agentStatus[2], color: '#9c27b0' }
            ].map((agent, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 0.625rem 1.5625rem ${agent.color}30`
                }}
                style={{
                  textAlign: 'center',
                  padding: '0.75rem',
                  background: `linear-gradient(135deg, ${agent.color}20, ${agent.color}10)`,
                  borderRadius: '0.75rem',
                  border: `0.125rem solid ${agent.color}30`,
                  position: 'relative',
                  overflow: 'visible'
                }}
              >
                <motion.div
                  animate={{ 
                    scale: agent.status === 'Active' ? [1, 1.5, 1] : 1,
                    opacity: agent.status === 'Active' ? [1, 0.5, 1] : 0.5
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  style={{
                    width: '0.5rem',
                    height: '0.5rem',
                    borderRadius: '50%',
                    background: agent.color,
                    margin: '0 auto 0.5rem',
                    boxShadow: `0 0 0.9375rem ${agent.color}`
                  }}
                />
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.25rem' }}>
                  <Brain size={16} color={agent.color} />
                </div>
                
                <p style={{ fontSize: '0.75rem', color: agent.color, fontWeight: 'bold' }}>
                  {agent.name}
                </p>
                <motion.p
                  animate={{ 
                    opacity: agent.status === 'Active' ? [1, 0.7, 1] : 1
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{ fontSize: '0.7rem', color: '#94a3b8' }}
                >
                  {agent.status}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
  
  const supportingData = (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
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
            rotate: pulseAnimation ? [0, 5, -5, 0] : 0
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
          <span style={{ fontSize: '1rem', color: '#ef4444', fontWeight: 'bold' }}>
            LIVE
          </span>
        </motion.div>
        <span style={{ fontSize: '1rem', color: '#94a3b8' }}>
          Managing <span style={{ color: '#4caf50', fontWeight: 'bold' }}>16,766</span> Active Funds
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 1.25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(156, 39, 176, 0.1))',
          backdropFilter: 'blur(1.25rem)',
          borderRadius: '1.25rem',
          border: '0.125rem solid rgba(20, 184, 166, 0.3)',
          position: 'relative',
          overflow: 'visible'
        }}
      >
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: '-0.125rem',
            background: 'linear-gradient(90deg, #14b8a6, #9c27b0, #14b8a6)',
            borderRadius: '1.25rem',
            filter: 'blur(0.5rem)',
            zIndex: -1
          }}
        />
        
        <h3 style={{ 
          fontSize: '1rem',
          color: '#14b8a6',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Live Portfolio Snapshot
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
          {[
            { label: 'Portfolio Value', value: '₹50L', color: '#2196f3', trend: '+5.2%' },
            { label: "Today's Change", value: '+₹25K', color: '#4caf50', trend: '+0.5%' },
            { label: 'YTD Returns', value: '+24%', color: '#00bcd4', trend: '↑' },
            { label: 'Active Funds', value: '12', color: '#9c27b0', trend: 'Optimized' },
            { label: 'Tax Saved YTD', value: '₹1.55L', color: '#4caf50', trend: 'Max' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
              whileHover={{ 
                y: -0.5,
                scale: 1.1
              }}
              style={{ textAlign: 'center' }}
            >
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.label}</p>
              <motion.p
                animate={{ 
                  scale: pulseAnimation ? [1, 1.05, 1] : 1
                }}
                transition={{ duration: 2, delay: index * 0.2 }}
                style={{ 
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: item.color
                }}
              >
                {item.value}
              </motion.p>
              <p style={{ fontSize: '0.7rem', color: item.color, opacity: 0.8 }}>
                {item.trend}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  )
  
  return (
    <DataSlideLayout
      title="CGMF Unified Fund Platform"
      particles={particles}
      mainVisual={mainVisual}
      supportingData={supportingData}
    />
  )
}
