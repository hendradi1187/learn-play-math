
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-3 px-4 md:px-8 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-mathapp-blue text-white p-2 rounded-full">
            <span className="text-xl font-bold">M</span>
          </div>
          <h1 className="text-2xl font-bold text-mathapp-blue">
            Matha<span className="text-mathapp-orange">Fun</span>
          </h1>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="font-medium hover:text-mathapp-blue transition-colors">
            Beranda
          </Link>
          <Link to="/quiz" className="font-medium hover:text-mathapp-blue transition-colors">
            Latihan Soal
          </Link>
          <Link to="/games" className="font-medium hover:text-mathapp-blue transition-colors">
            Permainan
          </Link>
          <Link to="/videos" className="font-medium hover:text-mathapp-blue transition-colors">
            Video
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border-mathapp-blue text-mathapp-blue hover:bg-mathapp-blue hover:text-white">
            Masuk
          </Button>
          <Button className="bg-mathapp-green hover:bg-mathapp-green/90 text-white">
            Daftar
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
