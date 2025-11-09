import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import CircularProgress from '../components/CircularProgress'
import { GraduationCap, QrCode, TrendingUp, Award, BarChart3 } from 'lucide-react'
import './SlideStyles.css'

export default function StanfordSlide() {
  const [barHeight, setBarHeight] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setBarHeight(600)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])
  
  const validationSources = [
    { institution: 'McKinsey', stat: 'AI generates $400B+ value annually' },
    { institution: 'JPMorgan', stat: 'ML drives 35% of revenue' },
    { institution: 'Goldman Sachs', stat: 'AI could raise GDP by 7%' }
  ]
  
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card large"
        style={{ padding: '2rem' }}
      >
        {/* Header with Stanford Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring' }}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8B0000, #DC143C)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(139, 0, 0, 0.5)'
            }}
          >
            <GraduationCap size={32} color="#fff" />
          </motion.div>
          
          <h2 className="slide-title">
            <GradientText gradient="from-blue-400 to-cyan-400">
              AI is the New Alpha
            </GradientText>
          </h2>
        </div>
        
        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '3rem' }}>
          {/* Left: Enhanced Circular Progress */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            >
              <CircularProgress 
                value={93} 
                size={200} 
                strokeWidth={12} 
                color="#14b8a6"
                label="Fund Managers Outperformed"
                delay={0.5}
              />
            </motion.div>
            
            {/* Animated Bar Chart Below Circle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              style={{ marginTop: '2rem', width: '200px' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-end', height: '120px', gap: '10px' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <motion.div
                    style={{
                      width: '60px',
                      background: 'linear-gradient(180deg, #64748b, #475569)',
                      borderRadius: '4px 4px 0 0',
                      position: 'relative'
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: '40px' }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    <div style={{ position: 'absolute', top: '-25px', width: '100%', textAlign: 'center', fontSize: '0.9rem', color: '#94a3b8' }}>
                      100%
                    </div>
                  </motion.div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>Human</span>
                </div>
                
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <motion.div
                    style={{
                      width: '60px',
                      background: 'linear-gradient(180deg, #14b8a6, #0d9488)',
                      borderRadius: '4px 4px 0 0',
                      position: 'relative'
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: '100px' }}
                    transition={{ delay: 1.8, duration: 1.2 }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.8 }}
                      style={{ position: 'absolute', top: '-25px', width: '100%', textAlign: 'center' }}
                    >
                      <AnimatedCounter 
                        end={600} 
                        duration={1500} 
                        suffix="%" 
                        style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#14b8a6' }}
                      />
                    </motion.div>
                  </motion.div>
                  <span style={{ fontSize: '0.75rem', color: '#14b8a6', marginTop: '4px' }}>AI</span>
                </div>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'center', marginTop: '0.5rem' }}>
                Outperformance Potential
              </p>
            </motion.div>
          </div>
          
          {/* Right: Content & Validation */}
          <motion.div 
            style={{ flex: 1, maxWidth: '500px' }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <AnimatedText delay={2}>
              <div style={{ fontSize: '1.5rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                AI can outperform <strong style={{ color: '#14b8a6' }}>93% of fund managers</strong> by analyzing public data
              </div>
            </AnimatedText>
            
            {/* Additional Validation Sources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '1rem'
              }}
            >
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.75rem', fontWeight: 'bold' }}>
                Supporting Research:
              </p>
              {validationSources.map((source, index) => (
                <motion.div
                  key={source.institution}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.7 + index * 0.1 }}
                  style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.3rem' }}
                >
                  <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>{source.institution}:</span> {source.stat}
                </motion.div>
              ))}
            </motion.div>
            
            {/* Main Source with QR Code */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.5rem',
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(20, 184, 166, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(20, 184, 166, 0.3)'
              }}
            >
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '1rem', color: '#94a3b8' }}>
                  <strong style={{ color: '#60a5fa' }}>Primary Source:</strong>
                </p>
                <p style={{ fontSize: '0.9rem', color: '#e2e8f0', marginTop: '0.25rem' }}>
                  Stanford University Study, 2024
                </p>
                <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                  "AI-Powered Portfolio Management"
                </p>
              </div>
              
              {/* QR Code */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  width: '60px',
                  height: '60px',
                  background: '#fff',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <QrCode size={40} color="#000" />
              </motion.div>
            </motion.div>
            
            <AnimatedText delay={3.5}>
              <p style={{ fontSize: '0.95rem', color: '#14b8a6', marginTop: '1rem', fontStyle: 'italic', fontWeight: 'bold' }}>
                This is not theoretical. This is happening now.
              </p>
            </AnimatedText>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
