import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import logoImage from '../assets/images/7f9e82_4ddb5c8e74f94d0980874c84ce25d937.png';
import linkedinIcon from '../assets/images/6ea5b4a88f0b4f91945b40499aa0af00.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const mainMenuItems = [
    { label: "Accueil", path: "/" },
    { label: "Le cabinet", path: "/cabinet" },
    { label: "Gestion de Patrimoine", path: "/gestion-patrimoine" },
    { label: "L'épargne retraite", path: "/epargne-retraite" }
  ];

  const plusMenuItems = [
    { label: "Prévoyance - Complémentaire", path: "/prevoyance" },
    { label: "L'épargne salariale", path: "/epargne-salariale" },
    { label: "Le PEE/PERECO", path: "/pee-pereco" },
    { label: "La Participation", path: "/participation" },
    { label: "L'intéressement", path: "/interessement" },
    { label: "Actualité", path: "/actualite" },
    { label: "Contact", path: "/contact" }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="hover:scale-105 transition-transform duration-300">
              <img
                src={logoImage}
                alt="Logo AGAVIC ASSURANCES"
                className="h-12 sm:h-16 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="relative px-4 py-2 text-blue-900 font-medium hover:text-blue-700 transition-all duration-300 rounded-lg hover:bg-blue-50 group">
              <span className="relative z-10">Accueil</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
            <Link to="/cabinet" className="relative px-4 py-2 text-blue-900 font-medium hover:text-blue-700 transition-all duration-300 rounded-lg hover:bg-blue-50 group">
              <span className="relative z-10">Le cabinet</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
            <Link to="/gestion-patrimoine" className="relative px-4 py-2 text-blue-900 font-medium hover:text-blue-700 transition-all duration-300 rounded-lg hover:bg-blue-50 group">
              <span className="relative z-10">Gestion de Patrimoine</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
            <Link to="/epargne-retraite" className="relative px-4 py-2 text-blue-900 font-medium hover:text-blue-700 transition-all duration-300 rounded-lg hover:bg-blue-50 group">
              <span className="relative z-10">L'épargne retraite</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>

            {/* Plus Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="relative flex items-center px-4 py-2 text-blue-900 font-medium hover:text-blue-700 transition-all duration-300 rounded-lg hover:bg-blue-50 group"
              >
                <span className="relative z-10">Plus</span>
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-all duration-300 ${
                    isDropdownOpen ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                  <div className="py-3">
                    {plusMenuItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="group flex items-center px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-900 transition-all duration-200 relative overflow-hidden"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <span className="relative z-10 font-medium">{item.label}</span>
                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200"></div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Contact Info and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block text-right">
              <p className="text-sm text-gray-600 italic font-light">Appelez-nous :</p>
              <a href="tel:0478347309" className="text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors duration-300 tracking-wide">
                04.78.34.73.09
              </a>
            </div>
            <a href="#" className="hidden sm:block hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-blue-50">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="h-6 w-6 sm:h-7 sm:w-7"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
              aria-label="Menu mobile"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-blue-900" />
              ) : (
                <Menu className="h-6 w-6 text-blue-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {/* Main Menu Items */}
              {mainMenuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block px-4 py-3 text-blue-900 font-medium hover:bg-blue-50 rounded-lg transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Plus Menu Items */}
              <div className="border-t border-gray-200 pt-4">
                <p className="px-4 py-2 text-sm text-gray-500 font-semibold uppercase tracking-wide">Plus</p>
                {plusMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-3 text-blue-900 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="px-4 py-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 italic font-light mb-1">Appelez-nous :</p>
                  <a href="tel:0478347309" className="text-lg font-bold text-blue-900 hover:text-blue-700 transition-colors duration-300">
                    04.78.34.73.09
                  </a>
                </div>
                <div className="flex justify-center mt-4">
                  <a href="#" className="hover:scale-110 transition-all duration-300 p-3 rounded-full bg-blue-50 hover:bg-blue-100">
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="h-6 w-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

