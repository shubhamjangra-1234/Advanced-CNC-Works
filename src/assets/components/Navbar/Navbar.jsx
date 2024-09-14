import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-white">
                Advanced CNC Works
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            <Link
              to="/"
              className="text-gray-200 text-xl hover:text-orange-600"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-200 text-xl hover:text-orange-600"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-200 text-xl hover:text-orange-600"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-200 text-xl hover:text-orange-600"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
