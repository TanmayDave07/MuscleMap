import React, { useState , useEffect} from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExercisesData();
    }, [])


    const handleSearch = async () => {
        if(search){
            try {
                const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=0', exerciseOptions);

                if (!Array.isArray(exerciseData)) {
                    console.error('API returned non-array response:', exerciseData);
                    return;
                }

                const searchedExercises = exerciseData.filter((exercise) => 
                    exercise.name.toLowerCase().includes(search) 
                    || exercise.target.toLowerCase().includes(search) 
                    || exercise.equipment.toLowerCase().includes(search) 
                    || exercise.bodyPart.toLowerCase().includes(search)
                );

                setSearch('');
                setExercises(searchedExercises);
            } catch (error) {
                console.error('Error searching exercises:', error);
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center p-[20px] mt-[37px]">
            <h2 className="text-[30px] lg:text-[44px] text-center font-bold mb-[50px]">
                Awesome Exercises You <br /> Should Know
            </h2>
            <div className="relative mb-[72px] flex items-center">
                <input 
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                    className="h-[76px] font-bold border-none outline-none w-[350px] lg:w-[1000px] bg-white rounded-full px-5"
                />
                <button 
                    className="search-btn bg-[#ff2625] text-white normal-case w-[80px] lg:w-[173px] text-[14px] lg:text-[20px] h-[56px] absolute right-0 rounded-r-full hover:bg-red-700 transition-colors"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <div className="relative w-full p-[20px]">
                <HorizontalScrollbar data={bodyParts} bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </div>
        </div>
    )
}

export default SearchExercises