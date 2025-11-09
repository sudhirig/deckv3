import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { Building2, Globe, Shield, TrendingUp, Star, Zap, ArrowRight, Award } from 'lucide-react'
import './SlideStyles.css'

const GiftCityIntroSlide = () => {
  return (
    <div className="slide-content" style={{ position: 'relative' }}>
      <ParticleBackground count={55} color="#06b6d4" />
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.12) 0%, transparent 70%), radial-gradient(circle at 70% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 60%)',
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
            <GradientText gradient="from-cyan-400 via-teal-400 to-emerald-400">
              Act 6: GIFT City Advantage
            </GradientText>
          </h2>
          
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: '2rem', color: '#14b8a6', textAlign: 'center', marginBottom: '2rem' }}
          >
            India's Gateway to Global Finance
          </motion.h3>
        </motion.div>

        {/* Central Hero Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            padding: '2rem',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            borderRadius: '20px'
          }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity }
            }}
            style={{
              display: 'inline-block',
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
              borderRadius: '50%',
              marginBottom: '1.5rem'
            }}
          >
            <Building2 className="w-20 h-20 text-cyan-400" />
          </motion.div>
          
          <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            <GradientText gradient="from-cyan-400 to-emerald-400">
              $5 Trillion Market Access
            </GradientText>
          </h3>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{
              height: '4px',
              background: 'linear-gradient(90deg, #06b6d4, #10b981, #a855f7)',
              borderRadius: '2px',
              margin: '0 auto',
              maxWidth: '400px'
            }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* GIFT City IFSC Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
                zIndex: 0
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Globe className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 style={{ fontSize: '1.5rem', color: '#06b6d4' }}>GIFT City IFSC</h3>
              </div>
              
              <AnimatedText delay={0.8}>
                <ul style={{ space: 'y-3' }}>
                  {[
                    "India's first International Financial Services Centre",
                    'Regulatory sandbox for fintech innovation',
                    'Direct access to $5T Indian wealth market',
                    'Tax-efficient structure for global investors'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        style={{ color: '#06b6d4', marginRight: '0.75rem', fontSize: '1.2rem' }}
                      >
                        ✓
                      </motion.span>
                      <span style={{ color: '#e2e8f0' }}>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </AnimatedText>
            </div>
          </motion.div>

          {/* Regulatory Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Pulse Effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%)',
                transform: 'translate(-50%, -50%)',
                zIndex: 0
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Shield className="w-8 h-8 text-green-400 mr-3" />
                <h3 style={{ fontSize: '1.5rem', color: '#22c55e' }}>Regulatory Benefits</h3>
              </div>
              
              <div style={{ space: 'y-3' }}>
                {[
                  { label: '0% GST', desc: 'on services', icon: Zap, color: '#fbbf24' },
                  { label: '10% Tax', desc: 'vs 30% mainland', icon: TrendingUp, color: '#10b981' },
                  { label: '100% Foreign', desc: 'ownership allowed', icon: Globe, color: '#3b82f6' },
                  { label: 'No CGT', desc: 'for investors', icon: Award, color: '#a855f7' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '1rem',
                      padding: '0.5rem',
                      background: `${item.color}10`,
                      borderRadius: '8px',
                      border: `1px solid ${item.color}20`
                    }}
                  >
                    <item.icon className="w-5 h-5 mr-3" style={{ color: item.color }} />
                    <div>
                      <span style={{ color: item.color, fontWeight: 'bold' }}>{item.label}</span>
                      <span style={{ color: '#94a3b8', marginLeft: '0.5rem' }}>{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="glass-card"
          style={{
            marginTop: '2rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            position: 'relative'
          }}
        >
          {/* Animated Gradient Border */}
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: -2,
              background: 'linear-gradient(45deg, #06b6d4, #10b981, #a855f7, #06b6d4)',
              backgroundSize: '300% 300%',
              borderRadius: '16px',
              opacity: 0.3,
              filter: 'blur(4px)',
              zIndex: -1
            }}
          />
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Globe className="w-12 h-12 text-cyan-400 mr-4" />
              </motion.div>
              <div>
                <h4 style={{ fontSize: '1.5rem', color: '#14b8a6' }}>
                  Vora Ventures GIFT IFSC
                </h4>
                <p style={{ color: '#94a3b8' }}>
                  Your gateway to India's $5 trillion opportunity
                </p>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                background: 'linear-gradient(135deg, #06b6d4, #10b981)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}
            >
              <span style={{ color: '#fff', fontWeight: 'bold', marginRight: '0.5rem' }}>
                Learn More
              </span>
              <ArrowRight className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default GiftCityIntroSlide