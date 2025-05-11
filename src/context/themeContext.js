import React, { useState, useEffect, createContext } from 'react'
import gsap from "gsap"

export const ThemeContext = createContext()

export default function ThemeContextProvider(props) {

  const getInitialTheme = () => {
    const local = localStorage.getItem('darkTheme')
    if(!local) return window.matchMedia('(prefers-color-scheme: dark)').matches
    else return local === 'true'
  }

  const [darkTheme, setDarkTheme] = useState(getInitialTheme)  

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
    localStorage.setItem('darkTheme', !darkTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('dark', darkTheme)
    document.body.classList.toggle('light', !darkTheme)

    if(darkTheme) {
        gsap.to('.dark', {
            background: "linear-gradient(6deg, rgb(14, 17, 35), rgb(67 36 21)) no-repeat",
            duration: 0.2,
            ease: "power3.in"
        })
        gsap.to('.dark .App > div', {
            background: "rgba(170, 154, 125, 0.2)",
            color: "#fff",
            delay: 0.1,
            ease: "power3.in"
        })
    } else {
        gsap.to('.light', {
            background: "linear-gradient(6deg, rgb(207 163 131), rgb(241 213 177)) no-repeat",
            duration: 0.1,
            ease: "power3.in"
        })
        gsap.to('.light .App > div', {
            background: "##ffffff26",
            color: "#543730",
            delay: 0.2,
            ease: "power3.in"
        })
    }
  }, [darkTheme])

  return (
    <ThemeContext.Provider value={{darkTheme, setDarkTheme, toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
  )
}
