import React from 'react';
import { Button } from '@/components/ui/button';
import logoImage from '../assets/images/7f9e82_4ddb5c8e74f94d0980874c84ce25d937.png';
import linkedinIcon from '../assets/images/6ea5b4a88f0b4f91945b40499aa0af00.png';

const Header = () => {
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
            <a href="#" className="text-blue-900 font-medium hover:text-blue-700 transition-colors">
              Accueil
            </a>
            <a href="#" className="text-blue-900 font-medium hover:text-blue-700 transition-colors">
              Le cabinet
            </a>
            <a href="#" className="text-blue-900 font-medium hover:text-blue-700 transition-colors">
              Gestion de Patrimoine
            </a>
            <a href="#" className="text-blue-900 font-medium hover:text-blue-700 transition-colors">
              L'épargne retraite
            </a>
            <a href="#" className="text-blue-900 font-medium hover:text-blue-700 transition-colors">
              Plus
            </a>
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

