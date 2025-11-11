import React from 'react'
import { motion } from 'framer-motion'
import { ActSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import { Building2, Globe, Shield, TrendingUp, DollarSign, Award } from 'lucide-react'
import { SPACING, TYPOGRAPHY, pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function GiftCityIntroSlide() {
  // Act number element - matching Act1Slide pattern
  const actNumber = (
    <div style={{ fontSize: TYPOGRAPHY.hero, fontWeight: 900 }}>
      <GradientText gradient="from-cyan-400 to-green-400">
        ACT 6
      </GradientText>
    </div>
  )

  // Main content - narrative explanation
  const mainContent = (
    <div style={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
        style={{
          display: 'inline-flex',
          padding: pxToRem(48),
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
          borderRadius: '50%',
          marginBottom: SPACING.xl
        }}
      >
        <Building2 style={{ width: '4rem', height: '4rem' }} color="#06b6d4" />
      </motion.div>
      
      <motion.h3
        initial={{ opacity: 0, y: pxToRem(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{ 
          fontSize: TYPOGRAPHY.h2,
          marginBottom: SPACING.lg
        }}
      >
        <GradientText gradient="from-cyan-400 to-emerald-400">
          $5 Trillion Market Access
        </GradientText>
      </motion.h3>
      
      <p style={{
        fontSize: TYPOGRAPHY.body,
        lineHeight: '1.8',
        color: 'rgba(255, 255, 255, 0.9)',
        maxWidth: pxToRem(800),
        margin: '0 auto'
      }}>
        GIFT City IFSC transforms our digital family office into a global powerhouse. 
        Zero capital gains tax for investors, 100% foreign ownership allowed, 
        and direct access to India's explosive $5 trillion wealth market. 
        This regulatory arbitrage creates an unprecedented 72% cost advantage 
        versus mainland funds.
      </p>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{
          height: pxToRem(4),
          background: 'linear-gradient(90deg, #06b6d4, #10b981, #a855f7)',
          borderRadius: pxToRem(2),
          margin: `${SPACING.lg} auto 0`,
          maxWidth: pxToRem(400)
        }}
      />
    </div>
  )

  // Side metrics - key GIFT City advantages
  const sideMetrics = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md }}>
      <motion.div 
        className="metric-item"
        initial={{ opacity: 0, x: pxToRem(30) }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <DollarSign style={{ width: '1.5rem', height: '1.5rem' }} color="#10b981" />
        <div className="metric-value">0%</div>
        <div className="metric-label">Capital Gains Tax</div>
      </motion.div>
      
      <motion.div 
        className="metric-item"
        initial={{ opacity: 0, x: pxToRem(30) }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Globe style={{ width: '1.5rem', height: '1.5rem' }} color="#06b6d4" />
        <div className="metric-value">100%</div>
        <div className="metric-label">Foreign Ownership</div>
      </motion.div>
      
      <motion.div 
        className="metric-item"
        initial={{ opacity: 0, x: pxToRem(30) }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
      >
        <TrendingUp style={{ width: '1.5rem', height: '1.5rem' }} color="#a855f7" />
        <div className="metric-value">72%</div>
        <div className="metric-label">Cost Advantage</div>
      </motion.div>
    </div>
  )

  // Bottom points - three key features
  const bottomPoints = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: SPACING.lg,
        width: '100%',
        maxHeight: '30vh',
        overflow: 'auto'
      }}
    >
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ minHeight: 'auto', maxHeight: '100%', overflow: 'hidden' }}
      >
        <Icon type="building" size="2rem" variant="badge" gradient="from-cyan-400 to-blue-400" />
        <h3 style={{ color: '#06b6d4', marginBottom: SPACING.sm, marginTop: SPACING.md }}>
          IFSCA Licensed
        </h3>
        <p style={{ fontSize: TYPOGRAPHY.small, color: 'rgba(255, 255, 255, 0.8)' }}>
          India's premier International Financial Services Centre
        </p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ minHeight: 'auto', maxHeight: '100%', overflow: 'hidden' }}
      >
        <Icon type="shield" size="2rem" variant="badge" gradient="from-green-400 to-emerald-400" />
        <h3 style={{ color: '#10b981', marginBottom: SPACING.sm, marginTop: SPACING.md }}>
          Tax Efficiency
        </h3>
        <p style={{ fontSize: TYPOGRAPHY.small, color: 'rgba(255, 255, 255, 0.8)' }}>
          0% GST on services, 10% corporate tax vs 30% mainland
        </p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ minHeight: 'auto', maxHeight: '100%', overflow: 'hidden' }}
      >
        <Icon type="globe" size="2rem" variant="badge" gradient="from-purple-400 to-pink-400" />
        <h3 style={{ color: '#a855f7', marginBottom: SPACING.sm, marginTop: SPACING.md }}>
          Global Access
        </h3>
        <p style={{ fontSize: TYPOGRAPHY.small, color: 'rgba(255, 255, 255, 0.8)' }}>
          45+ countries, 24/7 operations, USD denominated
        </p>
      </motion.div>
    </motion.div>
  )

  const particles = (
    <>
      {/* Animated Background Gradient */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 60%, rgba(34, 197, 94, 0.1) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)'
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
    </>
  )

  return (
    <ActSlideLayout
      actNumber={actNumber}
      title="GIFT City Advantage"
      subtitle="India's Gateway to Global Finance"
      mainContent={mainContent}
      sideMetrics={sideMetrics}
      bottomPoints={bottomPoints}
      particles={particles}
    />
  )
}