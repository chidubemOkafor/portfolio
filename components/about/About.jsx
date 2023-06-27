import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsLinkedin, BsDiscord } from 'react-icons/bs';
import typing from '../../src/assets/audio/quick-mechanical-keyboard-14391.mp3';

const About = (prop) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const [text, setText] = useState('');
  const textElement =
    "C*hidubem Okafor is a blockchain and software developer skilled in Solidity, CSS, HTML, Rust, and Python. Currently pursuing Electrical/Electronics Engineering at Anambra State University. Actively participated in Chainlink hackathons, expanding expertise in blockchain development. Enthusiastic about learning new technologies and staying up-to-date with industry trends. Also an avid anime enthusiast. Let's connect and embark on this exciting technological journey together!";
  const typingSpeed = 10;

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleAudioEnded = () => {
      audioElement.load(); // Reset and reload the audio
      audioElement.play(); // Start playing the audio again
    };

    audioElement.addEventListener('ended', handleAudioEnded);

    return () => {
      audioElement.removeEventListener('ended', handleAudioEnded);
    };
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
      audioElement.load(); // Reset and reload the audio
    }

    let textIndex = 0;

    const textChar = () => {
      if (textIndex < textElement.length) {
        setText(prevText => prevText + textElement.charAt(textIndex));
        textIndex++;
      }
    };

    const typingInterval = setInterval(textChar, typingSpeed);
    setIsPlaying(false)

    return () => {
      clearInterval(typingInterval);
    };
  }, [isPlaying]);

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  return (
  <div className='origin_about'>
    <div className={`paragraph_container ${prop.minimize ? "translate-out-project " : "translate-in-project"}`}>
      <audio ref={audioRef} src={typing} />
      <div className="paragraph">
        <div className="div">
            <div className='about_background'></div>
        </div>
        <div className="text_about_div">
          <h1>Who am I?</h1>
          <p>{text}</p>
          <div className="icons">
            <AiOutlineTwitter className="twitter" />
            <BsLinkedin className="linkedin" />
            <BsDiscord className="discord" />
          </div>
        </div>
      </div>
    </div>
 </div>
  );
};

export default About;
