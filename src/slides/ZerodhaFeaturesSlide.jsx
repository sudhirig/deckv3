import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { Mic, LayoutDashboard, Bot, Clock, Globe, Shield, TrendingUp, Sparkles, MessageSquare, Brain } from 'lucide-react'
import './SlideStyles.css'

const ZerodhaFeaturesSlide = () => {
  return (
    <div className="slide-content" style={{ position: 'relative' }}>
      <ParticleBackground count={50} color="#fb923c" />
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 30% 30%, rgba(251, 146, 60, 0.1) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
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
            <GradientText gradient="from-orange-400 via-amber-400 to-yellow-400">
              Zerodha Features & Capabilities
            </GradientText>
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Transform Your Trading Experience
          </p>
        </motion.div>

        {/* Performance Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            marginBottom: '2rem'
          }}
        >
          {[
            { value: 11, label: 'Response', unit: 'ms', color: '#f97316' },
            { value: 3, label: 'Languages', unit: '', color: '#3b82f6' },
            { value: 100, label: 'Accuracy', unit: '%', color: '#10b981' },
            { value: 24, label: 'Availability', unit: '/7', color: '#a855f7' }
          ].map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-card"
              style={{
                padding: '1rem',
                textAlign: 'center',
                background: `linear-gradient(135deg, ${metric.color}15 0%, ${metric.color}08 100%)`,
                border: `1px solid ${metric.color}30`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: '1.8rem', fontWeight: 'bold', color: metric.color }}
              >
                <AnimatedCounter end={metric.value} duration={1500} />{metric.unit}
              </motion.div>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {/* Voice Trading 3.0 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(251, 146, 60, 0.05) 100%)',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Sound Waves */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '2px solid rgba(249, 115, 22, 0.3)'
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Mic className="w-7 h-7 text-orange-400 mr-3" />
                <h3 style={{ fontSize: '1.3rem', color: '#f97316' }}>Voice Trading 3.0</h3>
              </div>
              
              <div style={{ space: 'y-3' }}>
                {[
                  { title: 'Multi-Language Support', desc: 'English, Hindi, Tamil', icon: Globe },
                  { title: 'Natural Commands', desc: '"Buy 100 shares of Reliance"', icon: MessageSquare },
                  { title: 'Ultra-Low Latency', desc: '11ms response time', icon: Clock },
                  { title: 'Voice Confirmation', desc: 'Audio feedback on execution', icon: Shield }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    style={{
                      borderLeft: '3px solid #f97316',
                      paddingLeft: '1rem',
                      marginBottom: '1rem',
                      padding: '0.5rem 0 0.5rem 1rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <p style={{ fontWeight: '600', fontSize: '0.9rem', color: '#e2e8f0' }}>{item.title}</p>
                        <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.desc}</p>
                      </div>
                      <item.icon className="w-4 h-4 text-orange-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Living Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Pulse Animation */}
            <motion.div
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                borderRadius: '50%'
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <LayoutDashboard className="w-7 h-7 text-blue-400 mr-3" />
                <h3 style={{ fontSize: '1.3rem', color: '#3b82f6' }}>Living Dashboard</h3>
              </div>
              
              <div style={{ space: 'y-3' }}>
                {[
                  { title: 'Real-Time P&L', desc: 'Live profit tracking', icon: TrendingUp },
                  { title: 'AI Recommendations', desc: 'Contextual suggestions', icon: Brain },
                  { title: 'Risk Monitoring', desc: 'Automatic alerts', icon: Shield },
                  { title: 'Market Pulse', desc: 'Sector heat maps', icon: Sparkles }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ x: -5 }}
                    style={{
                      borderLeft: '3px solid #3b82f6',
                      paddingLeft: '1rem',
                      marginBottom: '1rem',
                      padding: '0.5rem 0 0.5rem 1rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <p style={{ fontWeight: '600', fontSize: '0.9rem', color: '#e2e8f0' }}>{item.title}</p>
                        <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.desc}</p>
                      </div>
                      <item.icon className="w-4 h-4 text-blue-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Magic Actions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Bot className="w-7 h-7 text-purple-400 mr-3" />
              <h3 style={{ fontSize: '1.3rem', color: '#a855f7' }}>Magic Actions</h3>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ marginLeft: 'auto' }}
              >
                <Sparkles className="w-5 h-5 text-purple-400" />
              </motion.div>
            </div>
            
            <AnimatedText delay={1.1}>
              <div style={{ space: 'y-2' }}>
                {[
                  'Auto Stop-Loss placement',
                  'Bracket order optimization',
                  'Position sizing AI',
                  'Exit strategy suggestions',
                  'Tax-loss harvesting'
                ].map((item, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.05 }}
                    whileHover={{ x: 5, color: '#a855f7' }}
                    style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: '#e2e8f0' }}
                  >
                    • {item}
                  </motion.p>
                ))}
              </div>
            </AnimatedText>
          </motion.div>

          {/* Speed & Scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Clock className="w-7 h-7 text-green-400 mr-3" />
              <h3 style={{ fontSize: '1.3rem', color: '#10b981' }}>Speed & Scale</h3>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { value: 11, label: 'Response', unit: 'ms', color: '#10b981' },
                { value: 5000, label: 'Trades/sec', unit: '', color: '#14b8a6' },
                { value: 99.9, label: 'Uptime', unit: '%', color: '#06b6d4' },
                { value: 3, label: 'Languages', unit: '', color: '#0891b2' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    textAlign: 'center',
                    padding: '0.75rem',
                    background: `${stat.color}10`,
                    borderRadius: '8px',
                    border: `1px solid ${stat.color}30`
                  }}
                >
                  <motion.p
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ fontSize: '1.5rem', fontWeight: 'bold', color: stat.color }}
                  >
                    {stat.value}{stat.unit}
                  </motion.p>
                  <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default ZerodhaFeaturesSlide