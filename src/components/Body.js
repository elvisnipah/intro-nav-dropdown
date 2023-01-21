import React from "react";
import mobileHeroImage from "../images/image-hero-mobile.png";
import desktopHeroImage from "../images/image-hero-desktop.png";
import clientAudiophile from "../images/client-audiophile.svg";
import clientDatabiz from "../images/client-databiz.svg";
import clientMaker from "../images/client-maker.svg";
import clientMeet from "../images/client-meet.svg";

function Body(props) {
  return (
    <div className="xl:flex xl:flex-row-reverse xl:items-center xl:p-24 xl:justify-center grow">
      <section>
        {props.mobileView && <img src={mobileHeroImage} alt="" />}
        {!props.mobileView && (
          <img src={desktopHeroImage} alt="" className="w-[90%]" />
        )}
      </section>
      <section className="flex flex-col justify-center mt-12 items-center xl:justify-between xl:h-[80%] xl:items-start ">
        <h1 className="font-bold text-center text-4xl xl:text-7xl xl:text-left xl:w-[82%]">
          Make remote work
        </h1>
        <p className="p-2 text-center text-[hsl(0,0%,41%)] xl:text-start xl:w-[80%] font-epilogue">
          Get your team in sync no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-[hsl(0,0%,8%)] text-white rounded-xl h-12 p-4 flex justify-center items-center mt-4 font-epilogue font-bold hover:bg-[hsl(0,0%,98%)] hover:text-[hsl(0,0%,8%)] border-[2px] border-[hsl(0,0%,8%)]">
          Learn more
        </button>
        <div className="flex mt-12 justify-between p-2 gap-3 xl:gap-12">
          <img src={clientDatabiz} alt="" className="h-[18px]" />
          <img src={clientAudiophile} alt="" className="h-[18px]" />
          <img src={clientMeet} alt="" className="h-[18px]" />
          <img src={clientMaker} alt="" className="h-[18px]" />
        </div>
      </section>
    </div>
  );
}

export default Body;
