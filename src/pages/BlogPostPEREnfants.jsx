import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Eye, RefreshCw } from 'lucide-react';

const BlogPostPEREnfants = () => {
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
                Le PER, un cadeau pour les enfants !
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-900">AGAVIC</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>17 juin 2021</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>2 min de lecture</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>19 vues</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <RefreshCw className="h-4 w-4" />
                <span>Dernière mise à jour : 19 juil. 2021</span>
              </div>

              <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center rounded-lg mb-8">
                <span className="text-white text-2xl font-semibold">AGAVIC</span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 leading-relaxed font-medium">
                      Article de monsieur Rolland NINO - Le Blog de la rémunération du dirigeant - 8 mars 2020
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Pour cadeau de naissance, il est d'usage assez répandu que les parents ou grands-parents ouvrent un livret A à leur nouvelle descendance. Depuis la loi PACTE, le PER (Plan d'Épargne Retraite) offre l'opportunité d'être souscrit au profit d'un enfant mineur.
                  </p>

                  <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                    <h2 className="text-xl font-bold text-blue-900 mb-3">
                      Mais quel intérêt d'ouvrir un PER à ses enfants mineurs ?
                    </h2>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg mr-3">1</span>
                      1er intérêt : L'acquisition de la résidence principale
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Contrairement à ses prédécesseurs, il est possible de débloquer le PER de manière anticipée pour acquérir sa résidence principale. Vos enfants pourront récupérer les sommes investies pour acquérir leur appartement le moment venu.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Les enfants mineurs ne percevant pas de rémunérations, les parents pourront déposer sur le PER, en franchise fiscale, 10 % du plafond annuel de Sécurité sociale soit <strong>4.114 €</strong> en 2020 par enfant.
                    </p>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h3 className="font-bold text-green-800 mb-3">Projection sur 25 ans :</h3>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Capital accumulé :</strong> 131.759 €</p>
                        <p><strong>Produits financiers :</strong> 26.619 €</p>
                        <p className="text-lg font-bold text-green-800"><strong>Total :</strong> 158.378 €</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        <em>Hypothèses : augmentation du PASS de 2% par an et rentabilité financière annuelle de 1,50%</em>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg mr-3">2</span>
                      2ème intérêt : L'avantage fiscal
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Les parents pourront économiser un montant d'impôt sur le revenu équivalent aux versements qu'ils auront effectués sur le PER multiplié par leur taux marginal d'impôt sur le revenu.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-bold text-blue-800 mb-3">Calcul de l'économie fiscale (TMI 41%) :</h3>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Économie d'impôt parents :</strong> 54.021 €</p>
                        <p><strong>Impôt enfant lors du déblocage :</strong></p>
                        <ul className="ml-6 space-y-1">
                          <li>- Flat tax sur produits financiers (30%) : 7.988 €</li>
                          <li>- Impôt sur le capital : 16.128 €</li>
                          <li>- <strong>Total impôt enfant :</strong> 24.116 €</li>
                        </ul>
                        <p className="text-lg font-bold text-green-600 mt-3">
                          <strong>Gain fiscal familial :</strong> 29.905 €
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mt-4">
                      Le gain d'impôt « familial » de 29.905 € est dû au différentiel du taux marginal d'impôt entre les enfants et les parents.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg mr-3">3</span>
                      3ème intérêt : La simplicité du dispositif
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Les versements sur un PER sont dispensés d'une donation devant notaire tout en sécurisant la destination des sommes investies par les parents : soit la retraite soit l'acquisition de la résidence principale.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Les grands-parents peuvent réaliser une donation à leurs petits-enfants. L'avantage fiscal sera acquis aux parents. Cette donation profite ainsi à deux générations.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h2 className="text-xl font-bold text-orange-800 mb-4">
                      Tout cela nécessite quelques précautions
                    </h2>

                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>• Dons d'usage :</strong> Les versements effectués par les parents sur les PER de leurs enfants pour être considérés comme des dons d'usage doivent être remis lors d'évènements (anniversaire, Noël, …) et ne pas être excessifs au regard de leur patrimoine. Ils pourront ainsi échapper aux droits de donation.
                      </p>

                      <p>
                        <strong>• Propriété :</strong> Les fonds investis doivent être la propriété de l'enfant mineur.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-3">L'expertise AGAVIC</h3>
                    <p className="text-gray-700 leading-relaxed">
                      AGAVIC vous accompagne dans la mise en place d'un PER pour vos enfants. Nos conseillers vous guident dans l'optimisation fiscale et la sécurisation juridique de ce dispositif innovant.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Author credit */}
              <div className="mt-8">
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-600">
                      Article original de <strong>Rolland NINO</strong> - Le Blog de la rémunération du dirigeant (8 mars 2020)
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Engagement stats */}
              <div className="mt-8">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>19 vues</span>
                      <span>0 commentaire</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to action */}
              <div className="mt-8">
                <Card className="bg-blue-900 text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Intéressé par un PER pour vos enfants ?</h3>
                    <p className="mb-6">
                      AGAVIC vous accompagne dans la mise en place d'un Plan d'Épargne Retraite pour vos enfants.
                      Découvrez cette stratégie patrimoniale innovante et ses avantages fiscaux.
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
                        onClick={() => navigate('/blog/avantages-per')}
                      >
                        → Les avantages du PER
                      </Button>
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
                        onClick={() => navigate('/gestion-patrimoine')}
                      >
                        → Découvrir la gestion de patrimoine
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

export default BlogPostPEREnfants;