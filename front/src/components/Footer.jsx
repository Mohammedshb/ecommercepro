
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`شكرا لتواصلك معنا, ${formData.name}!`);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="relative w-full min-h-screen bg-linear-to-br from-indigo-900 via-purple-800 to-pink-700 text-white py-24 px-6 sm:px-10">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center">
          تواصل معنا
        </h2>

        <p className="text-gray-300 mb-12 text-center text-lg sm:text-xl">
          نحن هنا لمساعدتك في أي وقت، أرسل لنا رسالة وسنعود إليك قريبًا
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* معلومات التواصل */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-indigo-400/30 transition-all">
              <Phone className="w-8 h-8 text-indigo-300" />
              <div>
                <h4 className="font-semibold text-lg">الهاتف</h4>
                <p className="text-gray-300">123 456 7890</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-indigo-400/30 transition-all">
              <Mail className="w-8 h-8 text-indigo-300" />
              <div>
                <h4 className="font-semibold text-lg">البريد الالكتروني</h4>
                <p className="text-gray-300">support@gmail.com</p>
              </div>
            </div>
          </div>

          {/* الفورم */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="الاسم"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white/90 p-4 rounded-xl text-gray-800 placeholder-gray-500 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="email"
              name="email"
              placeholder="البريد الالكتروني"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white/90 p-4 rounded-xl text-gray-800 placeholder-gray-500 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <textarea
              name="message"
              placeholder="اكتب رسالتك..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-white/90 p-4 rounded-xl text-gray-800 placeholder-gray-500 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />

            <button
              type="submit"
              className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 px-6 py-3 rounded-2xl text-white transition-all duration-300 hover:scale-105 shadow-xl"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>

        <footer className="mt-24 text-center text-gray-300">
          <p className="mb-4">
            &copy; 2026 E-commerce. جميع الحقوق محفوظة
          </p>

          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-indigo-300 transition-colors">Facebook</a>
            <a href="#" className="hover:text-indigo-300 transition-colors">Twitter</a>
            <a href="#" className="hover:text-indigo-300 transition-colors">Instagram</a>
            <a href="#" className="hover:text-indigo-300 transition-colors">YouTube</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;