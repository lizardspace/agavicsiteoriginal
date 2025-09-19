import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Eye } from 'lucide-react';

const BlogPostSante = () => {
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
                Tout savoir sur les complémentaires santé
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-900">AGAVIC</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>31 oct. 2023</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>5 min de lecture</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>9 vues</span>
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
                    Achat de lunettes de vue, pose de prothèses dentaires ou auditives, consommation de certains médicaments...De nombreuses dépenses de santé ne sont pas prises en charge - ou pas totalement - par l'assurance maladie obligatoire. C'est pourquoi la plupart des assurés optent pour une complémentaire santé (appelée également mutuelle santé*). Mais savez-vous exactement comment celles-ci fonctionnent ? Quelles garanties sont proposées ? Comment en changer ou comment les résilier ? On vous explique comment ça fonctionne !
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      * Dans les cas où les complémentaires santé sont souscrites auprès de mutuelles, elles s'appellent communément mutuelle santé, mais elles peuvent aussi être souscrites auprès d'autres organismes, notamment des compagnies d'assurance et des institutions de prévoyance.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      Qu'est-ce qu'une complémentaire santé ?
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Une complémentaire santé est un contrat qui a pour but de compléter les remboursements de la Sécurité sociale dans les champs de la maladie, des accidents et de la maternité. Ces contrats permettent une prise en charge de tout ou partie de ces dépenses.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Par exemple, si vous consultez votre médecin traitant qui est un médecin généraliste conventionné exerçant en secteur 1, sur le montant de 25 € de la consultation, l'Assurance maladie vous remboursera 70 %, soit 17,50 € (moins 1€ de la participation forfaitaire). Les 30 % restants, soit 7,50 €, seront à votre charge. Si vous possédez une complémentaire santé, c'est cette dernière qui remboursera tout ou partie de cette somme.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      La complémentaire santé est-elle obligatoire ?
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Toute personne peut souscrire à une complémentaire santé et en faire bénéficier éventuellement d'autres membres de sa famille, mais la complémentaire santé n'est pas obligatoire.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-blue-900 mb-2">À savoir</h3>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        L'entreprise a l'obligation de proposer une complémentaire à tous les salariés, cependant un salarié peut demander (par écrit) une dispense d'adhésion. Par exemple :
                      </p>
                      <ul className="list-disc ml-6 space-y-1 text-gray-700">
                        <li>s'il dispose déjà d'une couverture complémentaire</li>
                        <li>s'il dispose déjà d'une couverture collective (notamment en tant qu'ayant droit)</li>
                        <li>s'il est en contrat à durée déterminée (CDD) de moins de 3 mois</li>
                        <li>s'il est à temps très partiel ou s'il est apprenti et que la cotisation représente 10 % ou plus de son salaire.</li>
                      </ul>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      Notez que depuis 1er janvier 2022, les administrations d'État prennent progressivement et partiellement en charge les cotisations versées par les agents à leur mutuelle. Dans les autres fonctions publiques (territoriale et hospitalière), cette prise en charge se mettra progressivement en place à partir de 2026.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      Quelles sont les garanties proposées par les complémentaires santé ?
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Les garanties de remboursement des frais de soins et de biens médicaux varient selon les contrats proposés par les assureurs. Mais généralement, les contrats prennent en charge les frais d'hospitalisation médicale ou chirurgicale, les actes et frais de chirurgie, le forfait journalier hospitalier, les consultations et visites de médecins généralistes ou spécialistes, les frais pharmaceutiques, etc.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      De même, généralement la plupart des contrats proposent des garanties de base définies réglementairement. Par exemple :
                    </p>

                    <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-700">
                      <li>100 % de la base de remboursement de la sécurité sociale sur les soins courants</li>
                      <li>100 % du forfait journalier facturé par les établissements hospitaliers, sans limitation de durée</li>
                      <li>100 % de la base de remboursement de la Sécurité sociale pour les soins dentaires courants (consultations, et soins tels qu'un détartrage ou encore un traitement de caries.)</li>
                      <li>100 % de la base de remboursement de la sécurité sociale pour l'optique.</li>
                    </ul>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-blue-900 mb-2">À savoir</h3>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        La plupart des organismes qui proposent des complémentaires santé prévoient des contrats avec différents niveaux de couverture. Par exemple il est possible de souscrire à des contrats qui prennent aussi en charge certains dépassements d'honoraires de spécialistes, qui permettent de bénéficier de prestations supplémentaires en cas d'hospitalisation ou bien qui permettent de couvrir encore davantage les dépenses liées aux appareils acoustiques, aux prothèses dentaires, ou aux lunettes et lentilles de contact par exemple.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        De même des garanties de prévoyance sont également proposées, par exemple pour couvrir les frais relatifs à une incapacité temporaire ou à une invalidité.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Bien évidemment, plus un contrat prévoit une couverture étendue, plus les cotisations payées par l'assuré seront élevées.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      Comment souscrire à une complémentaire santé ?
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Pour souscrire à une complémentaire santé, vous pouvez solliciter une entreprise d'assurance privée, une mutuelle, une institution de prévoyance, une banque, ou même un courtier ou un agent général d'assurance.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-blue-900 mb-2">À savoir</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Notez que si la souscription a été réalisée à distance (par exemple au téléphone) ou bien dans le cadre d'un démarchage à domicile, vous disposez d'un délai de 14 jours pour vous rétracter sans que vous ayez à vous justifier. Cette rétractation éventuelle ne peut donner lieu à des pénalités.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      Quelques conseils pour vous aider à choisir votre complémentaire santé
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Il n'est pas toujours facile de s'y retrouver dans les nombreuses offres de contrat de complémentaire santé. Voici quelques conseils de la Direction générale de la concurrence de la consommation et de la répression des fraudes (DGCCRF) pour vous aiguiller dans votre choix :
                    </p>

                    <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-700">
                      <li>Il est conseillé de privilégier les contrats qui indiquent clairement les couvertures proposées et les remboursements obtenus. À ce titre, il peut être utile d'examiner le montant du remboursement de la Sécurité sociale pour chaque acte médical et la somme qui reste à charge après remboursement de la complémentaire santé.</li>
                      <li>Optez pour un contrat dont les garanties sont adaptées à votre budget, à votre composition familiale et surtout à votre état de santé ainsi qu'à celui des éventuels autres assurés du contrat. En effet, un assuré devant consulter régulièrement des spécialistes ou devant faire face à des dépenses importantes de santé, aura besoin d'un contrat avec une couverture plus large qu'un assuré ne rencontrant pas ce type de situation.</li>
                    </ul>

                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h3 className="font-bold text-blue-900 mb-2">À savoir</h3>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        Dans tous les cas, il est vivement conseillé de demander un tableau des prestations récapitulant tous les remboursements, ainsi que les conditions générales, avant de souscrire à un contrat.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        Surtout, comparez les offres et demandez des devis.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Vous pouvez également consulter les sites des comparateurs d'assurance en ligne pour vous aider dans votre choix.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      Pouvez-vous obtenir des aides pour souscrire à une complémentaire santé ?
                    </h2>

                    <p className="text-xl font-bold text-blue-600 mb-4">Oui !</p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Depuis le 1er novembre 2019, la complémentaire santé solidaire (qui remplace la CMU-C et l'ACS) permet de faire bénéficier les personnes à faibles ressources, d'une complémentaire santé qui ne coûte rien ou bien moins d'1€ par jour et par personne.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Le droit à la complémentaire santé solidaire dépend de la situation de l'assuré et de ses ressources.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      Comment résilier une complémentaire santé ?
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Depuis le 1er décembre 2020 les assurés peuvent résilier, après un an de souscription, leur contrat de complémentaire santé, à tout moment, sans frais ni pénalité. Auparavant, cette possibilité ne pouvait être exercée qu'une fois par an, avant la date d'anniversaire du contrat, sous peine de payer des pénalités.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Concrètement, pour résilier votre complémentaire santé vous devez notifier à l'organisme qui gère votre complémentaire, votre souhait de résilier. Cela peut être fait par courrier (il n'est plus obligatoire que ce dernier soit envoyé en recommandé avec accusé de réception), par mail ou via votre compte client si cela est prévu par l'organisme, ou bien encore directement lors d'un rendez-vous physique.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h3 className="font-bold text-blue-900 mb-2">À savoir</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Notez que dans certains cas (mariage, divorce, décès du conjoint, changement de profession, etc.), l'assuré n'a pas besoin d'attendre la fin de sa première année de contrat pour résilier sa complémentaire sans frais.
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      La résiliation prend effet un mois après que l'assureur en a été notifié.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Comme c'est le cas par exemple pour un changement de banque, si vous résiliez votre complémentaire pour en changer, votre nouvel organisme assureur peut prendre en charge si vous le souhaitez, les démarches de résiliation auprès de votre ancien assureur.
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed font-semibold">
                      AGAVIC vous accompagne dans le choix de votre complémentaire santé. Nos experts analysent vos besoins et vous proposent les meilleures solutions adaptées à votre situation et à votre budget.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Source */}
              <div className="mt-8">
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-600">
                      Source : <a href="https://www.economie.gouv.fr/particuliers/tout-savoir-complementaires-sante" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">economie.gouv.fr</a>
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Engagement stats */}
              <div className="mt-8">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>9 vues</span>
                      <span>0 commentaire</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to action */}
              <div className="mt-8">
                <Card className="bg-blue-900 text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Besoin de conseils pour votre complémentaire santé ?</h3>
                    <p className="mb-6">
                      AGAVIC vous aide à choisir la complémentaire santé la mieux adaptée à vos besoins et à votre budget.
                      Contactez-nous pour une analyse personnalisée.
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

export default BlogPostSante;