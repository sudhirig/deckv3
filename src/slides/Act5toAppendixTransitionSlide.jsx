import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import { ActSlideLayout } from '../components/StandardLayouts'
import { Microscope, Code, Brain, Zap, Database, Shield, Layers, Activity, ChevronRight, Sparkles, Rocket } from 'lucide-react'
import { pxToRem, TYPOGRAPHY } from '../utils/responsive'

export default function Act5toAppendixTransitionSlide() {
  const [hoveredModule, setHoveredModule] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [progressStep, setProgressStep] = useState(0)
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    
    const progressInterval = setInterval(() => {
      setProgressStep(prev => (prev + 1) % 8)
    }, 1500)
    
    return () => {
      clearInterval(pulseInterval)
      clearInterval(progressInterval)
    }
  }, [])
  
  const modules = [
    { icon: Zap, name: 'Zerodha Trading Intelligence', color: '#fb923c' },
    { icon: Shield, name: 'CGMF Mutual Fund Advisory', color: '#10b981' },
    { icon: Brain, name: 'Agentic AI System', color: '#8b5cf6' },
    { icon: Code, name: 'Algo Trading Laboratory', color: '#06b6d4' },
    { icon: Database, name: 'Sentiment Intelligence', color: '#f59e0b' },
    { icon: Activity, name: 'Trading Agents & Hedge Fund', color: '#ef4444' },
    { icon: Microscope, name: 'Future Modules Roadmap', color: '#a855f7' }
  ]
  
  const particles = (
    <>
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 60%)'
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
      
      <motion.div
        animate={{
          x: ['-100%', '200%'],
          opacity: [0, 0.3, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: pxToRem(200),
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.3), transparent)',
          filter: `blur(${pxToRem(30)})`,
          zIndex: 2
        }}
      />
    </>
  )
  
  const mainContent = (
    <>
      <motion.div
        initial={{ opacity: 0, y: pxToRem(-30) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ textAlign: 'center', marginBottom: pxToRem(48) }}
      >
        <motion.div
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: pxToRem(24)
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              width: pxToRem(120),
              height: pxToRem(120),
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #14b8a6, #8b5cf6, #fb923c, #14b8a6)',
              padding: pxToRem(4),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 ${pxToRem(60)} rgba(20, 184, 166, 0.5)`
            }}
          >
            <motion.div
              animate={{ scale: pulseAnimation ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 2 }}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'rgba(10, 10, 10, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ 
                  fontSize: TYPOGRAPHY.subheadline,
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #14b8a6, #8b5cf6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                <AnimatedCounter value={100} duration={1500} />%
              </motion.div>
              <p style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>COMPLETE</p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ fontSize: pxToRem(16), color: '#94a3b8', marginBottom: pxToRem(8) }}
        >
          JOURNEY COMPLETE
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: pxToRem(20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: TYPOGRAPHY.subheadline, color: '#fff', fontWeight: '600' }}
        >
          Act 5 → Product Appendix
        </motion.h2>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: pxToRem(24),
          marginBottom: pxToRem(40)
        }}
      >
        {[
          { 
            icon: Layers,
            count: '7',
            title: 'Operational Modules',
            desc: 'Complete platform walkthrough',
            color: '#14b8a6',
            gradient: 'from-teal-500 to-cyan-500'
          },
          { 
            icon: Brain,
            count: '68+',
            title: 'AI Agents',
            desc: 'See them in action',
            color: '#8b5cf6',
            gradient: 'from-purple-500 to-indigo-500'
          },
          { 
            icon: Activity,
            count: '100%',
            title: 'Live Snapshots',
            desc: 'Real system screenshots',
            color: '#fb923c',
            gradient: 'from-orange-500 to-red-500'
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: pxToRem(30), rotateY: -20 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: 1.0 + index * 0.15, type: 'spring' }}
            whileHover={{ 
              scale: 1.05,
              y: pxToRem(-10),
              boxShadow: `0 ${pxToRem(20)} ${pxToRem(60)} ${item.color}40`
            }}
            style={{
              padding: pxToRem(32),
              background: `linear-gradient(135deg, ${item.color}15, rgba(255, 255, 255, 0.02))`,
              backdropFilter: `blur(${pxToRem(20)})`,
              borderRadius: pxToRem(20),
              border: `${pxToRem(2)} solid ${item.color}30`,
              position: 'relative',
              overflow: 'visible',
              textAlign: 'center',
              cursor: 'pointer'
            }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150%',
                height: '150%',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${item.color}20, transparent)`,
                filter: `blur(${pxToRem(30)})`,
                zIndex: -1
              }}
            />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: pxToRem(200),
                height: pxToRem(200),
                background: `conic-gradient(from 0deg, ${item.color}10, transparent, ${item.color}10)`,
                borderRadius: '50%',
                filter: `blur(${pxToRem(20)})`,
                zIndex: -1
              }}
            />
            
            <motion.div
              animate={{ 
                y: pulseAnimation ? [0, pxToRem(-5), 0] : 0,
                rotate: pulseAnimation ? [0, 5, -5, 0] : 0
              }}
              transition={{ duration: 2 }}
              style={{ marginBottom: pxToRem(16) }}
            >
              <item.icon size={40} color={item.color} />
            </motion.div>
            
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              style={{ 
                fontSize: TYPOGRAPHY.subheadline,
                fontWeight: 'bold',
                marginBottom: pxToRem(12),
                background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {item.count}
            </motion.div>
            
            <h4 style={{ fontSize: pxToRem(19.2), color: '#e2e8f0', marginBottom: pxToRem(8) }}>
              {item.title}
            </h4>
            <p style={{ fontSize: pxToRem(14.4), color: '#94a3b8' }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
  
  const bottomPoints = (
    <>
      <motion.div
        initial={{ opacity: 0, y: pxToRem(30) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        style={{ marginBottom: pxToRem(40) }}
      >
        <h4 style={{ 
          fontSize: pxToRem(20.8),
          color: '#94a3b8',
          marginBottom: pxToRem(24),
          textAlign: 'center'
        }}>
          What's in the Appendix:
        </h4>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: pxToRem(16),
          maxWidth: pxToRem(900),
          margin: '0 auto'
        }}>
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? pxToRem(-30) : pxToRem(30) }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 + index * 0.08 }}
              whileHover={{ 
                scale: 1.05,
                x: index % 2 === 0 ? pxToRem(10) : pxToRem(-10),
                backgroundColor: `${module.color}10`
              }}
              onHoverStart={() => setHoveredModule(index)}
              onHoverEnd={() => setHoveredModule(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: pxToRem(16),
                padding: pxToRem(16),
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: `blur(${pxToRem(10)})`,
                borderRadius: pxToRem(12),
                border: `${pxToRem(1)} solid ${module.color}20`,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {hoveredModule === index && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: pxToRem(3),
                    background: `linear-gradient(90deg, ${module.color}, ${module.color}60)`,
                    boxShadow: `0 0 ${pxToRem(15)} ${module.color}50`
                  }}
                />
              )}
              
              <motion.div
                animate={{ 
                  rotate: hoveredModule === index ? 360 : 0,
                  scale: hoveredModule === index ? 1.2 : 1
                }}
                transition={{ duration: 0.5 }}
                style={{
                  padding: pxToRem(12),
                  background: `linear-gradient(135deg, ${module.color}20, ${module.color}10)`,
                  borderRadius: pxToRem(10),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <module.icon size={24} color={module.color} />
              </motion.div>
              
              <div style={{ flex: 1 }}>
                <span style={{ 
                  color: module.color,
                  fontWeight: 'bold',
                  marginRight: pxToRem(8)
                }}>
                  {index + 1}.
                </span>
                <span style={{ color: '#e2e8f0' }}>
                  {module.name}
                </span>
              </div>
              
              {hoveredModule === index && (
                <motion.div
                  initial={{ opacity: 0, x: pxToRem(20) }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight size={20} color={module.color} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: pxToRem(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
      >
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: pxToRem(12)
        }}>
          <span style={{ fontSize: pxToRem(14.4), color: '#94a3b8' }}>
            Journey Progress
          </span>
          <motion.span
            animate={{ 
              color: pulseAnimation ? '#14b8a6' : '#8b5cf6'
            }}
            transition={{ duration: 2 }}
            style={{ fontSize: pxToRem(14.4), fontWeight: 'bold' }}
          >
            100% - Technical Deep Dive
          </motion.span>
        </div>
        
        <div style={{ 
          height: pxToRem(12),
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: pxToRem(6),
          overflow: 'hidden',
          position: 'relative'
        }}>
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 2.4, duration: 1.5, ease: 'easeOut' }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #14b8a6, #8b5cf6, #fb923c)',
              boxShadow: `0 0 ${pxToRem(30)} rgba(20, 184, 166, 0.5)`,
              position: 'relative'
            }}
          >
            <motion.div
              animate={{ 
                x: ['-100%', '200%']
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: pxToRem(50),
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                filter: `blur(${pxToRem(5)})`
              }}
            />
          </motion.div>
          
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: progressStep > i ? 1 : 0.3,
                scale: progressStep === i ? 1.5 : 1
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                left: `${(i + 1) * 14}%`,
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: pxToRem(8),
                height: pxToRem(8),
                borderRadius: '50%',
                background: progressStep > i ? '#fff' : 'rgba(255, 255, 255, 0.3)',
                boxShadow: progressStep === i ? `0 0 ${pxToRem(20)} #fff` : 'none'
              }}
            />
          ))}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.8, type: 'spring' }}
        style={{
          marginTop: pxToRem(40),
          textAlign: 'center'
        }}
      >
        <motion.button
          animate={{ 
            scale: pulseAnimation ? [1, 1.05, 1] : 1,
            boxShadow: pulseAnimation 
              ? [`0 0 ${pxToRem(30)} rgba(20, 184, 166, 0.3)`, `0 0 ${pxToRem(50)} rgba(20, 184, 166, 0.5)`, `0 0 ${pxToRem(30)} rgba(20, 184, 166, 0.3)`]
              : `0 0 ${pxToRem(30)} rgba(20, 184, 166, 0.3)`
          }}
          transition={{ duration: 2 }}
          style={{
            padding: `${pxToRem(16)} ${pxToRem(40)}`,
            fontSize: pxToRem(17.6),
            fontWeight: 'bold',
            color: '#fff',
            background: 'linear-gradient(135deg, #14b8a6, #8b5cf6)',
            border: 'none',
            borderRadius: pxToRem(50),
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: pxToRem(12)
          }}
        >
          <Rocket size={20} />
          Enter Technical Deep Dive
          <Sparkles size={20} />
        </motion.button>
      </motion.div>
    </>
  )
  
  return (
    <ActSlideLayout
      actNumber="5"
      title="Ready to Invest?"
      subtitle="Deep Dive Into Our Technology Stack"
      mainContent={mainContent}
      bottomPoints={bottomPoints}
      particles={particles}
    />
  )
}
