import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Heart } from 'lucide-react';
import newsLogo from '../assets/images/7f9e82_6634bd5a675c447d83e9178d710a9d2d.jpg';
import newsImage from '../assets/images/1d0c07_52e80bab4b2149e8b59a31719b007fb9.jpg';

const NewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="bg-blue-900 text-white p-8 rounded-t-lg">
            <h2 className="text-4xl md:text-5xl font-bold italic mb-2">
              Les Petites Nouvelles
            </h2>
            <p className="text-xl italic">
              par AGAVIC
            </p>
          </div>

          {/* News Content */}
          <div className="bg-blue-900 text-white">
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

                <div className="bg-green-600 text-white p-4 rounded-lg mb-4">
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
                  <button className="text-pink-400 hover:text-pink-300 transition-colors">
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
                    className="w-64 h-auto mx-auto mb-6 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-800 p-8">
              <div className="max-w-2xl mx-auto text-center">
                <div className="bg-yellow-400 text-blue-900 p-4 rounded-lg mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <input 
                      type="email" 
                      placeholder="E-mail"
                      className="flex-1 px-4 py-2 rounded-l-lg border-none outline-none text-gray-800"
                    />
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-r-lg">
                      <ChevronRight size={20} />
                    </Button>
                  </div>
                </div>
                
                <p className="text-white">
                  Abonnez-vous à notre newsletter mensuel{' '}
                  <span className="font-bold italic">AGAVIC Les petites nouvelles</span>{' '}
                  pour rester informé de l'actualité retraite et économique !
                </p>
                
                <p className="text-green-400 mt-4 font-medium">
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

