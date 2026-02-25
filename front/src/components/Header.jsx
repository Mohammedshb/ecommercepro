
import { useState, useEffect } from "react";
import { Rocket, Menu, X, Store } from "lucide-react";
import MenuItems from "./MenuItems.jsx";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden h-12 md:flex items-center px-10 w-full fixed top-0 left-0 bg-linear-to-r from-indigo-900 via-purple-800 to-pink-700 text-white backdrop-blur-md shadow-xl z-50">
        <div className="hidden lg:flex items-center gap-4">
          <Store className="text-pink-300 w-8 h-8" />
          <h1 className="text-xl font-bold text-white tracking-widest">
            E-COMMERCE
          </h1>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <MenuItems isMobile={false} />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden h-12 flex justify-between items-center px-4 w-full fixed top-0 left-0 bg-linear-to-r from-indigo-900 via-purple-800 to-pink-700 shadow-md z-50">
        <div className="flex items-center gap-2">
          <Rocket className="text-pink-300 w-7 h-7" />
          <h1 className="text-lg font-bold text-white tracking-widest">
            E-COMMERCE
          </h1>
        </div>
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-white p-2 rounded-lg hover:bg-white/10 transition-transform hover:scale-105 duration-300"
        >
          <Menu className="w-8 h-8 cursor-pointer" />
        </button>
      </header>

      {/* Sidebar Mobile */}
      <aside
        className={`fixed top-12 right-0 h-full w-72 bg-linear-to-b from-indigo-900 via-purple-800 to-pink-700 backdrop-blur-md shadow-2xl transform transition-transform duration-500 z-40 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white p-3 hover:bg-white/10 rounded-lg transition-transform shadow-lg hover:scale-105 duration-300"
          >
            <X className="w-7 h-7" />
          </button>
        </div>
        <div className="mt-10 px-6 space-y-6">
          <MenuItems isMobile={true} setSidebarOpen={setSidebarOpen} />
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="sm:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
        ></div>
      )}
    </>
  );
}

export default Header;