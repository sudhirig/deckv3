import React from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { pxToRem, SPACING, TYPOGRAPHY } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
import { MarketShareChart } from '../components/DataChartsAdvanced'
import './SlideStyles.css'

export default function OpportunitySlide() {
  // Background visual
  const backgroundVisual = (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.06) 0%, transparent 60%)',
      zIndex: 0
    }} />
  )

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #1a1c3d 0%, #0f1629 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {backgroundVisual}
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          padding: `${pxToRem(24)} ${pxToRem(32)}`,
          position: 'relative',
          zIndex: 1
        }}
      >
        <h1 style={{ 
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: pxToRem(8)
        }}>
          <GradientText gradient="from-purple-400 to-pink-400">
            A Massive, Combined Opportunity
          </GradientText>
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
          color: '#94a3b8'
        }}>
          TAM, SAM, SOM Analysis
        </p>
      </motion.div>
      
      {/* Main Visual Content - Three circles */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `0 ${pxToRem(32)}`,
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%',
          gap: 'clamp(1rem, 2vw, 2rem)',
          maxWidth: pxToRem(1200)
        }}>
          {/* TAM Circle */}
          <motion.div 
            style={{ textAlign: 'center' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
          >
            <div style={{ 
              width: 'clamp(10rem, 20vw, 18rem)',
              height: 'clamp(10rem, 20vw, 18rem)',
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1))', 
              border: `${pxToRem(3)} solid #3b82f6`, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: `0 0 ${pxToRem(40)} rgba(59, 130, 246, 0.4)`
            }}>
              <p style={{ 
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 'bold',
                color: '#60a5fa',
                margin: 0
              }}>$112T</p>
              <p style={{ 
                fontSize: 'clamp(1rem, 1.8vw, 1.5rem)',
                color: '#93c5fd',
                marginBottom: pxToRem(4),
                margin: 0
              }}>TAM</p>
              <p style={{ 
                fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
                color: '#e2e8f0',
                textAlign: 'center',
                padding: `0 ${pxToRem(8)}`,
                margin: 0
              }}>
                US HNW ($107T) +<br/>India Access ($5T)
              </p>
            </div>
          </motion.div>
          
          {/* SAM Circle */}
          <motion.div 
            style={{ textAlign: 'center' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, type: 'spring' }}
          >
            <div style={{ 
              width: 'clamp(8rem, 16vw, 14rem)',
              height: 'clamp(8rem, 16vw, 14rem)',
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(34, 197, 94, 0.1))', 
              border: `${pxToRem(3)} solid #22c55e`, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: `0 0 ${pxToRem(35)} rgba(34, 197, 94, 0.4)`
            }}>
              <p style={{ 
                fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
                fontWeight: 'bold',
                color: '#4ade80',
                margin: 0
              }}>$5.4T</p>
              <p style={{ 
                fontSize: 'clamp(0.9rem, 1.5vw, 1.3rem)',
                color: '#86efac',
                marginBottom: pxToRem(4),
                margin: 0
              }}>SAM</p>
              <p style={{ 
                fontSize: 'clamp(0.6rem, 0.9vw, 0.8rem)',
                color: '#e2e8f0',
                textAlign: 'center',
                padding: `0 ${pxToRem(8)}`,
                margin: 0
              }}>
                Tech-savvy HNW<br/>$5M+ investable
              </p>
            </div>
          </motion.div>
          
          {/* SOM Circle */}
          <motion.div 
            style={{ textAlign: 'center' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, type: 'spring' }}
          >
            <div style={{ 
              width: 'clamp(6rem, 12vw, 11rem)',
              height: 'clamp(6rem, 12vw, 11rem)',
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(20, 184, 166, 0.1))', 
              border: `${pxToRem(3)} solid #14b8a6`, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: `0 0 ${pxToRem(30)} rgba(20, 184, 166, 0.4)`
            }}>
              <p style={{ 
                fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                fontWeight: 'bold',
                color: '#5eead4',
                margin: 0
              }}>$2.5B</p>
              <p style={{ 
                fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
                color: '#99f6e4',
                marginBottom: pxToRem(2),
                margin: 0
              }}>SOM (Y3)</p>
              <p style={{ 
                fontSize: 'clamp(0.55rem, 0.8vw, 0.7rem)',
                color: '#e2e8f0',
                textAlign: 'center',
                padding: `0 ${pxToRem(6)}`,
                margin: 0
              }}>
                Conservative<br/>target AUM
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{
          padding: `${pxToRem(16)} ${pxToRem(32)} ${pxToRem(24)}`,
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ 
          textAlign: 'center', 
          padding: 'clamp(1rem, 2vw, 1.5rem)',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(34, 197, 94, 0.15))', 
          borderRadius: pxToRem(16),
          border: `${pxToRem(2)} solid rgba(20, 184, 166, 0.3)`,
          maxWidth: pxToRem(900),
          width: '100%'
        }}>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            color: '#14b8a6',
            fontWeight: 'bold',
            marginBottom: pxToRem(8),
            margin: 0
          }}>
            Year 3 SOM: <GradientText gradient="from-teal-400 to-green-400" animate={false}>$2.5B AUM = $12.5M Revenue</GradientText>
          </p>
          <p style={{ 
            fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
            color: '#e2e8f0',
            margin: 0
          }}>
            Conservative and attainable with current growth trajectory
          </p>
          <p style={{ 
            fontSize: 'clamp(0.75rem, 1.1vw, 0.95rem)',
            color: '#94a3b8',
            marginTop: pxToRem(6),
            margin: 0
          }}>
            Path to $5B AUM by Year 5 → $125M Revenue → $87M EBITDA
          </p>
        </div>
      </motion.div>
    </div>
  )
}