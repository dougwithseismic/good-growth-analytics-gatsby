import React, { useEffect, useRef } from 'react'
import ContentGrid from '../components/contentGrid'
import Layout from './../components/layout'
import NewsletterSignup from './../components/newsletter'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import './home.scss'
import ClientGrid from './../components/clientGrid/index'
import TwoBlock from './../components/common/twoblock'
import CtaBlock from './../components/common/ctablock'

const IndexPage = () => {
  const animation = useAnimation()
  const [ fistElement, inView, entry ] = useInView()

  const aboutSection = useRef()

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
      y: [ 350, 150, 175, 0 ],
      x: [ 0, -120, 0 ],
      scale: [ 0, 15, 1, 0 ],
      rotate: [ 0, 40, 0 ],
      transition: { duration: 0.8, delay: 0.5 },
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
            <motion.h1
              className="about-header"
              animate={{ opacity: 1, transition: { duration: 2, delay: 0.5 } }}
              initial={{ opacity: 0 }}
            >
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
              onClick={() => {
                aboutSection.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                  inline: 'nearest',
                })
              }}
              onTap={() => animation.start('fistMe')}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 } }}
              initial={{ opacity: 0, y: 82 }}
            >
              Let's get acquainted
            </motion.div>
          </div>
          <motion.span
            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 2 } }}
            initial={{ opacity: 0, y: 82 }}
            className="flair"
          >
            Currently feeling wonkeylegged 🥴.
          </motion.span>
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
        </div>
      </section>
      <section className="about-section" ref={aboutSection}>
        <div className="container">
          <TwoBlock
            title="About Me"
            highlight="Faster Growth, better returns, happier teams & smarter decisions - Interested?"
          >
            <motion.p>
              I've launched AR robots with Apple stores, freed entire teams from dull, monotonous work, built tools and
              products to make marketer's lives easier and helped brands grow rapidly through paid advertising. Now I'm{' '}
              <span className="highlight">
                teaching brands to understand where they fall flat online, and how to fix it
              </span>.
            </motion.p>
            <motion.p>
              I'll help you understand your current position, where you should be focusing your efforts, what
              opportunities you're missing out on, and how to act on that information to make genuine gains as fast as
              possible.
              <br />
              <br />
            </motion.p>
          </TwoBlock>
        </div>
      </section>

      <ClientGrid title="A few of the companies I've helped.." />

      <section className="services">
        <div className="container">
          <div className="service-content">
            <span className="subheading">Services Offered</span>
            <div className="service">
              <span className="service-title highlight">Performance</span>
              <ul className="service-desc">
                <li>Paid Advertising Management</li>
                <li>Customer Acquisition Strategy</li>
                <li>Organic / SEO Strategy</li>
                <li>App Store Optimisation</li>
              </ul>
            </div>

            <div className="service">
              <span className="service-title highlight">Development</span>
              <ul className="service-desc">
                <li>Product Dev (React, Native)</li>
                <li>Site Dev (Gatsby, Nextjs.)</li>
                <li>Scripting & SEM Automation</li>
                <li>Bespoke Tool Development</li>
              </ul>
            </div>
            <div className="service">
              <span className="service-title highlight">Analytics & Data</span>
              <ul className="service-desc">
                <li>GTM / GA Audits & Implementation</li>
                <li>Third Party Tool Integration</li>
                <li>Data Pipeline Builds</li>
                <li>Reporting & Insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CtaBlock>
        <h1>What's the process?</h1>
        <p>
          Nobody likes to wait about and the world of digital is no exception. I work fast. Really fast. It's in
          everyones interest to see results as quickly as possible, and thanks to the wizardry of modern technology and
          productization, its not just a lofty agency promise but a reality.
        </p>

        <p>What does that mean for you? It means..</p>

        <ul>
          <li>
            🕔 <span className="highlight">Five day sprints</span> - Short project turnarounds in concentrated bursts.
          </li>
          <li>
            💸 <span className="highlight">Per project costing</span> - No dragging out projects for more hours, or
            rogue agency hostage holding.
          </li>
          <li>
            🤝 <span className="highlight">No minimum contracts</span> - Team up whenever you want, dip out when you
            need to. (You won't want to though.)
          </li>
          <li>
            🚀<span className="highlight">Rapid results</span> - More work done in less time - Speaks for itself really.
          </li>
        </ul>
        {/* Step One */}
        <TwoBlock title="Step 1." highlight="Need to get hold of me sharpish? BAU contacts at the bottom of page 🤜">
          <motion.p>
            Hit the button below and fill out a super quick 20-second onboarding - It's non-commital, just some multiple
            choice Qs to help me scope you out and see if we'll be a fit together.
          </motion.p>
          <motion.p>
            Once that's done, go take a snoop around the site and check out some case studies and guides to get
            excited.. I'll reach out to you by the power of the internet to arrange a chat. 🧙‍♂️
          </motion.p>
          <motion.div
            className="cta-button"
            whileHover={{
              x: [ 0, 5 ],
              rotate: [ 1, -2 ],
              backgroundColor: '#FF0',
              transition: { duration: 0.5, yoyo: Infinity },
              initial: { x: 0, backgroundColor: '#FFF', transition: { duration: 0.5 } },
            }}
            whileTap={{ scale: 0.9, backgroundColor: '#000', color: '#FFF', transition: { duration: 0.2 } }}
          >
            Get started in 20 seconds.
          </motion.div>
          {/* Step Two */}
        </TwoBlock>
        <TwoBlock title="Step 2.">
          <motion.p>
            We get down to business. Normally a thirty minute to one hour call - Google Meets, Whereby,{' '}
            <strong>anything except Skype, really,</strong> followed by access sharing using my nifty client onboarding
            tools. We'll sign off deliverables, get a 50% deposit sorted and crack on.
          </motion.p>
        </TwoBlock>
        <TwoBlock title="Step 3." highlight="Results. Rinse. Repeat. ✅">
          <motion.p>
            I'm available by email, slack and calls for the project duration so you'll know how to get hold of me
            whenever needed. On work completion, it's time for one last handover call where we'll discuss findings, next
            steps and any other suggestions I have to offer.
          </motion.p>
        </TwoBlock>
        <TwoBlock title="Availability & Pricing" highlight="Project rates from £350/day">
          <motion.p>
            Available from July 2020 - Get in contact to talk account audits, consultations & agency whitelabeling.
          </motion.p>
        </TwoBlock>
      </CtaBlock>
      <ContentGrid />

      <section className="contact-section">
        <div className="container">
          <TwoBlock title="Contact Details">
            <p />
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
