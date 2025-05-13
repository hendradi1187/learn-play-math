
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MathQuiz from '@/components/MathQuiz';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';

const QuizPage = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);
  const { toast } = useToast();

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    toast({
      title: `Topik ${topic} dipilih`,
      description: `Anda telah memilih topik ${topic}`,
    });
  };
  
  const handleDifficultySelect = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    toast({
      title: `Tingkat ${difficulty} dipilih`,
      description: `Anda telah memilih tingkat kesulitan ${difficulty}`,
    });
  };
  
  const handleStartQuiz = () => {
    if (!selectedTopic) {
      toast({
        title: "Pilih topik terlebih dahulu",
        description: "Anda harus memilih topik sebelum memulai latihan",
        variant: "destructive",
      });
      return;
    }
    
    if (!selectedDifficulty) {
      toast({
        title: "Pilih tingkat kesulitan terlebih dahulu",
        description: "Anda harus memilih tingkat kesulitan sebelum memulai latihan",
        variant: "destructive",
      });
      return;
    }
    
    setShowQuiz(true);
    toast({
      title: "Latihan dimulai!",
      description: `Topik: ${selectedTopic}, Tingkat: ${selectedDifficulty}`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-mathapp-blue to-mathapp-purple py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Latihan Soal Matematika</h1>
          <p className="text-white/90 mt-2">
            Pilih kategori soal dan tingkat kesulitan sesuai kebutuhanmu
          </p>
        </div>
      </div>
      
      {/* Quiz Content */}
      <div className="container mx-auto py-8 px-4">
        {showQuiz ? (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-mathapp-blue">
                Topik: {selectedTopic} - {selectedDifficulty}
              </h2>
              <button 
                onClick={() => setShowQuiz(false)}
                className="px-4 py-2 bg-mathapp-blue/20 text-mathapp-blue rounded-md hover:bg-mathapp-blue/30 transition-colors"
              >
                Kembali
              </button>
            </div>
            <MathQuiz />
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <Tabs defaultValue="kelas3" className="w-full">
                <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  <TabsTrigger value="kelas1">Kelas 1</TabsTrigger>
                  <TabsTrigger value="kelas2">Kelas 2</TabsTrigger>
                  <TabsTrigger value="kelas3">Kelas 3</TabsTrigger>
                  <TabsTrigger value="kelas4">Kelas 4</TabsTrigger>
                  <TabsTrigger value="kelas5">Kelas 5</TabsTrigger>
                  <TabsTrigger value="kelas6">Kelas 6</TabsTrigger>
                </TabsList>
                <div className="mt-6">
                  <TabsContent value="kelas1">
                    <p className="text-gray-600 mb-6">Latihan soal matematika untuk siswa kelas 1 SD</p>
                    <div className="bg-mathapp-background p-4 rounded-lg">
                      <p className="text-center text-gray-500">Konten latihan soal kelas 1 akan segera hadir!</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="kelas2">
                    <p className="text-gray-600 mb-6">Latihan soal matematika untuk siswa kelas 2 SD</p>
                    <div className="bg-mathapp-background p-4 rounded-lg">
                      <p className="text-center text-gray-500">Konten latihan soal kelas 2 akan segera hadir!</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="kelas3">
                    <p className="text-gray-600 mb-6">Latihan soal matematika untuk siswa kelas 3 SD</p>
                    <MathQuiz />
                  </TabsContent>
                  <TabsContent value="kelas4">
                    <p className="text-gray-600 mb-6">Latihan soal matematika untuk siswa kelas 4 SD</p>
                    <div className="bg-mathapp-background p-4 rounded-lg">
                      <p className="text-center text-gray-500">Konten latihan soal kelas 4 akan segera hadir!</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="kelas5">
                    <p className="text-gray-600 mb-6">Latihan soal matematika untuk siswa kelas 5 SD</p>
                    <div className="bg-mathapp-background p-4 rounded-lg">
                      <p className="text-center text-gray-500">Konten latihan soal kelas 5 akan segera hadir!</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="kelas6">
                    <p className="text-gray-600 mb-6">Latihan soal matematika untuk siswa kelas 6 SD</p>
                    <div className="bg-mathapp-background p-4 rounded-lg">
                      <p className="text-center text-gray-500">Konten latihan soal kelas 6 akan segera hadir!</p>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-mathapp-blue mb-4">Topik Matematika</h3>
                <ul className="space-y-2">
                  <li 
                    className={`p-2 rounded-md hover:bg-mathapp-blue/20 cursor-pointer transition-colors ${selectedTopic === 'Penjumlahan dan Pengurangan' ? 'bg-mathapp-blue/20 font-medium' : 'bg-mathapp-blue/10'}`}
                    onClick={() => handleTopicSelect('Penjumlahan dan Pengurangan')}
                  >
                    Penjumlahan dan Pengurangan
                  </li>
                  <li 
                    className={`p-2 rounded-md hover:bg-mathapp-blue/20 cursor-pointer transition-colors ${selectedTopic === 'Perkalian dan Pembagian' ? 'bg-mathapp-blue/20 font-medium' : 'bg-mathapp-blue/10'}`}
                    onClick={() => handleTopicSelect('Perkalian dan Pembagian')}
                  >
                    Perkalian dan Pembagian
                  </li>
                  <li 
                    className={`p-2 rounded-md hover:bg-mathapp-blue/20 cursor-pointer transition-colors ${selectedTopic === 'Pecahan' ? 'bg-mathapp-blue/20 font-medium' : 'bg-mathapp-blue/10'}`}
                    onClick={() => handleTopicSelect('Pecahan')}
                  >
                    Pecahan
                  </li>
                  <li 
                    className={`p-2 rounded-md hover:bg-mathapp-blue/20 cursor-pointer transition-colors ${selectedTopic === 'Geometri' ? 'bg-mathapp-blue/20 font-medium' : 'bg-mathapp-blue/10'}`}
                    onClick={() => handleTopicSelect('Geometri')}
                  >
                    Geometri
                  </li>
                  <li 
                    className={`p-2 rounded-md hover:bg-mathapp-blue/20 cursor-pointer transition-colors ${selectedTopic === 'Pengukuran' ? 'bg-mathapp-blue/20 font-medium' : 'bg-mathapp-blue/10'}`}
                    onClick={() => handleTopicSelect('Pengukuran')}
                  >
                    Pengukuran
                  </li>
                </ul>
              </div>
              
              {/* The difficulty level section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-mathapp-green mb-4">Tingkat Kesulitan</h3>
                <ul className="space-y-2">
                  <li 
                    className={`p-2 rounded-md hover:bg-mathapp-green/20 cursor-pointer flex items-center transition-colors ${selectedDifficulty === 'Mudah' ? 'bg-mathapp-green/20 font-medium' : 'bg-mathapp-green/10'}`}
                    onClick={() => handleDifficultySelect('Mudah')}
                  >
                    <span className="h-3 w-3 rounded-full bg-green-400 mr-2"></span>
                    Mudah
                  </li>
                  <li 
                    className={`p-2 rounded-md hover:bg-mathapp-green/20 cursor-pointer flex items-center transition-colors ${selectedDifficulty === 'Sedang' ? 'bg-mathapp-green/20 font-medium' : 'bg-mathapp-green/10'}`}
                    onClick={() => handleDifficultySelect('Sedang')}
                  >
                    <span className="h-3 w-3 rounded-full bg-yellow-400 mr-2"></span>
                    Sedang
                  </li>
                  <li 
                    className={`p-2 rounded-md hover:bg-mathapp-green/20 cursor-pointer flex items-center transition-colors ${selectedDifficulty === 'Sulit' ? 'bg-mathapp-green/20 font-medium' : 'bg-mathapp-green/10'}`}
                    onClick={() => handleDifficultySelect('Sulit')}
                  >
                    <span className="h-3 w-3 rounded-full bg-red-400 mr-2"></span>
                    Sulit
                  </li>
                </ul>
              </div>
              
              {/* The achievements section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-mathapp-purple mb-4">Pencapaianmu</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Total Soal Diselesaikan</span>
                      <span className="font-bold">15/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-mathapp-purple h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Akurasi Jawaban</span>
                      <span className="font-bold">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-mathapp-green h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="font-bold">Poin: 120</p>
                    <p className="text-sm text-gray-600">Peringkat: 24 dari 100</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Display selected topic information */}
            {selectedTopic && (
              <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-mathapp-blue mb-4">Topik: {selectedTopic}</h3>
                <p className="text-gray-600">
                  Latihan soal untuk topik {selectedTopic}. Pilih tingkat kesulitan 
                  untuk mulai mengerjakan soal.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    className={`py-2 px-4 rounded transition-colors ${
                      selectedDifficulty ? 
                      'bg-mathapp-blue text-white hover:bg-mathapp-blue/90' : 
                      'bg-mathapp-blue/50 text-white cursor-not-allowed'
                    }`}
                    onClick={handleStartQuiz}
                    disabled={!selectedDifficulty}
                  >
                    Mulai Latihan
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 MathaFun. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
};

export default QuizPage;
