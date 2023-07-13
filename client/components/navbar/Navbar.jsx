import React,{useState} from 'react'
import {GoHome} from "react-icons/go"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {MdWorkOutline} from "react-icons/md"
import {RiContactsLine} from "react-icons/ri"
import {FiX} from "react-icons/fi"
import {GiHamburgerMenu} from "react-icons/gi"
import "./Navbar.css"

const Navbar = () => {
  const [isRollDown, setIsRollDown] = useState(false);

  const toggleBar = () => {
    setIsRollDown(!isRollDown);
  };

  return (
    <div>
      <div className="second_navbar_container">
        <div className="gap_of">
          <p className="my_name">Okafor Chidubem</p>
          {!isRollDown ? (
            <GiHamburgerMenu
              onClick={toggleBar}
              className={`hamburger ${isRollDown ? 'rotate' : ''}`}
            />
          ) : (
            <FiX onClick={toggleBar} className="hamburger" />
          )}
        </div>
      </div>
      <div
        className={`roll_down ${isRollDown ? 'scroll_down' : 'scroll_up'}`}
        onAnimationEnd={() => {
          if (!isRollDown) {
            setIsRollDown(false);
          }
        }}
      >
        {isRollDown && (
          <>
            <p className="bar">Home</p>
            <p className="bar">About</p>
            <p className="bar">Portfolio</p>
            <p className="bar">Contact</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;



