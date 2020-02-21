import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../images/logo.svg'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
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
          {data.allWordpressPage.edges.map(edge => (
            <Link
              className="navbar-item"
              activeClassName="current"
              to={edge.node.slug}
              key={edge.node.slug}
            >
              {edge.node.title}
            </Link>
          ))}
        </div>
        <div className="navbar-end"></div>
      </nav>
    )}
  />
)