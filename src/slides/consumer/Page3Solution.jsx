import React from 'react';
import { motion } from 'framer-motion';
import { ConsumerLayout } from './ConsumerLayout';
import { Wallet, Brain, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

const Page3Solution = () => {
  const steps = [
    {
      icon: <Wallet size={28} />,
      title: 'Connect',
      description: 'Link your existing brokerage accounts. Your assets stay where they are.',
      color: '#14B8A6'
    },
    {
      icon: <Brain size={28} />,
      title: 'Analyze',
      description: 'ARIA\'s 68+ specialists analyze your portfolio, tax situation, and goals.',
      color: '#8B5CF6'
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Optimize',
      description: 'Get institutional-grade recommendations. Execute with one click or voice.',
      color: '#C4A052'
    }
  ];

  return (
    <ConsumerLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '3rem 4rem',
        justifyContent: 'center'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3rem)',
            fontWeight: 400,
            fontFamily: "'Playfair Display', 'Georgia', serif",
            color: '#1A1A1A',
            marginBottom: '0.75rem'
          }}>
            How ARIA Works For You
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6B6B6B',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Simple to start. Powerful to use.
          </p>
        </motion.div>

        {/* Steps Flow */}
        <div style={{
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)' }}
                style={{
                  flex: 1,
                  maxWidth: '320px',
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 4px 25px rgba(0, 0, 0, 0.05)',
                  border: `2px solid ${step.color}20`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Step Number */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: `${step.color}15`,
                  color: step.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  fontWeight: 700,
                  marginBottom: '1.25rem'
                }}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${step.color}15, ${step.color}08)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: step.color,
                  marginBottom: '1.5rem'
                }}>
                  {React.cloneElement(step.icon, { size: 36 })}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#1A1A1A',
                  marginBottom: '0.75rem'
                }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '1.05rem',
                  color: '#5A5A5A',
                  lineHeight: 1.6
                }}>
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#D4CFC4'
                  }}
                >
                  <ArrowRight size={36} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}
        >
          {[
            'No minimum investment',
            'Your broker, your assets',
            'Cancel anytime'
          ].map((benefit, i) => (
            <div
              key={benefit}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <CheckCircle size={22} color="#14B8A6" />
              <span style={{ fontSize: '1.1rem', color: '#4A4A4A' }}>
                {benefit}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            marginTop: '2.5rem',
            textAlign: 'center'
          }}
        >
          <div style={{
            display: 'inline-flex',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(139, 92, 246, 0.05))',
            borderRadius: '100px',
            border: '1px solid rgba(20, 184, 166, 0.2)'
          }}>
            <span style={{
              fontSize: '1.05rem',
              color: '#14B8A6',
              fontWeight: 500
            }}>
              Now open globally to Accredited Investors
            </span>
          </div>
        </motion.div>
      </div>
    </ConsumerLayout>
  );
};

export default Page3Solution;
