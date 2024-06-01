import React, { useEffect, useState } from 'react'
import Home from '../pages/home/Home'
import { Link } from 'react-router-dom'

const Root = () => {
    const [themeDark, setThemeDark] = useState(false)
    const [toggle, setToggle] = useState(false)



    // dark theme changing using localstorage
    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme) {
            setThemeDark(true)
            setToggle(true)
        }
        else {
            setThemeDark(false)
            setToggle(false)
        }
    }, [themeDark])
    // handle dark theme toggle
    const handleToggoleButton = () => {
        setThemeDark(!themeDark)
        if (themeDark) {
            setToggle(true)
            localStorage.removeItem("theme")
        }
        else {
            setToggle(false)
            localStorage.setItem("theme", "dark")
        }
    }

    return (
        <div className={`${themeDark ? "dark" : "light"}`}>
            <nav className='border-b dark:bg-slate-900 border-slate-700 dark:text-white'>
                <div className="container mx-auto flex items-center justify-between">
                    <h2 className='font-semibold text-xl dark:text-white'>AgSpert Technologies Private Limited</h2>
                    <ul>
                        <li className='py-2'>
                            <Link to="/" className='font-semibold text-lg'>Home</Link>
                        </li>
                    </ul>
                    {/* toggle theme */}
                    <div className={`${toggle ? "bg-white" : "bg-black"} w-7 h-4 rounded-full relative cursor-pointer`} onClick={handleToggoleButton}>
                        <div className={`absolute h-[90%] w-[50%] rounded-full duration-200 m-[1px] ${toggle ? "left-0 bg-black" : "right-0 bg-white"}`}></div>
                    </div>
                </div>
            </nav >
            <Home></Home>
        </div >
    )
}

export default Root