import { motion } from 'framer-motion'
import { ActSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import ParticleBackground from '../components/ParticleBackground'
import { DollarSign, TrendingUp, Clock, Users } from 'lucide-react'
import { SPACING, TYPOGRAPHY, pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function Act5Slide() {
  // Act number element
  const actNumber = (
    <div style={{ fontSize: TYPOGRAPHY.hero, fontWeight: 900 }}>
      <GradientText gradient="from-amber-400 to-orange-400">
        ACT 5
      </GradientText>
    </div>
  )

  // Main content
  const mainContent = (
    <>
      <p style={{
        fontSize: TYPOGRAPHY.body,
        lineHeight: '1.8',
        color: 'rgba(255, 255, 255, 0.9)',
        maxWidth: pxToRem(800),
        margin: '0 auto'
      }}>
        We're raising $5M to capture a $5.4T serviceable market within a $112T TAM. 
        With proven unit economics (17.8:1 LTV/CAC), rapid payback (3.5 months), 
        and a clear path to $1B AUM in 36 months. Our expert team has the 
        execution experience to deliver this generational opportunity.
      </p>
    </>
  )

  // Side metrics
  const sideMetrics = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md }}>
      <div className="metric-item">
        <DollarSign size={24} color="#fbbf24" />
        <div className="metric-value">$112T</div>
        <div className="metric-label">Total TAM</div>
      </div>
      
      <div className="metric-item">
        <TrendingUp size={24} color="#fbbf24" />
        <div className="metric-value">17.8:1</div>
        <div className="metric-label">LTV/CAC</div>
      </div>
      
      <div className="metric-item">
        <Clock size={24} color="#fbbf24" />
        <div className="metric-value">3.5mo</div>
        <div className="metric-label">Payback</div>
      </div>
    </div>
  )

  // Bottom points
  const bottomPoints = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: SPACING.md,
        width: '100%'
      }}
    >
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h4 style={{ color: '#fbbf24', marginBottom: SPACING.xs }}>Market Size</h4>
        <p style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#fff' }}>$5.4T</p>
        <p style={{ fontSize: pxToRem(13.6), color: 'rgba(255,255,255,0.6)' }}>Serviceable</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h4 style={{ color: '#fbbf24', marginBottom: SPACING.xs }}>Target AUM</h4>
        <p style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#fff' }}>$1B</p>
        <p style={{ fontSize: pxToRem(13.6), color: 'rgba(255,255,255,0.6)' }}>36 months</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h4 style={{ color: '#fbbf24', marginBottom: SPACING.xs }}>Seed Round</h4>
        <p style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#fff' }}>$5M</p>
        <p style={{ fontSize: pxToRem(13.6), color: 'rgba(255,255,255,0.6)' }}>Raising now</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h4 style={{ color: '#fbbf24', marginBottom: SPACING.xs }}>Team</h4>
        <Users size={28} color="#fff" style={{ margin: `${SPACING.xs} 0` }} />
        <p style={{ fontSize: pxToRem(13.6), color: 'rgba(255,255,255,0.6)' }}>Proven experts</p>
      </motion.div>
    </motion.div>
  )

  return (
    <ActSlideLayout
      actNumber={actNumber}
      title="The Business & The Ask"
      subtitle="The Investment Opportunity"
      mainContent={mainContent}
      sideMetrics={sideMetrics}
      bottomPoints={bottomPoints}
      particles={<ParticleBackground count={50} color="#fbbf24" />}
    />
  )
}