import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import SiteLayout from "./layouts/SiteLayout.jsx";
import Home from "./pages/Home.jsx";
import MenuHub from "./pages/MenuHub.jsx";
import Category from "./pages/Category.jsx";
import ItemDetail from "./pages/ItemDetail.jsx";
import Bytes from "./pages/Bytes.jsx";
import BytesCategory from "./pages/BytesCategory.jsx";
import Order from "./pages/Order.jsx";
import About from "./pages/About.jsx";
import Location from "./pages/Location.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuHub />} />
          <Route path="/menu/:category" element={<Category />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/bytes" element={<Bytes />} />
          <Route path="/bytes/:category" element={<BytesCategory />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}
