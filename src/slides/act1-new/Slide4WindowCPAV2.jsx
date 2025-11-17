import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Clock, TrendingUp, Users, Target } from 'lucide-react'

const Slide4WindowCPAV2 = () => {
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
          THE 18-MONTH WINDOW
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#94A3B8',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          Three Catalysts Creating Unprecedented Opportunity
        </p>

        {/* Timeline Visual */}
        <div style={{
          background: 'rgba(148, 163, 184, 0.05)',
          borderRadius: '12px',
          padding: '32px',
          marginBottom: '32px',
          position: 'relative'
        }}>
          <div style={{
            position: 'relative',
            height: '80px'
          }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '20px',
              right: '20px',
              height: '3px',
              background: 'linear-gradient(90deg, #14B8A6, #FBBF24, #FB7185)'
            }} />
            
            {/* Timeline Points */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '20px',
              right: '20px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  background: '#14B8A6',
                  borderRadius: '50%',
                  margin: '0 auto 8px',
                  boxShadow: '0 0 20px rgba(20, 184, 166, 0.5)'
                }} />
                <p style={{ fontSize: '14px', color: '#14B8A6', fontWeight: '700' }}>NOW</p>
                <p style={{ fontSize: '11px', color: '#94A3B8' }}>46% switching</p>
                <p style={{ fontSize: '11px', color: '#94A3B8' }}>accelerating</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  background: '#FBBF24',
                  borderRadius: '50%',
                  margin: '0 auto 8px',
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
                }} />
                <p style={{ fontSize: '14px', color: '#FBBF24', fontWeight: '700' }}>6 MONTHS</p>
                <p style={{ fontSize: '11px', color: '#94A3B8' }}>India crosses</p>
                <p style={{ fontSize: '11px', color: '#94A3B8' }}>$6T milestone</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  background: '#FB7185',
                  borderRadius: '50%',
                  margin: '0 auto 8px',
                  boxShadow: '0 0 20px rgba(251, 113, 133, 0.5)'
                }} />
                <p style={{ fontSize: '14px', color: '#FB7185', fontWeight: '700' }}>12 MONTHS</p>
                <p style={{ fontSize: '11px', color: '#94A3B8' }}>GIFT City</p>
                <p style={{ fontSize: '11px', color: '#94A3B8' }}>tightening</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  background: '#FB7185',
                  borderRadius: '50%',
                  margin: '0 auto 8px',
                  boxShadow: '0 0 20px rgba(251, 113, 133, 0.5)'
                }} />
                <p style={{ fontSize: '14px', color: '#FB7185', fontWeight: '700' }}>18 MONTHS</p>
                <p style={{ fontSize: '11px', color: '#94A3B8' }}>Window</p>
                <p style={{ fontSize: '11px', color: '#94A3B8' }}>closes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Catalyst Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '32px'
        }}>
          {/* Catalyst 1 */}
          <div style={{
            background: 'rgba(20, 184, 166, 0.05)',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Users size={32} color="#14B8A6" style={{ marginBottom: '16px' }} />
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '12px'
            }}>
              CATALYST 1: CPA Crisis
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: '8px'
            }}>
              Your CPA has 100+ K-1s due in March
            </p>
            <p style={{
              fontSize: '13px',
              color: '#94A3B8',
              textAlign: 'center'
            }}>
              They're drowning and desperately need AI help
            </p>
          </div>

          {/* Catalyst 2 */}
          <div style={{
            background: 'rgba(20, 184, 166, 0.05)',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <TrendingUp size={32} color="#14B8A6" style={{ marginBottom: '16px' }} />
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '12px'
            }}>
              CATALYST 2: India Access
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: '8px'
            }}>
              GIFT City just opened to US investors
            </p>
            <p style={{
              fontSize: '13px',
              color: '#94A3B8',
              textAlign: 'center'
            }}>
              Only 3 players have access (we're one)
            </p>
          </div>

          {/* Catalyst 3 */}
          <div style={{
            background: 'rgba(20, 184, 166, 0.05)',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Target size={32} color="#14B8A6" style={{ marginBottom: '16px' }} />
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '12px'
            }}>
              CATALYST 3: AI Proof
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: '8px'
            }}>
              Stanford proves 600% outperformance
            </p>
            <p style={{
              fontSize: '13px',
              color: '#94A3B8',
              textAlign: 'center'
            }}>
              Game over for human-only advisors
            </p>
          </div>
        </div>

        {/* CPA Distribution Advantage */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(20, 184, 166, 0.1))',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '24px'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#FBBF24',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            OUR UNFAIR DISTRIBUTION ADVANTAGE
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            textAlign: 'center'
          }}>
            <div>
              <p style={{ fontSize: '32px', fontWeight: '700', color: '#FFFFFF', marginBottom: '4px' }}>
                1,000
              </p>
              <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                CPAs as Partners
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '24px', color: '#FBBF24' }}>×</span>
            </div>
            <div>
              <p style={{ fontSize: '32px', fontWeight: '700', color: '#FFFFFF', marginBottom: '4px' }}>
                100+
              </p>
              <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                HNW Clients Each
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '24px', color: '#FBBF24' }}>=</span>
            </div>
            <div>
              <p style={{ fontSize: '32px', fontWeight: '700', color: '#14B8A6', marginBottom: '4px' }}>
                100,000
              </p>
              <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                Families Instantly
              </p>
            </div>
          </div>
          
          <p style={{
            fontSize: '14px',
            color: '#94A3B8',
            textAlign: 'center',
            marginTop: '20px',
            fontStyle: 'italic'
          }}>
            While others fight expensive B2C wars, we partner with trusted advisors
          </p>
        </div>

        {/* Bottom Message */}
        <div style={{
          textAlign: 'center',
          padding: '16px'
        }}>
          <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '8px' }}>
            While you wait, India adds <strong style={{ color: '#14B8A6' }}>$60B monthly</strong> - all inaccessible to you
          </p>
          <p style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: '600' }}>
            The window is 18 months. The opportunity is $124T.
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide4WindowCPAV2
