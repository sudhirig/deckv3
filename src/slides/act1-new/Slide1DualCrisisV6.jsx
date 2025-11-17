import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, Brain, TrendingUp } from 'lucide-react'

const Slide1DualCrisisV6 = () => {
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
          opacity: 0.2,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(20, 184, 166, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* ARIA Logo/Title */}
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '700',
            color: '#FFFFFF',
            margin: '0 0 8px 0',
            letterSpacing: '-0.02em'
          }}>
            ARIA
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#14B8A6',
            fontWeight: '500'
          }}>
            Where Access Meets Intelligence
          </p>
        </div>

        {/* The New Reality Section */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(30, 41, 59, 0.2) 100%)',
          borderRadius: '24px',
          padding: '48px',
          maxWidth: '800px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(148, 163, 184, 0.15)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#FFFFFF',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            The New Reality of Wealth:
          </h2>

          {/* Two Requirements */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px'
          }}>
            {/* Requirement 1 */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '24px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.2) 0%, rgba(251, 113, 133, 0.1) 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(251, 113, 133, 0.3)'
              }}>
                <Brain size={24} color="#FB7185" />
              </div>
              <div>
                <p style={{
                  fontSize: '20px',
                  color: '#FFFFFF',
                  margin: '0 0 8px 0',
                  fontWeight: '500'
                }}>
                  It's not enough to have a smart advisor.
                </p>
                <p style={{
                  fontSize: '18px',
                  color: '#14B8A6',
                  margin: 0,
                  fontWeight: '600'
                }}>
                  You need ACCESS to global opportunities.
                </p>
              </div>
            </div>

            {/* Requirement 2 */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '24px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0.1) 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(251, 191, 36, 0.3)'
              }}>
                <Lock size={24} color="#FBBF24" />
              </div>
              <div>
                <p style={{
                  fontSize: '20px',
                  color: '#FFFFFF',
                  margin: '0 0 8px 0',
                  fontWeight: '500'
                }}>
                  It's not enough to have access.
                </p>
                <p style={{
                  fontSize: '18px',
                  color: '#14B8A6',
                  margin: 0,
                  fontWeight: '600'
                }}>
                  You need INTELLIGENCE to capture them.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Divide */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          maxWidth: '700px'
        }}>
          {/* 1% Side */}
          <div style={{
            flex: 1,
            textAlign: 'center',
            padding: '24px',
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.05) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(20, 184, 166, 0.3)'
          }}>
            <TrendingUp size={32} color="#14B8A6" style={{ marginBottom: '12px' }} />
            <p style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#14B8A6',
              margin: '0 0 8px 0'
            }}>
              The 1% have both.
            </p>
          </div>

          {/* VS */}
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #0A1628 0%, #1e293b 100%)',
            border: '2px solid rgba(148, 163, 184, 0.3)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
          }}>
            <span style={{ fontSize: '14px', color: '#94A3B8', fontWeight: '600' }}>VS</span>
          </div>

          {/* You Side */}
          <div style={{
            flex: 1,
            textAlign: 'center',
            padding: '24px',
            background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.15) 0%, rgba(251, 113, 133, 0.05) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(251, 113, 133, 0.3)'
          }}>
            <p style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#FB7185',
              margin: '0 0 8px 0'
            }}>
              You have neither.
            </p>
          </div>
        </div>

        {/* Bottom Message */}
        <p style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#FFFFFF',
          marginTop: '48px',
          textAlign: 'center',
          textShadow: '0 4px 20px rgba(20, 184, 166, 0.3)'
        }}>
          Until now.
        </p>
      </div>
    </AspectFrame>
  )
}

export default Slide1DualCrisisV6
