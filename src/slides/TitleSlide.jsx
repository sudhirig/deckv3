import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import './SlideStyles.css'

export default function TitleSlide() {
  return (
    <div className="slide-content title-slide">
      <div className="title-content">
        <AnimatedText delay={0.2}>
          <h1 className="main-title">
            <GradientText gradient="from-teal-400 via-cyan-400 to-green-400">
              The AI-Powered Digital Family Office
            </GradientText>
          </h1>
        </AnimatedText>
        
        <AnimatedText delay={0.4}>
          <p className="subtitle">
            Institutional-Grade Wealth Management<br />
            For the Next Generation
          </p>
        </AnimatedText>
        
        <AnimatedText delay={0.6} type="fade-in">
          <div className="features-line">
            <motion.span 
              className="feature"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              Agentic AI
            </motion.span>
            <span className="dot">●</span>
            <motion.span 
              className="feature"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              Tax Alpha
            </motion.span>
            <span className="dot">●</span>
            <motion.span 
              className="feature"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            >
              Alternative Access
            </motion.span>
            <span className="dot">●</span>
            <motion.span 
              className="feature"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.4 }}
            >
              GIFT City Gateway
            </motion.span>
          </div>
        </AnimatedText>
        
        <AnimatedText delay={1.6}>
          <p className="tagline">The entire pitch in one line: Our three "alpha" moats</p>
        </AnimatedText>
        
        <AnimatedText delay={1.8}>
          <p className="date">November 2025</p>
        </AnimatedText>
      </div>
      <div className="tech-background"></div>
    </div>
  )
}
