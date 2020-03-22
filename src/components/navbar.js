import React, { useState } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { MdMenu, MdClose } from 'react-icons/md'
import { parseHTMLCodes } from '../utils'

import logo from '../images/logo.svg'
import fish from '../images/fish.svg'

export default () => {
  const [open, setOpen] = useState(false)
  const openClass = open ? 'show animated fadeIn' : ''
  return (
    <StaticQuery
      query={graphql`
        query {
          allWordpressPage(sort: { fields: wordpress_id }, limit: 6) {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <button onClick={() => setOpen(!open)} className="nav-toggle">
            { open ? (
              <MdClose size="22" color="white" />
              ) : (
              <MdMenu size="22" color="white" />
            )}
          </button>
          <nav className={`navbar ${openClass}`}>
            <Link to="/" className="logo hidden-md">
              <img src={logo} alt="Twin Cities Aquaponics Logo" />
            </Link>
            <Link to="/" className="logo hidden-lg" style={{marginTop: 30}}>
              <img src={fish} alt="Twin Cities Aquaponics Fish Icon" />
            </Link>
            <div className="navbar-start">
              {data.allWordpressPage.edges.map(({ node }) => {
                return node.slug !== 'twin-cities-aquaponics'
                  ? (
                    <Link
                      className="navbar-item"
                      activeClassName="current"
                      to={node.slug}
                      key={node.slug}
                    >
                      {parseHTMLCodes(node.title)}
                    </Link>
                  ) : null
              })}
            </div>
            <div className="navbar-end">{/* use this to add things to bottom of nav */}</div>
          </nav>
        </>
      )}
    />
  )
}