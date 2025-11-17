import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { TrendingUp, Users, Globe, Lock } from 'lucide-react'

const Slide4ConvergenceWindow = () => {
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
          flex: 1,
          marginBottom: '24px'
        }}>
          {/* Wealth in Motion - Opportunity */}
          <div style={{
            background: 'rgba(20, 184, 166, 0.05)',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <TrendingUp size={24} color="#14B8A6" />
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#14B8A6'
              }}>
                💚 WEALTH IN MOTION
              </h3>
            </div>
            
            <div style={{ flex: 1 }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • <strong>46%</strong> actively switching
                </li>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • <strong>$1.4T</strong> transferring/yr
                </li>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • Gen X demands digital
                </li>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • EMILLI segment: <strong>7.9M</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Human Bottleneck - Friction */}
          <div style={{
            background: 'rgba(251, 113, 133, 0.05)',
            border: '1px solid rgba(251, 113, 133, 0.2)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <Users size={24} color="#FB7185" />
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#FB7185'
              }}>
                ⚠️ HUMAN BOTTLENECK
              </h3>
            </div>
            
            <div style={{ flex: 1 }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • <strong>1:500</strong> advisor ratio
                </li>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • <strong>100K</strong> shortage by 2030
                </li>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • <strong>40%</strong> retiring (age 55+)
                </li>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • CPAs at breaking point
                </li>
              </ul>
            </div>
          </div>

          {/* India Explosion - Opportunity */}
          <div style={{
            background: 'rgba(20, 184, 166, 0.05)',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <Globe size={24} color="#14B8A6" />
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#14B8A6'
              }}>
                🇮🇳 INDIA EXPLOSION
              </h3>
            </div>
            
            <div style={{ flex: 1 }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • 3rd largest economy
                </li>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • <strong>100K</strong> new HNW monthly
                </li>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • <strong>$5T → $10T</strong> by 2030
                </li>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • <strong>8.2%</strong> growth vs US 2.5%
                </li>
              </ul>
            </div>
          </div>

          {/* Access Barriers - Friction */}
          <div style={{
            background: 'rgba(251, 113, 133, 0.05)',
            border: '1px solid rgba(251, 113, 133, 0.2)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <Lock size={24} color="#FB7185" />
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#FB7185'
              }}>
                🔒 ACCESS BARRIERS
              </h3>
            </div>
            
            <div style={{ flex: 1 }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • <strong>35%</strong> FPI tax for you
                </li>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • <strong>0%</strong> via GIFT (3 players)
                </li>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • <strong>$5M</strong> minimums for PE
                </li>
                <li style={{ fontSize: '14px', color: '#FFFFFF' }}>
                  • Zero AI-native options
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{
          background: 'rgba(148, 163, 184, 0.05)',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          <div style={{
            position: 'relative',
            height: '60px'
          }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              top: '30px',
              left: '0',
              right: '0',
              height: '2px',
              background: 'linear-gradient(90deg, #14B8A6, #FBBF24, #FB7185)'
            }} />
            
            {/* Timeline Points */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div style={{ textAlign: 'center' }}>
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
              
              <div style={{ textAlign: 'center' }}>
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
              
              <div style={{ textAlign: 'center' }}>
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
              
              <div style={{ textAlign: 'center' }}>
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
        </div>

        {/* Three Catalysts */}
        <div style={{
          background: 'rgba(251, 191, 36, 0.05)',
          border: '1px solid rgba(251, 191, 36, 0.2)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '24px'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#FBBF24',
            fontWeight: '600',
            marginBottom: '12px'
          }}>
            THREE CATALYSTS HAPPENING NOW:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px'
          }}>
            <div>
              <strong style={{ fontSize: '13px', color: '#FFFFFF' }}>1. CPA Crisis:</strong>
              <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                Your CPA has 100+ K-1s due in March (they need help)
              </p>
            </div>
            <div>
              <strong style={{ fontSize: '13px', color: '#FFFFFF' }}>2. India Access:</strong>
              <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                GIFT City just opened to US investors (only 3 players)
              </p>
            </div>
            <div>
              <strong style={{ fontSize: '13px', color: '#FFFFFF' }}>3. AI Breakthrough:</strong>
              <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                Stanford proves 600% outperformance (game over for human-only)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div style={{
          textAlign: 'center',
          padding: '16px',
          background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.1), transparent)',
          borderRadius: '8px'
        }}>
          <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '4px' }}>
            While you wait, India adds <strong style={{ color: '#14B8A6' }}>$60B monthly</strong> - all inaccessible to you
          </p>
          <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600' }}>
            The window is 18 months. The opportunity is $124T. <span style={{ color: '#14B8A6' }}>The time is now.</span>
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide4ConvergenceWindow
