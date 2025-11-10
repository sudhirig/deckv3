import { motion } from 'framer-motion'
import { AspectFrame } from './StandardLayouts'
import GradientText from './GradientText'
import './DualPaneComparison.css'

export default function DualPaneComparison({ 
  title,
  subtitle,
  leftHeader,
  leftContent,
  rightHeader,
  rightContent,
  summary
}) {
  return (
    <AspectFrame>
      <div className="dual-pane-container">
        <motion.h1 
          className="dual-pane-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GradientText>{title}</GradientText>
        </motion.h1>
        
        {subtitle && (
          <motion.div 
            className="dual-pane-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.div>
        )}
        
        <div className="dual-pane-comparison">
          <motion.div 
            className="dual-pane-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="dual-pane-header">{leftHeader}</div>
            <div className="dual-pane-content">{leftContent}</div>
          </motion.div>
          
          <motion.div 
            className="dual-pane-vs"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            <span className="vs-badge">VS</span>
          </motion.div>
          
          <motion.div 
            className="dual-pane-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="dual-pane-header">{rightHeader}</div>
            <div className="dual-pane-content">{rightContent}</div>
          </motion.div>
        </div>
        
        {summary && (
          <motion.div 
            className="dual-pane-summary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {summary}
          </motion.div>
        )}
      </div>
    </AspectFrame>
  )
}
