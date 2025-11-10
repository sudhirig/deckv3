import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import { Activity, TrendingUp, Users, DollarSign, Globe, Shield, Clock, CheckCircle, BarChart3, Zap, Award } from 'lucide-react'
import { pxToRem, SPACING } from '../utils/responsive'
import './SlideStyles.css'

const LiveMetricsDashboardSlide = () => {
  const [animateMetrics, setAnimateMetrics] = useState(false)
  const [liveUpdate, setLiveUpdate] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 500)
    return () => clearTimeout(timer)
  }, [])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUpdate(prev => prev + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  
  const uptimeData = [
    { label: 'Mon', value: 99.98, displayValue: '99.98%' },
    { label: 'Tue', value: 99.99, displayValue: '99.99%' },
    { label: 'Wed', value: 100, displayValue: '100%' },
    { label: 'Thu', value: 99.97, displayValue: '99.97%' },
    { label: 'Fri', value: 100, displayValue: '100%' },
    { label: 'Sat', value: 99.98, displayValue: '99.98%' },
    { label: 'Sun', value: 100, displayValue: '100%' }
  ]
  
  const userActivityData = [
    { label: '6AM', value: 2500, displayValue: '2.5K' },
    { label: '9AM', value: 8200, displayValue: '8.2K' },
    { label: '12PM', value: 10247, displayValue: '10.2K' },
    { label: '3PM', value: 9800, displayValue: '9.8K' },
    { label: '6PM', value: 6500, displayValue: '6.5K' },
    { label: '9PM', value: 3200, displayValue: '3.2K' }
  ]
  
  const performanceData = [
    { label: 'Returns', value: 28.5, displayValue: '28.5%' },
    { label: 'Win Rate', value: 87, displayValue: '87%' },
    { label: 'Tax Saved', value: 95, displayValue: '95%' },
    { label: 'Accuracy', value: 99, displayValue: '99%' }
  ]

  const mainVisual = (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.12) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.08) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
      zIndex: 0
    }} />
  )

  const keyInsights = (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        {[
          { icon: DollarSign, label: 'AUM Growth', value: 250, prefix: '$', suffix: 'M', color: '#10b981', pulse: true, live: true },
          { icon: Users, label: 'Client Retention', value: 97, suffix: '%', color: '#3b82f6', pulse: true, live: true },
          { icon: Award, label: 'NPS Score', value: 72, suffix: '+', color: '#fbbf24', breathing: true },
          { icon: Activity, label: 'Uptime', value: 99.97, decimals: 2, suffix: '%', color: '#14b8a6', pulse: true },
          { icon: Zap, label: 'Response', value: 11, suffix: 'ms', color: '#a78bfa', breathing: true },
          { icon: Shield, label: 'AI Agents', value: 68, suffix: '+', color: '#ef4444', breathing: true }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -0.3125 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="glass-card"
            style={{
              padding: '1rem',
              textAlign: 'center',
              background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}08 100%)`,
              border: `0.0625rem solid ${item.color}30`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {item.pulse && (
              <motion.div
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: item.color,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0
                }}
              />
            )}
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                animate={item.breathing ? { 
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.8, 1]
                } : {}}
                transition={item.breathing ? {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                } : {}}
              >
                <item.icon className="w-5 h-5 mx-auto mb-2" style={{ color: item.color }} />
              </motion.div>
              {item.live && (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    top: pxToRem(-5),
                    right: pxToRem(-5),
                    width: pxToRem(8),
                    height: pxToRem(8),
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: `0 0 ${pxToRem(10)} #10b981`
                  }}
                />
              )}
              <motion.div 
                style={{ fontSize: '1.5rem', fontWeight: 'bold', color: item.color }}
                animate={item.breathing ? {
                  scale: [1, 1.02, 1]
                } : {}}
                transition={item.breathing ? {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                } : {}}
              >
                {item.prefix}<AnimatedCounter end={item.value} decimals={item.decimals || 0} duration={1500} />{item.suffix}
              </motion.div>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
            border: '0.0625rem solid rgba(16, 185, 129, 0.3)',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem', color: '#10b981', display: 'flex', alignItems: 'center' }}>
              <Activity className="w-4 h-4 mr-2" />
              Platform Health
            </h3>
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
            >
              <div style={{ width: '0.375rem', height: '0.375rem', borderRadius: '50%', background: '#10b981' }} />
              <span style={{ fontSize: '0.75rem', color: '#10b981' }}>Live</span>
            </motion.div>
          </div>
          
          <LineChart data={uptimeData} height={100} animated={animateMetrics} />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACING.sm, marginTop: SPACING.sm }}>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>API Response</p>
              <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#10b981' }}>11ms avg</p>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Workflows</p>
              <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>127 active</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: SPACING.sm }}>
            <CircularProgress value={99.97} size={35} strokeWidth={3} />
            <CircularProgress value={100} size={35} strokeWidth={3} />
            <CircularProgress value={95} size={35} strokeWidth={3} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
            border: '0.0625rem solid rgba(59, 130, 246, 0.3)',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem', color: '#3b82f6', display: 'flex', alignItems: 'center' }}>
              <Users className="w-4 h-4 mr-2" />
              User Activity
            </h3>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Today</span>
          </div>
          
          <LineChart data={userActivityData} height={100} animated={animateMetrics} />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACING.sm, marginTop: SPACING.sm }}>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Voice Commands</p>
              <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#f59e0b' }}>127K today</p>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Peak Users</p>
              <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>10.2K @ 12PM</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
            border: '0.0625rem solid rgba(168, 85, 247, 0.3)',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem', color: '#a855f7', display: 'flex', alignItems: 'center' }}>
              <TrendingUp className="w-4 h-4 mr-2" />
              Performance
            </h3>
            <span style={{ fontSize: '0.75rem', color: '#10b981' }}>▲ +5.2%</span>
          </div>
          
          <BarChart data={performanceData} height={100} colorScheme="gradient" animated={animateMetrics} />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACING.sm, marginTop: SPACING.sm }}>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Tax Saved/User</p>
              <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#10b981' }}>₹1.55L avg</p>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Algo Accuracy</p>
              <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#a855f7' }}>94.5%</p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{ marginTop: '1rem', textAlign: 'center' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                borderRadius: '1.25rem',
                border: '0.0625rem solid rgba(168, 85, 247, 0.3)'
              }}
            >
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span style={{ fontSize: '0.875rem', color: '#10b981' }}>
                All Systems Optimal
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )

  const supportingData = (
    <>
      <motion.div
        initial={{ opacity: 0, y: 1.25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="glass-card"
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
          border: '0.0625rem solid rgba(14, 165, 233, 0.3)'
        }}
      >
        <h3 style={{ fontSize: '1rem', color: '#0ea5e9', marginBottom: '1rem' }}>
          Live Activity Feed
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {[
            { time: '12:45:23', action: 'Voice Trade Executed', value: '₹2.4L', status: 'success' },
            { time: '12:45:21', action: 'Tax Loss Harvested', value: '₹15K saved', status: 'warning' },
            { time: '12:45:19', action: 'Portfolio Rebalanced', value: '12 positions', status: 'info' },
            { time: '12:45:17', action: 'AI Consensus Reached', value: '4 agents', status: 'success' }
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -1.25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              style={{
                padding: '0.75rem',
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '0.5rem',
                borderLeft: `0.1875rem solid ${
                  activity.status === 'success' ? '#10b981' :
                  activity.status === 'warning' ? '#fbbf24' : '#0ea5e9'
                }`
              }}
            >
              <p style={{ fontSize: '0.7rem', color: '#64748b' }}>{activity.time}</p>
              <p style={{ fontSize: '0.875rem', color: '#e2e8f0', marginTop: '0.25rem' }}>
                {activity.action}
              </p>
              <p style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#0ea5e9', marginTop: '0.25rem' }}>
                {activity.value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          marginTop: '2rem',
          padding: '1rem',
          background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
          borderRadius: '0.75rem',
          border: '0.0625rem solid rgba(16, 185, 129, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div style={{ display: 'flex', gap: '2rem' }}>
          {[
            { label: 'Servers', value: '12/12', color: '#10b981' },
            { label: 'Databases', value: '4/4', color: '#3b82f6' },
            { label: 'APIs', value: '27/27', color: '#a855f7' },
            { label: 'CDN Status', value: 'Global', color: '#06b6d4' }
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{stat.label}</p>
              <p style={{ fontSize: '1rem', fontWeight: 'bold', color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>
        
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            padding: '0.5rem 1rem',
            background: 'linear-gradient(135deg, #10b981, #06b6d4)',
            borderRadius: '1.25rem'
          }}
        >
          <span style={{ fontSize: '0.875rem', color: '#fff', fontWeight: 'bold' }}>
            FULLY OPERATIONAL
          </span>
        </motion.div>
      </motion.div>
    </>
  )


  return (
    <DataSlideLayout
      title={
        <>
          <GradientText gradient="from-cyan-400 via-blue-400 to-purple-400">Live Platform Metrics Dashboard</GradientText>
          <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
              Real-time Performance & System Health
            </p>
            <motion.div
              key={liveUpdate}
              initial={{ opacity: 0, y: -0.625 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '1.25rem', border: '0.0625rem solid rgba(16, 185, 129, 0.3)' }}
            >
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: '#10b981' }}
              />
              <span style={{ fontSize: '0.85rem', color: '#10b981' }}>Updated in real-time</span>
            </motion.div>
          </div>
        </>
      }
      mainVisual={mainVisual}
      keyInsights={keyInsights}
      supportingData={supportingData}
    />
  )
}

export default LiveMetricsDashboardSlide
