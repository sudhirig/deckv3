import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'

const Slide2GeographicBlindspotV0 = () => {
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
          fontSize: '32px',
          fontWeight: '600',
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          YOUR PORTFOLIO IS TRAPPED IN YESTERDAY'S GEOGRAPHY
        </h1>

        {/* Split Screen Comparison */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          marginBottom: '40px'
        }}>
          {/* Your Portfolio Today */}
          <div style={{
            border: '2px solid #94A3B8',
            borderRadius: '8px',
            padding: '32px',
            background: 'rgba(148, 163, 184, 0.05)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#94A3B8',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              YOUR PORTFOLIO TODAY
            </h2>
            
            {/* Map Placeholder */}
            <div style={{
              height: '200px',
              background: 'rgba(148, 163, 184, 0.1)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <p style={{ color: '#94A3B8' }}>[US Map - Gray]</p>
            </div>
            
            {/* Stats */}
            <div style={{ fontSize: '18px', lineHeight: '2' }}>
              <div>🇺🇸 US: <strong style={{ color: '#FFFFFF' }}>82%</strong></div>
              <div>🇪🇺 EU: <strong style={{ color: '#FFFFFF' }}>15%</strong></div>
              <div>🌏 Asia: <strong style={{ color: '#FFFFFF' }}>3%</strong></div>
              <div>🌍 EM: <strong style={{ color: '#FB7185' }}>0%</strong></div>
            </div>
          </div>

          {/* The Actual Global Economy */}
          <div style={{
            border: '2px solid #14B8A6',
            borderRadius: '8px',
            padding: '32px',
            background: 'rgba(20, 184, 166, 0.05)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              THE ACTUAL GLOBAL ECONOMY
            </h2>
            
            {/* Map Placeholder */}
            <div style={{
              height: '200px',
              background: 'rgba(20, 184, 166, 0.1)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <p style={{ color: '#14B8A6' }}>[World Map - Teal]</p>
            </div>
            
            {/* Stats */}
            <div style={{ fontSize: '18px', lineHeight: '2' }}>
              <div>🇺🇸 US: <strong style={{ color: '#FFFFFF' }}>25%</strong></div>
              <div>🇮🇳 India: <strong style={{ color: '#14B8A6' }}>8%</strong></div>
              <div>🇨🇳 China: <strong style={{ color: '#FFFFFF' }}>18%</strong></div>
              <div>🌏 Asia: <strong style={{ color: '#14B8A6' }}>35%</strong></div>
              <div>🌍 EM: <strong style={{ color: '#FFFFFF' }}>14%</strong></div>
            </div>
          </div>
        </div>

        {/* Three Brutal Realities */}
        <div style={{
          background: 'rgba(251, 113, 133, 0.05)',
          border: '1px solid rgba(251, 113, 133, 0.2)',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#FB7185',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            THREE BRUTAL REALITIES YOU FACE:
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            <div>
              <strong style={{ color: '#FFFFFF', fontSize: '14px' }}>1. Geographic Penalty:</strong>
              <p style={{ color: '#94A3B8', fontSize: '14px', marginTop: '4px' }}>
                You get 4% growth while India delivers 8.2%
              </p>
            </div>
            <div>
              <strong style={{ color: '#FFFFFF', fontSize: '14px' }}>2. Tax Inequality:</strong>
              <p style={{ color: '#94A3B8', fontSize: '14px', marginTop: '4px' }}>
                You pay 35% on India, Goldman pays 0% via GIFT
              </p>
            </div>
            <div>
              <strong style={{ color: '#FFFFFF', fontSize: '14px' }}>3. Access Barrier:</strong>
              <p style={{ color: '#94A3B8', fontSize: '14px', marginTop: '4px' }}>
                87% of global growth is outside the US - you capture 0%
              </p>
            </div>
          </div>
        </div>

        {/* Persona Story */}
        <div style={{
          background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.05), transparent)',
          borderTop: '1px solid rgba(148, 163, 184, 0.2)',
          borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px'
        }}>
          <div>
            <p style={{ fontSize: '16px', color: '#14B8A6', fontWeight: '600' }}>
              "Meet Priya":
            </p>
            <p style={{ fontSize: '14px', color: '#FFFFFF' }}>
              Stanford MBA, $3M portfolio, 95% in US equities
            </p>
          </div>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'rgba(148, 163, 184, 0.3)'
          }} />
          <div>
            <p style={{ fontSize: '14px', color: '#FFFFFF' }}>
              <strong style={{ color: '#FB7185' }}>Her loss:</strong> $180K annually from geographic concentration
            </p>
            <p style={{ fontSize: '14px', color: '#94A3B8' }}>
              <strong>Goldman's identical $3M:</strong> Globally diversified, 0% India tax
            </p>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide2GeographicBlindspotV0
