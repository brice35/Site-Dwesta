import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // ✅ NavLink pour les liens actifs

export default function Navbar() {
  return (
    <nav className="bg-orange-500 text-black px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/dwesta.png" alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-lg">Dwesta</span>
        </NavLink>
      </div>

      <ul className="hidden md:flex gap-6 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-200 hover:text-white hover:underline ${
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
              `transition duration-200 hover:text-white hover:underline ${
                isActive ? 'font-bold' : ''
              }`
            }
          >
            Nos solutions
          </NavLink>
        </li>
        <li>
          <a
            href="#"
            className="transition duration-200 hover:text-white hover:underline"
          >
            Nous contacter
          </a>
        </li>
        <li>
          <a
            href="#"
            className="transition duration-200 hover:text-white hover:underline"
          >
            Demander un devis
          </a>
        </li>
      </ul>

      <div className="flex gap-4 items-center">
        <FaSearch className="cursor-pointer hover:text-white transition duration-200" />
        <button className="bg-orange-500 text-white px-4 py-1 rounded-full font-semibold hover:bg-orange-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-orange-500">
          Se connecter
        </button>
      </div>
    </nav>
  );
}
