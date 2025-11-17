import React, { useState } from 'react';
import { AspectFrame } from '../../components/StandardLayouts';
import { Brain, Globe, Users, Building2, Lock, Unlock, Sparkles } from 'lucide-react';

const Slide7WealthMatrixMergedFixed = () => {
  const [hoveredQuadrant, setHoveredQuadrant] = useState(null);
  const [showARIA, setShowARIA] = useState(false);

  React.useEffect(() => {
    setTimeout(() => setShowARIA(true), 1500);
  }, []);

  const quadrants = [
    {
      id: 'robo',
      position: 'top-left',
      title: 'ROBO-ADVISORS',
      intelligence: 'HIGH',
      access: 'LOW',
      color: '#3b82f6',
      features: ['✓ AI Tools', '✓ Automation', '✗ No Global Access', '✗ No Alternatives'],
      description: 'Smart but limited',
      icon: Brain,
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
    },
    {
      id: 'goldman',
      position: 'top-right',
      title: 'GOLDMAN SACHS',
      intelligence: 'HIGH',
      access: 'HIGH',
      color: '#fbbf24',
      features: ['✓ Everything', '✓ All Markets', '✗ Won\'t serve you', '✗ $10M+ only'],
      description: 'Has it all, but not for you',
      icon: Building2,
      gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b)'
    },
    {
      id: 'cpa',
      position: 'bottom-left',
      title: 'YOUR CPA',
      intelligence: 'LOW',
      access: 'LOW',
      color: '#6b7280',
      features: ['✗ Drowning', '✗ No tools', '✗ No time', '✗ No access'],
      description: 'Overwhelmed',
      icon: Users,
      gradient: 'linear-gradient(135deg, #6b7280, #4b5563)'
    },
    {
      id: 'banks',
      position: 'bottom-right',
      title: 'PRIVATE BANKS',
      intelligence: 'LOW',
      access: 'HIGH',
      color: '#a855f7',
      features: ['✓ Product Access', '✓ Global Reach', '✗ No AI', '✗ Stuck in 1990s'],
      description: 'Access without intelligence',
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
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
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
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5
        }} />
        
        {/* Floating Orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              background: `linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))`,
              filter: 'blur(40px)',
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${10 + Math.random() * 10}s ease-in-out infinite`,
            }}
          />
        ))}

        {/* Title Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px', zIndex: 10 }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '8px', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#06b6d4' }}>ARIA</span>
            <span style={{ color: 'white' }}> - WHERE </span>
            <span style={{ 
              background: 'linear-gradient(to right, #10b981, #34d399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>ACCESS</span>
            <span style={{ color: 'white' }}> MEETS </span>
            <span style={{ 
              background: 'linear-gradient(to right, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>INTELLIGENCE</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#d1d5db' }}>The New Reality of Wealth Management</p>
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
            background: 'rgba(15, 23, 42, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid rgba(100, 116, 139, 0.5)'
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
                <span style={{ color: '#6b7280', fontSize: '12px' }}>LOW</span>
                <Brain style={{ width: 20, height: 20, color: '#a855f7' }} />
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#a855f7' }}>INTELLIGENCE</span>
                <Brain style={{ width: 20, height: 20, color: '#a855f7' }} />
                <span style={{ color: '#6b7280', fontSize: '12px' }}>HIGH</span>
              </div>
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '-40px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#6b7280', fontSize: '12px' }}>LOW</span>
                <Globe style={{ width: 20, height: 20, color: '#10b981' }} />
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#10b981' }}>ACCESS</span>
                <Globe style={{ width: 20, height: 20, color: '#10b981' }} />
                <span style={{ color: '#6b7280', fontSize: '12px' }}>HIGH</span>
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
                    background: 'rgba(15, 23, 42, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '11px',
                    padding: '20px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'white', margin: 0 }}>
                        {quadrant.title}
                      </h3>
                      <quadrant.icon style={{ width: 28, height: 28, color: quadrant.color }} />
                    </div>
                    
                    <div style={{ flex: 1, fontSize: '14px', lineHeight: '1.6' }}>
                      {quadrant.features.map((feature, idx) => (
                        <div key={idx} style={{ marginBottom: '4px' }}>
                          <span style={{ color: feature.startsWith('✓') ? '#10b981' : '#ef4444' }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div style={{ 
                      marginTop: '16px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(100, 116, 139, 0.3)'
                    }}>
                      <p style={{ color: '#9ca3af', fontStyle: 'italic', fontSize: '14px', margin: 0 }}>
                        "{quadrant.description}"
                      </p>
                    </div>

                    {hoveredQuadrant === quadrant.id && (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1))',
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
                background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)'
              }} />
              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '50%',
                width: '2px',
                background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent)'
              }} />
            </div>

            {/* ARIA Positioning - Animated Entry */}
            {showARIA && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                animation: 'slideIn 0.5s ease-out'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #a855f7)',
                  padding: '2px',
                  borderRadius: '16px',
                  boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)'
                }}>
                  <div style={{
                    background: 'rgba(15, 23, 42, 0.95)',
                    borderRadius: '14px',
                    padding: '24px 32px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <Sparkles style={{ width: 28, height: 28, color: '#06b6d4' }} />
                      <h3 style={{ 
                        fontSize: '28px',
                        fontWeight: 'bold',
                        background: 'linear-gradient(to right, #06b6d4, #a855f7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        margin: 0
                      }}>
                        ARIA
                      </h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Unlock style={{ width: 18, height: 18, color: '#10b981' }} />
                        <span style={{ color: '#10b981', fontWeight: '600', fontSize: '14px' }}>HIGH ACCESS</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Brain style={{ width: 18, height: 18, color: '#a855f7' }} />
                        <span style={{ color: '#a855f7', fontWeight: '600', fontSize: '14px' }}>HIGH INTELLIGENCE</span>
                      </div>
                    </div>
                    <div style={{ 
                      marginTop: '12px',
                      paddingTop: '12px',
                      borderTop: '1px solid rgba(100, 116, 139, 0.3)'
                    }}>
                      <p style={{ color: 'white', fontSize: '13px', fontWeight: '500', margin: 0 }}>
                        Institutional access + AI brain
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Message */}
        <div style={{ marginTop: '40px', textAlign: 'center', zIndex: 10 }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(251, 146, 60, 0.1), rgba(251, 191, 36, 0.1))',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '24px 32px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>THE PROBLEM:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', textAlign: 'left', marginBottom: '16px' }}>
              <div style={{ color: '#d1d5db', fontSize: '14px' }}>
                <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>Robo</span> = Brain without reach
              </div>
              <div style={{ color: '#d1d5db', fontSize: '14px' }}>
                <span style={{ color: '#a855f7', fontWeight: 'bold' }}>Banks</span> = Reach without brain
              </div>
              <div style={{ color: '#d1d5db', fontSize: '14px' }}>
                <span style={{ color: '#6b7280', fontWeight: 'bold' }}>CPA</span> = Neither
              </div>
              <div style={{ color: '#d1d5db', fontSize: '14px' }}>
                <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>Goldman</span> = Both, but exclusive
              </div>
            </div>
            <p style={{ fontSize: '18px', color: 'white', margin: 0 }}>
              <span style={{ fontWeight: 'bold', color: '#06b6d4' }}>YOU NEED:</span> Institutional access + AI intelligence at your level
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(1.1); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          }
        `}</style>
      </div>
    </AspectFrame>
  );
};

export default Slide7WealthMatrixMergedFixed;
