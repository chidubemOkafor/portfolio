import React from 'react'
import {GoHome} from "react-icons/go"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {GoProjectRoadmap} from "react-icons/go"
import {RiContactsLine} from "react-icons/ri"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='main_navbar_container'>
        <div className='second_navbar_container'>
            <div className='navbar_container'>
                <GoHome className='navbar_icon'/>
                <AiOutlineInfoCircle className='navbar_icon'/>
                <GoProjectRoadmap className='navbar_icon'/>
                <RiContactsLine className='navbar_icon'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
