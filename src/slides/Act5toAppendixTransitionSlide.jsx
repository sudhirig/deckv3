import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Microscope, Code, Brain, Zap, Database, Shield, Layers, Activity } from 'lucide-react'
import './SlideStyles.css'

const Act5toAppendixTransitionSlide = () => {
  return (
    <div className="slide-content act-slide" style={{ position: 'relative' }}>
      <ParticleBackground count={60} color="#14b8a6" />
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.15) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(13, 148, 136, 0.1) 0%, transparent 50%)',
        zIndex: 0
      }} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="act-content"
        style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Journey Complete - Leading to Technical Appendix */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #14b8a6, #0d9488, #0f766e, #14b8a6)',
                padding: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#0a0a0a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#14b8a6' }}>
                  <AnimatedCounter end={100} duration={1500} />%
                </span>
              </div>
            </motion.div>
            
            <div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.25rem' }}>JOURNEY COMPLETE</p>
              <h2 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: '600' }}>Act 5 → Product Appendix</h2>
            </div>
          </div>
        </motion.div>
        
        {/* Main Title with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <GradientText style={{ fontSize: '4.5rem', marginBottom: '0.5rem' }}>
            Ready to Invest?
          </GradientText>
          <AnimatedText delay={0.6}>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>
              Deep Dive Into Our Technology Stack
            </p>
          </AnimatedText>
        </motion.div>

        
        {/* Product Appendix Preview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          <h3 style={{ fontSize: '1.8rem', color: '#e2e8f0', marginBottom: '1.5rem', textAlign: 'center' }}>
            Product Appendix Preview
          </h3>
          
          {/* Three Main Feature Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
            {[
              { icon: <Layers />, count: '7', title: 'Operational Modules', desc: 'Complete platform walkthrough' },
              { icon: <Brain />, count: '68+', title: 'AI Agents', desc: 'See them in action' },
              { icon: <Activity />, count: '100%', title: 'Live Snapshots', desc: 'Real system screenshots' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(20, 184, 166, 0.3)'
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(20, 184, 166, 0.3)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%)',
                    zIndex: 0
                  }}
                />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ color: '#14b8a6', marginBottom: '1rem', fontSize: '2rem' }}>
                    {React.cloneElement(item.icon, { size: 32 })}
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>
                    {item.count}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Seven Modules Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <h4 style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '1rem', textAlign: 'center' }}>
              What's in the Appendix:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
              {[
                { icon: <Zap />, name: 'Zerodha Trading Intelligence' },
                { icon: <Shield />, name: 'CGMF Mutual Fund Advisory' },
                { icon: <Brain />, name: 'Agentic AI System' },
                { icon: <Code />, name: 'Algo Trading Laboratory' },
                { icon: <Database />, name: 'Sentiment Intelligence' },
                { icon: <Activity />, name: 'Trading Agents & Hedge Fund' },
                { icon: <Microscope />, name: 'Future Modules Roadmap' }
              ].map((module, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 + i * 0.05, duration: 0.4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '8px',
                    border: '1px solid rgba(20, 184, 166, 0.2)'
                  }}
                >
                  <span style={{ color: '#14b8a6' }}>
                    {React.cloneElement(module.icon, { size: 20 })}
                  </span>
                  <span style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>
                    <span style={{ color: '#14b8a6', marginRight: '0.5rem' }}>{i + 1}.</span>
                    {module.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{ marginTop: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Journey Progress</span>
            <span style={{ fontSize: '0.85rem', color: '#14b8a6' }}>100% - Technical Deep Dive</span>
          </div>
          <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 2.2, duration: 1.5, ease: 'easeInOut' }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #14b8a6 0%, #10b981 100%)',
                boxShadow: '0 0 20px rgba(20, 184, 166, 0.5)'
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Act5toAppendixTransitionSlide