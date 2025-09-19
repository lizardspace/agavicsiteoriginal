import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import agavicLogo from '../assets/images/agavicassurances.avif';

const MentionsLegales = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <img
                  src={agavicLogo}
                  alt="AGAVIC ASSURANCES"
                  className="h-16 mx-auto mb-4"
                />
                <h1 className="text-3xl font-bold text-blue-900 mb-2">
                  Mentions légales
                </h1>
              </div>

              {/* Company Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-blue-900 mb-4">
                    Informations sur la société
                  </h2>

                  <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                    <p className="text-gray-700">
                      <strong className="text-blue-900">Dénomination sociale :</strong><br />
                      AGAVIC Crédits EURL
                    </p>

                    <p className="text-gray-700">
                      <strong className="text-blue-900">Adresse du siège social :</strong><br />
                      67 route de Paris<br />
                      69160 Tassin la Demi-Lune
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <p className="text-gray-700">
                        <strong className="text-blue-900">Téléphone :</strong><br />
                        <a href="tel:0478342601" className="text-blue-600 hover:underline">
                          04 78 34 26 01
                        </a>
                      </p>

                      <p className="text-gray-700">
                        <strong className="text-blue-900">Fax :</strong><br />
                        04 78 34 73 09
                      </p>
                    </div>

                    <p className="text-gray-700">
                      <strong className="text-blue-900">Email :</strong><br />
                      <a href="mailto:contact@agavic.fr" className="text-blue-600 hover:underline">
                        contact@agavic.fr
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-blue-900 mb-4">
                    Statut juridique
                  </h2>

                  <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                    <p className="text-gray-700">
                      <strong className="text-blue-900">Forme juridique :</strong><br />
                      EURL de courtage de crédits et d'assurance au capital de 5.000 €
                    </p>

                    <p className="text-gray-700">
                      <strong className="text-blue-900">RCS :</strong><br />
                      882 493 091 RCS Lyon
                    </p>

                    <p className="text-gray-700">
                      <strong className="text-blue-900">Code NAF :</strong><br />
                      6619B
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-blue-900 mb-4">
                    Autorisation d'exercice
                  </h2>

                  <div className="bg-yellow-50 p-6 rounded-lg space-y-3">
                    <p className="text-gray-700">
                      <strong className="text-blue-900">Enregistrement ORIAS :</strong><br />
                      Numéro 20003066
                    </p>

                    <p className="text-gray-700">
                      <strong className="text-blue-900">Consultation ORIAS :</strong><br />
                      <a
                        href="https://www.orias.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        www.orias.fr
                      </a>
                    </p>

                    <p className="text-gray-700">
                      <strong className="text-blue-900">Qualité :</strong><br />
                      Courtier d'assurance et mandataire d'intermédiaire en opérations de banque
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-blue-900 mb-4">
                    Assurance Responsabilité Civile Professionnelle
                  </h2>

                  <div className="bg-green-50 p-6 rounded-lg space-y-3">
                    <p className="text-gray-700">
                      <strong className="text-blue-900">Numéro de police :</strong><br />
                      N°231962
                    </p>

                    <p className="text-gray-700">
                      <strong className="text-blue-900">Assureur :</strong><br />
                      MMA IARD<br />
                      14 boulevard Marie et Alexandre Oyon<br />
                      72030 LE MANS CEDEX 9
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-xl font-bold text-blue-900 mb-4">
                    Autres informations légales
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-blue-200">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-blue-900 mb-2">Documents légaux</h3>
                        <div className="space-y-2 text-sm">
                          <div>
                            <a href="/politique-cookies" className="text-blue-600 hover:underline">
                              Politique en matière de cookies
                            </a>
                          </div>
                          <div>
                            <a href="/politique-confidentialite" className="text-blue-600 hover:underline">
                              Politique de confidentialité
                            </a>
                          </div>
                          <div>
                            <a href="/conditions-generales" className="text-blue-600 hover:underline">
                              Conditions générales d'utilisation
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-blue-900 mb-2">Contact</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p>Pour toute question concernant ces mentions légales :</p>
                          <p>
                            <a href="mailto:contact@agavic.fr" className="text-blue-600 hover:underline">
                              contact@agavic.fr
                            </a>
                          </p>
                          <p>
                            <a href="tel:0478342601" className="text-blue-600 hover:underline">
                              04 78 34 26 01
                            </a>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Footer Logo */}
              <div className="text-center mt-8 pt-6 border-t">
                <img
                  src={agavicLogo}
                  alt="AGAVIC ASSURANCES Logo"
                  className="h-12 mx-auto mb-2"
                />
                <p className="text-gray-600 text-sm">
                  © 2025 par AGAVIC. Tous droits réservés.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;