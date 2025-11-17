import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Clock, TrendingUp, Globe, Brain, Users, AlertTriangle, ArrowRight, Zap, Lock } from 'lucide-react'

const Slide5ConvergenceWindowV7 = () => {
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
            fontSize: '42px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            WHY THE NEXT 18 MONTHS MATTER
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            fontWeight: '400'
          }}>
            Three Forces Requiring Both Access + Intelligence
          </p>
        </div>

        {/* Three Forces */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          flex: 1,
          marginBottom: '32px'
        }}>
          {/* Force 1: The Great Switching */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.15) 0%, rgba(251, 113, 133, 0.05) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(251, 113, 133, 0.3)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            position: 'relative'
          }}>
            {/* Number Badge */}
            <div style={{
              position: 'absolute',
              top: '-16px',
              left: '24px',
              background: '#FB7185',
              color: '#0A1628',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: '700',
              boxShadow: '0 4px 12px rgba(251, 113, 133, 0.3)'
            }}>
              1
            </div>

            {/* Header */}
            <div style={{
              marginBottom: '20px',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(251, 113, 133, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '8px'
              }}>
                <TrendingUp size={20} color="#FB7185" />
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#FB7185',
                  margin: 0
                }}>
                  THE GREAT SWITCHING
                </h3>
              </div>
              <p style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#FFFFFF',
                margin: 0
              }}>
                46% of HNWs
              </p>
              <p style={{
                fontSize: '14px',
                color: '#94A3B8',
                margin: '4px 0 0 0'
              }}>
                changing advisors now
              </p>
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: '14px',
                color: '#FFFFFF',
                marginBottom: '16px',
                lineHeight: 1.6
              }}>
                They want:
              </p>
              <div style={{
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                padding: '12px'
              }}>
                <p style={{
                  fontSize: '13px',
                  color: '#14B8A6',
                  margin: '0 0 8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Lock size={14} />
                  Global access
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#FBBF24',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Brain size={14} />
                  AND AI optimization
                </p>
              </div>
            </div>

            {/* Impact */}
            <div style={{
              marginTop: 'auto',
              padding: '12px',
              background: 'rgba(251, 113, 133, 0.1)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '13px',
                color: '#FB7185',
                margin: 0,
                fontWeight: '600'
              }}>
                → They need BOTH solutions
              </p>
            </div>
          </div>

          {/* Force 2: The India Moment */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.05) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(20, 184, 166, 0.3)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            position: 'relative'
          }}>
            {/* Number Badge */}
            <div style={{
              position: 'absolute',
              top: '-16px',
              left: '24px',
              background: '#14B8A6',
              color: '#0A1628',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: '700',
              boxShadow: '0 4px 12px rgba(20, 184, 166, 0.3)'
            }}>
              2
            </div>

            {/* Header */}
            <div style={{
              marginBottom: '20px',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(20, 184, 166, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '8px'
              }}>
                <Globe size={20} color="#14B8A6" />
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#14B8A6',
                  margin: 0
                }}>
                  THE INDIA MOMENT
                </h3>
              </div>
              <p style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#FFFFFF',
                margin: 0
              }}>
                3rd largest
              </p>
              <p style={{
                fontSize: '14px',
                color: '#94A3B8',
                margin: '4px 0 0 0'
              }}>
                economy just happened
              </p>
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: '14px',
                color: '#FFFFFF',
                marginBottom: '16px',
                lineHeight: 1.6
              }}>
                GIFT City opened BUT:
              </p>
              <div style={{
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                padding: '12px'
              }}>
                <p style={{
                  fontSize: '13px',
                  color: '#FB7185',
                  margin: '0 0 8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Lock size={14} />
                  Requires access
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#FBBF24',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Brain size={14} />
                  AND compliance AI
                </p>
              </div>
            </div>

            {/* Impact */}
            <div style={{
              marginTop: 'auto',
              padding: '12px',
              background: 'rgba(20, 184, 166, 0.1)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '13px',
                color: '#14B8A6',
                margin: 0,
                fontWeight: '600'
              }}>
                → Need BOTH to capture
              </p>
            </div>
          </div>

          {/* Force 3: The Complexity Explosion */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.05) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(251, 191, 36, 0.3)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            position: 'relative'
          }}>
            {/* Number Badge */}
            <div style={{
              position: 'absolute',
              top: '-16px',
              left: '24px',
              background: '#FBBF24',
              color: '#0A1628',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: '700',
              boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)'
            }}>
              3
            </div>

            {/* Header */}
            <div style={{
              marginBottom: '20px',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(251, 191, 36, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '8px'
              }}>
                <AlertTriangle size={20} color="#FBBF24" />
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#FBBF24',
                  margin: 0
                }}>
                  COMPLEXITY EXPLOSION
                </h3>
              </div>
              <p style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#FFFFFF',
                margin: 0
              }}>
                K-1s +50%
              </p>
              <p style={{
                fontSize: '14px',
                color: '#94A3B8',
                margin: '4px 0 0 0'
              }}>
                growing yearly
              </p>
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: '14px',
                color: '#FFFFFF',
                marginBottom: '16px',
                lineHeight: 1.6
              }}>
                CPAs need:
              </p>
              <div style={{
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                padding: '12px'
              }}>
                <p style={{
                  fontSize: '13px',
                  color: '#FBBF24',
                  margin: '0 0 8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Brain size={14} />
                  AI tools
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#14B8A6',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Lock size={14} />
                  AND investment solutions
                </p>
              </div>
            </div>

            {/* Impact */}
            <div style={{
              marginTop: 'auto',
              padding: '12px',
              background: 'rgba(251, 191, 36, 0.1)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '13px',
                color: '#FBBF24',
                margin: 0,
                fontWeight: '600'
              }}>
                → Platform must have BOTH
              </p>
            </div>
          </div>
        </div>

        {/* The Window */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.05) 100%)',
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
              gap: '16px'
            }}>
              <Clock size={24} color="#14B8A6" />
              <div>
                <p style={{
                  fontSize: '20px',
                  color: '#FFFFFF',
                  fontWeight: '600',
                  margin: '0 0 4px 0'
                }}>
                  The Window:
                </p>
                <p style={{
                  fontSize: '16px',
                  color: '#94A3B8',
                  margin: 0
                }}>
                  First platform with <strong style={{ color: '#14B8A6' }}>BOTH</strong> wins everything
                </p>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 24px',
              background: 'rgba(20, 184, 166, 0.2)',
              borderRadius: '8px',
              border: '1px solid rgba(20, 184, 166, 0.4)'
            }}>
              <Zap size={20} color="#14B8A6" />
              <p style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#14B8A6',
                margin: 0
              }}>
                18 MONTHS
              </p>
            </div>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide5ConvergenceWindowV7
