import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
    <div className="act-layout">
        {particles}
        <div className="act-grid">
      <div className="act-left">
        <motion.div 
          className="act-number"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {actNumber}
        </motion.div>
        <div className="act-progress-indicator" />
      </div>
      
      <div className="act-center">
        <motion.h1 
          className="act-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GradientText>{title}</GradientText>
        </motion.h1>
        {subtitle && (
          <motion.h2 
            className="act-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {subtitle}
          </motion.h2>
        )}
        <motion.div 
          className="act-main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {mainContent}
        </motion.div>
      </div>
      
      <div className="act-right">
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
    
    {bottomPoints && (
      <motion.div 
        className="act-bottom-points"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {bottomPoints}
      </motion.div>
    )}
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
    <div className="data-layout">
    {particles}
    <motion.div 
      className="data-header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="data-title">
        <GradientText>{title}</GradientText>
      </h1>
    </motion.div>
    
    <div className="data-grid">
      <motion.div 
        className="data-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {mainVisual}
      </motion.div>
      
      <motion.div 
        className="data-insights"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {keyInsights}
        {supportingData && (
          <div className="data-supporting">{supportingData}</div>
        )}
      </motion.div>
    </div>
    
    {citation && (
      <motion.div 
        className="data-citation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {citation}
      </motion.div>
    )}
    </div>
  </AspectFrame>
);

// Template 3: Comparison Layout - Side by side with VS
export const ComparisonLayout = ({ 
  title, 
  leftOption, 
  rightOption, 
  leftDetails, 
  rightDetails, 
  summary,
  particles 
}) => (
  <AspectFrame>
    <div className="comparison-layout">
    {particles}
    <motion.h1 
      className="comparison-title"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <GradientText>{title}</GradientText>
    </motion.h1>
    
    <div className="comparison-grid">
      <motion.div 
        className="comparison-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="comparison-option-title" role="heading" aria-level="2">{leftOption}</div>
        <div className="comparison-details">{leftDetails}</div>
      </motion.div>
      
      <motion.div 
        className="comparison-vs"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
      >
        <span className="vs-text">VS</span>
      </motion.div>
      
      <motion.div 
        className="comparison-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="comparison-option-title" role="heading" aria-level="2">{rightOption}</div>
        <div className="comparison-details">{rightDetails}</div>
      </motion.div>
    </div>
    
    {summary && (
      <motion.div 
        className="comparison-summary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {summary}
      </motion.div>
    )}
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
    <div className="grid-layout">
    {particles}
    <motion.div 
      className="grid-header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="grid-title">
        <GradientText>{title}</GradientText>
      </h1>
      {subtitle && <div className="grid-subtitle">{subtitle}</div>}
    </motion.div>
    
    <div 
      className="grid-cards"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
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
        >
          {card}
        </motion.div>
      ))}
    </div>
    
    {summary && (
      <motion.div 
        className="grid-summary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {summary}
      </motion.div>
    )}
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
    <div className="table-layout">
    {particles}
    <motion.div 
      className="table-header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="table-title">
        <GradientText>{title}</GradientText>
      </h1>
      {subtitle && <div className="table-subtitle">{subtitle}</div>}
    </motion.div>
    
    <motion.div 
      className="table-content"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {tableContent}
    </motion.div>
    
    {metrics && (
      <div className="table-metrics">
        {metrics.map((metric, index) => (
          <motion.div 
            key={index}
            className="metric-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
          >
            {metric}
          </motion.div>
        ))}
      </div>
    )}
    
    {notes && (
      <motion.div 
        className="table-notes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {notes}
      </motion.div>
    )}
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
    <div className="hero-layout">
    {particles}
    {backgroundVisual && (
      <div className="hero-background">
        {backgroundVisual}
      </div>
    )}
    
    <div className="hero-content">
      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        {title}
      </motion.h1>
      
      {subtitle && (
        <motion.div 
          className="hero-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.div>
      )}
      
      {overlayContent && (
        <motion.div 
          className="hero-overlay-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {overlayContent}
        </motion.div>
      )}
      
      {ctaButton && (
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {ctaButton}
        </motion.div>
      )}
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