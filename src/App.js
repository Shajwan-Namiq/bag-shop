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


function App() {
  return (
    <div>
      
        <Navbar />

        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/cardsDetail" element={<CardsDetail />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      
    </div>
  );
}

export default App;
