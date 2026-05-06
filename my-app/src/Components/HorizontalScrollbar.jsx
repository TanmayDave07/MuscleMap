import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <button onClick={() => scrollPrev()} className="right-arrow bg-transparent border-none cursor-pointer">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <button onClick={() => scrollNext()} className="left-arrow bg-transparent border-none cursor-pointer">
      <img src={RightArrowIcon} alt="right-arrow" />
    </button>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          className="mx-10"
        >
          {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
        </div>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;