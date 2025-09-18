import React from 'react';

const Cabinet = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Le Cabinet</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Agavic Assurances est un cabinet de conseil en assurance et gestion de patrimoine
            spécialisé dans l'accompagnement des particuliers et des professionnels.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Notre Histoire</h2>
              <p className="text-gray-700">
                Fondé avec la volonion de fournir des solutions d'assurance personnalisées,
                notre cabinet s'est développé pour devenir un acteur de référence dans la région.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Notre Mission</h2>
              <p className="text-gray-700">
                Nous accompagnons nos clients dans la protection de leur patrimoine et
                la préparation de leur avenir financier avec expertise et proximité.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Nos Valeurs</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Expertise et professionnalisme</li>
              <li>Écoute et proximité client</li>
              <li>Transparence et confiance</li>
              <li>Innovation et adaptation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cabinet;