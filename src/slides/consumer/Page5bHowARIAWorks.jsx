import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConsumerLayout } from './ConsumerLayout';
import { Target, Shield, Clock, Globe, Brain, TrendingUp, Calculator, RefreshCw, ArrowRight, CheckCircle, Mic } from 'lucide-react';

/**
 * Page5bHowARIAWorks - Consumer-style "How ARIA Makes Decisions"
 * Shows the flow: Understand You → Construct Portfolio → Optimize → Execute
 */
const Page5bHowARIAWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      id: 'understand',
      label: 'Understands You',
      color: '#14B8A6',
      icon: <Target size={24} />,
      items: ['Goals & Risk Appetite', 'Time Horizon', 'Tax Situation', 'Jurisdictions (US/India)']
    },
    {
      id: 'construct',
      label: 'Constructs Portfolio',
      color: '#8B5CF6',
      icon: <Brain size={24} />,
      items: ['18 Legendary Investor AIs', 'Diversified Asset Allocation', 'Alternative Access', 'GIFT City Integration']
    },
    {
      id: 'optimize',
      label: 'Optimizes Continuously',
      color: '#F59E0B',
      icon: <RefreshCw size={24} />,
      items: ['Daily Tax Harvesting', 'Rebalancing Alerts', 'Risk Monitoring', 'Compliance Checks']
    },
    {
      id: 'execute',
      label: 'Executes Instantly',
      color: '#10B981',
      icon: <TrendingUp size={24} />,
      items: ['Voice Trading (11ms)', 'Multi-Broker Support', 'Best Execution', 'Zero Custody Risk']
    }
  ];

  return (
    <ConsumerLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '2.5rem 3rem'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <h1 style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
            fontWeight: 400,
            fontFamily: "'Playfair Display', 'Georgia', serif",
            color: '#1A1A1A',
            margin: 0,
            marginBottom: '0.5rem'
          }}>
            How ARIA Works For You
          </h1>
          <p style={{ fontSize: '1rem', color: '#6B6B6B', margin: 0 }}>
            Your AI wealth manager, working <span style={{ color: '#14B8A6', fontWeight: 600 }}>24/7</span>
          </p>
        </motion.div>

        {/* Step Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2rem'
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              animate={{
                background: i <= activeStep ? step.color : '#E5E5E5',
                scale: i === activeStep ? 1.05 : 1
              }}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setActiveStep(i)}
            >
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: i <= activeStep ? '#FFFFFF' : '#6B6B6B'
              }}>
                {i + 1}. {step.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Flow */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          alignItems: 'stretch'
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: index === activeStep ? 1.02 : 1
              }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              style={{
                background: index === activeStep 
                  ? `linear-gradient(135deg, ${step.color}15, ${step.color}08)` 
                  : '#FFFFFF',
                borderRadius: '16px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                border: index === activeStep 
                  ? `2px solid ${step.color}40`
                  : '1px solid #F0EDE6',
                boxShadow: index === activeStep 
                  ? `0 8px 24px ${step.color}15`
                  : '0 2px 12px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {/* Step Number */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: step.color,
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 700
              }}>
                {index + 1}
              </div>

              {/* Icon */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: `${step.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: step.color,
                margin: '0 auto 1rem'
              }}>
                {step.icon}
              </div>

              {/* Label */}
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1A1A1A',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                {step.label}
              </h3>

              {/* Items */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                flex: 1
              }}>
                {step.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8rem',
                      color: '#4A4A4A'
                    }}
                  >
                    <CheckCircle size={14} color={step.color} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '1.5rem',
            padding: '1rem 1.5rem',
            background: 'linear-gradient(135deg, #F8F6F1, #F0EDE6)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #14B8A6, #06B6D4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Mic size={20} color="#FFFFFF" />
            </div>
            <div>
              <p style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#1A1A1A',
                margin: 0
              }}>
                "Buy ₹50,000 of HDFC Bank"
              </p>
              <p style={{
                fontSize: '0.75rem',
                color: '#6B6B6B',
                margin: 0
              }}>
                Voice command example
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ArrowRight size={20} color="#14B8A6" />
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: '#FFFFFF',
              borderRadius: '8px',
              border: '1px solid #E5E5E5'
            }}>
              <CheckCircle size={16} color="#10B981" />
              <span style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: 600 }}>
                Executed in 11ms via Zerodha
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </ConsumerLayout>
  );
};

export default Page5bHowARIAWorks;
