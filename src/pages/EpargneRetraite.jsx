import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const EpargneRetraite = () => {
  const solutions = [
    {
      title: "PER Individuel",
      description: "Plan d'Épargne Retraite adapté à votre situation personnelle",
      avantages: ["Déduction fiscale", "Sortie en rente ou capital", "Transmission possible"]
    },
    {
      title: "PER Collectif",
      description: "Solution d'épargne retraite d'entreprise",
      avantages: ["Abondement employeur", "Versements volontaires", "Portabilité"]
    },
    {
      title: "Assurance Vie",
      description: "Complément retraite flexible et sécurisé",
      avantages: ["Disponibilité", "Transmission optimisée", "Fiscalité attractive"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">L'Épargne Retraite</h1>

        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Préparez sereinement votre retraite avec nos solutions d'épargne adaptées
            à votre profil et vos objectifs.
          </p>
          <p className="text-gray-700 mb-6">
            Nous vous accompagnons dans le choix et la gestion de vos produits d'épargne retraite
            pour optimiser vos revenus futurs et votre fiscalité.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-blue-900">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <h4 className="font-semibold text-blue-900 mb-2">Avantages :</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {solution.avantages.map((avantage, idx) => (
                    <li key={idx}>{avantage}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Pourquoi épargner pour la retraite ?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Maintenir votre niveau de vie</li>
              <li>Compenser la baisse des pensions</li>
              <li>Bénéficier d'avantages fiscaux</li>
              <li>Transmettre à vos proches</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Notre Accompagnement
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Bilan retraite personnalisé</li>
              <li>Simulation de revenus futurs</li>
              <li>Optimisation fiscale</li>
              <li>Suivi et ajustements réguliers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpargneRetraite;