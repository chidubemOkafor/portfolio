import React,{useState} from 'react'
import {AiOutlineTwitter,AiFillGithub} from "react-icons/ai"
import {BsLinkedin,BsDiscord} from "react-icons/bs"
import {connectWallet} from "../useConnectWallet.js"
import css from "../../src/assets/icons/css.png"
import react from "../../src/assets/icons/React.gif"
import python from "../../src/assets/icons/python.png"
import rust from "../../src/assets/icons/rust.png"
import node from "../../src/assets/icons/node.png"
import html from "../../src/assets/icons/html.png"
import javascriot from "../../src/assets/icons/javascript.png"
import ReactAudioPlayer from "react-audio-player"
import './Main.css'
import {MdDownload} from "react-icons/md"

function Main(prop) {
  // const wallet = new Wallet()
  const [connected, setConnected] = useState(false)

  const text_buttons = {
    color: prop.light ? "black" : "white"
}
  return (
    <div className={`origin ${prop.minimize ? "translate-out-main " : "translate-in-main"}`}>
    <div className='MAIN_container'>
        <div className='second_main_container'>
          <div className='container'>
            <div className='circle_one'/>
            <div className='circle_two'/>
          </div>
            <div className='text-container'>
              <div className='text_intro'>
                <div className='names'>
                  <h1 style={text_buttons}>CHIDUBEM</h1> 
                  <h1 className='surname'>OKAFOR</h1>
                </div>
                <p className='main_text'>I am a web and blockchain developer, passionate about creating innovative digital solutions. With expertise in web development and blockchain technology.</p>
              </div>
                
                <div className='icons' style={text_buttons}>
                  <a href='https://twitter.com/Okaforchidex7'><AiOutlineTwitter className='navbar_icon'/></a>
                  <a href='https://www.linkedin.com/in/chidubem-okafor-51648922b'><BsLinkedin className='navbar_icon'/></a>
                  <a href='https://discord.gg/9sMNeDZ7'><BsDiscord className='navbar_icon'/></a>
                  <a href='https://github.com/chidubemOkafor'><AiFillGithub className='navbar_icon'/></a>
                </div>
                <div className='stack'>
                  <p>stack |</p>
                    <div className='individual_stack'>
                    <img src={html}/>
                    <img src={css}/>
                    <img src={javascriot}/>
                    <img src={react}/>
                    <img src={python}/>
                    <img src={node}/>
                    <img className='solidity' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Solidity_logo.svg/579px-Solidity_logo.svg.png"}/>
                  </div>
                </div>
                <div className='button_div'>
                  <button className='down_btn'>Download cv <MdDownload className='MdDownload'/></button>
                  <button>Hire me</button>
                  {!connected ? <button onClick={connectWallet}>Connect Mallet </button>: <button>Mint cv</button>}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main