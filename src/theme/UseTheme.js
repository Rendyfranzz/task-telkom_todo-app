import { useState,useEffect } from "react"


const UseTheme = () => {
    const [theme,setTheme] = useState("light");
    const nextTheme = theme === "dark" ? "light" :"dark";
    useEffect(()=>{
        
        const rootElement = window.document.documentElement;
        rootElement.classList.remove(nextTheme)
        rootElement.classList.add(theme)
        localStorage.setItem("theme",theme)
    },[theme,nextTheme]);
   
  
    return[nextTheme,setTheme];
}

export default UseTheme