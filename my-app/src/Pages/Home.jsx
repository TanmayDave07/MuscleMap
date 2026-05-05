import React from 'react'
import Herobanner from '../Components/Herobanner'
import SearchExercise from '../Components/SearchExercises'
import Exercises from '../Components/Exercises'
import Footer from '../Components/Footer'

const Home = () => {
    return (
    <div>
        <Herobanner/>
        <SearchExercise/>
        <Exercises/>
    </div>
    )
}

export default Home