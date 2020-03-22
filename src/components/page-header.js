import React from 'react'
import { parseHTMLCodes } from '../utils'

export default ({
  title,
}) => (
  <div class="page-header">
    <h1 class="title">{ parseHTMLCodes(title) }</h1>
  </div>
)


