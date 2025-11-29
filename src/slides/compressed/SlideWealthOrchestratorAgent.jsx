import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { 
  User,
  Target,
  Shield,
  Clock,
  Globe,
  Brain,
  Building2,
  TrendingUp,
  Landmark,
  Briefcase,
  Calculator,
  FileCheck,
  ArrowLeftRight,
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react'

/**
 * SlideWealthOrchestratorAgent - The AI Wealth Orchestrator
 * Shows how ARIA understands investor → constructs portfolio → optimizes
 */
const SlideWealthOrchestratorAgent = () => {
  const [activeStep, setActiveStep] = useState(0)

  // Animate through the 4 steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 5) // 0-3 for steps, 4 resets
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  // Investor profile inputs
  const investorInputs = [
    { icon: Target, label: 'Goals', examples: ['Retirement', 'Education', 'Legacy'], color: '#14B8A6' },
    { icon: Shield, label: 'Risk Appetite', examples: ['Conservative', 'Moderate', 'Growth'], color: '#8B5CF6' },
    { icon: Clock, label: 'Time Horizon', examples: ['5 years', '15 years', '30+ years'], color: '#F59E0B' },
    { icon: Globe, label: 'Jurisdictions', examples: ['US', 'India', 'Singapore'], color: '#EC4899' }
  ]

  // Asset classes for portfolio construction
  const assetClasses = [
    { icon: TrendingUp, label: 'Equities', allocation: '40%', color: '#3B82F6' },
    { icon: Landmark, label: 'Fixed Income', allocation: '20%', color: '#10B981' },
    { icon: Building2, label: 'Private Equity', allocation: '15%', color: '#8B5CF6' },
    { icon: Briefcase, label: 'Private Credit', allocation: '10%', color: '#F59E0B' },
    { icon: Globe, label: 'India/GIFT', allocation: '15%', color: '#EC4899' }
  ]

  // Optimization functions
  const optimizations = [
    { icon: Calculator, label: 'Tax', detail: 'Daily TLH, GIFT 0% tax', color: '#14B8A6' },
    { icon: FileCheck, label: 'Compliance', detail: 'RBI, FEMA, SEC auto', color: '#8B5CF6' },
    { icon: ArrowLeftRight, label: 'Repatriation', detail: 'Cross-border flows', color: '#F59E0B' },
    { icon: RefreshCw, label: 'Rebalance', detail: '24/7 monitoring', color: '#EC4899' }
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
        {/* Background Effects */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(139, 92, 246, 0.15)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '20px',
            padding: '0.4rem 1rem',
            marginBottom: '0.75rem'
          }}>
            <Brain size={16} color="#8B5CF6" />
            <span style={{ color: '#8B5CF6', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.05em' }}>
              ARIA WEALTH
            </span>
          </div>
          
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.35rem',
            letterSpacing: '-0.02em'
          }}>
            THE WEALTH ORCHESTRATOR AGENT
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8' }}>
            Understands you → Constructs your portfolio → Optimizes continuously
          </p>
        </motion.div>

        {/* Main Flow */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr auto 1.6fr auto 1fr',
          gap: '1.5rem',
          alignItems: 'stretch'
        }}>
          {/* STEP 1: Understand Investor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              borderRadius: '16px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(20, 184, 166, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <User size={18} color="#14B8A6" />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#14B8A6', margin: 0 }}>
                1. UNDERSTAND
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1 }}>
              {investorInputs.map((input, i) => {
                const Icon = input.icon
                return (
                  <motion.div
                    key={input.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.65rem 0.75rem',
                      background: `${input.color}10`,
                      borderRadius: '8px',
                      border: `1px solid ${input.color}30`
                    }}
                  >
                    <Icon size={18} color={input.color} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#E2E8F0', margin: 0 }}>
                        {input.label}
                      </p>
                      <p style={{ fontSize: '0.7rem', color: '#94A3B8', margin: 0 }}>
                        {input.examples.join(' • ')}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Arrow 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <ArrowRight size={28} color="#475569" />
          </motion.div>

          {/* STEP 2: AI Brain - Portfolio Construction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))',
              border: '2px solid rgba(139, 92, 246, 0.4)',
              borderRadius: '16px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.2)'
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Brain size={20} color="#fff" />
              </motion.div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>
                2. CONSTRUCT
              </h3>
            </div>

            {/* Allocation Bar */}
            <div style={{
              display: 'flex',
              gap: '3px',
              height: '32px',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '1rem'
            }}>
              {assetClasses.map(asset => (
                <motion.div
                  key={asset.label}
                  initial={{ width: 0 }}
                  animate={{ width: asset.allocation }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  style={{
                    background: asset.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span style={{ fontSize: '0.7rem', color: '#fff', fontWeight: '700' }}>
                    {asset.allocation}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Asset Class Legend - Horizontal */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              {assetClasses.map((asset, i) => {
                const Icon = asset.icon
                return (
                  <div
                    key={asset.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.35rem 0.5rem',
                      background: 'rgba(15, 23, 42, 0.5)',
                      borderRadius: '6px'
                    }}
                  >
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '3px',
                      background: asset.color
                    }} />
                    <span style={{ fontSize: '0.75rem', color: '#E2E8F0' }}>
                      {asset.label}
                    </span>
                  </div>
                )
              })}
            </div>

          </motion.div>

          {/* Arrow 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <ArrowRight size={28} color="#475569" />
          </motion.div>

          {/* STEP 3: Optimize */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              background: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '16px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(245, 158, 11, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Zap size={18} color="#F59E0B" />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#F59E0B', margin: 0 }}>
                3. OPTIMIZE
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1 }}>
              {optimizations.map((opt, i) => {
                const Icon = opt.icon
                return (
                  <motion.div
                    key={opt.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    style={{
                      padding: '0.65rem 0.75rem',
                      background: `${opt.color}10`,
                      borderRadius: '8px',
                      border: `1px solid ${opt.color}30`
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <Icon size={18} color={opt.color} />
                      <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#E2E8F0' }}>
                        {opt.label}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.7rem', color: '#94A3B8', margin: 0, lineHeight: '1.3' }}>
                      {opt.detail}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom: Real-Life Example Flow - Animated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: '1.5rem',
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(139, 92, 246, 0.1))',
            borderRadius: '16px',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            padding: '1.75rem 2.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1.4fr auto 1fr auto 1.4fr',
            alignItems: 'center',
            gap: '1.25rem',
            flex: 1,
            minHeight: '180px'
          }}
        >
          {/* UNDERSTAND Example */}
          <motion.div
            animate={{ 
              scale: activeStep === 0 ? 1.02 : 1,
              opacity: activeStep >= 0 ? 1 : 0.4
            }}
            transition={{ duration: 0.5 }}
            style={{
              padding: '0.5rem',
              borderRadius: '12px',
              background: activeStep === 0 ? 'rgba(20, 184, 166, 0.1)' : 'transparent',
              border: activeStep === 0 ? '2px solid rgba(20, 184, 166, 0.5)' : '2px solid transparent'
            }}
          >
            <p style={{ fontSize: '1rem', color: '#14B8A6', fontWeight: '700', margin: '0 0 0.6rem 0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              1. UNDERSTAND
            </p>
            <div style={{ 
              background: 'rgba(20, 184, 166, 0.15)', 
              borderRadius: '10px', 
              padding: '1rem 1.25rem',
              border: '1px solid rgba(20, 184, 166, 0.3)'
            }}>
              <p style={{ fontSize: '1.25rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>
                Dr. Priya Sharma
              </p>
              <p style={{ fontSize: '1rem', color: '#94A3B8', margin: '0.3rem 0 0 0' }}>
                $3M • Moderate Risk • 15yr
              </p>
              <p style={{ fontSize: '0.9rem', color: '#5EEAD4', margin: '0.2rem 0 0 0' }}>
                US resident → India exposure
              </p>
            </div>
          </motion.div>

          {/* Arrow 1 */}
          <motion.div
            animate={{ 
              opacity: activeStep >= 1 ? 1 : 0.3,
              x: activeStep === 1 ? [0, 5, 0] : 0
            }}
            transition={{ duration: 0.5, x: { duration: 0.8, repeat: activeStep === 1 ? Infinity : 0 } }}
          >
            <ArrowRight size={32} color={activeStep >= 1 ? '#14B8A6' : '#475569'} />
          </motion.div>

          {/* CONSTRUCT Example */}
          <motion.div
            animate={{ 
              scale: activeStep === 1 ? 1.02 : 1,
              opacity: activeStep >= 1 ? 1 : 0.4
            }}
            transition={{ duration: 0.5 }}
            style={{
              padding: '0.5rem',
              borderRadius: '12px',
              background: activeStep === 1 ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
              border: activeStep === 1 ? '2px solid rgba(139, 92, 246, 0.5)' : '2px solid transparent'
            }}
          >
            <p style={{ fontSize: '1rem', color: '#8B5CF6', fontWeight: '700', margin: '0 0 0.6rem 0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              2. CONSTRUCT
            </p>
            <div style={{ 
              background: 'rgba(139, 92, 246, 0.15)', 
              borderRadius: '10px', 
              padding: '1rem 1.25rem',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}>
              <div style={{ display: 'flex', gap: '3px', height: '22px', borderRadius: '6px', overflow: 'hidden', marginBottom: '0.6rem' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: activeStep >= 1 ? '40%' : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ background: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <span style={{ fontSize: '0.7rem', color: '#fff', fontWeight: '700' }}>40%</span>
                </motion.div>
                <motion.div initial={{ width: 0 }} animate={{ width: activeStep >= 1 ? '20%' : 0 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ background: '#10B981' }} />
                <motion.div initial={{ width: 0 }} animate={{ width: activeStep >= 1 ? '15%' : 0 }} transition={{ duration: 0.5, delay: 0.2 }} style={{ background: '#8B5CF6' }} />
                <motion.div initial={{ width: 0 }} animate={{ width: activeStep >= 1 ? '10%' : 0 }} transition={{ duration: 0.5, delay: 0.3 }} style={{ background: '#F59E0B' }} />
                <motion.div initial={{ width: 0 }} animate={{ width: activeStep >= 1 ? '15%' : 0 }} transition={{ duration: 0.5, delay: 0.4 }} style={{ background: '#EC4899' }} />
              </div>
              <p style={{ fontSize: '1rem', color: '#E2E8F0', margin: 0 }}>
                Equity • Bonds • Alts • India
              </p>
              <p style={{ fontSize: '0.95rem', color: '#A78BFA', margin: '0.25rem 0 0 0', fontWeight: '600' }}>
                + Harbor RE III selected (92)
              </p>
            </div>
          </motion.div>

          {/* Arrow 2 */}
          <motion.div
            animate={{ 
              opacity: activeStep >= 2 ? 1 : 0.3,
              x: activeStep === 2 ? [0, 5, 0] : 0
            }}
            transition={{ duration: 0.5, x: { duration: 0.8, repeat: activeStep === 2 ? Infinity : 0 } }}
          >
            <ArrowRight size={32} color={activeStep >= 2 ? '#8B5CF6' : '#475569'} />
          </motion.div>

          {/* OPTIMIZE Example */}
          <motion.div
            animate={{ 
              scale: activeStep === 2 ? 1.02 : 1,
              opacity: activeStep >= 2 ? 1 : 0.4
            }}
            transition={{ duration: 0.5 }}
            style={{
              padding: '0.5rem',
              borderRadius: '12px',
              background: activeStep === 2 ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
              border: activeStep === 2 ? '2px solid rgba(245, 158, 11, 0.5)' : '2px solid transparent'
            }}
          >
            <p style={{ fontSize: '1rem', color: '#F59E0B', fontWeight: '700', margin: '0 0 0.6rem 0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              3. OPTIMIZE
            </p>
            <div style={{ 
              background: 'rgba(245, 158, 11, 0.15)', 
              borderRadius: '10px', 
              padding: '1rem 1.25rem',
              border: '1px solid rgba(245, 158, 11, 0.3)'
            }}>
              <motion.p 
                animate={{ opacity: activeStep >= 2 ? 1 : 0.5 }}
                style={{ fontSize: '1.05rem', color: '#FFFFFF', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <CheckCircle size={18} color="#10B981" /> GIFT City → 0% tax
              </motion.p>
              <motion.p 
                animate={{ opacity: activeStep >= 2 ? 1 : 0.5 }}
                transition={{ delay: 0.2 }}
                style={{ fontSize: '1.05rem', color: '#FFFFFF', margin: '0.4rem 0 0 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <CheckCircle size={18} color="#10B981" /> TLH: $47K harvested
              </motion.p>
              <motion.p 
                animate={{ opacity: activeStep >= 2 ? 1 : 0.5 }}
                transition={{ delay: 0.4 }}
                style={{ fontSize: '1.05rem', color: '#FFFFFF', margin: '0.4rem 0 0 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <CheckCircle size={18} color="#10B981" /> FEMA/RBI compliant
              </motion.p>
            </div>
          </motion.div>

          {/* Arrow 3 */}
          <motion.div
            animate={{ 
              opacity: activeStep >= 3 ? 1 : 0.3,
              x: activeStep === 3 ? [0, 5, 0] : 0
            }}
            transition={{ duration: 0.5, x: { duration: 0.8, repeat: activeStep === 3 ? Infinity : 0 } }}
          >
            <ArrowRight size={32} color={activeStep >= 3 ? '#F59E0B' : '#475569'} />
          </motion.div>

          {/* RESULT */}
          <motion.div
            animate={{ 
              scale: activeStep >= 3 ? 1.05 : 1,
              opacity: activeStep >= 3 ? 1 : 0.4
            }}
            transition={{ duration: 0.5 }}
            style={{
              padding: '0.5rem',
              borderRadius: '12px',
              background: activeStep >= 3 ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
              border: activeStep >= 3 ? '2px solid rgba(16, 185, 129, 0.5)' : '2px solid transparent'
            }}
          >
            <p style={{ fontSize: '1rem', color: '#10B981', fontWeight: '700', margin: '0 0 0.6rem 0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              RESULT
            </p>
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(20, 184, 166, 0.25))', 
              borderRadius: '10px', 
              padding: '1rem 1.25rem',
              border: '2px solid rgba(16, 185, 129, 0.5)',
              textAlign: 'center'
            }}>
              <motion.p 
                animate={{ scale: activeStep >= 3 ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5 }}
                style={{ fontSize: '2rem', fontWeight: '800', color: '#10B981', margin: 0 }}
              >
                +$54K/yr
              </motion.p>
              <p style={{ fontSize: '1rem', color: '#5EEAD4', margin: '0.3rem 0 0 0' }}>
                Tax Alpha + India Access
              </p>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', margin: '0.2rem 0 0 0' }}>
                All automated, 24/7 monitored
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideWealthOrchestratorAgent
