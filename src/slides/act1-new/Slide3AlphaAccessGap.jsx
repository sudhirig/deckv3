import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, FileText, Shuffle } from 'lucide-react'

const Slide3AlphaAccessGap = () => {
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
          marginBottom: '8px'
        }}>
          THE ALPHA & ACCESS GAP
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#94A3B8',
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          You're Too Big for Robinhood, Too Small for Goldman
        </p>

        {/* Three Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          flex: 1,
          marginBottom: '24px'
        }}>
          {/* Access Failure */}
          <div style={{
            background: '#1E293B',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(20, 184, 166, 0.1)',
                borderRadius: '8px',
                marginBottom: '12px'
              }}>
                <Lock size={24} color="#14B8A6" strokeWidth={2} />
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#FB7185',
                textAlign: 'center'
              }}>
                ACCESS FAILURE
              </h3>
            </div>

            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#14B8A6',
                marginBottom: '12px'
              }}>
                LOCKED OUT OF:
              </p>
              
              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '14px', color: '#FFFFFF', marginBottom: '4px' }}>
                  • India Growth
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8', marginLeft: '16px' }}>
                  35% FPI tax trap
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '14px', color: '#FFFFFF', marginBottom: '4px' }}>
                  • Private Markets
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8', marginLeft: '16px' }}>
                  $5M minimums
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '14px', color: '#FFFFFF', marginBottom: '4px' }}>
                  • Tax Optimization
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8', marginLeft: '16px' }}>
                  Daily TLH missed
                </p>
              </div>
            </div>

            <div style={{
              borderTop: '1px solid #334155',
              paddingTop: '16px',
              marginTop: 'auto'
            }}>
              <p style={{
                fontSize: '13px',
                color: '#14B8A6',
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                "You need $5M and a family office for what we give you at $100K"
              </p>
            </div>
          </div>

          {/* Complexity Failure */}
          <div style={{
            background: '#1E293B',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(20, 184, 166, 0.1)',
                borderRadius: '8px',
                marginBottom: '12px'
              }}>
                <FileText size={24} color="#14B8A6" strokeWidth={2} />
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#FB7185',
                textAlign: 'center'
              }}>
                COMPLEXITY FAILURE
              </h3>
            </div>

            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#14B8A6',
                marginBottom: '12px'
              }}>
                DROWNING IN:
              </p>
              
              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '14px', color: '#FFFFFF', marginBottom: '4px' }}>
                  • K-1s: 100+ pages
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8', marginLeft: '16px' }}>
                  40hrs to process
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '14px', color: '#FFFFFF', marginBottom: '4px' }}>
                  • LPAs: $500/hr
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8', marginLeft: '16px' }}>
                  CPA fees
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '14px', color: '#FFFFFF', marginBottom: '4px' }}>
                  • GIFT regulations
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8', marginLeft: '16px' }}>
                  3 lawyers needed
                </p>
              </div>
            </div>

            <div style={{
              borderTop: '1px solid #334155',
              paddingTop: '16px',
              marginTop: 'auto'
            }}>
              <p style={{
                fontSize: '13px',
                color: '#14B8A6',
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                "Your CPA charges $500/hr to decode one K-1 while drowning in 200"
              </p>
            </div>
          </div>

          {/* Experience Failure */}
          <div style={{
            background: '#1E293B',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(20, 184, 166, 0.1)',
                borderRadius: '8px',
                marginBottom: '12px'
              }}>
                <Shuffle size={24} color="#14B8A6" strokeWidth={2} />
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#FB7185',
                textAlign: 'center'
              }}>
                EXPERIENCE FAILURE
              </h3>
            </div>

            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#14B8A6',
                marginBottom: '12px'
              }}>
                FRAGMENTED:
              </p>
              
              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '14px', color: '#FFFFFF', marginBottom: '4px' }}>
                  • 5-10 accounts
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8', marginLeft: '16px' }}>
                  No unified view
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '14px', color: '#FFFFFF', marginBottom: '4px' }}>
                  • Manual tracking
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8', marginLeft: '16px' }}>
                  Excel chaos
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '14px', color: '#FFFFFF', marginBottom: '4px' }}>
                  • No AI insights
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8', marginLeft: '16px' }}>
                  Blind decisions
                </p>
              </div>
            </div>

            <div style={{
              borderTop: '1px solid #334155',
              paddingTop: '16px',
              marginTop: 'auto'
            }}>
              <p style={{
                fontSize: '13px',
                color: '#14B8A6',
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                "Your wealth is scattered with no command center or AI copilot"
              </p>
            </div>
          </div>
        </div>

        {/* Hidden Fourth Failure - CPA */}
        <div style={{
          background: 'rgba(251, 191, 36, 0.05)',
          border: '1px solid rgba(251, 191, 36, 0.2)',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '24px'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#FBBF24',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            THE HIDDEN FOURTH FAILURE: The CPA Bottleneck
          </p>
          <p style={{
            fontSize: '13px',
            color: '#94A3B8'
          }}>
            Your trusted CPA manages 50-200 clients like you.
            They're accountants, not wealth managers - and they need our help.
          </p>
        </div>

        {/* Bottom Stats */}
        <div style={{
          background: 'rgba(148, 163, 184, 0.05)',
          borderRadius: '8px',
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px'
        }}>
          <span style={{ fontSize: '14px', color: '#FFFFFF' }}>
            <strong>7.9M Americans</strong>
          </span>
          <span style={{ color: '#334155' }}>•</span>
          <span style={{ fontSize: '14px', color: '#FFFFFF' }}>
            <strong>$1M-$25M Net Worth</strong>
          </span>
          <span style={{ color: '#334155' }}>•</span>
          <span style={{ fontSize: '14px', color: '#FB7185' }}>
            <strong>Losing $189K annually</strong> while institutions profit
          </span>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide3AlphaAccessGap
