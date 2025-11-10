import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { Building2, Globe, Shield, Zap, TrendingUp, Award } from 'lucide-react'
import { ActSlideLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

const GiftCityIntroSlide = () => {
  const features = [
    {
      icon: 'building',
      gradient: 'from-cyan-400 to-blue-400',
      title: 'GIFT City IFSC',
      subtitle: "India's first International Financial Services Centre"
    },
    {
      icon: 'shield',
      gradient: 'from-green-400 to-emerald-400',
      title: '0% Tax for Investors',
      subtitle: 'Capital gains tax-free zone'
    },
    {
      icon: 'globe',
      gradient: 'from-purple-400 to-pink-400',
      title: '100% Foreign Ownership',
      subtitle: 'Full international participation allowed'
    }
  ]

  return (
    <ActSlideLayout
      actNumber="6"
      title="GIFT City Advantage"
      subtitle="India's Gateway to Global Finance"
      mainIcon={
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 3, repeat: Infinity }
          }}
          style={{
            display: 'inline-flex',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
            borderRadius: '50%',
            boxShadow: '0 0 3rem rgba(6, 182, 212, 0.4)'
          }}
        >
          <Icon type="building" size={64} variant="badge" gradient="from-cyan-400 to-green-400" />
        </motion.div>
      }
      centerHighlight={
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
          style={{
            textAlign: 'center',
            marginTop: '1.5rem'
          }}
        >
          <motion.h3 
            animate={{ 
              scale: [1, 1.02, 1],
              color: ['#06b6d4', '#10b981', '#06b6d4']
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ 
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}
          >
            $5 Trillion Market
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ 
              fontSize: '1.5rem',
              color: '#10b981',
              marginBottom: '1.5rem'
            }}
          >
            Access
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.0, duration: 1 }}
            style={{
              height: '0.375rem',
              background: 'linear-gradient(90deg, #06b6d4, #10b981, #a855f7)',
              borderRadius: '0.1875rem',
              margin: '0 auto',
              maxWidth: '20rem',
              boxShadow: '0 0 1.5rem rgba(6, 182, 212, 0.5)'
            }}
          />
        </motion.div>
      }
      features={features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: pxToRem(30) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + index * 0.15 }}
          whileHover={{ scale: 1.05 }}
          style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            backdropFilter: 'blur(1rem)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <motion.div
            animate={{ 
              rotate: index === 1 ? [0, 10, -10, 0] : 0,
              y: index === 0 ? [0, -5, 0] : 0
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ marginBottom: '1rem' }}
          >
            <Icon 
              type={feature.icon} 
              size={48} 
              variant="badge" 
              gradient={feature.gradient} 
            />
          </motion.div>
          
          <h4 style={{ 
            fontSize: '1.2rem',
            marginBottom: '0.5rem'
          }}>
            <GradientText gradient={feature.gradient}>
              {feature.title}
            </GradientText>
          </h4>
          
          <p style={{ 
            fontSize: '0.9rem',
            color: '#94a3b8'
          }}>
            {feature.subtitle}
          </p>
        </motion.div>
      ))}
      particles={
        <>
          {/* Animated Background Gradient */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)',
                'radial-gradient(circle at 70% 60%, rgba(34, 197, 94, 0.15) 0%, transparent 60%)',
                'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)',
                'radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)'
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
          
          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i * 45) * 20, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
              style={{
                position: 'absolute',
                left: `${15 + i * 10}%`,
                top: `${60 + (i % 2) * 20}%`,
                color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#a855f7'
              }}
            >
              {i % 2 === 0 ? <Globe size={16} /> : <Building2 size={16} />}
            </motion.div>
          ))}
        </>
      }
    />
  )
}

export default GiftCityIntroSlide