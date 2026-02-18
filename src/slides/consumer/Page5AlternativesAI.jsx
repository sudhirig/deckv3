import React from 'react';
import { motion } from 'framer-motion';
import { ConsumerLayout, Headline, BodyText, Badge } from './ConsumerLayout';
import { Building, Rocket, Landmark, Factory, Layers } from 'lucide-react';

const Page5AlternativesAI = () => {
  const alternatives = [
    { name: 'Private Equity', icon: <Building size={18} /> },
    { name: 'Venture Capital', icon: <Rocket size={18} /> },
    { name: 'Private Credit', icon: <Landmark size={18} /> },
    { name: 'Private Infrastructure', icon: <Factory size={18} /> },
    { name: 'Structured Products', icon: <Layers size={18} /> }
  ];

  return (
    <ConsumerLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        {/* SECTION A: Alternatives */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          borderBottom: '1px solid #E5E5E5'
        }}>
          {/* Left - Text */}
          <div style={{
            padding: '3rem 4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            {/* ACCESS Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'linear-gradient(135deg, #C4A052, #D4B062)',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                marginBottom: '0.75rem',
                width: 'fit-content'
              }}
            >
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Access</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 400,
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: '#1A1A1A',
                lineHeight: 1.3,
                marginBottom: '1.5rem'
              }}
            >
              Invest in opportunities<br />
              previously out of reach.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BodyText>
                Move beyond standard stocks and bonds. Build a diversified
                portfolio with institutional-grade assets once exclusive
                to the ultra-wealthy.
              </BodyText>
            </motion.div>

            {/* Quote box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: '#F8F6F1',
                borderRadius: '8px',
                borderLeft: '3px solid #C4A052'
              }}
            >
              <p style={{
                fontSize: '0.85rem',
                color: '#6B6B6B',
                fontStyle: 'italic',
                lineHeight: 1.6,
                margin: 0
              }}>
                "Millennial and Gen Z investors are building diversified
                portfolios earlier by tapping into private market investments...
                assets once exclusive to high-net-worth investors."
              </p>
            </motion.div>

            {/* GIFT City badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ marginTop: '1rem' }}
            >
              <Badge color="#14B8A6">🔥 GIFT City Access (0% Tax)</Badge>
            </motion.div>
          </div>

          {/* Right - Investment cards */}
          <div style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            {alternatives.map((alt, index) => (
              <motion.div
                key={alt.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ x: 5 }}
                style={{
                  padding: '1rem 1.5rem',
                  background: '#FFFFFF',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  border: '1px solid #F0EDE6',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer'
                }}
              >
                <div style={{ color: '#C4A052' }}>{alt.icon}</div>
                <span style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: '#1A1A1A'
                }}>
                  {alt.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION B: AI Sidekick */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          overflow: 'hidden'
        }}>
          {/* Left - Text */}
          <div style={{
            padding: '2rem 3rem 2rem 4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: '#FFFFFF'
          }}>
            {/* INTELLIGENCE Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                marginBottom: '0.75rem',
                width: 'fit-content'
              }}
            >
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Intelligence</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 400,
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: '#1A1A1A',
                lineHeight: 1.3,
                marginBottom: '1.5rem'
              }}
            >
              Meet your AI<br />
              Sidekick for<br />
              investing.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <BodyText>
                Your Sidekick gives you a clear view of your holdings,
                instant performance comparisons, and easy-to-read stats
                that reveal how your portfolio measures up.
              </BodyText>
              
              <BodyText style={{ marginTop: '1rem' }}>
                Analyze, track, research, and question almost anything
                with just a conversation.
              </BodyText>
            </motion.div>

            {/* ARIA Unique */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{
                marginTop: '1rem',
                fontSize: '0.8rem',
                color: '#14B8A6',
                fontWeight: 500
              }}
            >
              🧠 18 Legendary Investor AIs (Buffett, Dalio, Lynch...)
            </motion.div>
          </div>

          {/* Right - ARIA Dashboard Screenshot Mockup */}
          <div style={{
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'stretch',
            background: '#0B1120',
            overflow: 'hidden'
          }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                width: '100%',
                height: '100%',
                background: '#0B1120',
                display: 'flex'
              }}
            >
              {/* Left Sidebar */}
              <div style={{
                width: '130px',
                background: '#0B1120',
                padding: '1.25rem 0.75rem',
                borderRight: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', padding: '0 0.25rem' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, #14B8A6, #06B6D4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#0F1629'
                  }}>A</div>
                  <span style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem' }}>ARIA</span>
                </div>

                {/* Nav Items */}
                {[
                  { icon: '⊞', label: 'Dashboard', active: true },
                  { icon: '◔', label: 'Portfolio' },
                  { icon: '∿', label: 'Markets' },
                  { icon: '⚙', label: 'AI Agents' },
                  { icon: '🎤', label: 'Voice' }
                ].map((item) => (
                  <div key={item.label} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0.5rem',
                    borderRadius: '8px',
                    background: item.active ? 'rgba(20, 184, 166, 0.15)' : 'transparent',
                    marginBottom: '0.25rem',
                    cursor: 'pointer'
                  }}>
                    <span style={{ color: item.active ? '#14B8A6' : '#6B7280', fontSize: '0.75rem' }}>{item.icon}</span>
                    <span style={{ color: item.active ? '#14B8A6' : '#9CA3AF', fontSize: '0.7rem', fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
                  </div>
                ))}

                <div style={{ flex: 1 }} />

                {/* Bottom nav */}
                {[
                  { icon: '⊕', label: 'GIFT City' },
                  { icon: '⚙', label: 'Settings' }
                ].map((item) => (
                  <div key={item.label} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0.5rem',
                    marginBottom: '0.25rem'
                  }}>
                    <span style={{ color: '#6B7280', fontSize: '0.75rem' }}>{item.icon}</span>
                    <span style={{ color: '#9CA3AF', fontSize: '0.7rem' }}>{item.label}</span>
                    <span style={{ marginLeft: 'auto', color: '#6B7280', fontSize: '0.6rem' }}>›</span>
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div style={{ flex: 1, padding: '1.25rem', background: '#0F1629' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 600, margin: 0 }}>68+ AI Agents</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                      <span style={{ background: '#F59E0B', color: '#000', fontSize: '0.5rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: '4px' }}>DEMO</span>
                      <span style={{ color: '#6B7280', fontSize: '0.55rem' }}>Illustrative team structure</span>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    padding: '0.35rem 0.6rem',
                    fontSize: '0.55rem',
                    color: '#9CA3AF'
                  }}>
                    <span style={{ color: '#F59E0B' }}>⚡</span> Connect to activate
                  </div>
                </div>

                {/* Team Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                  {[
                    { name: 'Portfolio Team', count: 12, lead: 'Optimizer', dot: '#10B981' },
                    { name: 'Risk Team', count: 8, lead: 'Sentinel', dot: '#F59E0B' },
                    { name: 'Tax Team', count: 6, lead: 'Alpha Engine', dot: '#3B82F6' },
                    { name: 'Research Team', count: 15, lead: 'Analyst', dot: '#10B981' },
                    { name: 'Execution Team', count: 10, lead: 'Commander', dot: '#3B82F6' }
                  ].map((team, index) => (
                    <motion.div
                      key={team.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.08 }}
                      style={{
                        background: 'rgba(20, 184, 166, 0.08)',
                        border: '1px solid rgba(20, 184, 166, 0.25)',
                        borderRadius: '10px',
                        padding: '0.65rem',
                        position: 'relative'
                      }}
                    >
                      {/* Status dot */}
                      <div style={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: team.dot
                      }} />
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '8px',
                          background: 'rgba(20, 184, 166, 0.2)',
                          border: '1px solid rgba(20, 184, 166, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <span style={{ color: '#14B8A6', fontSize: '0.7rem' }}>🧠</span>
                        </div>
                        <div>
                          <p style={{ color: '#FFFFFF', fontSize: '0.7rem', fontWeight: 600, margin: 0 }}>{team.name}</p>
                          <p style={{ color: '#14B8A6', fontSize: '0.55rem', margin: 0 }}>{team.count} agents</p>
                        </div>
                      </div>
                      <p style={{ color: '#6B7280', fontSize: '0.5rem', margin: '0.4rem 0 0 0' }}>Lead: <span style={{ color: '#14B8A6' }}>{team.lead}</span></p>
                    </motion.div>
                  ))}

                  {/* Total Agents Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(20, 184, 166, 0.08))',
                      border: '1px solid rgba(20, 184, 166, 0.3)',
                      borderRadius: '10px',
                      padding: '0.65rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <p style={{ color: '#14B8A6', fontSize: '0.5rem', fontWeight: 600, letterSpacing: '0.1em', margin: 0 }}>TOTAL AGENTS</p>
                    <p style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700, margin: '0.2rem 0' }}>68+</p>
                    <p style={{ color: '#6B7280', fontSize: '0.5rem', margin: 0 }}>Working for you 24/7</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default Page5AlternativesAI;
