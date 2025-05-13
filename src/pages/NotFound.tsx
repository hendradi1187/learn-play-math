
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-mathapp-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <span className="text-9xl font-bold text-mathapp-blue">4</span>
          <span className="text-9xl font-bold text-mathapp-orange">0</span>
          <span className="text-9xl font-bold text-mathapp-blue">4</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Halaman Tidak Ditemukan</h1>
        <p className="text-xl text-gray-600 mb-8">
          Maaf, halaman yang kamu cari tidak dapat ditemukan. Mari kembali ke halaman utama.
        </p>
        <Link to="/">
          <Button className="bg-mathapp-blue hover:bg-mathapp-blue/90 text-white text-lg px-8 py-6">
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
