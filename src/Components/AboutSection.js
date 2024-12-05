import React from "react";
import img from '../assets/heroimg.jpg'

const AboutSection = () => {
  return (
    <section id="About" className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
         {/* image */}
          <div className="flex justify-center">
            <img
              src={img}
              alt="About me"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left underline uppercase">
              About Me
            </h2>
            <p className="mb-6 text-center md:text-left">
              Hi! My name is Subhash Kumar, a Front End Developer exploring new
              technologies and having great skills in web development languages
              like HTML, CSS, JavaScript, React.js, Git & GitHub, Tailwind, and
              MySQL.
            </p>
            <p className="mb-6 text-center md:text-left">
              I'm always motivated in my work and dedicated to putting in a lot
              of hard work to achieve big goals in life. My aim is to make my
              parents proud, give worth to my country as an honorable person of
              India, and add value to the lives of those in need.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/subhash-kumar-060b09259/"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/subhash77117"
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-md hover:bg-indigo-100 transition"
              >
                My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
