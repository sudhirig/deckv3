import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import EditableWrapper from '../components/EditableWrapper'
import { AspectFrame } from '../components/StandardLayouts'
import { Shield, Award, Lock } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function TitleSlide() {
  const moats = [
    { text: 'ARIA AI Brain', description: 'Proprietary Multi-Agent Tech' },
    { text: 'India Gateway', description: 'Exclusive Vora/GIFT Access' },
    { text: 'B2B2C Channel', description: 'Ascendum CPA Network' }
  ]

  return (
    <AspectFrame>
      <div className="title-slide-container">
        {/* Animated Gradient Background */}
        <motion.div
          initial={{
            background: 'radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)'
          }}
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="title-slide-background"
        />
        
        <div className="title-slide-content">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="title-main-section"
          >
            <EditableWrapper
              slideId="title"
              elementId="main-title"
              type="text"
              isDraggable={true}
              isResizable={false}
            >
              <h1 className="title-main">
                <GradientText gradient="from-teal-400 via-cyan-400 to-green-400">
                  ARIA
                </GradientText>
              </h1>
            </EditableWrapper>
            
            <EditableWrapper
              slideId="title"
              elementId="subtitle"
              type="text"
              isDraggable={true}
              isResizable={false}
            >
              <p className="title-subtitle">
                The Virtuoso Intelligence for Global Wealth<br />
                AI Risk & Investment Advisor
              </p>
            </EditableWrapper>
          </motion.div>
          
          {/* Three Moats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="title-moats-section"
          >
            {moats.map((moat, index) => (
              <motion.div
                key={moat.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="title-moat-card"
              >
                <span className="title-moat-number">{index + 1}.</span>
                <span className="title-moat-text">{moat.text}</span>
                <span className="title-moat-desc">{moat.description}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <EditableWrapper
            slideId="title"
            elementId="tagline"
            type="text"
            isDraggable={true}
            isResizable={false}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="title-tagline"
            >
              The entire pitch in one line: Our three "alpha" moats
            </motion.p>
          </EditableWrapper>
          
          {/* Partnership Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              padding: '1rem',
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.05))',
              borderRadius: pxToRem(12),
              border: `1px solid rgba(20, 184, 166, 0.3)`
            }}
          >
            <p style={{ 
              color: '#14b8a6', 
              fontSize: '1.1rem', 
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              Backed by Vora Ventures | Working Prototype Operational
            </p>
            <p style={{ 
              color: '#94a3b8', 
              fontSize: '0.9rem'
            }}>
              Exclusive GIFT City Partnership | Patent-Pending Technology
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6, duration: 0.8 }}
            className="title-date"
          >
            November 2025
          </motion.p>
        </div>
        
        <div className="tech-background"></div>
      </div>
    </AspectFrame>
  )
}
