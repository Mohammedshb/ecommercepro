
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { categories, all_products } from "../assets/data";
import { ShopContext } from "../context/ShopContext";
import { ShoppingBag } from "lucide-react";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const filteredProducts =
    selectedCategory === "All"
      ? all_products
      : all_products.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative w-full min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 py-24 px-6 sm:px-10">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-indigo-900">
          تسوق حسب الفئة
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-6 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg ${
              selectedCategory === "All"
                ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:shadow-xl transform hover:scale-105"
                : "bg-indigo-100 hover:bg-indigo-200 text-indigo-900"
            }`}
          >
            الكل
          </button>

          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-6 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg ${
                selectedCategory === cat.name
                  ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:shadow-xl transform hover:scale-105"
                  : "bg-indigo-100 hover:bg-indigo-200 text-indigo-900"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div
                onClick={() => navigate(`/product/${product._id}`)}
                className="relative w-full h-64 flex items-center justify-center bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100 cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-56 h-56 hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold mb-2 truncate text-indigo-900">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-indigo-600">
                    ${product.price.toFixed(2)}
                  </span>

                  <button
                    onClick={() => addToCart(product._id)}
                    className="flex items-center gap-2 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-white shadow-lg hover:shadow-xl"
                  >
                    <ShoppingBag className="w-5 h-5" />
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

export default Categories;