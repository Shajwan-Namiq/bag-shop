import "./App.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Navigate,
} from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import CardsDetail from "./components/CardsDetail";
import NotFound from "./components/NotFound";
import CartValue from "./components/CartValue";
import Form from "./components/Form";
import Favourite from "./components/Favourite";
 import Checkout from "./components/Checkout";
 


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/cartValue" element={<CartValue />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/form" element={<Form />} />
        <Route path="/cardsDetail" element={<CardsDetail />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
}

export default App;
