import React from 'react';
import { motion } from 'framer-motion';
import { ConsumerLayout } from './ConsumerLayout';
import ARIAAvatar from '../../components/ARIAAvatar';
import { Brain, Globe, TrendingUp, Briefcase, BarChart3, Shield, Calculator, Landmark, Building, Zap } from 'lucide-react';

const Page4Pillars = () => {
  const divisions = [
    {
      id: 'ai',
      label: 'ARIA AI',
      subtitle: '68+ AI Agents',
      color: '#14B8A6',
      icon: <Brain size={28} strokeWidth={1.5} />,
      teams: [
        { name: 'Investment Strategists', items: ['Warren Buffett', 'Ben Graham', 'Charlie Munger'] },
        { name: 'Market Analysts', items: ['Fundamental', 'Valuation', 'Sentiment'] },
        { name: 'Risk & Portfolio', items: ['Risk Manager', 'Portfolio Optimizer'] }
      ]
    },
    {
      id: 'wealth',
      label: 'ARIA Wealth',
      subtitle: 'India Gateway',
      color: '#8B5CF6',
      icon: <Globe size={28} strokeWidth={1.5} />,
      teams: [
        { name: 'Tax Intelligence', items: ['Tax Harvester', 'LTCG Optimizer'] },
        { name: 'India Access', items: ['GIFT City 0%', 'NRI Specialist'] },
        { name: 'Alternative Assets', items: ['PE/VC Access', 'Private Credit'] }
      ]
    },
    {
      id: 'trade',
      label: 'ARIA Trade',
      subtitle: 'Broker Integration',
      color: '#F59E0B',
      icon: <TrendingUp size={28} strokeWidth={1.5} />,
      teams: [
        { name: 'US Brokers', items: ['Interactive Brokers', 'Alpaca'] },
        { name: 'India Brokers', items: ['Zerodha', 'ICICI Direct'] },
        { name: 'Execution', items: ['11ms Speed', 'Voice Trading'] }
      ]
    }
  ];

  return (
    <ConsumerLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '2rem 3rem'
      }}>
        {/* Top Section: Centered ARIA CEO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            padding: '0.5rem 1rem'
          }}
        >
          {/* Centered: ARIA Avatar + Title */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 25px rgba(20, 184, 166, 0.15)',
                  '0 0 40px rgba(20, 184, 166, 0.25)',
                  '0 0 25px rgba(20, 184, 166, 0.15)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                padding: '4px',
                background: 'linear-gradient(135deg, #14B8A6, #06B6D4, #8B5CF6)',
                flexShrink: 0
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#FDFBF7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px'
              }}>
                <ARIAAvatar size="medium" variant="gradient" animated={true} showPulse={true} showTitle={false} />
              </div>
            </motion.div>
            <div>
              <h1 style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                fontWeight: 400,
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: '#1A1A1A',
                margin: 0,
                lineHeight: 1.2
              }}>
                Your AI Family Office CEO
              </h1>
              <p style={{
                fontSize: '1.1rem',
                color: '#6B6B6B',
                margin: '0.35rem 0 0 0'
              }}>
                <span style={{ color: '#14B8A6', fontWeight: 600 }}>ARIA</span> — 68+ AI Specialists
              </p>
            </div>
          </div>
        </motion.div>

        {/* Connector lines */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '0.5rem'
        }}>
          <div style={{
            width: '2px',
            height: '20px',
            background: 'linear-gradient(180deg, #14B8A6, #D4CFC4)'
          }} />
        </div>
        <div style={{
          width: '70%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #D4CFC4 15%, #D4CFC4 85%, transparent)',
          margin: '0 auto 0.5rem'
        }} />

        {/* Three Divisions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          flex: 1,
          padding: '0 1rem'
        }}>
          {divisions.map((div, index) => (
            <motion.div
              key={div.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Connector */}
              <div style={{
                width: '2px',
                height: '15px',
                background: div.color,
                margin: '0 auto'
              }} />

              {/* Division Header */}
              <div style={{
                background: `linear-gradient(135deg, ${div.color}10, ${div.color}05)`,
                border: `2px solid ${div.color}40`,
                borderRadius: '16px',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.25rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: `${div.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: div.color
                }}>
                  {div.icon}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1A1A1A',
                    margin: 0
                  }}>
                    {div.label}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: div.color,
                    margin: 0,
                    fontWeight: 500
                  }}>
                    {div.subtitle}
                  </p>
                </div>
              </div>

              {/* Teams */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                flex: 1
              }}>
                {div.teams.map((team) => (
                  <div
                    key={team.name}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '1rem',
                      borderLeft: `4px solid ${div.color}`,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <p style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: div.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      margin: 0,
                      marginBottom: '0.5rem'
                    }}>
                      {team.name}
                    </p>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem'
                    }}>
                      {team.items.map((item) => (
                        <span
                          key={item}
                          style={{
                            fontSize: '0.8rem',
                            background: `${div.color}08`,
                            color: '#4A4A4A',
                            padding: '0.3rem 0.6rem',
                            borderRadius: '6px',
                            border: `1px solid ${div.color}20`
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            marginTop: '1.5rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(90deg, rgba(20, 184, 166, 0.1), rgba(139, 92, 246, 0.1), rgba(245, 158, 11, 0.1))',
            borderRadius: '14px',
            display: 'flex',
            justifyContent: 'center',
            gap: '5rem'
          }}
        >
          {[
            { value: '68+', label: 'AI Specialists', color: '#14B8A6' },
            { value: '24/7', label: 'Active Management', color: '#8B5CF6' },
            { value: '11ms', label: 'Execution Speed', color: '#F59E0B' },
            { value: '$1M→₹10K', label: 'Cost Reduction', color: '#10B981' }
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.3rem', fontWeight: 700, color: stat.color, margin: 0 }}>{stat.value}</p>
              <p style={{ fontSize: '0.7rem', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </ConsumerLayout>
  );
};

export default Page4Pillars;
