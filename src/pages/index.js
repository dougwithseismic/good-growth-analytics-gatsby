import React from 'react'
import ContentGrid from '../components/contentGrid'
import Layout from './../components/layout'
import NewsletterSignup from './../components/newsletter'

import './home.scss'
import ClientGrid from './../components/clientGrid/index'

const IndexPage = (props) => {
  return (
    <Layout>
      <section className="about-info">
        <div className="container">
          <div className="about-content">
            <span className="flair">🥴 Digital acquisition & performance marketing</span>
            <h1 className="about-header">👊 Prepped for take-off?</h1>
            <span className="highlight">
              I help brands to acquire more customers, cut out wasted budget and understand their digital setup.
            </span>
          </div>
          <div className="extended-info">
            <div className="vertical">The blurb</div>
            <div className="extended-info-content">
              <p>
                Originally from Bristol UK, now living in the beautiful city of Prague, I've launched AR robots with
                Apple, freed entire teams from dull, monotonous work, built tools and products to make marketer's lives
                easier, Now I'm helping digital teams realise their true potential, and how to act on it.
              </p>
              <p>
                Brands talk to me when they're ready to take their digital setup seriously - I help them understand
                their current position, where they should be focusing, and how act on that information to make genuine
                gains as fast as possible. <p />
                <span className="highlight">
                  Faster Growth, better returns, happier teams & smarter decisions - Interested?
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContentGrid />
      <ClientGrid />

      <section className="services">
        <div className="container">
          <div className="service-content">
            <div className="service">
              <h2 className="service-title">Acquisition</h2>
              <ul className="service-desc">
                <li>Performance Marketing</li>
                <li>Customer Acquisition</li>
                <li>SEM Automation</li>
                <li>Technical SEO</li>
              </ul>
            </div>
            <div className="service">
              <h2 className="service-title">Creative</h2>
              <ul className="service-desc">
                <li>Media Asset Creation</li>
                <li>UX Design</li>
                <li>Distruptive Thinking</li>
                <li>Digital Transformations</li>
              </ul>
            </div>
            <div className="service">
              <h2 className="service-title">Development</h2>
              <ul className="service-desc">
                <li>Web Development (React)</li>
                <li>Web Scraping</li>
                <li>Scripting & Automation</li>
                <li>Bespoke Tool Development</li>
                <li>Distruptive R&D</li>
              </ul>
            </div>
            <div className="service">
              <h2 className="service-title">Analytics & Data</h2>
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
