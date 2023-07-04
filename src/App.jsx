import './App.css'
import Main from "../components/main/Main"
import Navbar from "../components/navbar/Navbar"
import Sidebar from '../components/sidebar/Sidebar'
import About from "../components/about/About"
import {useState,useEffect} from "react"
import {ImSpinner5} from "react-icons/im"
import {MdOutlineHeadsetMic} from "react-icons/md"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from '../components/portfolio/Portfolio'

function App() {
  const [loading, setLoading] = useState(true)
  const [dark, setDark] = useState(false)
  const [light, setLight] = useState(false)
  const [minimize, setMinimize] = useState(false)

  useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 2000)
  },[])

  return (
    <div>
    {!loading ? (
    <div>
    <Router>
    <Navbar
        minimize = {minimize}
    />
    <Sidebar 
        dark = {dark} 
        minimize = {minimize}
        setMinimize = {setMinimize}
        setDark = {setDark} 
        light = {light} 
        setLight = {setLight} 
    />
    
      <Routes>
        <Route path='/' element = {
            <Main 
              dark = {dark} 
              minimize = {minimize}
              setMinimize = {setMinimize}
              setDark = {setDark} 
              light = {light} 
              setLight = {setLight}
            />
          }
        />
        <Route path='/portfolio' element = {
            <Portfolio 
              dark = {dark} 
              minimize = {minimize}
              setMinimize = {setMinimize}
              setDark = {setDark} 
              light = {light} 
              setLight = {setLight}
            />
          }
        />
         <Route path="/about" element = {
           <About
              dark = {dark} 
              minimize = {minimize}
              setMinimize = {setMinimize}
              setDark = {setDark} 
              light = {light} 
              setLight = {setLight}
           />
         }/>
      </Routes> 
    </Router>
    </div>
    ) : (
    <div className='Loading'>
      <h2 className='h2'>USE AND HEADSET FOR BETTER EXPERIENCE <MdOutlineHeadsetMic className='headset'/></h2>
      <ImSpinner5 className='spinner'/>
    </div>
    )
       }
    </div>
  )
}

export default App
