"use client"
import {MdLightMode} from "react-icons/md";
import {BsFillMoonFill} from "react-icons/bs"
import {useTheme} from "next-themes"
// import { useEffect } from "react";

export default function DarkModeSwitch() {
  const {systemTheme, theme, setTheme} = useTheme()

 
    const currentTheme = theme === "system"?systemTheme:theme;

  // useEffect(() => {
  //   if (currentTheme) {
  //     setTheme(currentTheme)
  //   } else {
  //     setTheme("light")
  //   }
  // }, [])
  
  

  return (
    <>
      <button onClick={() => console.log(systemTheme, theme)} >EEE</button>
      {currentTheme === "dark"?<MdLightMode onClick={() => setTheme("light")} />:<BsFillMoonFill onClick={() => setTheme("dark")} />}
      
      
    </>
  )
}
