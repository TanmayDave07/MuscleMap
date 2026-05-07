import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <ScrollMenu>
      {data.map((item) => (
        <div
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          className="mx-10"
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;