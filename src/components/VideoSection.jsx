import React, { useState } from 'react';
import { Play, Search, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import video1 from '../assets/images/7f9e82_8f0ebb64717e4002872d649c02540facf002.jpg';
import video2 from '../assets/images/7f9e82_ab0a0f7e045b4544902e9e18c82ff48af002.jpg';
import video3 from '../assets/images/7f9e82_6dcf70c48fde45b2a71a33fa160a7618f001.jpg';
import video4 from '../assets/images/7f9e82_b16390d0d8f844a4a5676b199bdc0197f001.jpg';
import video5 from '../assets/images/7f9e82_54ca7ef63486434b82c434b4b6bcc53cf001.jpg';
import video6 from '../assets/images/7f9e82_895a6b8f9d5946158df404ce5a7ebcfbf002.jpg';

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);
  
  const videos = [
    {
      id: 0,
      title: "Préparer sa retraite",
      duration: "01:04",
      thumbnail: video1,
      description: "Comment bien préparer sa retraite avec AGAVIC"
    },
    {
      id: 1,
      title: "Succession ? Donation ?",
      duration: "02:01",
      thumbnail: video2,
      description: "Les solutions de transmission de patrimoine"
    },
    {
      id: 2,
      title: "L'étude Patrimoniale ?",
      duration: "02:13",
      thumbnail: video3,
      description: "Comprendre l'étude patrimoniale"
    },
    {
      id: 3,
      title: "Comment réduire sa fiscalité ?",
      duration: "01:45",
      thumbnail: video4,
      description: "Optimisation fiscale avec AGAVIC"
    },
    {
      id: 4,
      title: "Comment se déroule une étude patrimoniale ?",
      duration: "02:30",
      thumbnail: video5,
      description: "Le processus d'étude patrimoniale"
    },
    {
      id: 5,
      title: "Mais à qui s'adresse la Gestion de Patrimoine",
      duration: "01:55",
      thumbnail: video6,
      description: "La gestion de patrimoine pour tous"
    }
  ];

  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Découvrez en quelques minutes AGAVIC
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Assurances
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Video Player */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl mb-8">
            <div className="relative aspect-video bg-gray-900">
              <img 
                src={videos[selectedVideo].thumbnail} 
                alt={videos[selectedVideo].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-300 transform hover:scale-110">
                  <Play size={48} className="text-blue-900 ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded">
                {videos[selectedVideo].duration}
              </div>
            </div>
            
            {/* Video Controls */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                {videos[selectedVideo].title}
              </h3>
              <p className="text-gray-600">
                {videos[selectedVideo].description}
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Rechercher une vidéo..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
                Toutes les catégories
              </Button>
            </div>
          </div>

          {/* Video Thumbnails Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div 
                key={video.id}
                onClick={() => setSelectedVideo(index)}
                className={`bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${
                  selectedVideo === index ? 'ring-4 ring-yellow-400' : ''
                }`}
              >
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play size={32} className="text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-blue-900 mb-2">
                    {video.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <div className="text-center mt-8">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2">
              Suivant
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

