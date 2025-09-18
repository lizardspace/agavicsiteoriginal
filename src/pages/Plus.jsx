import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Plus = () => {
  const services = [
    {
      title: "Assurance Habitation",
      description: "Protection complète de votre résidence principale ou secondaire"
    },
    {
      title: "Assurance Auto",
      description: "Couverture adaptée pour tous vos véhicules"
    },
    {
      title: "Assurance Santé",
      description: "Complémentaire santé et prévoyance pour vous et votre famille"
    },
    {
      title: "Assurance Professionnelle",
      description: "Protection de votre activité et responsabilité professionnelle"
    },
    {
      title: "Assurance Vie",
      description: "Solutions d'épargne et de transmission patrimoniale"
    },
    {
      title: "Formation & Conseil",
      description: "Accompagnement et formation en gestion des risques"
    }
  ];

  const ressources = [
    {
      title: "Actualités Assurance",
      description: "Suivez les dernières évolutions du secteur"
    },
    {
      title: "Guides Pratiques",
      description: "Conseils et astuces pour mieux comprendre vos contrats"
    },
    {
      title: "Calculateurs",
      description: "Outils de simulation pour vos projets"
    },
    {
      title: "FAQ",
      description: "Réponses aux questions les plus fréquentes"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Nos Services Complémentaires</h1>

        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Découvrez l'ensemble de nos services et solutions pour une protection globale
            de votre patrimoine personnel et professionnel.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Nos Assurances</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Ressources & Outils</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ressources.map((ressource, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-900">{ressource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{ressource.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Une Question ? Un Projet ?
          </h2>
          <p className="text-gray-700 mb-4">
            Notre équipe est à votre disposition pour vous conseiller et vous accompagner
            dans tous vos projets d'assurance et de gestion de patrimoine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <p className="font-semibold text-blue-900">Téléphone :</p>
              <p className="text-gray-700">04.78.34.73.09</p>
            </div>
            <div>
              <p className="font-semibold text-blue-900">Email :</p>
              <p className="text-gray-700">contact@agavic-assurances.fr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plus;