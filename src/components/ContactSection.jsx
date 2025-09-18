import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone } from 'lucide-react';
import mapImage from '../assets/images/1d0c07_52e80bab4b2149e8b59a31719b007fb9.jpg';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Map Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white text-center py-8 rounded-t-xl shadow-2xl backdrop-blur-sm border border-blue-700/20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Trouvez AGAVIC
              </h2>
            </div>
            
            <div className="relative h-96 bg-gray-300 rounded-b-xl overflow-hidden shadow-2xl border-x border-b border-blue-700/20">
              <img
                src={mapImage}
                alt="Localisation AGAVIC"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/30 backdrop-blur-[1px]"></div>
              
              {/* Map Marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-red-500 drop-shadow-sm" size={20} />
                    <div>
                      <p className="font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">AGAVIC Assurances</p>
                      <p className="text-sm text-gray-600">67 route de Paris, 69160 Tassin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-8">
                Contactez-nous
              </h2>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Pour toute demande d'information, n'hésitez pas à nous laisser vos coordonnés et vos requêtes, nous vous répondrons dans les plus brefs délais.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="nom"
                      placeholder="Nom *"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/95"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="prenom"
                      placeholder="Prénom *"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/95"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/95"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Téléphone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/95"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical backdrop-blur-sm bg-white/95"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-900/25"
                >
                  Envoyer
                </Button>
              </form>

              <p className="text-emerald-600 mt-4 font-medium bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200">
                Merci pour votre envoi !
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-8">
                AGAVIC ASSURANCES
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-900 mt-1" size={24} />
                  <div>
                    <p className="font-medium text-gray-800">Adresse</p>
                    <p className="text-gray-600">67 route de Paris, 69160 Tassin</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-900 mt-1" size={24} />
                  <div>
                    <p className="font-medium text-gray-800">E-Mail</p>
                    <a 
                      href="mailto:contact@agavic.fr" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      contact@agavic.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-900 mt-1" size={24} />
                  <div>
                    <p className="font-medium text-gray-800">NOUVEAU NUMERO</p>
                    <a
                      href="tel:0478347309"
                      className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:scale-105"
                    >
                      04 78 34 73 09
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

