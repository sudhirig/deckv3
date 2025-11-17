import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Slide1HiddenOpportunityV8 from '../Slide1HiddenOpportunityV8'
import Slide2GeographicTrapV8 from '../Slide2GeographicTrapV8'
import Slide3ThreeWallsV8 from '../Slide3ThreeWallsV8'
import Slide4ConvergenceWindowV8 from '../Slide4ConvergenceWindowV8'

describe('Act 1 V8 Slides - Smoke Tests', () => {
  it('Slide1HiddenOpportunityV8 renders key headline and inequality message', () => {
    render(<Slide1HiddenOpportunityV8 />)

    expect(
      screen.getByText(/\$124t hidden opportunity/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/locked out of the biggest wealth opportunity in history/i)
    ).toBeInTheDocument()
  })

  it('Slide2GeographicTrapV8 renders portfolio vs global economy framing', () => {
    render(<Slide2GeographicTrapV8 />)

    expect(screen.getByText(/the geographic trap/i)).toBeInTheDocument()
    expect(screen.getByText(/your portfolio today/i)).toBeInTheDocument()
    expect(screen.getByText(/the global economy/i)).toBeInTheDocument()
  })

  it('Slide3ThreeWallsV8 renders three walls and CPA connection', () => {
    render(<Slide3ThreeWallsV8 />)

    expect(
      screen.getByText(/three walls between you and alpha/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/access wall/i)).toBeInTheDocument()
    expect(screen.getByText(/complexity wall/i)).toBeInTheDocument()
    expect(screen.getByText(/experience wall/i)).toBeInTheDocument()
  })

  it('Slide4ConvergenceWindowV8 renders 18-month window framing', () => {
    render(<Slide4ConvergenceWindowV8 />)

    expect(
      screen.getByText(/the 18-month window/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/our unfair cpa distribution advantage/i)
    ).toBeInTheDocument()
  })
})
