import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { parseHTMLCodes } from '../utils'
import logo from '../images/logo.svg'

export default () => (
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
      <nav className="navbar is-transparent">
        <Link to="/" className="logo">
          <img src={logo} alt="Twin Cities Aquaponics" />
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
        <div className="navbar-end"></div>
      </nav>
    )}
  />
)