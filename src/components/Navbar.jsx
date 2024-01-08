import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav); // it just make the nav vvalue reverse like for first time nav is false so when click happend than the value will be true now.
  };

  const Links = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Company",
      link: "/company",
    },
    {
      name: "Resources",
      link: "/resources",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <a
        href="#"
        className="w-full text-3xl font-bold text-[#00df9a] flex items-center">
        Tot<span className="text-red-700 px-0.5 text-5xl font-light">/</span>Tho
      </a>
      <ul className="uppercase  hidden md:flex ">
        {Links.map((Link) => (
          <li className="px-4 hover:text-amber-400 duration-300">
            <a href={Link.link}>{Link.name}</a>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className=" md:hidden z-[10000] fixed right-6">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* navbar for mobile  */}
      <div
        className={
          !nav
            ? "z-[1000] md:hidden fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 "
            : "z-[1000] fixed left-[-100%]   duration-500   "
        }>
        <div className="h-[700px] flex flex-col justify-center items-center text-center">
          <a href="#" className="w-full text-5xl font-bold text-[#00df9a] m-4">
            Tot
            <span className="text-red-700 px-0.5 text-5xl font-light">/</span>
            Tho
          </a>
          <ul className="uppercase text-2xl  ">
            {Links.map((Link) => (
              <li className="p-4 ml-2 my-4  duration-300 hover:scale-110  hover:shadow-gray-400 hover:text-amber-400 ">
                <a href={Link.link}>{Link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
