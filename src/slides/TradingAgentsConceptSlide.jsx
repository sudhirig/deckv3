import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import { HeroLayout } from '../components/StandardLayouts'
import { Users, Brain, Award, TrendingUp, DollarSign, BarChart2, Star, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

const TradingAgentsConceptSlide = () => {
  const title = (
    <GradientText gradient="from-yellow-400 via-amber-400 to-orange-400">
      Chapter 5: Trading Agents + Hedge Fund
    </GradientText>
  )

  const subtitle = "30 Legendary Investors in Your Pocket"

  const backgroundVisual = (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 60%), radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.06) 0%, transparent 50%)',
      zIndex: 0
    }} />
  )

  const overlayContent = (
    <motion.div
      initial={{ opacity: 0, y: 3.125 }}
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
          textAlign: 'center',
          marginBottom: '2rem',
          padding: '1rem',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)',
          borderRadius: '1.25rem'
        }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [-2, 2, -2]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2rem'
          }}
        >
          <div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}
            >
              <AnimatedCounter end={12} duration={2} />
            </motion.div>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Investment Committee</p>
          </div>
          <Star className="w-8 h-8 text-yellow-400" />
          <div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a855f7' }}
            >
              <AnimatedCounter end={18} duration={2} />
            </motion.div>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Hedge Fund Team</p>
          </div>
        </motion.div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 60%)',
              zIndex: 0
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Award className="w-7 h-7 text-yellow-400 mr-3" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                <GradientText gradient="from-yellow-400 to-amber-400">Investment Committee (12)</GradientText>
              </h3>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { name: 'Warren Buffett AI', style: 'Value investing', color: '#3b82f6' },
                { name: 'Peter Lynch AI', style: 'Growth stocks', color: '#10b981' },
                { name: 'Ray Dalio AI', style: 'Risk parity', color: '#a855f7' },
                { name: 'George Soros AI', style: 'Macro trends', color: '#f97316' },
                { name: 'Benjamin Graham AI', style: 'Deep value', color: '#14b8a6' },
                { name: 'Carl Icahn AI', style: 'Activist', color: '#ef4444' }
              ].map((investor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05, type: 'spring' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{
                    padding: '0.5rem',
                    background: `${investor.color}10`,
                    borderRadius: '0.375rem',
                    border: `1px solid ${investor.color}30`
                  }}
                >
                  <p style={{ fontSize: '0.75rem', fontWeight: '600', color: investor.color }}>
                    {investor.name}
                  </p>
                  <p style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{investor.style}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            initial={{ 
              scale: 1,
              opacity: 0.1
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{
              position: 'absolute',
              bottom: '-30%',
              left: '-30%',
              width: '150%',
              height: '150%',
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 60%)',
              zIndex: 0
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Brain className="w-7 h-7 text-purple-400 mr-3" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                <GradientText gradient="from-purple-400 to-pink-400">Hedge Fund Team (18)</GradientText>
              </h3>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { name: 'Cathie Wood AI', style: 'Disruptive tech', color: '#ec4899' },
                { name: 'Jim Simons AI', style: 'Quant strategies', color: '#fbbf24' },
                { name: 'Paul Tudor Jones AI', style: 'Technical analysis', color: '#06b6d4' },
                { name: 'Stanley Druckenmiller AI', style: 'Currency plays', color: '#6366f1' },
                { name: 'Bill Ackman AI', style: 'Special situations', color: '#84cc16' },
                { name: 'David Tepper AI', style: 'Distressed debt', color: '#f87171' }
              ].map((investor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.05, type: 'spring' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{
                    padding: '0.5rem',
                    background: `${investor.color}10`,
                    borderRadius: '0.375rem',
                    border: `1px solid ${investor.color}30`
                  }}
                >
                  <p style={{ fontSize: '0.75rem', fontWeight: '600', color: investor.color }}>
                    {investor.name}
                  </p>
                  <p style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{investor.style}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="glass-card"
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          position: 'relative'
        }}
      >
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: pxToRem(-2),
            background: 'linear-gradient(45deg, #fbbf24, #a855f7, #ec4899, #fbbf24)',
            backgroundSize: '300% 300%',
            borderRadius: '1rem',
            opacity: 0.2,
            filter: 'blur(0.25rem)',
            zIndex: -1
          }}
        />
        
        <h4 style={{ fontSize: '1.2rem', color: '#e2e8f0', textAlign: 'center', marginBottom: '1.5rem' }}>
          Dual-Team Analysis Process
        </h4>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {[
            { iconType: 'barChart', iconGradient: 'from-blue-400 to-cyan-400', title: 'Stock Selection', desc: 'User picks stock', color: '#3b82f6' },
            { iconType: 'building', iconGradient: 'from-orange-400 to-amber-400', title: 'Committee Analysis', desc: '12 experts evaluate', color: '#fbbf24' },
            { iconType: 'building', iconGradient: 'from-purple-400 to-pink-400', title: 'Hedge Fund View', desc: '18 traders analyze', color: '#a855f7' },
            { iconType: 'target', iconGradient: 'from-teal-400 to-green-400', title: 'Consensus Result', desc: 'Dual-team verdict', color: '#10b981' }
          ].map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1, type: 'spring' }}
                style={{ textAlign: 'center' }}
              >
                <motion.div
                  animate={{ 
                    y: [-3, 3, -3],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                    rotate: { duration: 3, repeat: Infinity }
                  }}
                  style={{ marginBottom: '0.5rem' }}
                >
                  <Icon type={step.iconType} size={28} variant="inline" gradient={step.iconGradient} />
                </motion.div>
                <p style={{ fontSize: '0.8rem', fontWeight: '600', color: step.color }}>{step.title}</p>
                <p style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{step.desc}</p>
              </motion.div>
              
              {index < 3 && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ color: '#fbbf24' }}
                >
                  →
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          style={{
            marginTop: '1.5rem',
            padding: '0.75rem',
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '0.5rem',
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          {[
            { metric: 'Accuracy', value: '87%', color: '#10b981' },
            { metric: 'Response', value: '15s', color: '#3b82f6' },
            { metric: 'Coverage', value: '500 stocks', color: '#fbbf24' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              style={{ textAlign: 'center' }}
            >
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                style={{ fontSize: '1.2rem', fontWeight: 'bold', color: stat.color }}
              >
                {stat.value}
              </motion.p>
              <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{stat.metric}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )

  return (
    <HeroLayout
      title={title}
      subtitle={subtitle}
      backgroundVisual={backgroundVisual}
      overlayContent={overlayContent}
    />
  )
}

export default TradingAgentsConceptSlide
