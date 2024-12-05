import React from 'react';

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: "High School",
      institution: "Baldev Sahu College Lohardaga",
      year: "2015 - 2017",
      description: "Science stream with Physics, Chemistry, and Mathematics.",
      per:"63%"
    },
    {
      id: 2,
      degree: " Bachelor of Science in Information Technology (Bsc-IT)",
      institution: "Marwari College Ranchi",
      year: "2018 - 2021",
      description: "Specialized in Computer Science and Engineering.",
      per:"75%"
    },
    {
      id: 3,
      degree: "Master of Computer Application (MCA)",
      institution: "DEF School",
      year: "2021 - 2023",
      description: "Completed the basic secondary education with top grades.",
      per:"85%"
    },
  ];

  return (
    <div name="EducationSection" className="w-full py-16 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
      <div className="container mx-auto px-6 md:px-12 text-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 underline uppercase">Education</h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 duration-300 hover:bg-teal-100"
            >
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="text-sm text-gray-600">{item.institution}</p>
              <p className="text-gray-700 mt-3">{item.description}</p>
              <p className="text-gray-700 ">{item.per}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
