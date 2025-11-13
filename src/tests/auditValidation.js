/**
 * Audit Validation Script
 * Validates all fixes applied to slides
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SLIDES_DIR = path.join(__dirname, '../slides')

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
}

// Track validation results
let totalChecks = 0
let passedChecks = 0
let failedChecks = []
let warnings = []

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`)
}

function checkFile(filePath, checks) {
  const fileName = path.basename(filePath)
  log(`\n📄 Checking ${fileName}...`, colors.blue)
  
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    
    checks.forEach(check => {
      totalChecks++
      const result = check.test(content)
      
      if (result) {
        passedChecks++
        log(`  ✅ ${check.description}`, colors.green)
      } else if (check.warning) {
        warnings.push({ file: fileName, issue: check.description })
        log(`  ⚠️  ${check.description}`, colors.yellow)
      } else {
        failedChecks.push({ file: fileName, issue: check.description })
        log(`  ❌ ${check.description}`, colors.red)
      }
    })
  } catch (error) {
    log(`  ❌ Error reading file: ${error.message}`, colors.red)
    failedChecks.push({ file: fileName, issue: 'File read error' })
  }
}

// Define validation checks for each fixed slide
const slideChecks = {
  'AgentOrchestraSlide.jsx': [
    {
      description: 'Uses clamp() for agent node width',
      test: content => content.includes("width: 'clamp(150px, 15vw, 200px)'")
    },
    {
      description: 'Uses clamp() for padding',
      test: content => content.includes("padding: 'clamp(0.5rem, 1vw, 1rem)'")
    },
    {
      description: 'No fixed width: 200px remaining',
      test: content => !content.includes("width: '200px'")
    },
    {
      description: 'Uses pxToRem for border radius',
      test: content => content.includes('borderRadius: pxToRem')
    }
  ],
  
  'ARIASwarmSlide.jsx': [
    {
      description: 'Uses clamp() for central orchestrator width',
      test: content => content.includes("width: 'clamp(180px, 20vw, 240px)'")
    },
    {
      description: 'Uses clamp() for central orchestrator height',
      test: content => content.includes("height: 'clamp(180px, 20vw, 240px)'")
    },
    {
      description: 'No fixed 240px dimensions',
      test: content => !content.includes("width: '240px'") && !content.includes("height: '240px'")
    }
  ],
  
  'AdvisorShortageSlide.jsx': [
    {
      description: 'Fixed right positioning (no negative overflow)',
      test: content => content.includes("right: '2%'")
    },
    {
      description: 'No right: \'-10%\' remaining',
      test: content => !content.includes("right: '-10%'")
    },
    {
      description: 'Uses pxToRem for responsive spacing',
      test: content => content.includes('pxToRem')
    }
  ],
  
  'StanfordSlide.jsx': [
    {
      description: 'Reduced negative top positioning',
      test: content => content.includes('top: pxToRem(-25)') || content.includes('pxToRem(-25)')
    },
    {
      description: 'No excessive negative positioning (-30)',
      test: content => !content.includes('pxToRem(-30)')
    },
    {
      description: 'Font size adjusted for labels',
      test: content => content.includes("fontSize: '1rem'") || content.includes('fontSize: \'1.1rem\'')
    }
  ],
  
  'ProductOverviewSlide.jsx': [
    {
      description: 'Has SVG viewBox attribute',
      test: content => content.includes('viewBox=')
    },
    {
      description: 'Uses percentage widths',
      test: content => content.includes("width: '75%'") || content.includes('width: \'100%\'')
    },
    {
      description: 'Uses maxHeight constraint',
      test: content => content.includes('maxHeight'),
      warning: true
    }
  ]
}

// Additional general checks for all slides
const generalChecks = [
  {
    description: 'No console.log statements',
    test: content => !content.includes('console.log'),
    warning: true
  },
  {
    description: 'Imports responsive utilities',
    test: content => content.includes('pxToRem') || content.includes('responsive'),
    warning: true
  },
  {
    description: 'No inline styles with fixed large pixels (>500px)',
    test: content => {
      const largePixelPattern = /\d{3,}px/g
      const matches = content.match(largePixelPattern)
      if (!matches) return true
      
      // Check if any match is over 500
      return !matches.some(match => {
        const value = parseInt(match.replace('px', ''))
        return value > 500
      })
    }
  },
  {
    description: 'Uses responsive units (rem, em, %, vw, vh)',
    test: content => {
      return content.includes('rem') || 
             content.includes('vw') || 
             content.includes('vh') || 
             content.includes('%')
    },
    warning: true
  }
]

// Run validation
log('\n🔍 SLIDE UI/UX AUDIT VALIDATION', colors.blue)
log('=====================================\n', colors.blue)

// Check specific fixed slides
Object.entries(slideChecks).forEach(([fileName, checks]) => {
  const filePath = path.join(SLIDES_DIR, fileName)
  checkFile(filePath, [...checks, ...generalChecks])
})

// Also validate some of the new appendix slides
const appendixSlides = [
  'ThreeFailuresComparisonSlide.jsx',
  'AlternativeAssetAgentSlide.jsx',
  'AIInvestmentCommitteeSlide.jsx',
  'ThreeAlphaAgentsMoatSlide.jsx'
]

log('\n📑 Checking New Appendix Slides...', colors.blue)
appendixSlides.forEach(fileName => {
  const filePath = path.join(SLIDES_DIR, fileName)
  if (fs.existsSync(filePath)) {
    checkFile(filePath, generalChecks)
  } else {
    log(`  ⚠️  ${fileName} not found`, colors.yellow)
  }
})

// Summary Report
log('\n=====================================', colors.blue)
log('📊 VALIDATION SUMMARY', colors.blue)
log('=====================================\n', colors.blue)

log(`Total Checks: ${totalChecks}`)
log(`Passed: ${passedChecks} ✅`, colors.green)
log(`Failed: ${failedChecks.length} ❌`, colors.red)
log(`Warnings: ${warnings.length} ⚠️`, colors.yellow)

if (failedChecks.length > 0) {
  log('\n❌ Failed Checks:', colors.red)
  failedChecks.forEach(({ file, issue }) => {
    log(`  • ${file}: ${issue}`, colors.red)
  })
}

if (warnings.length > 0) {
  log('\n⚠️  Warnings:', colors.yellow)
  warnings.forEach(({ file, issue }) => {
    log(`  • ${file}: ${issue}`, colors.yellow)
  })
}

// Performance checks
log('\n⚡ Performance Analysis:', colors.blue)

// Check file sizes
const checkFileSize = (fileName) => {
  const filePath = path.join(SLIDES_DIR, fileName)
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath)
    const sizeInKB = (stats.size / 1024).toFixed(2)
    
    if (sizeInKB > 20) {
      log(`  ⚠️  ${fileName}: ${sizeInKB}KB (consider optimization)`, colors.yellow)
    } else {
      log(`  ✅ ${fileName}: ${sizeInKB}KB`, colors.green)
    }
  }
}

Object.keys(slideChecks).forEach(checkFileSize)

// Final status
const exitCode = failedChecks.length > 0 ? 1 : 0
log('\n' + (exitCode === 0 ? '✨ All critical checks passed!' : '❌ Some checks failed. Please review.'), 
    exitCode === 0 ? colors.green : colors.red)

process.exit(exitCode)
