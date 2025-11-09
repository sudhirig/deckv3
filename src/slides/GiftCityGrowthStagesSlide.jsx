import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { Rocket, Target, Trophy, TrendingUp, Users, Globe, DollarSign, Star } from 'lucide-react'
import './SlideStyles.css'

const GiftCityGrowthStagesSlide = () => {
  return (
    <div className="slide-content" style={{ position: 'relative' }}>
      <ParticleBackground count={50} color="#f59e0b" />
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)',
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
            <GradientText gradient="from-amber-400 via-orange-400 to-yellow-400">
              30-Month Growth Journey
            </GradientText>
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            From $3M to $250M: The GIFT City Advantage
          </p>
        </motion.div>

        {/* Animated Progress Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            position: 'relative',
            height: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            marginBottom: '3rem',
            overflow: 'hidden'
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 2, ease: 'easeInOut' }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #3b82f6, #10b981, #f59e0b)',
              borderRadius: '4px',
              boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)'
            }}
          />
          
          {/* Timeline Markers */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '0%',
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#3b82f6',
              border: '3px solid #0a0a0a'
            }}
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#10b981',
              border: '3px solid #0a0a0a'
            }}
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.6 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '100%',
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#f59e0b',
              border: '3px solid #0a0a0a'
            }}
          />
        </motion.div>

        {/* Growth Stages Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {/* Stage 1: Foundation */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Stage Number with Glow */}
            <motion.div
              animate={{ 
                boxShadow: ['0 0 20px rgba(59, 130, 246, 0.5)', '0 0 40px rgba(59, 130, 246, 0.8)', '0 0 20px rgba(59, 130, 246, 0.5)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>1</span>
              </div>
              <Rocket className="w-7 h-7 text-blue-400" />
            </motion.div>
            
            <h3 style={{ fontSize: '1.3rem', color: '#3b82f6', marginBottom: '0.5rem' }}>
              Stage 1: Foundation
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1rem' }}>
              Months 1-10
            </p>
            
            {/* Metrics with Animation */}
            <div style={{ space: 'y-2', marginBottom: '1rem' }}>
              {[
                { label: 'AUM Target', value: '$3M', icon: DollarSign },
                { label: 'Investors', value: '50 HNIs', icon: Users },
                { label: 'Focus', value: 'India markets', icon: Target }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.5rem',
                    background: 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '6px',
                    marginBottom: '0.5rem'
                  }}
                >
                  <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{item.label}</span>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#3b82f6', marginRight: '0.5rem' }}>
                      {item.value}
                    </span>
                    <item.icon className="w-4 h-4 text-blue-400" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Milestones */}
            <div style={{
              paddingTop: '1rem',
              borderTop: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                Key Milestones:
              </p>
              <AnimatedText delay={1}>
                <ul style={{ fontSize: '0.75rem', color: '#e2e8f0', space: 'y-1' }}>
                  <li>• IFSCA license secured</li>
                  <li>• Platform operational</li>
                  <li>• First 50 clients onboarded</li>
                </ul>
              </AnimatedText>
            </div>
            
            {/* Progress Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}
            >
              <CircularProgress value={33} size={50} strokeWidth={4} />
            </motion.div>
          </motion.div>

          {/* Stage 2: Scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Stage Number with Pulse */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #10b981, #14b8a6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>2</span>
              </div>
              <Target className="w-7 h-7 text-green-400" />
            </motion.div>
            
            <h3 style={{ fontSize: '1.3rem', color: '#10b981', marginBottom: '0.5rem' }}>
              Stage 2: Scale
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1rem' }}>
              Months 11-20
            </p>
            
            {/* Metrics */}
            <div style={{ space: 'y-2', marginBottom: '1rem' }}>
              {[
                { label: 'AUM Target', value: '$20-100M', icon: TrendingUp },
                { label: 'Investors', value: '200 Global', icon: Globe },
                { label: 'Focus', value: 'Asia expansion', icon: Target }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.5rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '6px',
                    marginBottom: '0.5rem'
                  }}
                >
                  <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{item.label}</span>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#10b981', marginRight: '0.5rem' }}>
                      {item.value}
                    </span>
                    <item.icon className="w-4 h-4 text-green-400" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Milestones */}
            <div style={{
              paddingTop: '1rem',
              borderTop: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                Key Milestones:
              </p>
              <AnimatedText delay={1.3}>
                <ul style={{ fontSize: '0.75rem', color: '#e2e8f0', space: 'y-1' }}>
                  <li>• Global LP onboarding</li>
                  <li>• Multi-market trading</li>
                  <li>• 10x revenue growth</li>
                </ul>
              </AnimatedText>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}
            >
              <CircularProgress value={66} size={50} strokeWidth={4} />
            </motion.div>
          </motion.div>

          {/* Stage 3: Dominate */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(251, 191, 36, 0.08) 100%)',
              border: '2px solid rgba(245, 158, 11, 0.4)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Trophy Glow */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity }
              }}
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
                zIndex: 0
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Stage Number with Special Effect */}
              <motion.div
                animate={{ 
                  boxShadow: ['0 0 30px rgba(245, 158, 11, 0.6)', '0 0 50px rgba(245, 158, 11, 0.9)', '0 0 30px rgba(245, 158, 11, 0.6)']
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>3</span>
                </div>
                <Trophy className="w-7 h-7 text-amber-400" />
              </motion.div>
              
              <h3 style={{ fontSize: '1.3rem', color: '#f59e0b', marginBottom: '0.5rem' }}>
                Stage 3: Dominate
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1rem' }}>
                Months 21-30
              </p>
              
              {/* Metrics with Gold Theme */}
              <div style={{ space: 'y-2', marginBottom: '1rem' }}>
                {[
                  { label: 'AUM Target', value: '$250M+', icon: Star },
                  { label: 'Investors', value: '1000+ Global', icon: Globe },
                  { label: 'Focus', value: 'Market leader', icon: Trophy }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem',
                      background: 'rgba(245, 158, 11, 0.1)',
                      borderRadius: '6px',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{item.label}</span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#f59e0b', marginRight: '0.5rem' }}>
                        {item.value}
                      </span>
                      <item.icon className="w-4 h-4 text-amber-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Milestones */}
              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid rgba(245, 158, 11, 0.2)'
              }}>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  Key Milestones:
                </p>
                <AnimatedText delay={1.5}>
                  <ul style={{ fontSize: '0.75rem', color: '#e2e8f0', space: 'y-1' }}>
                    <li>• Market leadership achieved</li>
                    <li>• Unicorn valuation</li>
                    <li>• IPO-ready structure</li>
                  </ul>
                </AnimatedText>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}
              >
                <CircularProgress value={100} size={50} strokeWidth={4} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom ROI Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="glass-card"
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            textAlign: 'center'
          }}
        >
          <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            <GradientText gradient="from-purple-400 via-pink-400 to-orange-400">
              83x Return in 30 Months
            </GradientText>
          </h4>
          <p style={{ color: '#94a3b8' }}>
            From $3M seed to $250M valuation through GIFT City advantage
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default GiftCityGrowthStagesSlide