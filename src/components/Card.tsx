import React from "react";

type cardType = {
  title: string;
  value: number;
};
const Card: React.FC<cardType> = ({ title, value }) => {
  return (
    <div className="flex justify-center w-full items-center  h-40 rounded shadow-lg bg-white">
      <p className="text-lg font-semibold whitespace-pre text-gray-500">
        {title}: {value}
      </p>
    </div>
  );
};

export default Card;
