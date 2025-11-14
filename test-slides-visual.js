// Visual Testing Script for Redesigned Slides
// Run this in browser console at http://localhost:3001

const testSlides = async () => {
  console.log('🔍 Starting Visual Audit of Redesigned Slides...\n');
  
  const slideTests = [
    {
      slideNumber: 273,
      name: 'ExecutiveHookSlide',
      tests: [
        { selector: 'text', contains: '600%', description: '600% AI metric' },
        { selector: 'text', contains: '46%', description: '46% switching metric' },
        { selector: 'text', contains: 'AI Revolution', description: 'Title text' },
        { selector: 'text', contains: 'Stanford', description: 'Stanford reference' }
      ]
    },
    {
      slideNumber: 274,
      name: 'PerfectStormSlide',
      tests: [
        { selector: 'text', contains: 'Perfect Storm', description: 'Title' },
        { selector: 'text', contains: '600%', description: 'Stanford study' },
        { selector: 'text', contains: '$124T', description: 'Wealth transfer' },
        { selector: 'svg', exists: true, description: 'Sankey diagram' }
      ]
    },
    {
      slideNumber: 275,
      name: 'AdvisorCrisisSlide',
      tests: [
        { selector: 'text', contains: 'Advisor', description: 'Title' },
        { selector: 'text', contains: '1:500', description: 'Advisor ratio' },
        { selector: 'text', contains: 'HNW', description: 'Persona reference' },
        { selector: 'text', contains: '-8.4%', description: 'Alpha gap' }
      ]
    },
    {
      slideNumber: 276,
      name: 'ARIAatWorkSlide',
      tests: [
        { selector: 'text', contains: '$25M', description: 'Example amount' },
        { selector: 'text', contains: 'liquidity', description: 'Event type' },
        { selector: 'text', contains: '6 steps', description: 'Workflow steps' },
        { selector: 'div', className: 'agent', count: 4, description: '4 agents' }
      ]
    },
    {
      slideNumber: 277,
      name: 'ZerodhaIntelligence',
      tests: [
        { selector: 'text', contains: '₹15.7L', description: 'Annual alpha' },
        { selector: 'text', contains: '73%', description: 'Win rate' },
        { selector: 'button', contains: 'Concept', description: 'Tab 1' },
        { selector: 'button', contains: 'Features', description: 'Tab 2' },
        { selector: 'button', contains: 'Live', description: 'Tab 3' }
      ]
    },
    {
      slideNumber: 278,
      name: 'CGMFAdvisory',
      tests: [
        { selector: 'text', contains: '5,000', description: 'Funds analyzed' },
        { selector: 'text', contains: 'CGMF', description: 'Title' },
        { selector: 'button', contains: 'Concept', description: 'Tab interface' }
      ]
    },
    {
      slideNumber: 279,
      name: 'AgenticAICore',
      tests: [
        { selector: 'text', contains: '68+', description: 'Agent count' },
        { selector: 'text', contains: 'Agentic', description: 'Title' },
        { selector: 'button', contains: 'Features', description: 'Tab interface' }
      ]
    },
    {
      slideNumber: 280,
      name: 'AlgoTradingLab',
      tests: [
        { selector: 'text', contains: 'Algo', description: 'Title' },
        { selector: 'text', contains: 'Trading', description: 'Title cont' },
        { selector: 'text', contains: 'backtesting', description: 'Feature' }
      ]
    },
    {
      slideNumber: 281,
      name: 'TradingExecution',
      tests: [
        { selector: 'text', contains: '11ms', description: 'Execution speed' },
        { selector: 'text', contains: 'Execution', description: 'Title' }
      ]
    },
    {
      slideNumber: 282,
      name: 'SentimentAnalysis',
      tests: [
        { selector: 'text', contains: '100K', description: 'Articles/day' },
        { selector: 'text', contains: 'Sentiment', description: 'Title' }
      ]
    },
    {
      slideNumber: 283,
      name: 'FutureVision',
      tests: [
        { selector: 'text', contains: 'Future', description: 'Title' },
        { selector: 'text', contains: 'Roadmap', description: 'Content' }
      ]
    },
    {
      slideNumber: 284,
      name: 'ProofPointsGrid',
      tests: [
        { selector: 'text', contains: 'Proof Points', description: 'Title' },
        { selector: 'text', contains: 'Stanford', description: 'Academic proof' },
        { selector: 'text', contains: '1,250+', description: 'User count' },
        { selector: 'text', contains: '₹850Cr', description: 'AUM' }
      ]
    },
    {
      slideNumber: 285,
      name: 'CompetitiveMoats',
      tests: [
        { selector: 'text', contains: 'Defensive Moats', description: 'Title' },
        { selector: 'text', contains: 'India Gateway', description: 'Moat 1' },
        { selector: 'text', contains: '18', description: '18-month exclusive' },
        { selector: 'svg', exists: true, description: 'Castle visualization' }
      ]
    },
    {
      slideNumber: 286,
      name: 'BusinessModelComplete',
      tests: [
        { selector: 'text', contains: '$100M', description: 'ARR target' },
        { selector: 'text', contains: '50x', description: 'LTV/CAC' },
        { selector: 'text', contains: 'Month 18', description: 'Break-even' },
        { selector: 'svg', exists: true, description: 'Hockey stick chart' }
      ]
    },
    {
      slideNumber: 287,
      name: 'PartnershipEcosystem',
      tests: [
        { selector: 'text', contains: 'Partnership', description: 'Title' },
        { selector: 'text', contains: 'Vora', description: 'Partner 1' },
        { selector: 'text', contains: 'Ascendum', description: 'Partner 2' },
        { selector: 'svg', exists: true, description: 'Network visualization' }
      ]
    },
    {
      slideNumber: 288,
      name: 'FundingAsk',
      tests: [
        { selector: 'text', contains: '$5M', description: 'Funding amount' },
        { selector: 'text', contains: 'Seed Round', description: 'Round type' },
        { selector: 'text', contains: 'Use of Funds', description: 'Section' },
        { selector: 'svg', exists: true, description: 'Pie chart' }
      ]
    }
  ];

  const results = [];
  let totalTests = 0;
  let passedTests = 0;

  for (const slide of slideTests) {
    // Navigate to slide
    window.location.hash = `#/slide/${slide.slideNumber}`;
    
    // Wait for slide to load
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(`\n📍 Testing Slide ${slide.slideNumber}: ${slide.name}`);
    
    const slideResults = {
      slideNumber: slide.slideNumber,
      name: slide.name,
      tests: []
    };
    
    for (const test of slide.tests) {
      totalTests++;
      let passed = false;
      
      if (test.contains) {
        // Check if text contains specific string
        const elements = document.querySelectorAll('*');
        for (const el of elements) {
          if (el.textContent && el.textContent.includes(test.contains)) {
            passed = true;
            break;
          }
        }
      } else if (test.exists) {
        // Check if element exists
        const element = document.querySelector(test.selector);
        passed = !!element;
      } else if (test.className) {
        // Check for elements with specific class
        const elements = document.querySelectorAll(`.${test.className}`);
        passed = test.count ? elements.length >= test.count : elements.length > 0;
      }
      
      if (passed) {
        passedTests++;
        console.log(`  ✅ ${test.description}`);
      } else {
        console.log(`  ❌ ${test.description} - NOT FOUND`);
      }
      
      slideResults.tests.push({
        description: test.description,
        passed
      });
    }
    
    results.push(slideResults);
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 AUDIT SUMMARY');
  console.log('='.repeat(50));
  console.log(`Total Slides Tested: ${slideTests.length}`);
  console.log(`Total Tests Run: ${totalTests}`);
  console.log(`Tests Passed: ${passedTests}/${totalTests} (${Math.round(passedTests/totalTests*100)}%)`);
  
  // Failed tests summary
  const failedSlides = results.filter(r => r.tests.some(t => !t.passed));
  if (failedSlides.length > 0) {
    console.log('\n⚠️  SLIDES WITH FAILED TESTS:');
    failedSlides.forEach(slide => {
      const failed = slide.tests.filter(t => !t.passed);
      console.log(`  - ${slide.name}: ${failed.length} test(s) failed`);
      failed.forEach(t => console.log(`    • ${t.description}`));
    });
  } else {
    console.log('\n✅ ALL TESTS PASSED! World-class implementation confirmed.');
  }
  
  return results;
};

// Run the test
console.log('Copy and run this in browser console at http://localhost:3001:');
console.log('testSlides();');
