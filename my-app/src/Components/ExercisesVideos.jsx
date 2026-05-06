import React from 'react';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) return <Loader />;

  return (
    <div className="mt-5 lg:mt-[203px] p-5">
      <h2 className="text-[25px] lg:text-[44px] font-bold text-black mb-[33px]">
        Watch <span className="text-[#FF2625] capitalize">{name}</span> exercise videos
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-0 lg:gap-[110px] justify-start items-center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img className="rounded-tl-[20px]" src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <p className="text-[18px] lg:text-[28px] font-semibold text-black">
                {item.video.title}
              </p>
              <p className="text-[14px] text-black">
                {item.video.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;