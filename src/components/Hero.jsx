import React from "react";
import Typed from "react-typed";
function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-full mt-[-96px] w-full h-screen flex flex-col items-center justify-center text-center">
        <p className="uppercase text-[#00df9a] p-2">
          growing with data analytics
        </p>
        <h1 className="text-3xl md:text-7xl sm:text-6xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex gap-4">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="p-4  md:text-2xl text-xl font-bold text-gray-500">
          Pointer your data analytics to increase revenue for BT, BTC & SASS
          platform.
        </p>
        <button className="px-10 py-3 rounded-md bg-[#00df9a] text-black capitalize font-bold hover:bg-[#00df9a]/80 duration-500">
          get started
        </button>
      </div>
    </div>
  );
}

export default Hero;
