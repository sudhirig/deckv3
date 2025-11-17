import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, Brain, Users, Building2 } from 'lucide-react'

const Slide4TwoDimensionalProblemV7Fixed = () => {
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
        {/* Background gradient mesh */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(20, 184, 166, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(251, 113, 133, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '6px',
            letterSpacing: '-0.02em'
          }}>
            WHY TODAY'S SOLUTIONS FAIL
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            fontWeight: '400'
          }}>
            They Give You Access OR Intelligence, Never Both
          </p>
        </div>

        {/* 2x2 Grid - Filling screen */}
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
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.05) 100%)',
            borderRadius: '16px',
            border: '2px solid rgba(251, 191, 36, 0.3)',
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
              <Brain size={28} color="#FBBF24" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FBBF24',
                margin: 0
              }}>
                ROBO-ADVISORS
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '32px', marginBottom: '16px' }}>
              <div>
                <p style={{ color: '#10B981', fontWeight: '600', fontSize: '13px', marginBottom: '4px' }}>
                  ✓ AI Intelligence
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.4' }}>
                  <li>AI intelligence</li>
                  <li>Low cost</li>
                  <li>Automated</li>
                </ul>
              </div>
              <div>
                <p style={{ color: '#EF4444', fontWeight: '600', fontSize: '13px', marginBottom: '4px' }}>
                  ✗ No Access
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.4' }}>
                  <li>US-only stocks</li>
                  <li>No alternatives</li>
                  <li>No India access</li>
                </ul>
              </div>
            </div>

            <div style={{
              marginTop: 'auto',
              padding: '8px',
              background: 'rgba(251, 191, 36, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '12px', color: '#FBBF24', margin: 0, fontWeight: '600' }}>
                No tax optimization
              </p>
            </div>
          </div>

          {/* Top Right - Private Banks */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.05) 100%)',
            borderRadius: '16px',
            border: '2px solid rgba(168, 85, 247, 0.3)',
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
              <Lock size={28} color="#A855F7" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#A855F7',
                margin: 0
              }}>
                PRIVATE BANKS
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '32px', marginBottom: '16px' }}>
              <div>
                <p style={{ color: '#EF4444', fontWeight: '600', fontSize: '13px', marginBottom: '4px' }}>
                  ✗ No Intelligence
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.4' }}>
                  <li>Human-only analysis</li>
                  <li>$5M minimums</li>
                  <li>Months to execute</li>
                </ul>
              </div>
              <div>
                <p style={{ color: '#10B981', fontWeight: '600', fontSize: '13px', marginBottom: '4px' }}>
                  ✓ Global Access
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.4' }}>
                  <li>Global Access</li>
                  <li>Alternatives</li>
                  <li>Personal service</li>
                </ul>
              </div>
            </div>

            <div style={{
              marginTop: 'auto',
              padding: '8px',
              background: 'rgba(168, 85, 247, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '12px', color: '#A855F7', margin: 0, fontWeight: '600' }}>
                High fees
              </p>
            </div>
          </div>

          {/* Bottom Left - Your CPA */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.15) 0%, rgba(251, 113, 133, 0.05) 100%)',
            borderRadius: '16px',
            border: '2px solid rgba(251, 113, 133, 0.3)',
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
              <Users size={28} color="#FB7185" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FB7185',
                margin: 0
              }}>
                YOUR CPA
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '32px', marginBottom: '16px' }}>
              <div>
                <p style={{ color: '#EF4444', fontWeight: '600', fontSize: '13px', marginBottom: '4px' }}>
                  ✗ No Intelligence
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.4' }}>
                  <li>Trusted advisor</li>
                  <li>Tax expertise</li>
                  <li>Knows your situation</li>
                </ul>
              </div>
              <div>
                <p style={{ color: '#EF4444', fontWeight: '600', fontSize: '13px', marginBottom: '4px' }}>
                  ✗ No Access
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.4' }}>
                  <li>No investment access</li>
                  <li>No AI tools</li>
                  <li>Drowning in K-1s</li>
                </ul>
              </div>
            </div>

            <div style={{
              marginTop: 'auto',
              padding: '8px',
              background: 'rgba(251, 113, 133, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '12px', color: '#FB7185', margin: 0, fontWeight: '600' }}>
                Limited scope
              </p>
            </div>
          </div>

          {/* Bottom Right - Goldman Sachs */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.25) 0%, rgba(20, 184, 166, 0.1) 100%)',
            borderRadius: '16px',
            border: '2px solid rgba(20, 184, 166, 0.4)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(20, 184, 166, 0.2)'
          }}>
            {/* Banner */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              right: '20px',
              background: 'linear-gradient(135deg, #14B8A6, #06B6D4)',
              padding: '6px 16px',
              borderRadius: '20px'
            }}>
              <p style={{ fontSize: '11px', color: 'white', margin: 0, fontWeight: '700' }}>
                THE 1% SOLUTION
              </p>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <Building2 size={28} color="#14B8A6" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#14B8A6',
                margin: 0
              }}>
                GOLDMAN SACHS
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '32px', marginBottom: '16px' }}>
              <div>
                <p style={{ color: '#10B981', fontWeight: '600', fontSize: '13px', marginBottom: '4px' }}>
                  ✓ AI Intelligence
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.4' }}>
                  <li>Tech Access + AI</li>
                  <li>India via GIFT (no tax)</li>
                  <li>50 AI analysts</li>
                </ul>
              </div>
              <div>
                <p style={{ color: '#10B981', fontWeight: '600', fontSize: '13px', marginBottom: '4px' }}>
                  ✓ Global Access
                </p>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.4' }}>
                  <li>Goldman solution</li>
                  <li>You need $10M+</li>
                  <li>Not for 99%</li>
                </ul>
              </div>
            </div>

            <div style={{
              marginTop: 'auto',
              padding: '8px',
              background: 'rgba(20, 184, 166, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '12px', color: '#14B8A6', margin: 0, fontWeight: '700' }}>
                No access for you
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
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(251, 146, 60, 0.1))',
          borderRadius: '12px',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            margin: 0
          }}>
            You need <span style={{ color: '#14B8A6' }}>HIGH ACCESS</span> + <span style={{ color: '#A855F7' }}>HIGH INTELLIGENCE</span>
            <span style={{ color: '#FBBF24' }}> → Only ARIA gives you both</span>
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide4TwoDimensionalProblemV7Fixed
