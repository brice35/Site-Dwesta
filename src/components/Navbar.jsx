import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-orange-500 text-black px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/dwesta.png" alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-lg">Dwesta</span>
        </NavLink>

        {/* Icône burger (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu principal (desktop) */}
        <ul className="hidden md:flex gap-6 font-medium items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-white hover:underline ${
                  isActive ? 'font-bold' : ''
                }`
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                `hover:text-white hover:underline ${
                  isActive ? 'font-bold' : ''
                }`
              }
            >
              Nos solutions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-white hover:underline ${
                  isActive ? 'font-bold' : ''
                }`
              }
            >
              Nous contacter
            </NavLink>
          </li>
          <li>
            <a href="#" className="hover:text-white hover:underline">
              Demander un devis
            </a>
          </li>
          <li>
            <FaSearch className="cursor-pointer hover:text-white" />
          </li>
          <li>
            <button className="bg-white text-orange-500 px-4 py-1 rounded-full font-semibold hover:bg-orange-100 transition">
              Se connecter
            </button>
          </li>
        </ul>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 font-medium">
          <li>
            <NavLink to="/" onClick={closeMenu} className="block hover:underline">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/solutions" onClick={closeMenu} className="block hover:underline">
              Nos solutions
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu} className="block hover:underline">
              Nous contacter
            </NavLink>
          </li>
          <li>
            <a href="#" className="block hover:underline">
              Demander un devis
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <FaSearch />
            <span>Recherche</span>
          </li>
          <li>
            <button className="bg-white text-orange-500 px-4 py-1 rounded-full font-semibold hover:bg-orange-100 transition">
              Se connecter
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
