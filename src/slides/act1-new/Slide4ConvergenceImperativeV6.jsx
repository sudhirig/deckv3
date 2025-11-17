import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, Brain, Clock, TrendingUp, Globe, AlertCircle, ArrowDown, Zap } from 'lucide-react'

const Slide4ConvergenceImperativeV6 = () => {
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
            fontSize: '38px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            WHY ACCESS + INTELLIGENCE MATTER NOW
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            fontWeight: '400'
          }}>
            Three Forces Making Both Essential
          </p>
        </div>

        {/* Two Main Boxes with Connection */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Access Opportunity Box */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.05) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(20, 184, 166, 0.3)',
            padding: '32px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            position: 'relative'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <Lock size={24} color="#14B8A6" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#14B8A6',
                margin: 0,
                letterSpacing: '0.05em'
              }}>
                THE ACCESS OPPORTUNITY
              </h2>
            </div>

            {/* Content Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              {[
                { 
                  icon: Globe, 
                  title: 'India becomes 3rd largest economy',
                  detail: 'Just happened',
                  highlight: true
                },
                { 
                  icon: TrendingUp, 
                  title: 'GIFT City opens to US investors',
                  detail: 'Just happened',
                  highlight: true
                },
                { 
                  icon: Zap, 
                  title: 'Only 3 players have access today',
                  detail: "We're one",
                  highlight: false
                },
                { 
                  icon: Clock, 
                  title: 'Window closes in 18 months',
                  detail: 'Regulations tighten',
                  highlight: false
                }
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      background: item.highlight 
                        ? 'rgba(20, 184, 166, 0.2)' 
                        : 'rgba(148, 163, 184, 0.1)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: item.highlight 
                        ? '1px solid rgba(20, 184, 166, 0.4)' 
                        : '1px solid rgba(148, 163, 184, 0.2)'
                    }}>
                      <Icon size={16} color={item.highlight ? '#14B8A6' : '#94A3B8'} />
                    </div>
                    <div>
                      <p style={{
                        fontSize: '14px',
                        color: '#FFFFFF',
                        fontWeight: '600',
                        margin: '0 0 2px 0'
                      }}>
                        {item.title}
                      </p>
                      <p style={{
                        fontSize: '12px',
                        color: item.highlight ? '#14B8A6' : '#94A3B8',
                        margin: 0,
                        fontWeight: item.highlight ? '600' : '400'
                      }}>
                        ({item.detail})
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Connection Arrow */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '12px 0'
          }}>
            <ArrowDown size={24} color="#14B8A6" />
            <p style={{
              fontSize: '16px',
              color: '#14B8A6',
              fontWeight: '600',
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              REQUIRES INTELLIGENCE
            </p>
            <ArrowDown size={24} color="#14B8A6" />
          </div>

          {/* Intelligence Requirement Box */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.05) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(251, 191, 36, 0.3)',
            padding: '32px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <Brain size={24} color="#FBBF24" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FBBF24',
                margin: 0,
                letterSpacing: '0.05em'
              }}>
                THE INTELLIGENCE REQUIREMENT
              </h2>
            </div>

            {/* Content Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              {[
                { 
                  value: '1M+',
                  label: 'data points daily',
                  subtext: 'Markets generate'
                },
                { 
                  value: '50',
                  label: 'jurisdictions',
                  subtext: 'Tax rules change'
                },
                { 
                  value: '10x',
                  label: 'K-1 complexity',
                  subtext: 'Growing exponentially'
                },
                { 
                  value: '600%',
                  label: 'AI advantage',
                  subtext: 'Stanford: AI beats humans'
                }
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center',
                  border: '1px solid rgba(251, 191, 36, 0.2)'
                }}>
                  <p style={{
                    fontSize: '28px',
                    color: '#FBBF24',
                    fontWeight: '700',
                    margin: '0 0 4px 0'
                  }}>
                    {item.value}
                  </p>
                  <p style={{
                    fontSize: '13px',
                    color: '#FFFFFF',
                    margin: '0 0 2px 0',
                    fontWeight: '600'
                  }}>
                    {item.label}
                  </p>
                  <p style={{
                    fontSize: '11px',
                    color: '#94A3B8',
                    margin: 0
                  }}>
                    {item.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line - Three Scenarios */}
        <div style={{
          marginTop: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          maxWidth: '900px',
          margin: '24px auto 0',
          width: '100%'
        }}>
          <div style={{
            background: 'rgba(251, 113, 133, 0.1)',
            borderRadius: '12px',
            padding: '16px',
            border: '1px solid rgba(251, 113, 133, 0.2)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#FFFFFF',
              margin: '0 0 4px 0'
            }}>
              Access without intelligence =
            </p>
            <p style={{
              fontSize: '16px',
              color: '#FB7185',
              fontWeight: '700',
              margin: 0
            }}>
              Blind investing
            </p>
          </div>

          <div style={{
            background: 'rgba(251, 191, 36, 0.1)',
            borderRadius: '12px',
            padding: '16px',
            border: '1px solid rgba(251, 191, 36, 0.2)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#FFFFFF',
              margin: '0 0 4px 0'
            }}>
              Intelligence without access =
            </p>
            <p style={{
              fontSize: '16px',
              color: '#FBBF24',
              fontWeight: '700',
              margin: 0
            }}>
              Limited returns
            </p>
          </div>

          <div style={{
            background: 'rgba(20, 184, 166, 0.1)',
            borderRadius: '12px',
            padding: '16px',
            border: '2px solid rgba(20, 184, 166, 0.3)',
            textAlign: 'center',
            boxShadow: '0 8px 20px rgba(20, 184, 166, 0.2)'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#FFFFFF',
              margin: '0 0 4px 0'
            }}>
              You need BOTH =
            </p>
            <p style={{
              fontSize: '16px',
              color: '#14B8A6',
              fontWeight: '700',
              margin: 0
            }}>
              You need ARIA
            </p>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide4ConvergenceImperativeV6
