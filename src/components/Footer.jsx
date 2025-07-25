import { FaWhatsapp, FaInstagram, FaFacebookMessenger } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-center text-sm text-white py-6 mt-10 font-medium">
      <div className="flex items-center justify-center gap-2 mb-4">
        <img src="/dwesta.png" alt="Logo" className="w-8 h-8" />
        <span className="font-bold text-lg">Dwesta</span>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-4 font-medium">
        <a href="#">PAGES</a>
        <a href="#">EXPERTISES</a>
        <a href="#">SERVICES</a>
      </div>

      {/* Icônes sociales avec liens */}
      <div className="flex justify-center gap-6 mb-4 text-white text-xl">
        <a
          href="https://wa.me/2362401940" // Numéro WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-green-500 transition"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.instagram.com/dwesta_officiel" // Lien Instagram
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://m.me/dwesta" // Page Messenger (nom de page Facebook)
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Messenger"
          className="hover:text-blue-500 transition"
        >
          <FaFacebookMessenger />
        </a>
      </div>

      <p>Copyright © 2025 All rights reserved - Skill Flex</p>
    </footer>
  );
}
