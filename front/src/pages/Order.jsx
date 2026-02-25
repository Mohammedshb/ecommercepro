
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { cartItems, all_products, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const total = getTotalCartAmount();

  const cartProducts = Object.keys(cartItems)
    .map((id) => {
      const product = all_products.find((p) => p._id === id);
      return product ? { ...product, quantity: cartItems[id] } : null;
    })
    .filter(Boolean);

  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleConfirmOrder = () => {
    if (!shipping.name || !shipping.address || !shipping.city || !shipping.phone) {
      alert("يرجى ملء جميع بيانات الشحن");
      return;
    }
    alert("تم تأكيد الطلب بنجاح!");
    navigate("/");
  };

  return (
    <section className="relative w-full min-h-screen bg-linear-to-br from-indigo-900 via-purple-800 to-pink-700 text-white py-24 px-6 sm:px-10">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center">
          إتمام الطلب الخاص بك
        </h2>
        
        {cartProducts.length === 0 ? (
          <div className="text-center text-gray-300 mt-20 space-y-6">
            <p className="text-xl">لا توجد منتجات في السلة</p>
            <button 
              onClick={() => navigate("/")} 
              className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 px-8 py-3 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              العودة للتسوق
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {cartProducts.map((item) => (
                <div key={item._id} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl shadow-lg border border-white/20">
                  <img src={item.image} className="w-20 h-20 object-contain rounded-lg" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-300 text-sm mt-1">الكمية: {item.quantity}</p>
                    <p className="text-indigo-300 font-bold">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
              <div className="text-xl font-bold mt-6">
                <span className="text-indigo-300 ml-2">المجموع الكلي:</span>
                ${total.toFixed(2)}
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center">بيانات الشحن</h3>
              <div className="space-y-6">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="الاسم الكامل" 
                  value={shipping.name} 
                  onChange={handleInputChange}
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <input 
                  type="text" 
                  name="address" 
                  placeholder="العنوان" 
                  value={shipping.address} 
                  onChange={handleInputChange}
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <input 
                  type="text" 
                  name="city" 
                  placeholder="المدينة" 
                  value={shipping.city} 
                  onChange={handleInputChange}
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <input 
                  type="text" 
                  name="phone" 
                  placeholder="رقم الهاتف" 
                  value={shipping.phone} 
                  onChange={handleInputChange}
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <button 
                  onClick={handleConfirmOrder} 
                  className="w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg mt-4"
                >
                  تأكيد الطلب
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Order;