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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Map Section */}
          <div className="mb-16">
            <div className="bg-blue-900 text-white text-center py-8 rounded-t-lg">
              <h2 className="text-4xl md:text-5xl font-bold">
                Trouvez AGAVIC
              </h2>
            </div>
            
            <div className="relative h-96 bg-gray-300 rounded-b-lg overflow-hidden">
              <img 
                src={mapImage} 
                alt="Localisation AGAVIC" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-20"></div>
              
              {/* Map Marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-red-500" size={20} />
                    <div>
                      <p className="font-bold text-blue-900">AGAVIC Assurances</p>
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
              <h2 className="text-4xl font-bold text-blue-900 mb-8">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Téléphone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                  />
                </div>

                <Button 
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Envoyer
                </Button>
              </form>

              <p className="text-green-600 mt-4 font-medium">
                Merci pour votre envoi !
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">
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
                      className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors"
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

