import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, FileText, Shuffle } from 'lucide-react'

const Slide3ThreeWallsV3 = () => {
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
          fontWeight: '700',
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
          marginBottom: '32px'
        }}>
          Too Big for Robinhood, Too Small for Goldman
        </p>

        {/* Three Walls Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          flex: 1,
          marginBottom: '24px'
        }}>
          {/* Wall 1: Access */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.1), rgba(251, 113, 133, 0.05))',
            border: '2px solid rgba(251, 113, 133, 0.3)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(251, 113, 133, 0.2)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Lock size={24} color="#FB7185" />
              </div>
            </div>

            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#FB7185',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              ACCESS WALL
            </h3>

            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600' }}>
                  India: Locked Out
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  35% FPI tax penalty
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600' }}>
                  PE/VC: Too Small
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  Need $5M minimum
                </p>
              </div>

              <div>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600' }}>
                  Tax Alpha: Missed
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  No daily TLH
                </p>
              </div>
            </div>

            <div style={{
              marginTop: 'auto',
              paddingTop: '20px',
              borderTop: '1px solid rgba(251, 113, 133, 0.2)'
            }}>
              <p style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#FB7185',
                textAlign: 'center'
              }}>
                -$60K/year
              </p>
            </div>
          </div>

          {/* Wall 2: Complexity */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05))',
            border: '2px solid rgba(251, 191, 36, 0.3)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(251, 191, 36, 0.2)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FileText size={24} color="#FBBF24" />
              </div>
            </div>

            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#FBBF24',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              COMPLEXITY WALL
            </h3>

            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600' }}>
                  K-1s: Nightmare
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  40 hours each
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600' }}>
                  CPAs: Overwhelmed
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  $500/hour costs
                </p>
              </div>

              <div>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600' }}>
                  GIFT: Maze
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  3 lawyers needed
                </p>
              </div>
            </div>

            <div style={{
              marginTop: 'auto',
              paddingTop: '20px',
              borderTop: '1px solid rgba(251, 191, 36, 0.2)'
            }}>
              <p style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#FBBF24',
                textAlign: 'center'
              }}>
                -$70K/year
              </p>
            </div>
          </div>

          {/* Wall 3: Experience */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.1), rgba(148, 163, 184, 0.05))',
            border: '2px solid rgba(148, 163, 184, 0.3)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(148, 163, 184, 0.2)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Shuffle size={24} color="#94A3B8" />
              </div>
            </div>

            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#94A3B8',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              EXPERIENCE WALL
            </h3>

            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600' }}>
                  5-10 Accounts
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  No unified view
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600' }}>
                  Manual Tracking
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  Excel chaos
                </p>
              </div>

              <div>
                <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '600' }}>
                  Zero AI
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                  Blind decisions
                </p>
              </div>
            </div>

            <div style={{
              marginTop: 'auto',
              paddingTop: '20px',
              borderTop: '1px solid rgba(148, 163, 184, 0.2)'
            }}>
              <p style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#94A3B8',
                textAlign: 'center'
              }}>
                -$60K/year
              </p>
            </div>
          </div>
        </div>

        {/* Total Loss */}
        <div style={{
          background: 'rgba(251, 113, 133, 0.1)',
          border: '2px solid rgba(251, 113, 133, 0.3)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px'
        }}>
          <p style={{ fontSize: '18px', color: '#FFFFFF' }}>
            <strong>Priya's Total Annual Loss:</strong>
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '20px', color: '#FB7185' }}>$60K</span>
            <span style={{ fontSize: '20px', color: '#94A3B8' }}>+</span>
            <span style={{ fontSize: '20px', color: '#FBBF24' }}>$70K</span>
            <span style={{ fontSize: '20px', color: '#94A3B8' }}>+</span>
            <span style={{ fontSize: '20px', color: '#94A3B8' }}>$60K</span>
            <span style={{ fontSize: '20px', color: '#94A3B8' }}>=</span>
            <span style={{ fontSize: '28px', color: '#FB7185', fontWeight: '700' }}>$190K</span>
          </div>
        </div>

        {/* CPA Connection */}
        <div style={{
          textAlign: 'center',
          padding: '16px',
          background: 'rgba(251, 191, 36, 0.05)',
          borderRadius: '8px'
        }}>
          <p style={{ fontSize: '16px', color: '#FBBF24', fontWeight: '600' }}>
            Your CPA sees these walls daily across 100+ clients like you
          </p>
          <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>
            They're drowning in complexity, not equipped for wealth management
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide3ThreeWallsV3
