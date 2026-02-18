import React from 'react';
import { motion } from 'framer-motion';
import { ConsumerLayout, Headline, BodyText, QuoteText } from './ConsumerLayout';
import { Building2, TrendingUp, Shield, Users, Globe, Briefcase } from 'lucide-react';

const Page2Problem = () => {
  const superpowers = [
    { icon: <Building2 size={20} />, label: 'Private Markets', detail: 'PE, VC, Private Credit' },
    { icon: <TrendingUp size={20} />, label: 'Alternative Assets', detail: '15-40% IRR opportunities' },
    { icon: <Shield size={20} />, label: 'Tax Optimization', detail: 'Offshore structures' },
    { icon: <Users size={20} />, label: 'Dedicated Team', detail: 'Family office staff' },
    { icon: <Globe size={20} />, label: 'Global Access', detail: 'Any market, any asset' },
    { icon: <Briefcase size={20} />, label: 'Sophisticated Strategies', detail: 'Hedging, leverage' }
  ];

  return (
    <ConsumerLayout>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        height: '100%',
        gap: '0'
      }}>
        {/* Left side - Text content */}
        <div style={{
          padding: '3rem 4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Headline size="large">
            The ultra-rich manage their money
            very differently.
          </Headline>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginTop: '1.5rem' }}
          >
            <BodyText>
              They use a set of 'financial superpowers' to grow and protect
              their money. They access private markets, use sophisticated
              strategies, and have a dedicated team.
            </BodyText>
            
            <BodyText style={{ marginTop: '1rem' }}>
              This isn't just about having more money — it's about having access
              to a <span style={{ color: '#C4A052', fontWeight: 600 }}>different system</span>.
            </BodyText>
          </motion.div>

          {/* Quote box */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              marginTop: '2rem',
              padding: '1.25rem 1.5rem',
              background: 'linear-gradient(135deg, #F8F6F1, #F0EDE6)',
              borderRadius: '12px',
              borderLeft: '4px solid #C4A052'
            }}
          >
            <QuoteText>
              "Like they're playing a game on a whole other level."
            </QuoteText>
          </motion.div>
        </div>

        {/* Right side - Superpowers Grid */}
        <div style={{
          background: 'linear-gradient(135deg, #FDFBF7 0%, #F8F6F1 100%)',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: '0.85rem',
              color: '#A0A0A0',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}
          >
            The 1% Financial Superpowers
          </motion.h3>

          {/* Grid of superpowers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem'
          }}>
            {superpowers.map((power, index) => (
              <motion.div
                key={power.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                  border: '1px solid #F0EDE6'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(196, 160, 82, 0.15), rgba(196, 160, 82, 0.05))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C4A052',
                  flexShrink: 0
                }}>
                  {power.icon}
                </div>
                <div>
                  <p style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#1A1A1A',
                    margin: 0
                  }}>
                    {power.label}
                  </p>
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#6B6B6B',
                    margin: 0
                  }}>
                    {power.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom stat */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{
              marginTop: '1.5rem',
              textAlign: 'center',
              padding: '1rem',
              background: 'rgba(196, 160, 82, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(196, 160, 82, 0.2)'
            }}
          >
            <p style={{
              fontSize: '0.9rem',
              color: '#8B7355',
              margin: 0
            }}>
              <span style={{ fontWeight: 700, color: '#C4A052' }}>$25M+ minimum</span> required for traditional family office access
            </p>
          </motion.div>
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default Page2Problem;
