import React, { useState } from 'react'
import UseTheme from '../theme/UseTheme';
import { FaMoon, FaSun } from 'react-icons/fa'

const Header = () => {
    const [nextTheme, setTheme] = UseTheme();
    const [icon,setIcon] = useState(false)
    return (
        <div className='sticky top-0 z-20 h-10 shadow-sm'>
            <nav className="flex items-center justify-center h-full p-4 transition-colors bg-light dark:bg-dark dark:text-gray-200">
                <div className="flex items-center justify-between w-full align-baseline">
                    <span className='text-2xl font-bold'>Todo App</span>
                    <button className='p-2 transition-all duration-300' onClick={(event) => {setIcon(!icon); setTheme(nextTheme) }}>{icon ? <FaSun size={20} /> : <FaMoon size={20} />
                        }</button>
                </div>
            </nav>
        </div>
    )
}


export default Header