import React from 'react'
import "./Contact.css"
import {MdNotListedLocation,MdCall} from "react-icons/md"
import {AiOutlineMail,AiOutlineTwitter,AiFillGithub} from "react-icons/ai"
import {BsDiscord,BsLinkedin} from "react-icons/bs"
// import {MdCall} from "react-icons/bi"

const Contact = (prop) => {
  return (
    <div className={`origin ${prop.minimize ? "translate-out-main " : "translate-in-main"}`}>
      <div className='MAIN_container'>
        <div className='second_main_container'>
          <div className='contact_div'>
            <div>
                    <h1>LET'S CHAT</h1>
                        <form>
                            <input type="text" placeholder='Your Name'></input>
                            <input type="email" placeholder='Your Email'></input>
                            <textarea className="freeform" name="freeform" rows="4" cols="50" placeholder='Your Message'/>
                            <button>send message</button>
                        </form>
            </div>
            <div>
                <div className='con_header'>
                    <h4>GET IN TOUCH</h4>
                    <p>Tell Me if You Have Any Project ;^)</p>
                </div>
             
                <div className='addressed'>
                    <div className='add'>
                        <MdNotListedLocation className='icon_max'/>
                        <div className='con_text'>
                            <h5>Address:</h5>
                            <p>Abuja,Nigeria</p>
                        </div>
                    </div>
                    <div className='add'>
                        <AiOutlineMail className='icon_max'/>
                        <div className='con_text'>
                            <h5>Email:</h5>
                            <p>okaforchidubem7@gmail.com</p>
                        </div>
                    </div>
                    <div className='add'>
                        <MdCall className='icon_max'/>
                        <div className='con_text'>
                            <h5>Number:</h5>
                            <p>+2349066089664</p>
                        </div>
                    </div>
                    <div className='icons'>
                        <a href='https://twitter.com/Okaforchidex7'><AiOutlineTwitter className='navbar_icon'/></a>
                        <a href='https://www.linkedin.com/in/chidubem-okafor-51648922b'><BsLinkedin className='navbar_icon'/></a>
                        <a href='https://discord.gg/9sMNeDZ7'><BsDiscord className='navbar_icon'/></a>
                        <a href='https://github.com/chidubemOkafor'><AiFillGithub className='navbar_icon'/></a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
