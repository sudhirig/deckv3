import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Mic, LayoutDashboard, Bot, Clock, Globe, Shield, TrendingUp, Sparkles, MessageSquare, Brain, Volume2, Zap } from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function ZerodhaFeaturesSlide() {
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [voiceWaveAnimation, setVoiceWaveAnimation] = useState(true)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  
  useEffect(() => {
    const voiceInterval = setInterval(() => {
      setVoiceWaveAnimation(prev => !prev)
    }, 2000)
    
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 3000)
    
    return () => {
      clearInterval(voiceInterval)
      clearInterval(pulseInterval)
    }
  }, [])
  
  const title = (
    <GradientText gradient="from-orange-400 via-amber-400 to-yellow-400">
      Zerodha Features & Capabilities
    </GradientText>
  )
  
  const subtitle = "Transform Your Trading Experience with Voice AI"
  
  const particles = (
    <>
      
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 30%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)'
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />
    </>
  )
  
  const summary = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        marginBottom: '2rem',
        maxWidth: '56.25rem',
        margin: '0 auto 2rem'
      }}
    >
      {[
        { value: 11, label: 'Response', unit: 'ms', color: '#f97316', icon: Zap },
        { value: 3, label: 'Languages', unit: '', color: '#3b82f6', icon: Globe },
        { value: 100, label: 'Accuracy', unit: '%', color: '#10b981', icon: Shield },
        { value: 24, label: 'Availability', unit: '/7', color: '#a855f7', icon: Clock }
      ].map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
          whileHover={{ scale: 1.05, y: -5 }}
          style={{
            padding: '1rem',
            background: `linear-gradient(135deg, ${metric.color}20, rgba(255, 255, 255, 0.02))`,
            backdropFilter: 'blur(1.25rem)',
            borderRadius: '1rem',
            border: `0.125rem solid ${metric.color}30`,
            textAlign: 'center',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          <motion.div
            animate={{ 
              scale: pulseAnimation && index === 0 ? [1, 1.2, 1] : 1,
              rotate: pulseAnimation && index === 0 ? [0, 5, -5, 0] : 0
            }}
            transition={{ duration: 1 }}
            style={{ marginBottom: '0.5rem' }}
          >
            <metric.icon size={24} color={metric.color} />
          </motion.div>
          
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            style={{ fontSize: '1.8rem', fontWeight: 'bold', color: metric.color }}
          >
            <AnimatedCounter value={metric.value} duration={1500} />{metric.unit}
          </motion.div>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{metric.label}</p>
        </motion.div>
      ))}
    </motion.div>
  )
  
  const cards = [
    <motion.div
      key="voice"
      initial={{ opacity: 0, x: -30, rotateY: -15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.7, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      onHoverStart={() => setHoveredFeature('voice')}
      onHoverEnd={() => setHoveredFeature(null)}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(249, 115, 22, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      <div style={{
        position: 'absolute',
        top: '1.25rem',
        right: '1.25rem',
        display: 'flex',
        gap: '0.1875rem'
      }}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              height: voiceWaveAnimation ? [10, 25, 10] : 10,
              opacity: hoveredFeature === 'voice' ? 1 : 0.5
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              repeat: Infinity
            }}
            style={{
              width: '0.1875rem',
              background: 'linear-gradient(to top, #f97316, #fbbf24)',
              borderRadius: '0.125rem'
            }}
          />
        ))}
      </div>
      
      <AnimatePresence>
        {hoveredFeature === 'voice' && (
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              top: '-1.25rem',
              left: '-1.25rem',
              right: '-1.25rem',
              bottom: '-1.25rem',
              background: 'radial-gradient(circle, rgba(249, 115, 22, 0.3), transparent)',
              borderRadius: '1.5rem',
              filter: 'blur(1.25rem)',
              zIndex: -1
            }}
          />
        )}
      </AnimatePresence>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <motion.div
          animate={{ rotate: pulseAnimation ? 360 : 0 }}
          transition={{ duration: 2 }}
        >
          <Mic size={32} color="#f97316" />
        </motion.div>
        <h3 style={{ fontSize: '1.4rem', color: '#f97316', marginLeft: '1rem' }}>
          Voice Trading 3.0
        </h3>
      </div>
      
      {[
        { title: 'Multi-Language Support', desc: 'English, Hindi, Tamil', icon: Globe },
        { title: 'Natural Commands', desc: '"Buy 100 shares of Reliance"', icon: MessageSquare },
        { title: 'Ultra-Low Latency', desc: '11ms response time', icon: Clock },
        { title: 'Voice Confirmation', desc: 'Audio feedback on execution', icon: Volume2 }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 + index * 0.1 }}
          whileHover={{ x: 10, backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem',
            borderLeft: '0.1875rem solid #f97316',
            marginBottom: '0.75rem',
            borderRadius: '0 0.5rem 0.5rem 0',
            transition: 'all 0.3s ease'
          }}
        >
          <div>
            <p style={{ fontWeight: '600', fontSize: '0.95rem', color: '#e2e8f0' }}>
              {item.title}
            </p>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              {item.desc}
            </p>
          </div>
          <motion.div
            animate={{ scale: hoveredFeature === 'voice' ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <item.icon size={20} color="#f97316" />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>,
    
    <motion.div
      key="dashboard"
      initial={{ opacity: 0, x: 30, rotateY: 15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.8, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      onHoverStart={() => setHoveredFeature('dashboard')}
      onHoverEnd={() => setHoveredFeature(null)}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(59, 130, 246, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      <motion.div
        animate={{ 
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '-1.25rem',
          left: '-1.25rem',
          width: '7.5rem',
          height: '7.5rem',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)',
          borderRadius: '50%',
          filter: 'blur(1.25rem)'
        }}
      />
      
      <AnimatePresence>
        {hoveredFeature === 'dashboard' && (
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              top: '-1.25rem',
              left: '-1.25rem',
              right: '-1.25rem',
              bottom: '-1.25rem',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
              borderRadius: '1.5rem',
              filter: 'blur(1.25rem)',
              zIndex: -1
            }}
          />
        )}
      </AnimatePresence>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <motion.div
          animate={{ y: pulseAnimation ? [0, -5, 0] : 0 }}
          transition={{ duration: 1 }}
        >
          <LayoutDashboard size={32} color="#3b82f6" />
        </motion.div>
        <h3 style={{ fontSize: '1.4rem', color: '#3b82f6', marginLeft: '1rem' }}>
          Living Dashboard
        </h3>
      </div>
      
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
          transition={{ delay: 1.0 + index * 0.1 }}
          whileHover={{ x: -10, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem',
            borderLeft: '0.1875rem solid #3b82f6',
            marginBottom: '0.75rem',
            borderRadius: '0 0.5rem 0.5rem 0',
            transition: 'all 0.3s ease'
          }}
        >
          <div>
            <p style={{ fontWeight: '600', fontSize: '0.95rem', color: '#e2e8f0' }}>
              {item.title}
            </p>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              {item.desc}
            </p>
          </div>
          <motion.div
            animate={{ rotate: hoveredFeature === 'dashboard' ? 360 : 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <item.icon size={20} color="#3b82f6" />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>,
    
    <motion.div
      key="magic"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.1, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      onHoverStart={() => setHoveredFeature('magic')}
      onHoverEnd={() => setHoveredFeature(null)}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(168, 85, 247, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {hoveredFeature === 'magic' && (
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity }
          }}
          style={{
            position: 'absolute',
            top: '-1.875rem',
            left: '-1.875rem',
            right: '-1.875rem',
            bottom: '-1.875rem',
            background: 'conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.2), transparent)',
            borderRadius: '1.5rem',
            filter: 'blur(1.25rem)',
            zIndex: -1
          }}
        />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Bot size={32} color="#a855f7" />
        <h3 style={{ fontSize: '1.4rem', color: '#a855f7', marginLeft: '1rem' }}>
          Magic Actions
        </h3>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{ marginLeft: 'auto' }}
        >
          <Sparkles size={24} color="#a855f7" />
        </motion.div>
      </div>
      
      {[
        'Auto Stop-Loss placement',
        'Bracket order optimization',
        'Position sizing AI',
        'Exit strategy suggestions',
        'Tax-loss harvesting'
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3 + index * 0.08 }}
          whileHover={{ 
            x: 5,
            color: '#a855f7',
            paddingLeft: '1rem'
          }}
          style={{
            fontSize: '0.95rem',
            marginBottom: '0.6rem',
            color: '#e2e8f0',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <motion.span
            animate={{ 
              scale: hoveredFeature === 'magic' ? [1, 1.5, 1] : 1
            }}
            transition={{ duration: 1, delay: index * 0.1 }}
            style={{ color: '#a855f7' }}
          >
            •
          </motion.span>
          {item}
        </motion.div>
      ))}
    </motion.div>,
    
    <motion.div
      key="speed"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      onHoverStart={() => setHoveredFeature('speed')}
      onHoverEnd={() => setHoveredFeature(null)}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(16, 185, 129, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      <AnimatePresence>
        {hoveredFeature === 'speed' && (
          <>
            <motion.div
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                top: '-1.25rem',
                left: '-1.25rem',
                right: '-1.25rem',
                bottom: '-1.25rem',
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent)',
                borderRadius: '1.5rem',
                filter: 'blur(1.25rem)',
                zIndex: -1
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: ['-100%', '200%']
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                left: '50%',
                width: '0.125rem',
                height: '6.25rem',
                background: 'linear-gradient(to bottom, transparent, #10b981, transparent)',
                filter: 'blur(0.125rem)',
                zIndex: -1
              }}
            />
          </>
        )}
      </AnimatePresence>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Clock size={32} color="#10b981" />
        <h3 style={{ fontSize: '1.4rem', color: '#10b981', marginLeft: '1rem' }}>
          Speed & Scale
        </h3>
      </div>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem'
      }}>
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
            transition={{ delay: 1.4 + index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
            style={{
              textAlign: 'center',
              padding: '0.75rem',
              background: `${stat.color}15`,
              borderRadius: '0.75rem',
              border: `0.0625rem solid ${stat.color}30`
            }}
          >
            <motion.p
              animate={{ 
                scale: hoveredFeature === 'speed' ? [1, 1.1, 1] : 1
              }}
              transition={{ duration: 1, delay: index * 0.1 }}
              style={{ 
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: stat.color
              }}
            >
              {stat.value}{stat.unit}
            </motion.p>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  ]
  
  return (
    <GridLayout
      title={title}
      subtitle={subtitle}
      cards={cards}
      columns={2}
      summary={summary}
      particles={particles}
    />
  )
}
