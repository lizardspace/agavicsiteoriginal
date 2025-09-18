import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EpargneRetraite = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const perSolutions = [
    {
      title: "Le PER individuel (PERIN)",
      description: "Accessible à tous, versements modulables, possibilité de sortie en rente ou capital.",
      icon: "👤"
    },
    {
      title: "Le PER d'entreprise collectif (PERECO)",
      description: "Pour les salariés, avec avantage fiscal pour l'entreprise.",
      icon: "🏢"
    },
    {
      title: "Le PER d'entreprise obligatoire (PEROB)",
      description: "Dispositif géré par l'entreprise, ancien Article 83.",
      icon: "📋"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Épargne Retraite
            </h1>
            <p className="text-xl text-gray-700 mb-8 italic">
              « Faire de votre retraite la plus riche période de votre vie »
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                onClick={() => scrollToSection('etude-strategie')}
              >
                Étude "Stratégie Retraite"
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                onClick={() => scrollToSection('services-sur-mesure')}
              >
                Services sur mesure
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                onClick={() => scrollToSection('solutions-financieres')}
              >
                Solutions financières & fiscales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Étude Stratégie Retraite */}
          <section id="etude-strategie">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  AGAVIC réalise votre étude personnalisée pour vivre pleinement votre retraite !
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  L'objectif est de vous aider à conserver votre niveau de vie lorsque vous serez à la retraite. L'étude passe par plusieurs étapes :
                </p>

                <div className="space-y-4 pl-4">
                  <div>
                    <span className="font-bold text-blue-900">Prise de connaissance :</span>
                    <span className="text-gray-700"> votre situation personnelle (état civil, revenus, charges, patrimoine, etc.), vos objectifs futurs.</span>
                  </div>
                  <div>
                    <span className="font-bold text-blue-900">Analyse :</span>
                    <span className="text-gray-700"> grâce à nos outils, notre expérience, nous examinons votre dossier pour voir les pistes d'amélioration.</span>
                  </div>
                  <div>
                    <span className="font-bold text-blue-900">Restitution :</span>
                    <span className="text-gray-700"> entretien avec vous pour présenter la situation, les recommandations, les chemins à suivre et les outils à mettre en place.</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 mt-6"
                  onClick={() => navigate('/contact')}
                >
                  Nous contacter
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Services sur mesure */}
          <section id="services-sur-mesure">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  Des services sur mesure adaptés à votre situation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4 pl-4">
                  <div>
                    <span className="font-bold text-blue-900">Bilan retraite :</span>
                    <span className="text-gray-700"> reconstitution de carrière, audit de votre situation actuelle, détection des anomalies.</span>
                  </div>
                  <div>
                    <span className="font-bold text-blue-900">Optimisation des retraites obligatoire et complémentaire :</span>
                    <span className="text-gray-700"> choix optimal pour maximiser vos droits (rachats de trimestres, cumul, taux plein...).</span>
                  </div>
                  <div>
                    <span className="font-bold text-blue-900">Liquidation des droits :</span>
                    <span className="text-gray-700"> accompagnement pour les démarches auprès des caisses de retraite.</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 mt-6"
                  onClick={() => navigate('/contact')}
                >
                  Nous contacter
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Solutions financières et fiscales */}
          <section id="solutions-financieres">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  Proposition de solutions financières & fiscales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700">
                  Grâce aux dispositifs récents (comme la loi PACTE), il existe des moyens d'épargner pour la retraite tout en bénéficiant d'avantages fiscaux.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {perSolutions.map((solution, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl mb-2">{solution.icon}</div>
                      <h4 className="font-bold text-blue-900 mb-2">{solution.title}</h4>
                      <p className="text-gray-700 text-sm">{solution.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-gray-700">
                    <span className="font-semibold">💡 Bon à savoir :</span> Vous pouvez aussi transférer d'anciens contrats (PERP, Madelin, assurances vie > 8 ans) pour profiter d'un encadrement fiscal plus favorable.
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 mt-6"
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

export default EpargneRetraite;