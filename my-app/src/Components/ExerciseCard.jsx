import React from 'react'
import { Link } from 'react-router-dom'
import { exerciseOptions } from '../utils/fetchData'

const ExerciseCard = ({ exercise }) => {
    return (
        <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
            <img src={`https://exercisedb.p.rapidapi.com/image?exerciseId=${exercise.id}&resolution=180&rapidapi-key=${exerciseOptions.headers['x-rapidapi-key']}`} alt={exercise.name}  loading='lazy'/>
            <div className="flex flex-row">
                <span className="ml-[21px] text-white bg-[#ffa9a9] text-[14px] rounded-[20px] capitalize px-3 py-1 inline-block">
                    {exercise.bodyPart}
                </span>
                <span className="ml-[21px] text-white bg-[#fcc757] text-[14px] rounded-[20px] capitalize px-3 py-1 inline-block">
                    {exercise.target}
                </span>
            </div>
            <p className="ml-[21px] text-black font-bold mt-[11px] pb-[10px] capitalize text-[22px]">
                {exercise.name}
            </p>
        </Link>
    )
}

export default ExerciseCard