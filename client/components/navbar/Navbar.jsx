import React, { useState } from 'react';
import { GoHome } from 'react-icons/go';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';
import { BiCaretDown } from "react-icons/bi";
import { BiCaretUp } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isRollDown, setIsRollDown] = useState(false);

  const toggleBar = () => {
    setIsRollDown(!isRollDown);
  };

  return (
    <div>
      <div className="second_navbar_container">
        <div className="gap_of">
          {!isRollDown ? (
            <BiCaretDown
              onClick={toggleBar}
              className={`hamburger ${isRollDown ? 'rotate' : ''}`}
            />
          ) : (
            <BiCaretUp onClick={toggleBar} className="hamburger" />
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
            <p className="nav">
              <Link className="link" to="/">
                Home
              </Link>
            </p>
            <p className="nav">
              <Link className="link" to="/about">
                About
              </Link>
            </p>
            <p className="nav">
              <Link className="link" to="/portfolio">
                Projects
              </Link>
            </p>
            <p className="nav">
              <Link className="link" to="/contact">
                Contact
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
