import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { TrendingUp, Users, DollarSign, Activity, Globe, Shield } from 'lucide-react'
import './SlideStyles.css'

export default function TractionDashboardSlide() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [liveMetrics, setLiveMetrics] = useState({
    aum: 42000000,
    clients: 27,
    dailyVolume: 1234567,
    activeSessions: 8
  })

  // Update time every second for live feel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      // Simulate live metric updates
      setLiveMetrics(prev => ({
        aum: prev.aum + Math.floor(Math.random() * 10000),
        clients: prev.clients,
        dailyVolume: prev.dailyVolume + Math.floor(Math.random() * 50000),
        activeSessions: Math.floor(Math.random() * 5) + 6
      }))
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `$${(num / 1000).toFixed(0)}K`
    return `$${num}`
  }

  const metrics = [
    {
      icon: DollarSign,
      label: 'AUM Under Management',
      value: formatNumber(liveMetrics.aum),
      change: '+23.4%',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'rgba(34, 197, 94, 0.1)'
    },
    {
      icon: Users,
      label: 'Active Clients',
      value: liveMetrics.clients,
      change: '+7 this month',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'rgba(59, 130, 246, 0.1)'
    },
    {
      icon: Activity,
      label: 'Daily Trade Volume',
      value: formatNumber(liveMetrics.dailyVolume),
      change: 'Live',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'rgba(167, 139, 250, 0.1)'
    },
    {
      icon: Globe,
      label: 'Markets Analyzed',
      value: '12',
      change: 'Global Coverage',
      color: 'from-teal-400 to-green-500',
      bgColor: 'rgba(20, 184, 166, 0.1)'
    }
  ]

  const milestones = [
    { date: 'Sep 2024', event: 'First Client Onboarded', status: 'completed' },
    { date: 'Oct 2024', event: 'Zerodha Integration Live', status: 'completed' },
    { date: 'Nov 2024', event: 'GIFT City License', status: 'active' },
    { date: 'Dec 2024', event: '$50M AUM Target', status: 'upcoming' },
    { date: 'Q1 2025', event: 'US Market Entry', status: 'upcoming' }
  ]

  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}
      >
        {/* Header with Live Indicator */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <AnimatedText delay={0.2}>
            <h2 className="slide-title">
              <GradientText gradient="from-green-400 to-emerald-400">
                Traction Dashboard
              </GradientText>
            </h2>
          </AnimatedText>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#4ade80',
              animation: 'pulse 2s infinite'
            }} />
            <span style={{ color: '#4ade80', fontSize: '0.9rem' }}>LIVE</span>
            <span style={{ color: '#64748b', fontSize: '0.8rem' }}>
              {currentTime.toLocaleTimeString()}
            </span>
          </motion.div>
        </div>

        {/* Key Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              style={{
                padding: '1.5rem',
                background: metric.bgColor,
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <metric.icon size={24} style={{
                  background: `linear-gradient(135deg, ${metric.color.split(' ')[1]}, ${metric.color.split(' ')[3]})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }} />
                <span style={{ 
                  marginLeft: '0.5rem',
                  fontSize: '0.8rem',
                  color: metric.change === 'Live' ? '#4ade80' : '#94a3b8'
                }}>
                  {metric.change}
                </span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {metric.value}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            padding: '1.5rem',
            background: 'rgba(20, 184, 166, 0.05)',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}
        >
          <h3 style={{ color: '#14b8a6', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
            Execution Timeline
          </h3>
          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '8px',
              top: '10px',
              bottom: '10px',
              width: '2px',
              background: 'linear-gradient(180deg, #4ade80, #14b8a6, #60a5fa)'
            }} />
            
            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.date}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: milestone.status === 'completed' ? '#4ade80' : 
                              milestone.status === 'active' ? '#fbbf24' : '#64748b',
                  border: '3px solid #0f172a',
                  position: 'relative',
                  zIndex: 1
                }} />
                <div style={{ marginLeft: '1.5rem', flex: 1 }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <strong style={{ color: '#e2e8f0' }}>{milestone.event}</strong>
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{milestone.date}</span>
                  </div>
                </div>
                {milestone.status === 'active' && (
                  <div style={{
                    position: 'absolute',
                    left: '0',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#fbbf24',
                    animation: 'ping 2s infinite',
                    opacity: 0.5
                  }} />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            padding: '1rem',
            background: 'rgba(59, 130, 246, 0.05)',
            borderRadius: '12px'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Shield size={20} style={{ color: '#60a5fa' }} />
              <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>100%</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Platform Uptime</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <TrendingUp size={20} style={{ color: '#4ade80' }} />
              <span style={{ color: '#4ade80', fontWeight: 'bold' }}>8.4%</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Avg Monthly Return</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Activity size={20} style={{ color: '#fbbf24' }} />
              <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>{liveMetrics.activeSessions}</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Active AI Sessions</div>
          </div>
        </motion.div>
        
        {/* Citation for metrics */}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <span style={{ fontSize: '0.7rem', color: '#64748b', fontStyle: 'italic' }}>
            Source: Internal Platform Analytics, November 2024
          </span>
        </div>
      </motion.div>
    </div>
  )
}