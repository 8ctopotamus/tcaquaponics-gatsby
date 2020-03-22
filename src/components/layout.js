import React from "react"
import PropTypes from "prop-types"
import { Animated } from "react-animated-css"

import Navbar from './navbar'
import Footer from './footer'
import ContactForm from './contactform'

const Layout = ({ children, header }) => {
  const isContactPage = (typeof window !== 'undefined' && window.location.pathname === '/tours-and-orders')

  return(
  <>
    <Navbar />
    <div id="content-wrap">
      { header }
      <main>
        <Animated animationIn="fadeIn" animationOut="fadeOut" className="grid">         
          {isContactPage ? (
            <div class="wp-block-columns">
              <div className="wp-block-column">
                {children}
              </div>
              <div className="wp-block-column">
                {isContactPage && (
                  <ContactForm />
                )}
              </div>
            </div>
          ) : ( 
            children
          )}
        </Animated>
      </main>
      <Footer />
    </div>
  </>
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
