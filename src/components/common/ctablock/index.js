import React from 'react'
import { motion } from 'framer-motion'
import './ctablock.scss'

const CtaBlock = ({ children }) => {
  return (
    <section className="call-to-action-block">
      <div className="container">
        <div className="call-to-action-content">{children}</div>
        <motion.div
          className="cta-button"
          whileTap={{ scale: 0.9, backgroundColor: '#000', color: '#FFF', transition: { duration: 0.2 } }}
        >
          Grab a free consultation
        </motion.div>
      </div>
    </section>
  )
}

CtaBlock.propTypes = {}

export default CtaBlock
