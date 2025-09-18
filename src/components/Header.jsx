import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import logoImage from '../assets/images/7f9e82_4ddb5c8e74f94d0980874c84ce25d937.png';
import linkedinIcon from '../assets/images/6ea5b4a88f0b4f91945b40499aa0af00.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoImage}
              alt="Logo AGAVIC ASSURANCES"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-blue-900 font-medium hover:text-blue-700 transition-colors">
              Accueil
            </Link>
            <Link to="/cabinet" className="text-blue-900 font-medium hover:text-blue-700 transition-colors">
              Le cabinet
            </Link>
            <Link to="/gestion-patrimoine" className="text-blue-900 font-medium hover:text-blue-700 transition-colors">
              Gestion de Patrimoine
            </Link>
            <Link to="/epargne-retraite" className="text-blue-900 font-medium hover:text-blue-700 transition-colors">
              L'épargne retraite
            </Link>

            {/* Plus Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors"
              >
                Plus
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-2">
                    {plusMenuItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Contact Info and LinkedIn */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block text-right">
              <p className="text-sm text-gray-600 italic">Appelez-nous :</p>
              <p className="text-lg font-bold text-blue-900">04.78.34.73.09</p>
            </div>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img 
                src={linkedinIcon} 
                alt="LinkedIn" 
                className="h-8 w-8"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

