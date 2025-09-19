import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import prevoyance1 from '../assets/images/prevoyance1.avif';
import prevoyance2 from '../assets/images/prevoyance2.avif';

const Prevoyance = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
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
              Prévoyance - Complémentaire Santé
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                onClick={() => scrollToSection('prevoyance-section')}
              >
                Prévoyance adaptée à chaque besoin
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                onClick={() => scrollToSection('complementaire-section')}
              >
                Complémentaire santé / Mutuelle
              </Button>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              AGAVIC réalise votre étude personnalisée pour vivre en sécurité !
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Prévoyance */}
          <section id="prevoyance-section">
            <Card>
              <CardContent className="space-y-6 p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-blue-900">Prévoyance :</strong> Chef d'entreprise ou TNS, pour vous, votre collège cadres et non cadres, vos salariés, AGAVIC vous sélectionne la prévoyance la mieux adaptée à vos besoins.
                    </p>

                    <p>
                      La prévoyance est un contrat à souscrire auprès d'une compagnie d'assurances permettant de faire face aux grands risques de la vie comme la maladie, l'accident, la dépendance ou le décès. Ces aléas peuvent entraîner une incapacité, partielle ou totale, de travailler, une invalidité (temporaire ou définitive) ou un décès, ayant pour conséquence une perte de revenus.
                    </p>

                    <p>
                      Le régime obligatoire de la Sécurité sociale auquel vous êtes rattaché prévoit une prise en charge de ces aléas, mais l'indemnisation reste partielle.
                    </p>

                    <p>
                      Avoir un contrat de prévoyance individuel ou à travers votre entreprise c'est :
                    </p>

                    <ul className="ml-6 space-y-1">
                      <li>Compléter les prestations du régime obligatoire</li>
                      <li>Vous protéger financièrement des conséquences d'une maladie ou d'un accident</li>
                      <li>Mettre votre entourage à l'abri du besoin en cas de décès</li>
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <img
                      src={prevoyance1}
                      alt="Prévoyance - Protection financière"
                      className="rounded-lg shadow-lg max-w-full h-auto"
                    />
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

          {/* Complémentaire santé */}
          <section id="complementaire-section">
            <Card className="bg-blue-50">
              <CardContent className="space-y-6 p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <img
                      src={prevoyance2}
                      alt="Complémentaire santé - Couverture médicale"
                      className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-blue-900">Complémentaire santé :</strong> Contrats collectifs, TNS ou Séniors, AGAVIC, comme courtier, a accès à une large offre de complémentaires santé avec un excellent rapport garanties/cotisations
                    </p>

                    <p>
                      Une complémentaire santé est un contrat d'assurance qui vise à améliorer la couverture médicale de l'assuré en complétant les prestations de l'assurance maladie obligatoire. Elle offre une sécurité financière en réduisant la charge des dépenses de santé non couvertes par l'assurance de base. Les termes et les conditions des contrats de complémentaire santé varient d'une compagnie d'assurance à l'autre, il est donc essentiel de bien comprendre la couverture offerte avant de souscrire un contrat.
                    </p>

                    <p>
                      Vous souhaitez bénéficier de notre expertise, n'hésitez pas à nous contacter !
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

          {/* Notre expertise */}
          <section>
            <Card>
              <CardContent className="space-y-6 p-8">
                <p className="text-gray-700 leading-relaxed">
                  Chez AGAVIC Assurances, votre bien-être et votre sécurité financière sont des priorités essentielles. C'est pourquoi nous sommes fiers de vous présenter notre expertise en matière de prévoyance et de complémentaire santé. Notre engagement est de vous accompagner dans la recherche des meilleures solutions, en vous offrant des conseils personnalisés et en vous aidant à prendre des décisions éclairées pour votre avenir.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Voici en quoi AGAVIC Assurances peut vous aider à obtenir une tranquillité d'esprit financière :
                </p>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Prévoyance sur Mesure :</h4>
                    <p>
                      Que vous soyez un chef d'entreprise soucieux de protéger vos collaborateurs, un travailleur non salarié cherchant à sécuriser votre revenu en cas d'incapacité de travail, ou un particulier préoccupé par la transmission de votre patrimoine, nous vous proposons des solutions de prévoyance sur mesure. Notre équipe évalue vos besoins spécifiques et vous guide vers les meilleures options pour garantir votre protection financière.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Complémentaire Santé Adaptée :</h4>
                    <p>
                      L'accès à des soins de santé de qualité est essentiel pour maintenir votre bien-être. AGAVIC Assurances vous offre un large éventail de choix en matière de complémentaire santé. Que vous soyez un particulier, un travailleur indépendant, ou un chef d'entreprise désireux d'offrir des avantages à vos employés, nous vous aidons à trouver la complémentaire santé idéale. Vous bénéficierez ainsi d'une couverture optimale, tout en maîtrisant vos coûts.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Conseils Éclairés :</h4>
                    <p>
                      Notre équipe de conseillers expérimentés est là pour répondre à toutes vos questions, vous expliquer les différentes options disponibles, et vous aider à prendre des décisions informées. Nous vous guiderons à travers les méandres parfois complexes de l'assurance de personnes, en veillant à ce que vous compreniez parfaitement chaque aspect de votre couverture.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Accès aux Meilleures Offres :</h4>
                    <p>
                      En tant que courtier en assurance, AGAVIC Assurances a accès à un large éventail de produits d'assurance de plusieurs compagnies. Cela signifie que nous pouvons négocier des offres concurrentielles pour vous, en vous garantissant un excellent rapport garanties/cotisations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Conclusion et engagement */}
          <section>
            <Card className="bg-blue-50">
              <CardContent className="space-y-6 p-8">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Votre bien-être financier est notre priorité, et nous sommes déterminés à vous accompagner à chaque étape. Chez AGAVIC Assurances, nous croyons en la puissance de la prévoyance et de la complémentaire santé pour protéger votre avenir.
                  </p>

                  <p>
                    N'hésitez pas à nous contacter pour discuter de vos besoins spécifiques, planifier une consultation, ou obtenir de plus amples informations. Nous sommes là pour vous aider à construire un avenir plus sûr et plus serein.
                  </p>

                  <p className="font-semibold text-blue-900">
                    Faites le choix de la sécurité financière. Choisissez AGAVIC Assurances.
                  </p>


                  <p>
                    Vous êtes intéressés pour souscrire à une prévoyance/une complémentaire santé ou pour avoir de plus amples informations sur les dispositifs: Le cabinet AGAVIC est disponible pour vous accompagner.
                  </p>
                </div>

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

export default Prevoyance;