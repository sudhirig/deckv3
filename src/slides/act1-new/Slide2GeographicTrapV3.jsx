import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'

const Slide2GeographicTrapV3 = () => {
  // Simple SVG map components
  const USMap = () => (
    <svg viewBox="0 0 200 120" style={{ width: '100%', height: '100%' }}>
      {/* Simplified US shape */}
      <path
        d="M 20 60 L 30 40 L 50 35 L 80 30 L 120 35 L 160 40 L 170 50 L 175 65 L 170 75 L 160 80 L 140 85 L 100 88 L 60 85 L 30 80 L 20 70 Z"
        fill="rgba(148, 163, 184, 0.8)"
        stroke="rgba(148, 163, 184, 1)"
        strokeWidth="2"
      />
      {/* Alaska */}
      <rect x="15" y="85" width="15" height="10" fill="rgba(148, 163, 184, 0.6)" />
      {/* Hawaii */}
      <circle cx="50" cy="95" r="3" fill="rgba(148, 163, 184, 0.6)" />
      
      {/* Highlight concentration */}
      <text x="100" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="700">
        82%
      </text>
    </svg>
  )

  const WorldMap = () => (
    <svg viewBox="0 0 360 180" style={{ width: '100%', height: '100%' }}>
      {/* North America - smaller */}
      <path
        d="M 40 60 L 50 50 L 70 48 L 90 50 L 95 65 L 85 75 L 60 78 L 40 70 Z"
        fill="rgba(94, 163, 184, 0.5)"
        stroke="rgba(94, 163, 184, 0.8)"
        strokeWidth="1"
      />
      <text x="65" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="10">25%</text>
      
      {/* Europe */}
      <path
        d="M 160 50 L 180 48 L 195 52 L 190 65 L 175 68 L 160 62 Z"
        fill="rgba(94, 163, 184, 0.4)"
        stroke="rgba(94, 163, 184, 0.7)"
        strokeWidth="1"
      />
      <text x="175" y="60" textAnchor="middle" fill="#94A3B8" fontSize="8">12%</text>
      
      {/* India - highlighted */}
      <path
        d="M 230 80 L 240 75 L 245 85 L 242 95 L 235 92 L 230 85 Z"
        fill="rgba(20, 184, 166, 0.8)"
        stroke="#14B8A6"
        strokeWidth="2"
      />
      <text x="237" y="87" textAnchor="middle" fill="#14B8A6" fontSize="10" fontWeight="600">8%</text>
      
      {/* China - highlighted */}
      <path
        d="M 260 60 L 285 58 L 295 70 L 290 82 L 270 85 L 258 75 Z"
        fill="rgba(20, 184, 166, 0.6)"
        stroke="#14B8A6"
        strokeWidth="2"
      />
      <text x="275" y="72" textAnchor="middle" fill="#14B8A6" fontSize="10" fontWeight="600">18%</text>
      
      {/* Southeast Asia */}
      <g>
        <circle cx="270" cy="100" r="4" fill="rgba(20, 184, 166, 0.5)" />
        <circle cx="280" cy="105" r="3" fill="rgba(20, 184, 166, 0.5)" />
        <circle cx="285" cy="98" r="3" fill="rgba(20, 184, 166, 0.5)" />
        <text x="275" y="115" textAnchor="middle" fill="#14B8A6" fontSize="8">7%</text>
      </g>
      
      {/* Africa */}
      <path
        d="M 175 90 L 185 85 L 195 95 L 192 115 L 180 120 L 170 115 L 168 100 Z"
        fill="rgba(251, 191, 36, 0.5)"
        stroke="rgba(251, 191, 36, 0.8)"
        strokeWidth="1"
      />
      <text x="180" y="105" textAnchor="middle" fill="#FBBF24" fontSize="8">5%</text>
      
      {/* South America */}
      <path
        d="M 85 100 L 95 95 L 100 110 L 95 130 L 85 125 L 80 110 Z"
        fill="rgba(251, 191, 36, 0.4)"
        stroke="rgba(251, 191, 36, 0.7)"
        strokeWidth="1"
      />
      <text x="88" y="115" textAnchor="middle" fill="#FBBF24" fontSize="8">4%</text>
      
      {/* Australia */}
      <ellipse cx="300" cy="130" rx="15" ry="8" fill="rgba(94, 163, 184, 0.3)" />
      <text x="300" y="133" textAnchor="middle" fill="#94A3B8" fontSize="8">2%</text>
      
      {/* Legend Box */}
      <rect x="10" y="10" width="80" height="30" fill="rgba(0, 0, 0, 0.5)" stroke="rgba(148, 163, 184, 0.3)" />
      <text x="50" y="22" textAnchor="middle" fill="#14B8A6" fontSize="9" fontWeight="600">Growth Markets</text>
      <text x="50" y="35" textAnchor="middle" fill="#94A3B8" fontSize="8">35% of GDP</text>
    </svg>
  )

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: '#0A1628',
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 64px',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '8px'
        }}>
          THE GEOGRAPHIC TRAP
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#94A3B8',
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          Your Portfolio vs. Global Reality
        </p>

        {/* Map Comparison */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          marginBottom: '32px',
          height: '280px'
        }}>
          {/* Your Portfolio */}
          <div style={{
            border: '2px solid rgba(148, 163, 184, 0.3)',
            borderRadius: '12px',
            padding: '20px',
            background: 'rgba(148, 163, 184, 0.05)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#94A3B8',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              YOUR PORTFOLIO TODAY
            </h2>
            
            <div style={{ flex: 1, position: 'relative' }}>
              <USMap />
            </div>
            
            <div style={{
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(148, 163, 184, 0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#94A3B8', fontSize: '14px' }}>🇺🇸 United States</span>
                <span style={{ color: '#FB7185', fontSize: '16px', fontWeight: '600' }}>82%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#94A3B8', fontSize: '14px' }}>🇪🇺 Europe</span>
                <span style={{ color: '#FFFFFF', fontSize: '16px' }}>15%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94A3B8', fontSize: '14px' }}>🌏 Rest of World</span>
                <span style={{ color: '#FFFFFF', fontSize: '16px' }}>3%</span>
              </div>
            </div>
          </div>

          {/* Global Economy */}
          <div style={{
            border: '2px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '12px',
            padding: '20px',
            background: 'rgba(20, 184, 166, 0.05)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              THE GLOBAL ECONOMY
            </h2>
            
            <div style={{ flex: 1, position: 'relative' }}>
              <WorldMap />
            </div>
            
            <div style={{
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(20, 184, 166, 0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#94A3B8', fontSize: '14px' }}>🇺🇸 United States</span>
                <span style={{ color: '#FFFFFF', fontSize: '16px' }}>25%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#94A3B8', fontSize: '14px' }}>🇮🇳 India + 🇨🇳 China</span>
                <span style={{ color: '#14B8A6', fontSize: '16px', fontWeight: '600' }}>26%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94A3B8', fontSize: '14px' }}>🌏 Emerging Markets</span>
                <span style={{ color: '#14B8A6', fontSize: '16px', fontWeight: '600' }}>37%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div style={{
          background: 'rgba(251, 113, 133, 0.05)',
          border: '1px solid rgba(251, 113, 133, 0.2)',
          borderRadius: '8px',
          padding: '16px 24px',
          marginBottom: '24px'
        }}>
          <p style={{
            fontSize: '16px',
            color: '#FFFFFF',
            textAlign: 'center'
          }}>
            <strong style={{ color: '#FB7185' }}>You're missing 87% of global growth</strong> while paying 
            <strong style={{ color: '#FB7185' }}> 35% tax on India</strong> (vs Goldman's 0%)
          </p>
        </div>

        {/* Meet Priya */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          padding: '20px',
          background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.05), transparent)',
          borderRadius: '8px'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #14B8A6, #0891B2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: '#FFFFFF',
            fontWeight: '600'
          }}>
            P
          </div>
          
          <div>
            <p style={{
              fontSize: '18px',
              color: '#14B8A6',
              fontWeight: '600',
              marginBottom: '4px'
            }}>
              Meet Priya
            </p>
            <p style={{
              fontSize: '14px',
              color: '#FFFFFF',
              marginBottom: '4px'
            }}>
              Stanford MBA • $3M portfolio • 95% in US equities
            </p>
            <p style={{
              fontSize: '16px',
              color: '#FB7185',
              fontWeight: '600'
            }}>
              Annual loss from geographic trap: $190,000
            </p>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide2GeographicTrapV3
