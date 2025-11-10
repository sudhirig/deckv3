// Centralized Act configuration for navigation and metadata
// 
// This configuration provides a single source of truth for all Act-related metadata
// used throughout the presentation including:
// - Act dropdown navigation
// - Clickable agenda cards
// - Progress indicators
// - Section labels
//
// Schema:
// - id: Unique identifier for the Act
// - name: Full display name (e.g., "Act 1: Problem")
// - shortName: Abbreviated name for compact displays (e.g., "Act 1")
// - startSlide: Zero-indexed slide number where this Act begins
// - color: Hex color for borders, text highlights, and active states
// - gradient: Tailwind gradient class for backgrounds and text gradients
//
// To add a new Act:
// 1. Add entry to this array with all required properties
// 2. Update getSlideSection() and getActProgress() in App.jsx if needed
// 3. Verify ActDropdown renders the new section correctly
export const ACTS = [
  {
    id: 'opening',
    name: 'Opening',
    shortName: 'Intro',
    startSlide: 0,
    color: '#64748b',
    gradient: 'from-slate-400 to-gray-400'
  },
  {
    id: 'act1',
    name: 'Act 1: Problem',
    shortName: 'Act 1',
    startSlide: 3,
    color: '#ef4444',
    gradient: 'from-red-400 to-orange-400'
  },
  {
    id: 'act2',
    name: 'Act 2: Solution',
    shortName: 'Act 2',
    startSlide: 7,
    color: '#14b8a6',
    gradient: 'from-teal-400 to-green-400'
  },
  {
    id: 'act3',
    name: 'Act 3: Deep Dive',
    shortName: 'Act 3',
    startSlide: 11,
    color: '#3b82f6',
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    id: 'act4',
    name: 'Act 4: Proof',
    shortName: 'Act 4',
    startSlide: 18,
    color: '#a78bfa',
    gradient: 'from-purple-400 to-pink-400'
  },
  {
    id: 'act5',
    name: 'Act 5: Business',
    shortName: 'Act 5',
    startSlide: 25,
    color: '#fbbf24',
    gradient: 'from-yellow-400 to-orange-400'
  },
  {
    id: 'act6',
    name: 'Act 6: GIFT City',
    shortName: 'Act 6',
    startSlide: 53,
    color: '#10b981',
    gradient: 'from-green-400 to-emerald-400'
  },
  {
    id: 'appendix',
    name: 'Product Appendix',
    shortName: 'Appendix',
    startSlide: 63,
    color: '#8b5cf6',
    gradient: 'from-violet-400 to-purple-400'
  }
]

// Helper function to get Act by slide index
export const getActBySlide = (slideIndex) => {
  for (let i = ACTS.length - 1; i >= 0; i--) {
    if (slideIndex >= ACTS[i].startSlide) {
      return ACTS[i]
    }
  }
  return ACTS[0]
}

// Helper function to get Act by ID
export const getActById = (id) => {
  return ACTS.find(act => act.id === id)
}
