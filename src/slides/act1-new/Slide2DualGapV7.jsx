import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, Brain, TrendingUp, DollarSign, AlertTriangle } from 'lucide-react'

const Slide2DualGapV7 = () => {
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
        {/* Background gradient mesh */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(20, 184, 166, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(251, 113, 133, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '38px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            THE DUAL GAP CREATING A $124T OPPORTUNITY
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            fontWeight: '400'
          }}>
            Two massive failures converging into one historic opportunity
          </p>
        </div>

        {/* Two Main Gaps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          flex: 1,
          marginBottom: '24px'
        }}>
          {/* The Access Gap */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.15) 0%, rgba(251, 113, 133, 0.05) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(251, 113, 133, 0.3)',
            padding: '32px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(251, 113, 133, 0.2)'
            }}>
              <Lock size={24} color="#FB7185" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FB7185',
                margin: 0
              }}>
                The Access Gap
              </h2>
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              {[
                { 
                  metric: 'India: $5T locked',
                  detail: 'Behind 35% tax walls',
                  impact: 'vs Goldman 0%'
                },
                { 
                  metric: 'PE/VC: $5M minimums',
                  detail: 'Too small to enter',
                  impact: '95% excluded'
                },
                { 
                  metric: 'GIFT: Only 3 have access',
                  detail: 'Regulatory complexity',
                  impact: "We're one of them"
                },
                {
                  metric: '87 global markets',
                  detail: 'You can reach 3',
                  impact: '97% inaccessible'
                }
              ].map((item, i) => (
                <div key={i} style={{
                  marginBottom: i < 3 ? '20px' : 0,
                  padding: '12px',
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '8px',
                  borderLeft: '3px solid rgba(251, 113, 133, 0.5)'
                }}>
                  <p style={{
                    fontSize: '15px',
                    color: '#FFFFFF',
                    fontWeight: '600',
                    margin: '0 0 4px 0'
                  }}>
                    {item.metric}
                  </p>
                  <p style={{
                    fontSize: '13px',
                    color: '#94A3B8',
                    margin: '0 0 2px 0'
                  }}>
                    {item.detail}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#FB7185',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    → {item.impact}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Impact */}
            <div style={{
              marginTop: '20px',
              padding: '16px',
              background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.2) 0%, rgba(251, 113, 133, 0.1) 100%)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#FB7185',
                margin: 0
              }}>
                $60T unreachable
              </p>
            </div>
          </div>

          {/* The Intelligence Gap */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.05) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(251, 191, 36, 0.3)',
            padding: '32px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(251, 191, 36, 0.2)'
            }}>
              <Brain size={24} color="#FBBF24" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FBBF24',
                margin: 0
              }}>
                The Intelligence Gap
              </h2>
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              {[
                { 
                  metric: '1M+ data points daily',
                  detail: 'Human capacity: 100',
                  impact: '99.99% unprocessed'
                },
                { 
                  metric: 'K-1s taking 40 hours',
                  detail: 'Per fund, per year',
                  impact: 'CPAs drowning'
                },
                { 
                  metric: 'No AI optimization',
                  detail: 'Manual portfolio management',
                  impact: '600% underperformance'
                },
                {
                  metric: 'Tax rules: 50 jurisdictions',
                  detail: 'Changing daily',
                  impact: 'Opportunities missed'
                }
              ].map((item, i) => (
                <div key={i} style={{
                  marginBottom: i < 3 ? '20px' : 0,
                  padding: '12px',
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '8px',
                  borderLeft: '3px solid rgba(251, 191, 36, 0.5)'
                }}>
                  <p style={{
                    fontSize: '15px',
                    color: '#FFFFFF',
                    fontWeight: '600',
                    margin: '0 0 4px 0'
                  }}>
                    {item.metric}
                  </p>
                  <p style={{
                    fontSize: '13px',
                    color: '#94A3B8',
                    margin: '0 0 2px 0'
                  }}>
                    {item.detail}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#FBBF24',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    → {item.impact}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Impact */}
            <div style={{
              marginTop: '20px',
              padding: '16px',
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0.1) 100%)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#FBBF24',
                margin: 0
              }}>
                $64T unoptimized
              </p>
            </div>
          </div>
        </div>

        {/* The Convergence */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
          borderRadius: '16px',
          padding: '24px',
          border: '2px solid rgba(20, 184, 166, 0.3)',
          boxShadow: '0 10px 30px rgba(20, 184, 166, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <TrendingUp size={24} color="#14B8A6" />
              <div>
                <p style={{
                  fontSize: '18px',
                  color: '#FFFFFF',
                  fontWeight: '600',
                  margin: '0 0 4px 0'
                }}>
                  The Convergence:
                </p>
                <p style={{
                  fontSize: '16px',
                  color: '#94A3B8',
                  margin: 0
                }}>
                  <strong style={{ color: '#14B8A6' }}>46% of HNWs</strong> switching NOW because neither their advisor nor their technology can deliver both
                </p>
              </div>
            </div>
            
            <div style={{
              padding: '12px 24px',
              background: 'rgba(20, 184, 166, 0.2)',
              borderRadius: '8px',
              border: '1px solid rgba(20, 184, 166, 0.4)'
            }}>
              <p style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#14B8A6',
                margin: 0
              }}>
                $124T
              </p>
              <p style={{
                fontSize: '12px',
                color: '#94A3B8',
                margin: 0,
                textAlign: 'center'
              }}>
                OPPORTUNITY
              </p>
            </div>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide2DualGapV7
