import React from 'react';
import { motion } from 'framer-motion';
import { ConsumerLayout, PricingCard, Badge } from './ConsumerLayout';
import { MessageSquare, RefreshCw, Upload, BarChart3, Users, Calculator } from 'lucide-react';

const Page6FeaturesPricing = () => {
  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: 'Talk, Email, or WhatsApp',
      description: 'Communicate in your preferred style, in multiple languages (Hindi, English, Gujarati)'
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Automated Workflows',
      description: 'Turn recurring chores like monitoring markets or surfacing trends into automated tasks'
    },
    {
      icon: <Upload size={24} />,
      title: 'Simple Portfolio Uploads',
      description: 'Start in seconds by entering tickers or upload a brokerage statement'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Multi-Asset Support',
      description: 'Track global equities, ETFs, mutual funds, private funds, and more'
    },
    {
      icon: <Users size={24} />,
      title: 'Shared Learning',
      description: 'Gain ideas from shared portfolios by other ARIA users'
    },
    {
      icon: <Calculator size={24} />,
      title: 'Tax Alpha Engine',
      description: 'Automated tax-loss harvesting and LTCG optimization',
      highlight: true
    }
  ];

  const pricingPlans = [
    {
      tier: 'Essential',
      price: '$12',
      period: '/month',
      description: 'For personal investors checking in on their portfolio every few weeks.',
      features: [
        'Multi-asset support',
        'Unlimited portfolios',
        'Chat/talk/WhatsApp',
        'Statement parser'
      ]
    },
    {
      tier: 'Pro',
      price: '$59',
      period: '/month',
      description: 'For investors wanting daily/weekly insights and deep research.',
      features: [
        'Everything in Essential',
        'Voice trading at 11ms',
        'Tax Alpha optimization',
        'Over-concentration checks',
        'Multi-broker support'
      ],
      highlighted: true
    },
    {
      tier: 'Advisors',
      price: '0.5%',
      period: ' AUM',
      description: 'For advisors scaling their expertise to multiple clients.',
      features: [
        'Everything in Pro',
        'GIFT City access',
        'Alternatives access',
        'Up to 5 advisors',
        'Proprietary data training'
      ]
    }
  ];

  return (
    <ConsumerLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        {/* SECTION A: Features */}
        <div style={{
          flex: 1,
          padding: '2rem 3.5rem',
          borderBottom: '1px solid #E5E5E5'
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
              fontWeight: 400,
              fontFamily: "'Playfair Display', 'Georgia', serif",
              color: '#1A1A1A',
              textAlign: 'center',
              marginBottom: '1.5rem'
            }}
          >
            Intelligence that works the way you do.
          </motion.h2>

          {/* Features grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            maxWidth: '920px',
            margin: '0 auto'
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '0.75rem'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.6rem',
                  color: feature.highlight ? '#14B8A6' : '#8B7355',
                  background: feature.highlight ? 'rgba(20, 184, 166, 0.1)' : 'rgba(139, 115, 85, 0.08)',
                  borderRadius: '12px'
                }}>
                  {React.cloneElement(feature.icon, { size: 24 })}
                </div>
                <h4 style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#1A1A1A',
                  marginBottom: '0.25rem'
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  fontSize: '0.78rem',
                  color: '#6B6B6B',
                  lineHeight: 1.45
                }}>
                  {feature.description}
                </p>
                {feature.highlight && (
                  <Badge color="#14B8A6">ARIA Exclusive</Badge>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION B: Pricing */}
        <div style={{
          flex: 1,
          padding: '1.5rem 3.5rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
              fontWeight: 400,
              fontFamily: "'Playfair Display', 'Georgia', serif",
              color: '#1A1A1A',
              textAlign: 'center',
              marginBottom: '0.4rem'
            }}
          >
            Choose the plan that's right for you.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: '#14B8A6',
              color: '#FFFFFF',
              padding: '0.3rem 0.85rem',
              borderRadius: '4px',
              fontSize: '0.8rem',
              fontWeight: 600,
              marginBottom: '1rem'
            }}
          >
            1st month free
          </motion.div>

          {/* Pricing cards */}
          <div style={{
            display: 'flex',
            gap: '1.25rem',
            width: '100%',
            maxWidth: '920px'
          }}>
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.tier}
                tier={plan.tier}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
                delay={0.4 + index * 0.1}
              />
            ))}
          </div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              marginTop: '0.75rem',
              fontSize: '0.7rem',
              color: '#A0A0A0'
            }}
          >
            Cancel anytime · No set up fees · Secure payment processing
          </motion.p>
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default Page6FeaturesPricing;
