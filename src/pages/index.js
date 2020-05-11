import React from 'react'
import { Link } from 'gatsby'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import ContentGrid from '../components/contentGrid'
import ProductGrid from './../components/productGrid'
import Footer from '../components/footer'

const IndexPage = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      <ContentGrid />
      <ProductGrid />
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
