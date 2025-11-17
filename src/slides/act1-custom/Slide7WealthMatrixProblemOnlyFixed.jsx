import React, { useState } from 'react';
import { AspectFrame } from '../../components/StandardLayouts';
import { Brain, Globe, Users, Building2, Lock, AlertTriangle, XCircle } from 'lucide-react';

const Slide7WealthMatrixProblemOnlyFixed = () => {
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
      features: ['✓ AI Tools', '✓ Automation', '✗ No Global Access', '✗ No Alternatives'],
      problem: 'Smart but limited to US stocks',
      percentage: '95% of investors stuck here',
      icon: Brain,
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
    },
    {
      id: 'goldman',
      position: 'top-right',
      title: 'GOLDMAN SACHS',
      subtitle: 'Morgan Stanley, JP Morgan',
      intelligence: 'HIGH',
      access: 'HIGH',
      color: '#fbbf24',
      features: ['✓ Everything', '✓ All Markets', '✗ Won\'t serve you', '✗ $10M+ only'],
      problem: 'Perfect, but not for you',
      percentage: '1% only',
      icon: Building2,
      gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b)'
    },
    {
      id: 'cpa',
      position: 'bottom-left',
      title: 'YOUR CPA/ADVISOR',
      subtitle: 'Local advisors',
      intelligence: 'LOW',
      access: 'LOW',
      color: '#6b7280',
      features: ['✗ Drowning in complexity', '✗ No tools', '✗ No time', '✗ No access'],
      problem: 'Overwhelmed and underequipped',
      percentage: 'Most trusted, least capable',
      icon: Users,
      gradient: 'linear-gradient(135deg, #6b7280, #4b5563)'
    },
    {
      id: 'banks',
      position: 'bottom-right',
      title: 'PRIVATE BANKS',
      subtitle: 'UBS, Credit Suisse',
      intelligence: 'LOW',
      access: 'HIGH',
      color: '#a855f7',
      features: ['✓ Product Access', '✓ Global Reach', '✗ No AI', '✗ Stuck in 1990s'],
      problem: 'Access without intelligence',
      percentage: 'High fees, low returns',
      icon: Building2,
      gradient: 'linear-gradient(135deg, #a855f7, #9333ea)'
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
        padding: '48px',
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
        
        {/* Floating Orbs - Teal themed */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(20, 184, 166, 0.15), transparent)`,
              filter: 'blur(40px)',
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${15 + Math.random() * 10}s ease-in-out infinite`,
            }}
          />
        ))}

        {/* Title Section */}
        <div style={{ textAlign: 'center', marginBottom: '32px', zIndex: 10 }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '8px', letterSpacing: '-0.02em' }}>
            <span style={{ color: 'white' }}>THE </span>
            <span style={{ 
              background: 'linear-gradient(to right, #ef4444, #fb923c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>WEALTH MANAGEMENT MATRIX</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#94a3b8' }}>
            Where Every Option Fails You in Different Ways
          </p>
        </div>

        {/* 2x2 Matrix Container */}
        <div style={{ 
          position: 'relative',
          maxWidth: '900px',
          width: '100%',
          zIndex: 10
        }}>
          <div style={{
            position: 'relative',
            background: 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid rgba(20, 184, 166, 0.2)'
          }}>
            {/* Axis Labels */}
            <div style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%) rotate(-90deg)',
              transformOrigin: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#64748b', fontSize: '12px' }}>LOW</span>
                <Brain style={{ width: 20, height: 20, color: '#a855f7' }} />
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#a855f7' }}>INTELLIGENCE</span>
                <Brain style={{ width: 20, height: 20, color: '#a855f7' }} />
                <span style={{ color: '#64748b', fontSize: '12px' }}>HIGH</span>
              </div>
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '-40px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#64748b', fontSize: '12px' }}>LOW</span>
                <Globe style={{ width: 20, height: 20, color: '#10b981' }} />
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#10b981' }}>ACCESS</span>
                <Globe style={{ width: 20, height: 20, color: '#10b981' }} />
                <span style={{ color: '#64748b', fontSize: '12px' }}>HIGH</span>
              </div>
            </div>

            {/* Matrix Grid */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              position: 'relative',
              height: '400px'
            }}>
              {quadrants.map((quadrant) => (
                <div
                  key={quadrant.id}
                  style={{
                    position: 'relative',
                    background: quadrant.gradient,
                    padding: '1px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transform: hoveredQuadrant === quadrant.id ? 'scale(1.02)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={() => setHoveredQuadrant(quadrant.id)}
                  onMouseLeave={() => setHoveredQuadrant(null)}
                >
                  <div style={{
                    background: 'rgba(10, 22, 40, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '11px',
                    padding: '20px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <div>
                        <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'white', margin: 0 }}>
                          {quadrant.title}
                        </h3>
                        <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>
                          {quadrant.subtitle}
                        </p>
                      </div>
                      <quadrant.icon style={{ width: 28, height: 28, color: quadrant.color }} />
                    </div>
                    
                    <div style={{ 
                      background: quadrant.color === '#fbbf24' 
                        ? 'rgba(251, 191, 36, 0.15)' 
                        : 'rgba(239, 68, 68, 0.1)',
                      borderRadius: '6px',
                      padding: '8px',
                      marginBottom: '12px'
                    }}>
                      <p style={{ 
                        fontSize: '12px', 
                        color: quadrant.color === '#fbbf24' ? '#fbbf24' : '#94a3b8',
                        fontWeight: '600',
                        margin: 0 
                      }}>
                        {quadrant.percentage}
                      </p>
                    </div>
                    
                    <div style={{ flex: 1, fontSize: '13px', lineHeight: '1.6' }}>
                      {quadrant.features.map((feature, idx) => (
                        <div key={idx} style={{ marginBottom: '3px' }}>
                          <span style={{ color: feature.startsWith('✓') ? '#14b8a6' : '#ef4444' }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div style={{ 
                      marginTop: '12px',
                      paddingTop: '12px',
                      borderTop: '1px solid rgba(20, 184, 166, 0.2)'
                    }}>
                      <p style={{ color: '#fca5a5', fontStyle: 'italic', fontSize: '13px', margin: 0 }}>
                        Problem: {quadrant.problem}
                      </p>
                    </div>

                    {hoveredQuadrant === quadrant.id && (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05), rgba(20, 184, 166, 0.1))',
                        borderRadius: '11px',
                        pointerEvents: 'none'
                      }} />
                    )}
                  </div>
                </div>
              ))}

              {/* Center Lines */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.2), transparent)'
              }} />
              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '50%',
                width: '2px',
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
                  padding: '20px',
                  border: '2px solid rgba(239, 68, 68, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <AlertTriangle style={{ width: 40, height: 40, color: '#ef4444' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Problem Statement - Fixed text cutting */}
        <div style={{ marginTop: '32px', textAlign: 'center', zIndex: 10, width: '100%', maxWidth: '1000px' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(251, 146, 60, 0.1))',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '20px 24px',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
              <XCircle style={{ width: 20, height: 20, color: '#ef4444', flexShrink: 0 }} />
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#ef4444', margin: 0, whiteSpace: 'nowrap' }}>
                THE IMPOSSIBLE CHOICE
              </h3>
              <XCircle style={{ width: 20, height: 20, color: '#ef4444', flexShrink: 0 }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'left', marginBottom: '12px' }}>
              <div>
                <h4 style={{ color: '#10b981', fontWeight: 'bold', fontSize: '13px', marginBottom: '6px' }}>
                  WANT ACCESS?
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '12px', lineHeight: '1.4', margin: 0 }}>
                  • Pay Goldman $10M minimum<br/>
                  • Accept no AI/intelligence<br/>
                  • Stuck with 1990s tech
                </p>
              </div>
              <div>
                <h4 style={{ color: '#a855f7', fontWeight: 'bold', fontSize: '13px', marginBottom: '6px' }}>
                  WANT INTELLIGENCE?
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '12px', lineHeight: '1.4', margin: 0 }}>
                  • Accept US-only portfolios<br/>
                  • No alternatives/PE<br/>
                  • Miss global opportunities
                </p>
              </div>
            </div>
            <div style={{
              marginTop: '12px',
              paddingTop: '12px',
              borderTop: '1px solid rgba(20, 184, 166, 0.2)'
            }}>
              <p style={{ fontSize: '16px', color: 'white', margin: 0, lineHeight: '1.5' }}>
                <span style={{ fontWeight: 'bold', color: '#ef4444' }}>THE GAP:</span> You need 
                <span style={{ color: '#10b981', fontWeight: 'bold' }}> HIGH ACCESS</span> + 
                <span style={{ color: '#a855f7', fontWeight: 'bold' }}> HIGH INTELLIGENCE</span>
              </p>
              <p style={{ fontSize: '14px', color: '#fbbf24', marginTop: '6px', margin: 0 }}>
                But no one gives you both at your level
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(1.1); }
          }
        `}</style>
      </div>
    </AspectFrame>
  );
};

export default Slide7WealthMatrixProblemOnlyFixed;
