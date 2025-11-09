import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
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
  
  // Title with Stanford badge
  const title = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, type: 'spring' }}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #8B0000, #DC143C)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 30px rgba(139, 0, 0, 0.5)'
        }}
      >
        <GraduationCap size={28} color="#fff" />
      </motion.div>
      <GradientText gradient="from-blue-400 to-cyan-400">
        AI is the New Alpha: Stanford Study
      </GradientText>
    </div>
  )

  // Main visual with circular progress and bar chart
  const mainVisual = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
      {/* Large Circular Progress */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      >
        <CircularProgress 
          value={93} 
          size={220} 
          strokeWidth={14} 
          color="#14b8a6"
          label="AI Outperforms"
          delay={0.5}
        />
      </motion.div>
      
      {/* Bar Chart Comparison */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        style={{ flex: 1 }}
      >
        <h3 style={{ color: '#14b8a6', marginBottom: '1rem', fontSize: '1.2rem' }}>
          Performance Comparison
        </h3>
        <div style={{ display: 'flex', alignItems: 'flex-end', height: '180px', gap: '20px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
              style={{
                width: '80px',
                background: 'linear-gradient(180deg, #64748b, #475569)',
                borderRadius: '4px 4px 0 0',
                position: 'relative'
              }}
              initial={{ height: 0 }}
              animate={{ height: '60px' }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div style={{ position: 'absolute', top: '-30px', width: '100%', textAlign: 'center', fontSize: '1.1rem', color: '#94a3b8' }}>
                100%
              </div>
            </motion.div>
            <span style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '8px' }}>Human Fund Managers</span>
          </div>
          
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
              style={{
                width: '80px',
                background: 'linear-gradient(180deg, #14b8a6, #0d9488)',
                borderRadius: '4px 4px 0 0',
                position: 'relative'
              }}
              initial={{ height: 0 }}
              animate={{ height: '150px' }}
              transition={{ delay: 1.8, duration: 1.2 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
                style={{ position: 'absolute', top: '-30px', width: '100%', textAlign: 'center' }}
              >
                <AnimatedCounter 
                  end={600} 
                  suffix="%" 
                  style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#14b8a6' }}
                  delay={2.8}
                />
              </motion.div>
            </motion.div>
            <span style={{ fontSize: '0.9rem', color: '#14b8a6', marginTop: '8px' }}>AI-Powered Portfolios</span>
          </div>
        </div>
      </motion.div>
    </div>
  )

  // Key insights
  const keyInsights = (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="glass-card"
        style={{ padding: '1.5rem' }}
      >
        <h3 style={{ color: '#14b8a6', marginBottom: '1rem', fontSize: '1.2rem' }}>
          📊 Stanford Research Findings
        </h3>
        <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: '#e2e8f0' }}>
          <li>• 93% of AI-managed portfolios beat human managers</li>
          <li>• Average outperformance: <span style={{ color: '#14b8a6', fontWeight: 'bold' }}>+5.4% annually</span></li>
          <li>• 6x improvement in risk-adjusted returns</li>
          <li>• Study period: 10 years (2013-2023)</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem'
        }}
      >
        <div className="metric-card" style={{ background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(34, 197, 94, 0.1))' }}>
          <TrendingUp size={24} color="#14b8a6" />
          <div style={{ marginTop: '0.5rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#14b8a6' }}>24/7</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Market Monitoring</div>
          </div>
        </div>

        <div className="metric-card" style={{ background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))' }}>
          <Award size={24} color="#fbbf24" />
          <div style={{ marginTop: '0.5rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>11ms</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Response Time</div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  // Supporting data
  const supportingData = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
      style={{ marginTop: '2rem' }}
    >
      <h4 style={{ color: '#60a5fa', marginBottom: '1rem', fontSize: '1rem' }}>
        Industry Validation
      </h4>
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {validationSources.map((source, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.7 + index * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '8px',
              borderLeft: '3px solid #60a5fa'
            }}
          >
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <BarChart3 size={20} color="#60a5fa" />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#60a5fa' }}>{source.institution}</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{source.stat}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  // Citation
  const citation = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
      style={{
        marginTop: '1.5rem',
        padding: '1rem',
        background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(220, 20, 60, 0.05))',
        borderRadius: '8px',
        borderLeft: '3px solid #DC143C'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <GraduationCap size={16} color="#DC143C" />
        <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#DC143C' }}>Stanford Study Citation</span>
      </div>
      <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic' }}>
        "Machine Learning in Asset Management: Evidence from Mutual Fund Performance" 
        - Stanford Graduate School of Business, 2023
      </div>
    </motion.div>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
      keyInsights={keyInsights}
      supportingData={supportingData}
      citation={citation}
    />
  )
}