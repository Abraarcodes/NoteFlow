import React from 'react'
import Navigation from './Navigation'

function Header({children}) {
  return (
    <div className="py-10 bg-gradient-to-bottom">
      {children}
    </div>
  )
}

export default Header


