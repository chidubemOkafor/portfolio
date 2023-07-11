import React,{useState} from 'react'
import {GoHome} from "react-icons/go"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {MdWorkOutline} from "react-icons/md"
import {RiContactsLine} from "react-icons/ri"
import {FiX} from "react-icons/fi"
import {GiHamburgerMenu} from "react-icons/gi"
import "./Navbar.css"

const Navbar = (prop) => {
  const [isNavBar, setIsNavBar] = useState(false)
  const toggleBar = () => setIsNavBar(!isNavBar)
  return (
    <div>
        <div className='second_navbar_container'>
          <div className='gap_of'>
            <p className='my_name'>Okafor Chidubem</p>
            {! isNavBar ? <GiHamburgerMenu onClick={toggleBar} className={`hamburger ${!isNavBar ? 'rotate' : ''}`}/> : <FiX onClick={toggleBar} className='hamburger'/>}
          </div>
        </div>
        {isNavBar ?<div className='roll_down'>
          <p className='bar'>Home</p>
          <p className='bar'>About</p>
          <p className='bar'>Portfolio</p>
          <p className='bar'>Contact</p>
        </div> : <></>}
    </div>
  )
}

export default Navbar
