// src/pages/MonCompte.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function MonCompte() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data?.user) {
        navigate("/connexion"); // Redirige si non connecté
      } else {
        setUser(data.user);
      }
    };

    getUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/connexion");
  };

  return (
    <div className="min-h-screen bg-[#fff3e6] flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-700">Mon Compte</h1>

        {user ? (
          <div className="space-y-4 text-gray-700">
            <p><strong>Email :</strong> {user.email}</p>
            <p><strong>Créé le :</strong> {new Date(user.created_at).toLocaleDateString()}</p>
            {/* Ajoutez d'autres champs personnalisés ici si vous les stockez */}
            <button
              onClick={handleLogout}
              className="mt-6 w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition"
            >
              Se déconnecter
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500">Chargement...</p>
        )}
      </div>
    </div>
  );
}
