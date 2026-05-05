import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
    return (
        <div className='flex flex-row gap-[40px] sm:gap-[122px] mt-[20px] sm:mt-[32px] px-[20px]'>
            <Link to='/'>
                <img src={Logo} alt='logo' className='w-[48px] h-[48px] mx-[20px]' />
            </Link>
            <div className='flex flex-row gap-[40px] text-[24px] items-end'>
                <Link to='/' className='no-underline text-[#3A1212] text-[24px] font-bold'>Home</Link>
                <a href='#exercises' className='no-underline text-[#3A1212] text-[24px] font-bold'>Exercises</a>
            </div>
            <div className='flex'>
                <Link to='/exercise' className='no-underline text-[#3A1212] text-[24px] font-bold'>Exercises</Link>
            </div>
        </div>
    )
}

export default Navbar