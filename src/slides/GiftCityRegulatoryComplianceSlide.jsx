import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import CircularProgress from '../components/CircularProgress'
import { Shield, CheckCircle, Award, FileCheck, Lock } from 'lucide-react'
import { DataSlideLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function GiftCityRegulatoryComplianceSlide() {
  const [hoveredLicense, setHoveredLicense] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const licenses = [
    { 
      title: 'IFSCA Investment Advisor',
      number: '#IFSCA/IA/2024/001',
      status: 'active',
      icon: Award,
      color: '#fbbf24'
    },
    { 
      title: 'Category III AIF',
      number: 'Registration Q1 2025',
      status: 'pending',
      icon: FileCheck,
      color: '#3b82f6'
    },
    { 
      title: 'Technology Services',
      number: 'GIFT SEZ approved',
      status: 'active',
      icon: Shield,
      color: '#10b981'
    },
    { 
      title: 'FATF Compliant',
      number: 'AML/KYC frameworks active',
      status: 'active',
      icon: Lock,
      color: '#a855f7'
    }
  ]

  const complianceStack = [
    { 
      name: 'Risk Management',
      desc: 'Real-time monitoring, 24/7 alerts',
      progress: 100
    },
    { 
      name: 'Client Onboarding',
      desc: 'Digital KYC, AI verification',
      progress: 95
    },
    { 
      name: 'Reporting',
      desc: 'Automated IFSCA submissions',
      progress: 100
    },
    { 
      name: 'Audits',
      desc: 'Quarterly reviews, annual certification',
      progress: 90
    }
  ]

  const trustMetrics = [
    { value: 100, label: 'Regulatory Compliant', unit: '%', color: '#10b981', isNumeric: true },
    { value: 256, label: 'Encryption Standard', unit: '-bit', color: '#3b82f6', isNumeric: true },
    { value: 'SOC2', label: 'Type II Certified', unit: '', color: '#a855f7', isNumeric: false },
    { value: 'ISO 27001', label: 'Security Standard', unit: '', color: '#f59e0b', isNumeric: false }
  ]

  const mainVisual = (
    <>
      {/* Central Shield Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: 'spring' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '2rem'
        }}
      >
        <motion.div
          animate={{ 
            rotate: pulseAnimation ? [0, 5, -5, 0] : 0,
            scale: pulseAnimation ? [1, 1.1, 1] : 1
          }}
          transition={{ duration: 2 }}
          style={{
            position: 'relative',
            padding: '2rem',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
            borderRadius: '50%'
          }}
        >
          <Shield size={64} color="#10b981" />
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: '2px solid #10b981',
              borderRadius: '50%'
            }}
          />
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ 
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginTop: '1rem',
            textAlign: 'center'
          }}
        >
          <GradientText gradient="from-green-400 to-emerald-400">
            Fully Licensed & Operational
          </GradientText>
        </motion.h3>
      </motion.div>

      {/* Licenses Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        {licenses.map((license, index) => (
          <motion.div
            key={license.title}
            initial={{ opacity: 0, y: pxToRem(20) }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredLicense(license.title)}
            onHoverEnd={() => setHoveredLicense(null)}
            style={{
              padding: '1rem',
              background: `linear-gradient(135deg, ${license.color}15, rgba(0, 0, 0, 0.3))`,
              borderRadius: '0.75rem',
              border: `1px solid ${license.color}40`,
              position: 'relative'
            }}
          >
            <AnimatePresence>
              {hoveredLicense === license.title && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    top: '-0.5rem',
                    left: '-0.5rem',
                    right: '-0.5rem',
                    bottom: '-0.5rem',
                    background: `radial-gradient(circle, ${license.color}30, transparent)`,
                    borderRadius: '1rem',
                    filter: 'blur(1rem)',
                    zIndex: -1
                  }}
              />
            )}
            </AnimatePresence>
            
            <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
              <motion.div
                animate={{ 
                  rotate: license.status === 'active' && pulseAnimation ? [0, 10, -10, 0] : 0
                }}
                transition={{ duration: 0.5 }}
              >
                {license.status === 'active' ? (
                  <CheckCircle size={24} color="#10b981" />
                ) : (
                  <license.icon size={24} color={license.color} />
                )}
              </motion.div>
              <div style={{ flex: 1 }}>
                <p style={{ 
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  color: '#e2e8f0',
                  marginBottom: '0.25rem'
                }}>
                  {license.title}
                </p>
                <p style={{ 
                  fontSize: '0.7rem',
                  color: license.status === 'active' ? '#10b981' : '#94a3b8'
                }}>
                  {license.number}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compliance Progress */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          padding: '1rem',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.02))',
          borderRadius: '0.75rem',
          border: '1px solid rgba(59, 130, 246, 0.3)'
        }}
      >
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <CircularProgress value={95} size={60} strokeWidth={4} />
          <div>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#3b82f6' }}>
              95% Complete
            </p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              Full Compliance Status
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )

  const keyInsights = (
    <div style={{
      padding: '1.5rem',
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(255, 255, 255, 0.02))',
      backdropFilter: 'blur(1.25rem)',
      borderRadius: '1.25rem',
      border: '2px solid rgba(139, 92, 246, 0.3)'
    }}>
      <h3 style={{ 
        fontSize: '1.2rem',
        color: '#a855f7',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <FileCheck size={24} />
        Compliance Stack
      </h3>
      
      {complianceStack.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, x: pxToRem(-20) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 + index * 0.15 }}
          style={{
            marginBottom: '1rem',
            padding: '0.75rem',
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '0.5rem',
            borderLeft: '3px solid #a855f7'
          }}
        >
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem'
          }}>
            <p style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#e2e8f0' }}>
              {item.name}
            </p>
            <span style={{ fontSize: '0.85rem', color: '#a855f7' }}>
              {item.progress}%
            </span>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
            {item.desc}
          </p>
          <div style={{ 
            height: '0.25rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '0.125rem',
            overflow: 'hidden'
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.progress}%` }}
              transition={{ delay: 1.2 + index * 0.15, duration: 0.8 }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #a855f7, #8b5cf6)',
                boxShadow: '0 0 0.625rem #a855f750'
              }}
            />
          </div>
        </motion.div>
      ))}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          marginTop: '1rem',
          padding: '0.75rem',
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(16, 185, 129, 0.1))',
          borderRadius: '0.5rem',
          textAlign: 'center'
        }}
      >
        <p style={{ fontSize: '0.9rem', color: '#10b981' }}>
          <Icon type="shield" size={16} variant="inline" gradient="from-green-400 to-emerald-400" />
          {' '}Operating since 2024
        </p>
      </motion.div>
    </div>
  )

  const supportingData = (
    <motion.div
      initial={{ opacity: 0, y: pxToRem(30) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.9 }}
      style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(16, 185, 129, 0.1))',
        borderRadius: '1.25rem',
        border: '2px solid rgba(59, 130, 246, 0.3)'
      }}
    >
      <h3 style={{
        fontSize: '1.3rem',
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#3b82f6'
      }}>
        Trust & Security Metrics
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem'
      }}>
        {trustMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.1 + index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.05 }}
            style={{
              textAlign: 'center',
              padding: '0.75rem',
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '0.5rem'
            }}
          >
            <motion.p
              animate={{ 
                scale: pulseAnimation && index === 0 ? [1, 1.1, 1] : 1,
                color: pulseAnimation && index === 0 ? [metric.color, '#fff', metric.color] : metric.color
              }}
              transition={{ duration: 1 }}
              style={{ 
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '0.25rem'
              }}
            >
              {metric.isNumeric ? (
                <>
                  <AnimatedCounter end={metric.value || 0} duration={2000} decimals={metric.unit === '%' ? 0 : 0} />
                  {metric.unit}
                </>
              ) : (
                metric.value
              )}
            </motion.p>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{
          marginTop: '1.5rem',
          textAlign: 'center'
        }}
      >
        <p style={{ fontSize: '1.1rem' }}>
          <span style={{ color: '#94a3b8' }}>Operating under </span>
          <GradientText gradient="from-cyan-400 to-green-400">
            IFSCA's world-class regulatory framework
          </GradientText>
        </p>
      </motion.div>
    </motion.div>
  )

  const particles = (
    <>
      {/* Security Shield Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(i * 30) * 10, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2
          }}
          style={{
            position: 'absolute',
            left: `${10 + i * 6}%`,
            top: `${20 + (i % 3) * 30}%`,
            fontSize: '0.8rem',
            color: '#10b981'
          }}
        >
          <Shield size={16} />
        </motion.div>
      ))}
      
      {/* Background Gradient */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2
        }}
      />
    </>
  )

  return (
    <DataSlideLayout
      title={
        <>
          <GradientText gradient="from-green-400 via-emerald-400 to-blue-400">
            Full Regulatory Compliance
          </GradientText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              textAlign: 'center', 
              color: '#94a3b8', 
              fontSize: '1.2rem',
              marginTop: '0.5rem'
            }}
          >
            IFSCA Licensed & Operational
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