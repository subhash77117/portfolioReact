import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Subhash Kumar</h2>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Right Section */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/login.php/"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://www.facebook.com/login.php/"
              className="text-gray-400 hover:text-white transition"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/subhash-kumar-060b09259/"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              linkedin
            </a>
            <a
              href="https://github.com/subhash77117"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
