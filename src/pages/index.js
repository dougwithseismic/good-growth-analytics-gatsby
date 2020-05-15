import React from 'react'
import { Link } from 'gatsby'
import Hero from '../components/hero'
import ContentGrid from '../components/contentGrid'
import Layout from './../components/layout'
import NewsletterSignup from './../components/newsletter/index'

import './home.scss'
import ClientGrid from './../components/clientGrid/index'

const IndexPage = (props) => {
  return (
    <Layout>
      <Hero />
      {/* <div className=" jumbo container"> <span>Latest Content</span> </div> */}
      <ContentGrid />
      <ClientGrid />
      <section className="about-info">
        <div className="container">
          <div className="about-content">
            <h2 className="about-header">
              Brands trust me to transform their business into a digital-first powerhouses at every stage.
            </h2>
            <p>
              Originally from Bristol UK, now living in the beautiful city of Prague -Over the last ten years of my
              career has taken me from paid media and performance marketing to full-stack JavaScript development,
              analytics, automation & entrepreneurship.
            </p>
            <p>
              I help brands to truly understand what's possible in digital - By using data smartly, building tools to
              automate and innovate, and bringing t-shaped expertise across the entire digital field, they're able to
              cut costs, acquire more customers, work more effectively and keep competitors firmly in the rear-view
              mirror.
            </p>
            <p>
              <strong>Every digital team should have a direction, a purpose and a plan - does yours?</strong>
            </p>
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
