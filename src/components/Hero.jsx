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
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <Typed
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
