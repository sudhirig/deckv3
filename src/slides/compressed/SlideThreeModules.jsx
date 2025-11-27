import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { 
  Brain, 
  Globe, 
  Zap, 
  Bot, 
  Users, 
  Shield, 
  TrendingUp,
  Building2,
  Wallet,
  ArrowRight,
  Sparkles,
  IndianRupee,
  Timer,
  CheckCircle2
} from 'lucide-react'

/**
 * SlideThreeModules - ARTA-Inspired Platform Overview
 * Shows the 3 core ARIA modules: AI, Wealth, Trade
 * Inspired by artafinance.com structure
 */
const SlideThreeModules = () => {
  const [activeModule, setActiveModule] = useState(null)

  const modules = [
    {
      id: 'ai',
      name: 'ARIA AI',
      tagline: 'Your AI Family Office CEO',
      icon: Brain,
      color: '#14B8A6',
      gradient: 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)',
      comparison: 'arta.ai',
      stats: [
        { label: 'AI Agents', value: '68+' },
        { label: 'ROI/Agent', value: '473x' },
        { label: 'Uptime', value: '24/7' }
      ],
      features: [
        { icon: Bot, text: '5 Specialized Teams' },
        { icon: TrendingUp, text: 'Tax Alpha Engine' },
        { icon: Shield, text: 'Risk Guardian' }
      ],
      differentiator: 'ARTA has 1 chatbot. We have 68 orchestrated agents.'
    },
    {
      id: 'wealth',
      name: 'ARIA Wealth',
      tagline: 'India Gateway to Global Wealth',
      icon: Globe,
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
      comparison: 'artafinance.com/global',
      stats: [
        { label: 'India TAM', value: '$5T' },
        { label: 'Tax Savings', value: '35%' },
        { label: 'GIFT City', value: 'Live' }
      ],
      features: [
        { icon: IndianRupee, text: '0% LTCG via GIFT' },
        { icon: Building2, text: 'Vora Ventures AIF' },
        { icon: Wallet, text: 'PE/VC Access' }
      ],
      differentiator: 'ARTA can\'t access India. We can.'
    },
    {
      id: 'trade',
      name: 'ARIA Trade',
      tagline: 'AI-Powered Execution',
      icon: Zap,
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
      comparison: 'Zerodha MCP',
      stats: [
        { label: 'Latency', value: '11ms' },
        { label: 'Brokers', value: '3+' },
        { label: 'Voice', value: 'Yes' }
      ],
      features: [
        { icon: Timer, text: 'Real-time Execution' },
        { icon: Users, text: 'Zerodha + IBKR' },
        { icon: Sparkles, text: 'Voice Commands' }
      ],
      differentiator: 'ARTA advises. We execute in 11ms.'
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 3rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Animated Background Orbs - ARTA Style */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(20, 184, 166, 0.1)',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              borderRadius: '20px',
              padding: '0.4rem 1rem',
              marginBottom: '0.75rem'
            }}
          >
            <Sparkles size={14} color="#14B8A6" />
            <span style={{ color: '#14B8A6', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              The ARIA Platform
            </span>
          </motion.div>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            Three Modules. One Platform.
          </h1>
          <p style={{ fontSize: '1rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
            Everything ARTA does, plus what they <span style={{ color: '#EF4444', fontWeight: '600' }}>can't</span> do.
          </p>
        </div>

        {/* Module Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          flex: 1,
          position: 'relative',
          zIndex: 2
        }}>
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setActiveModule(module.id)}
              onMouseLeave={() => setActiveModule(null)}
              style={{
                background: activeModule === module.id 
                  ? 'rgba(30, 41, 59, 0.6)' 
                  : 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: `1px solid ${activeModule === module.id ? module.color + '60' : 'rgba(100, 116, 139, 0.2)'}`,
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: activeModule === module.id ? 'translateY(-4px)' : 'none',
                boxShadow: activeModule === module.id 
                  ? `0 20px 40px ${module.color}20` 
                  : 'none'
              }}
            >
              {/* Module Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: module.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 4px 12px ${module.color}40`
                }}>
                  <module.icon size={26} color="#FFFFFF" />
                </div>
                <div>
                  <h3 style={{ 
                    color: '#FFFFFF', 
                    fontSize: '1.3rem', 
                    fontWeight: '700', 
                    margin: 0,
                    letterSpacing: '-0.01em'
                  }}>
                    {module.name}
                  </h3>
                  <p style={{ 
                    color: module.color, 
                    fontSize: '0.8rem', 
                    margin: 0,
                    fontWeight: '500'
                  }}>
                    {module.tagline}
                  </p>
                </div>
              </div>

              {/* Stats Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem',
                marginBottom: '1rem',
                padding: '0.75rem',
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '12px'
              }}>
                {module.stats.map((stat, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <p style={{ 
                      color: module.color, 
                      fontSize: '1.1rem', 
                      fontWeight: '800', 
                      margin: 0 
                    }}>
                      {stat.value}
                    </p>
                    <p style={{ 
                      color: '#64748B', 
                      fontSize: '0.65rem', 
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.6rem',
                flex: 1
              }}>
                {module.features.map((feature, i) => (
                  <div key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: `${module.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <feature.icon size={14} color={module.color} />
                    </div>
                    <span style={{ 
                      color: '#E2E8F0', 
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Differentiator */}
              <AnimatePresence>
                {activeModule === module.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{
                      marginTop: '1rem',
                      padding: '0.75rem',
                      background: `${module.color}10`,
                      borderRadius: '10px',
                      border: `1px solid ${module.color}30`
                    }}
                  >
                    <p style={{ 
                      color: module.color, 
                      fontSize: '0.8rem', 
                      margin: 0,
                      fontWeight: '600',
                      fontStyle: 'italic'
                    }}>
                      "{module.differentiator}"
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Comparison Badge */}
              <div style={{
                marginTop: 'auto',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(100, 116, 139, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ 
                  color: '#64748B', 
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  vs {module.comparison}
                </span>
                <motion.div
                  animate={{ x: activeModule === module.id ? 5 : 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  <span style={{ color: module.color, fontSize: '0.75rem', fontWeight: '600' }}>
                    Explore
                  </span>
                  <ArrowRight size={12} color={module.color} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar - Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            padding: '0.75rem',
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '12px',
            position: 'relative',
            zIndex: 2
          }}
        >
          {[
            { label: 'SEBI Regulated', icon: Shield },
            { label: 'GIFT IFSC Live', icon: CheckCircle2 },
            { label: 'Vora Ventures Partner', icon: Building2 },
            { label: '68+ AI Agents', icon: Bot }
          ].map((badge, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem'
            }}>
              <badge.icon size={14} color="#64748B" />
              <span style={{ 
                color: '#94A3B8', 
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideThreeModules
