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
  const [ contentRef, inView ] = useInView({
    triggerOnce: true
  })

  useEffect(
    () => {
      if (inView) {
        console.log('gogoggo')
        animation.start('visible')
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

        staggerChildren: 0.1
      }
    },
    hidden: { opacity: 0, y: 42 }
  }

  return (
    <section className="hero">
      <motion.div className="container" ref={contentRef} animate={animation} initial="hidden" variants={variantControl}>
        <motion.div className="hero-content">
          <motion.h1 className="hero-header" variants={variantControl}>
            The alternative guide to Performance Marketing.
          </motion.h1>
          <motion.p className="hero-description" variants={variantControl}>
            A career in digital? Why bother. Join me on a brutally honest, anecdote-heavy journey through the
            ins-and-outs as a performance marketer in an industry that lost its way. Practical guides on doing just
            enough to impress stakeholders whilst keeping your sanity and salary intact, life lessons learned the hard
            way, and the actual advice others won't dare tell you.
          </motion.p>
          <motion.p variants={variantControl}>
            <strong> P.S. Don't read this at work.</strong>
          </motion.p>
          <motion.img
            className="hero-down-arrow"
            src={downArrow}
            animate={{
              opacity: [ 1, 0 ],
              y: [ -42, 0 ],
              opacity: [ 0, 1 ]
            }}
            transition={{
              loop: Infinity,
              duration: 1.5
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

Hero.propTypes = {}

export default Hero
