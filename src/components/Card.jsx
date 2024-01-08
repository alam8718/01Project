import React from "react";

const Cards = ({img, user_number, size, access_num, send}) => {
  return (
    <div className="w-full py-10 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={img} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">{user_number}</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">{`${size}  GB Storage`}</p>
            <p className="py-2 border-b mx-8">{`${access_num}  granted User`}</p>
            <p className="py-2 border-b mx-8">{`Send Upto ${send} `}</p>
          </div>
          <button className="bg-black hover:bg-[#00df9a] hover:text-black text-[#00df9a] duration-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Cards;
