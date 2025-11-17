import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Globe } from 'lucide-react'

const Slide2GeographicTrapV2 = () => {
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
          fontWeight: '600',
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
          marginBottom: '40px'
        }}>
          Your Portfolio vs. Global Reality
        </p>

        {/* Visual World Map Placeholder */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          marginBottom: '32px',
          flex: 1
        }}>
          {/* Your Portfolio Map */}
          <div style={{
            background: 'rgba(251, 113, 133, 0.05)',
            border: '1px solid rgba(251, 113, 133, 0.2)',
            borderRadius: '16px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#FB7185',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              YOUR PORTFOLIO TODAY
            </h2>
            
            {/* Map Placeholder */}
            <div style={{
              flex: 1,
              background: 'rgba(30, 41, 59, 0.5)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              minHeight: '200px'
            }}>
              <Globe size={48} color="#334155" />
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '15%',
                background: '#FB7185',
                padding: '8px 16px',
                borderRadius: '6px'
              }}>
                <strong style={{ color: '#FFFFFF', fontSize: '24px' }}>82%</strong>
                <p style={{ color: '#FFFFFF', fontSize: '12px', margin: 0 }}>USA</p>
              </div>
              <div style={{
                position: 'absolute',
                top: '35%',
                right: '25%',
                background: 'rgba(251, 113, 133, 0.5)',
                padding: '6px 12px',
                borderRadius: '6px'
              }}>
                <strong style={{ color: '#FFFFFF', fontSize: '16px' }}>15%</strong>
                <p style={{ color: '#FFFFFF', fontSize: '10px', margin: 0 }}>EU</p>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '30%',
                right: '15%',
                background: 'rgba(251, 113, 133, 0.3)',
                padding: '4px 8px',
                borderRadius: '6px'
              }}>
                <strong style={{ color: '#94A3B8', fontSize: '14px' }}>3%</strong>
                <p style={{ color: '#94A3B8', fontSize: '10px', margin: 0 }}>Asia</p>
              </div>
            </div>
            
            {/* Key Stats */}
            <div style={{
              marginTop: '20px',
              padding: '16px',
              background: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '8px'
            }}>
              <p style={{ color: '#FB7185', fontSize: '14px', fontWeight: '600', margin: '0 0 8px 0' }}>
                Your Reality:
              </p>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: '4px 0' }}>
                • Missing 87% of global growth
              </p>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: '4px 0' }}>
                • Zero emerging market access
              </p>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: '4px 0' }}>
                • Trapped in 2.5% US growth
              </p>
            </div>
          </div>

          {/* Global Economy Map */}
          <div style={{
            background: 'rgba(20, 184, 166, 0.05)',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            borderRadius: '16px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              THE GLOBAL ECONOMY
            </h2>
            
            {/* Map Placeholder */}
            <div style={{
              flex: 1,
              background: 'rgba(30, 41, 59, 0.5)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              minHeight: '200px'
            }}>
              <Globe size={48} color="#334155" />
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '15%',
                background: 'rgba(20, 184, 166, 0.7)',
                padding: '8px 16px',
                borderRadius: '6px'
              }}>
                <strong style={{ color: '#FFFFFF', fontSize: '18px' }}>25%</strong>
                <p style={{ color: '#FFFFFF', fontSize: '12px', margin: 0 }}>USA</p>
              </div>
              <div style={{
                position: 'absolute',
                top: '50%',
                right: '20%',
                background: '#14B8A6',
                padding: '8px 16px',
                borderRadius: '6px'
              }}>
                <strong style={{ color: '#FFFFFF', fontSize: '20px' }}>35%</strong>
                <p style={{ color: '#FFFFFF', fontSize: '12px', margin: 0 }}>Asia</p>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '25%',
                left: '35%',
                background: 'rgba(20, 184, 166, 0.8)',
                padding: '6px 12px',
                borderRadius: '6px'
              }}>
                <strong style={{ color: '#FFFFFF', fontSize: '16px' }}>8%</strong>
                <p style={{ color: '#FFFFFF', fontSize: '10px', margin: 0 }}>India</p>
              </div>
            </div>
            
            {/* Key Stats */}
            <div style={{
              marginTop: '20px',
              padding: '16px',
              background: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '8px'
            }}>
              <p style={{ color: '#14B8A6', fontSize: '14px', fontWeight: '600', margin: '0 0 8px 0' }}>
                Global Reality:
              </p>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: '4px 0' }}>
                • India growing at 8.2% annually
              </p>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: '4px 0' }}>
                • Asia represents 60% of people
              </p>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: '4px 0' }}>
                • 87% of growth outside US
              </p>
            </div>
          </div>
        </div>

        {/* Meet Priya Section */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05), rgba(251, 113, 133, 0.05))',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          borderRadius: '12px',
          padding: '20px 32px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '32px',
          marginBottom: '24px'
        }}>
          <div>
            <p style={{ color: '#14B8A6', fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>
              "Meet Priya"
            </p>
            <p style={{ color: '#FFFFFF', fontSize: '14px', marginBottom: '8px' }}>
              Stanford MBA • Tech Executive • $3M Portfolio
            </p>
            <p style={{ color: '#94A3B8', fontSize: '13px' }}>
              95% US Equities • 5% Bonds • 0% Global
            </p>
          </div>
          
          <div style={{
            width: '1px',
            height: '60px',
            background: 'rgba(148, 163, 184, 0.3)'
          }} />
          
          <div>
            <p style={{ color: '#FB7185', fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>
              -$180,000
            </p>
            <p style={{ color: '#94A3B8', fontSize: '13px' }}>
              Annual opportunity cost from geographic concentration
            </p>
            <p style={{ color: '#14B8A6', fontSize: '12px', marginTop: '8px' }}>
              While Goldman's identical $3M is globally diversified
            </p>
          </div>
        </div>

        {/* Bottom Message */}
        <div style={{
          textAlign: 'center',
          padding: '16px'
        }}>
          <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600' }}>
            You're not investing globally. <span style={{ color: '#14B8A6' }}>You're investing in yesterday.</span>
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide2GeographicTrapV2
