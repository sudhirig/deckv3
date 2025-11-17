import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { TrendingUp, Globe, Brain } from 'lucide-react'

const Slide1HiddenOpportunityV8 = () => {
  return (
    <AspectFrame>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(135deg, #0A1628 0%, #0f172a 50%, #1e293b 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '64px',
          fontFamily: 'Inter, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.25,
            background:
              'radial-gradient(ellipse at top left, rgba(20, 184, 166, 0.15) 0%, transparent 45%), radial-gradient(ellipse at bottom right, rgba(251, 113, 133, 0.12) 0%, transparent 45%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '960px' }}>
          <p
            style={{
              fontSize: '14px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#38BDF8',
              margin: '0 0 12px 0',
            }}
          >
            ARIA – YOUR INSTITUTIONAL EDGE FOR GLOBAL WEALTH
          </p>
          <h1
            style={{
              fontSize: '44px',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: '0 0 12px 0',
              letterSpacing: '-0.03em',
            }}
          >
            THE $124T HIDDEN OPPORTUNITY
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#94A3B8',
              margin: 0,
            }}
          >
            You are locked out of the biggest wealth opportunity in history while the 1% quietly compound it.
          </p>
        </div>

        <div
          style={{
            position: 'relative',
            maxWidth: '960px',
            width: '100%',
            background: 'rgba(15, 23, 42, 0.9)',
            borderRadius: '24px',
            padding: '28px 32px 32px',
            border: '1px solid rgba(148, 163, 184, 0.25)',
            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.25,
              background:
                'radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.18) 0%, transparent 55%), radial-gradient(circle at 100% 100%, rgba(52, 211, 153, 0.16) 0%, transparent 55%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '24px',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                padding: '16px 18px',
                borderRadius: '16px',
                background: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(59, 130, 246, 0.35)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '999px',
                    background:
                      'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.4))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TrendingUp size={18} color="#E5F2FF" />
                </div>
                <span
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#60A5FA',
                    fontWeight: 600,
                  }}
                >
                  WEALTH IN MOTION
                </span>
              </div>
              <p
                style={{
                  fontSize: '30px',
                  fontWeight: 700,
                  color: '#EFF6FF',
                  margin: '0 0 4px 0',
                }}
              >
                46%
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: '#E2E8F0',
                  margin: '0 0 6px 0',
                }}
              >
                of HNWIs are actively switching advisors now.
              </p>
              <p
                style={{
                  fontSize: '11px',
                  color: '#64748B',
                  margin: 0,
                }}
              >
                PwC 2024 – largest wealth migration in history.
              </p>
            </div>

            <div
              style={{
                padding: '16px 18px',
                borderRadius: '16px',
                background: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(45, 212, 191, 0.4)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '999px',
                    background:
                      'radial-gradient(circle at 30% 30%, rgba(45, 212, 191, 0.9), rgba(20, 184, 166, 0.45))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Globe size={18} color="#ECFEFF" />
                </div>
                <span
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#2DD4BF',
                    fontWeight: 600,
                  }}
                >
                  INDIA ACCESS
                </span>
              </div>
              <p
                style={{
                  fontSize: '30px',
                  fontWeight: 700,
                  color: '#ECFEFF',
                  margin: '0 0 4px 0',
                }}
              >
                $5T → $10T
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: '#E2E8F0',
                  margin: '0 0 6px 0',
                }}
              >
                India doubles by 2030, with 0% tax via GIFT for institutions.
              </p>
              <p
                style={{
                  fontSize: '11px',
                  color: '#64748B',
                  margin: 0,
                }}
              >
                You pay 35% as FPI while Goldman pays 0%.
              </p>
            </div>

            <div
              style={{
                padding: '16px 18px',
                borderRadius: '16px',
                background: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(129, 140, 248, 0.45)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '999px',
                    background:
                      'radial-gradient(circle at 30% 30%, rgba(129, 140, 248, 0.9), rgba(79, 70, 229, 0.4))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Brain size={18} color="#EEF2FF" />
                </div>
                <span
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#818CF8',
                    fontWeight: 600,
                  }}
                >
                  AI ADVANTAGE
                </span>
              </div>
              <p
                style={{
                  fontSize: '30px',
                  fontWeight: 700,
                  color: '#EEF2FF',
                  margin: '0 0 4px 0',
                }}
              >
                600%
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: '#E2E8F0',
                  margin: '0 0 6px 0',
                }}
              >
                AI portfolios have outperformed human managers by up to 6×.
              </p>
              <p
                style={{
                  fontSize: '11px',
                  color: '#64748B',
                  margin: 0,
                }}
              >
                Stanford 2024 – the game has changed.
              </p>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              marginTop: '8px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(148, 163, 184, 0.3)',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '16px',
                color: '#E5E7EB',
                margin: 0,
              }}
            >
              The 1% aren&apos;t smarter.
              <span style={{ color: '#38BDF8' }}> They have access and intelligence you don&apos;t.</span>{' '}
              <span style={{ color: '#2DD4BF', fontWeight: 600 }}>Until now.</span>
            </p>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide1HiddenOpportunityV8
