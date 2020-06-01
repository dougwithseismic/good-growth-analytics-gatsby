import React, { useRef } from 'react'
import Layout from './../components/layout'
import SEO from './../components/seo'

import ClientGrid from '../components/clientGrid'

import { Grid, Row, Col } from 'react-flexbox-grid'

import './home.scss'

const IndexPage = () => {
  const scrollToMe = useRef()
  return (
    <Layout>
      <SEO
        description={`Looking for help with your paid advertising and analytics? I help brands to acquire more customers, create modern digital experiences & get more from their paid advertising and analytics. `}
        title={`Senior Performance Marketing & Web Developer For Hire 🚀`}
      />
      <div className="container">
        <Grid fluid className="hero-section">
          <Row>
            <Col xs>
              <div className="hero-main-content">
                <h1> Performance Marketing & Digital Acquisition</h1>
                <div className="hero-subtitle">
                  <span className="highlight">
                    I help b2c brands to acquire and retain more customers, create modern digital experiences & increase
                    their margins.
                  </span>
                </div>
                <div
                  className="cta-bubble"
                  onClick={() => {
                    scrollToMe.current.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <div className="cta-bubble-main">What would more sales allow you to do?</div>
                  <div className="cta-bubble-extra">⟶ Independent Digital Consultant</div>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
        <section className="services-section" ref={scrollToMe}>
          <Grid fluid>
            <Row>
              <Col xs={12} md={5} className="service-list">
                <h3 className="list-item">Services</h3>

                <div className="list-item">Paid Advertising Management</div>
                <div className="list-item">Ecommerce Growth Strategy ⟵</div>
                <div className="list-item">Fullstack JavaScript Development</div>
                <div className="list-item">Agency Auditing</div>
                <div className="list-item">Analytics & Automation</div>
              </Col>
              <Col xs={12} md mdOffset={1}>
                <h2 style={{ marginBottom: '1em' }}>Who are you relying on for your digital growth?</h2>
                <p>
                  Most brands know what success should look like, and even know how to properly connect the dots and put
                  into practice the plans needed to reach their goals.
                </p>
                <p>
                  However, even with great intentions, many teams don't see the traction the need, and even fewer know
                  what to do once their strategy fails to provide the results promised. Blog posts and slack groups are
                  great at spinning a best-practice success story, but very few set you up to handle the nuances and
                  reality of doing digital business.
                </p>
                <p>
                  That's where I position myself - Working alongside B2C brands to put them on the right track for
                  sustainable growth, arming them with the right knowledge and game plan to skill up, then acting on it
                  ‒
                  <strong>with a tried-and-tested framework for digital growth.</strong>
                </p>
                <p>
                  <span className="highlight">
                    If you're a B2C business looking to scale out quickly across all channels, grab a call with me today
                    to work out how.
                  </span>
                </p>
                <div className="cta-bubble">
                  <a
                    href="https://calendly.com/doug-withseismic/quick-catchup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-bubble-main"
                  >
                    Get a call in the calendar
                  </a>
                  <div className="cta-bubble-extra">⟶ No commitment, no cost, no problem</div>
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
        <ClientGrid title="Some of the companies I've helped.."/>

        <section className="about-section">
          <Grid fluid>
            <Row>
              <Col xs={12} md={5} className="subtitle-sidebar">
                <h3 className="list-item">My Mission</h3>
              </Col>
              <Col xs={12} md mdOffset={1}>
                <p>
                  I've launched AR robots with Apple stores, freed entire teams from dull, monotonous work, built tools
                  and products to make marketer's lives easier and helped brands grow rapidly through to become market
                  leaders.
                </p>
                <p>
                  <span className="highlight">
                    Now I'm teaching brands where to plug the gaps in their digital knowledge to acquire more customers,
                    make more sales, increase their margin and be less stressed.
                  </span>
                </p>

                <p>
                  I'll help you understand your current position on paid advertising, customer retenion and website
                  optimisation, where you should be focusing your efforts, what opportunities you're missing out on, and
                  how to act on that information to make genuine gains as fast as possible.
                </p>
                <div className="cta-blurb" style={{ maxWidth: '320px' }}>
                  <span className="highlight">
                    Faster Growth, more sales, happier customer & better returns - Interested?
                  </span>
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
        <section className="testimonial-section">
          <Grid fluid>
            <Row>
              <Col xs={12} md={5} className="subtitle-sidebar">
                <h3 className="list-item">Testimonials</h3>
              </Col>
              <Col xs={12} md mdOffset={1}>
                <div className="kind-words-list">
                  <div className="kind-words-item">
                    {/* One */}
                    <div className="kind-words-quote">
                      "With Doug I knew I was onto a winner; He's a big-picture guy and he gets what I'm planning
                      long-term. I've been working with a bunch of different pros and never got very far, but Doug is on
                      a whole different level.
                      <br />
                      It's not often you make a partnership as good as this, and I know that having Doug on my team will
                      give me a huge advantage over my competitors."
                    </div>
                    <div className="kind-words-author">Ben Wilde at SoundSauce - Grammy Nominated Music Mastering</div>
                  </div>
                  {/* Two */}
                  <div className="kind-words-item">
                    <div className="kind-words-quote">
                      "Doug has been a lifesaver. Our business has grown rapidly, far outgrowing my own ecommerce
                      knowledge - Doug stepped in seamlessly, giving us sound advice and made positive changes that will
                      ensure our business is built on strong foundations. I have worked in the advertising industry for
                      over 20 years and have worked with may 'Digital Experts', Doug knows exactly what he is doing and
                      the correct elements to implement to help your business grow.
                      <br /> I couldn't recommend him highly enough."
                    </div>
                    <div className="kind-words-author">Fran Cusden - The Beeswax Wrap Co.</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
        {/* Blog  Posts */}
        {/* <section className="posts-section">
          <Grid fluid>
            <Row>
              <Col xs={12} md={5} className="subtitle-sidebar">
                <h3 className="list-item">Latest Posts</h3>
              </Col>
              <Col xs={12} md mdOffset={1}>
                <div className="post-grid">
                  <div className="post-item">
                    <span className="highlight"> Google Ads Hacks CTR That Work</span>
                    <p>
                      Grab a look under the hood to find out what's really possible with Google Ads and a little
                      JavaScript.
                    </p>
                    <p>12.06.20</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </section> */}
      </div>
    </Layout>
  )
}

export default IndexPage
