import React, { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const suggestions = [
  { name: "Accueil", path: "/" },
  { name: "Nos solutions", path: "/solutions" },
  { name: "Nous contacter", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    checkUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null); // Mise à jour immédiate de l'état user
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const match = suggestions.find((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (match) navigate(match.path);
    }
    setShowSearch(false);
    setSearchTerm("");
  };

  const filteredSuggestions = suggestions.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="bg-orange-500 text-black px-6 py-4 shadow-md relative z-50">
      <div className="flex items-center justify-between relative">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/dwesta.png" alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-lg">Dwesta</span>
        </NavLink>

        {/* Desktop navigation */}
        <ul className="hidden md:flex top-center gap-6 font-medium items-center relative">
          

          {/* Liens standard */}
          {suggestions.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-white hover:underline ${
                    isActive ? "font-bold" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Connexion / Mon compte */}
          <li>
            {user ? (
              <NavLink
                to="/mon-compte"
                className="bg-white text-orange-500 px-4 py-1 rounded-full font-semibold hover:bg-orange-100 transition"
              >
                Mon compte
              </NavLink>
            ) : (
              <NavLink
                to="/connexion"
                className="bg-white text-orange-500 px-4 py-1 rounded-full font-semibold hover:bg-orange-100 transition"
              >
                Se connecter
              </NavLink>
            )}
          </li>
        </ul>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu déroulant */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-4 font-medium">
          {suggestions.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className="block hover:underline"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            {user ? (
              <NavLink
                to="/mon-compte"
                onClick={closeMenu}
                className="block hover:underline"
              >
                Mon compte
              </NavLink>
            ) : (
              <NavLink
                to="/connexion"
                onClick={closeMenu}
                className="block hover:underline"
              >
                Se connecter
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
