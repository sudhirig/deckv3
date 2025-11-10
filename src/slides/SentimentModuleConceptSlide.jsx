import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { HeroLayout } from '../components/StandardLayouts'
import { Globe, Brain, MessageSquare, Activity, TrendingUp, BarChart2, Newspaper, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

const SentimentModuleConceptSlide = () => {
  const title = (
    <GradientText gradient="from-blue-400 via-indigo-400 to-purple-400">
      Chapter 7: Sentiment Intelligence Module
    </GradientText>
  )

  const subtitle = "182+ News Sources, 500+ Stocks, Real-time Analysis"

  const particles = <ParticleBackground count={50} color="#3b82f6" />

  const backgroundVisual = (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 60% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 60%), radial-gradient(circle at 20% 60%, rgba(168, 85, 247, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)',
      zIndex: 0
    }} />
  )

  const overlayContent = (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="glass-card"
      style={{ position: 'relative', zIndex: 1, maxWidth: '75rem', margin: '0 auto' }}
    >
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
          { value: 182, label: 'News Sources', unit: '+', color: '#3b82f6', icon: Globe },
          { value: 50000, label: 'Articles/Day', unit: '+', color: '#a855f7', icon: Newspaper },
          { value: 2, label: 'Processing', unit: 's', color: '#10b981', icon: Brain },
          { value: 94.3, label: 'Accuracy', unit: '%', color: '#f59e0b', icon: Activity }
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.05 }}
            className="glass-card"
            style={{
              padding: '0.75rem',
              textAlign: 'center',
              background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}08 100%)`,
              border: `1px solid ${stat.color}30`
            }}
          >
            <stat.icon className="w-4 h-4 mx-auto mb-1" style={{ color: stat.color }} />
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              style={{ fontSize: '1.3rem', fontWeight: 'bold', color: stat.color }}
            >
              <AnimatedCounter end={stat.value} duration={2000} decimals={stat.value < 100 ? 1 : 0} />{stat.unit}
            </motion.div>
            <p style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="glass-card"
        style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          animate={{ x: [-100, 1300] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            height: pxToRem(2),
            width: '6.25rem',
            background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
            zIndex: 0
          }}
        />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontSize: '1.3rem', color: '#3b82f6', textAlign: 'center', marginBottom: '1.5rem' }}>
            News to Alpha Pipeline
          </h3>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {[
              { icon: Globe, title: '182+ Sources', desc: 'Global coverage', color: '#3b82f6' },
              { icon: Brain, title: 'FinBERT AI', desc: 'NLP processing', color: '#a855f7' },
              { icon: Activity, title: 'Sentiment Score', desc: '-100 to +100', color: '#10b981' },
              { emoji: '🔥', title: 'Heat Map', desc: 'Visual insights', color: '#f59e0b' }
            ].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                  style={{ textAlign: 'center' }}
                >
                  <motion.div
                    animate={{ 
                      y: [-3, 3, -3],
                      rotate: step.icon && index === 1 ? 360 : 0
                    }}
                    transition={{ 
                      y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                      rotate: { duration: 10, repeat: Infinity, ease: 'linear' }
                    }}
                    style={{
                      width: '3.75rem',
                      height: '3.75rem',
                      background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.5rem',
                      border: `2px solid ${step.color}50`
                    }}
                  >
                    {step.emoji ? (
                      <span style={{ fontSize: '1.5rem' }}>{step.emoji}</span>
                    ) : (
                      <step.icon className="w-7 h-7" style={{ color: step.color }} />
                    )}
                  </motion.div>
                  <p style={{ fontSize: '0.9rem', fontWeight: '600', color: step.color }}>{step.title}</p>
                  <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{step.desc}</p>
                </motion.div>
                
                {index < 3 && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{ color: '#3b82f6', fontSize: '1.2rem' }}
                  >
                    →
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <Globe className="w-7 h-7 text-blue-400 mr-3" />
            <h4 style={{ fontSize: '1.2rem', color: '#3b82f6' }}>News Sources</h4>
            <Sparkles className="w-5 h-5 text-blue-400 ml-auto" />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {[
              'Bloomberg', 'Reuters', 'CNBC', 'WSJ',
              'Economic Times', 'Moneycontrol', 'Twitter/X', 'Reddit',
              '+174 more'
            ].map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + index * 0.03 }}
                whileHover={{ x: 3, color: '#3b82f6' }}
                style={{
                  fontSize: '0.8rem',
                  padding: '0.25rem',
                  color: '#e2e8f0',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                  style={{ color: '#3b82f6', marginRight: '0.5rem' }}
                >
                  •
                </motion.span>
                {source}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <Brain className="w-7 h-7 text-purple-400 mr-3" />
            <h4 style={{ fontSize: '1.2rem', color: '#a855f7' }}>FinBERT Processing</h4>
          </div>
          
          <div style={{ space: 'y-3' }}>
            {[
              { label: 'Articles/Day', value: '50,000+', color: '#a855f7' },
              { label: 'Processing Time', value: '< 2 sec', color: '#10b981' },
              { label: 'Languages', value: '12', color: '#3b82f6' },
              { label: 'Accuracy', value: '94.3%', color: '#14b8a6' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.5rem',
                  marginBottom: '0.5rem',
                  background: `${stat.color}10`,
                  borderRadius: '0.375rem',
                  border: `1px solid ${stat.color}30`
                }}
              >
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{stat.label}:</span>
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                  style={{ fontSize: '0.9rem', fontWeight: 'bold', color: stat.color }}
                >
                  {stat.value}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        className="glass-card"
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
          border: '1px solid rgba(16, 185, 129, 0.3)'
        }}
      >
        <h4 style={{ fontSize: '1.2rem', color: '#e2e8f0', textAlign: 'center', marginBottom: '1.5rem' }}>
          Nifty 500 Coverage - Live Sentiment
        </h4>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}>
          {[
            { sector: 'IT', sentiment: 67, color: '#10b981' },
            { sector: 'Banking', sentiment: 23, color: '#3b82f6' },
            { sector: 'Auto', sentiment: -15, color: '#ef4444' },
            { sector: 'Pharma', sentiment: 45, color: '#14b8a6' },
            { sector: 'Energy', sentiment: -8, color: '#f59e0b' }
          ].map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 + index * 0.1, type: 'spring' }}
              style={{ textAlign: 'center' }}
            >
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>{sector.sector}</p>
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  height: '3.75rem',
                  background: `linear-gradient(to top, ${sector.color}40, ${sector.color}10)`,
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${sector.color}50`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  animate={{ y: [60, 60 - Math.abs(sector.sentiment) * 0.6] }}
                  transition={{ delay: 2.1 + index * 0.1, duration: 0.8 }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: sector.color,
                    opacity: 0.3
                  }}
                />
                <span style={{ 
                  fontSize: '1rem', 
                  fontWeight: 'bold', 
                  color: sector.color,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sector.sentiment > 0 ? '+' : ''}{sector.sentiment}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <HeroLayout
      title={title}
      subtitle={subtitle}
      particles={particles}
      backgroundVisual={backgroundVisual}
      overlayContent={overlayContent}
    />
  )
}

export default SentimentModuleConceptSlide
