import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }
            setExercises(exercisesData);
        }
        fetchExercisesData();
    }, [bodyPart])

    return (
        <div className="mt-0 lg:mt-[110px] p-[20px]">
            <h4 className="text-3xl mb-[46px]">
                Showing Results
            </h4>
            <div className="flex flex-row flex-wrap justify-center gap-[50px] lg:gap-[110px]">
                {exercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </div>
        </div>
    )
}

export default Exercises