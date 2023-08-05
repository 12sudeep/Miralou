import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Prodcuts from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Prodcuts />} />
        <Route path="/shop" element={<div>Shop</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
      </Routes>
    </div>
  );
}

export default App;
