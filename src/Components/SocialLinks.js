import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/subhash-kumar-060b09259/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/subhash77117",
    },
    {
      id: 3,
      name: "Twitter",
      icon: <FaTwitter size={30} />,
      href: "https://twitter.com",
      style: "rounded-br-md", 
    },
  ];

  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-8">
      <ul>
        {links.map(({ id, name, icon, href, style }) => (
          <li
            key={id}
            className={`flex items-center justify-between w-40 h-14 px-4 ml-[-140px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
            >
              {name} {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

