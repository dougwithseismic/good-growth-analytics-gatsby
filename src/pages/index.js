import React from 'react'
import ContentGrid from '../components/contentGrid'
import Layout from './../components/layout'
import NewsletterSignup from './../components/newsletter'

import './home.scss'
import ClientGrid from './../components/clientGrid/index'
import Hero from './../components/hero'

const IndexPage = (props) => {
  return (
    <Layout>
      <section className="about-info">
        <div className="container">
          <div className="about-content">
            <h2 className="about-header">Smart brands trust me to navigate through to digital-led success.</h2>
            <p>
              Originally from Bristol UK, now living in the beautiful city of Prague -Over the last ten years of my
              career has taken me from paid media and performance marketing to full-stack JavaScript development,
              analytics, automation & entrepreneurship.
            </p>
            <p>
              I help brands to truly understand what's possible in digital, using data smartly, building tools to
              automate and innovate, and bringing t-shaped expertise across the entire digital field. Clients are able
              to cut costs, acquire more customers, work more effectively and trust that their digital team is always
              on, always innovative, and always ahead of the curve.
            </p>
          </div>
        </div>
      </section>
      <ContentGrid />
      <ClientGrid />
      <section className="services">
        <div className="container">
          <h3>SERVICES</h3>

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
