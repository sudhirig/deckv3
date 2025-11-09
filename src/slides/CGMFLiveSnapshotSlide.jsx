import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import { Camera, Calculator, TrendingUp, Award, PiggyBank, Shield, Target, CheckCircle, DollarSign, Percent } from 'lucide-react'
import './SlideStyles.css'

const CGMFLiveSnapshotSlide = () => {
  const [animateMetrics, setAnimateMetrics] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 500)
    return () => clearTimeout(timer)
  }, [])
  
  // Sample data for charts
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
  
  return (
    <div className="slide-content" style={{ position: 'relative' }}>
      <ParticleBackground count={45} color="#4caf50" />
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 50%, rgba(76, 175, 80, 0.12) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(0, 188, 212, 0.1) 0%, transparent 50%)',
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
            <GradientText gradient="from-green-400 via-teal-400 to-cyan-400">
              CGMF Unified Fund Platform
            </GradientText>
          </h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Camera className="w-5 h-5 text-red-500" />
              <span style={{ fontSize: '1rem', color: '#ef4444' }}>LIVE</span>
            </motion.div>
            <span style={{ fontSize: '1rem', color: '#94a3b8', marginLeft: '1rem' }}>
              Managing 16,766 Active Funds
            </span>
          </motion.div>
        </motion.div>

        {/* Hero Metrics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
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
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-card"
              style={{
                padding: '1rem',
                textAlign: 'center',
                background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}08 100%)`,
                border: `1px solid ${item.color}30`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                  opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(45deg, transparent 30%, ${item.color}20 50%, transparent 70%)`,
                  backgroundSize: '200% 200%',
                  zIndex: 0
                }}
              />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <item.icon className="w-5 h-5 mx-auto mb-2" style={{ color: item.color }} />
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: item.color }}>
                  {item.prefix}<AnimatedCounter end={item.value} decimals={item.decimals || 0} duration={1500} />{item.suffix}
                </div>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Left Side - Fund Recommendations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(103, 58, 183, 0.05) 100%)',
              border: '1px solid rgba(156, 39, 176, 0.3)',
              position: 'relative'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', color: '#9c27b0', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <Award className="w-5 h-5 mr-2" />
              Top ELSS Recommendations
            </h3>
            
            <BarChart data={fundScoreData} height={120} colorScheme="gradient" animated={animateMetrics} />
            
            {/* Tax Optimization Summary with Glow Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                marginTop: '1.5rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.15) 0%, rgba(33, 150, 243, 0.1) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(76, 175, 80, 0.3)',
                position: 'relative'
              }}
            >
              {/* Animated Glow */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  inset: -2,
                  background: 'linear-gradient(135deg, #4caf50, #2196f3)',
                  borderRadius: '12px',
                  filter: 'blur(10px)',
                  zIndex: -1
                }}
              />
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Section 80C Used</p>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4caf50' }}>
                    ₹<AnimatedCounter end={1.5} decimals={1} duration={1500} />L
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Annual Savings</p>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00bcd4' }}>
                    ₹<AnimatedCounter end={1.55} decimals={2} duration={1500} />L
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)',
              border: '1px solid rgba(0, 188, 212, 0.3)'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', color: '#00bcd4', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <TrendingUp className="w-5 h-5 mr-2" />
              6-Year Performance Trend
            </h3>
            
            <LineChart data={returnsData} height={120} animated={animateMetrics} />
            
            {/* AI Agent Status with Pulse Animation */}
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
                { name: 'Goal Agent', status: 'Active', color: '#4caf50' },
                { name: 'Tax Agent', status: 'Active', color: '#2196f3' },
                { name: 'Risk Agent', status: 'Analyzing', color: '#9c27b0' }
              ].map((agent, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    textAlign: 'center',
                    padding: '0.75rem',
                    background: `${agent.color}15`,
                    borderRadius: '8px',
                    border: `1px solid ${agent.color}30`
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: agent.color,
                      margin: '0 auto 0.5rem'
                    }}
                  />
                  <p style={{ fontSize: '0.75rem', color: agent.color, fontWeight: 'bold' }}>{agent.name}</p>
                  <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{agent.status}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Portfolio Summary with Cinematic Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="glass-card"
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(156, 39, 176, 0.05) 100%)',
            border: '1px solid rgba(20, 184, 166, 0.3)'
          }}
        >
          <h3 style={{ fontSize: '1rem', color: '#14b8a6', marginBottom: '1rem' }}>
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
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.label}</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: item.color }}>{item.value}</p>
                <p style={{ fontSize: '0.7rem', color: item.color, opacity: 0.8 }}>{item.trend}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer with Platform Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ textAlign: 'center', marginTop: '2rem' }}
        >
          <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
            Live Platform: <span style={{ color: '#00bcd4' }}>app.voraventures.ai/cgmf</span>
            <span style={{ color: '#4caf50', marginLeft: '1rem' }}>✓ Real AMC Data</span>
            <span style={{ color: '#9c27b0', marginLeft: '1rem' }}>✓ AI-Powered</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CGMFLiveSnapshotSlide