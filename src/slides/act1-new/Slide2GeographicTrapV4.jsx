import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Globe, TrendingDown, AlertCircle } from 'lucide-react'

const Slide2GeographicTrapV4 = () => {
  const WorldMapVisualization = () => (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(10, 22, 40, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderRadius: '16px',
      overflow: 'hidden'
    }}>
      {/* Gradient overlay for depth */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 22, 40, 0.4) 100%)'
      }} />
      
      {/* Growth Markets Label */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(20, 184, 166, 0.1) 100%)',
        border: '1px solid rgba(20, 184, 166, 0.3)',
        borderRadius: '8px',
        padding: '8px 16px',
        backdropFilter: 'blur(10px)'
      }}>
        <p style={{ fontSize: '12px', color: '#14B8A6', fontWeight: '600', margin: 0 }}>
          Growth Markets
        </p>
        <p style={{ fontSize: '10px', color: '#94A3B8', margin: 0 }}>
          35% of GDP
        </p>
      </div>

      {/* World regions as cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '12px',
        padding: '60px 20px 20px',
        height: '100%'
      }}>
        {/* US - Muted */}
        <div style={{
          gridColumn: '1',
          gridRow: '1',
          background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.15) 0%, rgba(148, 163, 184, 0.05) 100%)',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(5px)'
        }}>
          <p style={{ fontSize: '32px', fontWeight: '700', color: '#94A3B8', margin: '0 0 8px 0' }}>
            25%
          </p>
          <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0 }}>United States</p>
          <p style={{ fontSize: '10px', color: '#64748B', margin: '4px 0 0 0' }}>Mature</p>
        </div>

        {/* Europe - Muted */}
        <div style={{
          gridColumn: '2',
          gridRow: '1',
          background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.1) 0%, rgba(148, 163, 184, 0.05) 100%)',
          border: '1px solid rgba(148, 163, 184, 0.15)',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.7
        }}>
          <p style={{ fontSize: '24px', fontWeight: '600', color: '#64748B', margin: '0 0 4px 0' }}>
            12%
          </p>
          <p style={{ fontSize: '11px', color: '#64748B', margin: 0 }}>Europe</p>
        </div>

        {/* China - Growing */}
        <div style={{
          gridColumn: '3',
          gridRow: '1',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.25) 0%, rgba(20, 184, 166, 0.1) 100%)',
          border: '2px solid rgba(20, 184, 166, 0.4)',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(20, 184, 166, 0.2)',
          backdropFilter: 'blur(5px)'
        }}>
          <p style={{ fontSize: '32px', fontWeight: '700', color: '#14B8A6', margin: '0 0 8px 0' }}>
            18%
          </p>
          <p style={{ fontSize: '12px', color: '#FFFFFF', margin: 0 }}>China</p>
          <p style={{ fontSize: '10px', color: '#14B8A6', margin: '4px 0 0 0' }}>+6.5% growth</p>
        </div>

        {/* India - Highest Growth */}
        <div style={{
          gridColumn: '1',
          gridRow: '2',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3) 0%, rgba(20, 184, 166, 0.15) 100%)',
          border: '2px solid rgba(20, 184, 166, 0.5)',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 30px rgba(20, 184, 166, 0.3)',
          backdropFilter: 'blur(5px)',
          position: 'relative'
        }}>
          {/* Growth indicator */}
          <div style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            background: '#14B8A6',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '10px', color: '#0A1628', fontWeight: '700' }}>!</span>
          </div>
          <p style={{ fontSize: '32px', fontWeight: '700', color: '#14B8A6', margin: '0 0 8px 0' }}>
            8%
          </p>
          <p style={{ fontSize: '12px', color: '#FFFFFF', margin: 0, fontWeight: '600' }}>India</p>
          <p style={{ fontSize: '10px', color: '#14B8A6', margin: '4px 0 0 0', fontWeight: '600' }}>
            +8.2% growth
          </p>
        </div>

        {/* SEA - Growing */}
        <div style={{
          gridColumn: '2',
          gridRow: '2',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0.1) 100%)',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <p style={{ fontSize: '24px', fontWeight: '600', color: '#FBBF24', margin: '0 0 4px 0' }}>
            7%
          </p>
          <p style={{ fontSize: '11px', color: '#FBBF24', margin: 0 }}>SEA</p>
        </div>

        {/* Rest - Other EM */}
        <div style={{
          gridColumn: '3',
          gridRow: '2',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.05) 100%)',
          border: '1px solid rgba(251, 191, 36, 0.2)',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.8
        }}>
          <p style={{ fontSize: '24px', fontWeight: '600', color: '#FBBF24', margin: '0 0 4px 0' }}>
            12%
          </p>
          <p style={{ fontSize: '11px', color: '#FBBF24', margin: 0 }}>Other EM</p>
        </div>
      </div>

      {/* Total indicator */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '20px',
        padding: '8px 20px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(20, 184, 166, 0.2)'
      }}>
        <p style={{ fontSize: '11px', color: '#14B8A6', margin: 0, textAlign: 'center' }}>
          <strong>37%</strong> in Emerging Markets
        </p>
      </div>
    </div>
  )

  const PortfolioVisualization = () => (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(30, 41, 59, 0.9) 100%)',
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(148, 163, 184, 0.2) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Main US block */}
      <div style={{
        position: 'relative',
        width: '80%',
        height: '60%',
        background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.3) 0%, rgba(148, 163, 184, 0.15) 100%)',
        border: '2px solid rgba(148, 163, 184, 0.4)',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(5px)'
      }}>
        <p style={{ 
          fontSize: '72px', 
          fontWeight: '700', 
          color: '#FFFFFF',
          margin: 0,
          textShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}>
          82%
        </p>
        <p style={{ fontSize: '14px', color: '#94A3B8', margin: '8px 0 0 0' }}>
          United States
        </p>
      </div>

      {/* Small other allocations */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        display: 'flex',
        gap: '12px'
      }}>
        <div style={{
          background: 'rgba(148, 163, 184, 0.2)',
          borderRadius: '8px',
          padding: '8px 12px',
          border: '1px solid rgba(148, 163, 184, 0.3)'
        }}>
          <p style={{ fontSize: '14px', color: '#94A3B8', margin: 0 }}>
            EU: 15%
          </p>
        </div>
        <div style={{
          background: 'rgba(251, 113, 133, 0.2)',
          borderRadius: '8px',
          padding: '8px 12px',
          border: '1px solid rgba(251, 113, 133, 0.3)'
        }}>
          <p style={{ fontSize: '14px', color: '#FB7185', margin: 0 }}>
            Rest: 3%
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0A1628 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 64px',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}>
        {/* Title Section */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            THE GEOGRAPHIC TRAP
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            fontWeight: '400'
          }}>
            Your Portfolio vs. Global Reality
          </p>
        </div>

        {/* Main Comparison Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          flex: 1,
          marginBottom: '24px'
        }}>
          {/* Your Portfolio */}
          <div>
            <h2 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#94A3B8',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              YOUR PORTFOLIO TODAY
            </h2>
            <div style={{ height: '280px' }}>
              <PortfolioVisualization />
            </div>
          </div>

          {/* Global Economy */}
          <div>
            <h2 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              THE GLOBAL ECONOMY
            </h2>
            <div style={{ height: '280px' }}>
              <WorldMapVisualization />
            </div>
          </div>
        </div>

        {/* Key Insight Bar */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(251, 113, 133, 0.1) 0%, rgba(251, 113, 133, 0.05) 50%, rgba(251, 113, 133, 0.1) 100%)',
          border: '1px solid rgba(251, 113, 133, 0.2)',
          borderRadius: '12px',
          padding: '16px 24px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          backdropFilter: 'blur(10px)'
        }}>
          <AlertCircle size={20} color="#FB7185" />
          <p style={{
            fontSize: '16px',
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'center'
          }}>
            You're missing <strong style={{ color: '#FB7185' }}>87% of global growth</strong> while paying 
            <strong style={{ color: '#FB7185' }}> 35% tax on India</strong> (vs Goldman's 0%)
          </p>
        </div>

        {/* Meet Priya Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, transparent 100%)',
          borderRadius: '12px',
          padding: '20px 24px',
          border: '1px solid rgba(20, 184, 166, 0.15)'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #14B8A6 0%, #0891B2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: '#0A1628',
            fontWeight: '700',
            boxShadow: '0 8px 20px rgba(20, 184, 166, 0.3)',
            flexShrink: 0
          }}>
            P
          </div>
          
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
              <p style={{
                fontSize: '18px',
                color: '#14B8A6',
                fontWeight: '600',
                margin: 0
              }}>
                Meet Priya
              </p>
              <p style={{
                fontSize: '14px',
                color: '#94A3B8',
                margin: 0
              }}>
                Stanford MBA • $3M portfolio • 95% in US equities
              </p>
            </div>
            <p style={{
              fontSize: '16px',
              color: '#FFFFFF',
              margin: 0
            }}>
              Annual loss from geographic trap: <strong style={{ color: '#FB7185', fontSize: '18px' }}>$190,000</strong>
            </p>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide2GeographicTrapV4
