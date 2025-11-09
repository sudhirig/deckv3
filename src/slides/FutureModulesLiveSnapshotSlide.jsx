import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import ParticleBackground from '../components/ParticleBackground'
import AnimatedCounter from '../components/AnimatedCounter'
import { Camera, Rocket, Construction, Clock, Users, Battery, Activity, Target, Sparkles, TrendingUp } from 'lucide-react'
import './SlideStyles.css'

export default function FutureModulesLiveSnapshotSlide() {
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [progressAnimation, setProgressAnimation] = useState(true)
  const [betaUsers, setBetaUsers] = useState(127)
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    
    const progressInterval = setInterval(() => {
      setProgressAnimation(prev => !prev)
    }, 3000)
    
    const betaInterval = setInterval(() => {
      setBetaUsers(prev => prev + Math.floor(Math.random() * 3))
    }, 5000)
    
    return () => {
      clearInterval(pulseInterval)
      clearInterval(progressInterval)
      clearInterval(betaInterval)
    }
  }, [])
  
  const modules = {
    beta: [
      { name: 'US Market Trading', progress: 85, color: '#10b981' },
      { name: 'Crypto Module', progress: 72, color: '#10b981' }
    ],
    development: [
      { name: 'Commodities Trading', progress: 45, color: '#fbbf24' },
      { name: 'REITs Integration', progress: 30, color: '#fbbf24' }
    ],
    planning: [
      { name: 'Private Equity', date: 'Q2 2025', color: '#3b82f6' },
      { name: 'European Markets', date: 'Q3 2025', color: '#3b82f6' },
      { name: 'Options Trading', date: 'Q4 2025', color: '#3b82f6' }
    ]
  }
  
  const particles = (
    <>
      <ParticleBackground count={50} color="#06b6d4" />
      
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 70%, rgba(8, 145, 178, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)'
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
      
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4
          }}
          style={{
            position: 'absolute',
            left: `${(i + 1) * 14}%`,
            top: '50%',
            width: '0.5rem',
            height: '0.5rem',
            borderRadius: '50%',
            background: '#06b6d4',
            boxShadow: '0 0 1.25rem rgba(6, 182, 212, 0.5)',
            zIndex: 2
          }}
        />
      ))}
    </>
  )
  
  const mainVisual = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      style={{
        background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.95), rgba(30, 30, 30, 0.9))',
        backdropFilter: 'blur(1.25rem)',
        border: '0.125rem solid rgba(6, 182, 212, 0.4)',
        borderRadius: '1.25rem',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          width: '6.25rem',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.2), transparent)',
          zIndex: 2
        }}
      />
      
      <div style={{
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(0.9375rem)',
        borderRadius: '1rem',
        padding: '1.5rem'
      }}>
        <div style={{
          borderBottom: '0.125rem solid rgba(6, 182, 212, 0.3)',
          paddingBottom: '1rem',
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Rocket size={20} color="#06b6d4" />
            </motion.div>
            <span style={{ color: '#06b6d4', fontSize: '1rem', fontWeight: 'bold' }}>
              DEVELOPMENT PIPELINE
            </span>
          </motion.div>
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: '#94a3b8' }}
          >
            Active Projects: 5 | Beta Testers: <AnimatedCounter value={betaUsers} duration={500} />
          </motion.div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -1.25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(255, 255, 255, 0.02))',
              borderRadius: '0.75rem',
              padding: '1rem',
              border: '0.0625rem solid rgba(16, 185, 129, 0.3)'
            }}
          >
            <h4 style={{ 
              fontSize: '0.9rem',
              color: '#10b981',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <motion.div
                animate={{ scale: pulseAnimation ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 1 }}
                style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 0.625rem #10b981'
                }}
              />
              IN BETA TESTING
            </h4>
            {modules.beta.map((module, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 0.3125 }}
                style={{ marginBottom: '1rem' }}
              >
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ color: '#e2e8f0', fontSize: '0.85rem' }}>{module.name}</span>
                  <motion.span
                    animate={{ color: progressAnimation ? module.color : '#94a3b8' }}
                    transition={{ duration: 1 }}
                    style={{ fontSize: '0.85rem', fontWeight: 'bold' }}
                  >
                    {module.progress}%
                  </motion.span>
                </div>
                <div style={{
                  height: '0.375rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.1875rem',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${module.progress}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${module.color}, ${module.color}dd)`,
                      boxShadow: `0 0 0.625rem ${module.color}50`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 1.25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(255, 255, 255, 0.02))',
              borderRadius: '0.75rem',
              padding: '1rem',
              border: '0.0625rem solid rgba(251, 191, 36, 0.3)'
            }}
          >
            <h4 style={{ 
              fontSize: '0.9rem',
              color: '#fbbf24',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <motion.div
                animate={{ rotate: progressAnimation ? 360 : 0 }}
                transition={{ duration: 2 }}
              >
                <Construction size={16} color="#fbbf24" />
              </motion.div>
              IN DEVELOPMENT
            </h4>
            {modules.development.map((module, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 0.3125 }}
                style={{ marginBottom: '1rem' }}
              >
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ color: '#e2e8f0', fontSize: '0.85rem' }}>{module.name}</span>
                  <motion.span
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 1.5, delay: index * 0.3 }}
                    style={{ color: module.color, fontSize: '0.85rem', fontWeight: 'bold' }}
                  >
                    {module.progress}%
                  </motion.span>
                </div>
                <div style={{
                  height: '0.375rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.1875rem',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${module.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${module.color}, ${module.color}dd)`,
                      boxShadow: `0 0 0.625rem ${module.color}50`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 1.25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(255, 255, 255, 0.02))',
            borderRadius: '0.75rem',
            padding: '1rem',
            border: '0.0625rem solid rgba(59, 130, 246, 0.3)'
          }}
        >
          <h4 style={{ 
            fontSize: '0.9rem',
            color: '#3b82f6',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Clock size={16} color="#3b82f6" />
            PLANNING PHASE
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {modules.planning.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05, y: -0.1875 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '0.5rem',
                  padding: '0.75rem',
                  textAlign: 'center',
                  border: '0.0625rem solid rgba(59, 130, 246, 0.2)'
                }}
              >
                <p style={{ color: '#e2e8f0', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                  {module.name}
                </p>
                <motion.p
                  animate={{ color: pulseAnimation ? module.color : '#94a3b8' }}
                  transition={{ duration: 1 }}
                  style={{ fontSize: '0.85rem', fontWeight: 'bold' }}
                >
                  {module.date}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(255, 255, 255, 0.02))',
            borderRadius: '0.75rem',
            border: '0.0625rem solid rgba(168, 85, 247, 0.3)'
          }}
        >
          <h4 style={{ 
            fontSize: '0.9rem',
            color: '#a855f7',
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={16} color="#a855f7" />
            </motion.div>
            BETA TESTER FEEDBACK
          </h4>
          <div style={{ fontSize: '0.8rem', color: '#e2e8f0', lineHeight: 1.6 }}>
            {[
              { text: '"US market integration working seamlessly!"', user: 'Beta User #42' },
              { text: '"Crypto module detected arbitrage opportunity, saved $2K"', user: 'Beta User #89' },
              { text: '"Can\'t wait for commodities trading!"', user: 'Beta User #15' }
            ].map((feedback, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -0.625 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ x: 0.3125 }}
                style={{ marginBottom: '0.5rem' }}
              >
                <span style={{ color: '#a855f7' }}>{feedback.text}</span>
                <span style={{ color: '#64748b', marginLeft: '0.5rem' }}>- {feedback.user}</span>
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
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
          Beta Testing Dashboard - Live Preview
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 1.25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem'
        }}
      >
        {[
          { icon: Rocket, label: 'Ready to Launch', value: 2, color: '#10b981' },
          { icon: Construction, label: 'In Development', value: 3, color: '#fbbf24' },
          { icon: Clock, label: 'Planned', value: '10+', color: '#3b82f6' },
          { icon: Users, label: 'Beta Testers', value: betaUsers, color: '#a855f7' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 + index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.05, y: -0.3125 }}
            style={{
              padding: '1rem',
              background: `linear-gradient(135deg, ${stat.color}20, rgba(255, 255, 255, 0.02))`,
              backdropFilter: 'blur(1.25rem)',
              borderRadius: '1rem',
              border: `0.125rem solid ${stat.color}30`,
              textAlign: 'center',
              position: 'relative',
              overflow: 'visible'
            }}
          >
            <motion.div
              animate={{ 
                opacity: pulseAnimation ? [0.2, 0.4, 0.2] : 0.2
              }}
              transition={{ duration: 2 }}
              style={{
                position: 'absolute',
                inset: '-0.625rem',
                background: `radial-gradient(circle, ${stat.color}30, transparent)`,
                borderRadius: '1rem',
                filter: 'blur(0.625rem)',
                zIndex: -1
              }}
            />
            
            <motion.div
              animate={{ 
                rotate: index === 3 ? 360 : 0,
                scale: progressAnimation && index === 0 ? [1, 1.2, 1] : 1
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2 }
              }}
            >
              <stat.icon size={24} color={stat.color} />
            </motion.div>
            <motion.p
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              style={{ fontSize: '1.5rem', fontWeight: 'bold', color: stat.color, marginTop: '0.5rem' }}
            >
              {typeof stat.value === 'number' ? <AnimatedCounter value={stat.value} duration={1000} /> : stat.value}
            </motion.p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
  
  return (
    <DataSlideLayout
      title="Future Modules Development Pipeline"
      particles={particles}
      mainVisual={mainVisual}
      supportingData={supportingData}
    />
  )
}
