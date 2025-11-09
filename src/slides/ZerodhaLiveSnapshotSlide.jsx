import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import { Camera, Activity, TrendingUp, Bot, Mic, Globe, Clock, CheckCircle, DollarSign, Percent, Headphones } from 'lucide-react'
import './SlideStyles.css'

const ZerodhaLiveSnapshotSlide = () => {
  const [animateMetrics, setAnimateMetrics] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 500)
    return () => clearTimeout(timer)
  }, [])
  
  // Sample data for charts
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
    { label: 'Gujarati', value: 20, displayValue: '20%' }
  ]
  
  return (
    <div className="slide-content" style={{ position: 'relative' }}>
      <ParticleBackground count={40} color="#ff7043" />
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 30% 70%, rgba(255, 112, 67, 0.1) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(156, 39, 176, 0.08) 0%, transparent 50%)',
        zIndex: 0
      }} />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="glass-card"
        style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Header with Live Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="slide-title">
            <GradientText gradient="from-orange-400 via-purple-400 to-pink-400">
              Zerodha Voice Trading Platform
            </GradientText>
          </h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center mb-4"
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
              Real Trading Session in Progress
            </span>
          </motion.div>
        </motion.div>

        {/* Top Metrics Row with Glass Cards */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1rem', marginBottom: '2rem' }}
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
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-card"
              style={{
                padding: '1rem',
                textAlign: 'center',
                background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}08 100%)`,
                border: `1px solid ${item.color}30`
              }}
            >
              <item.icon className="w-5 h-5 mx-auto mb-2" style={{ color: item.color }} />
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: item.color }}>
                {item.prefix}<AnimatedCounter end={item.value} decimals={item.decimals || 0} duration={1500} />{item.suffix}
              </div>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Left Side - Live Voice Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(103, 58, 183, 0.05) 100%)',
              border: '1px solid rgba(156, 39, 176, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Background Pulse */}
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
                background: 'radial-gradient(circle, rgba(156, 39, 176, 0.2) 0%, transparent 70%)',
                transform: 'translate(-50%, -50%)',
                zIndex: 0
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#9c27b0', display: 'flex', alignItems: 'center' }}>
                  <Bot className="w-5 h-5 mr-2" />
                  ARIA Voice Assistant
                </h3>
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4caf50', marginRight: '0.5rem' }} />
                  <span style={{ fontSize: '0.875rem', color: '#4caf50' }}>Live</span>
                </motion.div>
              </div>
              
              {/* Voice Commands Log with Glass Effect */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '1.5rem',
                fontFamily: 'monospace',
                fontSize: '0.875rem'
              }}>
                {[
                  { delay: 0.8, icon: '🎤', text: '"रिलायंस के 100 शेयर खरीदो"', color: '#ff9800' },
                  { delay: 0.9, icon: '🤖', text: 'Processing Hindi command...', color: '#9c27b0' },
                  { delay: 1.0, icon: '✅', text: 'BUY 100 RELIANCE @ ₹2,456', color: '#4caf50' },
                  { delay: 1.1, icon: '⏱️', text: 'Execution: 11ms', color: '#ffc107' }
                ].map((cmd, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: cmd.delay }}
                    style={{ marginBottom: '0.5rem', color: cmd.color }}
                  >
                    {cmd.icon} {cmd.text}
                  </motion.div>
                ))}
              </div>
              
              {/* Language Distribution */}
              <div>
                <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1rem' }}>
                  Language Usage Today
                </p>
                <BarChart data={languageData} height={80} colorScheme="gradient" animated={animateMetrics} />
              </div>
              
              {/* Voice Wave Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '4px' }}
              >
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [20, 40, 20] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                    style={{
                      width: '4px',
                      background: `linear-gradient(to top, #9c27b0, #ff7043)`,
                      borderRadius: '2px'
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Performance Charts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)',
              border: '1px solid rgba(0, 188, 212, 0.3)',
              position: 'relative'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', color: '#00bcd4', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <TrendingUp className="w-5 h-5 mr-2" />
              Today's P&L Performance
            </h3>
            
            <LineChart data={performanceData} height={120} animated={animateMetrics} />
            
            {/* Performance Stats */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '1rem', 
              marginTop: '1.5rem',
              padding: '1rem',
              background: 'rgba(0, 188, 212, 0.1)',
              borderRadius: '12px'
            }}>
              <div>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Best Trade</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#4caf50' }}>+₹3,450</p>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Avg Response</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#9c27b0' }}>11ms</p>
              </div>
            </div>
            
            {/* Success Rate Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}
            >
              <CircularProgress value={87} size={80} strokeWidth={8} />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Features Grid with Cinematic Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '2rem' }}
        >
          {[
            { icon: Globe, title: 'Multi-Language', desc: 'Hindi, English, Gujarati', color: '#2196f3' },
            { icon: Activity, title: 'Real-time Analysis', desc: 'Technical + Sentiment', color: '#9c27b0' },
            { icon: CheckCircle, title: '100% Accurate', desc: 'Voice Recognition', color: '#4caf50' },
            { icon: Clock, title: 'Ultra-Low Latency', desc: '11ms Response', color: '#ff7043' }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              className="glass-card"
              style={{
                padding: '1rem',
                textAlign: 'center',
                background: `linear-gradient(135deg, ${item.color}10 0%, ${item.color}05 100%)`,
                border: `1px solid ${item.color}25`
              }}
            >
              <item.icon className="w-6 h-6 mx-auto mb-2" style={{ color: item.color }} />
              <p style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#fff' }}>{item.title}</p>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer with Live URL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          style={{ textAlign: 'center', marginTop: '2rem' }}
        >
          <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
            Live Platform: <span style={{ color: '#00bcd4' }}>app.voraventures.ai/zerodha</span>
            <span style={{ color: '#4caf50', marginLeft: '1rem' }}>✓ Real Trading</span>
            <span style={{ color: '#9c27b0', marginLeft: '1rem' }}>✓ Voice Enabled</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ZerodhaLiveSnapshotSlide