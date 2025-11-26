import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { DollarSign, Users, Rocket, Shield, Code, TrendingUp, Target, Calendar, CheckCircle, ArrowRight } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function FundingAskFixed() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [animatePie, setAnimatePie] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatePie(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const topMetrics = [
    { icon: DollarSign, value: '$5M', label: 'Seed Round', color: '#10b981' },
    { icon: Calendar, value: '12mo', label: 'Runway', color: '#22c55e' },
    { icon: Users, value: '10K', label: 'User Target', color: '#14b8a6' },
    { icon: Target, value: '$10M', label: 'ARR Target', color: '#06b6d4' }
  ]

  const useOfFunds = [
    { category: 'Technology', percentage: 40, amount: '$2M', color: '#8b5cf6', icon: Code, details: ['20 engineers', 'AI/ML infrastructure', 'Platform scaling'] },
    { category: 'Sales & Marketing', percentage: 30, amount: '$1.5M', color: '#3b82f6', icon: TrendingUp, details: ['B2B2C partnerships', 'Digital marketing', 'Brand building'] },
    { category: 'Operations', percentage: 20, amount: '$1M', color: '#10b981', icon: Users, details: ['Customer success', 'Compliance officers', 'Data analysts'] },
    { category: 'Regulatory', percentage: 10, amount: '$0.5M', color: '#f59e0b', icon: Shield, details: ['SEBI compliance', 'International licenses', 'Patent filings'] }
  ]

  const milestones = [
    { month: 'Month 3', target: '2,500 users', metric: 'Product-Market Fit', icon: CheckCircle },
    { month: 'Month 6', target: '5,000 users', metric: '$5M ARR run rate', icon: TrendingUp },
    { month: 'Month 9', target: '7,500 users', metric: 'US expansion launch', icon: Rocket },
    { month: 'Month 12', target: '10,000 users', metric: 'Series A ready', icon: Target }
  ]

  let cumulative = 0
  const pieSegments = useOfFunds.map((fund) => {
    const start = (cumulative * 360) / 100
    cumulative += fund.percentage
    const end = (cumulative * 360) / 100
    const startX = 50 + 35 * Math.cos((start - 90) * Math.PI / 180)
    const startY = 50 + 35 * Math.sin((start - 90) * Math.PI / 180)
    const endX = 50 + 35 * Math.cos((end - 90) * Math.PI / 180)
    const endY = 50 + 35 * Math.sin((end - 90) * Math.PI / 180)
    return { ...fund, path: `M 50 50 L ${startX} ${startY} A 35 35 0 ${fund.percentage > 50 ? 1 : 0} 1 ${endX} ${endY} Z`, midAngle: (start + end) / 2 }
  })

  return (
    <AspectFrame>
      <div style={{ position: 'relative', width: '100%', height: '100%', background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)', padding: '2rem', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)', pointerEvents: 'none' }} />

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '0.5rem' }}>
            <GradientText gradient="from-emerald-400 to-teal-400">$5M Seed Round</GradientText>
          </h1>
          <p style={{ fontSize: '1rem', color: '#94a3b8' }}>Strategic capital to accelerate growth and achieve market dominance</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
          {topMetrics.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div key={m.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 + i * 0.1 }} style={{ padding: '0.6rem', background: `linear-gradient(135deg, ${m.color}15, ${m.color}08)`, border: `1px solid ${m.color}40`, borderRadius: pxToRem(10), display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Icon size={18} color={m.color} />
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: m.color }}>{m.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{m.label}</div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '2fr 1fr 2fr', gap: '1rem', position: 'relative', zIndex: 1 }}>
          {/* Pie Chart */}
          <div style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.05))', borderRadius: pxToRem(16), border: '1px solid rgba(139, 92, 246, 0.3)', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#a78bfa', marginBottom: '0.75rem' }}>Use of Funds</h4>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '180px', height: '180px' }}>
                <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="35" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
                  {pieSegments.map((seg, i) => (
                    <motion.path key={seg.category} d={seg.path} fill={seg.color} fillOpacity="0.8" stroke="#0f172a" strokeWidth="1" initial={{ scale: 0, opacity: 0 }} animate={{ scale: animatePie ? (selectedCategory === i ? 1.05 : 1) : 0, opacity: animatePie ? 1 : 0 }} transition={{ duration: 0.8, delay: i * 0.2 }} style={{ transformOrigin: '50px 50px', cursor: 'pointer' }} onClick={() => setSelectedCategory(i)} />
                  ))}
                  <circle cx="50" cy="50" r="18" fill="#0f172a" />
                  <text x="50" y="48" fill="white" fontSize="8" textAnchor="middle" fontWeight="bold">$5M</text>
                  <text x="50" y="55" fill="#94a3b8" fontSize="4" textAnchor="middle">SEED</text>
                </svg>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', marginTop: '0.5rem' }}>
              {useOfFunds.map((f, i) => (
                <div key={f.category} onClick={() => setSelectedCategory(i)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem', background: selectedCategory === i ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)', borderRadius: pxToRem(6), cursor: 'pointer' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: f.color }} />
                  <span style={{ fontSize: '0.7rem', color: '#e2e8f0' }}>{f.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category Details */}
          <motion.div key={selectedCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ background: 'rgba(17, 24, 39, 0.8)', borderRadius: pxToRem(12), border: '1px solid rgba(55, 65, 81, 0.5)', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
            {(() => {
              const sel = useOfFunds[selectedCategory]
              const Icon = sel.icon
              return (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: pxToRem(10), background: `${sel.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} color={sel.color} />
                    </div>
                    <div>
                      <h5 style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#e2e8f0', margin: 0 }}>{sel.category}</h5>
                      <p style={{ fontSize: '0.7rem', color: '#9ca3af', margin: 0 }}>{sel.percentage}% of raise</p>
                    </div>
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: sel.color, marginBottom: '0.75rem' }}>{sel.amount}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: '600', color: '#9ca3af', marginBottom: '0.5rem' }}>Allocation:</div>
                    {sel.details.map((d, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                        <CheckCircle size={12} color={sel.color} />
                        <span style={{ fontSize: '0.75rem', color: '#d1d5db' }}>{d}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '0.6rem', background: `${sel.color}15`, border: `1px solid ${sel.color}30`, borderRadius: pxToRem(8), marginTop: '0.5rem' }}>
                    <div style={{ fontSize: '0.65rem', color: '#9ca3af' }}>Expected ROI</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#e2e8f0' }}>{selectedCategory === 0 ? '10x' : selectedCategory === 1 ? '5x' : selectedCategory === 2 ? '3x' : '2x'}</div>
                  </div>
                </>
              )
            })()}
          </motion.div>

          {/* Milestones */}
          <div style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.05))', borderRadius: pxToRem(16), border: '1px solid rgba(16, 185, 129, 0.3)', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#10b981', marginBottom: '0.75rem' }}>12-Month Milestones</h4>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {milestones.map((m, i) => {
                const Icon = m.icon
                return (
                  <motion.div key={m.month} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem', background: 'rgba(0,0,0,0.2)', borderRadius: pxToRem(10), position: 'relative' }}>
                    {i < milestones.length - 1 && <div style={{ position: 'absolute', left: '22px', top: '100%', width: '2px', height: '0.5rem', background: 'rgba(16, 185, 129, 0.3)' }} />}
                    <div style={{ width: '28px', height: '28px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={14} color="#10b981" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.15rem' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#e2e8f0' }}>{m.month}</span>
                        <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: '600' }}>{m.target}</span>
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>{m.metric}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} style={{ marginTop: '0.75rem', padding: '0.75rem', background: 'linear-gradient(to right, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.2))', borderRadius: pxToRem(10), border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#e2e8f0' }}>Next: Series A</div>
                <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>$20M at $100M valuation</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Rocket size={18} color="#10b981" />
                <ArrowRight size={14} color="#10b981" />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'linear-gradient(to right, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))', borderRadius: pxToRem(12), border: '1px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <DollarSign size={24} color="#fbbf24" />
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#e2e8f0' }}>Strategic capital for exponential growth</div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>40% tech • 30% sales • 20% ops • 10% legal = 100% focused on scale</div>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#10b981' }}>20x</div>
            <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Expected Return</div>
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
