import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 h-[800px] flex  text-white">
      <div className="max-w-[1240px] h-full mx-auto flex flex-col items-center justify-center md:flex-row md:justify-around  gap-20 ">
        {/* texts  */}
        <div className=" sm:flex sm:flex-col sm:items-center ">
          <h1 className="md:text-3xl font-semibold   text-xl sm:text-2xl py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        {/* input and button  */}
        <div className="flex flex-col items-center gap-6">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 rounded-md w-[300px] text-black outline-none "
          />
          <button className="bg-[#00df9a]  text-black hover:scale-105  duration-300 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Notify Me
          </button>
          <div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <p> We care about the protection of your data. Read our</p>
            </div>
            <a href="#" className="underline text-[#00fd9a]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
