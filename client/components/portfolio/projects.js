import bruh1 from '../assets/bruhbears1.png'
import bruh2 from '../assets/bruhbears2.png'
import bruh3 from '../assets/bruhbears3.png'
import myportfoliowebsite from '../assets/myportfoliowebsite.png'
import myportfoliowebsite2 from '../assets/portfolio2.png'
import myportfoliowebsite3 from '../assets/portfolio3.png'
import faynd1 from '../assets/faynd1.png'
import faynd2 from '../assets/faynd2.png'
import faynd3 from '../assets/faynd3.png'
import weather from '../assets/weather.png'
import Dloto1 from '../assets/Dloto1.png'
import Dloto2 from '../assets/Dloto2.png'

export const projects = [
    // {
    //     name : "nft music player",
    //     description: "this is an app that lets you play music and as your nft",
    //     image: ["https://images.pexels.com/photos/17196111/pexels-photo-17196111/free-photo-of-fashion-people-woman-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"],
    //     stack: ["react","solidity","nodejs", "ongoing"]
    // },
    {
        name : "weather app",
        description: "you enter the country and you will get the exact temperature, wind speed, humidity and temperature of that country",
        image: [weather],
        link: "https://github.com/chidubemOkafor/weatherapp?tab=readme-ov-file",
        stack: ["react","api","axios"]
    },
    // {
    //     name : "decentralized exchange",
    //     description: "this is a decentralized exchange that lets you create liquidity and swap tokens ",
    //     image: ["https://images.pexels.com/photos/13354306/pexels-photo-13354306.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"],
    //     link: "https://github.com/chidubemOkafor/weatherapp?tab=readme-ov-file",
    //     stack: ["react","solidity","nodejs","tailwind","ongoing"]
    // },
    // {
    //     name : "blog",
    //     description: "a real working blow ",
    //     image: ["https://images.pexels.com/photos/17260660/pexels-photo-17260660/free-photo-of-city-restaurant-vacation-people.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"],
    //     stack: ["react","nodejs","express","sql"]
    // },
    {
        name : "portfolio website v1",
        description: "the current version of my portfolio website",
        image: [myportfoliowebsite,myportfoliowebsite2,myportfoliowebsite3],
        stack: ["vite","react","css"]
    },
    {
        name : "bruh bear",
        description: "bruh bear is a game I developed from my love of flappy bird",
        image: [bruh1,bruh2,bruh3],
        link: "https://bruhbird.vercel.app/",
        stack: ["html","css","javascript"]
    },
    {
        name : "FAYND",
        description: "this is a place where users can report their lost items and each reported items can be tracked with their unique numbers(IMEI, Serial number, VIN)",
        image: [faynd1,faynd2,faynd3],
        link: "https://faynd-pxuc.vercel.app/",
        stack: ["react","vite","css","axios"]
    },
    //https://d-lotto-frontend.vercel.app/
    {
        name : "Dloto (Decentralized loto)",
        description: "Dloto is a simple decentralized lottery app where you select 6 numbers and if you match a certain amount of numbers you win a prize",
        image: [Dloto1,Dloto2],
        link: "https://d-lotto-frontend.vercel.app/",
        stack: ["react","typescript","tailwind","solidity","css","hardhat"]
    },
]