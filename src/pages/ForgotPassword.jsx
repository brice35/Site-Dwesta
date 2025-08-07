import React from "react";

function ForgotPassword() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/orange-bg.png')" }}
    >
      <div className="bg-transparent text-white text-center px-4 py-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Mot de passe oublié</h1>

        <p className="mb-4">
          Entrez votre email pour réinitialiser votre mot de passe.
        </p>

        <input
          type="email"
          placeholder="Adresse email"
          className="w-full p-2 mb-6 rounded-md shadow-md text-black"
        />

        <button className="bg-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition">
          Envoyer le lien
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
