import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Participation = () => {
  const navigate = useNavigate();

  const avantages = [
    {
      title: "Pour l'entreprise",
      items: [
        "Exonération de charges sociales",
        "Déduction fiscale des sommes versées",
        "Motivation des équipes",
        "Amélioration de la productivité"
      ]
    },
    {
      title: "Pour les salariés",
      items: [
        "Complément de rémunération exonéré",
        "Participation aux bénéfices de l'entreprise",
        "Placement sur des supports variés",
        "Disponibilité après 5 ans"
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
              La Participation
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              La participation permet aux salariés de bénéficier des résultats de leur entreprise
              tout en offrant des avantages fiscaux et sociaux significatifs.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Qu'est-ce que la participation */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  Qu'est-ce que la participation ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  La participation est un dispositif obligatoire pour les entreprises de plus de 50 salariés
                  qui permet de redistribuer une partie des bénéfices aux salariés. Elle constitue un
                  complément de rémunération exonéré de charges sociales et d'impôt sur le revenu.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Calcul de la participation :</h3>
                  <p className="text-gray-700">
                    La participation est calculée selon une formule légale basée sur les bénéfices nets,
                    les capitaux propres, la masse salariale et la valeur ajoutée de l'entreprise.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Avantages */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Les avantages de la participation
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {avantages.map((avantage, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-blue-900">{avantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {avantage.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Gestion des fonds */}
          <section>
            <Card className="bg-green-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  Gestion et placement des fonds
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Les sommes issues de la participation peuvent être :
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">PEE/PERECO</h4>
                    <p className="text-gray-700 text-sm">
                      Placement sur un plan d'épargne entreprise avec possibilité d'abondement
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Compte courant bloqué</h4>
                    <p className="text-gray-700 text-sm">
                      Placement rémunéré, disponible après 5 ans ou en cas de déblocage anticipé
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Versement immédiat</h4>
                    <p className="text-gray-700 text-sm">
                      Perception directe avec taxation selon le régime des salaires
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
                  Mettre en place un accord de participation
                </h2>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  AGAVIC vous accompagne dans la négociation et la mise en place d'un accord de participation
                  adapté à votre entreprise et à vos salariés.
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

export default Participation;