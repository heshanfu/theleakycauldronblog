import React from 'react'
import { Link } from 'gatsby'
import * as config from '../../../config'

const Header = () => (
  <header className='bg-white black-80 tc pv4 avenir'>
    <h1 className='mt2 mb0 baskerville i fw1 f1'>{config.siteTitle}</h1>
    <h2 className='mt2 mb0 f6 fw4 ttu tracked'>A Brew of Awesomeness with a Pinch of Magic...</h2>
    <nav className='bt bb tc mw8 center mt4'>
      <Link className='f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l' to='/'>Home</Link>
      <Link className='f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l' to='/search'>Search</Link>
      <Link className='f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l' to='/about'>About</Link>
      <Link className='f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l'
        to='/contact?no-cache=1'>Contact</Link>
    </nav>
  </header>
)

export default Header
