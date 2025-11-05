import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import './SlideStyles.css'

export default function Act1Slide() {
  return (
    <div className="slide-content act-slide">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="act-content"
      >
        <motion.div 
          className="act-number"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <GradientText gradient="from-teal-400 to-green-400">
            ACT 1
          </GradientText>
        </motion.div>
        
        <motion.h1 
          className="act-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          The Hook & The Problem
        </motion.h1>
        
        <motion.p 
          className="act-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Why Now? Why AI? Why Us?
        </motion.p>
      </motion.div>
    </div>
  )
}
