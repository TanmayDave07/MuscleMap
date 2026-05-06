import React from 'react';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-[60px] p-5 items-center">
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <div className="flex flex-col gap-5 lg:gap-[35px]">
        <h1 className="text-[30px] lg:text-[64px] font-bold capitalize">
          {name}
        </h1>
        <p className="text-[18px] lg:text-[24px] text-[#4F4C4C]">
          Exercises keep you strong.{' '}
          <span className="capitalize">{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </p>
        {extraDetail?.map((item) => (
          <div key={item.name} className="flex flex-row gap-6 items-center">
            <button className="bg-[#FFF2DB] rounded-full w-[100px] h-[100px] flex items-center justify-center border-none cursor-pointer">
              <img src={item.icon} alt={bodyPart} className="w-[50px] h-[50px]" />
            </button>
            <p className="capitalize text-[20px] lg:text-[30px]">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;