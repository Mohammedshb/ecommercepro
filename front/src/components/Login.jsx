
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-900 via-purple-800 to-pink-700 px-6">
      {/* طبقة التمويه */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8">
          تسجيل الدخول
        </h2>

        <form className="flex flex-col gap-5">
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={state.email}
            onChange={(e) => setState(prev => ({ ...prev, email: e.target.value }))}
            required
            className="bg-white/90 p-4 rounded-xl text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            value={state.password}
            onChange={(e) => setState(prev => ({ ...prev, password: e.target.value }))}
            required
            className="bg-white/90 p-4 rounded-xl text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

          <button
            type="submit"
            className="mt-2 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 py-3 rounded-xl font-semibold text-white transition duration-300 hover:scale-[1.02] shadow-lg"
          >
            تسجيل الدخول
          </button>
        </form>

        <p className="text-center text-sm text-gray-200 mt-6">
          ليس لديك حساب؟{" "}
          <span onClick={() => navigate("/signup")} className="text-indigo-300 cursor-pointer hover:underline">
            إنشاء حساب جديد
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;