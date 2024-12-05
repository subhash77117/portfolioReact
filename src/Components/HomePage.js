import React from "react";
import heroImg from "../assets/heroimg.jpg";

const HomePage = () => {
  return (
    <div id="Home" className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-600 animate-gradient ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mx-auto px-6 md:px-12 max-w-7xl ">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-5xl font-bold text-white  mt-[50px]">
            Hey<span className="text-orange-500">!</span> everyone
          </h2>
          <h3 className="text-lg sm:text-xl text-gray-200 font-medium mb-4">
            I am <span className="text-black font-semibold">Subhash Kumar</span>
          </h3>
          <p className="text-gray-100 text-base sm:text-lg mb-6 leading-relaxed">
            I am a frontend web developer, and here is my portfolio.
            <br />
            Here, you will learn about my journey as a frontend web developer.
          </p>
          <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:scale-105 duration-300 hover:bg-green-600 text-lg">
            Hire Me
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={heroImg}
            alt="Hero"
            className="w-64 h-64 md:w-80 md:h-80 rounded-xl shadow-lg hover:scale-105 duration-300 border border-cyan-900"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
