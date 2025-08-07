import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

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
          href="https://www.facebook.com/dwesta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-500 transition"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.linkedin.com/company/dwesta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-300 transition"
        >
          <FaLinkedinIn />
        </a>
      </div>

      <p>Copyright © 2025 All rights reserved - Skill Flex</p>
    </footer>
  );
}
