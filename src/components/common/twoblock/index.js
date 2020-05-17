import React from 'react'
import { motion } from 'framer-motion'
import './twoblock.scss'

const TwoBlock = ({ title, children, highlight }) => {
  return (
    <section className="info-row">
      <div className="container">
        <motion.div className="extended-info">
          <h2 className="vertical">{title}</h2>
          <div className="extended-info-content">
            {children}

            {highlight && (
              <div className="cta-blurb">
                <span className="highlight">{highlight}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

TwoBlock.defaultProps = { title: 'Default Title' }

export default TwoBlock
