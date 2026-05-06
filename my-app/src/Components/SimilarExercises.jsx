import React from 'react';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div className="mt-0 lg:mt-[100px]">
    <h2 className="text-[25px] lg:text-[44px] ml-5 font-bold text-black mb-[33px]">
      Similar <span className="text-[#FF2625] capitalize">Target Muscle</span> exercises
    </h2>
    <div className="flex flex-row p-2 relative">
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </div>
    <h2 className="text-[25px] lg:text-[44px] ml-5 mt-[60px] lg:mt-[100px] font-bold text-black mb-[33px]">
      Similar <span className="text-[#FF2625] capitalize">Equipment</span> exercises
    </h2>
    <div className="flex flex-row p-2 relative">
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </div>
  </div>
);

export default SimilarExercises;