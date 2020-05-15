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
      {/* <Hero /> */}
      {/* <div className=" jumbo container"> <span>Latest Content</span> </div> */}
      <ClientGrid />
      <ContentGrid />
      <NewsletterSignup>
        {({ onSignup }) => (
          <section className="newsletter-signup">
            <div className="container">
              <div className="newsletter-content">
                <h2>This is a header too, but not your regular spiel.</h2>
                <p>
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                  and I will give you a complete account of the system, and expound the actual teachings of the great
                  explorer of the truth, the master-builder of human happiness..
                </p>
                <div className="newsletter-action">
                  <input type="text" name="newsletter-input" id="" placeholder="eg. doug@dougsilkstone.com" />
                  <div className="submit-btn">Get Started!</div>
                </div>
              </div>
            </div>
          </section>
        )}
      </NewsletterSignup>
    </Layout>
  )
}

export default IndexPage
