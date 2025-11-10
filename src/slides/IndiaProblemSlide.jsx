import { motion } from 'framer-motion'
import { ComparisonLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function IndiaProblemSlide() {
  // Title
  const title = (
    <GradientText gradient="from-red-400 to-pink-400">
      India: A $5T Market, Locked by Red Tape
    </GradientText>
  )

  // Subtitle
  const subtitle = (
    <p style={{ fontSize: '1.3rem', color: '#94a3b8', textAlign: 'center' }}>
      15% of HNW portfolios want India exposure, but only 3% have it
    </p>
  )

  // Left option - The Old FPI Route
  const leftOption = (
    <span className="icon-label icon-heading" style={{ color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
      <Icon type="xCircle" size={24} variant="inline" gradient="from-red-400 to-pink-400" />
      The Old FPI Route
    </span>
  )

  const leftDetails = (
    <div style={{ fontSize: '1.2rem', lineHeight: '2' }}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: pxToRem(12) }}
      >
        <p className="icon-label icon-heading" style={{ fontWeight: 'bold', color: '#ef4444', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
          <Icon type="clipboard" size={20} variant="inline" gradient="from-red-400 to-pink-400" />
          Complex Red Tape
        </p>
        <p style={{ color: '#fca5a5' }}>Heavy FPI compliance burdens, multi-month setup process</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: pxToRem(12) }}
      >
        <p className="icon-label icon-heading" style={{ fontWeight: 'bold', color: '#ef4444', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
          <Icon type="dollarSign" size={20} variant="inline" gradient="from-red-400 to-pink-400" />
          Crippling Tax
        </p>
        <p style={{ color: '#fca5a5' }}>Capital Gains Tax + STT drag performance by 30%+</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: pxToRem(12) }}
      >
        <p className="icon-label icon-heading" style={{ fontWeight: 'bold', color: '#ef4444', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
          <Icon type="trending" size={20} variant="inline" gradient="from-teal-400 to-green-400" />
          Currency Risk
        </p>
        <p style={{ color: '#fca5a5' }}>INR depreciation erodes returns by 3-5% annually</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        style={{ padding: '1.5rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: pxToRem(12) }}
      >
        <p className="icon-label icon-heading" style={{ fontWeight: 'bold', color: '#ef4444', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
          <Icon type="xCircle" size={20} variant="inline" gradient="from-red-400 to-pink-400" />
          Repatriation Nightmare
        </p>
        <p style={{ color: '#fca5a5' }}>Slow, restrictive capital movement with regulatory approvals</p>
      </motion.div>
    </div>
  )

  // Right option - Market Reality
  const rightOption = (
    <span className="icon-label icon-heading" style={{ color: '#fbbf24' }}>
      <Icon type="barChart" size={22} variant="inline" gradient="from-teal-400 to-green-400" />
      Market Reality
    </span>
  )

  const rightDetails = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: 'spring' }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <Icon type="lock" size={80} gradient="from-red-400 to-pink-400" delay={0.3} variant="inline" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(249, 115, 22, 0.1))',
          padding: '2rem',
          borderRadius: pxToRem(12),
          textAlign: 'center'
        }}
      >
        <p style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '1rem' }}>15%</p>
        <p style={{ fontSize: '1.3rem', color: '#e2e8f0', marginBottom: '2rem' }}>
          of HNW portfolios want India exposure
        </p>
        
        <p style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ef4444', marginBottom: '1rem' }}>Only 3%</p>
        <p style={{ fontSize: '1.3rem', color: '#e2e8f0' }}>
          actually have it
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ marginTop: '2rem', textAlign: 'center' }}
      >
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', fontStyle: 'italic' }}>
          "Too complex" - Traditional advisors
        </p>
      </motion.div>
    </div>
  )

  // Summary
  const summary = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
      style={{
        textAlign: 'center',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(251, 191, 36, 0.1))',
        borderRadius: pxToRem(12),
        marginTop: '2rem'
      }}
    >
      <p style={{ fontSize: '1.4rem', color: '#fbbf24', fontWeight: 'bold' }}>
        The barriers are too high. Traditional advisors have given up.
      </p>
      <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '1rem', fontStyle: 'italic' }}>
        Source: Morgan Stanley India Market Outlook, 2024
      </p>
    </motion.div>
  )

  return (
    <ComparisonLayout
      title={title}
      subtitle={subtitle}
      leftOption={leftOption}
      leftDetails={leftDetails}
      rightOption={rightOption}
      rightDetails={rightDetails}
      summary={summary}
    />
  )
}