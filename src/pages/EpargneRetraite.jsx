import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EpargneRetraite = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Ajuste cette valeur selon la hauteur de votre header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Epargne retraite
            </h1>
            <p className="text-xl text-gray-700 mb-8 italic">
              "Faire de votre retraite la plus riche période de votre vie"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                onClick={() => scrollToSection('etude-strategie')}
              >
                Etude "stratégie retraite"
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                onClick={() => scrollToSection('services-sur-mesure')}
              >
                Bilan retraite, liquidation des droits
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                onClick={() => scrollToSection('solutions-financieres')}
              >
                Dispositifs de retraite supplémentaire
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
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  L'objectif est de vous aider à conserver votre niveau de vie lorsque vous serez en retraite. L'étude comporte trois étapes :
                </p>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Prise de connaissance</h4>
                    <p className="mb-2">
                      De votre situation : état civil, contrats de mariage, vos revenus, vos charges, votre patrimoine, vos prêts et encours, l'estimation de votre retraite future.
                    </p>
                    <p>
                      De vos objectifs : mise en place de revenus complémentaires, protection de votre conjoint, stratégie de transmission de votre patrimoine…
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Analyse</h4>
                    <p>
                      A l'aide de logiciels spécialisés et de 17 années d'expériences en gestion de patrimoine, nous travaillons votre dossier.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Restitution</h4>
                    <p className="mb-2">
                      Un entretien en trois parties, lors duquel nous vous présenterons :
                    </p>
                    <ul className="ml-6 space-y-1">
                      <li>Votre situation et ses axes d'amélioration;</li>
                      <li>Les chemins à prendre pour atteindre vos objectifs;</li>
                      <li>Les outils à mettre en œuvre</li>
                    </ul>
                  </div>

                  <p>
                    Vous souhaitez bénéficier de notre expertise, n'hésitez pas à nous contacter !
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

          {/* Services sur mesure */}
          <section id="services-sur-mesure">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  Des services sur mesure adaptés à votre situation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Bilan retraite</h4>
                    <p>
                      Audit de votre situation avec reconstitution de votre carrière, analyse de votre situation actuelle et détection des anomalies dans votre RIS - Relevé Individuel de Situation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Optimisation retraite obligatoire et complémentaire</h4>
                    <p>
                      Nous regardons ensemble la meilleure stratégie à adopter pour toucher la pension la plus optimale (rachats de trimestres, âge de départ à taux plein, cumul emploi retraite).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Liquidation des droits</h4>
                    <p>
                      Nous vous aidons dans les démarches de liquidation de vos droits retraite auprès des différentes caisses.
                    </p>
                  </div>

                  <p>
                    Pour bénéficier de ces services, nous vous invitons à prendre contact avec le cabinet.
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

          {/* Solutions financières et fiscales */}
          <section id="solutions-financieres">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  Proposition de solutions financières et fiscales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Le dispositif loi PACTE (2019) vous offre des moyens d'épargner pour votre retraite en réduisant vos impôts avec des possibilités de sorties anticipées.
                </p>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Le PERIN</h4>
                    <p>
                      Le plan d'épargne Retraite Individuel (PERIN) est accessible quel que soit votre profession. Vous pouvez l'ouvrir, l'alimenter à votre rythme en bénéficiant d'une réduction fiscale et sortir en capital ou en rente.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Le PERECO</h4>
                    <p>
                      Le PER d'Entreprise Collectif (PERECO) est accessible à toutes les entreprises peu importe leur taille dès lors qu'elles emploient au moins un salarié (même à temps partiel) en plus du dirigeant. Vous bénéficiez alors d'un cadre fiscal avantageux.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Le PEROB</h4>
                    <p>
                      Le PER d'Entreprise Obligatoire succède à l'article 83. Totalement pris en charge par votre entreprise, il offre un cadre fiscal et social avantageux pour cette dernière et ses salariés.
                    </p>
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

          {/* Transfert de contrats anciens */}
          <section>
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  Transférez vos anciens contrats retraite !
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Dirigeants ou TNS, transférez vos anciens contrats PERP/MADELIN et vos assurances vies de plus de 8 ans pour bénéficier d'un cadre fiscal avantageux !
                  </p>
                  <p>
                    Nous vous aidons à mettre en place les différents dispositifs d'Epargne Salariale au sein de vos structures.
                  </p>
                  <p>
                    Vous êtes intéressés pour souscrire à un Plan d'Epargne Retraite ou pour avoir de plus amples informations sur les dispositifs: Le cabinet AGAVIC est disponible pour vous accompagner.
                  </p>
                </div>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
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