import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { HeroLayout } from '../components/StandardLayouts'
import { Code2, Cpu, BarChart3, Zap, TrendingUp, Activity, GitBranch, Sparkles, MessageSquare } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

const AlgoTradingConceptSlide = () => {
  const title = (
    <GradientText gradient="from-cyan-400 via-blue-400 to-purple-400">
      Chapter 6: Algo Trading Laboratory
    </GradientText>
  )

  const subtitle = "Natural Language to Trading Strategy"

  const backgroundVisual = (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.12) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.08) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(249, 115, 22, 0.06) 0%, transparent 50%)',
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="glass-card"
        style={{
          marginBottom: '2rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
            zIndex: 0
          }}
        />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontSize: '1.3rem', color: '#06b6d4', textAlign: 'center', marginBottom: '2rem' }}>
            <Sparkles className="w-5 h-5 inline mr-2" />
            From Words to Wealth
            <Sparkles className="w-5 h-5 inline ml-2" />
          </h3>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {[
              { emoji: '💬', title: 'Natural Language', desc: '"Buy on RSI oversold"', color: '#3b82f6', icon: MessageSquare },
              { icon: Code2, title: 'AI Translation', desc: 'Strategy code', color: '#a855f7' },
              { icon: BarChart3, title: 'Backtest', desc: '5-year history', color: '#f97316' },
              { icon: Zap, title: 'Deploy', desc: 'Live trading', color: '#10b981' }
            ].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.15, type: 'spring' }}
                  style={{ textAlign: 'center' }}
                >
                  <motion.div
                    animate={{ 
                      y: [-5, 5, -5],
                      rotate: index === 1 ? [0, 360] : 0
                    }}
                    transition={{ 
                      y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                      rotate: { duration: 10, repeat: Infinity, ease: 'linear' }
                    }}
                    style={{
                      width: '4.375rem',
                      height: '4.375rem',
                      background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem',
                      border: `2px solid ${step.color}50`
                    }}
                  >
                    {step.emoji ? (
                      <span style={{ fontSize: '1.8rem' }}>{step.emoji}</span>
                    ) : (
                      <step.icon className="w-8 h-8" style={{ color: step.color }} />
                    )}
                  </motion.div>
                  
                  <p style={{ fontSize: '0.9rem', fontWeight: '600', color: step.color }}>{step.title}</p>
                  <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{step.desc}</p>
                </motion.div>
                
                {index < 3 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                    style={{ color: '#06b6d4', fontSize: '1.5rem' }}
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
          transition={{ delay: 1, duration: 0.6 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            initial={{ opacity: 0.05 }}
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                linear-gradient(0deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '1.25rem 1.25rem',
              zIndex: 0
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Cpu className="w-7 h-7 text-purple-400 mr-3" />
              <h3 style={{ fontSize: '1.2rem', color: '#a855f7' }}>
                <AnimatedCounter end={122} duration={2000} />+ Indicators
              </h3>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{ marginLeft: 'auto' }}
              >
                <Activity className="w-5 h-5 text-purple-400" />
              </motion.div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {[
                'RSI, MACD', 'Bollinger Bands',
                'Moving Averages', 'Fibonacci',
                'Volume Profile', 'Market Structure',
                'Options Flow', 'Custom Indicators'
              ].map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.05 }}
                  whileHover={{ x: 5, color: '#a855f7' }}
                  style={{
                    fontSize: '0.8rem',
                    padding: '0.25rem',
                    color: '#e2e8f0'
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    style={{ color: '#a855f7', marginRight: '0.5rem' }}
                  >
                    •
                  </motion.span>
                  {indicator}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <BarChart3 className="w-7 h-7 text-green-400 mr-3" />
            <h3 style={{ fontSize: '1.2rem', color: '#10b981' }}>Optimization Engine</h3>
          </div>
          
          <div style={{ space: 'y-3' }}>
            {[
              { label: 'Parameter Tuning', value: 'AI-powered', color: '#10b981', progress: 95 },
              { label: 'Walk-Forward', value: '5 years', color: '#3b82f6', progress: 100 },
              { label: 'Monte Carlo', value: '1000 runs', color: '#a855f7', progress: 85 },
              { label: 'Risk Management', value: 'Adaptive', color: '#f97316', progress: 90 }
            ].map((opt, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                style={{ marginBottom: '1rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{opt.label}:</span>
                  <motion.span
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                    style={{ fontSize: '0.9rem', fontWeight: 'bold', color: opt.color }}
                  >
                    {opt.value}
                  </motion.span>
                </div>
                <div style={{ height: '0.25rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '0.125rem', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${opt.progress}%` }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.8 }}
                    style={{
                      height: '100%',
                      background: opt.color,
                      boxShadow: `0 0 0.625rem ${opt.color}50`
                    }}
                  />
                </div>
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
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%)',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          position: 'relative'
        }}
      >
        <h4 style={{ fontSize: '1.2rem', color: '#fbbf24', textAlign: 'center', marginBottom: '1.5rem' }}>
          Live Performance Metrics
        </h4>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {[
            { metric: 'Win Rate', value: 68, unit: '%', color: '#10b981', icon: TrendingUp },
            { metric: 'Sharpe', value: 2.4, unit: '', color: '#3b82f6', icon: Activity },
            { metric: 'Max DD', value: 12, unit: '%', color: '#ef4444', icon: BarChart3 },
            { metric: 'ROI Annual', value: 127, unit: '%', color: '#fbbf24', icon: GitBranch }
          ].map((perf, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.9 + index * 0.1, type: 'spring' }}
              style={{ textAlign: 'center' }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '3.125rem',
                  height: '3.125rem',
                  background: `${perf.color}20`,
                  borderRadius: '0.75rem',
                  marginBottom: '0.5rem'
                }}
              >
                <perf.icon className="w-6 h-6" style={{ color: perf.color }} />
              </motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                style={{ fontSize: '1.5rem', fontWeight: 'bold', color: perf.color }}
              >
                <AnimatedCounter end={perf.value} duration={2000} decimals={perf.metric === 'Sharpe' ? 1 : 0} />{perf.unit}
              </motion.div>
              <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{perf.metric}</p>
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
      backgroundVisual={backgroundVisual}
      overlayContent={overlayContent}
    />
  )
}

export default AlgoTradingConceptSlide
