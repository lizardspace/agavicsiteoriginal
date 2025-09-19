import React from 'react';
import { Button } from '@/components/ui/button';
import agavicLogo from '../assets/images/agavicassurances.avif';

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
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Company Info */}
            <div className="text-center md:text-left">
              <div className="mb-4">
                <img
                  src={agavicLogo}
                  alt="AGAVIC ASSURANCES"
                  className="h-12 md:h-16 mx-auto md:mx-0 mb-2"
                />
                <span className="text-2xl font-bold text-blue-400 block">AGAVIC ASSURANCES</span>
              </div>
              <p className="text-gray-400 text-sm">
                Votre partenaire de confiance en assurance et gestion de patrimoine
              </p>
            </div>

            {/* Legal Links */}
            <div className="text-center">
              <h3 className="text-white font-semibold mb-4">Informations légales</h3>
              <div className="space-y-2">
                <div>
                  <a href="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Mentions légales
                  </a>
                </div>
                <div>
                  <a href="/politique-cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Politique en matière de cookies
                  </a>
                </div>
                <div>
                  <a href="/politique-confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Politique de confidentialité
                  </a>
                </div>
                <div>
                  <a href="/conditions-generales" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Conditions générales d'utilisation
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>67 route de Paris</p>
                <p>Tassin-La-Demi-Lune, 69160</p>
                <p>
                  <a href="mailto:contact@agavic.fr" className="hover:text-white transition-colors">
                    contact@agavic.fr
                  </a>
                </p>
                <p>
                  <a href="tel:0478347309" className="hover:text-white transition-colors">
                    04 78 34 73 09
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 par AGAVIC. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={agavicLogo}
                  alt="AGAVIC ASSURANCES Logo"
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

