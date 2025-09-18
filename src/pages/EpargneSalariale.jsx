import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EpargneSalariale = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Épargne Salariale
            </h1>
            <p className="text-xl text-gray-700 mb-8 italic">
              « Constituez-vous une épargne à l'aide de votre entreprise »
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                onClick={() => scrollToSection('pee-pereco')}
              >
                Le PEE / PERECO
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3"
                onClick={() => scrollToSection('participation')}
              >
                La Participation
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3"
                onClick={() => scrollToSection('interessement')}
              >
                L'Intéressement
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Explication générale */}
          <section>
            <Card className="bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  Les avantages de l'épargne salariale
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Bénéficiant d'un cadre fiscal allégé depuis la loi PACTE, les dispositifs d'épargne salariale permettent à l'entreprise de verser des primes (Participation, Intéressement, Abondement) aux salariés et à son dirigeant*. Ces sommes peuvent :
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="text-gray-700 flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Être exonérées de charges sociales et patronales**
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Être déductibles de l'Impôt sur les Sociétés
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Être exonérées d'Impôt sur le Revenu si elles sont versées sur un PEE/PERECO***
                  </li>
                </ul>
                <div className="text-sm text-gray-600 mt-4 p-3 bg-gray-100 rounded">
                  <p>* Dirigeants d'entreprises de moins de 250 salariés.</p>
                  <p>** Forfait social selon taille de l'entreprise.</p>
                  <p>*** IR (Impôt sur le Revenu des Personnes Physiques).</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section PEE / PERECO */}
          <section id="pee-pereco">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  Le PEE / PERECO
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Ces plans permettent d'épargner avec l'aide de l'entreprise : versements volontaires du salarié, intéressement, participation, abondement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Le PERECO offre une souplesse à la sortie : vous pouvez sortir en rente ou en capital. Le PEE permet une sortie en capital après 5 ans, sauf cas de déblocage anticipé.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Il existe plusieurs cas de déblocage anticipé pour le PEE (construction ou acquisition de la résidence principale, mariage, séparation, etc.), et quelques cas pour le PERECO également.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-3">Plan d'Épargne Entreprise (PEE)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Sortie en capital après 5 ans</li>
                      <li>• Déblocage anticipé possible</li>
                      <li>• Abondement employeur</li>
                      <li>• Versements volontaires</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-3">PERECO</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Sortie en rente ou capital</li>
                      <li>• Avantages fiscaux</li>
                      <li>• Portabilité des droits</li>
                      <li>• Préparation retraite</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section Participation */}
          <section id="participation">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  La Participation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Dispositif permettant aux salariés de percevoir une part des bénéfices de l'entreprise sous forme de prime. Obligatoire sous certaines conditions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Elle implique un accord collectif entre direction et salariés, et s'applique à tous les salariés dès lors que l'accord est en place (avec quelques cas d'exclusion possibles selon l'ancienneté ou la taille).
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Avantages :</h4>
                  <p className="text-gray-700 text-sm">
                    Exonération de charges sociales et patronales, exonération fiscale pour le salarié si versée sur un dispositif comme le PEE/PERECO.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section Intéressement */}
          <section id="interessement">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  L'Intéressement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Dispositif facultatif visant à associer salariés et dirigeants aux résultats ou aux performances de l'entreprise selon des objectifs définis.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  L'accord d'intéressement prévoit les objectifs à atteindre, qui peuvent être financiers ou extra-financiers.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Avantages :</h4>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Pour l'entreprise :</span> déduction fiscale favorable<br/>
                    <span className="font-semibold">Pour le salarié :</span> exonérations pour certaines cotisations et charges selon les cas
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Comparatif */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Comparatif des dispositifs
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow overflow-hidden">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="p-4 text-left">Dispositif</th>
                    <th className="p-4 text-left">Caractère</th>
                    <th className="p-4 text-left">Objectifs</th>
                    <th className="p-4 text-left">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-blue-900">PEE/PERECO</td>
                    <td className="p-4">Facultatif</td>
                    <td className="p-4">Épargne collective</td>
                    <td className="p-4">5 ans (PEE) / Retraite (PERECO)</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold text-blue-900">Participation</td>
                    <td className="p-4">Obligatoire (>50 sal.)</td>
                    <td className="p-4">Partage des bénéfices</td>
                    <td className="p-4">5 ans minimum</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-blue-900">Intéressement</td>
                    <td className="p-4">Facultatif</td>
                    <td className="p-4">Performance/résultats</td>
                    <td className="p-4">3 ans</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Call to action */}
          <section className="text-center">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Optimisez votre épargne salariale
                </h2>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  AGAVIC vous accompagne dans la mise en place et l'optimisation de vos dispositifs d'épargne salariale.
                  Contactez-nous pour une étude personnalisée.
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

export default EpargneSalariale;