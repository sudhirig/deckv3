import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'

const Slide5LockedValueV0 = () => {
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: '#0A1628',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '64px',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: '32px',
          fontWeight: '600',
          color: '#FFFFFF',
          marginBottom: '8px',
          textAlign: 'center'
        }}>
          THE $45T LOCKED VALUE CRISIS
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#94A3B8',
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          Massive Wealth Trapped Behind Institutional Walls
        </p>

        {/* Three Value Locks */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          maxWidth: '1000px',
          width: '100%',
          marginBottom: '48px'
        }}>
          {/* Alternatives Lock */}
          <div style={{
            border: '2px solid rgba(251, 191, 36, 0.3)',
            borderRadius: '12px',
            padding: '28px',
            background: 'rgba(251, 191, 36, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#FBBF24',
              marginBottom: '8px'
            }}>
              $30T
            </h2>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#FFFFFF',
              marginBottom: '20px'
            }}>
              Alternative Assets
            </h3>
            
            <div style={{
              width: '100%',
              paddingTop: '20px',
              borderTop: '1px solid rgba(251, 191, 36, 0.2)'
            }}>
              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  <strong>72%</strong> want alternatives
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  Only <strong>5%</strong> have access
                </p>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  • PE/VC: $13T locked
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  • Hedge Funds: $8T
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  • Private Credit: $5T
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  • Real Estate: $4T
                </p>
              </div>
              
              <p style={{
                fontSize: '11px',
                color: '#FBBF24',
                marginTop: '12px',
                fontStyle: 'italic'
              }}>
                16,000+ funds exist
                <br />
                80% data in PDFs
              </p>
            </div>
          </div>

          {/* Emerging Markets Lock */}
          <div style={{
            border: '2px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '12px',
            padding: '28px',
            background: 'rgba(20, 184, 166, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#14B8A6',
              marginBottom: '8px'
            }}>
              $15T
            </h2>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#FFFFFF',
              marginBottom: '20px'
            }}>
              Emerging Markets
            </h3>
            
            <div style={{
              width: '100%',
              paddingTop: '20px',
              borderTop: '1px solid rgba(20, 184, 166, 0.2)'
            }}>
              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  <strong>15%</strong> want India
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  Only <strong>3%</strong> have it
                </p>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  • India: $5T (35% tax)
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  • Indonesia: $1.3T
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  • Vietnam: $400B
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  • Africa: $2.4T
                </p>
              </div>
              
              <p style={{
                fontSize: '11px',
                color: '#14B8A6',
                marginTop: '12px',
                fontStyle: 'italic'
              }}>
                87% of growth
                <br />
                Zero access
              </p>
            </div>
          </div>

          {/* Human Scale Lock */}
          <div style={{
            border: '2px solid rgba(251, 113, 133, 0.3)',
            borderRadius: '12px',
            padding: '28px',
            background: 'rgba(251, 113, 133, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#FB7185',
              marginBottom: '8px'
            }}>
              2.4M
            </h2>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#FFFFFF',
              marginBottom: '20px'
            }}>
              Underserved Families
            </h3>
            
            <div style={{
              width: '100%',
              paddingTop: '20px',
              borderTop: '1px solid rgba(251, 113, 133, 0.2)'
            }}>
              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  <strong>87%</strong> no FO access
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  Need <strong>$50M+</strong>
                </p>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  • US: 1:500 ratio
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  • India: 1:5000 ratio
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  • 100K advisor shortage
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8' }}>
                  • 40% retiring soon
                </p>
              </div>
              
              <p style={{
                fontSize: '11px',
                color: '#FB7185',
                marginTop: '12px',
                fontStyle: 'italic'
              }}>
                EMILLI Segment:
                <br />
                7.9M families
              </p>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div style={{
          background: 'rgba(148, 163, 184, 0.05)',
          borderRadius: '8px',
          padding: '24px 48px',
          marginBottom: '32px',
          maxWidth: '800px'
        }}>
          <p style={{
            fontSize: '16px',
            color: '#14B8A6',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '8px'
          }}>
            THE EMILLI SEGMENT
          </p>
          <p style={{
            fontSize: '14px',
            color: '#94A3B8',
            textAlign: 'center'
          }}>
            <strong style={{ color: '#FFFFFF' }}>E</strong>merging •
            <strong style={{ color: '#FFFFFF' }}> M</strong>illionaires •
            <strong style={{ color: '#FFFFFF' }}> I</strong>nheriting •
            <strong style={{ color: '#FFFFFF' }}> L</strong>iquidity •
            <strong style={{ color: '#FFFFFF' }}> L</strong>ocked-out •
            <strong style={{ color: '#FFFFFF' }}> I</strong>nstitutionally-underserved
          </p>
        </div>

        {/* Bottom Message */}
        <div style={{
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#FFFFFF',
            marginBottom: '8px'
          }}>
            $45T locked from 2.4M families
          </p>
          <p style={{
            fontSize: '16px',
            color: '#94A3B8'
          }}>
            Humans can't scale to serve them. <span style={{ color: '#14B8A6' }}>AI is the only solution.</span>
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide5LockedValueV0
