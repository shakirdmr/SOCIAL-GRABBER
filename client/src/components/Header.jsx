
// File: client/src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" bg-white shadow-md  w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/appIcon.png"
            alt="Social Grabber"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-semibold text-gray-800">
            Social Grabber
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link to="/support" className="text-gray-600 hover:text-gray-900">
            Support
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/"
          className="hidden md:inline-block bg-black hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold transition"
        >
          Download The App
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-1 py-2 px-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="block text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/support"
              className="block text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setMenuOpen(false)}
            >
              Support
            </Link>
            <Link
              to="/"
              className="mt-2 inline-block bg-black hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold text-center"
              onClick={() => setMenuOpen(false)}
            >
              Download The App
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
