import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center  md:flex-row md:justify-between md:items-center px-10 gap-10 ">
        <div className="sm:flex sm:flex-col sm:items-center ">
          <h1 className="md:text-3xl font-semibold   text-xl sm:text-2xl py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 rounded-md"
          />
          <button className="px-4 py-2 bg-[#00df9a] mx-3 rounded-md text-black font-semibold ">
            Notify me
          </button>
          <p className="pt-5 ">
            We care about the protection of your data. Read our{" "}
          </p>
          <a href="#" className="underline text-[#00fd9a]">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
