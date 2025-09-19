import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Participation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              La prime de Participation
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
                    Mise en place par le Général de Gaulle à la sortie de la Seconde Guerre Mondiale, la participation a pour vocation de permettre aux salariés de toucher une partie des bénéfices réalisés par l'entreprise sous la forme de primes.
                  </p>

                  <p>
                    Ce dispositif est obligatoire dans les entreprises qui dépassent le seuil de 50 salariés durant une période de 5 années consécutives. Elle est optionnelle pour les entreprises de 1 à 49 salariés.
                  </p>

                  <p>
                    C'est un accord collectif entre la direction et les salariés. Tous les travailleurs de l'entreprise en bénéficient (sauf pour les employés de moins de trois mois si souhaité).
                  </p>

                  <p>
                    Dans les entreprises de moins de 11 salariés, elle peut être mise en place de façon unilatérale par l'employeur.
                  </p>

                  <p>
                    Elle est calculée en fonction des bénéfices de l'entreprise.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Plafonds */}
          <section>
            <Card className="bg-blue-50">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Plafonds de versement</h2>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Il y a deux plafonds à prendre en compte pour le versement de la Participation:
                  </p>

                  <div>
                    <p className="font-semibold text-blue-900">Un plafond individuel équivalent au 3/4 du PASS* (30 852 € pour 2021).</p>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-900 mb-2">Un plafond collectif choisit entre les formules suivantes:</p>
                    <ul className="ml-6 space-y-1">
                      <li>50% du résultat net comptable</li>
                      <li>50% du résultat net fiscal</li>
                      <li>50% du résultat net comptable - 5% des capitaux propres</li>
                      <li>50% du résultat net fiscal - 5% des capitaux propres</li>
                      <li>[½(Bénéfices – 5 % Capitaux propres)] x [Total des salaires versés par l'entreprise/Valeur ajoutée]</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Avantages fiscaux */}
          <section>
            <Card>
              <CardContent className="space-y-6 p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Avantages fiscaux</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Elle offre un bouquet d'avantages fiscaux :
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-4">Pour l'entreprise :</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Déductibilité de l'assiette de calcul de l'impôt sur les sociétés si bloquée sur un PEE/PERECO.</li>
                      <li>Exonération de charges patronales.</li>
                      <li>Exonération de forfait social pour les entreprises de moins de 50 salariés.</li>
                      <li>Réduction du forfait social dans certains cas spécifiques pour les entreprises de plus de 50 salariés.</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-4">Pour le salarié :</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Exonération de charges sociales (hors CSG-CRDS soit 9,7% des revenus d'activité).</li>
                      <li>Exonération d'IRPP si affectée à un PEE/PERECO également.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Qu'est-ce que le PASS */}
          <section>
            <Card className="bg-yellow-50">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Qu'est-ce que le PASS ?</h2>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Le PASS pour Plafond Annuel de la Sécurité Sociale est un montant de référence (barème) pris en compte pour le calcul du montant maximal de certaines prestations sociales. (source: Ameli.fr)
                  </p>

                  <p>
                    En 2021, il s'élevait à 41 136 €.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to action */}
          <section className="text-center">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  La prime de participation répond à vos attentes ?
                </h2>
                <p className="text-gray-700 mb-6">
                  N'hésitez pas à prendre contact avec nous !
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