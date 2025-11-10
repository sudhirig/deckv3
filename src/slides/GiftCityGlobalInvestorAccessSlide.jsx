import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import AnimatedCounter from '../components/AnimatedCounter'
import { Globe2, Users, MapPin, Briefcase, TrendingUp } from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function GiftCityGlobalInvestorAccessSlide() {
  const [hoveredRegion, setHoveredRegion] = useState(null)
  const [activeAnimation, setActiveAnimation] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAnimation(prev => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const regions = [
    {
      id: 'usa',
      name: 'USA',
      investors: 'Silicon Valley VCs',
      benefit: 'No withholding tax',
      icon: MapPin,
      color: '#3b82f6',
      investors_count: 120
    },
    {
      id: 'singapore',
      name: 'Singapore',
      investors: 'Family Offices',
      benefit: 'Tax treaty benefits',
      icon: MapPin,
      color: '#10b981',
      investors_count: 85
    },
    {
      id: 'dubai',
      name: 'Dubai',
      investors: 'Sovereign Funds',
      benefit: '0% capital gains',
      icon: MapPin,
      color: '#a855f7',
      investors_count: 45
    },
    {
      id: 'london',
      name: 'London',
      investors: 'Pension Funds',
      benefit: 'FCA recognized',
      icon: MapPin,
      color: '#f59e0b',
      investors_count: 65
    }
  ]

  const lpCategories = [
    { name: 'Family Offices', percentage: 40, color: '#14b8a6' },
    { name: 'HNI/UHNI', percentage: 30, color: '#3b82f6' },
    { name: 'Institutional', percentage: 20, color: '#a855f7' },
    { name: 'Sovereign/Pension', percentage: 10, color: '#10b981' }
  ]

  const benefits = [
    { 
      title: 'India Exposure',
      desc: 'Direct access to fastest growing major economy',
      icon: 'trending',
      gradient: 'from-teal-400 to-green-400'
    },
    {
      title: 'Tax Efficiency',
      desc: '0% capital gains, no STT',
      icon: 'dollar',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      title: 'AI Alpha',
      desc: '600% advantage through 68+ agents',
      icon: 'bot',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      title: 'USD Denominated',
      desc: 'Natural hedge, no FX risk',
      icon: 'shield',
      gradient: 'from-blue-400 to-cyan-400'
    }
  ]

  const worldMapCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, type: 'spring' }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '2px solid rgba(59, 130, 246, 0.3)',
        position: 'relative',
        overflow: 'visible',
        gridColumn: 'span 2'
      }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '1.5rem'
      }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Globe2 size={48} color="#3b82f6" />
        </motion.div>
      </div>
      
      <h3 style={{ 
        fontSize: '1.3rem',
        color: '#3b82f6',
        textAlign: 'center',
        marginBottom: '1.5rem'
      }}>
        Global Investor Network
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem'
      }}>
        {regions.map((region, index) => (
          <motion.div
            key={region.id}
            initial={{ opacity: 0, y: pxToRem(20) }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredRegion(region.id)}
            onHoverEnd={() => setHoveredRegion(null)}
            style={{
              padding: '0.75rem',
              background: hoveredRegion === region.id 
                ? `linear-gradient(135deg, ${region.color}20, rgba(0, 0, 0, 0.3))`
                : 'rgba(0, 0, 0, 0.2)',
              borderRadius: '0.75rem',
              border: `1px solid ${region.color}40`,
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <motion.div
                animate={{ 
                  y: activeAnimation === index ? [0, -5, 0] : 0,
                  scale: activeAnimation === index ? 1.2 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <region.icon size={20} color={region.color} />
              </motion.div>
              <span style={{ 
                fontSize: '1rem',
                fontWeight: 'bold',
                color: region.color
              }}>
                {region.name}
              </span>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
              {region.investors}
            </p>
            <p style={{ fontSize: '0.7rem', color: '#10b981' }}>
              {region.benefit}
            </p>
            {hoveredRegion === region.id && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ 
                  fontSize: '0.9rem',
                  color: region.color,
                  fontWeight: 'bold',
                  marginTop: '0.5rem'
                }}
              >
                {region.investors_count}+ Investors
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          marginTop: '1rem',
          padding: '0.75rem',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(16, 185, 129, 0.15))',
          borderRadius: '0.5rem',
          textAlign: 'center'
        }}
      >
        <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#06b6d4' }}>
          <AnimatedCounter end={45} duration={2000} />+ Countries
        </p>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
          Global Coverage
        </p>
      </motion.div>
    </motion.div>
  )

  const lpCategoriesCard = (
    <motion.div
      initial={{ opacity: 0, x: pxToRem(-20) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '2px solid rgba(20, 184, 166, 0.3)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <Users size={28} color="#14b8a6" />
        <h3 style={{ fontSize: '1.2rem', color: '#14b8a6' }}>LP Categories</h3>
      </div>
      
      {lpCategories.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.0 + index * 0.1, type: 'spring' }}
          style={{ marginBottom: '1rem' }}
        >
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem'
          }}>
            <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>
              {category.name}
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              style={{ 
                fontSize: '1rem',
                fontWeight: 'bold',
                color: category.color
              }}
            >
              {category.percentage}%
            </motion.span>
          </div>
          <div style={{ 
            height: '0.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '0.25rem',
            overflow: 'hidden'
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${category.percentage}%` }}
              transition={{ delay: 1.3 + index * 0.1, duration: 0.8, type: 'spring' }}
              style={{
                height: '100%',
                background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                boxShadow: `0 0 1.25rem ${category.color}50`
              }}
            />
          </div>
        </motion.div>
      ))}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          marginTop: '1rem',
          padding: '0.75rem',
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '0.5rem',
          textAlign: 'center'
        }}
      >
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#14b8a6' }}>
          <AnimatedCounter end={1000} duration={2500} />+ Investors
        </p>
        <p style={{ fontSize: '0.75rem', color: '#64748b' }}>
          Expected by 2026
        </p>
      </motion.div>
    </motion.div>
  )

  const whyTheyChooseUsCard = (
    <motion.div
      initial={{ opacity: 0, x: pxToRem(20) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.0 }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '2px solid rgba(16, 185, 129, 0.3)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <Briefcase size={28} color="#10b981" />
        <h3 style={{ fontSize: '1.2rem', color: '#10b981' }}>Why They Choose Us</h3>
      </div>
      
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: pxToRem(10) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + index * 0.15 }}
          whileHover={{ x: pxToRem(5) }}
          style={{
            display: 'flex',
            alignItems: 'start',
            gap: '0.75rem',
            marginBottom: '1rem',
            padding: '0.5rem',
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}
        >
          <motion.div
            animate={{ 
              rotate: index === activeAnimation ? [0, 10, -10, 0] : 0
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon 
              type={benefit.icon} 
              size={20} 
              variant="inline" 
              gradient={benefit.gradient} 
            />
          </motion.div>
          <div>
            <p style={{ 
              fontSize: '0.95rem',
              fontWeight: 'bold',
              color: '#e2e8f0',
              marginBottom: '0.25rem'
            }}>
              {benefit.title}
            </p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              {benefit.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )

  const summary = (
    <motion.div
      initial={{ opacity: 0, y: pxToRem(30) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.0 }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(16, 185, 129, 0.1))',
        borderRadius: '1.25rem',
        border: '2px solid rgba(14, 165, 233, 0.3)'
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        textAlign: 'center'
      }}>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6' }}>100%</p>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Foreign Ownership Allowed</p>
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>45+</p>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Countries Accessible</p>
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>24/7</p>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Global Market Coverage</p>
        </motion.div>
      </div>
    </motion.div>
  )

  return (
    <GridLayout
      title={
        <>
          <GradientText gradient="from-blue-400 via-cyan-400 to-green-400">
            Global Investor Access
          </GradientText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              textAlign: 'center', 
              color: '#94a3b8', 
              fontSize: '1.2rem',
              marginTop: '0.5rem'
            }}
          >
            Connecting International Capital to Indian Growth
          </motion.p>
        </>
      }
      cards={[worldMapCard, lpCategoriesCard, whyTheyChooseUsCard]}
      columns={2}
      summary={summary}
      particles={
        <>
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 60%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)'
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
      }
    />
  )
}