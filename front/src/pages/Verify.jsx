
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { clearCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    // محاكاة عملية التحقق
    const timer = setTimeout(() => {
      if (success === "true") {
        setStatus("success");
        clearCart();
        // توجيه المستخدم بعد 3 ثواني
        setTimeout(() => navigate("/"), 3000);
      } else {
        setStatus("error");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [success, clearCart, navigate]);

  return (
    <section className='min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-900 via-purple-800 to-pink-700 text-white px-6 py-20'>
      <div className='text-center flex flex-col items-center'>
        {status === "loading" && (
          <div className='flex flex-col items-center'>
            <Loader2 className='w-16 h-16 text-indigo-300 mb-6 animate-spin' />
            <h2 className='text-2xl font-semibold'>جاري التحقق من عملية الدفع</h2>
            <p className='text-gray-300 mt-2'>يرجى الانتظار ⏳</p>
          </div>
        )}

        {status === "success" && (
          <div className='flex flex-col items-center'>
            <CheckCircle className='w-16 h-16 text-green-400 mb-6' />
            <h2 className='text-2xl font-semibold'>تم التحقق من عملية الدفع بنجاح</h2>
            <p className='text-gray-300 mt-2'>شكراً لطلبك، سيتم تحويلك إلى الصفحة الرئيسية...</p>
          </div>
        )}

        {status === "error" && (
          <div className='flex flex-col items-center'>
            <XCircle className='w-16 h-16 text-red-400 mb-6' />
            <h2 className='text-2xl font-semibold'>حدث خطأ أثناء التحقق من عملية الدفع</h2>
            <p className='text-gray-300 mt-2'>يرجى المحاولة لاحقاً</p>
            <button
              onClick={() => navigate("/")}
              className='mt-6 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg'
            >
              العودة للصفحة الرئيسية
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Verify;