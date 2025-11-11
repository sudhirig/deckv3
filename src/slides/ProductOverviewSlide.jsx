import { motion } from 'framer-motion'
import { useLayoutEffect } from 'react'
import { GridLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function ProductOverviewSlide() {
  // Override GridLayout constraints to fill viewport (scoped to this slide only)
  useLayoutEffect(() => {
    // Use querySelectorAll to handle multiple instances and scope to this slide only
    const gridLayouts = document.querySelectorAll('.product-overview-slide .grid-layout')
    const gridCardsAll = document.querySelectorAll('.product-overview-slide .grid-cards')
    const gridSummaries = document.querySelectorAll('.product-overview-slide .grid-summary')
    
    // Store original styles for cleanup
    const originalStyles = {
      layouts: [],
      cards: [],
      summaries: []
    }
    
    // Apply overrides to all grid-layout elements
    gridLayouts.forEach((gridLayout, index) => {
      originalStyles.layouts[index] = {
        maxHeight: gridLayout.style.maxHeight,
        height: gridLayout.style.height,
        gap: gridLayout.style.gap
      }
      gridLayout.style.maxHeight = '100%'
      gridLayout.style.height = '100%'
      gridLayout.style.gap = 'clamp(1.5rem, 2.5vh, 2.5rem)'
    })
    
    // Apply overrides to all grid-cards elements
    gridCardsAll.forEach((gridCards, index) => {
      originalStyles.cards[index] = {
        maxHeight: gridCards.style.maxHeight,
        height: gridCards.style.height,
        flex: gridCards.style.flex,
        alignContent: gridCards.style.alignContent,
        gridAutoRows: gridCards.style.gridAutoRows,
        gap: gridCards.style.gap
      }
      gridCards.style.maxHeight = 'none'
      gridCards.style.height = 'auto'
      gridCards.style.flex = '1'
      gridCards.style.alignContent = 'stretch'
      gridCards.style.gridAutoRows = 'minmax(14vh, 1fr)'
      gridCards.style.gap = 'clamp(1.2rem, 2vh, 2rem)'
    })
    
    // Apply overrides to all grid-summary elements
    gridSummaries.forEach((gridSummary, index) => {
      originalStyles.summaries[index] = {
        flexGrow: gridSummary.style.flexGrow,
        flexShrink: gridSummary.style.flexShrink,
        flexBasis: gridSummary.style.flexBasis
      }
      gridSummary.style.flexGrow = '0'
      gridSummary.style.flexShrink = '0'
      gridSummary.style.flexBasis = 'auto'
    })
    
    // Cleanup function to restore original styles on unmount
    return () => {
      gridLayouts.forEach((gridLayout, index) => {
        if (originalStyles.layouts[index]) {
          gridLayout.style.maxHeight = originalStyles.layouts[index].maxHeight
          gridLayout.style.height = originalStyles.layouts[index].height
          gridLayout.style.gap = originalStyles.layouts[index].gap
        }
      })
      
      gridCardsAll.forEach((gridCards, index) => {
        if (originalStyles.cards[index]) {
          gridCards.style.maxHeight = originalStyles.cards[index].maxHeight
          gridCards.style.height = originalStyles.cards[index].height
          gridCards.style.flex = originalStyles.cards[index].flex
          gridCards.style.alignContent = originalStyles.cards[index].alignContent
          gridCards.style.gridAutoRows = originalStyles.cards[index].gridAutoRows
          gridCards.style.gap = originalStyles.cards[index].gap
        }
      })
      
      gridSummaries.forEach((gridSummary, index) => {
        if (originalStyles.summaries[index]) {
          gridSummary.style.flexGrow = originalStyles.summaries[index].flexGrow
          gridSummary.style.flexShrink = originalStyles.summaries[index].flexShrink
          gridSummary.style.flexBasis = originalStyles.summaries[index].flexBasis
        }
      })
    }
  }, [])

  // Title
  const title = (
    <GradientText gradient="from-purple-400 via-blue-400 to-cyan-400">
      The Complete AI Family Office Suite
    </GradientText>
  )
  
  // Subtitle
  const subtitle = "7 Operational Modules • 68+ AI Agents • 100% Live Today"

  // Grid cards - Command Center + 7 modules
  const cards = [
    // 30-Agent Command Center (spanning card)
    <motion.div
      key="command-center"
      whileHover={{ scale: 1.02 }}
      style={{ 
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.1))',
        border: `${pxToRem(2)} solid rgba(147, 51, 234, 0.3)`,
        borderRadius: pxToRem(16),
        boxShadow: '0 4px 16px rgba(147, 51, 234, 0.2)',
        minHeight: '14vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Icon type="bot" size={42} variant="inline" gradient="from-purple-400 to-blue-400" />
      <h3 style={{ 
        fontSize: '1.6rem',
        color: '#a78bfa',
        margin: '1rem 0 0.6rem',
        fontWeight: 700,
        textAlign: 'center'
      }}>
        30-Agent Command Center
      </h3>
      <p style={{ 
        fontSize: '1.15rem',
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        margin: 0,
        lineHeight: '1.6'
      }}>
        12 Investment Committee<br/>
        18 Hedge Fund Team
      </p>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        marginTop: '1rem'
      }}>
        <div style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: '#4ade80',
          animation: 'pulse 2s infinite'
        }} />
        <span style={{ color: '#4ade80', fontSize: '1.05rem', fontWeight: 600 }}>LIVE</span>
      </div>
    </motion.div>,
    
    // Module 1: Voice Trading
    <motion.div
      key="voice-trading"
      whileHover={{ scale: 1.02 }}
      style={{ 
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.12), rgba(251, 191, 36, 0.08))',
        border: `${pxToRem(1.5)} solid rgba(249, 115, 22, 0.25)`,
        borderRadius: pxToRem(12),
        minHeight: '14vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Icon type="zap" size={32} variant="inline" gradient="from-orange-400 to-amber-400" />
      <h4 style={{ fontSize: '1.5rem', color: '#fb923c', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
        Voice Trading
      </h4>
      <div style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
        • 11ms latency<br/>
        • 3 languages<br/>
        • Zerodha API
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
        <span style={{ color: '#4ade80', fontSize: '1rem' }}>LIVE</span>
      </div>
    </motion.div>,
    
    // Module 2: CGMF Mutual Funds
    <motion.div
      key="cgmf-advisory"
      whileHover={{ scale: 1.02 }}
      style={{ 
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.12), rgba(20, 184, 166, 0.08))',
        border: `${pxToRem(1.5)} solid rgba(34, 197, 94, 0.25)`,
        borderRadius: pxToRem(12),
        minHeight: '14vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Icon type="trending" size={32} variant="inline" gradient="from-green-400 to-emerald-400" />
      <h4 style={{ fontSize: '1.5rem', color: '#4ade80', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
        CGMF Advisory
      </h4>
      <div style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
        • 16,766 funds<br/>
        • 43 AMCs<br/>
        • AI picks
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
        <span style={{ color: '#4ade80', fontSize: '1rem' }}>LIVE</span>
      </div>
    </motion.div>,
    
    // Module 3: GIFT City Gateway
    <motion.div
      key="gift-city"
      whileHover={{ scale: 1.02 }}
      style={{ 
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.12), rgba(219, 39, 119, 0.08))',
        border: `${pxToRem(1.5)} solid rgba(236, 72, 153, 0.25)`,
        borderRadius: pxToRem(12),
        minHeight: '14vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Icon type="globe" size={32} variant="inline" gradient="from-pink-400 to-rose-400" />
      <h4 style={{ fontSize: '1.5rem', color: '#ec4899', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
        GIFT City
      </h4>
      <div style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
        • $5T TAM<br/>
        • Tax-free<br/>
        • Moat
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24' }} />
        <span style={{ color: '#fbbf24', fontSize: '1rem' }}>Q1'25</span>
      </div>
    </motion.div>,
    
    // Module 4: Algo Trading
    <motion.div
      key="algo-lab"
      whileHover={{ scale: 1.02 }}
      style={{ 
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(96, 165, 250, 0.08))',
        border: `${pxToRem(1.5)} solid rgba(59, 130, 246, 0.25)`,
        borderRadius: pxToRem(12),
        minHeight: '14vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Icon type="barChart" size={32} variant="inline" gradient="from-blue-400 to-cyan-400" />
      <h4 style={{ fontSize: '1.5rem', color: '#60a5fa', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
        Algo Lab
      </h4>
      <div style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
        • 122 signals<br/>
        • Backtest<br/>
        • Risk mgmt
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
        <span style={{ color: '#4ade80', fontSize: '1rem' }}>LIVE</span>
      </div>
    </motion.div>,
    
    // Module 5: Sentiment Intelligence
    <motion.div
      key="sentiment-intel"
      whileHover={{ scale: 1.02 }}
      style={{ 
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(139, 92, 246, 0.08))',
        border: `${pxToRem(1.5)} solid rgba(168, 85, 247, 0.25)`,
        borderRadius: pxToRem(12),
        minHeight: '14vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Icon type="search" size={32} variant="inline" gradient="from-purple-400 to-pink-400" />
      <h4 style={{ fontSize: '1.5rem', color: '#a78bfa', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
        Sentiment Intel
      </h4>
      <div style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
        • Real-time<br/>
        • 5 sources<br/>
        • Predictive
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
        <span style={{ color: '#4ade80', fontSize: '1rem' }}>LIVE</span>
      </div>
    </motion.div>,
    
    // Module 6: AI DD & Research
    <motion.div
      key="ai-research"
      whileHover={{ scale: 1.02 }}
      style={{ 
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.12), rgba(34, 197, 94, 0.08))',
        border: `${pxToRem(1.5)} solid rgba(20, 184, 166, 0.25)`,
        borderRadius: pxToRem(12),
        minHeight: '14vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Icon type="fileText" size={32} variant="inline" gradient="from-teal-400 to-green-400" />
      <h4 style={{ fontSize: '1.5rem', color: '#5eead4', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
        AI Research
      </h4>
      <div style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
        • Deep DD<br/>
        • Auto reports<br/>
        • Insights
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
        <span style={{ color: '#4ade80', fontSize: '1rem' }}>LIVE</span>
      </div>
    </motion.div>,
    
    // Module 7: Tax Optimization
    <motion.div
      key="tax-alpha"
      whileHover={{ scale: 1.02 }}
      style={{ 
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.12), rgba(249, 115, 22, 0.08))',
        border: `${pxToRem(1.5)} solid rgba(251, 191, 36, 0.25)`,
        borderRadius: pxToRem(12),
        minHeight: '14vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Icon type="wallet" size={32} variant="inline" gradient="from-yellow-400 to-orange-400" />
      <h4 style={{ fontSize: '1.5rem', color: '#fbbf24', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
        Tax Alpha
      </h4>
      <div style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
        • 3.2% alpha<br/>
        • Daily harvest<br/>
        • Auto-switch
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24' }} />
        <span style={{ color: '#fbbf24', fontSize: '1rem' }}>Q2'25</span>
      </div>
    </motion.div>
  ]

  // Summary section with metrics, moats, and tech stack
  const summary = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        paddingTop: '1rem'
      }}
    >
      {/* Metrics Bar */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        padding: '1.5rem 2rem',
        background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))',
        borderRadius: pxToRem(12),
        border: `${pxToRem(1)} solid rgba(59, 130, 246, 0.3)`
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#60a5fa' }}>$10M</div>
          <div style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)' }}>AUM</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4ade80' }}>5+</div>
          <div style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)' }}>Clients</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fbbf24' }}>25%</div>
          <div style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)' }}>Outperformance</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4ade80' }}>100%</div>
          <div style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)' }}>Live</div>
        </div>
      </div>

      {/* Bottom Row: Moats and Tech Stack */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
        {/* Moat Badges */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              padding: '0.7rem 1.3rem',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))',
              border: `${pxToRem(1)} solid rgba(59, 130, 246, 0.3)`,
              borderRadius: pxToRem(8),
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <Icon type="lock" size={20} variant="inline" gradient="from-blue-400 to-cyan-400" />
            <span style={{ fontSize: '1.05rem', color: '#60a5fa', fontWeight: 600 }}>Tech Moat</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              padding: '0.7rem 1.3rem',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))',
              border: `${pxToRem(1)} solid rgba(34, 197, 94, 0.3)`,
              borderRadius: pxToRem(8),
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <Icon type="scale" size={20} variant="inline" gradient="from-green-400 to-emerald-400" />
            <span style={{ fontSize: '1.05rem', color: '#4ade80', fontWeight: 600 }}>Regulatory</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              padding: '0.7rem 1.3rem',
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.1))',
              border: `${pxToRem(1)} solid rgba(20, 184, 166, 0.3)`,
              borderRadius: pxToRem(8),
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <Icon type="shield" size={20} variant="inline" gradient="from-teal-400 to-green-400" />
            <span style={{ fontSize: '1.05rem', color: '#5eead4', fontWeight: 600 }}>Trust</span>
          </motion.div>
        </div>
        
        {/* Tech Stack */}
        <div style={{ 
          fontSize: '1.05rem',
          color: 'rgba(255, 255, 255, 0.6)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem'
        }}>
          <span>Powered by:</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            NextJS • Python • AWS • MongoDB • Claude AI • OpenAI
          </span>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="product-overview-slide">
      <GridLayout
        title={title}
        subtitle={subtitle}
        columns={4}
        cards={cards}
        summary={summary}
      />
    </div>
  )
}