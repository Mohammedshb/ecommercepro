
import { ShieldCheck, RefreshCcw, Headphones, Truck } from "lucide-react";

const featuresData = [
  {
    Icon: Truck,
    title: "شحن مجاني",
    desc: "خصم على الطلبات فوق 100$ في الضفة الغربية",
    color: "from-indigo-500 to-purple-500",
  },
  {
    Icon: ShieldCheck,
    title: "ضمان المنتجات",
    desc: "استبدال أو استرجاع مجاني خلال 8 أيام",
    color: "from-purple-500 to-pink-500",
  },
  {
    Icon: RefreshCcw,
    title: "أرجاع سهل",
    desc: "إجراءات بسيطه وسريعه خلال دقائف",
    color: "from-pink-500 to-indigo-500",
  },
  {
    Icon: Headphones,
    title: "دعم 24/7",
    desc: "فريقنا جاهز نساعدك في اي وقت",
    color: "from-indigo-500 to-pink-500",
  },
];

const Features = () => {
  return (
    <section className="relative w-full bg-linear-to-br from-indigo-900 via-purple-800 to-pink-700 text-white py-20">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12">لماذا تختارنا؟</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 sm:px-10">
        {featuresData.map(({ Icon, title, desc, color }, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300"
          >
            <div className={`bg-linear-to-r ${color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-6`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-gray-200 text-base">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;