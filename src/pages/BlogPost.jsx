import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Eye } from 'lucide-react';

const BlogPost = () => {
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
                Achat immobilier : pouvez-vous changer d'assurance emprunteur ?
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-900">AGAVIC</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>13 nov. 2023</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>3 min de lecture</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>16 vues</span>
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
                    Quand vous souscrivez un prêt immobilier, l'assurance emprunteur n'est pas obligatoire, mais l'établissement prêteur peut l'exiger, afin de faire face aux risques liés au décès et à l'invalidité. En quoi consiste cette assurance ? Devez-vous accepter celle proposée par votre banque ? Pouvez-vous en changer librement ? On fait le point.
                  </p>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      Contrat d'assurance emprunteur : qu'est-ce que c'est ?
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      La souscription d'un contrat d'assurance emprunteur n'est pas obligatoire, mais elle peut être exigée par votre banque dans le cadre d'un emprunt immobilier.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4 italic">
                      Le caractère obligatoire ou facultatif de l'assurance doit être précisé dès l'offre préalable de prêt.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Ce contrat d'assurance permet de prendre en charge le remboursement total ou partiel de vos mensualités de prêt (capital et intérêts) dans les situations suivantes :
                    </p>

                    <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-700">
                      <li>incapacité temporaire de travail (totale ou partielle)</li>
                      <li>invalidité permanente (totale ou partielle)</li>
                      <li>perte totale et irréversible d'autonomie</li>
                      <li>décès.</li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed">
                      Vous pouvez souscrire, en option, une assurance perte d'emploi. Toutefois, celle-ci n'est jamais obligatoire et avant de souscrire, renseignez-vous sur ses conditions contractuelles.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      Pouvez-vous choisir librement votre contrat d'assurance emprunteur ?
                    </h2>

                    <p className="text-xl font-bold text-blue-600 mb-4">Oui !</p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      La banque peut proposer son contrat d'assurance emprunteur ou le contrat d'assurance d'un de ses partenaires, mais vous restez libre de vous adresser à l'assureur de votre choix.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>À savoir :</strong> Votre banque ne peut pas modifier les conditions du prêt immobilier qu'elle vous a proposé ou vous a accordé si vous choisissez un contrat d'assurance emprunteur externe.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      Pouvez-vous changer l'assurance d'un prêt immobilier en cours ?
                    </h2>

                    <p className="text-xl font-bold text-blue-600 mb-4">Oui !</p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Depuis le 1er septembre 2022, tous les emprunteurs, y compris ceux ayant un contrat en cours, peuvent changer à tout moment leur assurance emprunteur, sans attendre leur première année de contrat comme c'était le cas auparavant.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Cela est prévu par la loi Lemoine du 28 février 2022 « pour un accès plus juste, plus simple et plus transparent au marché de l'assurance emprunteur », qui vous permet de résilier votre contrat d'assurance emprunteur, sans frais.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Le nouveau contrat d'assurance doit néanmoins respecter les garanties minimales (décès et invalidité par exemple) exigées par votre établissement bancaire.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>À savoir :</strong> Vous pouvez vous reporter à la Fiche Standardisée d'Information Européenne (FISE) qui vous a été remise lors de la signature de votre prêt pour connaître vos garanties et niveaux de couverture minimum exigés par votre banque.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      Comment résilier votre contrat d'assurance ?
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Conformément à l'article L.113-14 du Code des assurances, vous pouvez envoyer votre demande de résiliation de votre assurance emprunteur :
                    </p>

                    <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-700">
                      <li>par lettre ou tout autre support durable</li>
                      <li>par déclaration faite au siège social ou chez le représentant de l'assureur</li>
                      <li>par acte extrajudiciaire</li>
                      <li>par le même mode de communication à distance que celui proposé par l'assureur pour la conclusion du contrat</li>
                      <li>ou encore par tout autre moyen prévu au contrat.</li>
                    </ul>

                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>À savoir :</strong> Votre assureur propose de conclure des contrats par voie électronique au moment où vous souhaitez résilier votre contrat d'assurance ? Vous pouvez également résilier votre contrat en ligne, même si celui-ci a été souscrit en agence par exemple.
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-2">
                        En effet, les organismes d'assurance doivent désormais garantir le fonctionnement de la « résiliation en trois clics » depuis le 1er juin 2023 pour tous les contrats conclus ou pouvant être conclus en ligne par les consommateurs.
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Vous devez indiquer à l'assureur la date de prise d'effet du nouveau contrat d'assurance accepté par votre organisme prêteur.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      La banque dispose d'un délai de 10 jours pour répondre à votre demande de substitution de contrat d'assurance emprunteur. Elle conserve la faculté d'y opposer un refus. Ce dernier doit être communiqué et justifié par un motif légitime, par exemple la non-équivalence des garanties entre les deux contrats.
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed font-semibold">
                      Le personnel d'AGAVIC Assurances a une grande expérience en matière d'assurance de prêt. Les économies se chiffrent souvent en milliers d'euros. Vous avez une assurance de prêt en cours, interrogez-nous pour connaître les économies possibles !
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Source */}
              <div className="mt-8">
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-600">
                      Source : <a href="https://www.economie.gouv.fr/particuliers/immobilier-assurance-emprunteur" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">economie.gouv.fr</a>
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Engagement stats */}
              <div className="mt-8">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>16 vues</span>
                      <span>0 commentaire</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to action */}
              <div className="mt-8">
                <Card className="bg-blue-900 text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Besoin d'aide avec votre assurance emprunteur ?</h3>
                    <p className="mb-6">
                      AGAVIC vous accompagne dans l'optimisation de votre assurance de prêt.
                      Contactez-nous pour une étude personnalisée.
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
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;