import { motion } from 'framer-motion'
import { ActSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import ParticleBackground from '../components/ParticleBackground'
import { TrendingUp, Brain, Users } from 'lucide-react'
import '../components/StandardLayouts.css'
import './SlideStyles.css'

export default function Act1Slide() {
  const actNumber = (
    <GradientText gradient="from-teal-400 to-green-400">
      ACT 1
    </GradientText>
  )

  const sideMetrics = (
    <div className="act-side-metrics">
      <div className="metric-item">
        <TrendingUp className="metric-icon" size={24} color="#14b8a6" />
        <div className="metric-value">93%</div>
        <div className="metric-label">AI Outperforms</div>
      </div>
      <div className="metric-item">
        <Users className="metric-icon" size={24} color="#14b8a6" />
        <div className="metric-value">46%</div>
        <div className="metric-label">Switching Advisors</div>
      </div>
      <div className="metric-item">
        <Brain className="metric-icon" size={24} color="#14b8a6" />
        <div className="metric-value">3X</div>
        <div className="metric-label">Critical Failures</div>
      </div>
    </div>
  )

  const mainContent = (
    <>
      <div className="act-description">
        <p>Traditional wealth management is facing an existential crisis. AI has proven it can consistently outperform human fund managers, while nearly half of wealthy investors are actively seeking alternatives to their current advisors.</p>
      </div>
    </>
  )

  const bottomPoints = (
    <div className="act-discovery-grid">
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3>AI Dominance</h3>
        <p>AI outperforms 93% of human fund managers with consistent alpha generation</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3>Market Shift</h3>
        <p>46% of HNWIs are switching advisors in the next 24 months - unprecedented churn</p>
      </motion.div>
      
      <motion.div 
        className="discovery-card glass-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3>System Failures</h3>
        <p>Three critical failures plague traditional wealth management systems</p>
      </motion.div>
    </div>
  )

  return (
    <ActSlideLayout
      actNumber={actNumber}
      title="The Hook & The Problem"
      subtitle="Why Now? Why AI? Why Us?"
      mainContent={mainContent}
      sideMetrics={sideMetrics}
      bottomPoints={bottomPoints}
      particles={<ParticleBackground count={50} color="#14b8a6" />}
    />
  )
}