import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import ProgressBar from '../components/ProgressBar'
import InteractiveCard from '../components/InteractiveCard'
import { ArrowRight } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function GrowthPathSlide() {
  // Title
  const title = (
    <GradientText gradient="from-green-400 to-emerald-400">
      Path to $500M AUM in 5 Years
    </GradientText>
  )

  // Main visual - Growth trajectory
  const mainVisual = (
    <div style={{ 
      background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(34, 197, 94, 0.05))', 
      padding: '1.5rem', 
      borderRadius: pxToRem(12),
      height: '100%'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>18 Months</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6' }}>$100M</p>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Target AUM</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowRight size={32} stroke="#475569" strokeWidth={2.5} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Year 3</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>$250M</p>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>AUM</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowRight size={32} stroke="#475569" strokeWidth={2.5} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Year 5</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>$500M</p>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Scale Target</p>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h4 style={{ color: '#14b8a6', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Growth Drivers</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.8rem', borderRadius: pxToRem(8) }}>
            <p style={{ color: '#60a5fa', fontWeight: 'bold', marginBottom: '0.5rem' }}>Client Acquisition</p>
            <p style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>50 → 250 → 1,000 HNW clients</p>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.8rem', borderRadius: pxToRem(8) }}>
            <p style={{ color: '#fbbf24', fontWeight: 'bold', marginBottom: '0.5rem' }}>Average AUM</p>
            <p style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>$1M → $1M → $1M per client</p>
          </div>
        </div>
      </div>
    </div>
  )

  // Key insights - Unit Economics
  const keyInsights = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
      <InteractiveCard gradient="teal" glow={true} delay={0.2}>
        <p style={{ color: '#14b8a6', fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Unit Economics</p>
        <div style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: '1.8', marginBottom: '1rem' }}>
          <div>CAC: $3,500 (blended)</div>
          <div>LTV: $62,500 (10-year)</div>
          <div>LTV/CAC: <strong style={{ color: '#14b8a6' }}>17.8:1</strong></div>
          <div>Payback: <strong style={{ color: '#14b8a6' }}>3.5 months</strong></div>
        </div>
        <ProgressBar value={85} label="Efficiency Score" color="#14b8a6" delay={0.5} />
      </InteractiveCard>
      
      <InteractiveCard gradient="green" glow={true} delay={0.4}>
        <p style={{ color: '#22c55e', fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Margins</p>
        <div style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: '1.8', marginBottom: '1rem' }}>
          <div>Gross Margin: <strong style={{ color: '#22c55e' }}>93%</strong></div>
          <div>vs Traditional: 40-50%</div>
          <div>Break-even: Month 28</div>
          <div>Cash+: Month 30</div>
        </div>
        <ProgressBar value={93} label="Gross Margin" color="#22c55e" delay={0.7} />
      </InteractiveCard>
    </div>
  )

  // Supporting data - Benchmark
  const supportingData = (
    <InteractiveCard gradient="blue" glow={true} delay={0.6}>
      <p style={{ color: '#3b82f6', fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Benchmark</p>
      <div style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: '1.8' }}>
        <div style={{ marginBottom: '0.5rem' }}>Wealthfront: $1B in 2.5 years</div>
        <div style={{ marginBottom: '0.5rem' }}>Our HNW model: Faster trajectory</div>
        <div>Higher ARPU, better retention</div>
      </div>
      <ProgressBar value={78} label="Market Readiness" color="#3b82f6" delay={0.9} />
    </InteractiveCard>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
      keyInsights={keyInsights}
      supportingData={supportingData}
    />
  )
}