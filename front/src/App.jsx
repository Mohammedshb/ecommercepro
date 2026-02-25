import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";

import Order from "./pages/Order.jsx"; 
import Verify from "./pages/Verify.jsx";
import MyOrders from "./pages/MyOrders.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Home from "./pages/Home.jsx";
 
import ShopContextProvider from "./context/ShopContext.jsx";



const App = () => {
  return (
    <ShopContextProvider>
      <Header/>
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/product/:productId" element={<Product />}/>
         <Route path="/cart" element={<Cart />}/>
         <Route path="/myorders" element={<MyOrders/>}/>
         <Route path="/login" element={<Login />}/>
          <Route path="/verify" element={<Verify />}/>
         <Route path="/order" element={<Order />}/>
         <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </ShopContextProvider>
  )
};

export default App