import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ExpertiseSection = () => {
  const navigate = useNavigate();

  const expertiseAreas = [
    {
      number: "01.",
      title: "Gestion de patrimoine",
      description: "Après analyse de votre situation, nous conseillons pour atteindre les objectifs souhaités. À l'issue, nous pouvons, accompagner dans la durée pour mettre en œuvre les stratégies adaptées",
      buttonColor: "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700",
      route: "/gestion-patrimoine",
      icon: "💼"
    },
    {
      number: "02.",
      title: "Epargne retraite",
      description: "Organisez votre patrimoine et vos revenus avec AGAVIC afin de conserver votre niveau de vie à la retraite",
      buttonColor: "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700",
      route: "/epargne-retraite",
      icon: "🏦"
    },
    {
      number: "03.",
      title: "Epargne salariale",
      description: "Chef d'entreprise ou TNS : AGAVIC vous accompagne dans la mise en place d'accords d'entreprise (Intéressement, Participation) et des dispositifs d'épargne PEE/PERECO",
      buttonColor: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700",
      route: "/epargne-salariale",
      icon: "👥"
    },
    {
      number: "04.",
      title: "Prévoyance et Complémentaire Santé",
      description: "AGAVIC vous trouve le meilleur rapport cotisations/remboursements, pour vous chef d'entreprise, pour votre personnel et les seniors.",
      buttonColor: "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
      route: "/prevoyance",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Les champs d'expertise de
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            AGAVIC
          </h2>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Number */}
              <div className="text-6xl font-light text-blue-900 mb-4 italic">
                {area.number}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-blue-900 mb-6 italic">
                {area.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-8">
                {area.description}
              </p>
              
              {/* Divider */}
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              
              {/* Button */}
              <Button
                className={`${area.buttonColor} text-white px-6 py-2 rounded-full font-medium transition-colors duration-300`}
                onClick={() => navigate(area.route)}
              >
                En savoir plus
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

