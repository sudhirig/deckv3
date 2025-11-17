import React, { useState } from 'react';
import { AspectFrame } from '../../components/StandardLayouts';
import { Brain, Globe, Users, Building2, Lock, AlertTriangle, XCircle } from 'lucide-react';

const Slide7WealthMatrixProblemOnlyCompact = () => {
  const [hoveredQuadrant, setHoveredQuadrant] = useState(null);

  const quadrants = [
    {
      id: 'robo',
      position: 'top-left',
      title: 'ROBO-ADVISORS',
      subtitle: 'Betterment, Wealthfront',
      intelligence: 'HIGH',
      access: 'LOW',
      color: '#3b82f6',
      features: ['✓ AI Tools', '✗ No Access'],
      problem: 'Smart but limited',
      percentage: '95% stuck here',
      icon: Brain
    },
    {
      id: 'goldman',
      position: 'top-right',
      title: 'GOLDMAN SACHS',
      subtitle: 'Morgan Stanley, JP Morgan',
      intelligence: 'HIGH',
      access: 'HIGH',
      color: '#fbbf24',
      features: ['✓ Everything', '✗ $10M+ only'],
      problem: 'Not for you',
      percentage: '1% only',
      icon: Building2
    },
    {
      id: 'cpa',
      position: 'bottom-left',
      title: 'YOUR CPA',
      subtitle: 'Local advisors',
      intelligence: 'LOW',
      access: 'LOW',
      color: '#6b7280',
      features: ['✗ No tools', '✗ No access'],
      problem: 'Overwhelmed',
      percentage: 'Trusted but helpless',
      icon: Users
    },
    {
      id: 'banks',
      position: 'bottom-right',
      title: 'PRIVATE BANKS',
      subtitle: 'UBS, Credit Suisse',
      intelligence: 'LOW',
      access: 'HIGH',
      color: '#a855f7',
      features: ['✓ Access', '✗ No AI'],
      problem: '1990s tech',
      percentage: 'High fees',
      icon: Building2
    }
  ];

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, rgba(20, 184, 166, 0.05), transparent), #0A1628',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Animated Grid Background */}
        <div style={{ 
          position: 'absolute', 
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5
        }} />

        {/* Title Section */}
        <div style={{ textAlign: 'center', marginBottom: '24px', zIndex: 10 }}>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '6px', letterSpacing: '-0.02em' }}>
            <span style={{ color: 'white' }}>THE </span>
            <span style={{ 
              background: 'linear-gradient(to right, #ef4444, #fb923c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>WEALTH MANAGEMENT MATRIX</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8', margin: 0 }}>
            Where Every Option Fails You in Different Ways
          </p>
        </div>

        {/* 2x2 Matrix Container */}
        <div style={{ 
          position: 'relative',
          maxWidth: '800px',
          width: '100%',
          zIndex: 10
        }}>
          <div style={{
            position: 'relative',
            background: 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '28px',
            border: '1px solid rgba(20, 184, 166, 0.2)'
          }}>
            {/* Axis Labels */}
            <div style={{
              position: 'absolute',
              left: '-50px',
              top: '50%',
              transform: 'translateY(-50%) rotate(-90deg)',
              transformOrigin: 'center',
              width: '120px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span style={{ color: '#64748b', fontSize: '11px' }}>LOW</span>
                <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#a855f7' }}>INTELLIGENCE</span>
                <span style={{ color: '#64748b', fontSize: '11px' }}>HIGH</span>
              </div>
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '-32px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#64748b', fontSize: '11px' }}>LOW</span>
                <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#10b981' }}>ACCESS</span>
                <span style={{ color: '#64748b', fontSize: '11px' }}>HIGH</span>
              </div>
            </div>

            {/* Matrix Grid */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
              position: 'relative',
              height: '320px'
            }}>
              {quadrants.map((quadrant) => (
                <div
                  key={quadrant.id}
                  style={{
                    position: 'relative',
                    background: `linear-gradient(135deg, ${quadrant.color}20, ${quadrant.color}10)`,
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transform: hoveredQuadrant === quadrant.id ? 'scale(1.02)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                    border: `1px solid ${quadrant.color}40`
                  }}
                  onMouseEnter={() => setHoveredQuadrant(quadrant.id)}
                  onMouseLeave={() => setHoveredQuadrant(null)}
                >
                  <div style={{
                    background: 'rgba(10, 22, 40, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '11px',
                    padding: '16px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <div>
                        <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: 'white', margin: 0 }}>
                          {quadrant.title}
                        </h3>
                        <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>
                          {quadrant.subtitle}
                        </p>
                      </div>
                      <quadrant.icon style={{ width: 24, height: 24, color: quadrant.color }} />
                    </div>
                    
                    <div style={{ 
                      background: `${quadrant.color}15`,
                      borderRadius: '6px',
                      padding: '6px',
                      marginBottom: '8px'
                    }}>
                      <p style={{ 
                        fontSize: '11px', 
                        color: quadrant.color === '#fbbf24' ? '#fbbf24' : '#94a3b8',
                        fontWeight: '600',
                        margin: 0 
                      }}>
                        {quadrant.percentage}
                      </p>
                    </div>
                    
                    <div style={{ flex: 1, fontSize: '12px', lineHeight: '1.4' }}>
                      {quadrant.features.map((feature, idx) => (
                        <div key={idx} style={{ marginBottom: '2px' }}>
                          <span style={{ color: feature.startsWith('✓') ? '#14b8a6' : '#ef4444' }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div style={{ 
                      marginTop: '8px',
                      paddingTop: '8px',
                      borderTop: '1px solid rgba(20, 184, 166, 0.2)'
                    }}>
                      <p style={{ color: '#fca5a5', fontStyle: 'italic', fontSize: '11px', margin: 0 }}>
                        {quadrant.problem}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Center Lines */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.2), transparent)'
              }} />
              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '50%',
                width: '1px',
                background: 'linear-gradient(to bottom, transparent, rgba(20, 184, 166, 0.2), transparent)'
              }} />
              
              {/* Center Problem Icon */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(251, 146, 60, 0.2))',
                  borderRadius: '50%',
                  padding: '16px',
                  border: '2px solid rgba(239, 68, 68, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <AlertTriangle style={{ width: 32, height: 32, color: '#ef4444' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Problem Statement - Compact */}
        <div style={{ marginTop: '24px', textAlign: 'center', zIndex: 10, width: '100%', maxWidth: '900px' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(251, 146, 60, 0.1))',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '16px 20px',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
              <XCircle style={{ width: 18, height: 18, color: '#ef4444', flexShrink: 0 }} />
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#ef4444', margin: 0 }}>
                THE IMPOSSIBLE CHOICE
              </h3>
              <XCircle style={{ width: 18, height: 18, color: '#ef4444', flexShrink: 0 }} />
            </div>
            
            <p style={{ fontSize: '14px', color: 'white', margin: '8px 0' }}>
              Want <span style={{ color: '#10b981', fontWeight: 'bold' }}>ACCESS?</span> Pay $10M or stuck with 1990s tech
            </p>
            <p style={{ fontSize: '14px', color: 'white', margin: '8px 0' }}>
              Want <span style={{ color: '#a855f7', fontWeight: 'bold' }}>INTELLIGENCE?</span> US-only, no alternatives
            </p>
            
            <div style={{
              marginTop: '10px',
              paddingTop: '10px',
              borderTop: '1px solid rgba(20, 184, 166, 0.2)'
            }}>
              <p style={{ fontSize: '15px', color: 'white', margin: 0, fontWeight: '500' }}>
                You need <span style={{ color: '#10b981' }}>BOTH</span> but <span style={{ color: '#fbbf24' }}>no one gives you both</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AspectFrame>
  );
};

export default Slide7WealthMatrixProblemOnlyCompact;
