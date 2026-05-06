import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
    return (
        <button 
            type="button"
            className={`bodyPart-card flex flex-col items-center justify-center bg-white rounded-bl-[20px] w-[270px] h-[282px] cursor-pointer gap-[47px] ${bodyPart === item ? 'border-t-4 border-[#ff2625]' : ''}`}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}
        >
            <img src={Icon} alt='dumbbell' style={{width: '150px', height: '150px'}}/>
            <p className="text-[24px] font-bold font-alegreya text-[#3A1212] capitalize">
                {item}
            </p>
        </button>
    )
}

export default BodyPart