import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formState, setFormState] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ici tu peux ajouter validation et envoi vers backend
    console.log("Données du formulaire :", formState);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-md">
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold text-blue-900 mb-6">
                Contacter le cabinet
              </h1>
              <p className="text-gray-700 mb-6">
                Pour toute demande d'information, n'hésitez pas à nous laisser vos coordonnées et votre requête, nous vous répondrons dans les plus brefs délais.
              </p>

              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  <p>Merci pour votre envoi ! Nous vous contacterons bientôt.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom / Prénom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formState.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Votre adresse e-mail"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formState.telephone}
                      onChange={handleChange}
                      placeholder="Votre numéro de téléphone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Votre message"
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  >
                    Envoyer
                  </Button>
                </form>
              )}

              {/* Informations de contact */}
              <div className="mt-8 pt-8 border-t border-gray-200 space-y-2">
                <p className="text-gray-700">
                  <span className="font-bold">Téléphone :</span> 04.78.34.73.09
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">E-Mail :</span>{" "}
                  <a href="mailto:contact@agavic.fr" className="text-blue-600 hover:text-blue-800">
                    contact@agavic.fr
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Adresse :</span> 67 route de Paris, Tassin-La-Demi-Lune, 69160
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer simplifié */}
      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} AGAVIC Assurances — Tous droits réservés
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/mentions-legales" className="text-sm text-blue-600 hover:text-blue-800">
            Mentions légales
          </a>
          <a href="/politique-de-confidentialite" className="text-sm text-blue-600 hover:text-blue-800">
            Politique de confidentialité
          </a>
          <a href="/cookies" className="text-sm text-blue-600 hover:text-blue-800">
            Cookies
          </a>
          <a href="/conditions-generales" className="text-sm text-blue-600 hover:text-blue-800">
            CGU
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;