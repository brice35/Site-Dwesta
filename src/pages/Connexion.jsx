import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Email ou mot de passe incorrect.");
    } else {
      setError("");
      navigate("/"); // redirection vers la page d'accueil
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/orange-bg.png')" }}
    >
      <div className="bg-transparent text-white text-center px-4 py-8 max-w-md w-full">
        <h2 className="text-xl text-white font-semibold mb-2 text-left">Adresse mail :</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded-md shadow-md text-black mb-4"
        />

        <h2 className="text-xl text-white font-semibold mb-2 text-left">Mot de passe :</h2>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded-md shadow-md text-black mb-4"
        />

        <button
          onClick={handleLogin}
          className="inline-block bg-none text-purple-400 font-semibold px-6 py-2 rounded-full  hover:bg-orange-500 hover:text-white transition mb-4"

        >
          Se connecter
        </button>

        {error && <p className="text-red-300 mb-4">{error}</p>}

        <div className="mb-6">
          <Link to="/forgot-password" className="text-blue-400 underline hover:text-white">
            Mot de passe oublié
          </Link>
        </div>

        <p className="text-black mb-2">
          Vous n'avez pas de compte ? Inscrivez-vous ici :
        </p>

        <Link
          to="/signup"
          className="inline-block bg-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-red-700 transition"
        >
          S'inscrire
        </Link>
      </div>
    </div>
  );
}
