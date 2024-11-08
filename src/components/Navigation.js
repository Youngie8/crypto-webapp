import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='w-[40%] mt-16 flex justify-around align-middle
    border border-cyan rounded-lg
    '>
        <NavLink to={"/"} end className={
            ({isActive}) => {
               return `w-full text-base text-center font-nunito m-2.5  rounded capitalize font-semibold border-0 cursor-pointer
               ${isActive? "bg-cyan text-gray-300" : 'hover:text-cyan  bg-gray-200 text-gray-100'} 
                `
            }
        }>
            Crypto
        </NavLink>
        <NavLink to={"/trending"} className={
            ({isActive}) => {
               return `w-full text-base text-center font-nunito m-2.5  rounded capitalize font-semibold border-0 cursor-pointer
               ${isActive? "bg-cyan text-gray-300" : 'hover:text-cyan bg-gray-200 text-gray-100'} 
                `
            }
        }>
            Trending
        </NavLink>
        <NavLink to={"/saved"} className={
            ({isActive}) => {
               return `w-full text-base text-center font-nunito m-2.5 rounded capitalize font-semibold border-0 cursor-pointer
               ${isActive? "bg-cyan text-gray-300" : 'hover:text-cyan bg-gray-200 text-gray-100 '} 
                `
            }
        }>
            Saved
        </NavLink>
    </nav>
  )
}

export default Navigation