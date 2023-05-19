import React from 'react'
import UseTheme from '../theme/UseTheme';
import { FaMoon, FaSun } from 'react-icons/fa'

const Header = () => {
    const [nextTheme, setTheme] = UseTheme();
    return (
        <div className='sticky top-0 shadow-sm z-20 h-10'>
            <nav className="flex items-center    justify-center transition-colors dark:bg-gray-800 dark:text-white">
                <div className="w-full flex items-center align-baseline">
                    <span className='font-bold'>Todo App</span>
                    <button className='transition-all duration-300 p-2' onClick={(event) => {setTheme(nextTheme) }}>{nextTheme ? <FaSun size={20} /> : <FaMoon size={20} />
                        }</button>
                </div>
            </nav>
        </div>
    )
}


export default Header