import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientText from './GradientText';
import './StandardLayouts.css';

// Shared AspectFrame wrapper - simple container for presentation slides
export const AspectFrame = ({ children }) => (
  <div className="standard-layout-scene">
    <div className="standard-layout-container">
      {children}
    </div>
  </div>
);

// Template 1: Act Slide Layout - Full width with side panels
export const ActSlideLayout = ({ 
  actNumber, 
  title, 
  subtitle, 
  mainContent, 
  sideMetrics, 
  bottomPoints,
  particles 
}) => (
  <AspectFrame>
    <div className="act-layout" style={{ overflow: 'hidden' }}>
        {particles}
        <div className="act-grid" style={{ flexWrap: 'wrap', overflow: 'hidden' }}>
      <div className="act-left" style={{ overflow: 'hidden' }}>
        <motion.div 
          className="act-number"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          {actNumber}
        </motion.div>
        <div className="act-progress-indicator" />
      </div>
      
      <div className="act-center" style={{ overflow: 'hidden' }}>
        <motion.h1 
          className="act-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
        >
          <GradientText>{title}</GradientText>
        </motion.h1>
        <AnimatePresence>
          {subtitle && (
            <motion.h2 
              className="act-subtitle"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}
            >
              {subtitle}
            </motion.h2>
          )}
        </AnimatePresence>
        <motion.div 
          className="act-main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ overflow: 'auto' }}
        >
          {mainContent}
        </motion.div>
      </div>
      
      <div className="act-right" style={{ overflow: 'auto' }}>
        <motion.div 
          className="act-metrics"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {sideMetrics}
        </motion.div>
      </div>
    </div>
    
    <AnimatePresence>
      {bottomPoints && (
        <motion.div 
          className="act-bottom-points"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ overflow: 'auto' }}
        >
          {bottomPoints}
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  </AspectFrame>
);

// Template 2: Data Presentation - Visual left, insights right
export const DataSlideLayout = ({ 
  title, 
  mainVisual, 
  keyInsights, 
  supportingData, 
  citation,
  particles 
}) => (
  <AspectFrame>
    <div className="data-layout" style={{ overflow: 'hidden' }}>
    {particles}
    <motion.div 
      className="data-header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ flexShrink: 0 }}
    >
      <h1 className="data-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}>
        <GradientText>{title}</GradientText>
      </h1>
    </motion.div>
    
    <div className="data-grid" style={{ flexWrap: 'wrap', overflow: 'hidden' }}>
      <motion.div 
        className="data-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ overflow: 'hidden' }}
      >
        {mainVisual}
      </motion.div>
      
      <motion.div 
        className="data-insights"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ overflow: 'auto' }}
      >
        {keyInsights}
        {supportingData && (
          <div className="data-supporting" style={{ maxWidth: '100%' }}>{supportingData}</div>
        )}
      </motion.div>
    </div>
    
    <AnimatePresence>
      {citation && (
        <motion.div 
          className="data-citation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)', flexShrink: 0 }}
        >
          {citation}
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  </AspectFrame>
);

// Template 3: Comparison Layout - Side by side with VS
export const ComparisonLayout = ({ 
  title,
  subtitle,
  leftOption, 
  rightOption, 
  leftDetails, 
  rightDetails, 
  summary,
  particles 
}) => (
  <AspectFrame>
    <div className="comparison-layout" style={{ maxHeight: '88vh', overflow: 'hidden' }}>
    {particles}
    <motion.h1 
      className="comparison-title"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', flexShrink: 0 }}
    >
      <GradientText>{title}</GradientText>
    </motion.h1>
    
    <AnimatePresence>
      {subtitle && (
        <motion.div 
          className="comparison-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', flexShrink: 0 }}
        >
          {subtitle}
        </motion.div>
      )}
    </AnimatePresence>
    
    <div className="comparison-grid" style={{ flexWrap: 'wrap', maxHeight: 'calc(88vh - 10rem)', overflow: 'hidden' }}>
      <motion.div 
        className="comparison-left glass-card"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ maxWidth: '45%', maxHeight: '100%', overflow: 'auto' }}
      >
        <div className="comparison-option-title" role="heading" aria-level="2" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>{leftOption}</div>
        <div className="comparison-details" style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}>{leftDetails}</div>
      </motion.div>
      
      <motion.div 
        className="comparison-vs"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        style={{ flexShrink: 0 }}
      >
        <span className="vs-text" style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}>VS</span>
      </motion.div>
      
      <motion.div 
        className="comparison-right glass-card"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ maxWidth: '45%', maxHeight: '100%', overflow: 'auto' }}
      >
        <div className="comparison-option-title" role="heading" aria-level="2" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>{rightOption}</div>
        <div className="comparison-details" style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}>{rightDetails}</div>
      </motion.div>
    </div>
    
    <AnimatePresence>
      {summary && (
        <motion.div 
          className="comparison-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)', maxHeight: '10vh', overflow: 'auto', flexShrink: 0 }}
        >
          {summary}
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  </AspectFrame>
);

// Template 4: Grid Layout - Multiple cards in grid
export const GridLayout = ({ 
  title, 
  subtitle,
  cards, 
  columns = 3,
  summary,
  particles 
}) => (
  <AspectFrame>
    <div className="grid-layout" style={{ maxHeight: '88vh', overflow: 'hidden' }}>
    {particles}
    <motion.div 
      className="grid-header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ flexShrink: 0 }}
    >
      <h1 className="grid-title" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
        <GradientText>{title}</GradientText>
      </h1>
      {subtitle && <div className="grid-subtitle" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>{subtitle}</div>}
    </motion.div>
    
    <div 
      className="grid-cards"
      style={{ 
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        maxHeight: 'calc(88vh - 10rem)',
        overflow: 'auto',
        flexWrap: 'wrap'
      }}
    >
      {cards.map((card, index) => (
        <motion.div 
          key={index}
          className="grid-card glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.1 * index,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          style={{ maxWidth: '90%', overflow: 'hidden' }}
        >
          {card}
        </motion.div>
      ))}
    </div>
    
    <AnimatePresence>
      {summary && (
        <motion.div 
          className="grid-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)', flexShrink: 0 }}
        >
          {summary}
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  </AspectFrame>
);

// Template 5: Financial/Table Layout - Full width tables
export const TableLayout = ({ 
  title, 
  subtitle,
  tableContent, 
  metrics,
  notes,
  particles 
}) => (
  <AspectFrame>
    <div className="table-layout" style={{ maxHeight: '88vh', overflow: 'hidden' }}>
    {particles}
    <motion.div 
      className="table-header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ flexShrink: 0 }}
    >
      <h1 className="table-title" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
        <GradientText>{title}</GradientText>
      </h1>
      {subtitle && <div className="table-subtitle" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>{subtitle}</div>}
    </motion.div>
    
    <motion.div 
      className="table-content"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{ maxHeight: 'calc(88vh - 12rem)', overflow: 'auto' }}
    >
      {tableContent}
    </motion.div>
    
    {metrics && (
      <div className="table-metrics" style={{ flexWrap: 'wrap', flexShrink: 0 }}>
        {metrics.map((metric, index) => (
          <motion.div 
            key={index}
            className="metric-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            style={{ maxWidth: '30%', overflow: 'hidden' }}
          >
            {metric}
          </motion.div>
        ))}
      </div>
    )}
    
    <AnimatePresence>
      {notes && (
        <motion.div 
          className="table-notes"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)', flexShrink: 0 }}
        >
          {notes}
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  </AspectFrame>
);

// Template 6: Hero/Feature Layout - Big visual with text overlay
export const HeroLayout = ({ 
  title, 
  subtitle,
  backgroundVisual,
  overlayContent,
  ctaButton,
  particles 
}) => (
  <AspectFrame>
    <div className="hero-layout" style={{ maxHeight: '88vh', overflow: 'hidden' }}>
    {particles}
    {backgroundVisual && (
      <div className="hero-background" style={{ maxHeight: '88vh', overflow: 'hidden' }}>
        {backgroundVisual}
      </div>
    )}
    
    <div className="hero-content" style={{ maxHeight: '88vh', overflow: 'auto', display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', flexShrink: 0 }}
      >
        {title}
      </motion.h1>
      
      <AnimatePresence>
        {subtitle && (
          <motion.div 
            className="hero-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', flexShrink: 0, maxWidth: '85%' }}
          >
            {subtitle}
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {overlayContent && (
          <motion.div 
            className="hero-overlay-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ maxWidth: '90%', maxHeight: 'calc(88vh - 15rem)', overflow: 'auto', flexWrap: 'wrap' }}
          >
            {overlayContent}
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {ctaButton && (
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ flexShrink: 0 }}
          >
            {ctaButton}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  </AspectFrame>
);

export default {
  AspectFrame,
  ActSlideLayout,
  DataSlideLayout,
  ComparisonLayout,
  GridLayout,
  TableLayout,
  HeroLayout
};