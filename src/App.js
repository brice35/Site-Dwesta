import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NosSolutions from "./pages/NosSolutions";
import Contact from "./pages/Contact"; // ✅ import de la page Contact

function App() {
  return (
    <Router>
      {/* Le Router englobe tout */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<NosSolutions />} />
            <Route path="/contact" element={<Contact />} />{" "}
            {/* ✅ nouvelle route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
