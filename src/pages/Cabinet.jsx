import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Linkedin, Phone } from 'lucide-react';
import patrickImage from '../assets/images/patrickrecipon.avif';
import vianneyImage from '../assets/images/vianneyrecipon.avif';
import eresLogo from '../assets/images/eres.avif';
import epsensLogo from '../assets/images/epsens.avif';
import generaliLogo from '../assets/images/generali.avif';
import uafLogo from '../assets/images/uaflife.avif';
import primonialLogo from '../assets/images/primonial.avif';
import aprilLogo from '../assets/images/april.avif';

const Cabinet = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Patrick RECIPON",
      role: "Dirigeant - Conseiller en gestion de patrimoine",
      description: "20 années d'expérience en gestion de patrimoine forgée auprès de plus de 250 clients en les accompagnants dans la mise en place de leurs projets de vie, de la constitution de leur patrimoine.",
      image: patrickImage
    },
    {
      name: "Vianney RECIPON",
      role: "Collaborateur spécialisé",
      description: "Tout juste diplômé en assurances et actuellement en formation en gestion de patrimoine, il suit de près les dossiers du cabinet et accompagne nos clients depuis septembre 2023.",
      image: vianneyImage
    }
  ];

  const partners = [
    { name: "Eres", logo: eresLogo },
    { name: "Epsens", logo: epsensLogo },
    { name: "Generali", logo: generaliLogo },
    { name: "UAF Life", logo: uafLogo },
    { name: "Primonial", logo: primonialLogo },
    { name: "April", logo: aprilLogo }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                  Le cabinet AGAVIC
                </h1>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  AGAVIC, situé au cœur de la région lyonnaise, est spécialisé dans la gestion de patrimoine, les placements financiers,
                  les assurances de personnes, l'épargne salariale, l'épargne retraite, prévoyance et complémentaire santé.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Nous vous accompagnons : Particuliers dans l'étude, la gestion, la conservation, l'expansion et la transmission de votre patrimoine, grâce à nos
                  conseils et notre accompagnement. Dirigeants d'entreprise, professions libérales dans la mise en place de votre PEE (plan d'épargne entreprise), de
                  votre PERECO (plan d'épargne retraite collectif), de vos contrats de participation et d'intéressement pour vous et vos salariés.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                    onClick={() => navigate('/contact')}
                  >
                    Nous contacter
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3"
                    onClick={() => navigate('/gestion-patrimoine')}
                  >
                    Nos services
                  </Button>
                </div>
              </div>
              <aside className="bg-white p-6 rounded-2xl shadow-lg border">
                <h3 className="text-lg font-semibold mb-4 text-blue-900">Contact rapide</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <p className="text-sm">
                      <span className="text-gray-600">Téléphone :</span>{' '}
                      <strong className="text-gray-800">04.78.34.73.09</strong>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-blue-600" />
                    <p className="text-sm">
                      <span className="text-gray-600">Suivez-nous :</span>{' '}
                      <a
                        href="https://www.linkedin.com/company/agavic-assurances/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
                <Button
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                  onClick={() => navigate('/contact')}
                >
                  Contactez-nous
                </Button>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Mission & Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">Notre mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Nous vous conseillons quelque soit votre statut pour conserver votre niveau de vie lorsque vous serez retraités. Nous réalisons votre bilan retraite,
                  votre reconstitution de carrière et la liquidation de vos droits lorsque vous partirez à la retraite.
                </p>
                <p className="text-gray-700">
                  Pour nous, votre bien-être et votre sécurité financière sont des priorités essentielles. C'est pourquoi nous sommes fiers de vous présenter
                  notre expertise en matière de prévoyance et de complémentaire santé.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">Ce que nous faisons</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bilans retraite et reconstitutions de carrière</li>
                  <li>• Mise en place de plans d'épargne entreprise (PEE, PERECO)</li>
                  <li>• Contrats de prévoyance et complémentaire santé</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Le dirigeant
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-32 h-48 sm:h-auto flex-shrink-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-l-lg sm:rounded-l-none sm:rounded-t-lg"
                        />
                      </div>
                      <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
                        <p className="text-sm font-medium text-gray-600 mb-3">{member.role}</p>
                        <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-3xl text-center">Nos valeurs</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal ml-6 space-y-3 text-gray-700">
                  <li>Aimer et respecter le client, le travail de chacun et chaque membre du personnel</li>
                  <li>Facturer le juste prix au travail réalisé</li>
                  <li>Dire la vérité, bannir tout mensonge, faux témoignage</li>
                  <li>Développer force, courage et persévérance dans l'effort. Force et courage de toujours proposer des produits de qualité, force et courage de dire non à des produits qui ne conviennent pas au client, force et courage de reconnaître ses erreurs</li>
                  <li>Être prudent : la prudence est une qualité essentielle pour un assureur, un conseiller en gestion de patrimoine. Savoir discerner le véritable bien du client, de ses collaborateurs et choisir les justes moyens pour l'accomplir</li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Partners Section */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Nos partenaires
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                  {partners.map((partner, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <div className="w-20 h-12 flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cabinet;