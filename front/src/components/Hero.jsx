
import { ShoppingCartIcon } from "lucide-react";
import heroImage from "../assets/bg.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-linear-to-br from-indigo-900 via-purple-800 to-pink-700 text-white flex items-center">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 flex flex-col-reverse md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            مع افضل التخفيضات <br />إكتشف افضل المنتجات
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200 max-w-xl">
            تسوق الأن واستمتع بعروض لا تفوت الفرصه على الإلكترونيات, الازياء و المنتجات المميزة احصل على خصومات تصل حتى 50% لفتره محدودة
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
            <button onClick={() => window.location.href = "/shop"} className="flex items-center gap-3 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <ShoppingCartIcon className="w-6 h-6" />
              تسوق الأن
            </button>
            <button onClick={() => window.location.href = "/categories"} className="flex items-center gap-3 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              تصفح الفئات
            </button>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-lg">
          <img src={heroImage} alt="" className="w-full h-full object-cover rounded-3xl shadow-2xl" />
          <div className="absolute top-6 left-6 bg-linear-to-r from-red-500 to-orange-500 text-white px-5 py-3 rounded-full font-bold shadow-lg animate-pulse text-lg">
            خصم حتى 50%
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-32">
          <path
            d="M0,0V46.29c47.19,22,103.23,29,158.5,17.33C251,48.21,317.2,8.22,384,1.13c60.86-6.46,118.91,12.08,176,31.49,59.45,20.15,118.85,39.69,179,25.36,62.47-14.92,123-50.71,185-65.92C997,16,1061,23,1120,38.09c61.63,15.83,119.72,37.38,180,51.4V0Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;