import bruh1 from "../assets/bruhbears1.png";
import bruh2 from "../assets/bruhbears2.png";
import bruh3 from "../assets/bruhbears3.png";
import myportfoliowebsite from "../assets/myportfoliowebsite.png";
import myportfoliowebsite2 from "../assets/portfolio2.png";
import myportfoliowebsite3 from "../assets/portfolio3.png";
import faynd1 from "../assets/faynd1.png";
import faynd2 from "../assets/faynd2.png";
import faynd3 from "../assets/faynd3.png";
import weather from "../assets/weather.png";
import Dloto1 from "../assets/Dloto1.png";
import Dloto2 from "../assets/Dloto2.png";
import basicchathome from "../assets/basic chat home.png";
import basicchatauth from "../assets/desktop chat auth1.png";
import basicchat from "../assets/desktop chat1.png";
import basicchatmobile from "../assets/mobile chat 1.png";
import pageblocker1 from "../assets/pageblocker1.png";
import pageblocker2 from "../assets/pageblocker2.png";
import pageblocker3 from "../assets/pageblocker3.png";
import anical1 from "../assets/anical1.png";
import anical2 from "../assets/anical2.png";
import anical3 from "../assets/anical3.png";
import anical4 from "../assets/anical4.png";
import anical5 from "../assets/anical5.png";
import anical6 from "../assets/anical6.png";
import neotech1 from "../assets/neotech1.png";
import neotech2 from "../assets/neotech2.png";
import neotech3 from "../assets/neotech3.png";

export const projects = [
  // {
  //     name : "nft music player",
  //     description: "this is an app that lets you play music and as your nft",
  //     image: ["https://images.pexels.com/photos/17196111/pexels-photo-17196111/free-photo-of-fashion-people-woman-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"],
  //     stack: ["react","solidity","nodejs", "ongoing"]
  // },
  {
    name: "weather app",
    description:
      "you enter the country and you will get the exact temperature, wind speed, humidity and temperature of that country",
    image: [weather],
    link: "https://weatherapp-p3y3.onrender.com",
    stack: ["react", "api", "axios"],
  },
  {
    name: "page blocker",
    description:
      "This Chrome extension is designed to enhance focus and productivity by temporarily blocking selected users from accessing specific websites or features. Users can set a custom time limit, during which the block remains active, helping to enforce breaks or timeouts from distractions. Once the time has been met, access is automatically restored, ensuring a smooth, controlled browsing experience.",
    image: [pageblocker1, pageblocker2, pageblocker3],
    link: "https://github.com/chidubemOkafor/web_blocker",
    stack: ["javascript", "HTML", "CSS", "Chrome Extensions API"],
  },
  {
    name: "anical",
    description:
      "Anical is an intuitive platform designed for anime enthusiasts, allowing users to search for their favorite shows, add them to a personalized watchlist, and receive timely email notifications whenever a new episode is released. With Anical, staying up-to-date with the latest episodes is seamless, ensuring that users never miss a release. The system is built with a focus on user convenience and offers an effortless way to manage anime-watching schedules.",
    image: [anical1, anical2, anical3, anical4, anical5, anical6],
    link: "https://github.com/chidubemOkafor/server.git",
    stack: [
      "ongoing",
      "react+ts",
      "api",
      "axios",
      "passportjs",
      "typescript",
      "auth",
      "python",
      "cron",
    ],
  },
  {
    name: "neotech",
    description: "My software development agency",
    image: [neotech1, neotech2, neotech3],
    link: "https://weatherapp-p3y3.onrender.com",
    stack: ["ongoing", "react"],
  },
  // {
  //     name : "decentralized exchange",
  //     description: "this is a decentralized exchange that lets you create liquidity and swap tokens ",
  //     image: ["https://images.pexels.com/photos/13354306/pexels-photo-13354306.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"],
  //     link: "https://github.com/chidubemOkafor/weatherapp?tab=readme-ov-file",
  //     stack: ["react","solidity","nodejs","tailwind","ongoing"]
  // },
  {
    name: "basic chat",
    description:
      "basic chat app Is a chat app that lets you level up the more you use it. you can add friends, view level leaderboard and communicate privately.",
    image: [basicchathome, basicchatauth, basicchat, basicchatmobile],
    link: "https://basicchatapp-frontend1.onrender.com",
    stack: ["react", "nodejs", "express", "mongodb", "socket.io"],
  },
  {
    name: "portfolio website v1",
    description: "the current version of my portfolio website",
    image: [myportfoliowebsite, myportfoliowebsite2, myportfoliowebsite3],
    link: "https://chidubemokafor.onrender.com",
    stack: ["vite", "react", "css"],
  },
  {
    name: "bruh bear",
    description: "bruh bear is a game I developed from my love of flappy bird",
    image: [bruh1, bruh2, bruh3],
    link: "https://bruhbird.vercel.app/",
    stack: ["html", "css", "javascript"],
  },
  {
    name: "FAYND",
    description:
      "this is a place where users can report their lost items and each reported items can be tracked with their unique numbers(IMEI, Serial number, VIN)",
    image: [faynd1, faynd2, faynd3],
    link: "https://faynd-pxuc.vercel.app/",
    stack: ["react", "vite", "css", "axios"],
  },
  //https://d-lotto-frontend.vercel.app/
  {
    name: "Dloto (Decentralized loto)",
    description:
      "Dloto is a simple decentralized lottery app where you select 6 numbers and if you match a certain amount of numbers you win a prize",
    image: [Dloto1, Dloto2],
    link: "https://d-lotto-frontend.vercel.app/",
    stack: ["react", "typescript", "tailwind", "solidity", "css", "hardhat"],
  },
];
