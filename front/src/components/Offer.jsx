
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { all_products } from "../assets/data";
import { ShoppingBag } from "lucide-react";

const Offer = () => {
  const { addToCart } = useContext(ShopContext);

  const [timeLeft, setTimeLeft] = useState({});
  const [products, setProducts] = useState(all_products.slice(0, 12));

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-linear-to-br from-indigo-900 via-purple-800 to-pink-700 text-white py-24 px-6 sm:px-10">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          متجرنا العصري
        </h2>
        <p className="text-gray-300 mb-12 text-lg sm:text-xl">
          !أكتشف أحدث المنتجات واغتنم التخفيضات قبل انتهاء وقت العرض
        </p>

        <div className="flex justify-center items-center gap-6 mb-16 text-center">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 w-24 sm:w-28 shadow-lg"
            >
              <span className="block text-3xl sm:text-4xl font-bold text-pink-300">
                {timeLeft[unit] ?? 0}
              </span>
              <span className="block mt-2 text-gray-200 capitalize">{unit}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500"
            >
              <div className="relative w-full h-64 flex items-center bg-linear-to-b from-indigo-800/40 to-transparent">
                <img
                  src={product.image}
                  className="object-contain w-56 h-56 hover:scale-110 duration-500 transition-transform"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold mb-2 truncate">{product.name}</h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-pink-300">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(product._id)}
                    className="flex items-center gap-2 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-white shadow-lg hover:shadow-xl"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;