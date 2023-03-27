import React from "react";
import hero1 from "../assets/hero-left.json";
import Lottie from "lottie-react";
import button from "../assets/button.json";
import hero2 from "../assets/hero3.json";

function Hero() {
  return (
    <div className="bg-black">
      <div className="hidden lg:flex absolute mt-18 left-0 w-2/5">
        <Lottie animationData={hero1} loop={true} />
      </div>

      <div className="text-white font-first pb-4 lg:pb-24 pt-0 lg:pt-12 text-center items-center flex flex-col justify-center">
        <h1 className="font-bold py-4 lg:py-8 text-5xl hover:text-red-400 lg:text-6xl">
          Creative Technological <br /> Solutions
        </h1>
        <p className="text-xl py-2 hover:text-blue-300">
          Wee see what others don't
        </p>
        <p className="text-xl py-2 hover:text-blue-300">
          We deliver what other won't
        </p>
        <div className="w-1/2 lg:w-1/6 pt-4 items-center justify-center flex">
          <Lottie animationData={button} loop={true} />
        </div>
      </div>
      <div className="hidden lg:flex w-1/4 lg:w-1/3 absolute top-64 lg:top-72 right-2 lg:right-10 items-center justify-center">
        <Lottie animationData={hero2} loop={true} />
          </div>
          <div>
              <h1 className="text-red-200 pl-8 lg:pl-14 pt-14 lg:pb-10  font-first text-3xl lg:text-7xl">
                  What Tecvity Offers?
              </h1>
          </div>
    </div>
  );
}

export default Hero;
