import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Interessement = () => {
  const navigate = useNavigate();

  const criteres = [
    {
      title: "Résultats financiers",
      description: "Progression du chiffre d'affaires, du bénéfice net, de la marge brute",
      icon: "📈"
    },
    {
      title: "Productivité",
      description: "Amélioration de la productivité, réduction des coûts, optimisation des process",
      icon: "⚡"
    },
    {
      title: "Qualité",
      description: "Réduction des défauts, amélioration de la satisfaction client, certifications",
      icon: "🎯"
    },
    {
      title: "Objectifs spécifiques",
      description: "Critères personnalisés selon l'activité et les objectifs de l'entreprise",
      icon: "🎪"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              L'Intéressement
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              L'intéressement permet d'associer les salariés aux performances de l'entreprise
              en fonction d'objectifs définis et mesurables.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Définition */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  Qu'est-ce que l'intéressement ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  L'intéressement est un dispositif facultatif qui permet de verser aux salariés une prime
                  liée aux résultats ou aux performances de l'entreprise. Contrairement à la participation,
                  l'intéressement peut être mis en place dans toutes les entreprises, quelle que soit leur taille.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Flexibilité et adaptation :</h3>
                  <p className="text-gray-700">
                    L'accord d'intéressement peut être adapté aux spécificités de chaque entreprise
                    avec des critères de performance personnalisés et des modalités de calcul flexibles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Critères de performance */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Critères de performance possibles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {criteres.map((critere, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{critere.icon}</div>
                    <h3 className="font-bold text-blue-900 mb-3">{critere.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{critere.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Avantages */}
          <section>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Avantages pour l'entreprise</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Motivation et implication des salariés
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Amélioration des performances
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Exonération de charges sociales (dans la limite de 20% du PASS)
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Déductibilité fiscale des sommes versées
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Flexibilité dans la définition des critères
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Avantages pour les salariés</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Prime liée aux performances collectives
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Exonération d'impôt sur le revenu (si placé)
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Versement immédiat possible
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Possibilité de placement sur PEE/PERECO
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Reconnaissance de l'effort collectif
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Modalités */}
          <section>
            <Card className="bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  Modalités de mise en place
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">1. Négociation</h4>
                    <p className="text-gray-700 text-sm">
                      Définition des critères de performance et des modalités de calcul avec les représentants du personnel
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">2. Accord</h4>
                    <p className="text-gray-700 text-sm">
                      Signature de l'accord d'intéressement pour une durée de 3 ans renouvelable
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">3. Suivi</h4>
                    <p className="text-gray-700 text-sm">
                      Mesure des performances et calcul des primes selon les critères définis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to action */}
          <section className="text-center">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Mettre en place un accord d'intéressement
                </h2>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  AGAVIC vous accompagne dans la conception et la mise en place d'un accord d'intéressement
                  adapté à votre entreprise et à vos objectifs de performance.
                </p>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() => navigate('/contact')}
                >
                  Nous contacter
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Interessement;