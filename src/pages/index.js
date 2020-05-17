import React, { useEffect } from 'react'
import ContentGrid from '../components/contentGrid'
import Layout from './../components/layout'
import NewsletterSignup from './../components/newsletter'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import './home.scss'
import ClientGrid from './../components/clientGrid/index'
import TwoBlock from './../components/common/twoblock'

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
      y: [ 270, 0 ],
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
              I help brands to acquire more customers, create modern digital experiences & get more from their paid
              advertising and analytics.
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
        </div>
      </section>
      <TwoBlock
        title="About Me"
        highlight="Faster Growth, better returns, happier teams & smarter decisions - Interested?"
      >
        <motion.p>
          I've launched AR robots with Apple stores, freed entire teams from dull, monotonous work, built tools and
          products to make marketer's lives easier and helped brands grow rapidly through paid advertising. Now I'm
          helping brands to understand where they fall flat online, and how to fix it.
        </motion.p>
        <motion.p>
          Talk to me when you're ready to take your digital setup seriously - I'll help you understand your current
          position, where you should be focusing, and how to act on that information to make genuine gains as fast as
          possible.
          <br />
          <br />
        </motion.p>
      </TwoBlock>
      <ClientGrid title="A few of the companies I've helped.." />

      <TwoBlock title="Availability & Pricing">
        <motion.p>
          Available from July 2020 - Get in contact to talk account audits, consultations & agency whitelabeling.
        </motion.p>
      </TwoBlock>

      <TwoBlock title="Contact Details">
        <ul>
          <li>
            <a href="https://linkedin.com/in/dougsilkstone" rel="nofollow" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/dougsilkstone" rel="nofollow" target="_blank">
              doug@withseismic.com
            </a>
          </li>
        </ul>
      </TwoBlock>

      <section className="services">
        <div className="container">
          <div className="service-content">
            <span className="subheading">Services Offered</span>
            <div className="service">
              <span className="service-title highlight">Performance</span>
              <ul className="service-desc">
                <li>Paid Advertising Management</li>
                <li>Customer Acquisition Strategy</li>
                <li>App Store Optimisation</li>
                <li>One-off Audits & Builds</li>
              </ul>
            </div>

            <div className="service">
              <span className="service-title highlight">Development</span>
              <ul className="service-desc">
                <li>Product Development (React, Native)</li>
                <li>Site Development (Gatsby, Nextjs.)</li>
                <li>Scripting & SEM Automation</li>
                <li>Bespoke Tool Development</li>
              </ul>
            </div>
            <div className="service">
              <span className="service-title highlight">Analytics & Data</span>
              <ul className="service-desc">
                <li>Google Tag Manager & Google Analytics</li>
                <li>App Analytics Tracking (Firebase, Mixpanel)</li>
                <li>Data Pipeline Implementation</li>
                <li>Reporting & Insights</li>
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
      <ContentGrid />

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
