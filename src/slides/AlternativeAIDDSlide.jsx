import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { FileText, BarChart3, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react'
import './SlideStyles.css'
import { pxToRem } from '../utils/responsive'

export default function AlternativeAIDDSlide() {
  const mainVisual = (
    <div>
      <h3 style={{ color: '#ef4444', marginBottom: pxToRem(24) }}>The Problem</h3>
      <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: pxToRem(32), borderRadius: pxToRem(12), fontSize: pxToRem(19.2), lineHeight: '1.8' }}>
        <p style={{ marginBottom: pxToRem(16) }}>80% of alternative investment data is trapped in 100-page PDFs.</p>
        <p>Traditional due diligence requires expensive analyst teams.</p>
      </div>
      
      <h3 style={{ color: '#14b8a6', marginBottom: pxToRem(24), marginTop: pxToRem(32) }}>Our AI Solution</h3>
      <div style={{ fontSize: pxToRem(17.6), lineHeight: '1.8' }}>
        <div style={{ marginBottom: pxToRem(16), display: 'flex', alignItems: 'start', gap: pxToRem(16) }}>
          <div style={{ marginTop: pxToRem(3.2) }}>
            <FileText size={28} stroke="#14b8a6" strokeWidth={2} />
          </div>
          <div>
            <p style={{ fontWeight: 'bold', color: '#14b8a6' }}>Reads & Synthesizes</p>
            <p style={{ color: '#94a3b8', fontSize: pxToRem(16) }}>Ingests 100+ page offering docs, extracts key data</p>
          </div>
        </div>
        <div style={{ marginBottom: pxToRem(16), display: 'flex', alignItems: 'start', gap: pxToRem(16) }}>
          <div style={{ marginTop: pxToRem(3.2) }}>
            <BarChart3 size={28} stroke="#14b8a6" strokeWidth={2} />
          </div>
          <div>
            <p style={{ fontWeight: 'bold', color: '#14b8a6' }}>Generates 1-Page Memos</p>
            <p style={{ color: '#94a3b8', fontSize: pxToRem(16) }}>Overview, terms, risks, suitability in digestible format</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'start', gap: pxToRem(16) }}>
          <div style={{ marginTop: pxToRem(3.2) }}>
            <TrendingUp size={28} stroke="#14b8a6" strokeWidth={2} />
          </div>
          <div>
            <p style={{ fontWeight: 'bold', color: '#14b8a6' }}>Tracks Performance</p>
            <p style={{ color: '#94a3b8', fontSize: pxToRem(16) }}>Ongoing monitoring and portfolio integration</p>
          </div>
        </div>
      </div>
      <p style={{ marginTop: pxToRem(24), fontWeight: 'bold', fontSize: pxToRem(17.6) }}>
        Result: Institutional DD without the analyst team cost
      </p>
    </div>
  )

  const keyInsights = (
    <div>
      <h3 style={{ color: '#14b8a6', marginBottom: pxToRem(24) }}>AI Deal Memo Example</h3>
      <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: pxToRem(32), borderRadius: pxToRem(12) }}>
        <h4 style={{ fontSize: pxToRem(20.8), marginBottom: pxToRem(16) }}>Acme Private Credit Fund IV</h4>
        
        <div style={{ marginBottom: pxToRem(24) }}>
          <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: pxToRem(8) }}>Overview</p>
          <p style={{ fontSize: pxToRem(16), marginBottom: pxToRem(4.8) }}>Direct Lending Strategy</p>
          <p style={{ fontSize: pxToRem(15.2), color: '#94a3b8' }}>Target IRR: 12-14% | Term: 7 years | Min: $250K</p>
        </div>
        
        <div style={{ marginBottom: pxToRem(24) }}>
          <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: pxToRem(8) }}>Terms</p>
          <p style={{ fontSize: pxToRem(15.2), marginBottom: pxToRem(4.8) }}>Management Fee: 1.5% | Performance: 20%</p>
          <p style={{ fontSize: pxToRem(15.2), color: '#94a3b8' }}>Quarterly distributions</p>
        </div>
        
        <div style={{ marginBottom: pxToRem(24) }}>
          <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: pxToRem(8) }}>Risk Assessment</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8), marginBottom: pxToRem(4.8) }}>
            <AlertTriangle size={16} stroke="#fbbf24" />
            <p style={{ fontSize: pxToRem(15.2) }}>Credit Risk: Medium</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8), marginBottom: pxToRem(4.8) }}>
            <CheckCircle size={16} stroke="#22c55e" />
            <p style={{ fontSize: pxToRem(15.2) }}>Market Risk: Low</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
            <AlertTriangle size={16} stroke="#fbbf24" />
            <p style={{ fontSize: pxToRem(15.2) }}>Liquidity: High</p>
          </div>
        </div>
        
        <div style={{ background: 'rgba(34, 197, 94, 0.2)', padding: pxToRem(16), borderRadius: pxToRem(8), textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: pxToRem(8) }}>
          <CheckCircle size={20} stroke="#22c55e" strokeWidth={2.5} />
          <p style={{ fontSize: pxToRem(17.6), fontWeight: 'bold', color: '#22c55e' }}>SUITABLE</p>
          <p style={{ fontSize: pxToRem(15.2), color: '#94a3b8' }}>Fits 15% alternative target allocation</p>
        </div>
        
        <p style={{ fontSize: pxToRem(13.6), color: '#64748b', marginTop: pxToRem(16), fontStyle: 'italic' }}>
          Generated from 127-page offering memorandum in 5 minutes
        </p>
      </div>
    </div>
  )

  const citation = (
    <p style={{ textAlign: 'center', fontSize: pxToRem(20.8), color: '#14b8a6', fontWeight: 'bold' }}>
      16,000+ funds analyzed - +300-500bps potential alpha
    </p>
  )

  return (
    <DataSlideLayout
      title={
        <>
          <GradientText gradient="from-teal-400 to-cyan-400">Our "Alternative Asset" Agent: AI Due Diligence</GradientText>
          <p style={{ fontSize: pxToRem(17.6), color: '#94a3b8', textAlign: 'center', marginTop: pxToRem(8) }}>
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
