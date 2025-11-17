import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Globe, TrendingDown, AlertCircle, Brain, Lock } from 'lucide-react'

const Slide2GeographicTrapV5 = () => {
  // Heat map visualization for portfolio concentration
  const PortfolioHeatMap = () => (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* US Block - Oversized */}
      <div style={{
        flex: '0 0 82%',
        background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.4) 0%, rgba(251, 113, 133, 0.2) 100%)',
        borderRadius: '12px 12px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        border: '2px solid rgba(251, 113, 133, 0.5)'
      }}>
        {/* Warning pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(251, 113, 133, 0.2) 10px, rgba(251, 113, 133, 0.2) 20px)'
        }} />
        
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '80px', fontWeight: '700', color: '#FFFFFF', margin: 0, textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            82%
          </p>
          <p style={{ fontSize: '18px', color: '#FB7185', fontWeight: '600', marginTop: '8px' }}>
            UNITED STATES
          </p>
          <p style={{ fontSize: '14px', color: '#FFFFFF', marginTop: '4px', opacity: 0.9 }}>
            Dangerous Concentration
          </p>
        </div>
      </div>
      
      {/* Rest of World - Tiny */}
      <div style={{
        flex: '0 0 18%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2px',
        padding: '2px',
        background: 'rgba(148, 163, 184, 0.1)',
        borderRadius: '0 0 12px 12px'
      }}>
        <div style={{
          background: 'rgba(148, 163, 184, 0.3)',
          borderRadius: '4px',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div>
            <p style={{ fontSize: '20px', color: '#94A3B8', fontWeight: '600', margin: 0 }}>15%</p>
            <p style={{ fontSize: '10px', color: '#64748B', margin: 0 }}>Europe</p>
          </div>
        </div>
        <div style={{
          background: 'rgba(20, 184, 166, 0.2)',
          borderRadius: '4px',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div>
            <p style={{ fontSize: '20px', color: '#14B8A6', fontWeight: '600', margin: 0 }}>2%</p>
            <p style={{ fontSize: '10px', color: '#14B8A6', margin: 0 }}>Asia</p>
          </div>
        </div>
        <div style={{
          background: 'rgba(251, 191, 36, 0.2)',
          borderRadius: '4px',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div>
            <p style={{ fontSize: '20px', color: '#FBBF24', fontWeight: '600', margin: 0 }}>1%</p>
            <p style={{ fontSize: '10px', color: '#FBBF24', margin: 0 }}>Other</p>
          </div>
        </div>
      </div>
    </div>
  )

  // Global opportunity visualization
  const GlobalOpportunityMap = () => (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateRows: 'repeat(3, 1fr)',
      gap: '12px'
    }}>
      {/* India - Top Growth */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.4) 0%, rgba(20, 184, 166, 0.2) 100%)',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '2px solid rgba(20, 184, 166, 0.5)',
        boxShadow: '0 8px 20px rgba(20, 184, 166, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Growth indicator animation */}
        <div style={{
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, transparent 70%)',
          animation: 'pulse 2s infinite'
        }} />
        
        <div>
          <p style={{ fontSize: '24px', fontWeight: '700', color: '#14B8A6', margin: 0 }}>
            INDIA
          </p>
          <p style={{ fontSize: '14px', color: '#FFFFFF', margin: '4px 0 0 0' }}>
            $5T economy • 8.2% growth
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '32px', fontWeight: '700', color: '#14B8A6', margin: 0 }}>
            +42%
          </p>
          <p style={{ fontSize: '12px', color: '#14B8A6', margin: 0 }}>
            Next 3 years
          </p>
        </div>
      </div>

      {/* China + SEA */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3) 0%, rgba(251, 191, 36, 0.15) 100%)',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid rgba(251, 191, 36, 0.4)'
      }}>
        <div>
          <p style={{ fontSize: '20px', fontWeight: '600', color: '#FBBF24', margin: 0 }}>
            CHINA + SEA
          </p>
          <p style={{ fontSize: '13px', color: '#FFFFFF', margin: '4px 0 0 0' }}>
            $20T combined • Tech boom
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '28px', fontWeight: '700', color: '#FBBF24', margin: 0 }}>
            +35%
          </p>
          <p style={{ fontSize: '11px', color: '#FBBF24', margin: 0 }}>
            Growth potential
          </p>
        </div>
      </div>

      {/* US - Mature */}
      <div style={{
        background: 'rgba(148, 163, 184, 0.2)',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid rgba(148, 163, 184, 0.3)',
        opacity: 0.7
      }}>
        <div>
          <p style={{ fontSize: '20px', fontWeight: '600', color: '#94A3B8', margin: 0 }}>
            UNITED STATES
          </p>
          <p style={{ fontSize: '13px', color: '#64748B', margin: '4px 0 0 0' }}>
            $25T economy • Mature
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '28px', fontWeight: '700', color: '#94A3B8', margin: 0 }}>
            +8%
          </p>
          <p style={{ fontSize: '11px', color: '#64748B', margin: 0 }}>
            Slowing
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
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
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
            fontSize: '20px',
            color: '#94A3B8',
            fontWeight: '400'
          }}>
            Your Portfolio is Stuck in 1990s America
          </p>
        </div>

        {/* Main Visualization */}
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
              color: '#FB7185',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Lock size={16} />
              YOUR TRAPPED PORTFOLIO
            </h2>
            <div style={{ height: '280px' }}>
              <PortfolioHeatMap />
            </div>
          </div>

          {/* Global Reality */}
          <div>
            <h2 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Globe size={16} />
              WHERE THE GROWTH IS
            </h2>
            <div style={{ height: '280px' }}>
              <GlobalOpportunityMap />
            </div>
          </div>
        </div>

        {/* Key Problem - Sets up for AI Solution */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(251, 113, 133, 0.1) 0%, rgba(251, 113, 133, 0.05) 50%, rgba(251, 113, 133, 0.1) 100%)',
          border: '1px solid rgba(251, 113, 133, 0.2)',
          borderRadius: '12px',
          padding: '16px 24px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <AlertCircle size={20} color="#FB7185" />
            <div>
              <p style={{
                fontSize: '16px',
                color: '#FFFFFF',
                margin: 0
              }}>
                You're missing <strong style={{ color: '#FB7185' }}>87% of global growth</strong> • 
                Paying <strong style={{ color: '#FB7185' }}> 35% tax on India</strong> (Goldman pays 0%) • 
                <strong style={{ color: '#FB7185' }}> Zero AI</strong> to navigate complexity
              </p>
            </div>
          </div>
        </div>

        {/* The Human Problem - Sets up for AI */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '24px',
          alignItems: 'center',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, transparent 100%)',
          borderRadius: '12px',
          padding: '20px 24px',
          border: '1px solid rgba(20, 184, 166, 0.15)'
        }}>
          {/* Priya Avatar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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
              boxShadow: '0 8px 20px rgba(20, 184, 166, 0.3)'
            }}>
              P
            </div>
            <div>
              <p style={{ fontSize: '18px', color: '#14B8A6', fontWeight: '600', margin: 0 }}>
                Meet Priya
              </p>
              <p style={{ fontSize: '13px', color: '#94A3B8', margin: '2px 0 0 0' }}>
                Stanford MBA • $3M portfolio
              </p>
            </div>
          </div>
          
          {/* The Problem */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Brain size={24} color="#FB7185" />
            <div>
              <p style={{ fontSize: '15px', color: '#FFFFFF', margin: 0 }}>
                <strong>Her problem:</strong> Human brain can't process 87 markets, 
                16,000 funds, tax optimization across jurisdictions
              </p>
              <p style={{ fontSize: '14px', color: '#FB7185', fontWeight: '600', marginTop: '4px' }}>
                Annual loss: $190,000 • Only AI can solve this complexity
              </p>
            </div>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide2GeographicTrapV5
