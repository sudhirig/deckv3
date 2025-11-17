import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'

const Slide4ConvergenceWindowV0 = () => {
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
          THE 18-MONTH CONVERGENCE WINDOW
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#94A3B8',
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          Three Forces Creating a Once-in-Generation Opportunity
        </p>

        {/* 2x2 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '24px',
          marginBottom: '32px'
        }}>
          {/* Wealth in Motion - Opportunity */}
          <div style={{
            border: '2px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '8px',
            padding: '20px',
            background: 'rgba(20, 184, 166, 0.05)'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '16px'
            }}>
              💚 OPPORTUNITY
            </h3>
            <h4 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#FFFFFF',
              marginBottom: '12px'
            }}>
              📈 WEALTH IN MOTION
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '12px',
              color: '#94A3B8',
              lineHeight: '1.8'
            }}>
              <li>• 46% actively switching</li>
              <li>• $1.4T transferring/yr</li>
              <li>• Gen X demands digital</li>
              <li>• EMILLI segment: 7.9M</li>
            </ul>
          </div>

          {/* Human Bottleneck - Friction */}
          <div style={{
            border: '2px solid rgba(251, 113, 133, 0.3)',
            borderRadius: '8px',
            padding: '20px',
            background: 'rgba(251, 113, 133, 0.05)'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#FB7185',
              marginBottom: '16px'
            }}>
              ⚠️ FRICTION
            </h3>
            <h4 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#FFFFFF',
              marginBottom: '12px'
            }}>
              👥 HUMAN BOTTLENECK
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '12px',
              color: '#94A3B8',
              lineHeight: '1.8'
            }}>
              <li>• 1:500 advisor ratio</li>
              <li>• 100K shortage by 2030</li>
              <li>• 40% retiring (age 55+)</li>
              <li>• CPAs at breaking point</li>
            </ul>
          </div>

          {/* India Explosion - Opportunity */}
          <div style={{
            border: '2px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '8px',
            padding: '20px',
            background: 'rgba(20, 184, 166, 0.05)'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '16px',
              visibility: 'hidden'
            }}>
              OPPORTUNITY
            </h3>
            <h4 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#FFFFFF',
              marginBottom: '12px'
            }}>
              🇮🇳 INDIA EXPLOSION
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '12px',
              color: '#94A3B8',
              lineHeight: '1.8'
            }}>
              <li>• 3rd largest economy</li>
              <li>• 100K new HNW monthly</li>
              <li>• $5T → $10T by 2030</li>
              <li>• 8.2% growth vs US 2.5%</li>
            </ul>
          </div>

          {/* Access Barriers - Friction */}
          <div style={{
            border: '2px solid rgba(251, 113, 133, 0.3)',
            borderRadius: '8px',
            padding: '20px',
            background: 'rgba(251, 113, 133, 0.05)'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#FB7185',
              marginBottom: '16px',
              visibility: 'hidden'
            }}>
              FRICTION
            </h3>
            <h4 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#FFFFFF',
              marginBottom: '12px'
            }}>
              🔒 ACCESS BARRIERS
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '12px',
              color: '#94A3B8',
              lineHeight: '1.8'
            }}>
              <li>• 35% FPI tax for you</li>
              <li>• 0% via GIFT (3 players)</li>
              <li>• $5M minimums for PE</li>
              <li>• Zero AI-native options</li>
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div style={{
          background: 'rgba(148, 163, 184, 0.05)',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '24px',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            position: 'relative'
          }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '10%',
              right: '10%',
              height: '2px',
              background: 'linear-gradient(90deg, #14B8A6, #FBBF24, #FB7185)',
              zIndex: 0
            }} />
            
            {/* Timeline Points */}
            <div style={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#14B8A6',
                borderRadius: '50%',
                margin: '0 auto 8px'
              }} />
              <p style={{ fontSize: '12px', color: '#14B8A6', fontWeight: '600' }}>NOW</p>
              <p style={{ fontSize: '10px', color: '#94A3B8' }}>Switching<br/>accelerates</p>
            </div>
            
            <div style={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#FBBF24',
                borderRadius: '50%',
                margin: '0 auto 8px'
              }} />
              <p style={{ fontSize: '12px', color: '#FBBF24', fontWeight: '600' }}>6 MONTHS</p>
              <p style={{ fontSize: '10px', color: '#94A3B8' }}>India $6T<br/>milestone</p>
            </div>
            
            <div style={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#FB7185',
                borderRadius: '50%',
                margin: '0 auto 8px'
              }} />
              <p style={{ fontSize: '12px', color: '#FB7185', fontWeight: '600' }}>12 MONTHS</p>
              <p style={{ fontSize: '10px', color: '#94A3B8' }}>GIFT window<br/>tightening</p>
            </div>
            
            <div style={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#FB7185',
                borderRadius: '50%',
                margin: '0 auto 8px'
              }} />
              <p style={{ fontSize: '12px', color: '#FB7185', fontWeight: '600' }}>18 MONTHS</p>
              <p style={{ fontSize: '10px', color: '#94A3B8' }}>Market<br/>captured</p>
            </div>
          </div>
        </div>

        {/* Three Catalysts */}
        <div style={{
          background: 'rgba(251, 191, 36, 0.05)',
          border: '1px solid rgba(251, 191, 36, 0.2)',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '24px'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#FBBF24',
            fontWeight: '600',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            THREE CATALYSTS HAPPENING NOW:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            <div>
              <strong style={{ fontSize: '12px', color: '#FFFFFF' }}>1. CPA Crisis:</strong>
              <p style={{ fontSize: '11px', color: '#94A3B8', marginTop: '4px' }}>
                Your CPA has 100+ K-1s due in March (they need help)
              </p>
            </div>
            <div>
              <strong style={{ fontSize: '12px', color: '#FFFFFF' }}>2. India Access:</strong>
              <p style={{ fontSize: '11px', color: '#94A3B8', marginTop: '4px' }}>
                GIFT City just opened to US investors (only 3 players)
              </p>
            </div>
            <div>
              <strong style={{ fontSize: '12px', color: '#FFFFFF' }}>3. AI Breakthrough:</strong>
              <p style={{ fontSize: '11px', color: '#94A3B8', marginTop: '4px' }}>
                Stanford proves 600% outperformance (game over for human-only)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div style={{
          textAlign: 'center',
          padding: '16px'
        }}>
          <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '4px' }}>
            <strong>Bottom:</strong> While you wait, India adds <strong style={{ color: '#14B8A6' }}>$60B monthly</strong> - all inaccessible to you
          </p>
          <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600' }}>
            The window is 18 months. The opportunity is $124T. <span style={{ color: '#14B8A6' }}>The time is now.</span>
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide4ConvergenceWindowV0
