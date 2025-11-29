import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { 
  FileText, 
  Building2, 
  TrendingUp, 
  Landmark,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Zap,
  Clock,
  Target,
  Brain,
  ArrowRight,
  BarChart3
} from 'lucide-react'

/**
 * SlideARIAWealthDemo - ARIA Wealth Alternative Asset Analysis Demo
 * Shows how the AI agent analyzes investment opportunities
 */
const SlideARIAWealthDemo = () => {
  const [activeOpportunity, setActiveOpportunity] = useState(0)
  const [analysisStep, setAnalysisStep] = useState(0)
  const [showResult, setShowResult] = useState(false)

  // Alternative investment opportunities
  const opportunities = [
    {
      name: 'Acme Private Credit IV',
      type: 'Private Credit',
      icon: Landmark,
      targetIRR: '12-14%',
      minInvestment: '$250K',
      term: '7 Years',
      riskLevel: 'Medium',
      suitability: 'suitable',
      score: 87,
      highlights: ['Senior secured', 'Quarterly distributions', 'Low correlation'],
      risks: ['Illiquid', 'Credit risk']
    },
    {
      name: 'Vista Growth Fund VI',
      type: 'Private Equity',
      icon: TrendingUp,
      targetIRR: '18-22%',
      minInvestment: '$500K',
      term: '10 Years',
      riskLevel: 'High',
      suitability: 'review',
      score: 64,
      highlights: ['Top quartile track record', 'Tech focus'],
      risks: ['High minimum', 'Long lock-up', 'J-curve effect']
    },
    {
      name: 'Harbor Real Estate III',
      type: 'Real Estate',
      icon: Building2,
      targetIRR: '15-18%',
      minInvestment: '$100K',
      term: '5 Years',
      riskLevel: 'Medium-Low',
      suitability: 'suitable',
      score: 92,
      highlights: ['Income + appreciation', 'Tax advantages', 'Inflation hedge'],
      risks: ['Market cycle dependent']
    }
  ]

  const analysisSteps = [
    'Reading 127-page offering document...',
    'Extracting key terms & fees...',
    'Analyzing risk factors...',
    'Comparing to portfolio allocation...',
    'Generating recommendation...'
  ]

  useEffect(() => {
    // Cycle through analysis steps
    if (analysisStep < analysisSteps.length) {
      const timer = setTimeout(() => {
        setAnalysisStep(prev => prev + 1)
        if (analysisStep === analysisSteps.length - 1) {
          setTimeout(() => setShowResult(true), 500)
        }
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [analysisStep])

  useEffect(() => {
    // Cycle through opportunities
    const timer = setInterval(() => {
      setActiveOpportunity(prev => (prev + 1) % opportunities.length)
      setAnalysisStep(0)
      setShowResult(false)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const current = opportunities[activeOpportunity]
  const Icon = current.icon

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 2.5rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Background Effect */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '20%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '1rem' }}
        >
          {/* Module Badge */}
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(139, 92, 246, 0.15)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '20px',
            padding: '0.35rem 0.85rem',
            marginBottom: '0.75rem'
          }}>
            <Brain size={14} color="#8B5CF6" />
            <span style={{ color: '#8B5CF6', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.05em' }}>
              ARIA WEALTH
            </span>
          </div>
          
          <h1 style={{
            fontSize: '1.85rem',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.35rem',
            letterSpacing: '-0.02em'
          }}>
            ALTERNATIVE ASSET AGENT IN ACTION
          </h1>
          <p style={{ fontSize: '0.95rem', color: '#94A3B8' }}>
            Watch ARIA analyze 100+ page documents in seconds
          </p>
        </motion.div>

        {/* Main Content */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '280px 1fr 320px',
          gap: '1.25rem'
        }}>
          {/* LEFT: Opportunity List */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(100, 116, 139, 0.2)',
            borderRadius: '12px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.75rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid rgba(100, 116, 139, 0.2)'
            }}>
              <FileText size={16} color="#8B5CF6" />
              <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Opportunities Queue
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {opportunities.map((opp, i) => {
                const OppIcon = opp.icon
                const isActive = i === activeOpportunity
                return (
                  <motion.div
                    key={opp.name}
                    animate={{
                      background: isActive 
                        ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))'
                        : 'rgba(30, 41, 59, 0.5)',
                      borderColor: isActive ? 'rgba(139, 92, 246, 0.5)' : 'rgba(100, 116, 139, 0.2)'
                    }}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      setActiveOpportunity(i)
                      setAnalysisStep(0)
                      setShowResult(false)
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <OppIcon size={14} color={isActive ? '#A78BFA' : '#64748B'} />
                      <span style={{ 
                        fontSize: '0.8rem', 
                        fontWeight: '600', 
                        color: isActive ? '#FFFFFF' : '#94A3B8'
                      }}>
                        {opp.name}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ 
                        fontSize: '0.65rem', 
                        background: isActive ? 'rgba(139, 92, 246, 0.3)' : 'rgba(100, 116, 139, 0.3)',
                        color: isActive ? '#C4B5FD' : '#94A3B8',
                        padding: '0.1rem 0.4rem',
                        borderRadius: '4px'
                      }}>
                        {opp.type}
                      </span>
                      <span style={{ fontSize: '0.65rem', color: '#64748B' }}>
                        IRR: {opp.targetIRR}
                      </span>
                    </div>
                    {isActive && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(analysisStep / analysisSteps.length) * 100}%` }}
                        style={{
                          height: '2px',
                          background: 'linear-gradient(90deg, #8B5CF6, #A78BFA)',
                          borderRadius: '2px',
                          marginTop: '0.5rem'
                        }}
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* CENTER: Analysis Process */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(100, 116, 139, 0.2)',
            borderRadius: '12px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(100, 116, 139, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(139, 92, 246, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={20} color="#A78BFA" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>
                    {current.name}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: '#8B5CF6', margin: 0 }}>
                    {current.type} • {current.term} • Min: {current.minInvestment}
                  </p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'rgba(20, 184, 166, 0.15)',
                padding: '0.35rem 0.65rem',
                borderRadius: '6px'
              }}>
                <Zap size={12} color="#14B8A6" />
                <span style={{ fontSize: '0.7rem', color: '#14B8A6', fontWeight: '600' }}>
                  ANALYZING
                </span>
              </div>
            </div>

            {/* Analysis Steps */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {analysisSteps.map((step, i) => {
                const isComplete = i < analysisStep
                const isCurrent = i === analysisStep
                return (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                      opacity: isComplete || isCurrent ? 1 : 0.3,
                      x: isCurrent ? [0, 5, 0] : 0
                    }}
                    transition={{ x: { duration: 0.5, repeat: isCurrent ? Infinity : 0 } }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.6rem 0.75rem',
                      background: isComplete ? 'rgba(16, 185, 129, 0.1)' : isCurrent ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
                      borderRadius: '6px',
                      border: isCurrent ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid transparent'
                    }}
                  >
                    {isComplete ? (
                      <CheckCircle size={16} color="#10B981" />
                    ) : isCurrent ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Clock size={16} color="#8B5CF6" />
                      </motion.div>
                    ) : (
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #475569' }} />
                    )}
                    <span style={{ 
                      fontSize: '0.85rem', 
                      color: isComplete ? '#10B981' : isCurrent ? '#A78BFA' : '#64748B',
                      fontFamily: 'monospace'
                    }}>
                      {step}
                    </span>
                    {isComplete && (
                      <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: '#10B981' }}>
                        ✓ Done
                      </span>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Stats Bar */}
            <div style={{
              marginTop: '0.75rem',
              paddingTop: '0.75rem',
              borderTop: '1px solid rgba(100, 116, 139, 0.2)',
              display: 'flex',
              gap: '1.5rem'
            }}>
              <div>
                <p style={{ fontSize: '0.6rem', color: '#64748B', textTransform: 'uppercase', margin: 0 }}>Document</p>
                <p style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: '600', margin: 0 }}>127 pages</p>
              </div>
              <div>
                <p style={{ fontSize: '0.6rem', color: '#64748B', textTransform: 'uppercase', margin: 0 }}>Analysis Time</p>
                <p style={{ fontSize: '0.85rem', color: '#14B8A6', fontWeight: '600', margin: 0 }}>~5 seconds</p>
              </div>
              <div>
                <p style={{ fontSize: '0.6rem', color: '#64748B', textTransform: 'uppercase', margin: 0 }}>Data Points</p>
                <p style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: '600', margin: 0 }}>48 extracted</p>
              </div>
            </div>
          </div>

          {/* RIGHT: AI Deal Memo (Website Style) */}
          <AnimatePresence mode="wait">
            {showResult ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  color: '#0F172A',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                }}
              >
                {/* Memo Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid #E2E8F0'
                }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#0F172A', margin: '0 0 0.25rem 0' }}>
                      {current.name}
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: '#64748B', margin: 0 }}>
                      {current.type} • Target IRR: {current.targetIRR}
                    </p>
                  </div>
                  <div style={{
                    background: current.suitability === 'suitable' ? '#DCFCE7' : '#FEF3C7',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    {current.suitability === 'suitable' ? (
                      <CheckCircle size={12} color="#16A34A" />
                    ) : (
                      <AlertTriangle size={12} color="#D97706" />
                    )}
                    <span style={{ 
                      fontSize: '0.7rem', 
                      fontWeight: '700', 
                      color: current.suitability === 'suitable' ? '#16A34A' : '#D97706',
                      textTransform: 'uppercase'
                    }}>
                      {current.suitability}
                    </span>
                  </div>
                </div>

                {/* Score */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: `conic-gradient(${current.score >= 80 ? '#16A34A' : current.score >= 60 ? '#D97706' : '#DC2626'} ${current.score * 3.6}deg, #E2E8F0 0deg)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0F172A' }}>
                        {current.score}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.65rem', color: '#64748B', margin: '0 0 0.15rem 0', textTransform: 'uppercase' }}>
                      AI Suitability Score
                    </p>
                    <p style={{ fontSize: '0.85rem', color: '#0F172A', margin: 0 }}>
                      Fits your <strong>15% alternative</strong> target
                    </p>
                  </div>
                </div>

                {/* Key Terms */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem',
                  marginBottom: '0.75rem'
                }}>
                  {[
                    { label: 'Term', value: current.term },
                    { label: 'Minimum', value: current.minInvestment },
                    { label: 'Risk Level', value: current.riskLevel },
                    { label: 'Target IRR', value: current.targetIRR }
                  ].map(item => (
                    <div key={item.label} style={{
                      background: '#F8FAFC',
                      padding: '0.5rem',
                      borderRadius: '6px'
                    }}>
                      <p style={{ fontSize: '0.6rem', color: '#64748B', margin: 0, textTransform: 'uppercase' }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: '0.8rem', fontWeight: '600', color: '#0F172A', margin: 0 }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Highlights & Risks */}
                <div style={{ display: 'flex', gap: '0.75rem', flex: 1 }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.65rem', color: '#16A34A', margin: '0 0 0.35rem 0', fontWeight: '600' }}>
                      HIGHLIGHTS
                    </p>
                    {current.highlights.map(h => (
                      <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.25rem' }}>
                        <CheckCircle size={10} color="#16A34A" />
                        <span style={{ fontSize: '0.7rem', color: '#334155' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.65rem', color: '#DC2626', margin: '0 0 0.35rem 0', fontWeight: '600' }}>
                      RISKS
                    </p>
                    {current.risks.map(r => (
                      <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.25rem' }}>
                        <AlertTriangle size={10} color="#DC2626" />
                        <span style={{ fontSize: '0.7rem', color: '#334155' }}>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button style={{
                  marginTop: '0.75rem',
                  padding: '0.6rem',
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  Add to Portfolio
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(100, 116, 139, 0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem'
                }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(139, 92, 246, 0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <BarChart3 size={28} color="#A78BFA" />
                </motion.div>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', textAlign: 'center' }}>
                  AI Deal Memo<br />
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Generating...</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '2.5rem'
          }}
        >
          {[
            { value: '16,000+', label: 'Funds Analyzed', color: '#8B5CF6' },
            { value: '500ms', label: 'Avg Analysis Time', color: '#14B8A6' },
            { value: '+300-500bps', label: 'Potential Alpha', color: '#F59E0B' }
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.25rem', fontWeight: '800', color: stat.color, margin: 0 }}>
                {stat.value}
              </p>
              <p style={{ fontSize: '0.7rem', color: '#64748B', margin: 0 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideARIAWealthDemo
