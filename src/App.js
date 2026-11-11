import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { CartProvider } from "./context/CartContext";

// HashRouter is used because it works on GitHub Pages without extra setup
function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Navbar />
        <main className="min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </CartProvider>
  );
}

export default App;
