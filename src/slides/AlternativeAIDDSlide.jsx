import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { FileText, BarChart3, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react'
import './SlideStyles.css'

export default function AlternativeAIDDSlide() {
  const mainVisual = (
    <div>
      <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}>The Problem</h3>
      <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '0.75rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '1rem' }}>80% of alternative investment data is trapped in 100-page PDFs.</p>
        <p>Traditional due diligence requires expensive analyst teams.</p>
      </div>
      
      <h3 style={{ color: '#14b8a6', marginBottom: '1.5rem', marginTop: '2rem' }}>Our AI Solution</h3>
      <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
        <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'start', gap: '1rem' }}>
          <div style={{ marginTop: '0.2rem' }}>
            <FileText size={28} stroke="#14b8a6" strokeWidth={2} />
          </div>
          <div>
            <p style={{ fontWeight: 'bold', color: '#14b8a6' }}>Reads & Synthesizes</p>
            <p style={{ color: '#94a3b8', fontSize: '1rem' }}>Ingests 100+ page offering docs, extracts key data</p>
          </div>
        </div>
        <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'start', gap: '1rem' }}>
          <div style={{ marginTop: '0.2rem' }}>
            <BarChart3 size={28} stroke="#14b8a6" strokeWidth={2} />
          </div>
          <div>
            <p style={{ fontWeight: 'bold', color: '#14b8a6' }}>Generates 1-Page Memos</p>
            <p style={{ color: '#94a3b8', fontSize: '1rem' }}>Overview, terms, risks, suitability in digestible format</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
          <div style={{ marginTop: '0.2rem' }}>
            <TrendingUp size={28} stroke="#14b8a6" strokeWidth={2} />
          </div>
          <div>
            <p style={{ fontWeight: 'bold', color: '#14b8a6' }}>Tracks Performance</p>
            <p style={{ color: '#94a3b8', fontSize: '1rem' }}>Ongoing monitoring and portfolio integration</p>
          </div>
        </div>
      </div>
      <p style={{ marginTop: '1.5rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
        Result: Institutional DD without the analyst team cost
      </p>
    </div>
  )

  const keyInsights = (
    <div>
      <h3 style={{ color: '#14b8a6', marginBottom: '1.5rem' }}>AI Deal Memo Example</h3>
      <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '2rem', borderRadius: '0.75rem' }}>
        <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Acme Private Credit Fund IV</h4>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>Overview</p>
          <p style={{ fontSize: '1rem', marginBottom: '0.3rem' }}>Direct Lending Strategy</p>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>Target IRR: 12-14% | Term: 7 years | Min: $250K</p>
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>Terms</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '0.3rem' }}>Management Fee: 1.5% | Performance: 20%</p>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>Quarterly distributions</p>
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>Risk Assessment</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
            <AlertTriangle size={16} stroke="#fbbf24" />
            <p style={{ fontSize: '0.95rem' }}>Credit Risk: Medium</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
            <CheckCircle size={16} stroke="#22c55e" />
            <p style={{ fontSize: '0.95rem' }}>Market Risk: Low</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertTriangle size={16} stroke="#fbbf24" />
            <p style={{ fontSize: '0.95rem' }}>Liquidity: High</p>
          </div>
        </div>
        
        <div style={{ background: 'rgba(34, 197, 94, 0.2)', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <CheckCircle size={20} stroke="#22c55e" strokeWidth={2.5} />
          <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#22c55e' }}>SUITABLE</p>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>Fits 15% alternative target allocation</p>
        </div>
        
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '1rem', fontStyle: 'italic' }}>
          Generated from 127-page offering memorandum in 5 minutes
        </p>
      </div>
    </div>
  )

  const citation = (
    <p style={{ textAlign: 'center', fontSize: '1.3rem', color: '#14b8a6', fontWeight: 'bold' }}>
      16,000+ funds analyzed - +300-500bps potential alpha
    </p>
  )

  return (
    <DataSlideLayout
      title={
        <>
          <GradientText gradient="from-teal-400 to-cyan-400">Our "Alternative Asset" Agent: AI Due Diligence</GradientText>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', textAlign: 'center', marginTop: '0.5rem' }}>
            Unlocking Private Markets
          </p>
        </>
      }
      mainVisual={mainVisual}
      keyInsights={keyInsights}
      citation={citation}
    />
  )
}
