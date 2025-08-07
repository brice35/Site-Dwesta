import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setSuccess("Compte créé avec succès ! Vérifie ton email.");
      setError("");

      // Rediriger après un petit délai pour laisser le message s'afficher
      setTimeout(() => {
        navigate("/Connexion");
      }, 2000);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/orange-bg.png')" }}
    >
      <div className="bg-transparent text-white text-center px-4 py-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Créer un compte</h1>

        <input
          type="text"
          placeholder="Nom complet"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-2 mb-4 rounded-md shadow-md text-black"
        />

        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded-md shadow-md text-black"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 rounded-md shadow-md text-black"
        />

        <button
          onClick={handleSignup}
          className="bg-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
        >
          Créer un compte
        </button>

        {error && <p className="text-red-300 mt-4">{error}</p>}
        {success && <p className="text-green-300 mt-4">{success}</p>}
      </div>
    </div>
  );
}

export default Signup;
