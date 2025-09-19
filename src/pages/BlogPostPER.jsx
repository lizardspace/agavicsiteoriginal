import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Eye, Heart } from 'lucide-react';

const BlogPostPER = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/actualite')}
            className="text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux actualités
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <article>
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Les avantages du PER
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-900">AGAVIC</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>16 juil. 2021</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>2 min de lecture</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>19 vues</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-1 text-red-500 fill-current" />
                  <span>1 j'aime</span>
                </div>
              </div>

              <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center rounded-lg mb-8">
                <span className="text-white text-2xl font-semibold">AGAVIC</span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Le Plan d'Epargne Retraite – PER, instauré par la loi PACTE en 2019 est un nouveau contrat de placement qui propose de nombreux avantages pour préparer sa retraite. Il a réussi à capter 20 milliards € d'encours depuis sa création et est l'un des supports les plus attractif du moment. Il peut être intéressant, en complément d'une assurance vie, d'articuler sa stratégie de revenus retraite avec un PER.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Entre 2019 et 2021, le montant engrangé par le PER était de quatre milliards d'euros, la tendance de l'assurance vie sur la même période a été inverse avec un milliard d'euros désinvestis. Pourquoi cette tendance ? Quels sont les avantages de ce nouveau plan d'épargne et comment est-il possible d'allier ses atouts avec ceux de l'assurance vie ?
                  </p>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                      <span className="text-3xl mr-3">•</span>
                      Réduisez vos impôts
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      C'est un moyen très efficace de réduire son imposition. En effet, les versements volontaires du bénéficiaire sont déduits du revenu imposable jusqu'à 10% du revenu professionnel annuel.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Cette déduction fiscale est très avantageuse pour les tranches d'imposition élevées qui peuvent ainsi réduire leur base imposable.
                    </p>

                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="text-gray-700 leading-relaxed font-semibold">
                        Si votre tranche marginale d'imposition est de 41%, 10.000 € investis réduiront votre impôt de 4.100 € !
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                      <span className="text-3xl mr-3">•</span>
                      Diversifiez vos placements en transférant les sommes placées sur son assurance vie
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Le gouvernement offre aux détenteurs d'une assurance vie de plus de huit ans un doublement de l'abattement fiscal sur les plus-values en cas de transfert sur un PERin avant le 1er janvier 2023. L'abattement est de 9 200 € pour une personne seule au lieu de 4 600 € et de 18 400 € au lieu de 9 200 € pour un couple. Vous devez, pour en bénéficier, être à plus de cinq ans de votre départ à la retraite
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Ce doublement de l'abattement permet de diversifier ses placements tout en rachetant son assurance vie sans fiscalité.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                      <span className="text-3xl mr-3">•</span>
                      Versez votre intéressement et/ou votre participation sur un plan d'épargne retraite entreprise collectif (PERECO)
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                      Vous avez touché des primes d'intéressement ou/et de participation de la part de votre entreprise ? Verser ces primes sur un PERECO vous permet de les exonérer de d'IRPP.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                      <span className="text-3xl mr-3">•</span>
                      Transférez vos anciens contrats PERP, Madelin, Art 83…
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Pendant la phase d'épargne, il est possible de regrouper sur un seul PER des droits constitués sur des contrats d'épargne retraite (PERCO, PERP, Madelin, article 83…)
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Transférer vos anciens contrats permet d'accéder à de nouveaux avantages comme des cas de sortie anticipés supplémentaires et la possibilité de débloquer en capital et non en rente.
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                    <p className="text-gray-700 leading-relaxed font-semibold text-center">
                      Vous avez des questions ? Nous serons heureux d'y répondre !
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-3">Pourquoi choisir AGAVIC pour votre PER ?</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Analyse personnalisée de votre situation fiscale</li>
                      <li>• Accompagnement dans le transfert de vos anciens contrats</li>
                      <li>• Optimisation de votre stratégie épargne retraite</li>
                      <li>• Suivi régulier et conseils d'experts</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Engagement stats */}
              <div className="mt-8">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>19 vues</span>
                      <div className="flex items-center gap-4">
                        <span>0 commentaire</span>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1 text-red-500 fill-current" />
                          <span>1 j'aime</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to action */}
              <div className="mt-8">
                <Card className="bg-blue-900 text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Intéressé par le PER ?</h3>
                    <p className="mb-6">
                      AGAVIC vous accompagne dans la mise en place de votre Plan d'Épargne Retraite.
                      Contactez-nous pour une étude personnalisée et découvrez les économies fiscales possibles.
                    </p>
                    <Button
                      className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3"
                      onClick={() => navigate('/contact')}
                    >
                      Nous contacter
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Related articles suggestion */}
              <div className="mt-8">
                <Card className="bg-gray-100">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-blue-900 mb-4">Articles liés</h3>
                    <div className="space-y-2">
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal justify-start"
                        onClick={() => navigate('/epargne-retraite')}
                      >
                        → En savoir plus sur l'épargne retraite
                      </Button>
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal justify-start"
                        onClick={() => navigate('/epargne-salariale')}
                      >
                        → Découvrir l'épargne salariale
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPER;