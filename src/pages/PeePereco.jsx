import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PeePereco = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "Plan d'Épargne Entreprise (PEE)",
      description: "Le PEE permet aux salariés de se constituer un portefeuille de valeurs mobilières avec l'aide de leur entreprise.",
      avantages: [
        "Abondement de l'entreprise jusqu'à 300% des versements",
        "Exonération de charges sociales",
        "Disponibilité des fonds après 5 ans",
        "Déblocage anticipé pour certains événements"
      ]
    },
    {
      title: "Plan d'Épargne Retraite Collectif (PERECO)",
      description: "Le PERECO est un dispositif d'épargne retraite d'entreprise qui permet de préparer sa retraite avec des avantages fiscaux.",
      avantages: [
        "Déduction fiscale des versements",
        "Abondement possible de l'employeur",
        "Portabilité des droits",
        "Sortie en rente ou en capital"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              PEE / PERECO
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Découvrez nos solutions d'épargne salariale pour optimiser votre épargne d'entreprise
              et préparer votre avenir financier avec des avantages fiscaux attractifs.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Solutions */}
          <section>
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-blue-900 text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">{solution.description}</p>
                    <h4 className="font-semibold text-blue-900 mb-3">Avantages :</h4>
                    <ul className="space-y-2">
                      {solution.avantages.map((avantage, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {avantage}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Pourquoi choisir */}
          <section>
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl text-center">
                  Pourquoi mettre en place un PEE/PERECO ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-blue-900 mb-3">Pour l'entreprise :</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Motivation et fidélisation des salariés</li>
                      <li>• Avantages fiscaux et sociaux</li>
                      <li>• Amélioration du climat social</li>
                      <li>• Attractivité employeur</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-3">Pour les salariés :</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Constitution d'une épargne avec abondement</li>
                      <li>• Avantages fiscaux attractifs</li>
                      <li>• Diversification des placements</li>
                      <li>• Préparation de la retraite</li>
                    </ul>
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
                  Vous souhaitez mettre en place un PEE ou PERECO ?
                </h2>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Nos experts vous accompagnent dans l'analyse de vos besoins et la mise en place
                  de solutions d'épargne salariale adaptées à votre entreprise.
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

export default PeePereco;