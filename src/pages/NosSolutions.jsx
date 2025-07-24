import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const NosSolutions = () => {
  return (
    <div className="bg-gradient-to-b from-white via-[#f9f8fc] to-[#ebe8f8] py-16 px-4 sm:px-10 text-black">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Nos solutions de <span className="text-[#000]">développement web et mobile</span>
      </h2>

      <p className="text-center text-lg max-w-3xl mx-auto mb-10">
        Des sites performants, des applications intuitives, un accompagnement expert à chaque étape.<br />
        Chez DWESTA, nous concevons des solutions web sur mesure pour répondre à vos besoins métiers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Bloc 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Sites vitrines</h3>
          <ul className="space-y-2">
            <li><CheckCircle className="inline mr-2 text-green-500" />Design personnalisé</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Compatible mobile et tablette</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Référencement naturel optimisé (SEO)</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Assistance 6j/7 et support utilisateurs</li>
          </ul>
          <p className="mt-4 text-orange-500 font-semibold">À partir de 549 414 FCFA</p>
        </div>

        {/* Bloc 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Applications web basiques</h3>
          <ul className="space-y-2">
            <li><CheckCircle className="inline mr-2 text-green-500" />Authentification des utilisateurs</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Tableaux de bord et base de données</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Interface web responsive</li>
          </ul>
          <p className="mt-4 text-orange-500 font-semibold">À partir de 1 729 200 FCFA</p>
        </div>

        {/* Bloc 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Applications web avancées</h3>
          <ul className="space-y-2">
            <li><CheckCircle className="inline mr-2 text-green-500" />Statistiques personnalisées</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Modules ERP, CRM spécifiques</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Interface multi-utilisateurs & sécurité renforcée</li>
          </ul>
          <p className="mt-4 text-orange-500 font-semibold">Sur devis personnalisé</p>
        </div>

        {/* Bloc 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Plateformes SaaS (avec abonnement)</h3>
          <ul className="space-y-2">
            <li><CheckCircle className="inline mr-2 text-green-500" />Interface moderne et évolutive</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Paiements locaux & internationaux</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Interface web responsive</li>
          </ul>
          <p className="mt-4 text-orange-500 font-semibold">À partir de 3 930 000 FCFA</p>
        </div>

        {/* Bloc 5 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Optimisation SEO</h3>
          <ul className="space-y-2">
            <li><CheckCircle className="inline mr-2 text-green-500" />Analyse technique & mots-clés</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Structure SEO on-page</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Rapport d’audit & recommandations</li>
          </ul>
          <p className="mt-4 text-orange-500 font-semibold">275 100 FCFA</p>
        </div>
      </div>
    </div>
  );
};

export default NosSolutions;
