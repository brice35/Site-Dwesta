import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-orange-500 text-black px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2">
        <img src="/dwesta.png" alt="Logo" className="w-8 h-8" />
        <span className="font-bold text-lg">Dwesta </span>
      </div>
      <ul className="hidden md:flex gap-6 font-medium">
        <li><a href="#">Nos solutions</a></li>
        <li><a href="#">Nous contacter</a></li>
        <li><a href="#">Demander un devis</a></li>
      </ul>
      <div className="flex gap-4 items-center">
        <FaSearch className="cursor-pointer" />
        <button className="bg-orange-500 text-white px-4 py-1 rounded-full font-semibold hover:bg-orange-100 rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-orange-500">
          Se connecter
        </button>
      </div>
    </nav>
  );
}
