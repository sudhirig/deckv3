import { motion } from 'framer-motion'
import { HeroLayout } from '../components/StandardLayouts'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { pxToRem, SPACING, TYPOGRAPHY } from '../utils/responsive'
import './SlideStyles.css'

export default function OpportunitySlide() {
  // Title
  const title = (
    <GradientText gradient="from-purple-400 to-pink-400">
      A Massive, Combined Opportunity
    </GradientText>
  )

  // Subtitle - Fixed to be a string, not JSX
  const subtitle = "TAM, SAM, SOM Analysis"

  // Visual content - Three circles showing market size
  const visualContent = (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-evenly', 
      alignItems: 'center', 
      width: '100%',
      height: '100%',
      padding: `${SPACING.lg} 0`
    }}>
      <motion.div 
        style={{ textAlign: 'center' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
      >
        <div style={{ 
          width: pxToRem(350), 
          height: pxToRem(350), 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1))', 
          border: `${pxToRem(4)} solid #3b82f6`, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: `0 0 ${pxToRem(60)} rgba(59, 130, 246, 0.4)`
        }}>
          <p style={{ fontSize: TYPOGRAPHY.hero, fontWeight: 'bold', color: '#60a5fa' }}>$112T</p>
          <p style={{ fontSize: TYPOGRAPHY.subheadline, color: '#93c5fd', marginBottom: SPACING.sm }}>TAM</p>
          <p style={{ fontSize: TYPOGRAPHY.body, color: '#e2e8f0', textAlign: 'center', padding: `0 ${SPACING.sm}` }}>
            US HNW ($107T) +<br/>India Access ($5T)
          </p>
        </div>
      </motion.div>
      
      <motion.div 
        style={{ textAlign: 'center' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8, type: 'spring' }}
      >
        <div style={{ 
          width: pxToRem(280), 
          height: pxToRem(280), 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(34, 197, 94, 0.1))', 
          border: `${pxToRem(4)} solid #22c55e`, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: `0 0 ${pxToRem(50)} rgba(34, 197, 94, 0.4)`
        }}>
          <p style={{ fontSize: TYPOGRAPHY.hero, fontWeight: 'bold', color: '#4ade80' }}>$5.4T</p>
          <p style={{ fontSize: TYPOGRAPHY.subheadline, color: '#86efac', marginBottom: SPACING.sm }}>SAM</p>
          <p style={{ fontSize: TYPOGRAPHY.body, color: '#e2e8f0', textAlign: 'center', padding: `0 ${SPACING.sm}` }}>
            Tech-savvy HNW<br/>$5M+ investable
          </p>
        </div>
      </motion.div>
      
      <motion.div 
        style={{ textAlign: 'center' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8, type: 'spring' }}
      >
        <div style={{ 
          width: pxToRem(220), 
          height: pxToRem(220), 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(20, 184, 166, 0.1))', 
          border: `${pxToRem(4)} solid #14b8a6`, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: `0 0 ${pxToRem(40)} rgba(20, 184, 166, 0.4)`
        }}>
          <p style={{ fontSize: TYPOGRAPHY.hero, fontWeight: 'bold', color: '#5eead4' }}>$2.5B</p>
          <p style={{ fontSize: TYPOGRAPHY.subheadline, color: '#99f6e4', marginBottom: SPACING.xs }}>SOM (Y3)</p>
          <p style={{ fontSize: TYPOGRAPHY.body, color: '#e2e8f0', textAlign: 'center', padding: `0 ${SPACING.sm}` }}>
            Conservative<br/>target AUM
          </p>
        </div>
      </motion.div>
    </div>
  )

  // CTA content - wrapped properly without nested paragraphs
  const ctaContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      style={{ 
        textAlign: 'center', 
        padding: SPACING.lg, 
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(34, 197, 94, 0.15))', 
        borderRadius: pxToRem(16),
        border: `${pxToRem(2)} solid rgba(20, 184, 166, 0.3)`
      }}
    >
      <p style={{ fontSize: TYPOGRAPHY.subheadline, color: '#14b8a6', fontWeight: 'bold', marginBottom: SPACING.sm }}>
        Year 3 SOM: <GradientText gradient="from-teal-400 to-green-400" animate={false}>$2.5B AUM = $12.5M Revenue</GradientText>
      </p>
      <p style={{ fontSize: TYPOGRAPHY.body, color: '#e2e8f0' }}>
        Conservative and attainable with current growth trajectory
      </p>
      <p style={{ fontSize: TYPOGRAPHY.body, color: '#94a3b8', marginTop: SPACING.sm }}>
        Path to $5B AUM by Year 5 → $125M Revenue → $87M EBITDA
      </p>
    </motion.div>
  )

  return (
    <HeroLayout
      title={title}
      subtitle={subtitle}
      visualContent={visualContent}
      ctaContent={ctaContent}
    />
  )
}