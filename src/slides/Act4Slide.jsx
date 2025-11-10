import { motion } from 'framer-motion'
import { ActSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { CheckCircle, TrendingUp, Award, Shield } from 'lucide-react'
import { SPACING, TYPOGRAPHY, pxToRem } from '../utils/responsive'
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

  const mainContent = (
    <>
      <p style={{
        fontSize: TYPOGRAPHY.body,
        lineHeight: '1.8',
        color: 'rgba(255, 255, 255, 0.9)',
        maxWidth: pxToRem(800),
        margin: '0 auto'
      }}>
        We're not just building—we're already operating. $42M in assets under management,
        27 high-net-worth clients live on the platform, 99.97% uptime, and 312% monthly growth.
        Stanford validates our AI approach, Zerodha powers real trading, and clients save
        ₹1.55L annually per crore. The market timing is perfect: 46% of HNW investors
        are switching advisors right now.
      </p>
    </>
  )

  const sideMetrics = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md }}>
      <div className="metric-item">
        <CheckCircle size={24} color="#a78bfa" />
        <div className="metric-value">$42M</div>
        <div className="metric-label">Assets Live</div>
      </div>
      
      <div className="metric-item">
        <Award size={24} color="#a78bfa" />
        <div className="metric-value">27</div>
        <div className="metric-label">HNW Clients</div>
      </div>
      
      <div className="metric-item">
        <TrendingUp size={24} color="#a78bfa" />
        <div className="metric-value">312%</div>
        <div className="metric-label">Monthly Growth</div>
      </div>
    </div>
  )

  const bottomPoints = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: SPACING.lg,
        width: '100%'
      }}
    >
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          padding: SPACING.lg,
          background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.15), rgba(196, 181, 253, 0.1))',
          borderLeft: `${pxToRem(4)} solid #a78bfa`
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(12), marginBottom: SPACING.sm }}>
          <Icon type="shield" size={28} variant="inline" gradient="from-purple-400 to-pink-400" />
          <h3 style={{ 
            fontSize: TYPOGRAPHY.subheadline, 
            color: '#a78bfa',
            margin: 0 
          }}>
            Real Traction
          </h3>
        </div>
        <p style={{ 
          fontSize: TYPOGRAPHY.caption,
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6'
        }}>
          <strong style={{ color: '#c4b5fd' }}>99.97% uptime</strong> with live clients
          <br />
          <strong style={{ color: '#c4b5fd' }}>97% retention</strong> rate
          <br />
          <strong style={{ color: '#c4b5fd' }}>4.8★</strong> client satisfaction
        </p>
      </motion.div>

      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          padding: SPACING.lg,
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.1))',
          borderLeft: `${pxToRem(4)} solid #22c55e`
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(12), marginBottom: SPACING.sm }}>
          <Icon type="shield" size={28} variant="inline" gradient="from-green-400 to-emerald-400" />
          <h3 style={{ 
            fontSize: TYPOGRAPHY.subheadline, 
            color: '#22c55e',
            margin: 0 
          }}>
            Tech Validation
          </h3>
        </div>
        <p style={{ 
          fontSize: TYPOGRAPHY.caption,
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6'
        }}>
          <strong style={{ color: '#86efac' }}>Stanford Study:</strong> 93% AI outperformance
          <br />
          <strong style={{ color: '#86efac' }}>Live Trading:</strong> 1000+ trades daily
          <br />
          <strong style={{ color: '#86efac' }}>Tax Alpha:</strong> ₹1.55L saved/₹1Cr
        </p>
      </motion.div>

      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          padding: SPACING.lg,
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(249, 115, 22, 0.1))',
          borderLeft: `${pxToRem(4)} solid #fbbf24`
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(12), marginBottom: SPACING.sm }}>
          <Icon type="trending-up" size={28} variant="inline" gradient="from-yellow-400 to-orange-400" />
          <h3 style={{ 
            fontSize: TYPOGRAPHY.subheadline, 
            color: '#fbbf24',
            margin: 0 
          }}>
            Market Timing
          </h3>
        </div>
        <p style={{ 
          fontSize: TYPOGRAPHY.caption,
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6'
        }}>
          <strong style={{ color: '#fde047' }}>46%</strong> HNW investors switching
          <br />
          <strong style={{ color: '#fde047' }}>$124T</strong> wealth transfer active
          <br />
          <strong style={{ color: '#fde047' }}>$5T</strong> India GIFT opportunity
        </p>
      </motion.div>
    </motion.div>
  )

  return (
    <ActSlideLayout
      actNumber={actNumber}
      title={title}
      mainContent={mainContent}
      sideMetrics={sideMetrics}
      bottomPoints={bottomPoints}
    />
  )
}
