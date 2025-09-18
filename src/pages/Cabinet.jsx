import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Cabinet = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Patrick RECIPON",
      role: "Conseiller en gestion de patrimoine",
      description: "Conseiller en gestion de patrimoine avec plus de 20 ans d'expérience, accompagné de nombreux clients sur des projets patrimoniaux.",
      image: "/assets/images/patrick-recipon.jpg" // Placeholder - replace with actual image
    },
    {
      name: "Vianney RECIPON",
      role: "Collaborateur spécialisé",
      description: "Jeune collaborateur spécialisé en assurance et en gestion patrimoniale, présent sur le suivi des dossiers depuis 2023.",
      image: "/assets/images/vianney-recipon.jpg" // Placeholder - replace with actual image
    }
  ];

  const partners = [
    { name: "Eres", logo: "/assets/images/partners/eres.png" },
    { name: "Epsens", logo: "/assets/images/partners/epsens.png" },
    { name: "Generali", logo: "/assets/images/partners/generali.png" },
    { name: "UAF", logo: "/assets/images/partners/uaf.png" },
    { name: "Primonial", logo: "/assets/images/partners/primonial.png" },
    { name: "April", logo: "/assets/images/partners/april.png" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                  Le cabinet AGAVIC
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Cabinet situé en région lyonnaise, spécialisé en gestion de patrimoine,
                  assurances-personnes, épargne salariale et retraite. Nous accompagnons
                  particuliers et dirigeants dans la définition et la mise en place de leur stratégie patrimoniale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                    onClick={() => navigate('/contact')}
                  >
                    Nous contacter
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3"
                    onClick={() => navigate('/gestion-patrimoine')}
                  >
                    Nos services
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center">
                  <span className="text-gray-500">Cabinet AGAVIC - Bureau</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Mission & Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">Notre mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Accompagner les clients (particuliers et professionnels) dans l'étude,
                  la protection et le développement de leur patrimoine, avec un conseil
                  indépendant et adapté au contexte fiscal et personnel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">Ce que nous faisons</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bilans retraite et reconstitutions de carrière</li>
                  <li>• Mise en place de plans d'épargne entreprise (PEE, PERECO)</li>
                  <li>• Contrats de prévoyance et complémentaire santé</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Le dirigeant & l'équipe
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-32 h-48 sm:h-auto bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-500 text-sm text-center p-2">{member.name}</span>
                      </div>
                      <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
                        <p className="text-sm font-medium text-gray-600 mb-3">{member.role}</p>
                        <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-3xl text-center">Nos valeurs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700">
                  <p>• Respect et bienveillance vis-à-vis des clients et des équipes.</p>
                  <p>• Transparence sur les tarifs et les conseils délivrés.</p>
                  <p>• Honnêteté et intégrité : dire la vérité et refuser les solutions inadaptées.</p>
                  <p>• Prudence : adopter des choix mesurés et protecteurs pour le client.</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Partners Section */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Nos partenaires
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                  {partners.map((partner, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <div className="w-20 h-12 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs text-gray-500 text-center">{partner.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cabinet;