import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { GridLayout } from '../components/StandardLayouts'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { TrendingUp, Users, DollarSign, Activity, Globe, Shield, Clock, CheckCircle, Target } from 'lucide-react'
import { pxToRem, SPACING, TYPOGRAPHY } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
import { AgentMetricsChart } from '../components/DataCharts'
import './SlideStyles.css'

export default function TractionDashboardSlide() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [liveMetrics, setLiveMetrics] = useState({
    prototypeValue: 10000000,  // $10M analyzed in prototype
    pipelineCPAs: 50,          // Real Ascendum pipeline
    integrations: 3,           // Zerodha, NSE, etc
    monthsDev: 6               // Actual development time
  })

  // Update time every second for live feel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      // Keep metrics stable (they're real, not simulated)
      setLiveMetrics(prev => prev)
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
        Prototype Validation Metrics
      </GradientText>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ display: 'flex', alignItems: 'center', gap: SPACING.xs }}
      >
        <div style={{
          width: pxToRem(8),
          height: pxToRem(8),
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

  // Grid cards for 3-column layout
  const cards = [
    // Column 1: Key Metrics
    <div key="metrics" style={{ display: 'grid', gap: pxToRem(12) }}>
      <h3 className="icon-label icon-heading" style={{ color: '#22c55e', fontSize: TYPOGRAPHY.caption, marginBottom: pxToRem(8) }}>
        <Icon type="trending" size={20} variant="inline" gradient="from-teal-400 to-green-400" />
        Performance Metrics
      </h3>
      
      {/* AUM Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(12), marginBottom: pxToRem(8) }}>
          <DollarSign size={20} color="#22c55e" />
          <span style={{ color: '#22c55e', fontSize: pxToRem(14) }}>+23.4%</span>
        </div>
        <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#22c55e', marginBottom: pxToRem(4) }}>
          {formatNumber(liveMetrics.prototypeValue)}
        </div>
        <div style={{ fontSize: TYPOGRAPHY.caption, color: '#94a3b8' }}>Portfolio Analyzed in Prototype</div>
      </motion.div>

      {/* Active Clients */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1))'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(12), marginBottom: pxToRem(8) }}>
          <Users size={20} color="#60a5fa" />
          <span style={{ color: '#60a5fa', fontSize: pxToRem(14) }}>Via Ascendum</span>
        </div>
        <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#60a5fa', marginBottom: pxToRem(4) }}>
          {liveMetrics.pipelineCPAs}
        </div>
        <div style={{ fontSize: TYPOGRAPHY.caption, color: '#94a3b8' }}>CPAs in Pipeline</div>
      </motion.div>

      {/* Daily Volume */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.1), rgba(196, 181, 253, 0.1))'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(12), marginBottom: pxToRem(8) }}>
          <Activity size={20} color="#a78bfa" />
          <span style={{ color: '#4ade80', fontSize: pxToRem(14) }}>WORKING</span>
        </div>
        <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#a78bfa', marginBottom: pxToRem(4) }}>
          {liveMetrics.integrations}
        </div>
        <div style={{ fontSize: TYPOGRAPHY.caption, color: '#94a3b8' }}>Live Integrations</div>
      </motion.div>
    </div>,

    // Column 2: Milestones & Timeline
    <div key="timeline" style={{ display: 'grid', gap: pxToRem(12) }}>
      <h3 className="icon-label icon-heading" style={{ color: '#60a5fa', fontSize: TYPOGRAPHY.caption, marginBottom: pxToRem(8) }}>
        <Icon type="rocket" size={20} variant="inline" gradient="from-orange-400 to-amber-400" />
        Execution Timeline
      </h3>
      
      <div className="glass-card" style={{ padding: pxToRem(12), display: 'grid', gap: pxToRem(8) }}>
        {[
          { date: 'Sep 2024', event: 'First Client Onboarded', status: 'completed', icon: CheckCircle },
          { date: 'Oct 2024', event: 'Zerodha Integration Live', status: 'completed', icon: CheckCircle },
          { date: 'Nov 2024', event: 'GIFT City License', status: 'active', icon: Target },
          { date: 'Dec 2024', event: '$50M AUM Target', status: 'upcoming', icon: Clock }
        ].map((milestone, index) => (
          <motion.div
            key={milestone.date}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: pxToRem(12),
              padding: pxToRem(10),
              background: milestone.status === 'active' 
                ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))'
                : 'rgba(255, 255, 255, 0.03)',
              borderRadius: pxToRem(8),
              borderLeft: `${pxToRem(3)} solid ${
                milestone.status === 'completed' ? '#22c55e' :
                milestone.status === 'active' ? '#fbbf24' : '#64748b'
              }`
            }}
          >
            <milestone.icon size={18} color={
              milestone.status === 'completed' ? '#22c55e' :
              milestone.status === 'active' ? '#fbbf24' : '#64748b'
            } />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: pxToRem(13), color: '#94a3b8', marginBottom: pxToRem(2) }}>
                {milestone.date}
              </div>
              <div style={{ fontSize: pxToRem(15), fontWeight: milestone.status === 'active' ? 'bold' : 'normal', color: '#e2e8f0' }}>
                {milestone.event}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>,

    // Column 3: Growth Metrics & Achievements
    <div key="growth" style={{ display: 'grid', gap: pxToRem(12) }}>
      <h3 style={{ color: '#a78bfa', fontSize: TYPOGRAPHY.caption, marginBottom: pxToRem(8) }}>
        <Icon type="trophy" size={20} variant="inline" gradient="from-yellow-400 to-orange-400" />
        Key Achievements
      </h3>
      
      {/* Growth Rate */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))'
        }}
      >
        <TrendingUp size={20} color="#fbbf24" style={{ marginBottom: pxToRem(8) }} />
        <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#fbbf24', marginBottom: pxToRem(4) }}>
          312%
        </div>
        <div style={{ fontSize: TYPOGRAPHY.caption, color: '#94a3b8' }}>Monthly Growth Rate</div>
      </motion.div>

      {/* Global Coverage */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(13, 148, 136, 0.1))'
        }}
      >
        <Globe size={20} color="#14b8a6" style={{ marginBottom: pxToRem(8) }} />
        <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#14b8a6', marginBottom: pxToRem(4) }}>
          12 Markets
        </div>
        <div style={{ fontSize: TYPOGRAPHY.caption, color: '#94a3b8' }}>Global Coverage</div>
      </motion.div>

      {/* Success Rate */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(248, 113, 113, 0.1))'
        }}
      >
        <Shield size={20} color="#ef4444" style={{ marginBottom: pxToRem(8) }} />
        <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#ef4444', marginBottom: pxToRem(4) }}>
          99.97%
        </div>
        <div style={{ fontSize: TYPOGRAPHY.caption, color: '#94a3b8' }}>Platform Uptime</div>
      </motion.div>
    </div>
  ]

  return (
    <GridLayout
      title={title}
      columns={3}
      cards={cards}
    />
  )
}