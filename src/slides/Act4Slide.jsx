import { motion } from 'framer-motion'
import { ActSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import { TrendingUp, Users, DollarSign, Award, Shield, Target, Zap, CheckCircle } from 'lucide-react'
import { SPACING, TYPOGRAPHY, pxToRem } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
import './SlideStyles.css'

export default function Act4Slide() {
  const actNumber = (
    <div style={{ fontSize: TYPOGRAPHY.hero, fontWeight: 900 }}>
      <GradientText gradient="from-purple-400 to-pink-400">
        ACT 4
      </GradientText>
    </div>
  )

  const title = "Proof of Traction"
  const subtitle = "Live Platform Operating at Scale"

  const mainContent = (
    <div style={{ display: 'grid', gap: SPACING.lg }}>
      {/* Hero Metrics Row - The "Live Traction Dashboard" */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: SPACING.md,
          marginBottom: SPACING.sm
        }}
      >
        {/* $42M AUM Hero */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="glass-card"
          style={{
            padding: SPACING.lg,
            background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(139, 92, 246, 0.15))',
            border: `${pxToRem(2)} solid rgba(167, 139, 250, 0.3)`,
            boxShadow: '0 8px 32px rgba(167, 139, 250, 0.15)',
            textAlign: 'center'
          }}
        >
          <DollarSign size={32} color="#a78bfa" style={{ margin: '0 auto', marginBottom: SPACING.sm }} />
          <div style={{ 
            fontSize: TYPOGRAPHY.headline, 
            fontWeight: 900, 
            color: '#c4b5fd',
            marginBottom: SPACING.xs 
          }}>
            $<AnimatedCounter end={toFiniteNumber(42)} duration={1.5} />M
          </div>
          <div style={{ fontSize: TYPOGRAPHY.caption, color: 'rgba(255, 255, 255, 0.7)' }}>
            Assets Live
          </div>
          <div style={{ 
            fontSize: TYPOGRAPHY.footnote, 
            color: '#22c55e', 
            marginTop: SPACING.xs,
            fontWeight: 600 
          }}>
            +312% MoM
          </div>
        </motion.div>

        {/* 27 Clients */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="glass-card"
          style={{
            padding: SPACING.lg,
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(219, 39, 119, 0.15))',
            border: `${pxToRem(2)} solid rgba(236, 72, 153, 0.3)`,
            boxShadow: '0 8px 32px rgba(236, 72, 153, 0.15)',
            textAlign: 'center'
          }}
        >
          <Users size={32} color="#ec4899" style={{ margin: '0 auto', marginBottom: SPACING.sm }} />
          <div style={{ 
            fontSize: TYPOGRAPHY.headline, 
            fontWeight: 900, 
            color: '#f9a8d4',
            marginBottom: SPACING.xs 
          }}>
            <AnimatedCounter end={toFiniteNumber(27)} duration={1.5} />
          </div>
          <div style={{ fontSize: TYPOGRAPHY.caption, color: 'rgba(255, 255, 255, 0.7)' }}>
            HNW Clients
          </div>
          <div style={{ 
            fontSize: TYPOGRAPHY.footnote, 
            color: '#22c55e', 
            marginTop: SPACING.xs,
            fontWeight: 600 
          }}>
            97% Retention
          </div>
        </motion.div>

        {/* 99.97% Uptime */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="glass-card"
          style={{
            padding: SPACING.lg,
            background: 'linear-gradient(135deg, rgba(192, 132, 252, 0.2), rgba(168, 85, 247, 0.15))',
            border: `${pxToRem(2)} solid rgba(192, 132, 252, 0.3)`,
            boxShadow: '0 8px 32px rgba(192, 132, 252, 0.15)',
            textAlign: 'center'
          }}
        >
          <Shield size={32} color="#c084fc" style={{ margin: '0 auto', marginBottom: SPACING.sm }} />
          <div style={{ 
            fontSize: TYPOGRAPHY.headline, 
            fontWeight: 900, 
            color: '#e9d5ff',
            marginBottom: SPACING.xs 
          }}>
            <AnimatedCounter end={toFiniteNumber(99.97)} decimals={2} duration={1.5} />%
          </div>
          <div style={{ fontSize: TYPOGRAPHY.caption, color: 'rgba(255, 255, 255, 0.7)' }}>
            Uptime
          </div>
          <div style={{ 
            fontSize: TYPOGRAPHY.footnote, 
            color: '#22c55e', 
            marginTop: SPACING.xs,
            fontWeight: 600 
          }}>
            4.8★ Rating
          </div>
        </motion.div>
      </motion.div>

      {/* Validation Narrative */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          fontSize: TYPOGRAPHY.body,
          lineHeight: '1.8',
          color: 'rgba(255, 255, 255, 0.85)',
          maxWidth: pxToRem(900),
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        We're not pitching a prototype—this platform is <strong style={{ color: '#c4b5fd' }}>live and operating</strong>. 
        Stanford validates our AI edge (93% outperformance), Zerodha powers real trading (1000+ daily trades), 
        and clients save ₹1.55L/₹1Cr annually. The market timing is perfect: <strong style={{ color: '#f9a8d4' }}>46% of HNW investors 
        are actively switching advisors</strong> right now.
      </motion.p>
    </div>
  )

  const sideMetrics = (
    <motion.div 
      style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, staggerChildren: 0.1 }}
    >
      <div className="metric-item">
        <Award size={24} color="#a78bfa" />
        <div className="metric-value">$42M</div>
        <div className="metric-label">Live AUM</div>
      </div>
      
      <div className="metric-item">
        <TrendingUp size={24} color="#ec4899" />
        <div className="metric-value">312%</div>
        <div className="metric-label">MoM Growth</div>
      </div>
      
      <div className="metric-item">
        <Target size={24} color="#c084fc" />
        <div className="metric-value">1000+</div>
        <div className="metric-label">Daily Trades</div>
      </div>
    </motion.div>
  )

  const bottomPoints = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: SPACING.lg,
        width: '100%'
      }}
    >
      {/* Real Operating Data */}
      <motion.div 
        className="glass-card"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          padding: SPACING.lg,
          background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.15), rgba(139, 92, 246, 0.1))',
          border: `${pxToRem(2)} solid rgba(167, 139, 250, 0.2)`,
          borderRadius: pxToRem(16),
          boxShadow: '0 8px 24px rgba(167, 139, 250, 0.1)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(12), marginBottom: SPACING.md }}>
          <Icon type="shield" size={32} variant="badge" gradient="from-purple-400 to-pink-400" />
          <h3 style={{ 
            fontSize: TYPOGRAPHY.subheadline, 
            color: '#c4b5fd',
            margin: 0,
            fontWeight: 700
          }}>
            Real Operating Data
          </h3>
        </div>
        <div style={{ 
          fontSize: TYPOGRAPHY.caption,
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.7',
          display: 'grid',
          gap: SPACING.xs
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
            <CheckCircle size={16} color="#22c55e" />
            <span><strong style={{ color: '#e9d5ff' }}>99.97% uptime</strong> with live clients</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
            <CheckCircle size={16} color="#22c55e" />
            <span><strong style={{ color: '#e9d5ff' }}>97% retention</strong> rate achieved</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
            <CheckCircle size={16} color="#22c55e" />
            <span><strong style={{ color: '#e9d5ff' }}>4.8★</strong> average client rating</span>
          </div>
        </div>
      </motion.div>

      {/* Tech Validation */}
      <motion.div 
        className="glass-card"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          padding: SPACING.lg,
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(219, 39, 119, 0.1))',
          border: `${pxToRem(2)} solid rgba(236, 72, 153, 0.2)`,
          borderRadius: pxToRem(16),
          boxShadow: '0 8px 24px rgba(236, 72, 153, 0.1)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(12), marginBottom: SPACING.md }}>
          <Icon type="zap" size={32} variant="badge" gradient="from-pink-400 to-rose-400" />
          <h3 style={{ 
            fontSize: TYPOGRAPHY.subheadline, 
            color: '#f9a8d4',
            margin: 0,
            fontWeight: 700
          }}>
            Tech Validation
          </h3>
        </div>
        <div style={{ 
          fontSize: TYPOGRAPHY.caption,
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.7',
          display: 'grid',
          gap: SPACING.xs
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
            <CheckCircle size={16} color="#22c55e" />
            <span><strong style={{ color: '#fbcfe8' }}>Stanford:</strong> 93% AI outperformance</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
            <CheckCircle size={16} color="#22c55e" />
            <span><strong style={{ color: '#fbcfe8' }}>Zerodha:</strong> 1000+ trades daily</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
            <CheckCircle size={16} color="#22c55e" />
            <span><strong style={{ color: '#fbcfe8' }}>Tax Alpha:</strong> ₹1.55L saved/₹1Cr</span>
          </div>
        </div>
      </motion.div>

      {/* Market Timing */}
      <motion.div 
        className="glass-card"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          padding: SPACING.lg,
          background: 'linear-gradient(135deg, rgba(192, 132, 252, 0.15), rgba(168, 85, 247, 0.1))',
          border: `${pxToRem(2)} solid rgba(192, 132, 252, 0.2)`,
          borderRadius: pxToRem(16),
          boxShadow: '0 8px 24px rgba(192, 132, 252, 0.1)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(12), marginBottom: SPACING.md }}>
          <Icon type="trending-up" size={32} variant="badge" gradient="from-purple-400 to-violet-400" />
          <h3 style={{ 
            fontSize: TYPOGRAPHY.subheadline, 
            color: '#e9d5ff',
            margin: 0,
            fontWeight: 700
          }}>
            Perfect Timing
          </h3>
        </div>
        <div style={{ 
          fontSize: TYPOGRAPHY.caption,
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.7',
          display: 'grid',
          gap: SPACING.xs
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
            <CheckCircle size={16} color="#22c55e" />
            <span><strong style={{ color: '#e9d5ff' }}>46%</strong> HNW investors switching</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
            <CheckCircle size={16} color="#22c55e" />
            <span><strong style={{ color: '#e9d5ff' }}>$124T</strong> wealth transfer wave</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
            <CheckCircle size={16} color="#22c55e" />
            <span><strong style={{ color: '#e9d5ff' }}>$5T</strong> India GIFT unlocked</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <ActSlideLayout
      actNumber={actNumber}
      title={title}
      subtitle={subtitle}
      mainContent={mainContent}
      sideMetrics={sideMetrics}
      bottomPoints={bottomPoints}
    />
  )
}
