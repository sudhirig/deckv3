import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import ParticleBackground from '../components/ParticleBackground'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import { Camera, Activity, TrendingUp, Bot, Mic, Globe, Clock, CheckCircle, DollarSign, Percent, Headphones, Zap, Volume2 } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function ZerodhaLiveSnapshotSlide() {
  const [animateMetrics, setAnimateMetrics] = useState(false)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [voiceWaveHeight, setVoiceWaveHeight] = useState([20, 40, 20, 50, 30, 45, 25])
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 500)
    
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    
    const waveInterval = setInterval(() => {
      setVoiceWaveHeight(prev => prev.map(() => Math.random() * 40 + 20))
    }, 800)
    
    return () => {
      clearTimeout(timer)
      clearInterval(pulseInterval)
      clearInterval(waveInterval)
    }
  }, [])
  
  const performanceData = [
    { label: '9AM', value: 0, displayValue: '0' },
    { label: '10AM', value: 4500, displayValue: '4.5K' },
    { label: '11AM', value: 7200, displayValue: '7.2K' },
    { label: '12PM', value: 8900, displayValue: '8.9K' },
    { label: '1PM', value: 10200, displayValue: '10.2K' },
    { label: '2PM', value: 12450, displayValue: '12.4K' }
  ]
  
  const languageData = [
    { label: 'Hindi', value: 45, displayValue: '45%' },
    { label: 'English', value: 35, displayValue: '35%' },
    { label: 'Tamil', value: 20, displayValue: '20%' }
  ]
  
  const particles = (
    <>
      <ParticleBackground count={45} color="#ff7043" />
      
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 70%, rgba(255, 112, 67, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 30%, rgba(156, 39, 176, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 70%, rgba(255, 112, 67, 0.15) 0%, transparent 60%)'
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
      
      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '37.5rem',
          height: '37.5rem',
          borderRadius: '50%',
          border: '0.125rem solid rgba(255, 112, 67, 0.3)',
          zIndex: 1
        }}
      />
    </>
  )
  
  const mainVisual = (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        {[
          { icon: Mic, label: 'Languages', value: 3, color: '#ff7043' },
          { icon: Clock, label: 'Latency', value: 11, suffix: 'ms', color: '#9c27b0' },
          { icon: TrendingUp, label: 'Today P&L', value: 12.4, prefix: '₹', suffix: 'K', decimals: 1, color: '#4caf50' },
          { icon: Activity, label: 'Trades', value: 23, color: '#2196f3' },
          { icon: Percent, label: 'Win Rate', value: 87, suffix: '%', color: '#00bcd4' },
          { icon: CheckCircle, label: 'Accuracy', value: 100, suffix: '%', color: '#4caf50' }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 1.25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.08, type: 'spring' }}
            whileHover={{ 
              scale: 1.05,
              y: -0.5,
              boxShadow: `0 0.9375rem 2.5rem ${item.color}40`
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
                rotate: pulseAnimation && index === 1 ? [0, 360] : 0,
                scale: pulseAnimation && index === 2 ? [1, 1.2, 1] : 1
              }}
              transition={{ duration: 2 }}
              style={{ marginBottom: '0.5rem' }}
            >
              <item.icon size={24} color={item.color} />
            </motion.div>
            
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
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
          transition={{ delay: 0.7, type: 'spring' }}
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
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(156, 39, 176, 0.2), transparent)',
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              filter: 'blur(1.875rem)',
              zIndex: -1
            }}
          />
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#9c27b0', display: 'flex', alignItems: 'center' }}>
              <Bot size={24} style={{ marginRight: '0.5rem' }} />
              ARIA Voice Assistant
            </h3>
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.25rem 0.75rem',
                background: 'rgba(76, 175, 80, 0.2)',
                borderRadius: '1.25rem',
                border: '0.0625rem solid #4caf50'
              }}
            >
              <div style={{ 
                width: '0.5rem',
                height: '0.5rem',
                borderRadius: '50%',
                background: '#4caf50',
                marginRight: '0.5rem',
                boxShadow: '0 0 0.625rem #4caf50'
              }} />
              <span style={{ fontSize: '0.875rem', color: '#4caf50', fontWeight: 'bold' }}>
                Live
              </span>
            </motion.div>
          </div>
          
          <div style={{
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(0.9375rem)',
            borderRadius: '1rem',
            padding: '1.25rem',
            marginBottom: '1.5rem',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            border: '0.0625rem solid rgba(156, 39, 176, 0.2)'
          }}>
            {[
              { delay: 0.8, icon: '🎤', text: '"रिलायंस के 100 शेयर खरीदो"', color: '#ff9800' },
              { delay: 0.9, icon: '🤖', text: 'Processing Hindi command...', color: '#9c27b0' },
              { delay: 1.0, icon: '✅', text: 'BUY 100 RELIANCE @ ₹2,456', color: '#4caf50' },
              { delay: 1.1, icon: '⏱️', text: 'Execution: 11ms', color: '#ffc107' }
            ].map((cmd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -1.25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: cmd.delay }}
                whileHover={{ x: 0.3125 }}
                style={{ 
                  marginBottom: '0.75rem',
                  color: cmd.color,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {cmd.icon}
                </motion.span>
                <span>{cmd.text}</span>
              </motion.div>
            ))}
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1rem' }}>
              Language Usage Today
            </p>
            <BarChart data={languageData} height={80} colorScheme="gradient" animated={animateMetrics} />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.25rem',
              padding: '1rem',
              background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(255, 112, 67, 0.1))',
              borderRadius: '0.75rem'
            }}
          >
            {voiceWaveHeight.map((height, i) => (
              <motion.div
                key={i}
                animate={{ height }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut'
                }}
                style={{
                  width: '0.25rem',
                  background: `linear-gradient(to top, #9c27b0, #ff7043)`,
                  borderRadius: '0.125rem',
                  boxShadow: '0 0 0.625rem rgba(156, 39, 176, 0.5)'
                }}
              />
            ))}
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
              background: [
                'linear-gradient(135deg, rgba(0, 188, 212, 0.1), transparent)',
                'linear-gradient(135deg, transparent, rgba(33, 150, 243, 0.1))',
                'linear-gradient(135deg, rgba(0, 188, 212, 0.1), transparent)'
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
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
            Today's P&L Performance
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{ marginLeft: 'auto' }}
            >
              <Zap size={20} color="#00bcd4" />
            </motion.div>
          </h3>
          
          <LineChart data={performanceData} height={120} animated={animateMetrics} />
          
          <motion.div
            initial={{ opacity: 0, y: 1.25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginTop: '1.5rem',
              padding: '1rem',
              background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.1), rgba(255, 255, 255, 0.05))',
              borderRadius: '0.75rem',
              border: '0.0625rem solid rgba(0, 188, 212, 0.2)'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{ textAlign: 'center' }}
            >
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Best Trade</p>
              <motion.p
                animate={{ 
                  color: pulseAnimation ? '#4caf50' : '#10b981',
                  scale: pulseAnimation ? 1.05 : 1
                }}
                transition={{ duration: 1 }}
                style={{ fontSize: '1.25rem', fontWeight: 'bold' }}
              >
                +₹3,450
              </motion.p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{ textAlign: 'center' }}
            >
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Avg Response</p>
              <motion.p
                animate={{
                  color: pulseAnimation ? '#9c27b0' : '#8b5cf6',
                  scale: pulseAnimation ? 1.05 : 1
                }}
                transition={{ duration: 1 }}
                style={{ fontSize: '1.25rem', fontWeight: 'bold' }}
              >
                11ms
              </motion.p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: 'absolute',
                width: '7.5rem',
                height: '7.5rem',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 188, 212, 0.3), transparent)',
                filter: 'blur(1.25rem)'
              }}
            />
            <CircularProgress value={87} size={80} strokeWidth={8} />
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
          <span style={{ fontSize: '1rem', color: '#ef4444', fontWeight: 'bold' }}>
            LIVE
          </span>
        </motion.div>
        <span style={{ fontSize: '1rem', color: '#94a3b8' }}>
          Real Trading Session in Progress
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 1.875 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem'
        }}
      >
        {[
          { icon: Globe, title: 'Multi-Language', desc: 'Hindi, English, Tamil', color: '#2196f3' },
          { icon: Activity, title: 'Real-time Analysis', desc: 'Technical + Sentiment', color: '#9c27b0' },
          { icon: CheckCircle, title: '100% Accurate', desc: 'Voice Recognition', color: '#4caf50' },
          { icon: Clock, title: 'Ultra-Low Latency', desc: '11ms Response', color: '#ff7043' }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 1.25, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.3 + index * 0.1, type: 'spring' }}
            whileHover={{ 
              scale: 1.05,
              y: -0.3125,
              boxShadow: `0 0.625rem 1.875rem ${item.color}30`
            }}
            style={{
              padding: '1rem',
              textAlign: 'center',
              background: `linear-gradient(135deg, ${item.color}15, rgba(255, 255, 255, 0.02))`,
              backdropFilter: 'blur(0.9375rem)',
              borderRadius: '1rem',
              border: `0.125rem solid ${item.color}25`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <motion.div
              animate={{
                y: ['-100%', '100%']
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(to bottom, transparent, ${item.color}10, transparent)`,
                zIndex: -1
              }}
            />
            
            <motion.div
              animate={{ rotate: pulseAnimation ? 360 : 0 }}
              transition={{ duration: 2 }}
            >
              <item.icon size={28} color={item.color} />
            </motion.div>
            <p style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#fff', marginTop: '0.5rem' }}>
              {item.title}
            </p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
  
  return (
    <DataSlideLayout
      title="Zerodha Voice Trading Platform"
      particles={particles}
      mainVisual={mainVisual}
      supportingData={supportingData}
    />
  )
}
