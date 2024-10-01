import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 md:pl-10 md:px-0 md:py-0 bg-white shadow-md">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-extrabold text-blue-900">
          <span className="text-red-600">JSR</span> Fintech
        </h1>
      </div>

      {/* Middle Section: Navigation Links */}
      <nav className="hidden lg:flex space-x-6 text-lg font-medium">
        <a href="#" className="text-blue-900 hover:text-red-600 transition-colors duration-200">Home</a>
        <a href="#" className="text-blue-900 hover:text-red-600 transition-colors duration-200">Projects</a>
        <a href="#" className="text-blue-900 hover:text-red-600 transition-colors duration-200">Sign Up</a>
        <a href="#" className="text-blue-900 hover:text-red-600 transition-colors duration-200">Contact</a>
      </nav>

      {/* Right Section: Contact */}
      <div className="hidden lg:flex bg-[#D12A34] text-white px-6 py-3 rounded-lg items-center shadow-md md:h-[4.25rem] md:w-[28rem] md:px-32 md:rounded-none ">
        <a href="mailto:info@jsrfintech.com" className="font-semibold md:text-nowrap">
          Contact Us: info@jsrfintech.com
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center">
        <button aria-label="Open menu" className="text-blue-900 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
