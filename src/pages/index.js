import React, { useEffect } from 'react'
import ContentGrid from '../components/contentGrid'
import Layout from './../components/layout'
import NewsletterSignup from './../components/newsletter'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import './home.scss'
import ClientGrid from './../components/clientGrid/index'

const IndexPage = () => {
  const animation = useAnimation()
  const [ fistElement, inView, entry ] = useInView()

  useEffect(
    () => {
      if (inView) {
        //animation.start('fistMe')
      }
    },
    [ animation, inView ]
  )

  const fistBump = {
    fistMe: {
      y: [ 270, 150 ],
      scale: [ 0, 1.5, 1, 0 ],
      rotate: [ 0, 20, 0 ],
    },
    spin: {
      rotate: 720,
    },
  }

  return (
    <Layout>
      <section className="about-info">
        <div className="container">
          <div className="about-content">
            {/* <span className="flair">🥴 Digital acquisition & performance marketing</span> */}
            <motion.h1
              className="about-header"
              animate={{ opacity: 1, transition: { duration: 2, delay: 0.5 } }}
              initial={{ opacity: 0 }}
            >
              <motion.div
                className="fist"
                role="img"
                animate={animation}
                ref={fistElement}
                variants={fistBump}
                initial={{ scale: 0 }}
                transition={{ duration: 0.8, easing: 'easeInOut' }}
              >
                👊
              </motion.div>
              No Nonsense Digital Direction.
            </motion.h1>
            <motion.span
              className="highlight"
              animate={{ opacity: 1, y: 0, transition: { duration: 2, delay: 1 } }}
              initial={{ opacity: 0, y: 82 }}
            >
              I help brands to acquire more customers, cut out wasted marketing spend and fully understand their digital
              setup.
            </motion.span>
            <motion.div
              className="cta-button"
              whileTap={{ scale: 0.9, backgroundColor: '#000', color: '#FFF', transition: { duration: 0.2 } }}
              onTap={() => animation.start('fistMe')}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 } }}
              initial={{ opacity: 0, y: 82 }}
            >
              Grab the intro pack
            </motion.div>
          </div>
          <motion.div className="extended-info">
            <div className="vertical">The blurb</div>
            <div className="extended-info-content">
              <motion.p>
                Originally from Bristol UK, now living in the beautiful city of Prague, I've launched AR robots with
                Apple, freed entire teams from dull, monotonous work, built tools and products to make marketer's lives
                easier. Now I'm helping brands to understand where to level up their digital setup, and how to act on
                it.
              </motion.p>
              <motion.p>
                Brands talk to me when they're ready to take their digital setup seriously - I help them understand
                their current position, where they should be focusing, and how act on that information to make genuine
                gains as fast as possible.
                <br />
                <br />
                <span className="highlight">
                  Faster Growth, better returns, happier teams & smarter decisions - Interested?
                </span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
      <ContentGrid />
      <ClientGrid />

      <section className="services">
        <div className="container">
          <div className="service-content">
            <span className="subheading" style={{ maxWidth: '15%' }}>
              Helping brands with..
            </span>
            <div className="service">
              <span className="service-title highlight">Acquisition</span>
              <ul className="service-desc">
                <li>Google Ads</li>
                <li>Paid Social</li>
                <li>SEO Strategy</li>
                <li>SEM Automation</li>
              </ul>
            </div>

            <div className="service">
              <span className="service-title highlight">Development</span>
              <ul className="service-desc">
                <li>Web Development (React)</li>
                <li>Web Scraping</li>
                <li>Scripting & Automation</li>
                <li>Bespoke Tool Development</li>
                <li>Distruptive R&D</li>
              </ul>
            </div>
            <div className="service">
              <span className="service-title highlight">Analytics & Data</span>
              <ul className="service-desc">
                <li>Analytics & Tracking</li>
                <li>Data Pipeline Implementation</li>
                <li>Reporting & Insights</li>
                <li>Business Intelligence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="fit-check">
        <div className="jc-start container">
          <div className="fit-check-content">
            <span className="highlight">hello</span>
          </div>
        </div>
      </section>
      {/* <NewsletterSignup>
        {({ onSignup }) => (
          <section className="newsletter-signup">
            <div className="container">
              <div
                className="newsletter-content"
                style={{ marginLeft: '128px', marginTop: '180px', marginBottom: '280px' }}
              >
                <h2 style={{ fontFamily: 'proxima-nova', fontWeight: 600, fontSize: '32px', lineHeight: '1.2em' }}>
                  Name is an integrated, full-service creative studio offering video production, creative development,
                  and post-production services.
                </h2>
                <p>
                  Everybody’s got a story. And we don’t stop until we’ve uncovered what makes yours worth telling.
                  Whether it’s working directly with you, an agency partner, or putting the finishing touches on
                  something special, we’re ready to dig in and get our hands dirty—are you?
                </p>
              </div>
            </div>
          </section>
        )}
      </NewsletterSignup> */}
    </Layout>
  )
}

export default IndexPage
