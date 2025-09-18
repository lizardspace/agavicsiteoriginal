import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Prevoyance = () => {
  const navigate = useNavigate();

  const atouts = [
    {
      title: "Prévoyance sur mesure",
      description: "Adaptation selon votre situation (profession, risques, engagements familiaux, etc.).",
      icon: "🎯"
    },
    {
      title: "Conseil éclairé",
      description: "Explications claires des garanties, coûts et des modalités pour vous aider à faire le bon choix.",
      icon: "💡"
    },
    {
      title: "Large panel de produits",
      description: "Accès à de nombreuses compagnies, pour un bon rapport qualité/prix.",
      icon: "📊"
    },
    {
      title: "Service client",
      description: "Suivi personnalisé, assistance en cas de sinistre, gestion claire des contrats.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Prévoyance & Complémentaire Santé
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              AGAVIC réalise votre étude personnalisée pour vivre en sécurité ! Que ce soit pour un chef d'entreprise,
              un travailleur non salarié, pour vos salariés ou pour vous-même, nous vous proposons des solutions
              adaptées, fiables et transparentes.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Qu'est-ce que la prévoyance */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  La prévoyance : qu'est-ce que c'est ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Un contrat qui permet de se prémunir contre les aléas de la vie : maladie, accident, invalidité, décès.
                  Ces risques peuvent réduire ou interrompre vos revenus, et engendrer des frais imprévus.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Le régime de base de la Sécurité sociale offre une protection, mais souvent partielle.
                  La prévoyance permet de compléter ces prestations pour plus de sécurité.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Complémentaire santé */}
          <section>
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  Complémentaire Santé / Mutuelle
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  AGAVIC, en tant que courtier, propose des contrats collectifs, pour TNS ou Seniors,
                  avec des garanties solides à des cotisations maîtrisées.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  L'idée est de compléter les remboursements de l'assurance maladie obligatoire,
                  afin de réduire la charge financière des frais de santé non pris en charge.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Nos atouts */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Nos atouts & accompagnement
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {atouts.map((atout, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{atout.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-blue-900 mb-2">{atout.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{atout.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Types de couverture */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Nos solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Prévoyance Individuelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Incapacité temporaire de travail</li>
                    <li>• Invalidité permanente</li>
                    <li>• Capital décès</li>
                    <li>• Rente éducation</li>
                    <li>• Assistance et services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Prévoyance Collective</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Protection des salariés</li>
                    <li>• Maintien de salaire</li>
                    <li>• Avantages fiscaux</li>
                    <li>• Gestion simplifiée</li>
                    <li>• Couverture famille</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Complémentaire Santé</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Remboursements optimisés</li>
                    <li>• Réseau de soins</li>
                    <li>• Téléconsultation</li>
                    <li>• Médecines douces</li>
                    <li>• Tarifs négociés</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to action */}
          <section className="text-center">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Protégez votre avenir dès aujourd'hui
                </h2>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Contactez-nous pour une étude personnalisée de vos besoins en prévoyance
                  et complémentaire santé. Nos experts vous proposent les meilleures solutions.
                </p>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
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

export default Prevoyance;