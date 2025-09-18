import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const GestionPatrimoine = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const services = [
    {
      title: "Étude patrimoniale",
      description: "Analyse complète de votre situation financière, identification des objectifs, évaluation des risques et des opportunités.",
      image: "/assets/images/etude-patrimoniale.jpg"
    },
    {
      title: "Propositions de solutions",
      description: "Sur la base de l'étude, nous créons des solutions sur mesure : stratégie, recommandations, choix des instruments financiers appropriés.",
      image: "/assets/images/propositions-solutions.jpg"
    },
    {
      title: "Mise en œuvre & accompagnement",
      description: "Une fois les solutions validées, on assure leur mise en place, un suivi régulier et des ajustements selon vos besoins.",
      image: "/assets/images/accompagnement.jpg"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Gestion de Patrimoine
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Avec plus de 20 ans d'expérience, AGAVIC Assurances s'engage à vous proposer des solutions personnalisées et innovantes pour protéger et faire grandir votre patrimoine.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* À propos / Notre métier */}
          <section>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">À propos</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                AGAVIC Assurances est votre partenaire de confiance en gestion patrimoniale. Nous mettons à profit notre expertise pour vous accompagner selon vos objectifs personnels, professionnels, financiers ou familiaux.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Notre métier</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Notre rôle : vous assister, vous conseiller, vous guider — que vous soyez un particulier ou une entreprise — pour organiser, protéger, valoriser votre patrimoine ou envisager des investissements pertinents.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nous commençons par une étude globale : état civil, situation familiale, biens, placements, dettes, revenus & charges. Puis, à l'écoute de vos attentes (retraite, transmission, rentabilité, fiscalité…), nous proposons des stratégies adaptées et indépendantes, et vous accompagnons dans la durée si vous le souhaitez.
              </p>
            </div>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm text-center p-4">{service.title}</span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to action */}
          <section className="text-center bg-blue-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Travaillons ensemble</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              Contactez-nous pour en savoir plus sur nos offres de gestion de patrimoine et pour construire ensemble une stratégie personnalisée dès aujourd'hui.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={() => navigate('/contact')}
            >
              Nous contacter
            </Button>
          </section>

          {/* Formulaire de contact */}
          <section className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-center">Contactez-nous</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Votre prénom"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom de famille
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Votre e-mail"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Votre message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
                  >
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GestionPatrimoine;