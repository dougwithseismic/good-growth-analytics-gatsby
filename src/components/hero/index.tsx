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
        <div className="hero-image">
          <img src={ggaHero} alt="" />
        </div>
        <h1 className="hero-header">This is a header too, but not a regular spiel.</h1>
        <p className="hero-description">

          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
          will give you a complete account of the system, and expound the actual teachings of the great explorer of the
          truth, the master-builder of human happiness.
        </p>
        <img className="hero-down-arrow" src={downArrow} />
      </div>
    </section>
  )
}

Hero.propTypes = {}

export default Hero
