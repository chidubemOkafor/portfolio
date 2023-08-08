import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import {IoMdArrowDropleft,IoMdArrowDropright} from "react-icons/io"
import {MdToggleOff,MdToggleOn} from "react-icons/md"
import {useState} from "react"


function Sidebar(prop) {
  const year = new Date().getFullYear()
  const toggleMinimize = () => {prop.setMinimize(!prop.minimize)}
  const text_buttons = {
    color: prop.light ? "black" : "white"
}

const dark_mode = () => {
  if (!prop.dark) {
      prop.setDark(true)
      prop.setLight(false)
  }  
}

const light_mode = () => {
  if (!prop.light) {
      prop.setLight(true)
      prop.setDark(false)
  }

}

  return (
    <>
    <div className={`main_side_bar_container ${prop.minimize ? "translate-out " : "translate-in"}`} style={{background: prop.light ? "white" : "inherit"}}>
    {prop.dark ? <MdToggleOff style={text_buttons} className="display_button" onClick={() => light_mode()}/> : <MdToggleOn style={text_buttons} className="display_button" onClick={() => dark_mode()}/>}
        <div className='side_bar_container'>
            <div className='nav_container'>
                <h4 className='nav_header' style={{color: prop.light ? "black" : "white"}}>PORTFOLIO</h4>
                <p className='nav'><Link className='link' to="/">Home</Link></p>
                <p className='nav'><Link className='link' to="/about">About</Link></p>
                <p className='nav'><Link className='link' to="/portfolio">Projects</Link></p>
                <p className='nav'><Link className='link' to="/contact">contact</Link></p>
            </div>
        </div>
        <div>
          <p className='copyright'>Copyright © {year} chidubem okafor. All Rights Reserved</p>
       </div>
    </div>
    <div className='minimize' style={{marginLeft: prop.margin ? "19em" : "0"}}>
        {prop.minimize ? <IoMdArrowDropright  onClick={toggleMinimize} className="minimize_arrow"/> : <IoMdArrowDropleft onClick={toggleMinimize} className="minimize_arrow"/>}
    </div>
    </>
  )
}

export default Sidebar
   