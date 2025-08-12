import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    objet: '',
    prenom: '',
    nom: '',
    telephone: '',
    email: '',
    societe: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { objet, prenom, nom, telephone, email, societe, message } = formData;

    const { error } = await supabase.from('messages').insert([
      { objet, prenom, nom, telephone, email, societe, message },
    ]);

    if (error) {
      setError("Erreur lors de l’envoi du message.");
      setSuccess(false);
    } else {
      setSuccess(true);
      setError(null);
      setFormData({
        objet: '',
        prenom: '',
        nom: '',
        telephone: '',
        email: '',
        societe: '',
        message: '',
      });
    }
  };

  return (
    <div className="bg-[#fff3e6] px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Vous envisagez un projet ?<br />Prenez contact avec nous.
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Formulaire de contact */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-4">
          
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Nom */}
            <input
              name="nom"
              type="text"
              placeholder="Nom *"
              value={formData.nom}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />
            {/* Prénom */}
            <input
              name="prenom"
              type="text"
              placeholder="Prénom *"
              value={formData.prenom}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />

           
             {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />

            {/* Téléphone */}
            <input
              name="telephone"
              type="text"
              placeholder="Téléphone *"
              value={formData.telephone}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded "
              required
            />

           

            {/* Société */}
            <input
              name="societe"
              type="text"
              placeholder="Société"
              value={formData.societe}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded "
            />
          </div>
          {/* Objet */}
          <input
            name="objet"
            type="text"
            placeholder="Objet *"
            value={formData.objet}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          ></textarea>

          {/* Bouton */}
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
          >
            Envoyer →
          </button>

          {/* Messages d'état */}
          {success && <p className="text-green-600 font-medium">Message envoyé avec succès ✅</p>}
          {error && <p className="text-red-600 font-medium">{error}</p>}
        </form>

        {/* Infos de contact */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-bold text-lg">Discutez avec nous</h3>
            <p className="text-sm text-gray-600 mb-2">Nous sommes disponibles 24/7</p>
            <ul className="flex gap-6 text-2xl text-blue-400">
              <li>
                <a
                  href="https://www.facebook.com/dwesta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-blue-600 transition"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/dwesta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-blue-500 transition"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.whatsapp.com/dwesta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Whatsapp"
                  className="hover:text-green-300 transition"
                >
                  <FaWhatsapp />
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
          src="/map-1.png"
          alt="Carte"
          className="w-full h-auto object-cover rounded-md shadow"
        />
      </div>
    </div>
  );
}
