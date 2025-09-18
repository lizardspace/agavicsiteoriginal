import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Actualite = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const posts = [
    {
      id: 1,
      title: "Achat immobilier : pouvez-vous changer d'assurance emprunteur ?",
      date: "13 nov. 2023",
      readingTime: "3 min de lecture",
      imageUrl: "/assets/images/blog/image-emprunteur.jpg",
      link: "/blog/achat-immobilier-changer-assurance-emprunteur",
      excerpt: "Découvrez vos droits et les démarches pour changer d'assurance emprunteur lors de votre achat immobilier.",
      category: "Immobilier"
    },
    {
      id: 2,
      title: "Tout savoir sur les complémentaires santé",
      date: "31 oct. 2023",
      readingTime: "5 min de lecture",
      imageUrl: "/assets/images/blog/image-complementaire-sante.jpg",
      link: "/blog/complementaire-sante",
      excerpt: "Guide complet sur les complémentaires santé : comment choisir, comparer et optimiser vos remboursements.",
      category: "Santé"
    },
    {
      id: 3,
      title: "Les avantages du PER",
      date: "16 juil. 2021",
      readingTime: "2 min de lecture",
      imageUrl: "/assets/images/blog/image-per.jpg",
      link: "/blog/les-avantages-du-per",
      excerpt: "Découvrez tous les avantages fiscaux et pratiques du Plan d'Épargne Retraite pour préparer votre avenir.",
      category: "Retraite"
    },
    {
      id: 4,
      title: "Épargne salariale : optimisez vos dispositifs d'entreprise",
      date: "5 sept. 2023",
      readingTime: "4 min de lecture",
      imageUrl: "/assets/images/blog/image-epargne-salariale.jpg",
      link: "/blog/epargne-salariale-optimisation",
      excerpt: "Comment mettre en place et optimiser les dispositifs d'épargne salariale dans votre entreprise.",
      category: "Épargne salariale"
    },
    {
      id: 5,
      title: "Gestion de patrimoine : les erreurs à éviter",
      date: "22 août 2023",
      readingTime: "6 min de lecture",
      imageUrl: "/assets/images/blog/image-patrimoine.jpg",
      link: "/blog/gestion-patrimoine-erreurs",
      excerpt: "Les principales erreurs en gestion de patrimoine et comment les éviter pour optimiser vos investissements.",
      category: "Patrimoine"
    },
    {
      id: 6,
      title: "Prévoyance professionnelle : protégez votre activité",
      date: "10 juin 2023",
      readingTime: "4 min de lecture",
      imageUrl: "/assets/images/blog/image-prevoyance.jpg",
      link: "/blog/prevoyance-professionnelle",
      excerpt: "L'importance de la prévoyance pour les professionnels et les solutions adaptées à chaque situation.",
      category: "Prévoyance"
    }
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Les Petites nouvelles
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Par AGAVIC
            </p>

            {/* Recherche */}
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-lg font-semibold">AGAVIC</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readingTime}</span>
                  </div>

                  <p className="text-xs text-gray-500 mb-2">
                    {post.date}
                  </p>

                  <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50 w-full"
                  >
                    Lire la suite
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            >
              ← Précédent
            </Button>
            <span className="text-gray-600">
              Page {currentPage}
            </span>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Suivant →
            </Button>
          </div>

          {/* Newsletter */}
          <section className="mt-20">
            <Card className="bg-blue-900 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Newsletter AGAVIC</h2>
                <p className="mb-6 max-w-2xl mx-auto">
                  Restez informé de nos dernières actualités et conseils en gestion de patrimoine.
                  Inscrivez-vous à notre newsletter "Les Petites nouvelles".
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-6 py-2">
                    S'abonner
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Actualite;