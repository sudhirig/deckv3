import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, Brain, Users, Building2, X, Check, AlertCircle } from 'lucide-react'

const Slide4TwoDimensionalProblemV7Better = () => {
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
        {/* Subtle background pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
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

        {/* Visual Matrix Indicator */}
        <div style={{
          position: 'relative',
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Axis Labels */}
          <div style={{
            position: 'absolute',
            left: '-35px',
            top: '50%',
            transform: 'translateY(-50%) rotate(-90deg)',
            fontSize: '14px',
            color: '#64748B',
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Intelligence →
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: '-35px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '14px',
            color: '#64748B',
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Access →
          </div>

          {/* 2x2 Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '20px',
            flex: 1,
            position: 'relative',
            padding: '10px'
          }}>
            {/* Top Left - Robo-Advisors */}
            <div style={{
              background: 'rgba(10, 22, 40, 0.6)',
              borderRadius: '20px',
              border: '1px solid rgba(20, 184, 166, 0.2)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}>
              {/* Corner Badge */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '20px',
                background: 'rgba(20, 184, 166, 0.2)',
                padding: '4px 12px',
                borderRadius: '12px',
                border: '1px solid rgba(20, 184, 166, 0.3)'
              }}>
                <p style={{ fontSize: '10px', color: '#14B8A6', margin: 0, fontWeight: '700' }}>
                  HIGH INTELLIGENCE
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.1))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Brain size={24} color="#14B8A6" />
                </div>
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  margin: 0
                }}>
                  ROBO-ADVISORS
                </h2>
              </div>

              <div style={{ flex: 1, display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <Check size={14} color="#14B8A6" />
                    <p style={{ fontSize: '12px', color: '#14B8A6', margin: 0, fontWeight: '600' }}>Has</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.6' }}>
                    <li>AI tools</li>
                    <li>Low cost</li>
                  </ul>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <X size={14} color="#EF4444" />
                    <p style={{ fontSize: '12px', color: '#EF4444', margin: 0, fontWeight: '600' }}>Missing</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.6' }}>
                    <li>US-only</li>
                    <li>No alts</li>
                  </ul>
                </div>
              </div>

              <div style={{
                marginTop: 'auto',
                padding: '10px',
                background: 'rgba(20, 184, 166, 0.05)',
                borderRadius: '10px',
                textAlign: 'center',
                borderTop: '1px solid rgba(20, 184, 166, 0.2)'
              }}>
                <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>
                  Smart but limited
                </p>
              </div>
            </div>

            {/* Top Right - Private Banks */}
            <div style={{
              background: 'rgba(10, 22, 40, 0.6)',
              borderRadius: '20px',
              border: '1px solid rgba(20, 184, 166, 0.2)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              {/* Corner Badge */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '20px',
                background: 'rgba(20, 184, 166, 0.2)',
                padding: '4px 12px',
                borderRadius: '12px',
                border: '1px solid rgba(20, 184, 166, 0.3)'
              }}>
                <p style={{ fontSize: '10px', color: '#14B8A6', margin: 0, fontWeight: '700' }}>
                  HIGH ACCESS
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(148, 163, 184, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Lock size={24} color="#94A3B8" />
                </div>
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  margin: 0
                }}>
                  PRIVATE BANKS
                </h2>
              </div>

              <div style={{ flex: 1, display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <Check size={14} color="#14B8A6" />
                    <p style={{ fontSize: '12px', color: '#14B8A6', margin: 0, fontWeight: '600' }}>Has</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.6' }}>
                    <li>Global</li>
                    <li>Alts access</li>
                  </ul>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <X size={14} color="#EF4444" />
                    <p style={{ fontSize: '12px', color: '#EF4444', margin: 0, fontWeight: '600' }}>Missing</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.6' }}>
                    <li>No AI</li>
                    <li>High fees</li>
                  </ul>
                </div>
              </div>

              <div style={{
                marginTop: 'auto',
                padding: '10px',
                background: 'rgba(148, 163, 184, 0.05)',
                borderRadius: '10px',
                textAlign: 'center',
                borderTop: '1px solid rgba(148, 163, 184, 0.2)'
              }}>
                <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>
                  1990s technology
                </p>
              </div>
            </div>

            {/* Bottom Left - Your CPA */}
            <div style={{
              background: 'rgba(10, 22, 40, 0.6)',
              borderRadius: '20px',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              opacity: 0.8
            }}>
              {/* Corner Badge */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '20px',
                background: 'rgba(239, 68, 68, 0.2)',
                padding: '4px 12px',
                borderRadius: '12px',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}>
                <p style={{ fontSize: '10px', color: '#EF4444', margin: 0, fontWeight: '700' }}>
                  NEITHER
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(239, 68, 68, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Users size={24} color="#EF4444" />
                </div>
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  margin: 0
                }}>
                  YOUR CPA
                </h2>
              </div>

              <div style={{ flex: 1, display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <X size={14} color="#EF4444" />
                    <p style={{ fontSize: '12px', color: '#EF4444', margin: 0, fontWeight: '600' }}>No Intel</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.6' }}>
                    <li>Manual</li>
                    <li>No tools</li>
                  </ul>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <X size={14} color="#EF4444" />
                    <p style={{ fontSize: '12px', color: '#EF4444', margin: 0, fontWeight: '600' }}>No Access</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.6' }}>
                    <li>Limited</li>
                    <li>Tax only</li>
                  </ul>
                </div>
              </div>

              <div style={{
                marginTop: 'auto',
                padding: '10px',
                background: 'rgba(239, 68, 68, 0.05)',
                borderRadius: '10px',
                textAlign: 'center',
                borderTop: '1px solid rgba(239, 68, 68, 0.2)'
              }}>
                <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>
                  Overwhelmed
                </p>
              </div>
            </div>

            {/* Bottom Right - Goldman Sachs */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(251, 191, 36, 0.05))',
              borderRadius: '20px',
              border: '2px solid rgba(251, 191, 36, 0.3)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(251, 191, 36, 0.1)'
            }}>
              {/* Corner Badge - Special */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '20px',
                background: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
                padding: '4px 16px',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(251, 191, 36, 0.3)'
              }}>
                <p style={{ fontSize: '10px', color: '#0A1628', margin: 0, fontWeight: '700' }}>
                  HAS BOTH
                </p>
              </div>

              {/* 1% Only Banner */}
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(251, 191, 36, 0.2)',
                padding: '6px 12px',
                borderRadius: '20px',
                border: '1px solid rgba(251, 191, 36, 0.3)'
              }}>
                <p style={{ fontSize: '11px', color: '#FBBF24', margin: 0, fontWeight: '700' }}>
                  1% ONLY
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(251, 191, 36, 0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Building2 size={24} color="#FBBF24" />
                </div>
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  margin: 0
                }}>
                  GOLDMAN SACHS
                </h2>
              </div>

              <div style={{ flex: 1, display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <Check size={14} color="#14B8A6" />
                    <p style={{ fontSize: '12px', color: '#14B8A6', margin: 0, fontWeight: '600' }}>Intel</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.6' }}>
                    <li>AI teams</li>
                    <li>Real-time</li>
                  </ul>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <Check size={14} color="#14B8A6" />
                    <p style={{ fontSize: '12px', color: '#14B8A6', margin: 0, fontWeight: '600' }}>Access</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#94A3B8', lineHeight: '1.6' }}>
                    <li>All markets</li>
                    <li>India GIFT</li>
                  </ul>
                </div>
              </div>

              <div style={{
                marginTop: 'auto',
                padding: '10px',
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1))',
                borderRadius: '10px',
                textAlign: 'center',
                borderTop: '1px solid rgba(251, 191, 36, 0.3)'
              }}>
                <p style={{ fontSize: '13px', color: '#FBBF24', margin: 0, fontWeight: '700' }}>
                  Needs $10M+ minimum
                </p>
              </div>
            </div>

            {/* Matrix Axis Indicators */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.1), transparent)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(20, 184, 166, 0.1), transparent)',
              pointerEvents: 'none'
            }} />

            {/* Center Problem Icon */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              background: 'rgba(10, 22, 40, 0.9)',
              borderRadius: '50%',
              padding: '12px',
              border: '2px solid rgba(239, 68, 68, 0.3)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)'
            }}>
              <AlertCircle size={28} color="#EF4444" />
            </div>
          </div>
        </div>

        {/* Bottom Message - Better Design */}
        <div style={{
          marginTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px'
        }}>
          <div style={{
            flex: 1,
            padding: '16px 20px',
            background: 'rgba(10, 22, 40, 0.6)',
            borderRadius: '12px',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '16px',
              color: '#94A3B8',
              margin: 0
            }}>
              You need <span style={{ color: '#14B8A6', fontWeight: '600' }}>HIGH ACCESS</span> + 
              <span style={{ color: '#14B8A6', fontWeight: '600' }}> HIGH INTELLIGENCE</span>
            </p>
          </div>
          
          <div style={{
            padding: '16px 24px',
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05))',
            borderRadius: '12px',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}>
            <p style={{
              fontSize: '16px',
              color: '#FBBF24',
              margin: 0,
              fontWeight: '600'
            }}>
              Only the 1% get both
            </p>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide4TwoDimensionalProblemV7Better
