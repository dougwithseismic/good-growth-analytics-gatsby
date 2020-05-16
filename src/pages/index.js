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
            <span className="about-flair">🥴 Digital acquisition & performance</span>
            <h1 className="about-header">👊 What a header!?</h1>
            <span className="highlight">
              A highly effective system for building and optimising digital products at speed. Growth-driven UX and UI
              design for startups.
            </span>
          </div>
          <div className="extended-info">
            <div className="vertical">
            </div>

            <div className="extended-info-content">
              <p>
                We’ve developed a unique design delivery framework that brings results in 5 weeks. It uses the
                industry-proven methodologies Jobs to be Done, for identifying product flaws and opportunities, and
                Design Sprint for solving and testing product problems.
              </p>
              <p>
                This is an optimised and highly effective way of doing UX and UI design for early stage companies. It’s
                based on our experience with over 100 startups, some of them backed by YC, Techstars, Seedcamp, Founders
                Factory and other leading accelerators and investors.
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
