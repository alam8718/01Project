import React from "react";
import Card from "./Card";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Single from "../assets/single.png";

function Priceing() {
  return (
    <>
      <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-8">
          <Card
            img={Single}
            user_number="Single User"
            size={100}
            access_num={1}
            send={"50 GB"}
          />
          <Card
            img={Double}
            user_number="Double User"
            size={400}
            access_num={2}
            send={"100 GB"}
          />
          <Card
            img={Triple}
            user_number="Triple User"
            size={1024}
            access_num={3}
            send={"Unlimited"}
          />
        </div>
      </div>
    </>
  );
}

export default Priceing;
