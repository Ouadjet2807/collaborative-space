import React, {useContext, useState} from 'react'
import { ThemeContext } from '../context/themeContext'
import { BsBarChart } from 'react-icons/bs'
import { BsFillPinFill } from 'react-icons/bs'
import { BsSignpost2 } from 'react-icons/bs'
import { BsPeople } from 'react-icons/bs'
import { BsSpeedometer } from 'react-icons/bs'
import { BsJournals } from 'react-icons/bs'
import { BsInboxes  } from 'react-icons/bs'
import { BsPersonCircle  } from 'react-icons/bs'
import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import gsap from "gsap"
import useWindowDimensions from '../hook/useWindowDimensions'

export default function LeftBar({setActiveComponent, activeComponent}) {

  const [tabIsOpen, setTabIsOpen] = useState(false)
  const [tabIsPinned, setTabIsPinned] = useState(false)

  const {darkTheme, toggleTheme} = useContext(ThemeContext)

  const {width, height} = useWindowDimensions()

  const tl = gsap.timeline()

  const extend = () => {
    if(!tabIsPinned) {
      tl.to('.leftBar', {
        width: "15vw",
        ease: "back.inOut",
        duration: 0.3,
      })
      .to('.leftBar li', {
        padding: '15px 2vw',
        justifyContent: "left",
        ease: "back.inOut",
        duration: 0.3
      })
      .to('.leftBar span', {
        opacity: 1,
        display: "block",
        ease: "back.inOut",
        duration: 0.3
      })
      
      
      setTabIsOpen(true)
    }
  }

  const shorten = () => {
    if(!tabIsPinned) {
    tl.to('.leftBar li', {
      padding: '15px 1vw',
      ease: "back.inOut",
      duration: 0.3
    })
    .to('.leftBar span', {
      opacity: 0,
      display: "none",
      duration: 0.3,
      ease: "back.inOut"
    })
    .to('.leftBar', {
      width: width > 1600 ? "4vw" : "6vw",
      duration: 0.3,
      ease: "back.inOut",
      onComplete: () => {
        gsap.to(".leftBar li", {
          justifyContent: "center",
          duration: 0.3
        })
      }
    })
    

    setTabIsOpen(false)
   }
  }

  const handleComponent = (component) => {
    if(!component) {
      return
    } else {
      setActiveComponent(component)
    }
  }

  return (
    <div className="leftBar" onMouseEnter={extend} onMouseLeave={shorten}>
        <div className="header">
        {tabIsOpen &&
        <div className={`pin ${tabIsPinned ? "active" : ""}`} onClick={() => setTabIsPinned(!tabIsPinned)}><BsFillPinFill /></div>
        }
            <h4>Menu</h4>
            <div className="logo"></div>
        </div>
        <div className="nav">
            <ul className="tab">
                <li onClick={(e) => handleComponent(e.target.innerText)} className={activeComponent === "Dashboard" ? "active" : ""}><BsSpeedometer /> <span>Dashboard</span></li>
                <li onClick={(e) => handleComponent(e.target.innerText)} className={activeComponent === "Drive" ? "active" : ""}><BsInboxes/> <span>Drive</span></li>
                <li onClick={(e) => handleComponent(e.target.innerText)} className={activeComponent === "Statistics" ? "active" : ""}><BsBarChart/> <span>Statistics</span></li>
                <li onClick={toggleTheme}>{darkTheme ? <IoMdSunny/> : <IoMdMoon/>} <span>{darkTheme ? "Light" : "Dark"} mode</span></li>
                <li onClick={(e) => handleComponent(e.target.innerText)} className={activeComponent === "Account" ? "active" : ""}><BsPersonCircle/> <span>Account</span></li>
            </ul>
        </div>
    </div>
  )
}
