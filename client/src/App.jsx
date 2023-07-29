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
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const [dark, setDark] = useState(false)
  const [light, setLight] = useState(false)
  const [minimize, setMinimize] = useState(false)
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 2000)
  },[])

  useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Add event listener for the 'resize' event
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
    {!loading ? (
    <div>
    <Router>
    {isMobile ? <Navbar/> : <></>}
  
  {!isMobile? <Sidebar 
        isMobile = {isMobile}
        dark = {dark} 
        minimize = {minimize}
        setMinimize = {setMinimize}
        setDark = {setDark} 
        light = {light} 
        setLight = {setLight} 
    />: <></>}
    
      <Routes>
        <Route path='/' element = {
            <Main 
              isMobile = {isMobile}
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
              isMobile = {isMobile}
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
              isMobile = {isMobile}
              dark = {dark} 
              minimize = {minimize}
              setMinimize = {setMinimize}
              setDark = {setDark} 
              light = {light} 
              setLight = {setLight}
           />
         }/>
         <Route path='/contact' element = {
            <Contact
              isMobile = {isMobile}
              dark = {dark} 
              minimize = {minimize}
              setMinimize = {setMinimize}
              setDark = {setDark} 
              light = {light} 
              setLight = {setLight}
            />
         }/>
      </Routes> 
      {isMobile ? <Footer/> : <></>}
    </Router>
    </div>
    ) : (
    <div className='Loading'>
      <ImSpinner5 className='spinner'/>
    </div>
    )
       }
    </div>
  )
}

export default App
