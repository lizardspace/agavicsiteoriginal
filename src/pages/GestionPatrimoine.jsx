import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const GestionPatrimoine = () => {
  const services = [
    {
      title: "Audit Patrimonial",
      description: "Analyse complète de votre situation patrimoniale actuelle"
    },
    {
      title: "Optimisation Fiscale",
      description: "Stratégies pour optimiser votre fiscalité personnelle"
    },
    {
      title: "Transmission",
      description: "Préparation et optimisation de la transmission de votre patrimoine"
    },
    {
      title: "Investissements",
      description: "Conseil en placement et diversification patrimoniale"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Gestion de Patrimoine</h1>

        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Notre expertise en gestion de patrimoine vous accompagne dans la construction,
            l'optimisation et la transmission de votre patrimoine.
          </p>
          <p className="text-gray-700">
            Nous proposons une approche globale et personnalisée pour répondre à vos objectifs
            patrimoniaux à court, moyen et long terme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-blue-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Pourquoi choisir notre accompagnement ?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Conseil indépendant et objectif</li>
            <li>Expertise reconnue en fiscalité patrimoniale</li>
            <li>Suivi personnalisé et régulier</li>
            <li>Réseau de partenaires spécialisés</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GestionPatrimoine;