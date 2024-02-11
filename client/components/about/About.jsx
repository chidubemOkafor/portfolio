import React from 'react'
import "./About.css"
import { MdDownload } from "react-icons/md"

const About = (prop) => {
  return (
    <div className={`origin ${prop.minimize ? "translate-out-main " : "translate-in-main"}`}>
      <div className='MAIN_container'>
        <div className='second_main_container'>
          <div className='about_container'>
            <div className='about_personal_info'>
              <h4>PERSONAL INFO</h4>
              <p className='P'><p className='blue_p'>Name:</p>Chidubem Okafor</p>
              <p className='P'><p className='blue_p'>gender:</p>Male</p>
              {/* </div>
            <div className='about_personal_info'> */}
              <p className='P'><p className='blue_p'>Freelance:</p>Available</p>
              <p className='P'><p className='blue_p'>Skill:</p>Blockchain and fullstack</p>
              <p className='P'><p className='blue_p'>Language:</p>English</p>
              <button className='down_btn'>Download cv <MdDownload className='MdDownload' /></button>
            </div>
            <div className='about_personal_info_3'>
              <div className='inner_personal_block'>
                <div className='number_block'><p className='text_length'><p className='green_p'>2+</p>Experience</p></div>
                <div className='number_block'><p className='text_length'><p className='green_p'>50+</p>Clients</p></div>
                <div className='number_block'><p className='text_length'><p className='green_p'>10+</p>Completed</p></div>
              </div>
              <div className='number_block_classic'><p><p className='green_p'>1</p>Awards won</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
