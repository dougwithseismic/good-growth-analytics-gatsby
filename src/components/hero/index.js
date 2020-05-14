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
      <motion.div className="container" ref={contentRef} animate={animation} initial="hidden" variants={variantControl}>
        <motion.div className="hero-content">
          <motion.h1 className="hero-header" variants={variantControl}>
          This is a header too, but not your regular spiel.
          </motion.h1>
          <motion.p className="hero-description" variants={variantControl}>
            On top of the world one day, and nursing a KPI-induced hangover the next. Everything going to plan
            perfectly, only to unfold and fall apart in all its gorey glory just when things matter the most. Being so
            closely tied to success (and failure) opens us up to all the highs & lows, plasters, sores and shortcomings
            that make a career in digital so painfully addictive - especially as we're all just winging it anyway.
          </motion.p>

          <motion.p variants={variantControl}>
            Put aside the fire extinguisher, set your status to away and forget everything you've learned so far - Let
            me teach you everything you <strong>really</strong> need to know. This is the alternative guide to
            Performance Marketing.
          </motion.p>
          <motion.p variants={variantControl}>
            <strong> P.S. Whatever you do, don't read this at work.</strong>
          </motion.p>
          <motion.img
            className="hero-down-arrow"
            src={downArrow}
            animate={{
              opacity: [ 1, 0 ],
              y: [ -20, 0 ],
              opacity: [ 0, 1 ],
            }}
            transition={{
              loop: Infinity,
              duration: 2,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

Hero.propTypes = {}

export default Hero
