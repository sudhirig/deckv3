import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, Brain, Users, Building2 } from 'lucide-react'

const Slide4TwoDimensionalProblemV7Clean = () => {
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0A1628 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 48px',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Background gradient mesh - subtle */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            WHY TODAY'S SOLUTIONS FAIL
          </h1>
          
          <p style={{
            fontSize: '20px',
            color: '#94A3B8',
            fontWeight: '400'
          }}>
            They Give You Access OR Intelligence, Never Both
          </p>
        </div>

        {/* 2x2 Grid - Consistent styling */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '20px',
          flex: 1,
          position: 'relative'
        }}>
          {/* Top Left - Robo-Advisors */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <Brain size={28} color="#14B8A6" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FFFFFF',
                margin: 0
              }}>
                ROBO-ADVISORS
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '32px', marginBottom: '16px' }}>
              <div>
                <p style={{ color: '#14B8A6', fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>
                  ✓ AI Intelligence
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13px', color: '#94A3B8', lineHeight: '1.5' }}>
                  <li>AI tools</li>
                  <li>Low cost</li>
                  <li>Automated</li>
                </ul>
              </div>
              <div>
                <p style={{ color: '#EF4444', fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>
                  ✗ No Access
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13px', color: '#94A3B8', lineHeight: '1.5' }}>
                  <li>US-only stocks</li>
                  <li>No alternatives</li>
                  <li>No India access</li>
                </ul>
              </div>
            </div>

            <div style={{
              marginTop: 'auto',
              padding: '8px',
              background: 'rgba(20, 184, 166, 0.1)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>
                Limited to basic portfolios
              </p>
            </div>
          </div>

          {/* Top Right - Private Banks */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <Lock size={28} color="#94A3B8" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FFFFFF',
                margin: 0
              }}>
                PRIVATE BANKS
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '32px', marginBottom: '16px' }}>
              <div>
                <p style={{ color: '#EF4444', fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>
                  ✗ No Intelligence
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13px', color: '#94A3B8', lineHeight: '1.5' }}>
                  <li>Human-only</li>
                  <li>$5M minimums</li>
                  <li>Slow execution</li>
                </ul>
              </div>
              <div>
                <p style={{ color: '#14B8A6', fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>
                  ✓ Global Access
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13px', color: '#94A3B8', lineHeight: '1.5' }}>
                  <li>Global markets</li>
                  <li>Alternatives</li>
                  <li>Personal service</li>
                </ul>
              </div>
            </div>

            <div style={{
              marginTop: 'auto',
              padding: '8px',
              background: 'rgba(20, 184, 166, 0.1)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>
                High fees, outdated tech
              </p>
            </div>
          </div>

          {/* Bottom Left - Your CPA */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <Users size={28} color="#94A3B8" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FFFFFF',
                margin: 0
              }}>
                YOUR CPA
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '32px', marginBottom: '16px' }}>
              <div>
                <p style={{ color: '#EF4444', fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>
                  ✗ No Intelligence
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13px', color: '#94A3B8', lineHeight: '1.5' }}>
                  <li>Manual processes</li>
                  <li>Tax focus only</li>
                  <li>No AI tools</li>
                </ul>
              </div>
              <div>
                <p style={{ color: '#EF4444', fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>
                  ✗ No Access
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13px', color: '#94A3B8', lineHeight: '1.5' }}>
                  <li>No investments</li>
                  <li>Limited scope</li>
                  <li>Overwhelmed</li>
                </ul>
              </div>
            </div>

            <div style={{
              marginTop: 'auto',
              padding: '8px',
              background: 'rgba(20, 184, 166, 0.1)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>
                Trusted but limited
              </p>
            </div>
          </div>

          {/* Bottom Right - Goldman Sachs */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(251, 191, 36, 0.05) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}>
            {/* Banner */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              right: '20px',
              background: 'rgba(251, 191, 36, 0.2)',
              padding: '6px 16px',
              borderRadius: '20px',
              border: '1px solid rgba(251, 191, 36, 0.3)'
            }}>
              <p style={{ fontSize: '11px', color: '#FBBF24', margin: 0, fontWeight: '700' }}>
                THE 1% ONLY
              </p>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <Building2 size={28} color="#FBBF24" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FFFFFF',
                margin: 0
              }}>
                GOLDMAN SACHS
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '32px', marginBottom: '16px' }}>
              <div>
                <p style={{ color: '#14B8A6', fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>
                  ✓ AI Intelligence
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13px', color: '#94A3B8', lineHeight: '1.5' }}>
                  <li>AI teams</li>
                  <li>Real-time</li>
                  <li>Advanced tools</li>
                </ul>
              </div>
              <div>
                <p style={{ color: '#14B8A6', fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>
                  ✓ Global Access
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13px', color: '#94A3B8', lineHeight: '1.5' }}>
                  <li>All markets</li>
                  <li>India GIFT</li>
                  <li>Alternatives</li>
                </ul>
              </div>
            </div>

            <div style={{
              marginTop: 'auto',
              padding: '8px',
              background: 'rgba(251, 191, 36, 0.1)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '13px', color: '#FBBF24', margin: 0, fontWeight: '600' }}>
                Requires $10M+ minimum
              </p>
            </div>
          </div>

          {/* Center Lines */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.2), transparent)'
          }} />
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(20, 184, 166, 0.2), transparent)'
          }} />
        </div>

        {/* Bottom Message */}
        <div style={{
          marginTop: '20px',
          padding: '16px',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(20, 184, 166, 0.05))',
          borderRadius: '12px',
          border: '1px solid rgba(20, 184, 166, 0.2)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            margin: 0
          }}>
            You need <span style={{ color: '#14B8A6' }}>HIGH ACCESS</span> + <span style={{ color: '#14B8A6' }}>HIGH INTELLIGENCE</span>
            <span style={{ color: '#94A3B8' }}> • Current solutions give you one or neither</span>
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide4TwoDimensionalProblemV7Clean
