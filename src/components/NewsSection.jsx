import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Heart } from 'lucide-react';
import newsLogo from '../assets/images/7f9e82_6634bd5a675c447d83e9178d710a9d2d.jpg';
import newsImage from '../assets/images/1d0c07_52e80bab4b2149e8b59a31719b007fb9.jpg';

const NewsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-blue-700/20">
            <h2 className="text-4xl md:text-5xl font-bold italic mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Les Petites Nouvelles
            </h2>
            <p className="text-xl italic text-blue-100">
              par AGAVIC
            </p>
          </div>

          {/* News Content */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white shadow-2xl border-x border-b border-blue-700/20 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Left Column - Article */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3 overflow-hidden">
                    <img 
                      src={newsLogo} 
                      alt="AGAVIC" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">AGAVIC</p>
                    <p className="text-sm text-gray-300">13 nov. 2023 • 3 min de lecture</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-4 rounded-xl mb-4 shadow-lg border border-green-500/20 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-2">
                    Achat immobilier : pouvez-vous changer d'assurance emprunteur ?
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Quand vous souscrivez un prêt immobilier, l'assurance emprunteur n'est pas obligatoire, mais l'établissement prêteur peut l'exiger, afin...
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <span>15 vues</span>
                    <span>0 commentaire</span>
                  </div>
                  <button className="text-pink-400 hover:text-pink-300 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-pink-400/10">
                    <Heart size={20} />
                  </button>
                </div>
              </div>

              {/* Right Column - Newsletter */}
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <img
                    src={newsLogo}
                    alt="Les petites nouvelles AGAVIC"
                    className="w-64 h-auto mx-auto mb-6 rounded-xl shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-800 via-indigo-800 to-blue-800 p-8 backdrop-blur-sm">
              <div className="max-w-2xl mx-auto text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-amber-400 text-blue-900 p-4 rounded-xl mb-6 shadow-lg border border-yellow-300/20">
                  <div className="flex items-center justify-center mb-2">
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="flex-1 px-4 py-2 rounded-l-xl border-none outline-none text-gray-800 focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                    <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-r-xl transition-all duration-300 hover:scale-105 shadow-lg">
                      <ChevronRight size={20} />
                    </Button>
                  </div>
                </div>
                
                <p className="text-white">
                  Abonnez-vous à notre newsletter mensuel{' '}
                  <span className="font-bold italic">AGAVIC Les petites nouvelles</span>{' '}
                  pour rester informé de l'actualité retraite et économique !
                </p>
                
                <p className="text-emerald-400 mt-4 font-medium bg-emerald-400/10 px-4 py-2 rounded-lg border border-emerald-400/20">
                  Votre abonnement a bien été pris en compte !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

