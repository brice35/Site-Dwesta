import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookMessenger } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-[#fff3e6] px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Vous envisagez un projet ?<br />Prenez contact avec nous.
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Formulaire de contact */}
        <form className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nom *"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Téléphone *"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email *"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Société"
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <textarea
            placeholder="Message..."
            rows="4"
            className="w-full border border-gray-300 p-2 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
          >
            Envoyer →
          </button>
        </form>

        {/* Infos de contact */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-bold text-lg">Discutez avec nous</h3>
            <p className="text-sm text-gray-600 mb-2">Nous sommes disponibles 24/7</p>
            <ul className="flex gap-6 text-2xl text-purple-700">
              <li>
                <a
                  href="https://wa.me/23674019849"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-green-600 transition"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dwesta_officiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://m.me/dwesta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Messenger"
                  className="hover:text-blue-500 transition"
                >
                  <FaFacebookMessenger />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Envoyez-nous un mail</h3>
            <p className="text-sm text-gray-600">Notre équipe répond rapidement à vos demandes.</p>
            <p className="underline text-purple-700 mt-2">contact@dwesta.com</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Pour plus d'informations</h3>
            <p className="text-sm text-gray-600">Demander une assistance immédiate</p>
            <p className="mt-2 font-semibold">+236 74 01 98 49</p>
          </div>
        </div>
      </div>

      {/* Carte */}
      <div className="mt-16 border-t-2 border-purple-500 pt-10">
        <img
          src="/map.png"
          alt="Carte"
          className="w-full h-auto object-cover rounded-md shadow"
        />
      </div>
    </div>
  );
}
