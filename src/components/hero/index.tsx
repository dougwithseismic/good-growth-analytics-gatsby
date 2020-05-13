import React from 'react'
import PropTypes from 'prop-types'
import { PageProps } from 'gatsby'

import ggaHero from '../../images/gga-hero.svg'
import downArrow from '../../images/down-arrow.svg'

import './hero.scss'

const Hero = (props: PageProps) => {
  return (
    <section className="hero">
      <div className="container">

        <h1 className="hero-header">The alternative guide to Performance Marketing.</h1>
        <p className="hero-description">
          A career in digital? Why bother. Join me on a brutally honest, anecdote-heavy journey through the ins-and-outs
          as a performance marketer in an industry that lost its way. Practical guides on doing just enough to impress
          stakeholders whilst keeping your sanity and salary intact, life lessons learned the hard way, and actual
          advice you won't find anywhere else.
        </p>
        <p>
          {' '}
          <strong> P.S. Don't read this at work.</strong>
        </p>
        <img className="hero-down-arrow" src={downArrow} />
      </div>
    </section>
  )
}

Hero.propTypes = {}

export default Hero
