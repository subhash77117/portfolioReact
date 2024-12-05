import React, { useState } from 'react';
import logo from '../assets/Subhash.png';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'Home' },
    { id: 2, link: 'About' },
    { id: 3, link: 'Experience' },
    { id: 4, link: 'Contact' },
    { id: 5, link: 'Projects' },
  ];

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Scroll event listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-20 flex justify-between items-center px-4 text-teal-50 fixed top-0 left-0 z-20 ${
        scrolling
          ? 'bg-opacity-90 bg-neutral-600 shadow-orange-400 text-black'
          : 'bg-transparent'
      } transition-all ease-in-out duration-300`}
    >
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" width={100} height={70} />
      </div>

      {/* Links */}
      <div>
        <ul className="hidden md:flex space-x-6">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-white px-4 py-2 hover:scale-105 duration-150 cursor-pointer hover:underline"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="inline md:hidden cursor-pointer pr-4 z-30 text-gray-300"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul
            className="flex flex-col absolute top-[80px] left-0 gap-4 bg-gray-500 py-3 h-[500px] w-full items-center justify-center transition-all duration-300 ease-in-out"
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="text-white px-4 py-2 hover:scale-105 duration-150 cursor-pointer"
              >
                <Link to={link} smooth duration={500} onClick={() => setNav(false)}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
