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
          <div className="bg-white border border-blue-200 p-8 rounded-t-xl shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold italic mb-2 text-blue-900">
              Les Petites Nouvelles
            </h2>
            <p className="text-xl italic text-blue-700">
              par AGAVIC
            </p>
          </div>

          {/* News Content */}
          <div className="bg-white shadow-lg border-x border-blue-200">
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
                    <p className="font-medium text-gray-800">AGAVIC</p>
                    <p className="text-sm text-gray-600">13 nov. 2023 • 3 min de lecture</p>
                  </div>
                </div>

                <div className="bg-blue-600 text-white p-4 rounded-lg mb-4 shadow-md">
                  <h3 className="text-xl font-bold mb-2">
                    Achat immobilier : pouvez-vous changer d'assurance emprunteur ?
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Quand vous souscrivez un prêt immobilier, l'assurance emprunteur n'est pas obligatoire, mais l'établissement prêteur peut l'exiger, afin...
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>15 vues</span>
                    <span>0 commentaire</span>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-100">
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
                    className="w-64 h-auto mx-auto mb-6 rounded-lg shadow-md border border-gray-200"
                  />
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 border-b border-blue-200 rounded-b-xl">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Les petites nouvelles AGAVIC</h3>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200 mb-6">
                  <div className="space-y-4">
                    <div className="text-left">
                      <label htmlFor="home-newsletter-email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <div className="flex">
                        <input
                          id="home-newsletter-email"
                          type="email"
                          placeholder="Votre adresse email"
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg">
                          <ChevronRight size={20} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Abonnez-vous à notre newsletter mensuel{' '}
                  <span className="font-bold text-blue-900">AGAVIC Les petites nouvelles</span>{' '}
                  pour rester informé de l'actualité retraite et économique !
                </p>

                <p className="text-green-700 font-medium bg-green-50 px-4 py-2 rounded-lg border border-green-200 inline-block">
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

