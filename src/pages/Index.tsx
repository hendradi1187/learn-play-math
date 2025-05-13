
import React from 'react';
import Navbar from '@/components/Navbar';
import MathQuiz from '@/components/MathQuiz';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      title: "Latihan Soal Interaktif",
      description: "Latihan soal matematika dengan feedback langsung untuk membantu belajar lebih efektif",
      icon: "📝",
      color: "bg-mathapp-blue",
      link: "/quiz"
    },
    {
      title: "Permainan Matematika",
      description: "Game edukasi yang menyenangkan untuk meningkatkan pemahaman konsep matematika",
      icon: "🎮",
      color: "bg-mathapp-green",
      link: "/games"
    },
    {
      title: "Video Pembelajaran",
      description: "Materi matematika dalam bentuk video interaktif yang mudah dipahami",
      icon: "📹",
      color: "bg-mathapp-purple",
      link: "/videos"
    },
    {
      title: "Leaderboard & Reward",
      description: "Motivasi belajar dengan sistem poin dan peringkat untuk memantau kemajuan",
      icon: "🏆",
      color: "bg-mathapp-orange",
      link: "/leaderboard"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mathapp-blue to-mathapp-purple py-16 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Belajar Matematika Jadi Menyenangkan!
              </h1>
              <p className="text-lg mb-8">
                MathaFun membantu siswa SD belajar matematika dengan cara yang interaktif,
                menyenangkan, dan efektif melalui latihan soal, permainan, dan video pembelajaran.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-mathapp-green hover:bg-mathapp-green/90 text-white text-lg">
                  Mulai Belajar
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 border-white text-white text-lg">
                  Lihat Video
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm max-w-md">
                <img 
                  src="https://placehold.co/600x400/4C9AFF/FFFFFF?text=Math+Illustration" 
                  alt="Math Learning" 
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mathapp-blue mb-4">
              Fitur Unggulan MathaFun
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai fitur menarik untuk membantu anak-anak belajar matematika dengan cara yang menyenangkan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className={`${feature.color} text-white rounded-t-lg`}>
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to={feature.link} className="text-mathapp-blue font-medium hover:underline w-full">
                    Jelajahi &rarr;
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Sample Section */}
      <section className="py-16 bg-mathapp-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mathapp-blue mb-4">
              Coba Latihan Soal Matematika
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Latihan soal interaktif dengan feedback langsung untuk membantu belajar lebih efektif
            </p>
          </div>

          <MathQuiz />
          
          <div className="text-center mt-8">
            <Link to="/quiz">
              <Button size="lg" className="bg-mathapp-blue hover:bg-mathapp-blue/90 text-white">
                Lihat Semua Latihan Soal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="bg-white text-mathapp-blue p-1 rounded-full">
                  <span className="text-lg font-bold">M</span>
                </div>
                <h2 className="text-xl font-bold">
                  Matha<span className="text-mathapp-orange">Fun</span>
                </h2>
              </div>
              <p className="mt-2 text-gray-300">Belajar matematika jadi menyenangkan!</p>
            </div>
            
            <div className="flex space-x-8 mb-6 md:mb-0">
              <div>
                <h3 className="font-bold mb-2">Fitur</h3>
                <ul className="space-y-1 text-gray-300">
                  <li><Link to="/quiz" className="hover:text-white">Latihan Soal</Link></li>
                  <li><Link to="/games" className="hover:text-white">Permainan</Link></li>
                  <li><Link to="/videos" className="hover:text-white">Video</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Tentang</h3>
                <ul className="space-y-1 text-gray-300">
                  <li><Link to="/about" className="hover:text-white">Tim Kami</Link></li>
                  <li><Link to="/contact" className="hover:text-white">Kontak</Link></li>
                </ul>
              </div>
            </div>
            
            <div>
              <Button className="bg-mathapp-green hover:bg-mathapp-green/90 text-white">
                Daftar Sekarang
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 MathaFun. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
