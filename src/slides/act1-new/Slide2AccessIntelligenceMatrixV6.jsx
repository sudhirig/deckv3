import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, Brain, Target, AlertCircle } from 'lucide-react'

const Slide2AccessIntelligenceMatrixV6 = () => {
  const quadrants = [
    {
      title: 'ROBINHOOD',
      access: 'LOW',
      intelligence: 'LOW',
      color: '#94A3B8',
      features: ['US-only stocks', 'Basic interface', 'No alternatives'],
      userHere: true,
      percentage: '95%'
    },
    {
      title: 'ARTA/BETTERMENT',
      access: 'LOW',
      intelligence: 'HIGH',
      color: '#FBBF24',
      features: ['US-optimized AI', 'No global access', 'Smart but limited'],
      userHere: false
    },
    {
      title: 'PRIVATE BANKS',
      access: 'HIGH',
      intelligence: 'LOW',
      color: '#FB7185',
      features: ['Global access', 'Human advisors', 'Slow & expensive'],
      userHere: false
    },
    {
      title: 'GOLDMAN SACHS',
      access: 'HIGH',
      intelligence: 'HIGH',
      color: '#14B8A6',
      features: ['India: 0% tax', 'AI + 50 analysts', 'Complete solution'],
      elite: true,
      percentage: '1%'
    }
  ]

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
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            THE WEALTH MANAGEMENT MATRIX
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            fontWeight: '400'
          }}>
            Where do you sit today?
          </p>
        </div>

        {/* Matrix Container */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Y-Axis Label */}
          <div style={{
            display: 'flex',
            gap: '20px',
            flex: 1
          }}>
            <div style={{
              width: '80px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px'
            }}>
              <div style={{
                transform: 'rotate(-90deg)',
                whiteSpace: 'nowrap',
                fontSize: '14px',
                color: '#14B8A6',
                fontWeight: '600',
                letterSpacing: '0.05em',
                marginBottom: '40px'
              }}>
                HIGH ACCESS
              </div>
              
              <Lock size={24} color="#14B8A6" />
              
              <div style={{
                transform: 'rotate(-90deg)',
                whiteSpace: 'nowrap',
                fontSize: '14px',
                color: '#FB7185',
                fontWeight: '600',
                letterSpacing: '0.05em',
                marginTop: '40px'
              }}>
                LOW ACCESS
              </div>
            </div>

            {/* Main Grid */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {/* X-Axis Labels */}
              <div style={{
                height: '40px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  color: '#FB7185',
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '0.05em'
                }}>
                  <Brain size={20} />
                  LOW INTELLIGENCE
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  color: '#14B8A6',
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '0.05em'
                }}>
                  <Brain size={20} />
                  HIGH INTELLIGENCE
                </div>
              </div>

              {/* 2x2 Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: '12px',
                flex: 1
              }}>
                {/* Top Left - Private Banks */}
                <div style={{
                  gridColumn: 1,
                  gridRow: 1,
                  background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.15) 0%, rgba(251, 113, 133, 0.05) 100%)',
                  border: '2px solid rgba(251, 113, 133, 0.3)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#FB7185',
                    marginBottom: '16px'
                  }}>
                    PRIVATE BANKS
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    flex: 1
                  }}>
                    {quadrants[2].features.map((feature, i) => (
                      <li key={i} style={{
                        fontSize: '14px',
                        color: '#FFFFFF',
                        marginBottom: '8px',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#FB7185'
                        }}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Top Right - Goldman */}
                <div style={{
                  gridColumn: 2,
                  gridRow: 1,
                  background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(20, 184, 166, 0.1) 100%)',
                  border: '3px solid rgba(20, 184, 166, 0.5)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(20, 184, 166, 0.2)',
                  position: 'relative'
                }}>
                  {/* Elite badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: '#14B8A6',
                    color: '#0A1628',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700'
                  }}>
                    The 1% are here
                  </div>
                  
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#14B8A6',
                    marginBottom: '16px'
                  }}>
                    GOLDMAN SACHS
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    flex: 1
                  }}>
                    {quadrants[3].features.map((feature, i) => (
                      <li key={i} style={{
                        fontSize: '14px',
                        color: '#FFFFFF',
                        marginBottom: '8px',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#14B8A6'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Left - Robinhood */}
                <div style={{
                  gridColumn: 1,
                  gridRow: 2,
                  background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.15) 0%, rgba(148, 163, 184, 0.05) 100%)',
                  border: '2px solid rgba(148, 163, 184, 0.3)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  backdropFilter: 'blur(10px)',
                  position: 'relative'
                }}>
                  {/* You are here */}
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    background: 'rgba(251, 113, 133, 0.2)',
                    border: '1px solid rgba(251, 113, 133, 0.4)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#FB7185',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Target size={14} />
                    You are here: 95%
                  </div>
                  
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#94A3B8',
                    marginBottom: '16px'
                  }}>
                    ROBINHOOD
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    flex: 1
                  }}>
                    {quadrants[0].features.map((feature, i) => (
                      <li key={i} style={{
                        fontSize: '14px',
                        color: '#FFFFFF',
                        marginBottom: '8px',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#94A3B8'
                        }}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Right - ARTA/Betterment */}
                <div style={{
                  gridColumn: 2,
                  gridRow: 2,
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.05) 100%)',
                  border: '2px solid rgba(251, 191, 36, 0.3)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#FBBF24',
                    marginBottom: '16px'
                  }}>
                    ARTA/BETTERMENT
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    flex: 1
                  }}>
                    {quadrants[1].features.map((feature, i) => (
                      <li key={i} style={{
                        fontSize: '14px',
                        color: '#FFFFFF',
                        marginBottom: '8px',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#FBBF24'
                        }}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div style={{
          marginTop: '24px',
          background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.1) 0%, rgba(251, 113, 133, 0.05) 100%)',
          border: '1px solid rgba(251, 113, 133, 0.2)',
          borderRadius: '12px',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          backdropFilter: 'blur(10px)'
        }}>
          <AlertCircle size={20} color="#FB7185" />
          <p style={{
            fontSize: '18px',
            color: '#FFFFFF',
            margin: 0
          }}>
            <strong style={{ color: '#FB7185' }}>The Gap:</strong> You need BOTH access and intelligence to compete
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide2AccessIntelligenceMatrixV6
