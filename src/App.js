import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NosSolutions from "./pages/NosSolutions";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import MonCompte from "./pages/MonCompte";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<NosSolutions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connexion" element={<Connexion />} />{" "}
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mon-compte" element={<MonCompte />} />
            {/* ✅ Nouvelle route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
