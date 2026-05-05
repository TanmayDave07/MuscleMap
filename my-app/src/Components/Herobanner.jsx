import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <div className='relative p-[20px] mt-[70px] lg:mt-[212px] sm:ml-[50px]'>
            <p className='text-red-600 font-semibold text-[30px]'>Hero Banner</p>
            <h1 className='font-bold text-[40px] lg:text-[44px] mb-[23px] mt-[30px]'>Sweat, Smile <br /> and Repeat</h1>
            <p className='text-[22px] leading-[35px] mb-8'>Check out the most effective exercises</p>
            <a href='#exercises' className='inline-block bg-[#ff2625] text-white px-[10px] py-[10px] rounded no-underline hover:bg-[#e02120] transition-colors'>Explore Exercises</a>
            <div className='flex'>
                <a href='#exercises' className='no-underline w-fit px-[20px] py-[10px] text-[22px] bg-[#ff2625] text-white rounded'>Explore Exercises</a>
            </div>
            <p className='font-semibold text-[#ff2625] opacity-10 hidden lg:block text-[200px]'>Exercise</p>
            <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
        </div>
    )
}

export default HeroBanner