import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <div className='hero-banner-container'>
            <div className='hero-banner-content'>
                <p className='text-red-600 font-semibold text-[26px]'>Fitness Club</p>
                <h1 className='font-bold text-[40px] lg:text-[44px] mb-[23px] mt-[30px]'>Sweat, Smile <br /> And Repeat</h1>
                <p className='text-[22px] leading-[35px] mb-8'>Check out the most effective exercises personalized to you</p>
                <a href='#exercises' className='hero-btn'>Explore Exercises</a>
                <p className='hero-banner-watermark' style={{marginLeft:"10px"}}>Exercise</p>
            </div>
            <div className='hero-banner-img-wrapper'>
                <img src={HeroBannerImage} alt='banner' className='hero-banner-img' style={{marginRight:"10px", width:"90%", borderRadius:"50px"}}/>
            </div>
        </div>
    )
}

export default HeroBanner