import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const isInitialMount = React.useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            if (exercises.length > 0) return;
        }

        const fetchExercisesData = async () => {
            let exercisesData = [];

            try {
                if (bodyPart === 'all') {
                    exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=100', exerciseOptions);
                } else {
                    exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100`, exerciseOptions);
                }
                if (Array.isArray(exercisesData)) {
                    setExercises(exercisesData);
                }
            } catch (error) {
                console.error('Error fetching exercises:', error);
            }
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