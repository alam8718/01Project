import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto  flex flex-col md:flex-row md:justify-center md:items-center  items-center text-center justify-center gap-2">
        <img className="w-[550px]  " src={Laptop} alt="laptop" />
        <div className="md:text-left">
          <p className="uppercase font-bold text-[#00df9a]">
            data analytics dashboard
          </p>
          <h1 className="text-2xl md:text-4xl sm:text-3xl py-2  capitalize font-bold">
            manage data analytics centrally
          </h1>
          <p className="font-semibold mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            voluptas iure doloribus explicabo, quaerat architecto dignissimos,
            ipsam iste qui adipisci repellendus ea assumenda fugiat totam
            obcaecati. Dolores, vitae totam, fuga dolor similique hic ex eum
            perferendis adipisci laudantium sed repellendus. Sint assumenda
            fugit impedit id. Distinctio molestiae nam eum eaque.
          </p>
          <button className="capitalize px-10 py-3 text-[#00df9a] bg-black rounded-md font-bold">
            get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
