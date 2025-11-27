import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, Brain, Users, Building2, X, Check, AlertCircle, TrendingDown } from 'lucide-react'

const SlideWhySolutionsFail = () => {
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
            gap: '16px',
            flex: 1,
            position: 'relative',
            padding: '10px'
          }}>
            {/* Top Left - Robo-Advisors (High Intel, Low Access) */}
            <div style={{
              background: 'rgba(10, 22, 40, 0.6)',
              borderRadius: '16px',
              border: '1px solid rgba(20, 184, 166, 0.2)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              {/* Corner Badge */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                right: '16px',
                background: 'rgba(20, 184, 166, 0.2)',
                padding: '3px 10px',
                borderRadius: '10px',
                border: '1px solid rgba(20, 184, 166, 0.3)'
              }}>
                <p style={{ fontSize: '9px', color: '#14B8A6', margin: 0, fontWeight: '700' }}>
                  HIGH INTELLIGENCE
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.1))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Brain size={20} color="#14B8A6" />
                </div>
                <h2 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  margin: 0
                }}>
                  ROBO-ADVISORS
                </h2>
              </div>

              <div style={{ flex: 1, display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
                    <Check size={12} color="#14B8A6" />
                    <p style={{ fontSize: '11px', color: '#14B8A6', margin: 0, fontWeight: '600' }}>Has</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '11px', color: '#94A3B8', lineHeight: '1.5' }}>
                    <li>AI algorithms</li>
                    <li>Low cost</li>
                    <li>Tax-loss harvesting</li>
                  </ul>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
                    <X size={12} color="#EF4444" />
                    <p style={{ fontSize: '11px', color: '#EF4444', margin: 0, fontWeight: '600' }}>Missing</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '11px', color: '#94A3B8', lineHeight: '1.5' }}>
                    <li>US-only</li>
                    <li>No alts/PE</li>
                    <li>No India access</li>
                  </ul>
                </div>
              </div>

              <div style={{
                marginTop: 'auto',
                padding: '8px',
                background: 'rgba(20, 184, 166, 0.05)',
                borderRadius: '8px',
                textAlign: 'center',
                borderTop: '1px solid rgba(20, 184, 166, 0.2)'
              }}>
                <p style={{ fontSize: '11px', color: '#94A3B8', margin: 0 }}>
                  Smart but <span style={{ color: '#14B8A6', fontWeight: '600' }}>geographically limited</span>
                </p>
              </div>
            </div>

            {/* Top Right - Private Banks (High Access, Low Intel) */}
            <div style={{
              background: 'rgba(10, 22, 40, 0.6)',
              borderRadius: '16px',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              {/* Corner Badge */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '16px',
                background: 'rgba(148, 163, 184, 0.2)',
                padding: '3px 10px',
                borderRadius: '10px',
                border: '1px solid rgba(148, 163, 184, 0.3)'
              }}>
                <p style={{ fontSize: '9px', color: '#94A3B8', margin: 0, fontWeight: '700' }}>
                  HIGH ACCESS
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(148, 163, 184, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Lock size={20} color="#94A3B8" />
                </div>
                <h2 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  margin: 0
                }}>
                  PRIVATE BANKS
                </h2>
              </div>

              <div style={{ flex: 1, display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
                    <Check size={12} color="#14B8A6" />
                    <p style={{ fontSize: '11px', color: '#14B8A6', margin: 0, fontWeight: '600' }}>Has</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '11px', color: '#94A3B8', lineHeight: '1.5' }}>
                    <li>Global markets</li>
                    <li>Alts access</li>
                    <li>India via FPI</li>
                  </ul>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
                    <X size={12} color="#EF4444" />
                    <p style={{ fontSize: '11px', color: '#EF4444', margin: 0, fontWeight: '600' }}>Missing</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '11px', color: '#94A3B8', lineHeight: '1.5' }}>
                    <li>No AI/automation</li>
                    <li>2-3% fees</li>
                    <li>Quarterly reports</li>
                  </ul>
                </div>
              </div>

              <div style={{
                marginTop: 'auto',
                padding: '8px',
                background: 'rgba(148, 163, 184, 0.05)',
                borderRadius: '8px',
                textAlign: 'center',
                borderTop: '1px solid rgba(148, 163, 184, 0.2)'
              }}>
                <p style={{ fontSize: '11px', color: '#94A3B8', margin: 0 }}>
                  Access but <span style={{ color: '#FB7185', fontWeight: '600' }}>1990s technology</span>
                </p>
              </div>
            </div>

            {/* Bottom Left - CPAs/Advisors (Low Intel, Low Access) - ENHANCED */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              {/* Corner Badge */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                right: '16px',
                background: 'rgba(239, 68, 68, 0.2)',
                padding: '3px 10px',
                borderRadius: '10px',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}>
                <p style={{ fontSize: '9px', color: '#EF4444', margin: 0, fontWeight: '700' }}>
                  NEITHER
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(239, 68, 68, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Users size={20} color="#EF4444" />
                </div>
                <h2 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  margin: 0
                }}>
                  CPAs & ADVISORS
                </h2>
              </div>

              {/* The Advisor Crisis - NEW CONTENT */}
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '11px', color: '#FB7185', margin: '0 0 8px 0', fontWeight: '600' }}>
                  THE ADVISOR CRISIS:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div style={{ 
                    background: 'rgba(239, 68, 68, 0.1)', 
                    borderRadius: '6px', 
                    padding: '6px 8px',
                    textAlign: 'center'
                  }}>
                    <p style={{ fontSize: '16px', color: '#EF4444', fontWeight: '700', margin: 0 }}>40%</p>
                    <p style={{ fontSize: '9px', color: '#94A3B8', margin: 0 }}>are 55+ retiring</p>
                  </div>
                  <div style={{ 
                    background: 'rgba(239, 68, 68, 0.1)', 
                    borderRadius: '6px', 
                    padding: '6px 8px',
                    textAlign: 'center'
                  }}>
                    <p style={{ fontSize: '16px', color: '#EF4444', fontWeight: '700', margin: 0 }}>0.2%</p>
                    <p style={{ fontSize: '9px', color: '#94A3B8', margin: 0 }}>new entering</p>
                  </div>
                  <div style={{ 
                    background: 'rgba(239, 68, 68, 0.1)', 
                    borderRadius: '6px', 
                    padding: '6px 8px',
                    textAlign: 'center'
                  }}>
                    <p style={{ fontSize: '16px', color: '#EF4444', fontWeight: '700', margin: 0 }}>100K</p>
                    <p style={{ fontSize: '9px', color: '#94A3B8', margin: 0 }}>shortage by 2030</p>
                  </div>
                  <div style={{ 
                    background: 'rgba(239, 68, 68, 0.1)', 
                    borderRadius: '6px', 
                    padding: '6px 8px',
                    textAlign: 'center'
                  }}>
                    <p style={{ fontSize: '16px', color: '#EF4444', fontWeight: '700', margin: 0 }}>1:500</p>
                    <p style={{ fontSize: '9px', color: '#94A3B8', margin: 0 }}>advisor ratio US</p>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '8px',
                padding: '8px',
                background: 'rgba(239, 68, 68, 0.15)',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}>
                <p style={{ fontSize: '11px', color: '#FB7185', margin: 0, fontWeight: '600' }}>
                  AI is the only way to scale
                </p>
              </div>
            </div>

            {/* Bottom Right - Goldman Sachs (Has Both, 1% Only) */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(251, 191, 36, 0.05))',
              borderRadius: '16px',
              border: '2px solid rgba(251, 191, 36, 0.3)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: '0 8px 24px rgba(251, 191, 36, 0.1)'
            }}>
              {/* Corner Badge - Special */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '16px',
                background: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
                padding: '3px 12px',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(251, 191, 36, 0.3)'
              }}>
                <p style={{ fontSize: '9px', color: '#0A1628', margin: 0, fontWeight: '700' }}>
                  HAS BOTH
                </p>
              </div>

              {/* 1% Only Banner */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(251, 191, 36, 0.2)',
                padding: '4px 10px',
                borderRadius: '12px',
                border: '1px solid rgba(251, 191, 36, 0.3)'
              }}>
                <p style={{ fontSize: '10px', color: '#FBBF24', margin: 0, fontWeight: '700' }}>
                  1% ONLY
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(251, 191, 36, 0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Building2 size={20} color="#FBBF24" />
                </div>
                <h2 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  margin: 0
                }}>
                  GOLDMAN SACHS
                </h2>
              </div>

              <div style={{ flex: 1, display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
                    <Check size={12} color="#14B8A6" />
                    <p style={{ fontSize: '11px', color: '#14B8A6', margin: 0, fontWeight: '600' }}>Intel</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '11px', color: '#94A3B8', lineHeight: '1.5' }}>
                    <li>AI teams</li>
                    <li>Real-time</li>
                    <li>Quant strategies</li>
                  </ul>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
                    <Check size={12} color="#14B8A6" />
                    <p style={{ fontSize: '11px', color: '#14B8A6', margin: 0, fontWeight: '600' }}>Access</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '11px', color: '#94A3B8', lineHeight: '1.5' }}>
                    <li>87 markets</li>
                    <li>India GIFT 0%</li>
                    <li>All alts/PE</li>
                  </ul>
                </div>
              </div>

              <div style={{
                marginTop: 'auto',
                padding: '8px',
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1))',
                borderRadius: '8px',
                textAlign: 'center',
                borderTop: '1px solid rgba(251, 191, 36, 0.3)'
              }}>
                <p style={{ fontSize: '11px', color: '#FBBF24', margin: 0, fontWeight: '700' }}>
                  Needs $25M+ minimum
                </p>
              </div>
            </div>

            {/* Center Problem Icon */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              background: 'rgba(10, 22, 40, 0.95)',
              borderRadius: '50%',
              padding: '10px',
              border: '2px solid rgba(20, 184, 166, 0.4)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)'
            }}>
              <AlertCircle size={24} color="#14B8A6" />
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div style={{
          marginTop: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px'
        }}>
          <div style={{
            flex: 1,
            padding: '12px 16px',
            background: 'rgba(10, 22, 40, 0.6)',
            borderRadius: '10px',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#94A3B8',
              margin: 0
            }}>
              You need <span style={{ color: '#14B8A6', fontWeight: '600' }}>HIGH ACCESS</span> + 
              <span style={{ color: '#14B8A6', fontWeight: '600' }}> HIGH INTELLIGENCE</span>
            </p>
          </div>
          
          <div style={{
            padding: '12px 20px',
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05))',
            borderRadius: '10px',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#FBBF24',
              margin: 0,
              fontWeight: '600'
            }}>
              Only the 1% get both today
            </p>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default SlideWhySolutionsFail
