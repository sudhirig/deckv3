import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { DollarSign, Globe, Users } from 'lucide-react'

const Slide5LockedValueV3 = () => {
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
          fontSize: '40px',
          fontWeight: '700',
          color: '#FFFFFF',
          marginBottom: '8px',
          textAlign: 'center'
        }}>
          THE $45T OPPORTUNITY SCALE
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#94A3B8',
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          Massive Wealth Trapped Behind Institutional Walls
        </p>

        {/* Three Value Buckets */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          maxWidth: '1100px',
          width: '100%',
          marginBottom: '48px'
        }}>
          {/* Alternatives */}
          <div style={{
            border: '2px solid rgba(251, 191, 36, 0.3)',
            borderRadius: '16px',
            padding: '32px',
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05))',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'rgba(251, 191, 36, 0.1)',
              borderRadius: '50%',
              filter: 'blur(40px)'
            }} />
            
            <DollarSign size={40} color="#FBBF24" style={{ marginBottom: '16px' }} />
            
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#FBBF24',
              marginBottom: '8px'
            }}>
              $30T
            </h2>
            
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#FFFFFF',
              marginBottom: '24px'
            }}>
              Alternative Assets
            </h3>
            
            <div style={{
              width: '100%',
              paddingTop: '24px',
              borderTop: '1px solid rgba(251, 191, 36, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '24px', color: '#FBBF24', fontWeight: '700' }}>72%</p>
                  <p style={{ fontSize: '12px', color: '#94A3B8' }}>want access</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '24px', color: '#FB7185', fontWeight: '700' }}>5%</p>
                  <p style={{ fontSize: '12px', color: '#94A3B8' }}>have it</p>
                </div>
              </div>
              
              <p style={{
                fontSize: '12px',
                color: '#94A3B8',
                textAlign: 'center',
                marginTop: '12px'
              }}>
                PE/VC • Hedge Funds • Private Credit
              </p>
              
              <p style={{
                fontSize: '14px',
                color: '#FBBF24',
                textAlign: 'center',
                marginTop: '12px',
                fontWeight: '600'
              }}>
                16,000+ funds exist
              </p>
            </div>
          </div>

          {/* Emerging Markets */}
          <div style={{
            border: '2px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '16px',
            padding: '32px',
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(20, 184, 166, 0.05))',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'rgba(20, 184, 166, 0.1)',
              borderRadius: '50%',
              filter: 'blur(40px)'
            }} />
            
            <Globe size={40} color="#14B8A6" style={{ marginBottom: '16px' }} />
            
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#14B8A6',
              marginBottom: '8px'
            }}>
              $15T
            </h2>
            
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#FFFFFF',
              marginBottom: '24px'
            }}>
              Emerging Markets
            </h3>
            
            <div style={{
              width: '100%',
              paddingTop: '24px',
              borderTop: '1px solid rgba(20, 184, 166, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '24px', color: '#14B8A6', fontWeight: '700' }}>87%</p>
                  <p style={{ fontSize: '12px', color: '#94A3B8' }}>of growth</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '24px', color: '#FB7185', fontWeight: '700' }}>3%</p>
                  <p style={{ fontSize: '12px', color: '#94A3B8' }}>allocated</p>
                </div>
              </div>
              
              <p style={{
                fontSize: '12px',
                color: '#94A3B8',
                textAlign: 'center',
                marginTop: '12px'
              }}>
                India $5T • Indonesia • Vietnam • Africa
              </p>
              
              <p style={{
                fontSize: '14px',
                color: '#14B8A6',
                textAlign: 'center',
                marginTop: '12px',
                fontWeight: '600'
              }}>
                Zero institutional access
              </p>
            </div>
          </div>

          {/* Underserved */}
          <div style={{
            border: '2px solid rgba(251, 113, 133, 0.3)',
            borderRadius: '16px',
            padding: '32px',
            background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.1), rgba(251, 113, 133, 0.05))',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'rgba(251, 113, 133, 0.1)',
              borderRadius: '50%',
              filter: 'blur(40px)'
            }} />
            
            <Users size={40} color="#FB7185" style={{ marginBottom: '16px' }} />
            
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#FB7185',
              marginBottom: '8px'
            }}>
              2.4M
            </h2>
            
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#FFFFFF',
              marginBottom: '24px'
            }}>
              Underserved Families
            </h3>
            
            <div style={{
              width: '100%',
              paddingTop: '24px',
              borderTop: '1px solid rgba(251, 113, 133, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '24px', color: '#FB7185', fontWeight: '700' }}>87%</p>
                  <p style={{ fontSize: '12px', color: '#94A3B8' }}>no FO access</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '24px', color: '#FB7185', fontWeight: '700' }}>100K</p>
                  <p style={{ fontSize: '12px', color: '#94A3B8' }}>advisor gap</p>
                </div>
              </div>
              
              <p style={{
                fontSize: '12px',
                color: '#94A3B8',
                textAlign: 'center',
                marginTop: '12px'
              }}>
                $1M-$25M segment • Like Priya
              </p>
              
              <p style={{
                fontSize: '14px',
                color: '#FB7185',
                textAlign: 'center',
                marginTop: '12px',
                fontWeight: '600'
              }}>
                EMILLI segment
              </p>
            </div>
          </div>
        </div>

        {/* EMILLI Expansion */}
        <div style={{
          background: 'rgba(148, 163, 184, 0.05)',
          borderRadius: '12px',
          padding: '20px 48px',
          marginBottom: '32px',
          maxWidth: '900px'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#94A3B8',
            textAlign: 'center'
          }}>
            <strong style={{ color: '#FFFFFF' }}>E</strong>merging
            <span style={{ color: '#14B8A6' }}> • </span>
            <strong style={{ color: '#FFFFFF' }}>M</strong>illionaires
            <span style={{ color: '#14B8A6' }}> • </span>
            <strong style={{ color: '#FFFFFF' }}>I</strong>nheriting
            <span style={{ color: '#14B8A6' }}> • </span>
            <strong style={{ color: '#FFFFFF' }}>L</strong>iquidity
            <span style={{ color: '#14B8A6' }}> • </span>
            <strong style={{ color: '#FFFFFF' }}>L</strong>ocked-out
            <span style={{ color: '#14B8A6' }}> • </span>
            <strong style={{ color: '#FFFFFF' }}>I</strong>nstitutionally-underserved
          </p>
        </div>

        {/* Bottom Line */}
        <div style={{
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#FFFFFF',
            marginBottom: '12px'
          }}>
            $45T locked from 2.4M families like Priya
          </p>
          <p style={{
            fontSize: '18px',
            color: '#94A3B8'
          }}>
            Humans can't scale. <strong style={{ color: '#14B8A6' }}>AI + CPA distribution is the only way.</strong>
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide5LockedValueV3
