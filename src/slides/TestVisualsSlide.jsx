import React from 'react'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import ARIAAvatar, { ARIAStatus, ARIAIcon } from '../components/ARIAAvatar'
import SimpleAvatar from '../components/SimpleAvatar'
import { MarketGrowthChart, AIPerformanceChart, RevenueProjectionChart, AgentMetricsChart, TaxSavingsChart } from '../components/DataCharts'
import { AcquisitionFunnelChart, MarketShareChart, IndiaTimelineChart, CompetitiveMatrixChart, UnitEconomicsChart } from '../components/DataChartsAdvanced'

export default function TestVisualsSlide() {
  return (
    <AspectFrame>
      <div style={{
        height: '100%',
        padding: '2rem',
        overflow: 'auto',
        background: 'linear-gradient(135deg, #0f172a, #1e293b)'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <GradientText gradient="from-teal-400 via-cyan-400 to-blue-400">
            Visual Components Test
          </GradientText>
        </h1>

        {/* Simple Avatar Test */}
        <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '10px' }}>
          <h2 style={{ color: '#14b8a6', marginBottom: '1rem' }}>🔍 Debug: Simple Avatar Test</h2>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
            <SimpleAvatar size={80} />
            <SimpleAvatar size={120} />
            <SimpleAvatar size={180} />
          </div>
          <p style={{ color: '#94a3b8', marginTop: '1rem', textAlign: 'center' }}>
            Check browser console for loading status (F12)
          </p>
        </div>

        {/* ARIA Avatar Components */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#14b8a6', marginBottom: '1rem' }}>ARIA Avatar System - Professional AI CEO</h2>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <ARIAAvatar size="small" variant="default" animated={true} showPulse={false} mood="confident" />
              <p style={{ color: '#94a3b8', marginTop: '0.5rem', fontSize: '0.9rem' }}>Small - Default</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <ARIAAvatar size="medium" variant="default" animated={true} showPulse={true} mood="friendly" />
              <p style={{ color: '#94a3b8', marginTop: '0.5rem', fontSize: '0.9rem' }}>Medium - Pulse</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <ARIAAvatar size="large" variant="gradient" animated={true} showPulse={true} mood="confident" />
              <p style={{ color: '#94a3b8', marginTop: '0.5rem', fontSize: '0.9rem' }}>Large - Gradient</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <ARIAAvatar size="hero" variant="gradient" animated={true} showPulse={true} mood="friendly" />
              <p style={{ color: '#94a3b8', marginTop: '0.5rem', fontSize: '0.9rem' }}>Hero - Title Slide</p>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <ARIAStatus status="active" size="small" />
            <ARIAStatus status="thinking" size="small" />
            <ARIAStatus status="processing" size="small" />
            <ARIAStatus status="alert" size="small" />
          </div>
          
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <ARIAIcon size={64} color="#14b8a6" />
            <p style={{ color: '#94a3b8', marginTop: '0.5rem', fontSize: '0.8rem' }}>ARIA Icon (Simplified)</p>
          </div>
        </div>

        {/* Charts Grid */}
        <h2 style={{ color: '#14b8a6', marginBottom: '1rem' }}>Data Visualization Charts</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{ height: '300px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '1rem' }}>
            <AIPerformanceChart animated={false} />
          </div>
          <div style={{ height: '300px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '1rem' }}>
            <MarketGrowthChart animated={false} />
          </div>
          <div style={{ height: '300px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '1rem' }}>
            <RevenueProjectionChart animated={false} />
          </div>
          <div style={{ height: '300px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '1rem' }}>
            <AgentMetricsChart animated={false} />
          </div>
          <div style={{ height: '300px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '1rem' }}>
            <TaxSavingsChart animated={false} />
          </div>
          <div style={{ height: '300px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '1rem' }}>
            <AcquisitionFunnelChart animated={false} />
          </div>
          <div style={{ height: '300px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '1rem' }}>
            <MarketShareChart animated={false} />
          </div>
          <div style={{ height: '300px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '1rem' }}>
            <CompetitiveMatrixChart animated={false} />
          </div>
        </div>

        <p style={{ textAlign: 'center', color: '#5eead4', fontSize: '1.2rem', marginTop: '2rem' }}>
          ✅ All Visual Components Working!
        </p>
      </div>
    </AspectFrame>
  )
}
