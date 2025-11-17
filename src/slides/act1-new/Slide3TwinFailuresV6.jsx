import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, Brain, X, AlertTriangle, Users } from 'lucide-react'

const Slide3TwinFailuresV6 = () => {
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
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            THE TWIN FAILURES
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            fontWeight: '400'
          }}>
            Why You Can't Win with Today's Options
          </p>
        </div>

        {/* Twin Boxes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          flex: 1,
          marginBottom: '32px'
        }}>
          {/* Access Failures */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.15) 0%, rgba(251, 113, 133, 0.05) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(251, 113, 133, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.3) 0%, rgba(251, 113, 133, 0.1) 100%)',
              padding: '24px',
              borderBottom: '1px solid rgba(251, 113, 133, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}>
              <Lock size={24} color="#FB7185" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FB7185',
                margin: 0,
                letterSpacing: '0.05em'
              }}>
                ACCESS FAILURES
              </h2>
            </div>

            {/* Content */}
            <div style={{
              padding: '32px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#FFFFFF',
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                WHAT YOU CAN'T REACH:
              </h3>

              <div style={{ flex: 1 }}>
                {[
                  { issue: 'India: 35% tax trap', detail: 'vs Goldman 0%' },
                  { issue: 'PE/VC: $5M minimums', detail: 'Locked out of alts' },
                  { issue: 'GIFT City: 0% tax', detail: "Can't access AIF" },
                  { issue: 'Global markets', detail: '87 opportunities missed' }
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '20px'
                  }}>
                    <X size={20} color="#FB7185" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <p style={{
                        fontSize: '16px',
                        color: '#FFFFFF',
                        fontWeight: '600',
                        margin: '0 0 4px 0'
                      }}>
                        {item.issue}
                      </p>
                      <p style={{
                        fontSize: '13px',
                        color: '#94A3B8',
                        margin: 0
                      }}>
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom message */}
              <div style={{
                marginTop: 'auto',
                padding: '20px',
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
                textAlign: 'center',
                borderTop: '1px solid rgba(251, 113, 133, 0.2)'
              }}>
                <p style={{
                  fontSize: '15px',
                  color: '#FB7185',
                  margin: 0,
                  fontStyle: 'italic'
                }}>
                  "Opportunities exist<br />but you can't reach them"
                </p>
              </div>
            </div>
          </div>

          {/* Intelligence Failures */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.05) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(251, 191, 36, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3) 0%, rgba(251, 191, 36, 0.1) 100%)',
              padding: '24px',
              borderBottom: '1px solid rgba(251, 191, 36, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}>
              <Brain size={24} color="#FBBF24" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FBBF24',
                margin: 0,
                letterSpacing: '0.05em'
              }}>
                INTELLIGENCE FAILURES
              </h2>
            </div>

            {/* Content */}
            <div style={{
              padding: '32px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#FFFFFF',
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                WHAT YOU CAN'T PROCESS:
              </h3>

              <div style={{ flex: 1 }}>
                {[
                  { issue: 'K-1s: 40 hours each', detail: 'Tax complexity exploding' },
                  { issue: 'Global analysis: 24/7', detail: 'Markets never sleep' },
                  { issue: 'Tax optimization: Daily', detail: 'Thousands of rules' },
                  { issue: '16,000 funds to analyze', detail: 'Impossible manually' }
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '20px'
                  }}>
                    <X size={20} color="#FBBF24" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <p style={{
                        fontSize: '16px',
                        color: '#FFFFFF',
                        fontWeight: '600',
                        margin: '0 0 4px 0'
                      }}>
                        {item.issue}
                      </p>
                      <p style={{
                        fontSize: '13px',
                        color: '#94A3B8',
                        margin: 0
                      }}>
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom message */}
              <div style={{
                marginTop: 'auto',
                padding: '20px',
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
                textAlign: 'center',
                borderTop: '1px solid rgba(251, 191, 36, 0.2)'
              }}>
                <p style={{
                  fontSize: '15px',
                  color: '#FBBF24',
                  margin: 0,
                  fontStyle: 'italic'
                }}>
                  "Even if you had access,<br />you couldn't process the complexity"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CPA Bridge */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.1) 0%, rgba(148, 163, 184, 0.05) 100%)',
          borderRadius: '16px',
          padding: '20px 32px',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          marginBottom: '20px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px'
          }}>
            <Users size={24} color="#94A3B8" />
            <p style={{
              fontSize: '16px',
              color: '#FFFFFF',
              margin: 0
            }}>
              Your CPA wants to help but has <strong style={{ color: '#FB7185' }}>neither access</strong> nor 
              <strong style={{ color: '#FBBF24' }}> intelligence tools</strong>
            </p>
          </div>
        </div>

        {/* Bottom Impact */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(251, 113, 133, 0.1) 0%, rgba(251, 113, 133, 0.05) 50%, rgba(251, 113, 133, 0.1) 100%)',
          border: '2px solid rgba(251, 113, 133, 0.3)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          boxShadow: '0 10px 30px rgba(251, 113, 133, 0.1)'
        }}>
          <AlertTriangle size={24} color="#FB7185" />
          <p style={{
            fontSize: '20px',
            color: '#FFFFFF',
            margin: 0,
            fontWeight: '600'
          }}>
            Result: <strong style={{ color: '#FB7185', fontSize: '24px' }}>7.9M Americans</strong> losing 
            <strong style={{ color: '#FB7185', fontSize: '24px' }}> $189K annually</strong> to this twin failure
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide3TwinFailuresV6
