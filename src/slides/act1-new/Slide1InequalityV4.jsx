import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { TrendingUp, TrendingDown } from 'lucide-react'

const Slide1InequalityV4 = () => {
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0A1628 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '64px',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}>
        {/* Background gradient mesh */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          background: 'radial-gradient(ellipse at top left, rgba(20, 184, 166, 0.1) 0%, transparent 40%), radial-gradient(ellipse at bottom right, rgba(251, 113, 133, 0.1) 0%, transparent 40%)',
          pointerEvents: 'none'
        }} />

        {/* Title */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#FFFFFF',
          marginBottom: '48px',
          textAlign: 'center',
          letterSpacing: '-0.02em'
        }}>
          THE WEALTH INEQUALITY GAP
        </h1>

        {/* Comparison Container */}
        <div style={{
          position: 'relative',
          maxWidth: '900px',
          width: '100%'
        }}>
          {/* VS Indicator */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #0A1628 0%, #1e293b 100%)',
            border: '2px solid rgba(148, 163, 184, 0.3)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
          }}>
            <span style={{ fontSize: '14px', color: '#94A3B8', fontWeight: '600' }}>VS</span>
          </div>

          {/* Main Comparison Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
            background: 'rgba(148, 163, 184, 0.1)',
            borderRadius: '20px',
            padding: '2px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}>
            {/* Goldman Side */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(10, 22, 40, 0.9) 0%, rgba(10, 22, 40, 0.95) 100%)',
              borderRadius: '18px 0 0 18px',
              overflow: 'hidden'
            }}>
              {/* Header */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.1) 100%)',
                padding: '24px',
                borderBottom: '1px solid rgba(20, 184, 166, 0.2)'
              }}>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#14B8A6',
                  margin: 0,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Goldman Client
                </h2>
              </div>

              {/* Items */}
              <div style={{ padding: '8px' }}>
                {[
                  { label: 'Global access', detail: '87 markets instantly' },
                  { label: '0% India tax', detail: 'Via GIFT City AIF' },
                  { label: 'AI optimization', detail: '600% outperformance' },
                  { label: 'Single platform', detail: 'Unified command center' }
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '20px 24px',
                    borderBottom: i < 3 ? '1px solid rgba(148, 163, 184, 0.1)' : 'none',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(20, 184, 166, 0.03)'
                  }}>
                    <p style={{ 
                      fontSize: '18px', 
                      color: '#14B8A6', 
                      fontWeight: '600',
                      margin: '0 0 4px 0'
                    }}>
                      {item.label}
                    </p>
                    <p style={{ 
                      fontSize: '13px', 
                      color: '#94A3B8',
                      margin: 0
                    }}>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer - Annual Alpha */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(20, 184, 166, 0.15) 100%)',
                padding: '24px',
                borderTop: '2px solid rgba(20, 184, 166, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px'
              }}>
                <TrendingUp size={24} color="#14B8A6" />
                <div>
                  <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0 }}>Annual Alpha</p>
                  <p style={{ fontSize: '32px', color: '#14B8A6', fontWeight: '700', margin: 0 }}>
                    +8.2%
                  </p>
                </div>
              </div>
            </div>

            {/* Your Reality Side */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(30, 41, 59, 0.95) 100%)',
              borderRadius: '0 18px 18px 0',
              overflow: 'hidden'
            }}>
              {/* Header */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.15) 0%, rgba(251, 113, 133, 0.1) 100%)',
                padding: '24px',
                borderBottom: '1px solid rgba(251, 113, 133, 0.2)'
              }}>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#FB7185',
                  margin: 0,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Your Reality
                </h2>
              </div>

              {/* Items */}
              <div style={{ padding: '8px' }}>
                {[
                  { label: 'US-only trap', detail: '82% concentration risk' },
                  { label: '35% India tax', detail: 'FPI penalty' },
                  { label: 'Manual chaos', detail: 'Excel + emails' },
                  { label: '10+ providers', detail: 'Fragmented mess' }
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '20px 24px',
                    borderBottom: i < 3 ? '1px solid rgba(148, 163, 184, 0.1)' : 'none',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(251, 113, 133, 0.03)'
                  }}>
                    <p style={{ 
                      fontSize: '18px', 
                      color: '#FFFFFF', 
                      fontWeight: '600',
                      margin: '0 0 4px 0'
                    }}>
                      {item.label}
                    </p>
                    <p style={{ 
                      fontSize: '13px', 
                      color: '#94A3B8',
                      margin: 0
                    }}>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer - Annual Alpha */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.2) 0%, rgba(251, 113, 133, 0.15) 100%)',
                padding: '24px',
                borderTop: '2px solid rgba(251, 113, 133, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px'
              }}>
                <TrendingDown size={24} color="#FB7185" />
                <div>
                  <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0 }}>Annual Alpha</p>
                  <p style={{ fontSize: '32px', color: '#FB7185', fontWeight: '700', margin: 0 }}>
                    +2.5%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Annual Loss Indicator */}
        <div style={{
          marginTop: '40px',
          background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.1) 0%, rgba(251, 113, 133, 0.05) 100%)',
          border: '1px solid rgba(251, 113, 133, 0.2)',
          borderRadius: '16px',
          padding: '20px 40px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 30px rgba(251, 113, 133, 0.1)'
        }}>
          <p style={{
            fontSize: '18px',
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'center'
          }}>
            Your Annual Loss: <strong style={{ color: '#FB7185', fontSize: '28px' }}>$190,000</strong>
            <span style={{ color: '#94A3B8', fontSize: '14px', marginLeft: '12px' }}>on $3M portfolio</span>
          </p>
        </div>

        {/* Bottom Message */}
        <p style={{
          marginTop: '32px',
          fontSize: '18px',
          color: '#94A3B8',
          textAlign: 'center',
          fontWeight: '400'
        }}>
          The inequality ends now.
        </p>
      </div>
    </AspectFrame>
  )
}

export default Slide1InequalityV4
