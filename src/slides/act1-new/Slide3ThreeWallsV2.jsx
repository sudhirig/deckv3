import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, FileText, Shuffle } from 'lucide-react'

const Slide3ThreeWallsV2 = () => {
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
          THREE WALLS BETWEEN YOU AND ALPHA
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#94A3B8',
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          Too Big for Robinhood. Too Small for Goldman.
        </p>

        {/* Three Columns - Simplified */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          flex: 1,
          marginBottom: '32px'
        }}>
          {/* Access Wall */}
          <div style={{
            background: '#1E293B',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '28px'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(251, 113, 133, 0.1)',
                borderRadius: '8px',
                marginBottom: '16px'
              }}>
                <Lock size={28} color="#FB7185" strokeWidth={2} />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FB7185',
                textAlign: 'center'
              }}>
                ACCESS WALL
              </h3>
            </div>

            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600', marginBottom: '4px' }}>
                  India: 35% Tax
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  While institutions pay 0%
                </p>
              </div>

              <div>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600', marginBottom: '4px' }}>
                  PE/VC: $5M Minimum
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  You need $50M for access
                </p>
              </div>

              <div>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600', marginBottom: '4px' }}>
                  Daily TLH: Missed
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  Losing $25K annually
                </p>
              </div>
            </div>

            <div style={{
              borderTop: '1px solid #334155',
              paddingTop: '20px',
              marginTop: 'auto'
            }}>
              <p style={{
                fontSize: '28px',
                color: '#FB7185',
                textAlign: 'center',
                fontWeight: '700'
              }}>
                -$125K
              </p>
              <p style={{
                fontSize: '12px',
                color: '#94A3B8',
                textAlign: 'center',
                marginTop: '4px'
              }}>
                Annual Loss
              </p>
            </div>
          </div>

          {/* Complexity Wall */}
          <div style={{
            background: '#1E293B',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '28px'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(251, 113, 133, 0.1)',
                borderRadius: '8px',
                marginBottom: '16px'
              }}>
                <FileText size={28} color="#FB7185" strokeWidth={2} />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FB7185',
                textAlign: 'center'
              }}>
                COMPLEXITY WALL
              </h3>
            </div>

            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600', marginBottom: '4px' }}>
                  K-1s: 40 Hours Each
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  100+ pages of chaos
                </p>
              </div>

              <div>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600', marginBottom: '4px' }}>
                  CPAs: $500/Hour
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  Drowning in paperwork
                </p>
              </div>

              <div>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600', marginBottom: '4px' }}>
                  GIFT: 3 Lawyers
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  Just to get started
                </p>
              </div>
            </div>

            <div style={{
              borderTop: '1px solid #334155',
              paddingTop: '20px',
              marginTop: 'auto'
            }}>
              <p style={{
                fontSize: '28px',
                color: '#FB7185',
                textAlign: 'center',
                fontWeight: '700'
              }}>
                -$35K
              </p>
              <p style={{
                fontSize: '12px',
                color: '#94A3B8',
                textAlign: 'center',
                marginTop: '4px'
              }}>
                Annual CPA Fees
              </p>
            </div>
          </div>

          {/* Experience Wall */}
          <div style={{
            background: '#1E293B',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '28px'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(251, 113, 133, 0.1)',
                borderRadius: '8px',
                marginBottom: '16px'
              }}>
                <Shuffle size={28} color="#FB7185" strokeWidth={2} />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FB7185',
                textAlign: 'center'
              }}>
                EXPERIENCE WALL
              </h3>
            </div>

            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600', marginBottom: '4px' }}>
                  5-10 Accounts
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  No unified view
                </p>
              </div>

              <div>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600', marginBottom: '4px' }}>
                  No Unified View
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  Excel spreadsheet hell
                </p>
              </div>

              <div>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600', marginBottom: '4px' }}>
                  Zero AI Insights
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  Flying blind
                </p>
              </div>
            </div>

            <div style={{
              borderTop: '1px solid #334155',
              paddingTop: '20px',
              marginTop: 'auto'
            }}>
              <p style={{
                fontSize: '28px',
                color: '#FB7185',
                textAlign: 'center',
                fontWeight: '700'
              }}>
                -$30K
              </p>
              <p style={{
                fontSize: '12px',
                color: '#94A3B8',
                textAlign: 'center',
                marginTop: '4px'
              }}>
                Opportunity Cost
              </p>
            </div>
          </div>
        </div>

        {/* CPA Message */}
        <div style={{
          background: 'rgba(251, 191, 36, 0.05)',
          border: '1px solid rgba(251, 191, 36, 0.2)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '24px'
        }}>
          <p style={{
            fontSize: '16px',
            color: '#FBBF24',
            fontWeight: '600',
            marginBottom: '8px',
            textAlign: 'center'
          }}>
            THE HIDDEN TRUTH: Your CPA Wants to Help
          </p>
          <p style={{
            fontSize: '14px',
            color: '#94A3B8',
            textAlign: 'center'
          }}>
            But they're drowning in K-1s with no tools. They need an AI co-pilot as much as you do.
          </p>
        </div>

        {/* Total Loss */}
        <div style={{
          textAlign: 'center',
          padding: '20px',
          background: 'linear-gradient(90deg, transparent, rgba(251, 113, 133, 0.1), transparent)',
          borderRadius: '8px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px'
          }}>
            <span style={{ fontSize: '16px', color: '#FFFFFF' }}>
              Total Annual Loss:
            </span>
            <span style={{ fontSize: '32px', color: '#FB7185', fontWeight: '700' }}>
              -$190,000
            </span>
            <span style={{ fontSize: '16px', color: '#94A3B8' }}>
              on a $3M portfolio
            </span>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide3ThreeWallsV2
