import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import epargnesalariale from '../assets/images/epargnesalariale.avif';

const EpargneSalariale = () => {
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
              Epargne salariale
            </h1>
            <p className="text-xl text-gray-700 mb-8 italic">
              "Constituez-vous une épargne à l'aide de votre entreprise"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                onClick={() => scrollToSection('pee-pereco')}
              >
                Le PEE/PERECO
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                onClick={() => scrollToSection('participation')}
              >
                La participation
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                onClick={() => scrollToSection('interessement')}
              >
                L'intéressement
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
              <CardContent className="space-y-6 p-8">
                <p className="text-gray-700 leading-relaxed">
                  Bénéficiant d'un cadre fiscal allégé depuis la loi PACTE, les différents dispositifs d'épargne salariale permettent à l'entreprise de verser des primes, appelées Participation, Intéressement et abondement qui sont versées aux salariés et à son dirigeant*.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Elles sont:
                </p>

                <ul className="space-y-1 ml-6 text-gray-700">
                  <li>Exonérées de charges sociales et patronales**.</li>
                  <li>Déductibles de l'IS</li>
                  <li>Exonérées d'IRPP*** si versées sur un dispositif PEE/PERECO.</li>
                </ul>

                <div className="text-sm text-gray-600 space-y-1 mt-6">
                  <p>*Pour les dirigeants d'entreprises de moins de 250 salariés.</p>
                  <p>**Seulement un forfait social de 20% s'applique pour les entreprises de plus de 49 salariés pour la participation et l'abondement et de plus de 249 salariés pour l'intéressement.</p>
                  <p>***IRPP: Impôt sur le Revenu des Personnes Physiques</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <h4 className="font-bold text-blue-900 mb-2">Notre service</h4>
                  <p className="text-gray-700">
                    AGAVIC vous accompagne dans la mise en place de ces différents dispositifs et trouvons la solution la plus adaptée à votre situation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section PEE / PERECO */}
          <section id="pee-pereco">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">
                  Le PEE/PERECO
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Les Plans d'Epargne Entreprise/ Plans d'Epargne Retraite Entreprise collectif permettent d'épargner avec l'aide de l'entreprise. Ils sont ouverts aux dirigeants des entreprises de moins de 250 salariés. Ils présentent des avantages fiscaux uniques pour les salariés, l'entreprise et son dirigeant à l'entrée et à la sortie.
                  </p>

                  <p>
                    Ces plans d'épargne peuvent accueillir différents types de versements :
                  </p>

                  <ul className="ml-6 space-y-1">
                    <li>Des versements volontaires de la part du salarié</li>
                    <li>L'intéressement, la participation et l'abondement de l'employeur</li>
                    <li>Les droits issus du compte épargne temps (dans la limite de 10 jours non pris par an)</li>
                    <li>Les transferts des anciens contrats (PEE/PERCO)</li>
                  </ul>

                  <p>
                    Sur le PEE, les versements volontaires du salarié sont limités à 25% de sa rémunération brute annuelle.
                  </p>

                  <p>
                    Les versements volontaires sur un PERECO peuvent bénéficier d'une exonération fiscale dans la limite du plafond retraite.
                  </p>

                  <p>
                    Ces dispositifs son très souples et donnent la possibilité pour le PERECO de sortir soit en rente, soit en capital. La sortie du PEE se fait à plus court terme et en capital (au bout de 5 ans).
                  </p>

                  <p>
                    La loi prévoit des cas de déblocages anticipés pour faire face aux évènements de la vie. Il existe 11 cas de déblocage pour le PEE et 6 cas pour le PERECO.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-3">Les cas de déblocages pour le PEE sont :</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>- L'acquisition ou la construction de la résidence principale</li>
                        <li>- L'agrandissement de la résidence principale</li>
                        <li>- Le Mariage ou conclusion d'un PACS</li>
                        <li>- La cessation du contrat de travail</li>
                        <li>- La création ou la reprise d'une entreprise par le bénéficiaire, son conjoint son partenaire de PACS ou ses enfants</li>
                        <li>- La naissance ou l'adoption du 3ème enfant et des suivants</li>
                        <li>- Le divorce, la séparation ou la dissolution d'un PACS, avec garde d'au moins un enfant</li>
                        <li>- Le décès du conjoint ou du partenaire de PACS</li>
                        <li>- L'invalidité du titulaire, de ses enfants, de son conjoint ou de son partenaire de PACS</li>
                        <li>- Situation de surendettement</li>
                        <li>- Les violences conjugales</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-3">Les cas de déblocages pour le PERECO :</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>- L'acquisition ou la construction de la résidence principale</li>
                        <li>- Le décès du conjoint ou du partenaire du PACS</li>
                        <li>- L'invalidité du titulaire, de ses enfants, de son conjoint ou de son partenaire de PACS</li>
                        <li>- Une situation de surendettement</li>
                        <li>- L'expiration des droits à l'assurance chômage</li>
                        <li>- La cessation d'activité salariée et non salariée</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-bold text-blue-900 mb-3">Que se passe-t-il quand les primes d'intéressement, de participation et l'abondement sont versés sur des dispositifs d'épargne salariale ?</h4>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="flex justify-center mb-4">
                        <img
                          src={epargnesalariale}
                          alt="Graphique efficacité épargne salariale"
                          className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                      </div>
                      <div className="text-xs text-gray-600">
                        <p>* Forfait social à 0% sur la participation, l'intéressement et l'abondement dans les plans d'épargne salariale (PEE, PERCO) pour les entreprises de moins de 50 salariés. CSG/CRDS à la charge du bénéficiaire : 9.7%.</p>
                        <p>** Le graphique ci-dessus présente le cas d'un salarié avec des charges salariales de 23% (y compris CSG-CRDS) et des charges patronales de 45% et d'un TNS (travailleur non salarié) avec 30% de charges, et une Tranche Marginale d'Imposition (TMI) à 30%.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Sections vides pour la participation et l'intéressement */}
          <section id="participation"></section>
          <section id="interessement"></section>
        </div>
      </div>
    </div>
  );
};

export default EpargneSalariale;