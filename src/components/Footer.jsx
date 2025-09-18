import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Cookie Notice */}
          <div className="bg-gray-700 p-4 rounded-lg mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-300 flex-1">
                Nous utilisons des cookies pour comprendre comment vous interagissez avec notre site. En acceptant, vous consentez à notre utilisation de ces cookies.{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                  Politique de confidentialité
                </a>
              </p>
              
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  className="bg-gray-600 hover:bg-gray-500 text-white border-gray-500 px-4 py-2 text-sm"
                >
                  Paramètres
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-gray-600 hover:bg-gray-500 text-white border-gray-500 px-4 py-2 text-sm"
                >
                  Tout refuser
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm"
                >
                  Accepter
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Content */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 AGAVIC ASSURANCES. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

