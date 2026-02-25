
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { addToCart, all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((p) => p._id === productId);

  const [selectedColor, setSelectedColor] = useState("Red");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <section className="min-h-screen flex items-center justify-center text-white bg-linear-to-br from-indigo-900 via-purple-800 to-pink-700">
        <p className="text-2xl font-bold">المنتج غير موجود</p>
      </section>
    );
  }

  const handleAddToCart = () => {
    addToCart(product._id, quantity);
    alert(`تم إضافة ${quantity} ${product.name} إلى السلة.`);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-900 via-purple-800 to-pink-700 px-6 py-20">
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* صورة المنتج */}
        <div className="flex items-center justify-center p-10 bg-white/5">
          <img
            src={product.image}
            className="w-full max-w-md aspect-square object-contain"
          />
        </div>

        {/* تفاصيل المنتج */}
        <div className="p-10 flex flex-col gap-6 text-white">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-indigo-300 text-2xl font-semibold mt-2">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed">{product.description}</p>

          <p className="text-gray-400">
            Category: <span className="text-white">{product.category}</span>
          </p>

          {/* اختيار اللون */}
          <div>
            <h4 className="font-semibold mb-3">Color</h4>
            <div className="flex gap-3">
              {["Red", "Blue", "Green", "Black", "White"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-9 h-9 rounded-full border-2 transition
                  ${selectedColor === color ? "scale-110 border-indigo-400 ring-2 ring-indigo-400" : "border-white"}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>

          {/* اختيار المقاس */}
          <div>
            <h4 className="font-semibold mb-3">Size</h4>
            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-lg border transition
                  ${selectedSize === size
                      ? "bg-linear-to-r from-indigo-500 to-pink-500 border-transparent"
                      : "border-gray-400 hover:bg-white/10"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* الكمية */}
          <div className="flex items-center gap-4">
            <span className="font-semibold">Quantity</span>
            <div className="flex items-center gap-3 bg-white/10 rounded-xl px-3 py-1">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span className="font-bold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* زر الشراء */}
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;