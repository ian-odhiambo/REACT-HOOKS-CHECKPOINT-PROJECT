import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Title */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">MovieApp</h1>
          </div>
          
          {/* Navigation Links - spread evenly */}
          <div className="w-full md:w-auto">
            <div className="flex justify-around md:justify-between space-x-0 md:space-x-12">
              <a 
                href="/" 
                className="hover:text-blue-400 transition-colors px-4 py-2 rounded hover:bg-gray-800"
              >
                Home
              </a>
              <a 
                href="/trailers" 
                className="hover:text-blue-400 transition-colors px-4 py-2 rounded hover:bg-gray-800"
              >
                Trailers
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;