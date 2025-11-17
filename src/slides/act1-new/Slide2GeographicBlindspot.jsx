import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'

const Slide2GeographicBlindspot = () => {
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
          marginBottom: '32px'
        }}>
          YOUR PORTFOLIO IS TRAPPED IN YESTERDAY'S GEOGRAPHY
        </h1>

        {/* Split Screen Comparison */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          marginBottom: '40px',
          flex: 1
        }}>
          {/* Your Portfolio Today */}
          <div style={{
            background: 'rgba(148, 163, 184, 0.05)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: '12px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#94A3B8',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              YOUR PORTFOLIO TODAY
            </h2>
            
            {/* Simple Bar Chart Visual */}
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🇺🇸</span>
                  <span style={{ color: '#FFFFFF', fontSize: '16px', width: '60px' }}>US:</span>
                  <div style={{
                    height: '24px',
                    background: 'rgba(148, 163, 184, 0.3)',
                    borderRadius: '4px',
                    flex: 1,
                    position: 'relative'
                  }}>
                    <div style={{
                      height: '100%',
                      width: '82%',
                      background: '#94A3B8',
                      borderRadius: '4px'
                    }} />
                    <span style={{
                      position: 'absolute',
                      right: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#FFFFFF'
                    }}>82%</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🇪🇺</span>
                  <span style={{ color: '#FFFFFF', fontSize: '16px', width: '60px' }}>EU:</span>
                  <div style={{
                    height: '24px',
                    background: 'rgba(148, 163, 184, 0.3)',
                    borderRadius: '4px',
                    flex: 1,
                    position: 'relative'
                  }}>
                    <div style={{
                      height: '100%',
                      width: '15%',
                      background: '#94A3B8',
                      borderRadius: '4px'
                    }} />
                    <span style={{
                      position: 'absolute',
                      left: '17%',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#FFFFFF'
                    }}>15%</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🌏</span>
                  <span style={{ color: '#FFFFFF', fontSize: '16px', width: '60px' }}>Asia:</span>
                  <div style={{
                    height: '24px',
                    background: 'rgba(148, 163, 184, 0.3)',
                    borderRadius: '4px',
                    flex: 1,
                    position: 'relative'
                  }}>
                    <div style={{
                      height: '100%',
                      width: '3%',
                      background: '#94A3B8',
                      borderRadius: '4px'
                    }} />
                    <span style={{
                      position: 'absolute',
                      left: '5%',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#FFFFFF'
                    }}>3%</span>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🌍</span>
                  <span style={{ color: '#FFFFFF', fontSize: '16px', width: '60px' }}>EM:</span>
                  <div style={{
                    height: '24px',
                    background: 'rgba(148, 163, 184, 0.3)',
                    borderRadius: '4px',
                    flex: 1,
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#94A3B8'
                    }}>0%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Actual Global Economy */}
          <div style={{
            background: 'rgba(20, 184, 166, 0.05)',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            borderRadius: '12px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              THE ACTUAL GLOBAL ECONOMY
            </h2>
            
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🇺🇸</span>
                  <span style={{ color: '#FFFFFF', fontSize: '16px', width: '60px' }}>US:</span>
                  <div style={{
                    height: '24px',
                    background: 'rgba(20, 184, 166, 0.1)',
                    borderRadius: '4px',
                    flex: 1,
                    position: 'relative'
                  }}>
                    <div style={{
                      height: '100%',
                      width: '25%',
                      background: '#14B8A6',
                      borderRadius: '4px'
                    }} />
                    <span style={{
                      position: 'absolute',
                      left: '27%',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#FFFFFF'
                    }}>25%</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🇮🇳</span>
                  <span style={{ color: '#FFFFFF', fontSize: '16px', width: '60px' }}>India:</span>
                  <div style={{
                    height: '24px',
                    background: 'rgba(20, 184, 166, 0.1)',
                    borderRadius: '4px',
                    flex: 1,
                    position: 'relative'
                  }}>
                    <div style={{
                      height: '100%',
                      width: '8%',
                      background: '#14B8A6',
                      borderRadius: '4px'
                    }} />
                    <span style={{
                      position: 'absolute',
                      left: '10%',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#FFFFFF'
                    }}>8%</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🇨🇳</span>
                  <span style={{ color: '#FFFFFF', fontSize: '16px', width: '60px' }}>China:</span>
                  <div style={{
                    height: '24px',
                    background: 'rgba(20, 184, 166, 0.1)',
                    borderRadius: '4px',
                    flex: 1,
                    position: 'relative'
                  }}>
                    <div style={{
                      height: '100%',
                      width: '18%',
                      background: '#14B8A6',
                      borderRadius: '4px'
                    }} />
                    <span style={{
                      position: 'absolute',
                      left: '20%',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#FFFFFF'
                    }}>18%</span>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🌏</span>
                  <span style={{ color: '#FFFFFF', fontSize: '16px', width: '60px' }}>Asia:</span>
                  <div style={{
                    height: '24px',
                    background: 'rgba(20, 184, 166, 0.1)',
                    borderRadius: '4px',
                    flex: 1,
                    position: 'relative'
                  }}>
                    <div style={{
                      height: '100%',
                      width: '35%',
                      background: '#14B8A6',
                      borderRadius: '4px'
                    }} />
                    <span style={{
                      position: 'absolute',
                      left: '37%',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#FFFFFF'
                    }}>35%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Brutal Realities */}
        <div style={{
          background: 'rgba(251, 113, 133, 0.05)',
          border: '1px solid rgba(251, 113, 133, 0.2)',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#FB7185',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            THREE BRUTAL REALITIES YOU FACE:
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            <div>
              <strong style={{ color: '#FFFFFF', fontSize: '14px' }}>1. Geographic Penalty:</strong>
              <p style={{ color: '#94A3B8', fontSize: '13px', marginTop: '4px' }}>
                You get 4% growth while India delivers 8.2%
              </p>
            </div>
            <div>
              <strong style={{ color: '#FFFFFF', fontSize: '14px' }}>2. Tax Inequality:</strong>
              <p style={{ color: '#94A3B8', fontSize: '13px', marginTop: '4px' }}>
                You pay 35% on India, Goldman pays 0% via GIFT
              </p>
            </div>
            <div>
              <strong style={{ color: '#FFFFFF', fontSize: '14px' }}>3. Access Barrier:</strong>
              <p style={{ color: '#94A3B8', fontSize: '13px', marginTop: '4px' }}>
                87% of global growth is outside the US - you capture 0%
              </p>
            </div>
          </div>
        </div>

        {/* Persona Story */}
        <div style={{
          background: 'rgba(20, 184, 166, 0.05)',
          border: '1px solid rgba(20, 184, 166, 0.2)',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px'
        }}>
          <div style={{ flex: 1 }}>
            <strong style={{ color: '#14B8A6', fontSize: '16px' }}>"Meet Priya":</strong>
            <span style={{ color: '#FFFFFF', fontSize: '14px', marginLeft: '8px' }}>
              Stanford MBA, $3M portfolio, 95% in US equities
            </span>
            <p style={{ color: '#94A3B8', fontSize: '13px', marginTop: '8px' }}>
              <strong style={{ color: '#FB7185' }}>Her loss:</strong> $180K annually from geographic concentration
            </p>
          </div>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'rgba(148, 163, 184, 0.2)'
          }} />
          <div>
            <p style={{ color: '#94A3B8', fontSize: '14px' }}>
              <strong style={{ color: '#14B8A6' }}>Goldman's identical $3M:</strong>
              <br />Globally diversified, 0% India tax
            </p>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide2GeographicBlindspot
