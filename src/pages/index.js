import React from 'react'
import { Link } from 'gatsby'
import Hero from '../components/hero'
import ContentGrid from '../components/contentGrid'
import ProductGrid from './../components/productGrid'
import Layout from './../components/layout'

const IndexPage = (props) => {
  return (
    <Layout>
      <Hero />
      <ContentGrid />
      <section className="newsletter-signup">
        <div className="container">
          <div className="newsletter-content">
            <h2>Enticing Promise Of Action</h2>
            <p>Backed up by short, punchy follow-up describing the outcome.</p>
          </div>
          <input type="text" name="newsletter-input" id="" />
        </div>
      </section>
      {/* <ProductGrid /> */}
    </Layout>
  )
}

export default IndexPage
