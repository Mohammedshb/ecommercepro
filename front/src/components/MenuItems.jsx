
import { useNavigate, useLocation } from "react-router-dom";
import { Home, FolderOpen, User, Mail, ShoppingBag, ShoppingCart } from "lucide-react";
import { useState, useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ShopContext } from "../context/ShopContext";

export const menuItemsData = [
  { to: "home", label: "Home", Icon: Home },
  { to: "products", label: "Products", Icon: FolderOpen },
  { to: "shop", label: "Shop", Icon: ShoppingBag },
  { to: "contact", label: "Contact", Icon: Mail },
];

const MenuItems = ({ isMobile = false, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { cartItems, token, setToken } = useContext(ShopContext);

  const totalItems = Object.values(cartItems).reduce((a, b) => a + b, 0);

  const closeSidebar = () => {
    setSidebarOpen && setSidebarOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/");
    closeSidebar();
  };

  return (
    <div
      className={`
        flex
        ${
          isMobile
            ? "flex-col items-start gap-6 px-4"
            : "flex-row items-center justify-end gap-6 w-full"
        }
      `}
    >
      {menuItemsData.map(({ to, label, Icon }) =>
        location.pathname === "/" ? (
          <ScrollLink
            key={to}
            to={to}
            smooth
            duration={500}
            offset={-80}
            spy
            activeClass="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg"
            onClick={closeSidebar}
            className={`
              w-full flex items-center gap-4 px-4 py-3 rounded-lg
              transition-all text-white/90 cursor-pointer
              hover:bg-white/10 hover:text-white hover:shadow-md
            `}
          >
            <Icon className="w-6 h-6" />
            <span className="font-semibold">{label}</span>
          </ScrollLink>
        ) : (
          <button
            key={to}
            onClick={() => {
              navigate("/");
              closeSidebar();
            }}
            className={`
              w-full flex items-center gap-4 px-4 py-3 rounded-lg
              transition-all text-white/90 cursor-pointer
              hover:bg-white/10 hover:text-white hover:shadow-md
            `}
          >
            <Icon className="w-6 h-6" />
            <span className="font-semibold">{label}</span>
          </button>
        )
      )}

      {/* Cart */}
      <button
        onClick={() => {
          navigate("/cart");
          closeSidebar();
        }}
        className="relative w-full flex items-center gap-4 px-4 py-3 rounded-lg
        transition-all text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md"
      >
        <ShoppingCart className="w-6 h-6" />
        <span className="font-semibold">Cart</span>

        {totalItems > 0 && (
          <span
            className="absolute top-2 right-4 w-5 h-5 text-xs font-bold text-white
            bg-linear-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center"
          >
            {totalItems}
          </span>
        )}
      </button>

      {/* Login / Logout */}
      {!token ? (
        <button
          onClick={() => {
            navigate("/login");
            closeSidebar();
          }}
          className="w-full flex justify-center px-4 py-3 rounded-lg
          bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold transition-all duration-300"
        >
          Login
        </button>
      ) : (
        <div className="w-full flex items-center gap-4 px-4">
          <User className="w-6 h-6 text-white/90" />
          <button
            onClick={handleLogout}
            className="flex-1 px-4 py-3 rounded-lg
            bg-linear-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold transition-all duration-300"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuItems;