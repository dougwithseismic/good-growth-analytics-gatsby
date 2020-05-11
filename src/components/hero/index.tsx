import React from 'react'
import PropTypes from 'prop-types'
import { PageProps } from 'gatsby'

import ggaHero from '../../images/gga-hero.svg'
import downArrow from '../../images/down-arrow.svg'

import './hero.scss'

const Hero = (props: PageProps) => {
  return (
    <section className="hero container">
      <div className="hero-image">
        <img src={ggaHero} alt="" />
      </div>
      <div className="hero-header" />
      <div className="hero-description" />
      <img className="hero-down-arrow" src={downArrow} />
    </section>
  )
}

Hero.propTypes = {}

export default Hero
