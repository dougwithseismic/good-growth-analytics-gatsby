import React from 'react'
import { motion } from 'framer-motion'
import './ctablock.scss'

const CtaBlock = ({ children }) => {
  return (
    <section className="call-to-action-block">
      <div className="container">
        <div className="call-to-action-content">{children}</div>

      </div>
    </section>
  )
}

CtaBlock.propTypes = {}

export default CtaBlock
