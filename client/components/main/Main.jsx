import React,{useState} from 'react'
import {AiOutlineTwitter,AiFillGithub} from "react-icons/ai"
import {BsLinkedin,BsDiscord} from "react-icons/bs"
import {connectWallet} from "../useConnectWallet.js"
import css from "../../src/assets/icons/css.png"
import react from "../../src/assets/icons/react.gif"
import python from "../../src/assets/icons/python.png"
import rust from "../../src/assets/icons/rust.png"
import node from "../../src/assets/icons/node.png"
import html from "../../src/assets/icons/html.png"
import javascriot from "../../src/assets/icons/javascript.png"
import ReactAudioPlayer from "react-audio-player"
import './Main.css'


function Main(prop) {
  // const wallet = new Wallet()
  const [connected, setConnected] = useState(false)

  const text_buttons = {
    color: prop.light ? "black" : "white"
}
  return (
    <div className={`origin `}>
    <div className='MAIN_container'>
        <div className='second_main_container'>
          <div className='container'></div>
            <div className='text-container'>
              <div className='text_intro'>
                <h1 style={text_buttons}>OKAFOR CHIDUBEM</h1>
                <p className='main_text'>I am a web and blockchain developer, passionate about creating innovative digital solutions. With expertise in web development and blockchain technology.</p>
              </div>
                
                <div className='icons' style={text_buttons}>
                  <a href='https://twitter.com/Okaforchidex7'><AiOutlineTwitter className='twitter'/></a>
                  <a href='https://www.linkedin.com/in/chidubem-okafor-51648922b'><BsLinkedin className='linkedin'/></a>
                  <a href='https://discord.gg/9sMNeDZ7'><BsDiscord className='discord'/></a>
                  <a href='https://github.com/chidubemOkafor'><AiFillGithub className='github'/></a>
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
                  <button>download cv</button>
                  <button>hire me</button>
                  {!connected ? <button onClick={connectWallet}>connect wallet</button>: <button>mint cv</button>}
                </div>
            </div>
            <audio
              src = "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
            >
            </audio>
        </div>
      </div>
    </div>
  )
}

export default Main