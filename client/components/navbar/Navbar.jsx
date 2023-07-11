import React from 'react'
import {GoHome} from "react-icons/go"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {MdWorkOutline} from "react-icons/md"
import {RiContactsLine} from "react-icons/ri"
import {GiHamburgerMenu} from "react-icons/gi"
import "./Navbar.css"

const Navbar = (prop) => {
  return (
    <div>
        <div className='second_navbar_container'>
          <div className='gap_of'>
            <p className='my_name'>Okafor Chidubem</p>
            <GiHamburgerMenu className='hamburger'/>
          </div>
        </div>
        <div className='roll_down'>
          <p className='bar'>Home</p>
          <p className='bar'>About</p>
          <p className='bar'>Portfolio</p>
          <p className='bar'>Contact</p>
        </div>
    </div>
  )
}

export default Navbar
