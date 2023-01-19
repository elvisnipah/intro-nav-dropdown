import React from "react";
import mobileHeroImage from "../images/image-hero-mobile.png";
import clientAudiophile from "../images/client-audiophile.svg";
import clientDatabiz from "../images/client-databiz.svg";
import clientMaker from "../images/client-maker.svg";
import clientMeet from "../images/client-meet.svg";

function div() {
  return (
    <div>
      <section>
        <img src={mobileHeroImage} alt="" />
      </section>
      <section className="flex flex-col justify-center mt-12 items-center">
        <h1 className="font-bold text-center text-4xl">Make remote work</h1>
        <p className="p-2 text-center text-[hsl(0,0%,41%)]">
          Get your team in sync no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-[hsl(0,0%,8%)] text-white rounded-xl h-12 p-4 flex justify-center items-center mt-4 font-epilogue font-bold">
          Learn more
        </button>
      </section>
      <section className="flex mt-12 justify-between p-2">
        <img src={clientDatabiz} alt="" className="h-[18px]" />
        <img src={clientAudiophile} alt="" className="h-[18px]" />
        <img src={clientMeet} alt="" className="h-[18px]" />
        <img src={clientMaker} alt="" className="h-[18px]" />
      </section>
    </div>
  );
}

export default div;
