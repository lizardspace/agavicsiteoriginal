import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import nosservice1 from '../assets/images/nosservice1.avif';
import nosservice2 from '../assets/images/nosservice2.avif';

const GestionPatrimoine = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    message: ''
  });
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    { id: 1, url: "https://www.youtube.com/embed/xxxx1", title: "Vidéo 1" },
    { id: 2, url: "https://www.youtube.com/embed/xxxx2", title: "Vidéo 2" },
    { id: 3, url: "https://www.youtube.com/embed/xxxx3", title: "Vidéo 3" },
  ];

  const services = [
    {
      title: "Étude patrimoniale",
      description: "Nous débutons par une étude approfondie de votre situation financière et patrimoniale, identifiant vos objectifs, évaluant les risques et performances possibles.",
      image: nosservice1
    },
    {
      title: "Propositions de solutions",
      description: "Sur la base des résultats de l'étude, nous élaborons des solutions sur mesure, incluant une stratégie, des recommandations et choix.",
      image: nosservice2
    },
    {
      title: "Mise en œuvre et accompagnement",
      description: "Une fois les solutions approuvées ensemble, nous assurons leur mise en œuvre et vous accompagnons tout au long du processus, fournissant un suivi régulier, des conseils personnalisés et un soutien continu pour ajuster votre stratégie en fonction de vos besoins.",
      image: nosservice1 // Utilise temporairement nosservice1 en attendant nosservice3
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: traiter l'envoi du formulaire
    console.log("Envoi du message :", formData);
    // réinitialiser ou afficher un message de succès
  };

  const prevVideo = () =>
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const nextVideo = () =>
    setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Gestion de Patrimoine
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Avec plus de 20 ans d'expérience, AGAVIC Assurances s'engage à vous proposer des solutions personnalisées et innovantes pour protéger et faire grandir votre patrimoine.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* À propos / Notre métier */}
          <section>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">À propos</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Bienvenue sur la page de Gestion de Patrimoine de AGAVIC Assurances, votre partenaire de confiance.
                Avec plus de 20 ans d'expérience en gestion de patrimoine, nous nous engageons à vous fournir des
                solutions personnalisées et innovantes pour protéger et fructifier votre patrimoine.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Notre métier</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Le métier de conseil en gestion de patrimoine est d'assister, conseiller et guider ceux, particuliers comme entreprises, qui désirent
                un éclairage sur l'organisation de leur patrimoine ou qui souhaitent investir.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nous intervenons, dans un premier temps, par une étude patrimoniale globale. Nous étudions pour cela les différents documents
                fournis par notre client : état civil, contrat mariage, donation, les biens détenus, les placements, les prêts en cours,
                ses revenus et ses charges.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nous passons du temps avec notre client pour comprendre ses attentes et les raisons pour lesquelles il sollicite le cabinet AGAVIC
                (préparer sa retraite, financer l'étude de ses enfants, protéger son conjoint, réduire sa fiscalité, transmettre, …).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Après analyse, nous conseillons en toute indépendance pour proposer les chemins pour atteindre les objectifs souhaités.
                À l'issue, nous pouvons, si le client le souhaite, l'accompagner dans la durée pour mettre en œuvre les stratégies adaptées.
              </p>
            </div>
          </section>

          {/* Carrousel de vidéos */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Nos vidéos</h2>
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={videos[currentVideo].id}
                    src={videos[currentVideo].url}
                    title={videos[currentVideo].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-[400px]"
                  />
                </AnimatePresence>
              </div>

              {/* Boutons navigation */}
              <button
                onClick={prevVideo}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextVideo}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicateurs */}
              <div className="flex justify-center mt-4 gap-2">
                {videos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentVideo(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === currentVideo ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to action */}
          <section className="text-center bg-blue-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Travaillons ensemble</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              Contactez-nous pour en savoir plus sur nos services de gestion de patrimoine et pour commencer à élaborer une stratégie personnalisée
              dès aujourd'hui. AGAVIC Assurances, votre partenaire de confiance pour assurer la sécurité et la prospérité de votre patrimoine.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={() => navigate('/contact')}
            >
              Nous contacter
            </Button>
          </section>

          {/* Formulaire de contact */}
          <section className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900 text-center">Contactez-nous</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      placeholder="Votre prénom"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom de famille
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Votre e-mail"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Votre message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
                  >
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GestionPatrimoine;