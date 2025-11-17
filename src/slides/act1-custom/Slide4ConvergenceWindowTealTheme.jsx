import React, { useState, useEffect } from 'react';
import { Clock, Users, Globe, Brain, ArrowRight, AlertCircle } from 'lucide-react';

const Slide4ConvergenceWindowTealTheme = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [hoveredForce, setHoveredForce] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const forces = [
    {
      id: 1,
      icon: Users,
      color: '#3b82f6',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      title: 'The Great Advisor Exodus',
      percentage: '46%',
      mainText: 'of HNWs actively switching NOW',
      details: [
        '40% of advisors retiring',
        '0.2% new advisors entering',
        'Supply completely collapsing'
      ],
      window: 'Before supply vanishes',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
    },
    {
      id: 2,
      icon: Globe,
      color: '#14b8a6',
      bgColor: 'rgba(20, 184, 166, 0.1)',
      title: 'The India Gateway Opens',
      percentage: '$5T',
      mainText: 'market now accessible via GIFT',
      details: [
        '0% tax advantage for early movers',
        'Regulations evolving favorably',
        'First-mover advantage critical'
      ],
      window: 'Before competition floods in',
      gradient: 'linear-gradient(135deg, #14b8a6, #06b6d4)'
    },
    {
      id: 3,
      icon: Brain,
      color: '#a855f7',
      bgColor: 'rgba(168, 85, 247, 0.1)',
      title: 'The AI Arms Race',
      percentage: '600%',
      mainText: 'outperformance already proven',
      details: [
        'First-movers capturing alpha',
        'Network effects accelerating',
        'Gap widening daily'
      ],
      window: 'Before AI becomes table stakes',
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899)'
    }
  ];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      background: 'radial-gradient(ellipse at center, rgba(20, 184, 166, 0.05), transparent), #0A1628',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: 'Inter, -apple-system, sans-serif'
    }}>
      {/* Animated Timeline Background */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="timeline-gradient-teal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect
            x="10%"
            y="48%"
            width="80%"
            height="4%"
            fill="url(#timeline-gradient-teal)"
            rx="20"
            opacity="0.3"
          />
          <rect
            x="10%"
            y="48%"
            width={`${timeElapsed * 0.8}%`}
            height="4%"
            fill="url(#timeline-gradient-teal)"
            opacity="0.8"
            rx="20"
          />
        </svg>
        
        {/* Timeline Labels */}
        <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)' }}>
          <div style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>NOW</div>
        </div>
        <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)' }}>
          <div style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: '20px' }}>18 MONTHS</div>
        </div>
      </div>

      {/* Floating Orbs */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(20, 184, 166, 0.1), transparent)`,
            filter: 'blur(40px)',
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `pulse ${15 + Math.random() * 10}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px'
      }}>
        {/* Title Section */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            THE 18-MONTH CONVERGENCE WINDOW
          </h1>
          <p style={{ fontSize: '20px', color: '#94A3B8' }}>Three Forces Creating Unprecedented Urgency</p>
        </div>

        {/* Three Forces Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '24px',
          marginBottom: '40px'
        }}>
          {forces.map((force) => (
            <div
              key={force.id}
              style={{
                position: 'relative',
                background: force.gradient,
                padding: '1px',
                borderRadius: '16px',
                transform: hoveredForce === force.id ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: hoveredForce === force.id 
                  ? `0 10px 30px ${force.color}40`
                  : '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={() => setHoveredForce(force.id)}
              onMouseLeave={() => setHoveredForce(null)}
            >
              <div style={{
                background: 'rgba(10, 22, 40, 0.95)',
                borderRadius: '15px',
                padding: '24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <force.icon style={{ width: 40, height: 40, color: force.color, marginRight: 12 }} />
                  <div>
                    <p style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                      Force {force.id}
                    </p>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>{force.title}</h3>
                  </div>
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ 
                    fontSize: '48px', 
                    fontWeight: 'bold',
                    background: force.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '8px'
                  }}>
                    {force.percentage}
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '14px' }}>{force.mainText}</p>
                </div>

                {hoveredForce === force.id && (
                  <div style={{ marginBottom: '16px' }}>
                    {force.details.map((detail, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <span style={{ color: force.color, marginRight: '8px' }}>•</span>
                        <span style={{ fontSize: '14px', color: '#94a3b8' }}>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ 
                  borderTop: `1px solid ${force.color}33`,
                  paddingTop: '12px',
                  marginTop: 'auto'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <AlertCircle style={{ width: 16, height: 16, color: force.color, marginRight: 8 }} />
                    <p style={{ fontSize: '14px', color: '#fde047', fontWeight: '600', margin: 0 }}>
                      Window: {force.window}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CPA Distribution Math Section */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(20, 184, 166, 0.05))',
          borderRadius: '16px',
          padding: '32px',
          border: '1px solid rgba(20, 184, 166, 0.3)',
          boxShadow: '0 4px 20px rgba(20, 184, 166, 0.15)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Left: The Math */}
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
                THE CPA DISTRIBUTION MATH
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(10, 22, 40, 0.5)',
                  borderRadius: '8px',
                  padding: '12px',
                  border: '1px solid rgba(20, 184, 166, 0.2)'
                }}>
                  <span style={{ color: '#94a3b8' }}>CPAs in Network</span>
                  <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#14b8a6' }}>100</span>
                </div>
                <div style={{ textAlign: 'center', fontSize: '24px', color: '#64748b' }}>×</div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(10, 22, 40, 0.5)',
                  borderRadius: '8px',
                  padding: '12px',
                  border: '1px solid rgba(20, 184, 166, 0.2)'
                }}>
                  <span style={{ color: '#94a3b8' }}>Clients per CPA</span>
                  <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#14b8a6' }}>100</span>
                </div>
                <div style={{ textAlign: 'center', fontSize: '24px', color: '#64748b' }}>=</div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 146, 60, 0.2))',
                  borderRadius: '8px',
                  padding: '12px',
                  border: '1px solid rgba(251, 191, 36, 0.3)'
                }}>
                  <span style={{ color: 'white', fontWeight: '600' }}>Total Families</span>
                  <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#fbbf24' }}>10,000</span>
                </div>
              </div>
            </div>

            {/* Right: The Opportunity */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{
                background: 'rgba(10, 22, 40, 0.5)',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid rgba(20, 184, 166, 0.2)'
              }}>
                <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>
                  Why CPAs Are Our Superpower:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'They already have the trust',
                    "They're drowning and need our help",
                    'They become distribution at zero CAC'
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <ArrowRight style={{ width: 20, height: 20, color: '#14b8a6', marginRight: 8, marginTop: 2 }} />
                      <span style={{ color: '#94a3b8' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ 
                  marginTop: '16px', 
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(20, 184, 166, 0.3)'
                }}>
                  <p style={{ 
                    fontSize: '24px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(to right, #14b8a6, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    = $100M AUM in 18 months
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Banner */}
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(239, 68, 68, 0.1)',
            borderRadius: '999px',
            padding: '16px 32px',
            border: '1px solid rgba(239, 68, 68, 0.3)'
          }}>
            <AlertCircle style={{ width: 24, height: 24, color: '#ef4444', marginRight: 12 }} />
            <p style={{ fontSize: '20px', color: 'white', margin: 0 }}>
              This window <span style={{ fontWeight: 'bold', color: '#ef4444' }}>won't reopen</span>. 
              The convergence is <span style={{ fontWeight: 'bold', color: '#fbbf24' }}>once in a generation</span>.
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
  );
};

export default Slide4ConvergenceWindowTealTheme;
