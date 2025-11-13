import React from 'react'
import { pxToRem } from '../utils/responsive'

export default function PrintView({ slides, slideComponents }) {
  return (
    <div className="print-view" style={{ display: 'none' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          .print-view {
            display: block !important;
            width: 100% !important;
          }
          
          .screen-view {
            display: none !important;
          }
          
          .print-page {
            width: 100%;
            height: 100vh;
            page-break-after: always;
            page-break-inside: avoid;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
          }
          
          .print-page:last-child {
            page-break-after: auto;
          }
          
          .print-slide-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: scale(0.95);
            transform-origin: center center;
          }
          
          .print-slide-inner {
            width: 100%;
            height: 100%;
            max-width: calc(100vh * 1.77778);
            position: relative;
          }
          
          /* Ensure content doesn't get cut off */
          .print-page * {
            max-width: 100% !important;
            overflow: visible !important;
          }
          
          /* Scale down large content */
          .print-page h1 {
            font-size: min(3.5rem, 4vw) !important;
          }
          
          .print-page h2 {
            font-size: min(2.5rem, 3vw) !important;
          }
          
          .print-page h3 {
            font-size: min(2rem, 2.5vw) !important;
          }
          
          .print-page p,
          .print-page li {
            font-size: min(1.25rem, 1.5vw) !important;
          }
          
          /* Footer for each page */
          .print-footer {
            position: absolute;
            bottom: ${pxToRem(20)};
            left: ${pxToRem(40)};
            right: ${pxToRem(40)};
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: ${pxToRem(12)};
            color: #64748b;
            border-top: 1px solid rgba(148, 163, 184, 0.1);
            padding-top: ${pxToRem(10)};
          }
          
          .print-footer-title {
            color: #14b8a6;
            font-weight: 600;
          }
          
          .print-footer-page {
            color: #94a3b8;
          }
        }
      `}} />
      
      {slides.map((slide, index) => {
        const SlideComponent = slideComponents[index]
        return (
          <div key={index} className="print-page">
            <div className="print-slide-container">
              <div className="print-slide-inner">
                <SlideComponent />
              </div>
            </div>
            <div className="print-footer">
              <span className="print-footer-title">ARIA - The Virtuoso Intelligence</span>
              <span className="print-footer-page">Slide {index + 1} of {slides.length}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
