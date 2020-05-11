import React from 'react'
import PropTypes from 'prop-types'

import productImage from '../../images/product-image.svg'

import './productGrid.scss'

const ProductGrid = (props) => {
  return (
    <section className="product-grid">
        <div className="product-item">
          <img src={productImage} alt={`Product Image`} className="product-image" />
          <div className="product-heading">
            <div className="product-subtitle">Premium Guide</div>
            <div className="product-title">Enhanced Ecommerce 101.</div>
          </div>
          <div className="product-description">
            Powered by Shopify and Gatsby, and built by award-winning Performance Marketers to one-up the current state
            of ecommerce stagnancy.
          </div>
          <div className="cta-button">Call to Action</div>
        </div>
    </section>
  )
}

ProductGrid.propTypes = {}

export default ProductGrid
