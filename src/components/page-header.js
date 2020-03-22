import React from 'react'
import { Link } from 'gatsby'
import { parseHTMLCodes } from '../utils'
import logo from '../images/logo.svg'

export default ({
  title,
}) => (
  <div class="page-header">
    <Link to="/" className="hidden-lg">
      <img src={logo} alt="Twin Cities Aquaponics Logo" />
    </Link>
    <h1 class="title">{ parseHTMLCodes(title) }</h1>
  </div>
)


