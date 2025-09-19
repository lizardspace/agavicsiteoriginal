import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Interessement = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              La prime d'intéressement
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Introduction et historique */}
          <section>
            <Card>
              <CardContent className="space-y-6 p-8">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Apparue en France en 1959, ses modalités ont évolué avec la législation pour bénéficier aujourd'hui, d'un cadre fiscal avantageux.
                  </p>

                  <p>
                    C'est un dispositif facultatif d'association à la performance. Il permet de verser des primes de façon collective en fonction d'objectifs définis lors de la mise en place de l'accord d'intéressement.
                  </p>

                  <p>
                    Lors de la rédaction de l'accord, les dirigeants et les représentants du personnel doivent déterminer ensemble les objectifs de déblocage de la prime.
                  </p>

                  <p>
                    Ces objectifs peuvent être d'ordre financier ou extra-financier.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Exemples d'objectifs */}
          <section>
            <Card className="bg-blue-50">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Voici des exemples d'objectifs à atteindre :</h2>

                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>Augmentation du chiffre d'affaire de 10% sur l'année.</li>
                  <li>Augmentation du volume de vente.</li>
                  <li>20% de nouveaux clients au cours de l'année.</li>
                  <li>Baisse de l'empreinte carbone de l'entreprise.</li>
                  <li>Le taux de défaut des pièces produites inférieur à 1 pour 10000.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Avantages fiscaux */}
          <section>
            <Card>
              <CardContent className="space-y-6 p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Elle offre de nombreux avantages fiscaux:</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-4">Pour l'entreprise :</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Déduction du bénéfice imposable de l'entreprise</li>
                      <li>Exonération des charges patronales</li>
                      <li>Exonération de 20% de forfait social pour les entreprises de moins de 250 salariés.</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-4">Pour les bénéficiaires :</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Exonération des charges sociales (hors 9,7% CSG-CRDS)</li>
                      <li>Déduction de l'Impôt sur le revenu des personnes physiques si la prime est versée sur un PEE/PERECO.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Message de motivation */}
          <section>
            <Card className="bg-yellow-50">
              <CardContent className="space-y-6 p-8">
                <p className="text-xl font-semibold text-blue-900 text-center">
                  C'est un outil qui vous permettra de motiver, fidéliser et fédérer vos employés !
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Call to action */}
          <section className="text-center">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  L'un de ces dispositifs vous intéresse ?
                </h2>
                <p className="text-gray-700 mb-6">
                  Contactez-nous ! AGAVIC répond à vos questions concernant l'épargne salariale
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