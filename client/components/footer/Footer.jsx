import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div>
    <p className='copyright'>Copyright © {year} chidubem okafor. All Rights Reserved</p>
 </div>
  )
}

export default Footer