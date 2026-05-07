import React, { useState } from 'react'
import Herobanner from '../Components/Herobanner'
import SearchExercise from '../Components/SearchExercises'
import Exercises from '../Components/Exercises'
const Home = () => {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')

    return (
    <div>
        <Herobanner/>
        <SearchExercise
            exercises={exercises}
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
        />
        <Exercises
            exercises={exercises}
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
        />
    </div>
    )
}

export default Home