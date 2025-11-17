import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { TrendingUp, Globe, Brain } from 'lucide-react'

const Slide5HiddenOpportunityV2 = () => {
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
        {/* Main Title */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#14B8A6',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          THE $124T HIDDEN OPPORTUNITY
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '20px',
          color: '#94A3B8',
          marginBottom: '56px',
          textAlign: 'center'
        }}>
          Three Forces Creating Unprecedented Alpha
        </p>

        {/* Three Forces Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          maxWidth: '1100px',
          width: '100%',
          marginBottom: '64px'
        }}>
          {/* Force 1: Switching */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.1), rgba(251, 113, 133, 0.05))',
            border: '2px solid rgba(251, 113, 133, 0.3)',
            borderRadius: '16px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              width: '64px',
              height: '64px',
              background: 'rgba(251, 113, 133, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <TrendingUp size={32} color="#FB7185" />
            </div>
            
            <h3 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#FB7185',
              marginBottom: '8px'
            }}>
              46%
            </h3>
            
            <p style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: '12px'
            }}>
              of HNWIs actively switching advisors NOW
            </p>
            
            <p style={{
              fontSize: '14px',
              color: '#94A3B8',
              textAlign: 'center'
            }}>
              PwC 2024: Largest movement in history
            </p>
          </div>

          {/* Force 2: India */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(20, 184, 166, 0.05))',
            border: '2px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '16px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              width: '64px',
              height: '64px',
              background: 'rgba(20, 184, 166, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <Globe size={32} color="#14B8A6" />
            </div>
            
            <h3 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#14B8A6',
              marginBottom: '8px'
            }}>
              $5T
            </h3>
            
            <p style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: '12px'
            }}>
              India market with 0% tax via GIFT City
            </p>
            
            <p style={{
              fontSize: '14px',
              color: '#FB7185',
              textAlign: 'center'
            }}>
              While you pay 35% FPI tax
            </p>
          </div>

          {/* Force 3: AI */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05))',
            border: '2px solid rgba(251, 191, 36, 0.3)',
            borderRadius: '16px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              width: '64px',
              height: '64px',
              background: 'rgba(251, 191, 36, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <Brain size={32} color="#FBBF24" />
            </div>
            
            <h3 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#FBBF24',
              marginBottom: '8px'
            }}>
              600%
            </h3>
            
            <p style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: '12px'
            }}>
              AI portfolios outperforming humans
            </p>
            
            <p style={{
              fontSize: '14px',
              color: '#94A3B8',
              textAlign: 'center'
            }}>
              Stanford 2024: The game has changed
            </p>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div style={{
          display: 'flex',
          gap: '48px',
          marginBottom: '48px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '28px', fontWeight: '700', color: '#FFFFFF', marginBottom: '4px' }}>
              7.9M
            </p>
            <p style={{ fontSize: '14px', color: '#94A3B8' }}>
              US Millionaires
            </p>
          </div>
          
          <div style={{
            width: '1px',
            background: 'rgba(148, 163, 184, 0.3)'
          }} />
          
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '28px', fontWeight: '700', color: '#FFFFFF', marginBottom: '4px' }}>
              $1M-$25M
            </p>
            <p style={{ fontSize: '14px', color: '#94A3B8' }}>
              Sweet Spot
            </p>
          </div>
          
          <div style={{
            width: '1px',
            background: 'rgba(148, 163, 184, 0.3)'
          }} />
          
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '28px', fontWeight: '700', color: '#FB7185', marginBottom: '4px' }}>
              $189K
            </p>
            <p style={{ fontSize: '14px', color: '#94A3B8' }}>
              Annual Loss
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          width: '400px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #14B8A6, transparent)',
          marginBottom: '32px'
        }} />

        {/* Bottom Line */}
        <div style={{
          textAlign: 'center',
          maxWidth: '700px'
        }}>
          <p style={{
            fontSize: '24px',
            fontWeight: '300',
            color: '#FFFFFF',
            marginBottom: '12px'
          }}>
            <strong style={{ fontWeight: '600' }}>Bottom Line:</strong> The 1% aren't smarter.
          </p>
          <p style={{
            fontSize: '20px',
            color: '#94A3B8'
          }}>
            They just have access you don't. <strong style={{ color: '#14B8A6', fontWeight: '600' }}>Until now.</strong>
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide5HiddenOpportunityV2
