import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { GridLayout } from '../components/StandardLayouts'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import { TrendingUp, Users, DollarSign, Activity, Globe, Shield, Clock, CheckCircle, Target } from 'lucide-react'
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

  // Title with live indicator
  const title = (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
      <GradientText gradient="from-green-400 to-emerald-400">
        Live Traction Dashboard
      </GradientText>
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
  )

  // Grid items for 3-column layout
  const gridItems = [
    // Column 1: Key Metrics
    <div key="metrics" style={{ display: 'grid', gap: '1.5rem' }}>
      <h3 style={{ color: '#22c55e', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        📈 Performance Metrics
      </h3>
      
      {/* AUM Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <DollarSign size={28} color="#22c55e" />
          <span style={{ color: '#22c55e', fontSize: '0.9rem' }}>+23.4%</span>
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '0.5rem' }}>
          {formatNumber(liveMetrics.aum)}
        </div>
        <div style={{ fontSize: '1rem', color: '#94a3b8' }}>Assets Under Management</div>
      </motion.div>

      {/* Active Clients */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1))'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <Users size={28} color="#60a5fa" />
          <span style={{ color: '#60a5fa', fontSize: '0.9rem' }}>+7 this month</span>
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#60a5fa', marginBottom: '0.5rem' }}>
          {liveMetrics.clients}
        </div>
        <div style={{ fontSize: '1rem', color: '#94a3b8' }}>Active HNW Clients</div>
      </motion.div>

      {/* Daily Volume */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.1), rgba(196, 181, 253, 0.1))'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <Activity size={28} color="#a78bfa" />
          <span style={{ color: '#4ade80', fontSize: '0.9rem' }}>LIVE</span>
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a78bfa', marginBottom: '0.5rem' }}>
          {formatNumber(liveMetrics.dailyVolume)}
        </div>
        <div style={{ fontSize: '1rem', color: '#94a3b8' }}>Daily Trade Volume</div>
      </motion.div>
    </div>,

    // Column 2: Milestones & Timeline
    <div key="timeline" style={{ display: 'grid', gap: '1.5rem' }}>
      <h3 style={{ color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        🚀 Execution Timeline
      </h3>
      
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        {[
          { date: 'Sep 2024', event: 'First Client Onboarded', status: 'completed', icon: CheckCircle },
          { date: 'Oct 2024', event: 'Zerodha Integration Live', status: 'completed', icon: CheckCircle },
          { date: 'Nov 2024', event: 'GIFT City License', status: 'active', icon: Target },
          { date: 'Dec 2024', event: '$50M AUM Target', status: 'upcoming', icon: Clock },
          { date: 'Q1 2025', event: 'US Market Entry', status: 'upcoming', icon: Clock },
          { date: 'Q2 2025', event: 'Series A Raise', status: 'upcoming', icon: Clock }
        ].map((milestone, index) => (
          <motion.div
            key={milestone.date}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              background: milestone.status === 'active' 
                ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))'
                : 'rgba(255, 255, 255, 0.03)',
              borderRadius: '8px',
              borderLeft: `3px solid ${
                milestone.status === 'completed' ? '#22c55e' :
                milestone.status === 'active' ? '#fbbf24' : '#64748b'
              }`
            }}
          >
            <milestone.icon size={20} color={
              milestone.status === 'completed' ? '#22c55e' :
              milestone.status === 'active' ? '#fbbf24' : '#64748b'
            } />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                {milestone.date}
              </div>
              <div style={{ fontSize: '1rem', fontWeight: milestone.status === 'active' ? 'bold' : 'normal', color: '#e2e8f0' }}>
                {milestone.event}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>,

    // Column 3: Growth Metrics & Achievements
    <div key="growth" style={{ display: 'grid', gap: '1.5rem' }}>
      <h3 style={{ color: '#a78bfa', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        🏆 Key Achievements
      </h3>
      
      {/* Growth Rate */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))'
        }}
      >
        <TrendingUp size={28} color="#fbbf24" style={{ marginBottom: '1rem' }} />
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '0.5rem' }}>
          312%
        </div>
        <div style={{ fontSize: '1rem', color: '#94a3b8' }}>Monthly Growth Rate</div>
      </motion.div>

      {/* Global Coverage */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(13, 148, 136, 0.1))'
        }}
      >
        <Globe size={28} color="#14b8a6" style={{ marginBottom: '1rem' }} />
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>
          12 Markets
        </div>
        <div style={{ fontSize: '1rem', color: '#94a3b8' }}>Global Coverage</div>
      </motion.div>

      {/* Success Rate */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(248, 113, 113, 0.1))'
        }}
      >
        <Shield size={28} color="#ef4444" style={{ marginBottom: '1rem' }} />
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444', marginBottom: '0.5rem' }}>
          99.97%
        </div>
        <div style={{ fontSize: '1rem', color: '#94a3b8' }}>Platform Uptime</div>
      </motion.div>

      {/* Active Sessions */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(244, 114, 182, 0.1))'
        }}
      >
        <Activity size={28} color="#ec4899" style={{ marginBottom: '1rem' }} />
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ec4899', marginBottom: '0.5rem' }}>
          {liveMetrics.activeSessions}
        </div>
        <div style={{ fontSize: '1rem', color: '#94a3b8' }}>Active Sessions Now</div>
      </motion.div>
    </div>
  ]

  return (
    <GridLayout
      title={title}
      columns={3}
      gridItems={gridItems}
      gap="2rem"
    />
  )
}