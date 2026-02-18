import React from 'react';
import { motion } from 'framer-motion';
import { ConsumerLayout } from './ConsumerLayout';
import { Smartphone, Building2, Users, AlertCircle, X, ArrowRight } from 'lucide-react';

/**
 * Page2bWhySolutionsFail - Consumer-style "Why Solutions Fail"
 * Simplified: "Too big for Robinhood, too small for Goldman"
 */
const Page2bWhySolutionsFail = () => {
  const solutions = [
    {
      name: 'Robinhood',
      subtitle: 'Trading Apps',
      icon: <Smartphone size={32} strokeWidth={1.5} />,
      problem: 'You\'ve outgrown it',
      detail: 'Great for starting out. No alternatives, no tax planning, no real advice.',
      color: '#14B8A6',
      bgGradient: 'linear-gradient(135deg, rgba(20, 184, 166, 0.08), rgba(20, 184, 166, 0.02))'
    },
    {
      name: 'Goldman Sachs',
      subtitle: 'Private Banks',
      icon: <Building2 size={32} strokeWidth={1.5} />,
      problem: 'You\'re not big enough',
      detail: '$25M minimum. Even then, you\'re their smallest client.',
      color: '#C4A052',
      bgGradient: 'linear-gradient(135deg, rgba(196, 160, 82, 0.08), rgba(196, 160, 82, 0.02))'
    },
    {
      name: 'Your CPA',
      subtitle: 'Financial Advisors',
      icon: <Users size={32} strokeWidth={1.5} />,
      problem: 'They\'re overwhelmed',
      detail: '100,000 advisor shortage by 2030. Spreadsheets can\'t scale.',
      color: '#8B5CF6',
      bgGradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(139, 92, 246, 0.02))'
    }
  ];

  return (
    <ConsumerLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '2.5rem 4rem',
        justifyContent: 'space-between'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
            fontWeight: 400,
            fontFamily: "'Playfair Display', 'Georgia', serif",
            color: '#1A1A1A',
            marginBottom: '0.5rem'
          }}>
            Why today's solutions don't work.
          </h1>
        </motion.div>

        {/* The Gap Visual - Prominent Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: 'linear-gradient(135deg, #1A1A1A, #2D2D2D)',
            borderRadius: '20px',
            padding: '1.75rem 3rem',
            marginBottom: '2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 50%, rgba(196, 160, 82, 0.15) 0%, transparent 40%)',
            pointerEvents: 'none'
          }} />
          <p style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
            fontWeight: 500,
            color: '#FFFFFF',
            fontStyle: 'italic',
            margin: 0,
            fontFamily: "'Playfair Display', 'Georgia', serif",
            position: 'relative',
            zIndex: 1
          }}>
            "Too big for Robinhood. Too small for Goldman."
          </p>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)',
            marginTop: '0.75rem',
            position: 'relative',
            zIndex: 1
          }}>
            You're caught in the middle.
          </p>
        </motion.div>

        {/* Three Solutions Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          flex: 1
        }}>
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)' }}
              style={{
                background: solution.bgGradient,
                borderRadius: '20px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 25px rgba(0, 0, 0, 0.05)',
                border: `2px solid ${solution.color}20`,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Header Row */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '1.25rem'
              }}>
                {/* Icon */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: solution.color,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
                }}>
                  {solution.icon}
                </div>
                {/* X mark */}
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#FEE2E2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <X size={18} color="#DC2626" strokeWidth={2.5} />
                </div>
              </div>

              {/* Name */}
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 600,
                color: '#1A1A1A',
                marginBottom: '0.25rem'
              }}>
                {solution.name}
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: '#8B8B8B',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {solution.subtitle}
              </p>

              {/* Problem Badge */}
              <div style={{
                background: '#FFFFFF',
                padding: '1rem 1.25rem',
                borderRadius: '12px',
                marginBottom: '1rem',
                borderLeft: `4px solid ${solution.color}`
              }}>
                <p style={{
                  fontSize: '1rem',
                  color: '#DC2626',
                  fontWeight: 600,
                  margin: 0
                }}>
                  {solution.problem}
                </p>
              </div>

              {/* Detail */}
              <p style={{
                fontSize: '0.95rem',
                color: '#5A5A5A',
                lineHeight: 1.7,
                marginTop: 'auto'
              }}>
                {solution.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom insight - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.08), rgba(139, 92, 246, 0.05))',
            borderRadius: '12px',
            border: '1px solid rgba(20, 184, 166, 0.15)'
          }}
        >
          <AlertCircle size={22} color="#14B8A6" />
          <p style={{
            fontSize: '1.05rem',
            color: '#3A3A3A',
            margin: 0
          }}>
            The affluent deserve <span style={{ color: '#14B8A6', fontWeight: 600 }}>Access</span> AND <span style={{ color: '#8B5CF6', fontWeight: 600 }}>Intelligence</span> — not one or the other.
          </p>
          <ArrowRight size={20} color="#14B8A6" />
        </motion.div>
      </div>
    </ConsumerLayout>
  );
};

export default Page2bWhySolutionsFail;
