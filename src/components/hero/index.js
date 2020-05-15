import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { PageProps } from 'gatsby'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import ggaHero from '../../images/gga-hero.svg'
import downArrow from '../../images/down-arrow.svg'

import './hero.scss'

const Hero = (props) => {
  const animation = useAnimation()
  const [ contentRef, inView ] = useInView(
    {
      // triggerOnce: true
    }
  )

  useEffect(
    () => {
      if (inView) {
        console.log('gogoggo')
        animation.start('visible')
      } else {
        animation.start('hidden')
      }
    },
    [ animation, inView ]
  )

  const variantControl = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 20,
        duration: 0.8,
        ease: [ 0.6, 0.05, -0.01, 0.9 ],

        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0, y: 8 },
  }

  return (
    <section className="hero">

    </section>
  )
}

Hero.propTypes = {}

export default Hero
